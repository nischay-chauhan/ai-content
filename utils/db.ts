import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
import { neon } from '@neondatabase/serverless';
const sql = neon('postgresql://masternischay:eQdzuS4I6rNP@ep-bold-sunset-a18o47nc.ap-southeast-1.aws.neon.tech/ai-content?sslmode=require');
export const db = drizzle(sql, { schema })