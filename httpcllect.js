var http = require("http")
var bl = require("bl")
var concat = require('concat-stream')

http.get(process.argv[2],function(response) {
	response.pipe(bl(function(err,data){
	   if(err) return console.error(err)
       console.log(data.length)
	}))
	response.pipe(concat(function(data){
       console.log(data.toString())
	}))
})