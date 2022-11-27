# RPC

## gRPC

![gRPC](6B19370FEE7544E8A3E30A76A5C13C8F.drawio.svg)

* 应用层协议，主要用于后台服务间调用
* pb 定义接口（服务、方法和 msg），`protoc` 编译成语言的 C 端和 S 端
* metadata, msg
* 序列化：二进制 <-> 语言数据类型
* 单向和双向流
* LB，健康检查，tracing，认证，取消，超时...
* smaller, faster, simpler
