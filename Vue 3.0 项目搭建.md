## 框架搭建一：Vue 3.0 项目搭建

### 1.**Vue 3.0 项目初始化**

#### 1.1 安装 vue-cli

 卸载 npm uninstall vue-cli -g

  注意，目前前端项目到vue2，为不影响以往的项目，故而局部进行局部安装,请注意是**局部安装**！

  建一个空的文件夹，在文件执行以下命令，进行局部安装：

```
npm install @vue/cli -g
```

#### 1.2 安装成功后，我们即可使用 vue 命令，测试方法：

```
$ vue -V
@vue/cli 4.5.7
```

初始化 vue 项目

```
vue create xxx 
```

#### 1.3 输入命令后，会出现命令行交互窗口，这里我们选择 Manually select features：

```
`Vue CLI v4.5.7 
? Please pick a preset:   
  default (Vue2 babel, eslint) 
  default (Vue3 babel, eslint, typescript)
❯ Manually select features 

```

随后我们勾选：Router、Vuex、CSS Pre-processors 和 Linter / Formatter，这些都是开发商业级项目必须的， 由于项目未来可能需要支持更多，于是我全部选上：

![image-20201010175420119](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201010175420119.png)

#### 1.4 项目创建完毕后，目录结构如下：

![image-20201010180551059](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201010180551059.png)

回头看此时的packsges数量达到1200多个！

```vb
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard 

  ESLint + Prettier
  TSLint (deprecated)`
```



![image-20201010173908253](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201010173908253.png)

#### 1.4 项目依赖下载成功，且项目构建完成，如下：

![image-20201012100239630](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201012100239630.png)

 #### 1.5 使用npm run serve 将项目运行起来；

```
  - Local:   http://localhost:8080/
  - Network: http://xxx.xxx.xxx.xxx:8080/
```



![image-20201012100603736](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201012100603736.png)

#### 1.6  vue add vue-next

![image-20201013103440393](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201013103440393.png)

于是又卸载了

**这样就完成了vue 3的搭建！ **

### 2. 其他尝试――测试

#### 2.1 试一下单元测试

```
npm run test:unit
```

居然报错，不符合规则？

#### 2.2 试一下e2e测试

```
npm run test:e2e
```

这个居然没错；

打开一下网页的控制台，没有显示vue-devtool，是需要配置？



packaga.json中的name属性直接决定网页的title

##### 2.3 修改端口号

新建vue.config.js 修改：

```
onst devServerPort = 8892

module.exports = {
  devServer: {
    port: devServerPort
  }
}
```

##### 2.4 引入elementUI，参考官方文档

```
npm i element-ui -S  
```

No,上面的方式out了，vue-cli@3 需要引入一个新插件对element实现按需加载，

```
vue add element
```

会出现以下回应，如没有，就是vue-cli版本低于3.0, 需要布局升级，使用 npm install @vue/cli -s 命令。

![image-20201012151622750](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201012151622750.png)，

后续出现一定的选项，最后选择如下：

![image-20201012152846312](C:\Users\cwx825027\AppData\Roaming\Typora\typora-user-images\image-20201012152846312.png)

等待依赖注入完毕后...

再一次遇到坑：引入@import 'element-ui/packages/theme-chalk/src/index.scss' 报错

查询...后，1 .建议新增 .postcssrc.js ..,-->不管用

   2. 建议新增 .webpack.config.js ,配置css-loader....  ->不管用

   3. vue/cli3对css和scss自动匹配

   4. 启动图形化界面

      ```
      vue ui
      ```

      

##### 2.5 引入国际化

```
npm install i18n --save
```

