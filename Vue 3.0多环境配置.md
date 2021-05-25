## 框架搭建二：Vue 3.0多环境配置

##  **1.创建环境env文件**

| **文件**         | **说明**                              | **备注**                                     |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| .env             | vue-cli-service build 时 , 默认的配置 | 默认的 npm run build = vue-cli-service build |
| .env.development | vue-cli-service serve 时 ,默认的配置  | 默认的 npm run serve = vue-cli-service serve |
| .env.{mode}      | 下文以mode = dev为例                  |                                              |

env文件中变量命名 必须以 VUE_APP_ 开头

例子(.env.dev) :

```
VUE_APP_DATA_TEST=TRUE
VUE_APP_REQUEST_URL='/api'
VUE_APP_REQUEST_DEMO='http://172.18.0.95:8073'
```



