var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')

// Jersey Server IP
var SERVER_IP = "http://localhost:8084/ChatService"

var app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/rest/register', function(req, res) {
	request.post({url: (SERVER_IP + "/rest/register"), json: req.body}, function(error, response, body) {
		res.send(body)
	})
})

app.post('/rest/login', function(req, res) {
	request.post({url: (SERVER_IP + "/rest/login"), json: req.body}, function(error, response, body) {
		res.send(body)
	})
})

app.post('/rest/view', function(req, res) {
	request.post({url: (SERVER_IP + "/rest/view"), json: req.body}, function(error, response, body) {
		res.send(body)
	})
})

app.post('/rest/edit', function(req, res) {
	request.post({url: (SERVER_IP + "/rest/edit"), json: req.body}, function(error, response, body) {
		res.send(body)
	})
})

// YOU CAN USE THIS FOR TESTING THE SERVICE
// request.post({url: (SERVER_IP + "/rest/edit"), json: req.body}, function(data) {
// 	res.send(data)
// })


// CHAT SERVICE IF WE HAVE THE TIME TO
// app.get('/rest/send', function(req, res) {
// 	messages[messages.length] = {source: req.query.username, message: req.query.message}
// 	res.send({success: true})
// });
// app.get('/rest/receive', function(req, res) {
// 	res.send({success: true, online: online, messages: messages})
// });




var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Chat Service app listening at http://%s:%s', host, port)
})
