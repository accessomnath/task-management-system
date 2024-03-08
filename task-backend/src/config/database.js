import { Sequelize } from "sequelize";
import { envs } from "./index.js";

const DB = process.env.NODE_ENV === "dev" ? envs.devSqlDb : envs.devSqlDb;

const sequelize = new Sequelize({
  username: DB.username,
  password: DB.password,
  database: DB.database,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the client database:", error);
  }
};

export { connect, sequelize };
