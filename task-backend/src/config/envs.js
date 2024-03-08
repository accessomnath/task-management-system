import { config } from "dotenv";
config();

export const envs = {
  env: process.env.NODE_ENV || "dev",
  port: Number(process.env.PORT) || 5001,

  /* MySQL DB */
  devSqlDb: {
    host: process.env.DEV_SQL_HOST,
    username: process.env.DEV_SQL_USERNAME || "",
    password: process.env.DEV_SQL_PASSWORD || "",
    database: process.env.DEV_SQL_DB_NAME || "",
  },
};