# CLI

常用的命令行工具。

## 网络类

```shell
# 查看 PORT 的使用情况
lsof -i :<PORT>

# 判断 HOST:PORT 的可访问性
telnet <HOST> <PORT>

# 查看被监听的端口
netstat -an | grep LISTEN
```

## 辅助类

```shell
# 重复执行某个指令
watch -n 10 -c -d <cmd>
# -n: 指定重复间隔时间，默认 2s
# -c: 展示 ANSI 颜色
# -d: 高亮前后两次输出结果的不同
```