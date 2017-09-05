function gotNewPlace() {
	var newPlace = document.getElementById("zipbox").value;
	var script = document.createElement('script');
	script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + newPlace + "')&format=json&callback=callbackFunction"
	script.id = "jsonpCall";
	var oldScript = document.getElementById("jsonpCall");
	if (oldScript != null) {
		document.body.removeChild(oldScript);
	}
	document.body.appendChild(script);
}
////-------------------------callback------
function callbackFunction(data) {
	var phg = JSON.stringify(data);
	var dataPath = data.query.results.channel.item.forecast;
	//------TOP ----------
	var location = document.getElementById("location");
	location.textContent = data.query.results.channel.title.slice(16, 26);
	//
	var location = document.getElementById("locations");
	location.textContent = data.query.results.channel.title.slice(16, 26);
	//
	var temperature = document.getElementById("temperature");
	temperature.textContent = data.query.results.channel.item.condition.temp;
	//
	var text = document.getElementById("text");
	text.textContent = data.query.results.channel.item.condition.text;
	//
	var date = document.getElementById("date");
	date.textContent = data.query.results.channel.item.condition.date.slice(6, 17);
	//
	var wind = document.getElementById("wind");
	wind.textContent = data.query.results.channel.wind.speed;
	//
	var humidity = document.getElementById("humidity");
	humidity.textContent = data.query.results.channel.atmosphere.humidity;
	//
	var time = document.getElementById("time");
	time.textContent = data.query.results.channel.lastBuildDate.slice(16, 26);
	//
	var time = document.getElementById("times");
	time.textContent = data.query.results.channel.lastBuildDate.slice(16, 26);
	data.query.results.channel.item.condition.text
		//
	if ("Partly Sunny" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/part-sun.png";
	}
	else if ("Sunny" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/sunny.png";
	}
	else if ("Mostly Sunny" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/part-sun.png";
	}
	else if ("Mostly Cloudy" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/cloudy.png";
	}
	else if ("Partly Cloudy" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/part-sun.png";
	}
	else if ("Cloudy" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/cloudy.png";
	}
	else if ("Snow" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/snow.png";
	}
	else if ("Showers" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/rain.png";
	}
	else if ("Thunderstorms" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/thunder.png";
	}
	else if ("Breezy" == data.query.results.channel.item.condition.text) {
		document.getElementById("img").src = "../WeatherApp3/wind.png";
	}
	///////for///FORECAST////-------------
	var forecastHigh = document.getElementsByClassName("forecastHigh");
	var forecastLow = document.getElementsByClassName("forecastLow");
	var forecastText = document.getElementsByClassName("forecastText");
	var forecastDate = document.getElementsByClassName("forecastDate");
	for (var i = 0; i <= 9; i = i + 1) {
		forecastHigh[i].textContent = dataPath[i].high;
		forecastText[i].textContent = dataPath[i].text;
		forecastLow[i].textContent = dataPath[i].low;
		forecastDate[i].textContent = dataPath[i].day;
		switch (dataPath[i].text) {
		case "Partly Sunny":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/part-sun.png";
			break;
		case "Sunny":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/sunny.png";
			break;
		case "Mostly Sunny":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/part-sun.png";
			break;
		case "Cloudy":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/cloudy.png";
			break;
		case "Partly Cloudy":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/part-sun.png";
			break;
		case "Mostly Cloudy":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/part-sun.png";
			break;
		case "Snow":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/snow.png";
			break;
		case "Showers":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/rain.png";
			break;
		case "Thunderstorms":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/thunder.png";
			break;
		case "Breezy":
			document.getElementsByClassName("image")[i].src = "../WeatherApp3/wind.png";
			break;
		}
	}
	////////mobile----------------
	var forecastHighs = document.getElementsByClassName("forecastHighs");
	var forecastLows = document.getElementsByClassName("forecastLows");
	var forecastTexts = document.getElementsByClassName("forecastTexts");
	var forecastDates = document.getElementsByClassName("forecastDates");
	forecastHighs[0].textContent = dataPaths[0].high;
	forecastTexts[0].textContent = dataPaths[0].text;
	forecastLows[0].textContent = dataPaths[0].low;
	forecastDates[0].textContent = dataPaths[0].day;
	switch (dataPath[0].text) {
	case "Partly Sunny":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/part-sun.png";
		break;
	case "Sunny":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/sunny.png";
		break;
	case "Mostly Sunny":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/part-sun.png";
		break;
	case "Cloudy":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/cloudy.png";
		break;
	case "Partly Cloudy":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/part-sun.png";
		break;
	case "Mostly Cloudy":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/part-sun.png";
		break;
	case "Snow":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/snow.png";
		break;
	case "Showers":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/rain.png";
		break;
	case "Thunderstorms":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/thunder.png";
		break;
	case "Breezy":
		document.getElementById("imageMobile")[0].src = "../WeatherApp3/wind.png";
		break;
	}
}
///-----------------buttons----------
var right = 0;
var left = 0;

function buttonActionRight() {
	var boxes = document.getElementsByClassName("forecast");
	var n = boxes.length;
	var cont = boxes[0].parentElement;
	var container = cont.parentElement;
	var width = container.clientHeight;
	var boxWidth = width / 5;
	if (right < width - 225) {
		right = right + rangeWidth;
	}
	for (var i = n - 1; i >= 0; i--) {
		boxes[i].style.left = right + "px";
	}
}

function buttonActionLeft() {
	var boxes = document.getElementsByClassName("forecast");
	var n = boxes.length;
	var cont = boxes[0].parentElement;
	var container = cont.parentElement;
	var width = container.clientHeight;
	var boxWidth = width / 5;
	if (left < width - 225) {
		left = left - rangeWidth;
	}
	for (var i = n - 1; i >= 0; i--) {
		boxes[i].style.left = left - "px";
	}
}

function resize() {
	var w = window.outerWidth;
	var h = window.outerHeight;
	var txt = "Window size: width=" + w + ", height=" + h;
	document.getElementById("demo").innerHTML = txt;
}