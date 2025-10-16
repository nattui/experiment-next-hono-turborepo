import { TRPCError } from "@trpc/server"
import { verify } from "argon2"
import { ACCOUNT, and, db, eq, USER } from "db"
import { z } from "zod"
import { publicProcedure } from "@/routes/router"
import { setSession } from "@/utils/session.util"

const schemaSigninCredential = z.object({
  email: z.string(),
  password: z.string(),
})

export function routeAuthSigninCredential() {
  return publicProcedure
    .input(schemaSigninCredential)
    .mutation(async (options) => {
      try {
        const { email, password } = options.input

        // Check if user with this email exists
        const [existingUser] = await db
          .select({
            hashedPassword: ACCOUNT.password,
            id: USER.id,
            name: USER.name,
          })
          .from(USER)
          .innerJoin(
            ACCOUNT,
            and(
              eq(ACCOUNT.userId, USER.id),
              eq(ACCOUNT.provider, "credentials"),
            ),
          )
          .where(eq(USER.email, email))
          .limit(1)

        if (!existingUser) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User with this email does not exist.",
          })
        }

        const hashedPassword = existingUser.hashedPassword ?? ""
        const isPasswordCorrect = await verify(hashedPassword, password)

        if (!isPasswordCorrect) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid email or password.",
          })
        }

        await setSession({
          context: options.ctx.honoContext,
          id: existingUser.id,
          now: new Date(),
        })
      } catch (error) {
        if (error instanceof TRPCError) throw error
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred. Please try again later.",
        })
      }
    })
}
