# Web Server

## 架构

1. [App](web-server-app.md#app)
2. [Routers](web-server-app.md#routers)
3. [Controllers](web-server-app.md#controllers)
4. [Services](web-server-app.md#services)
5. [Models](web-server-app.md#models)
6. [Utils](web-server-app.md#utils)

## App

* 启动应用；
* 做应用初始化工作，如 Middleware 注册、数据库连接、缓存初始化等；
* 做应用层工作，如 Token 校验，HTTP 访问记录等；
* 退出时的清理工作。

## Routers

路由。在此将控制权由 App 转交给 Controller。

## Controllers

* 进行调控，调用 Service 执行任务；
* 在此对请求作出响应；
* 若出现异常，通过 HTTP Status Code 返回请求方（可用 [http-errors](https://github.com/perrychan1/notebook/tree/b99fe3784a46c88e068d329716236e693f098d9c/dev/www.npmjs.com/package/http-errors/README.md) ）。

### 流程

1. 数据获取
2. 数据校验：只校验类型和格式
   * 有误：抛出 400 异常
3. 数据净化
4. 数据补齐：从数据库/缓存获取数据
   * 对象不存在：抛出 404 异常
5. 数据处理
   * 有误：抛出异常 \|\| 500
6. 数据保存
   * 有误：抛出异常 \|\| 500
7. 生成结果
8. 返回结果

## Services

* 业务逻辑，做到可复用；
* 记录日志；
* 若出现异常，直接抛出。

## Models

数据库对象及关系的抽象，做到与业务解耦。若出现异常，直接抛出。

## Utils

工具类，抽象通用任务，全局可用。