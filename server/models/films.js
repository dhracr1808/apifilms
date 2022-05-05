import S from "sequelize";
import { db as sequelize } from "./../db";

export class Films extends S.Model {}

Films.init(
  {
    title: { type: S.STRING },
    description: { type: S.STRING },
    score: { type: S.INTEGER },
    director: { type: S.STRING },
  },
  { sequelize, modelName: "film" }
);
