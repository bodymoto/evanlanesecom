const express = require('express');
const path = require('path');


const app = express();
const port = 8000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`We are listening on localhost:${port}`);
});