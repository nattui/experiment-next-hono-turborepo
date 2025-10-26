import { seed } from "drizzle-seed"
import { client, db } from "@/db"
import { ACCOUNT, PROFILE, USER } from "@/schema/user.schema"

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }

  await seed(
    db,
    { account: ACCOUNT, profile: PROFILE, user: USER },
    { count: 10 },
  ).refine((f) => ({
    account: {
      columns: {
        password: f.loremIpsum({ sentencesCount: 1 }),
        provider: f.valuesFromArray({
          values: [
            {
              values: ["credentials"],
              weight: 1,
            },
            {
              values: ["github"],
              weight: 0,
            },
            {
              values: ["google"],
              weight: 0,
            },
          ],
        }),
      },
    },
    profile: {
      columns: {
        image: f.string({
          isUnique: false,
        }),
      },
    },
    user: {
      columns: {
        email: f.email(),
        emailVerified: f.boolean(),
        name: f.fullName(),
        role: f.valuesFromArray({
          values: [
            {
              values: ["admin"],
              weight: 0,
            },
            {
              values: ["user"],
              weight: 1,
            },
          ],
        }),
      },
    },
  }))

  await client.end()
}

main()
