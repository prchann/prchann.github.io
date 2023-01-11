# CLI

常用的命令行工具。

## 网络类

### netstat

```shell
# 查看被监听的端口
netstat -an | grep LISTEN
```

### lsof

```shell
# 查看 port 的占用情况
lsof -i :<port>
```

### telnet

```shell
# 判断 host:port 的可访问性
telnet <host> <port>
```

### dig

```shell
# 查看 DNS 解析
dig example.com

# 仅查看解析结果
dig +short example.com

# 反转：通过 IP 查域名
dig -x 8.8.8.8
```

### tcpdump

TCP 协议抓包工具。

```shell
# 抓取一端口的 TCP 包
tcpdump -i any port <port>

# 抓取来去一主机的包
tcpdump host www.example.com

# 列出全部可用的网络接口
tcpdump -D
```

相似工具：

1. [mitmproxy](https://github.com/mitmproxy/mitmproxy): HTTP 协议抓包工具

## 进程类

### 查找 PID

```shell
# 按名称查找 PID
pgrep <process_name>

# 仅展示最新的一个进程
pgrep -n <process_name>
# 仅展示最老的一个进程
pgrep -o <process_name>

# 杀死匹配 <pattern> 的全部 PID
pgrep -f <pattern> | xargs kill
```

## 辅助类

```shell
# 重复执行某个指令
watch -n 10 -c -d <cmd>
# -n: 指定重复间隔时间，默认 2s
# -c: 展示 ANSI 颜色
# -d: 高亮前后两次输出结果的不同
```

## 参考

1. [Idnan/bash-guide](https://github.com/Idnan/bash-guide)
1. [General purpose command-line tools](http://www.compciv.org/unix-tools/)