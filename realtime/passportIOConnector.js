

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passportSocketIo = require('passport.socketio');
const cookieParser = require('cookie-parser');
const config = require('../config/secret');

const sessionStore = new MongoStore({ url: config.database, autoReconnect: true });

const passportSocketMiddleware = passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'connect.sid',
    secret: config.secret,
    store: sessionStore, 
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  });
  
  function onAuthorizeSuccess(data, accept) {
    console.log("successful connection");
    accept();
  }
  
  function onAuthorizeFail(data, message, error, accept) {
    console.log("failed connection");
    if (error) accept(new Error(message));
  }

  module.exports = {

    passportSocketMiddleware,
    sessionStore

  }