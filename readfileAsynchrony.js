(function() {
	var fs = require("fs")

    fs.readFile(process.argv[2],{encoding:'utf8'},function(err,data){
       if(err) throw err;
       console.log(data.toString().match(/\n/g).length)
    })

}).call(this)