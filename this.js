https://blog.csdn.net/u013003052/article/details/87894194
 const app = {
    name: 'xiaoming',
    log() {
      console.log(this.name);
    },
    child() {
      return {
        name: 'b',
        log() {
          console.log(this.name);
        },
      };
    },
  };
  app.log(); // 
  app.child().log(); // 
  
// 全局环境
console.log(this === window); // 
this.name = 'react';
console.log(name); //
console.log(window.name); // 

// 函数
function f() {
  return this;
}
   // brower
f() === window;
   // node
f() === global;

function f() {
  'use strict'
  return this;
}
f() === undefined;

window.f()
f() === window;

var obj = {a: 'Custom'};

   // 这个属性是在global对象定义的。
var a = 'Global';
function whatsThis(arg) {
  return this.a;  // this的值取决于函数的调用方式
}
whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

function add(c, d) {
  return this.a + this.b + c + d;
}
var o = {a: 1, b: 3};
  // 第一个参数是作为‘this’使用的对象
  // 后续参数作为参数传递给函数调用
add.call(o, 5, 7); 
  // 第一个参数也是作为‘this’使用的对象
  // 第二个参数是一个数组，数组里的元素用作函数调用中的参数
add.apply(o, [10, 20]); 

// 箭头函数
  var obj = {
  bar: function() {
    var x = (()=> this);
    return x;
  }
}
    // 以obj为对象来调用bar()，所以this绑定的是obj
var fn = obj.bar();
console.log(fn() === obj); // true

   // 这里并没有调用bar()，只是引用bar赋给fn2
var fn2 = obj.bar;
   // 使用全局变量来调用bar(),所以这里的this绑定全局
console.log(fn2()() == window);


// 对象中的函数
const app = {
  name: 'xiaohong',
  f: function() {
    console.log(this.name);
  }
}
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); 

o.b = {g: independent, prop: 42};
console.log(o.b.g());

// 原型链中的this
var o = {
  f: function() { 
    return this.a + this.b; 
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f());

// bind(this)
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); 

var h = g.bind({a:'yoo'}); 
console.log(h());


// 
function a(){
 this.name = "张三"
}
function b(){
 this.name = "李四"
 a.call(this)
 console.log(this.name)
}
new b()// "李四"/"张三"

// call()、apply()、bind() 都是用来重定义 this 这个对象的！
var name='小明',age=17
var obj={
	name:'lisa',
	objAge: this.age,
	introduce: function(){
		console.log(this.name+"年龄"+this.age)
	}
}
obj.introduce()
var other = {
	name: 'lilei',
	age: 80
  }
obj.introduce.call(other)
obj.introduce.apply(other)
obj.introduce.bind(other)()
// 对比call 、bind 、 apply 传参情况下
var name='小明',age=17
var obj={
	name:'lisa',
	objAge: this.age,
	introduce: function(fn,to){
		console.log(this.name+"年龄"+this.age+"来自"+fn+"前往"+ to)
	}
}
var other = {
	name: 'lilei',
	age: 80
  }
  obj.introduce.call(other,"成都","上海")
  obj.introduce.apply(other,["成都","上海"])
  obj.introduce.bind(other,"成都","上海")() //lilei年龄80来自成都前往上海
  obj.introduce.bind(other,["成都","上海"])()//lilei年龄80来自成都前往上海undefined
  // 方法对象
function  funObj(){
	var a=funObj.a||(funObj.a=22)
	return a
}
funObj.a
function withValue(value) {
	
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}