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
