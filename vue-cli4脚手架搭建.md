vue-cli4脚手架搭建

node  10或12

```
npm install @vue.cli@4.1.1

vue create  hrea
```

最终采用@vue/cli 的4.1.1的版本（之前采用最新的版本，elementUII组件引入不顺利）

![image-20201013160858539](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201013160858539.png)

history模式建议采用hash模式

按传统方式，引入elementUI

vue3中有的版本没有data,需要使用setup（需要使用VueCompositionApi）设置数据

```
// data(){
//   return {
//     account: 'lili'
//   }
// },
```

vue3特性使用：VueCompositionApi

安装：

```
yarn add @vue/composition-api
```

引入：

```
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
```

vue  composition-api

setup(props, context/{ root }){

}

setup里面没有this

context:ref/root/emit...

```
Dictionary<string>
```

```
{ [key: string]: string }
```

```
import elementVariables from '@/styles/element-variables.scss'
```

'@/styles/element-variables.scss'

tslint报错，can't find module,  需要声明module，采用xxx.d.ts即element-variables.scss.d.ts

```
export interface IScssVariables {
  theme: string
}
export const variables: IScssVariables
export default variables
```

编解决报错了