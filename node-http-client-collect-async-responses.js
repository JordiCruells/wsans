var http = require('http');
var bl = require('bl');
var queryUrls = process.argv.slice(2,5).map(function(e) { return [e, null]; });
var counter = 3;

var getContent = function(i, cb) {
	var queryUrl = queryUrls[i];
	var client = http.get(queryUrl[0], function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function (err, data) {
			if (err) return cb(err);
			queryUrl[1] = data.toString();
			--counter;	
			if (counter === 0) {
				cb(null, queryUrls);
			}
		}));
	});
};

queryUrls.forEach(function(e,index) {
	getContent(index, function(err, data) {
		if (err) {
			console.log(err.toString());
			process.exit(1);
		}
		data.forEach(function(e) {
			console.log(e[1]);
		});
	});
});
