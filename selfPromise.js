function Promi(executor) {
  let _this = this
  _this.$$status = 'pending'
  _this.successCallback = undefined
  _this.failCallback = undefined
  executor(resolve.bind(this), reject.bind(this))

  function resolve(params) {
    if (_this.$$status === 'pending') {
      _this.$$status = 'full'
      _this.successCallback(params)
    }
  }
  function reject(params) {
    if (_this.$$status === 'pending') {
      _this.$$status = 'reject'
      _this.failCallback(params)
    }
  }
}

Promi.prototype.then = function(full, fail) {
  this.successCallback = full
  this.failCallback = fail
}
// Promi.prototype.catch = function(err) {
//   this.failCallback = err
// }

new Promi(function(res, reject) {
  setTimeout(_ => res('成功'), 300)
}).then(res => {
  console.log(res)
}, err => {
  console.error(err)
})
/* .catch(err => {
  console.error(err)
}) */

// 考察Promise的链式调用
var beginPromise = new Promise(resolve => {
  resolve(100)
})
var thenPromise = beginPromise.then(resolve => {
  console.log(resolve + 100)
})
var catchPromise = thenPromise.catch(err => {
  console.error(err)
})

console.log(beginPromise !== thenPromise) // true
console.log(thenPromise !== catchPromise) // true
// 显而易见，Promise返回的是一个新的而非调用者

function begin() {
  return new Promise(resolve => {
    setTimeout(_ => resolve('first'), 2000)
  })
}
begin().then(data => {
  console.log(data)
  return new Promise(resolve => {
    setTimeout(_ => resolve('second'), 4000)
  })
}).then(res => {
  console.log(res)
})
