//  YessCss server node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    morgan  = require('morgan');

var file_to_serve = './public/webapp/index.html';

app.use(morgan('combined'))

app.use(express.static('public/webapp'));
app.use(express.static('public/assets'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
     res.sendfile(file_to_serve);
});


app.get('*', function(req, res) {
     res.sendfile(file_to_serve);
});


// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
