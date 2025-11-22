import { pgTable, serial, text, timestamp, varchar, integer } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
  id: serial('id').primaryKey(),
  userId: varchar('user_id').notNull(),
  formData: varchar('form_data').notNull(),
  aiResponse: text('ai_response'),
  templateSlug: varchar('templateSlug'),
  createdBy: varchar('email').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const transactions = pgTable('transactions', {
  id: varchar('id').primaryKey(),
  userId: varchar('user_id').notNull(),
  amount: integer('amount').notNull(),
  type: varchar('type').notNull(),
  description: varchar('description'),
  paymentId: varchar('payment_id').unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const userCredits = pgTable("user_credits", {
  id: serial('id').primaryKey(),
  userId: varchar('user_id').notNull(),
  credits: integer('credits').notNull().default(3),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});