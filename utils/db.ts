import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "./schema"
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: 'postgresql://masternischay:eQdzuS4I6rNP@ep-bold-sunset-a18o47nc.ap-southeast-1.aws.neon.tech/ai-content?sslmode=require' });

async function testConnection() {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}

testConnection();

export const db = drizzle(pool, { schema });
console.log('🚀 Drizzle instance created');