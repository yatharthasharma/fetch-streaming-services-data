const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app
  .use(cookieParser())
  .use("/callback", express.static(__dirname + "/public/callback"))
  .use("/", express.static(__dirname + "/public/home"));

console.log("Listening on 8000");
app.listen(8000);
