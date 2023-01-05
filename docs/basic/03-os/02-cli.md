# CLI

常用的命令行工具。

## 网络类

```sh
# 查看 PORT 的使用情况
lsof -i :<PORT>

# 判断 HOST:PORT 的可访问性
telnet <HOST> <PORT>

# 查看被监听的端口
netstat -an | grep LISTEN
```