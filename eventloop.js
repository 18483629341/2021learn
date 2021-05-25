console.time('start')

setTimeout(function(){
  console.log(2)
},10)

setImmediate(function(){
  console.log(1)
})

new Promise(function(resolve){
	console.log(3)
	resolve()
	console.log(4)
}).then(function(res){
	console.log(5)
	console.timeEnd('start')
})

console.log(6)

process.nextTick(function(){
  console.log(7)
})

console.log(8)
