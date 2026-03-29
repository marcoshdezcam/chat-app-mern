// create a socket.io server
const io = require('socket.io')(3000, {
  cors: {
    origin: "https://<YOUR_BROWSER_URL>.run",
  }
});

io.on('connection', socket => {
  console.log('New user connected');

  // add a user to the list
});
