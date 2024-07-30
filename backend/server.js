const express = require("express");
const app = express();
var cors = require("cors");

const port = 8080;
app.use(cors());

app.get("/api/home", (req, res) => {
  res.send([{ name: "samarth" }]);
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
