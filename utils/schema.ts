import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
    id:serial('id').primaryKey(),
    formData:varchar('form_data').notNull(),
    aiResponse:text('ai_response'),
    templateSlug:varchar('templateSlug'),
    createdBy:varchar('email').notNull(),
    createdAt:varchar('createdAt'),

})