/*var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World\n');
	res.end('bak sriya\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
*/

const Uber = require ('node-uber')
var uber = new Uber({
  client_id: 'e9pYAFEbSpa89dwMl7ah2nFKp30Uofod',
  client_secret: 'Xsn9gRAT14My4oWoMxUeP8PAjwOVKjsz9fqRi0A0',
  server_token: '1dEdg32NQap5fIkR6glfquchwJ38XYzcrucF-nW6',
  redirect_uri: 'http://localhost:3000/api/callback',
  name: 'where',
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('bak')
})

app.get('/api/login', function(request, response) {
  var redirectUrl = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
  response.redirect(url);
});

//Receive redirect and get an access token
 
app.get('/api/callback', function(request, response) {
 uber.authorization({ authorization_code: request.query.code },
   function (err, accessToken, refreshToken) {
     if (err) {
       throw err;
     }
     uber.user.getHistory(0, 50, function(err, response) {
       console.log('response.history: ', response.history);
     });
   });
});

app.listen(3000)
