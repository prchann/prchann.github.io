# HTTP

## 简介

[查看教程](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)。

### 常见 Status Code

* 1xx Informational
  * `101` Switching Protocols
* 2xx Success
  * `200` OK
  * `201` Created
  * `204` No Content
* 3xx Redirection
  * `301` Moved Permanently
  * `304` Not Modified
* 4xx Client Error
  * `400` Bad Request
  * `401` Unauthorized
  * `403` Forbidden
  * `404` Not Found
  * `409`: Conflict
* 5xx Server Error
  * `500` International Server Error

### 常见 Method

* `GET`
* `POST`
* `PUT`: 完全更新
* `PATCH`: 部分更新
* `DELETE`
* `HEAD`

### 常见 Header

#### Content-Type

* `text/plain`
* `application/json`
* `application/octet-stream`
* `application/x-www-form-urlencoded`

#### Cache-Control

参考 [彻底弄懂浏览器缓存策略](https://mp.weixin.qq.com/s/Ui7Q9k4faiD5mv_LfB4Rrw)。

通过 HTTP 头来标识和控制缓存。默认浏览器会做一些缓存以加快页面打开速度。

缓存有两个阶段： 1. 本地缓存阶段：本地缓存是有效的，则直接使用； 2. 协商缓存阶段：本地缓存已过期，则带上缓存信息请求 Server 协商是否使用新的返回。

* 若内容未变（即本地缓存依然可用），则返回 304，浏览器将使用本地缓存，并更新本地缓存的有效期；
* 若内容已变，则返回新的内容。

**实现方式**

当 1.1 和 1.0 的字段均存在时，1.1 优先使用。

**HTTP 1.0**

Expires 指明有效日期（绝对值）。

若过期，则将 Last-Modified 的值作为 If-Modified-Since 的值，发出请求进行协商缓存。若文件的更改时间在 If-Modified-Since 之后，则返回新内容；否则 304。

**HTTP 1.1**

Cache-Control 中的 max-age 指明有效时长（单位：秒。从请求发起时间算起）。

若过期，则将 ETag 的值作为 If-Mone-Match 的值，发出请求进行协商缓存。若文件的最新 ETag 不等于 If-Mone-Match 的值，则返回新内容；否则 304。

ETag 是后台用来标记文件版本的值。无固定生成规则，只要做到随文件内容变化而变化即可。

**浏览器的 disable-cache**

当勾选此选项时，浏览器不使用本地缓存，且不走协商缓存（请求头不带协商缓存所需的字段），以达到获取最新后台文件的目的。

### Body

## How HTTPS Works

学习 HTTPS、密钥、握手、SSL/TLS 以及证书授权，[查看详情](https://howhttps.works)。

## 发展简史

1. 0.9: 请求只有 `GET /path`，响应仅包含 HTML，且 TCP 连接关闭就会结束；
2. 1.0
   * 增加了请求 Method
   * 增加了响应 Status Code
   * 增加了 Header：可自定义 Content-Type，支持压缩等
3. 1.1
   * 默认启用持久 TCP 连接（保持活动状态）
   * HTTP 管线化：客户端无需在发送后续 HTTP 请求之前等待服务器响应请求，但仍要求服务器按照接收到的请求顺序进行响应。因此，如果管线化中的单个请求执行得很慢，则对客户端的所有后续响应都将相应地延迟下去。这个问题被称为线头阻塞
4. 2.0
   * 在单个打开的 TCP 连接上多路复用 HTTP 请求，解决了线头阻塞问题。这允许服务器以任何顺序响应请求，然后客户端可以在接收到响应时重新组合响应，从而在单个连接中加快整个交换的速度
   * 压缩请求头
   * 在 TCP 协议级别上仍然存在类似类型的线头问题，而 TCP 仍然是 Web 的基础构建块。当 TCP 数据包在传输过程中丢失时，在服务器重新发送丢失的数据包之前，接收方无法确认传入的数据包。由于 TCP 在设计上不遵循 HTTP 之类的高级协议，因此单个丢失的数据包将阻塞所有进行中的 HTTP 请求的流，直到重新发送丢失的数据为止。这个问题在不可靠的连接上尤为突出，这在无处不在的移动设备时代并不罕见
5. 3.0
   * 放弃 TCP，转而使用基于 UDP 的 QUIC 协议
   * 要求加密
   * 为了解决传输级别的线头阻塞问题，通过 QUIC 连接传输的数据被分为一些流。流是持久性 QUIC 连接中短暂、独立的“子连接”。每个流都处理自己的错误纠正和传递保证，但使用连接全局压缩和加密属性。每个客户端发起的 HTTP 请求都在单独的流上运行，因此丢失数据包不会影响其他流 / 请求的数据传输

![HTTP/3 &#x5C06;&#x8FDE;&#x63A5;&#x5206;&#x4E3A;&#x5355;&#x72EC;&#x7684;&#x6D41;](https://mmbiz.qpic.cn/mmbiz_png/FE4VibF0SjfMiaBh3uaBmRzeH2NyvDH9u3y5nTt52DzgDOqDCvnbuIDBnr29dVDpxed6bndBcwFSibNDaFF1Vkg5w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[查看详情](https://mp.weixin.qq.com/s/E5RwKvHcDdzHS77lpb9wvw)。
