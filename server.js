var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/src/index.htm');
});
app.get('/test', function (req, res) {
	res.sendFile(__dirname + '/xhr/test.json');
});

var server = app.listen(9900, function () {
	console.log("访问地址为 http://127.0.0.9900");
});