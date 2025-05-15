import { neon } from "@neondatabase/serverless"

// Initialize database connection
export const sql = neon(process.env.DATABASE_URL!)

// TODO: Add any additional database utility functions here
