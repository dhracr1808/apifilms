const express = require("express");

const { PORT } = require("./config/config");
const app = express();

app.get("/", (req, res) => {
  res.send("hola heroku");
});

app.listen(process.env.PORT, function () {
  console.log("server on port ", process.env.PORT);
});
