

![image-20210324110542665](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20210324110542665.png)1)

var myDate = new Date();

myDate.getYear(); //获取当前年份(2位)

myDate.getFullYear(); //获取完整的年份(4位,1970-????)

myDate.getMonth(); //获取当前月份(0-11,0代表1月)myDate.getDate(); //获取当前日(1-31)

myDate.getDay(); //获取当前星期X(0-6,0代表星期天)

myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)

myDate.getHours(); //获取当前小时数(0-23)

myDate.getMinutes(); //获取当前分钟数(0-59)

myDate.getSeconds(); //获取当前秒数(0-59)

myDate.getMilliseconds(); //获取当前毫秒数(0-999)

myDate.toLocaleDateString(); //获取当前日期

varmytime=myDate.toLocaleTimeString(); //获取当前时间

myDate.toLocaleString(); //获取日期与时间


let date=new Date()

var y =  date.getUTCFullYear();    
var m = date.getUTCMonth() ;
var d = date.getUTCDate();
var h= date.getUTCHours();
var M = date.getUTCMinutes();
var s = date.getUTCSeconds();

var utc = Date.UTC(y,m,d,h,M,s);

![image-20210324162350854](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20210324162350854.png)

1616574360000



```js
function dateadd(sdate:string|object, delta:number, ymdh:number) {
  if (!sdate) return

  if (typeof sdate === 'object') sdate = sdate.toLocaleString();

  /(\d{4})[\D](\d{1,2})[\D](\d{1,2})[\D]?\s(\d{1,2}):(\d{1,2}):(\d{1,2})/.exec(sdate)
  var a = [0, 0, 0, 0]

  switch (ymdh) {
    case 'y':
      a = [delta, -1, 0, 0]
      break
    case 'm':
      a = [0, delta - 1, 0, 0]
      break
    case 'H':
      a = [0, -1, 0, delta]
      break
    default:
      a = [0, -1, delta, 0]
      break
  }

  console.log('date:' + (parseInt(RegExp.$1) + a[0]) + '-' + (parseInt(RegExp.$2) + a[1]) + '-' + (parseInt(RegExp.$3) + a[2]) +
    ' ' + (parseInt(RegExp.$4) + a[3]) + ':' + RegExp.$5 + ':' + RegExp.$6)
  // date: 2013-0-1 0:00:00
  return new Date(parseInt(RegExp.$1) + a[0], parseInt(RegExp.$2) + a[1], parseInt(RegExp.$3) + a[2], parseInt(RegExp.$4) + a[3], RegExp.$5, RegExp.$6)
}
const sdate = '2013-01-01 00:00:00.0'
const d = dateadd(sdate, 0, 0)
const d2 = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds())
console.log(d2) // 1356969600000

export const getUtcTime = (time: Date|null): string | null => {
  if (!time) {
    return null
  }
  let offset = (-new Date(time).getTimezoneOffset()) / 60
  let date = new Date(time)
  // 获取零区对应的时间
  let y = date.getUTCFullYear()
  let m:string|number = date.getUTCMonth() + 1
  let d:string|number = date.getUTCDate()
  let h:string|number = date.getUTCHours() + offset
  let M:string|number = date.getUTCMinutes()
  let s:string|number = date.getUTCSeconds()
  let ms:string|number = date.getMilliseconds()
  // 格式化数据
  let zone = offset + '00'
  if (Math.abs(offset) < 10) {
    if (offset > 0) {
      zone = '+0' + offset + '00'
    } else {
      zone = '-0' + offset + '00'
    }
  }
  m = m > 9 ? m : '0' + m
  d = d > 9 ? d : '0' + d
  h = h > 9 ? h : '0' + h
  M = M > 9 ? M : '0' + M
  s = s > 9 ? s : '0' + s
  ms = ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms
  return `${y}-${m}-${d}Z${h}:${M}:${s}.${ms}${zone}`
}
console.log(getUtcTime(new Date())) // 2021-03-24Z17:54:10.250+0800
```

