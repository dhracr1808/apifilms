const express = require("express");

const { PORT } = require("./config/config");
const app = express();

app.get("/", (req, res) => {
  res.send("hola heroku");
});

app.listen(PORT, function () {
  console.log("server on port ", PORT);
});
