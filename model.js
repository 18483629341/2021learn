// 单例模式
function singleModel(){
  let isExc=false;
  return function b(){
	  if(!isExc){
		  console.log('执行一次')
		  // ... 
		  isExc=true
	  }
  }
}
let a=singleModel()
a()
a()


// 
console.time('start')
setTimeout(()=>{
	console.log(8)
	console.timeEnd('start')

},2000)

requestAnimationFrame(()=>{
	console.log(9)
	console.timeEnd('start')
	console.time('start')
})
