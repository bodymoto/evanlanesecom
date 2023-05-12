const express = require('express');
const path = require('path');


const app = express();
const port = 8000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

app.get("/colo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/components/colo.png"));
});

app.get("/pexels-stijn-dijkstra-13008655-720x1080-25fps.mp4", (req, res) => {
  res.sendFile(path.join(__dirname, "/components/pexels-stijn-dijkstra-13008655-720x1080-25fps.mp4"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`We are listening on localhost:${port}`);
});