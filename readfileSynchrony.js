(function(){
var fs = require('fs')

// fs.createReadStream(process.argv[2]).pipe(process.stdout)
// fs.createReadStream(process.argv[2]).on('data',function(data){
//   console.log(data)
//   console.log(new Array(50).join('#'))
// })




var file = fs.readFileSync(process.argv[2],"utf8").toString()
console.log(file.match(/\n/g).length)
// process.stdin.resume();
}).call(this)