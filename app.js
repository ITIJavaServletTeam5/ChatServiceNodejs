var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')

var app = express()
app.use(express.static('public'))

app.get('/rest/', function(req, res) {
	res.send('Hello World')
});


var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Chat Service app listening at http://%s:%s', host, port)
})
