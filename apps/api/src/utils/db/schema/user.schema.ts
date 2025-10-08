import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export type Account = typeof ACCOUNT.$inferSelect
export type Profile = typeof PROFILE.$inferSelect
export type User = typeof USER.$inferSelect

export const USER = pgTable("user", {
  createdAt: timestamp({ mode: "string" }).notNull().defaultNow(),
  email: text().unique().notNull(),
  emailVerified: boolean(),
  id: serial().primaryKey(),
  name: text().notNull(),
  role: text({ enum: ["admin", "user"] })
    .notNull()
    .default("user"),
  updatedAt: timestamp({ mode: "string" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
})

export const ACCOUNT = pgTable("account", {
  createdAt: timestamp({ mode: "string" }).notNull().defaultNow(),
  id: serial().primaryKey(),
  password: text(),
  provider: text({ enum: ["credentials", "github", "google"] })
    .notNull()
    .default("credentials"),
  userId: serial()
    .notNull()
    .references(() => USER.id, { onDelete: "cascade" }),
})

export const PROFILE = pgTable("profile", {
  createdAt: timestamp({ mode: "string" }).notNull().defaultNow(),
  id: serial().primaryKey(),
  image: text(),
  userId: serial()
    .notNull()
    .references(() => USER.id, { onDelete: "cascade" }),
})
