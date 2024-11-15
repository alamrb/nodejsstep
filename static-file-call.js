const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./html/index.html"));
//   // console.log("hello File");
// });

app.all("*", (req, res) => {});

app.listen(5000, () => {
  console.log("server is running on your port 5000.....");
});
