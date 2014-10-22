
var express = require('express');
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

app.use(bodyParser.urlencoded({extended : false}));



app.use('/', routes);

module.exports = app;


app.listen(config.port, function () {
  console.log('Your Blog now running on port ' + config.port);
});
