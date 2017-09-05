const Uber = require('node-uber');
const url = require('url');
const express = require('express')
const app = express()
const port = 3000;

const uber = new Uber({
  client_id: 'lvXvafjsxH9wWNyRuPYhZeVs_aO1guef',
  client_secret: '5wmWuNCg-KPSrxYqO47cr_bPqs7vIOytvAHNtJJ7',
  server_token: 'mz9vrMMCU0q5ZZwG2tBeCKjPMqn8SLrVUSBi-MiT',
  redirect_uri: 'http://localhost:3000/api/callback',
  name: 'replaceMe',
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});


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

app.get('/api/login', function(request, response) {
  const redirectUrl = uber.getAuthorizeUrl(['ride_widgets']);
  response.redirect(redirectUrl);
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
})