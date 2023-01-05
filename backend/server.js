const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send('Hello, Cyclic!');
});
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});