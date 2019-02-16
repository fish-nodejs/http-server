# http server with nodejs
Nodejs 的核心特色就是事件驱动。

## 创建服务器
```
http.createServer((req, res) => {})
```
会返回一个server的实例。每当接收到http请求，就会触发回调函数。回调函数会收到两个参数
- req, 包装了请求报文的信息
  https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_incomingmessage
- res, 通过控制它来处理响应信息
  https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_serverresponse


