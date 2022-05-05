import express from "express";

import { PORT } from "./config/config";
const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(PORT, function () {
  console.log("server on port ", PORT);
});
