var express = require('express')
var url = require('url')

var app = express()


function buildFormForQuestions(res) {
	res.send(`
<html>
	<head/>
	<style>
		.forms{
			display:flex;
			flex-direction:column;
			max-width: 10%;
		}
	</style>
	<body>
	<div class = "forms">
		<form action="/postResponse" method="GET">
		  <label>Question #1</label> &nbsp;&nbsp;&nbsp;&nbsp; <input name="question1" />
		  <input type="submit" />
		</form>
		   <label>Question #2</label> &nbsp;&nbsp;&nbsp;&nbsp; <input name="question1" />
		   	<input type="submit" />
		</form>
		</form>
		   <label>Question #3</label> &nbsp;&nbsp;&nbsp;&nbsp; <input name="question1" />
		   	<input type="submit" />
		</form>
		</form>
		   <label>Question #4</label> &nbsp;&nbsp;&nbsp;&nbsp; <input name="question1" />
		   	<input type="submit" />
		</form>
	</div>
	</body>
</html>
	`);
}


function postAction(req, res) {
	var q1 = req.param("question1");
	res.send("<h1>Thanks for submitting the data<h1><p>For your ref, you submitted " + q1 + " for question1");
}

app.get('/', function (req, res) {
	buildFormForQuestions(res);
})
app.get('/postResponse', function (req, res) {
	postAction(req, res);
})
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
/*
app.get('/api/callback', function (request, response) {
	uber.authorization({
		authorization_code: request.query.code
	}, function (err, accessToken, refreshToken) {
		debugger
		if (err) {
			throw err;
		}
		uber.user.getHistory(0, 5, function (err, response) {
			console.log('response.history: ', response.history);
		});
	});
});
app.get('/api/products', function (request, response) {
	// extract the query from the request URL
	var query = url.parse(request.url, true).query;
	// if no query params sent, respond with Bad Request
	if (!query || !query.lat || !query.lng) {
		response.sendStatus(400);
	}
	else {
		uber.products.getAllForLocationAsync(query.lat, query.lng).then(function (res) {
			response.json(res);
		}).error(function (err) {
			console.error(err);
			response.sendStatus(500);
		});
	}
});
*/
