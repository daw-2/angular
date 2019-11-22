let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(function (req, res, next) {
  res.send('Hello');
  next();
});

io.on('connection', function (socket) {
  let user = socket.id;
  console.log(user+' connected');

  socket.on('disconnect', function () {
    console.log(user+' disconnected');
  });

  socket.on('message', function (message) {
    console.log(message);
    io.emit('message', {
      user: message.user,
      value: message.value
    });
  });
});

http.listen(4000, function () {
  console.log('It\'s works');
});
