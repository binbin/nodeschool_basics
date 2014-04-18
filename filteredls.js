(function(){
	var fs = require("fs")

	var path = require("path")

	var extname = '.'+process.argv[3]

    fs.readdir(process.argv[2],function(err,files){
    	if(err) throw err;
    	for(var i = 0 ;i<files.length;i++){
    		if(path.extname(files[i]) === extname){
    			console.log(files[i])
    		}
    	}
    })

}).call(this);