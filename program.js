var array=process.argv.slice(2),count=0
for(var i in array){
	count+=+array[i]
}
console.log(count)