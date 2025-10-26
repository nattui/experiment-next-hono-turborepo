import { seed } from "drizzle-seed"
import { client, db } from "@/db"
import { USER } from "@/schema/user.schema"

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }

  await seed(db, { user: USER }, { count: 10 })

  await client.end()
}

main()
