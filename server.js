const express = require('express');
const path = require('path');


const app = express();
const port = 8000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

// video
app.get("/video/:video", (req, res) => {
  const video = req.params.video;
  res.sendFile(path.join(__dirname, "/video/" + video));
});

// images
app.get("/img/:image", (req, res) => {
  const image = req.params.image;
  res.sendFile(path.join(__dirname, "/img/" + image));
});

// catch-all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`We are listening on localhost:${port}`);
});