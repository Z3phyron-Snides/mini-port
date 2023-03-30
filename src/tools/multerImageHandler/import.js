const express = require("express");
const app = express();
const handleImage = require("./handleImage");

// parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use the handleImage middleware
app.use(handleImage);

// define a route that uses the handleImage middleware
app.post("/upload-images", (req, res) => {
  console.log(req.images);
  // process uploaded images...
  res.send("Images uploaded successfully.");
});

app.listen(3500, () => {
  console.log("Server is running on port 3500.");
});
