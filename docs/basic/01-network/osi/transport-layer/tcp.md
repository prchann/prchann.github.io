# TCP

## Header

![](https://pic3.zhimg.com/80/v2-78e35124b8c0ee1eb1c692ea9d4adbba_1440w.jpg)

## 流程

### 建立连接：3 次握手

<!-- ![](https://pic4.zhimg.com/80/v2-9ffdaaee5f5c98aaf307825bfbd20113_1440w.jpg) -->
![](05DEFEA4C512499888A4B4634EFD6C5F.drawio.svg)

*3 次握手流程图*

> **为什么比断开连接少了 1 次？**
>
> 第二次被复用。同时用于 `ACK` 和 `SYN`，因此可节省 1 次。

### 断开连接：4 次挥手

<!-- ![](https://pic2.zhimg.com/80/v2-0c834468d7a0264979e7db2419242999_1440w.jpg) -->
![](CDFCD97BA7434AF885DE00ED159F0276.drawio.svg)

*4 次挥手流程图*

> **为什么第比建立连接多了 1 次？**
>
> 第二次不能复用。因 Server 可能还有包未发完，此时不得不*稍等*（`CLOSE_WAIT`）。

> **为什么 Client 需要 `TIME_WAIT`？**
>
> 可靠机制：因发出去的 `ACK` 包可能丢失，需重发。...

## 可靠机制

## 传输控制

## 优化方案