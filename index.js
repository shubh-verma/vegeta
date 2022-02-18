const express = require("express");
const app = express();
const port = 3000;

const isPrime = require("./isPrime");

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/prime/:num", (req, res) => {
  console.log(req.params.num);
  res.send(isPrime(req.params.num));
});

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});
