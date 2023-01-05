const express = require("express");
const morgan = require('morgan')
const app = express();
app.use(morgan('dev'))
app.get("/", (req, res) => {
  res.send('Hello, Cyclic!');
});
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});