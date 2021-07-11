require("dotenv").config();
const express = require("express");
const http = require("http");
// const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");
const socketManager = require("./app/socketManager");
const path = require('path');
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use([
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
  Routes
])

const io = (module.exports.io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
}));

io.on("connection", socketManager);

var cachedToken = null;

function getNewToken() {
  twilio.tokens.create({}, function (err, token) {
    if (!err && token) {
      cachedToken = token;
    }
  });
}

// fetch token initially
getNewToken();
// refetch new token every 15 mins and save to cache
setInterval(getNewToken, 1000 * 60 * 10);

app.get('/api/get-icserver', function (req, res) {
  if (!cachedToken) {
    res.status(400).send('Problem getting ice servers data from Twilio')
  } else {
    res.json(cachedToken.iceServers);
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
