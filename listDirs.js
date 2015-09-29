module.exports = function(dir, ext, cb) {
	
	var fs = require('fs');
	var filterStr = '.' + ext;

	fs.readdir(dir, function(err,list){
	        if (err) return cb(err);
        	list = list.filter(function(e) {
	                var extStart = e.lastIndexOf(filterStr);
                	return extStart>=0 && (extStart + filterStr.length === e.length);
        	});
		cb(null,list);
      	});

};

