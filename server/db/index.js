import Sequelize from "sequelize";
import { DBNAME, DBUSERNAME, DBPASSWORD } from "./../config/config";

export const db = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
  host: "remotemysql.com", //remotemysql.com // i2ZZtBr7Mp //slSSrDfDBp
  dialect: "mysql",
  logging: false,
});
