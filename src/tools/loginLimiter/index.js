const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts, please try again later",
});

// Apply rate limiter to the login endpoint
app.post("/login", loginLimiter, (req, res) => {
  // Your login logic goes here
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
