module.exports = function(dir,extname,callback){
	var fs = require('fs')
	var path = require('path')
    fs.readdir(dir,function(err,files){
         if(err) return callback(err);
         var filterfiles = files.filter(function(file){
           return path.extname(file) === '.'+extname
         })
         callback(null,filterfiles)
         // files.forEach(function(file){
         //   if(path.extname(file) === '.'+extname){
         //   	 callback(null,file)
         //   }
         // })
    })	
}