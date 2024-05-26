import { env } from "@/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(env.DATABASE_URL);

/**
 * For connection pooling use the following:
 *
 * Disable prefetch as it is not supported for "Transaction" pool mode
 *
 * const client = postgres(connectionString, { prepare: false })
 */

export const db = drizzle(client, { schema });
