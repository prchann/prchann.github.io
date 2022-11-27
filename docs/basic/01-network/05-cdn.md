# CDN

![加速原理](https://raw.githubusercontent.com/prchann/fs/main/68e92126586d4de38480cdfddda3c094.png)

1. 配域名 CNAME -> CDN 提供商的 DNS 服务器
1. 用户请求时，DNS 服务器根据请求信息*动态*查找近用户的 CDN 节点 IP
1. 用户请求 IP 获取内容

## 参考

* [内容分发网络 CDN - 腾讯云](https://cloud.tencent.com/document/product/228/2939)
