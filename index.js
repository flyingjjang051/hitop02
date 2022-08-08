const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/introduce", (req, res) => {
  res.render("introduce");
});
app.get("/greeting", (req, res) => {
  res.render("greeting");
});

app.listen(8099, () => {
  console.log(`8099에서 서버 대기중`);
});
