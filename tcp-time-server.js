var net = require('net');
var datejs = require('datejs');
var port = process.argv[2];

var server = net.createServer();
server.on('connection', function(client) {
	   var date = new Date().toString("yyyy-MM-dd HH:mm");
	   client.end(date + "\n");
});
server.listen(port);

