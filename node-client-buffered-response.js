var bl = require('bl');
var http = require('http');
var url = process.argv[2];

var client = http.get(url, function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		console.log(data.length);
		console.log(data.toString());
	}));
});

