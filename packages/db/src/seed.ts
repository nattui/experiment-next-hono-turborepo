import { db } from "@/db"
import { ACCOUNT, USER } from "@/schema/user.schema"

const users = [
  {
    email: "superman@example.com",
    name: "Clark Kent",
    role: "admin" as const,
  },
  {
    email: "batman@example.com",
    name: "Bruce Wayne",
    role: "admin" as const,
  },
  {
    email: "wonderwoman@example.com",
    name: "Diana Prince",
    role: "admin" as const,
  },
  {
    email: "flash@example.com",
    name: "Barry Allen",
    role: "user" as const,
  },
  {
    email: "greenlantern@example.com",
    name: "Hal Jordan",
    role: "user" as const,
  },
  {
    email: "aquaman@example.com",
    name: "Arthur Curry",
    role: "user" as const,
  },
  {
    email: "martianmanhunter@example.com",
    name: "J'onn J'onzz",
    role: "user" as const,
  },
  {
    email: "cyborg@example.com",
    name: "Victor Stone",
    role: "user" as const,
  },
  {
    email: "greenarrow@example.com",
    name: "Oliver Queen",
    role: "user" as const,
  },
  {
    email: "hawkgirl@example.com",
    name: "Shayera Hol",
    role: "user" as const,
  },
]

async function seed() {
  console.log("🌱 Seeding users...")

  try {
    const insertedUsers = await db.insert(USER).values(users).returning()

    console.log(`✅ Successfully seeded ${insertedUsers.length} users`)

    const accounts = insertedUsers.map((user) => ({
      password: null,
      provider: "credentials" as const,
      userId: user.id,
    }))

    await db.insert(ACCOUNT).values(accounts)

    console.log(`✅ Successfully created accounts for users`)

    console.log("\n📋 Seeded users:")
    for (const user of insertedUsers) {
      console.log(`  - ${user.name} (${user.email}) - ${user.role}`)
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    throw error
  } finally {
    process.exit(0)
  }
}

seed()
