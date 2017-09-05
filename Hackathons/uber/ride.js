var Uber = require('node-uber');

var uber = new Uber({
  client_id: 'lvXvafjsxH9wWNyRuPYhZeVs_aO1guef',
  client_secret: '5wmWuNCg-KPSrxYqO47cr_bPqs7vIOytvAHNtJJ7',
  server_token: 'mz9vrMMCU0q5ZZwG2tBeCKjPMqn8SLrVUSBi-MiT',
  redirect_uri: 'http://localhost:3000/api/callback',
  name: 'where',
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});


var express = require('express')
var url = require('url')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.get('/api/login', function(request, response) {
  var url = uber.getAuthorizeUrl(['all_trips']);
  response.redirect(url);
});


app.get('/api/callback', function(request, response) {
  uber.authorization({ authorization_code: request.query.code },
    function (err, accessToken, refreshToken) {
debugger
    if (err) {
        throw err;
      }

uber.user.getHistory(0, 5, function(err, response){
          console.log('response.history: ', response.history);
      });
   });
});

app.get('/api/products', function(request, response) {
  // extract the query from the request URL
  var query = url.parse(request.url, true).query;

  // if no query params sent, respond with Bad Request
  if (!query || !query.lat || !query.lng) {
    response.sendStatus(400);
  } else {
    uber.products.getAllForLocationAsync(query.lat, query.lng)
    .then(function(res) {
        response.json(res);
    })
    .error(function(err) {
      console.error(err);
      response.sendStatus(500);
    });
  }
});

