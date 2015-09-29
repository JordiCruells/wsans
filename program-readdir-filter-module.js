var dir = process.argv[2];
var ext = process.argv[3];
var listDirs = require('./listDirs.js');

listDirs(dir, ext, function(err, list) {
	if (err) {
		console.log(err.toString());
		process.exit(1);
	} else {
	     for (var i=0; i<list.length; i++) {
                console.log(list[i]);
	     }
	     process.exit(0);
	}
});
