import express from "express";
import { PORT } from "./config/config";
import { db } from "./db";
import { Films } from "./models/films";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const films = await Films.findAll();
  res.send(films);
});

app.post("/", async (req, res) => {
  const newFilms = await Films.create(req.body);
  res.send(newFilms);
});

db.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("db connected and server on port ", PORT);
  });
});
