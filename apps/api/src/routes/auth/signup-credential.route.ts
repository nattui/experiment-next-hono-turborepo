import { ORPCError } from "@orpc/server"
import { hash } from "argon2"
import { ACCOUNT, eq, PROFILE, USER } from "db"
import { z } from "zod"
import { db } from "@/db"
import { base } from "@/routes/context"
import { setSession } from "@/utils/session.util"

const schemaSignupCredential = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
})

export const signupCredential = base
  .route({
    method: "POST",
  })
  .input(schemaSignupCredential)
  .handler(async (options) => {
    try {
      const { email, name, password } = options.input

      // Check if user with this email already exists
      const [existingUser] = await db
        .select()
        .from(USER)
        .where(eq(USER.email, email))
        .limit(1)

      if (existingUser) {
        throw new ORPCError("CONFLICT", {
          message: "User with this email already exists.",
        })
      }

      const hashedPassword = await hash(password)

      await db.transaction(async (transaction) => {
        // Create new user
        const [newUser] = await transaction
          .insert(USER)
          .values({ email, name })
          .returning()

        // Create account for the user
        const account = transaction.insert(ACCOUNT).values({
          password: hashedPassword,
          userId: newUser.id,
        })

        // Create profile for the user
        const profile = transaction.insert(PROFILE).values({
          userId: newUser.id,
        })

        await Promise.all([account, profile])

        await setSession({
          context: options.context.honoContext,
          id: newUser.id,
          now: new Date(),
        })
      })
    } catch (error) {
      if (error instanceof ORPCError) {
        throw error
      }

      throw new ORPCError("INTERNAL_SERVER_ERROR", {
        data: error,
        message: "An unexpected error occurred. Please try again later.",
      })
    }
  })
