var fs = require('fs');
var dir = process.argv[2];
var filterStr = '.' + process.argv[3];

fs.readdir(dir, function(err,list){
	if (err || !list) return;
	list = list.filter(function(e) {
		var extStart = e.lastIndexOf(filterStr);
		return extStart>=0 && (extStart + filterStr.length === e.length);
	});
	for (var i=0; i<list.length; i++) {
		console.log(list[i]);
	}

});
