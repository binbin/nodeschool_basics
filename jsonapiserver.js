var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
    var urlObject = url.parse(req.url,true)      
    if(urlObject.pathname === '/api/parsetime'){
    	  res.writeHead(200,{'Content-Type':'application/json'})
          var date = new Date(Date.parse(urlObject.query.iso))
          res.write(JSON.stringify({
          	'hour':date.getHours(),
          	'minute':date.getMinutes(),
          	'second':date.getSeconds()
          }))
    }else if(urlObject.pathname === '/api/unixtime'){
    	res.writeHead(200,{'Content-Type':'application/json'})
    	res.write(JSON.stringify({
          	'unixtime':Date.parse(urlObject.query.iso)
          }))
    }else{
		res.writeHead(404)
    }
    res.end()
})

server.listen(Number(process.argv[2]))