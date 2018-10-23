const http = require('http');
const app = require('./app');
const passportIOConnector = require('./realtime/passportIOConnector');

const port = process.env.PORT || 3030;

const server = http.createServer(app);
const io = require('socket.io')(server);

require('./realtime/io2')(io);
io.use(passportIOConnector.passportSocketMiddleware);

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${3030}`);
});



