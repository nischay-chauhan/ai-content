import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DRIZZLE_DB_URL!);
export const db = drizzle(sql, { schema })