# TCP 协议

## 组成结构

由 Header 和 Body 组成。Header 存放元数据，用于建立连接、达成可靠机制和传输控制等能力。Body 存放传输的数据。

### Header

![](https://raw.githubusercontent.com/prchann/fs/main/363dafef277d46c2b9b298a75e6507ab.jpg)

1. 第一行
    * 端口号：
1. 第二和第三行
    * 序号：
    * 确认号：
1. 第四行
    * 头部长度：
    * URG, ACK 等：
    * 窗口大小：
1. 第五行
    * 校验和：
    * 紧急指针：
1. 第六行：
    * 选项：
    * 填充：

## 关键流程

### 建立连接：三次握手

<!-- ![](https://pic4.zhimg.com/80/v2-9ffdaaee5f5c98aaf307825bfbd20113_1440w.jpg) -->
![](A5DEFEA4C512499888A4B4634EFD6C5F.drawio.svg)

*三次握手流程图*

> **为什么比断开连接少了 1 次？**
>
> 第二次被复用。同时用于 `ACK` 和 `SYN`，因此可节省 1 次。

### 断开连接：四次挥手

<!-- ![](https://pic2.zhimg.com/80/v2-0c834468d7a0264979e7db2419242999_1440w.jpg) -->
![](CDFCD97BA7434AF885DE00ED159F0276.drawio.svg)

*四次挥手流程图*

> **为什么第比建立连接多了一次？**
>
> 第二次不能复用。因 Server 可能还有包未发完，此时不得不*稍等*（`CLOSE_WAIT`）。

> **为什么 Client 需要 `TIME_WAIT`？**
>
> 可靠机制：因发出去的 `ACK` 包可能丢失，需重发。...

## 可靠机制

## 传输控制

### 性能优化

## 安全

## 备注

### 参考

* [TCP 协议经典十五连问](https://zhuanlan.zhihu.com/p/391591603)
* [TCP congestion avoidance flow](https://medium.com/tcp-ip/tcp-congestion-avoidance-flow-382bb02f4e20)