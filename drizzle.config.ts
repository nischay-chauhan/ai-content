import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://masternischay:eQdzuS4I6rNP@ep-bold-sunset-a18o47nc.ap-southeast-1.aws.neon.tech/ai-content?sslmode=require',
  },
});