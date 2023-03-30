const express = require('express');
const session = require('express-session');
const axios = require('axios');

const app = express();

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.post('/api/accept-cookies', (req, res) => {
  req.session.acceptedCookies = true;
  res.sendStatus(200);
});

app.post('/api/decline-cookies', (req, res) => {
  req.session.acceptedCookies = false;
  res.sendStatus(200);
});

app.use((req, res, next) => {
  if (req.session.acceptedCookies === true) {
    res.setHeader('Cookie', 'accepted');
  } else {
    res.setHeader('Cookie', 'declined');
  }
  next();
});

// your other routes and middleware

const port = process.env.PORT || 5000;
app.listen(port, () => console.log())
