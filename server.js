const express = require('express');
const path = require('path');


const app = express();
const port = 8000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

// video source
app.get("/video/pexels-lam-loi-3492325-1280x720-31fps.mp4", (req, res) => {
  res.sendFile(path.join(__dirname, "/video/pexels-lam-loi-3492325-1280x720-31fps.mp4"));
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`We are listening on localhost:${port}`);
});