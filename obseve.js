var obj = {};
Object.defineProperty(obj, {
  'label': {
    value: 'default',
    writable: true,
  },
  'completed': {
    value: false,
    writable: false
  }
});

var obj = {};
Object.defineProperty(obj,'c', {
	configurable: false,
    value: 1,
    writable: true,
});


Object.defineProperty(obj,'c', {
	configurable: true,
	enumberable: true
    value: 2,
    writable: false
});


var obj = {};
var aValue;
var b;
Object.defineProperty(obj,'a', {
	configurable: true,
	enumberable: true,
    get:function(){
		return aValue
	},
	set:function(newValue){
		aValue=newValue
		b=newValue+1
	},
});

console.log(b)
console.log(obj.a)
obj.a=2

console.log(b)
console.log(obj.a)