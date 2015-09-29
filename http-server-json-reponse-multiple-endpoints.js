var http = require('http');
var url = require('url') ;
var qs = require('querystring');
var port = process.argv[2];

var server = http.createServer(function (req, res) {

	var reqUrl, iso, json;
	
        if (req.method === 'GET') {
		reqUrl = url.parse(req.url);
		iso = qs.parse(reqUrl.query).iso;
                date = new Date(iso);
		switch(reqUrl.pathname) {
			case '/api/parsetime':
				json = {
     					 "hour": date.getHours(),
					 "minute": date.getMinutes(),
					 "second": date.getSeconds()
				};
				res.writeHead(200, {'Content-type':'application/json'});
                                return res.end(JSON.stringify(json));
			case '/api/unixtime':
                                json = {
					"unixtime": date.getTime()
				};
				res.writeHead(200, {'Content-type':'application/json'});
				return res.end(JSON.stringify(json));
		}
        }
});
server.listen(port);
