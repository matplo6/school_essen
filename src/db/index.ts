import {drizzle} from "drizzle-orm/mysql2";
import mysql from "mysql2"

const connection = mysql.createConnection({
    uri: process.env.DATABASE_URL!,
});
export const db = drizzle(connection);
