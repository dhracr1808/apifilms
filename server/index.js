import express from "express";

import { PORT } from "./config/config";
const app = express();

app.listen(PORT, function () {
  console.log("server on port ", PORT);
});
