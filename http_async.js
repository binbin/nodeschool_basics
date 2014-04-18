var http = require('http')


var urls = process.argv.slice(2),
	result = [],
    times=0
	// console.log(urls)
// urls = [process.argv[2], process.argv[3], process.argv[4]]; 

for (var i = 0; i < urls.length; i++) {
	(function(i){
			http.get(urls[i], function(response) {
				var data_string=''
				response.setEncoding('utf8')
				response.on('data', function(data) {
					data_string+=data.toString()
					
				})
				response.on('end',function(){
					result[i] = data_string
                    times++
                    if(times===urls.length){
                    	for(var j=0;j<result.length;j++){
							console.log(result[j])
						}
                    }
				})
				response.on('error',console.error)
			})
	})(i);
}


// var index = 0;

// var getContent = function(i) {
// 	http.get(urls[i],function(response){
// 		response.setEncoding('utf8')
// 		response.on('data',function(data){
// 			// console.log(urls[i])
// 			console.log(data.toString())
// 		})
// 		response.on('end',function(){
// 			index++
// 			if(index<urls.length){
// 				getContent(index)
// 			}
// 		})
// 		response.on('error',console.error)
// 	})
// }
// getContent(index)