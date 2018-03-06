# nodejs-test

## 后台启动应用

`node server.js 8001 >! log 2>&1 &`

## 启动应用

同时运行
`node server.js 8001`
`node server.js 8002`

## 添加路由

1. 打开 server.js，添加 if else
2. 重新运行 node server.js 8001

## 实现功能

1. 8001端口向8002发起了一次请求并以jsonp形式调用8001的函数