import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const emailSubscriptions = pgTable("email_subscriptions", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
  createdAt: timestamp("created_at", { mode: "date", precision: 3 }).default(
    new Date(),
  ),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date(),
  ),
  deleted_at: timestamp("deleted_at", { mode: "date", precision: 3 }),
});

export type EmailSubscriptions = typeof emailSubscriptions.$inferSelect;
export type NewEmailSubscription = typeof emailSubscriptions.$inferInsert;
