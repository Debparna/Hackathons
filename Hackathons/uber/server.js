const Uber = require('node-uber')
var uber = new Uber({
	client_id: 'lvXvafjsxH9wWNyRuPYhZeVs_aO1guef'
	, client_secret: '5wmWuNCg-KPSrxYqO47cr_bPqs7vIOytvAHNtJJ7'
	, server_token: 'mz9vrMMCU0q5ZZwG2tBeCKjPMqn8SLrVUSBi-MiT'
	, redirect_uri: 'http://localhost:3000/api/callback'
	, name: 'where'
	, language: 'en_US', // optional, defaults to en_US
	sandbox: true // optional, defaults to false
});
var express = require('express')
var app = express()
app.get('/', function (req, res) {
	res.send('bak')
})
app.get('/api/login', function (request, response) {
	var url = uber.getAuthorizeUrl(['history', 'profile', 'places']);
	response.redirect(url);
});
//Receive redirect and get an access token
app.get('/api/callback', function (request, response) {
	uber.authorization({
		authorization_code: request.query.code
	}, function (err, accessToken, refreshToken) {
		if (err) {
			throw err;
		}
		uber.user.getHistory(0, 50, function (err, response)) {
			console.log('response.history: ', response.history)
		}
	});
});
//sreez try code
uber.getAuthorizeUrl(['history', 'profile', 'request', 'places']);
uber.requests.getMapByID(request_id, callback);
app.listen(3000)