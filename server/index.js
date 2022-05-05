import express from "express";

import { PORT } from "./config/config";
const app = express();

app.get("/", (req, res) => {
  res.send("hola heroku estoy ejecutando babel");
});

app.listen(process.env.PORT, function () {
  console.log("server on port ", process.env.PORT);
});
