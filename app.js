
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');
var errHandler = require('./middlewares').errHandler;


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(session({
  secret : config.session_secret,
  store : new MongoStore({
    url : config.db
  }),
  cookie: { maxAge: 60 * 1000 },
  resave : true,
  saveUninitialized : true
}));


app.use('/', routes);

app.use(errHandler.notFound);
if (!config.debug) {
  app.use(errHandler.serverErr);
}


module.exports = app;


app.listen(config.port, function () {
  console.log('Your Blog now running on port %s in %s mode',
    config.port, config.debug?'debug':'deploy');
});
