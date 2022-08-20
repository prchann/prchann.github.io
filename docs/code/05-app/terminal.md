# Terminal

## Terminal

| Command | Description |
| :---: | :--- |
| `ctl + a` | go ahead of line |
| `ctl + e` | go to end of line |
| `ctl + u` | delete to ahead of line |
| `ctl + k` | delete to end of line |
| `ctl + w` | delete a word |
| `ctl + h` | delete a char |
| `ctl + b` | go back |
| `ctl + f` | go forward |

## Shell

```bash
# os version
# ubuntu
lsb_release -a
# or
cat /etc/*release
# centos
cat /etc/centos-release

# show users, groups
cat /etc/passwd
cat /etc/group

# show network info and ip
ifconfig
```

```bash
# display free disk space
df -h

# display disk usage statistics
du -h --max-depth=1 -x /usr/local/
```

## 常见信号

信号 | 数字 | 可捕获? | 描述 |
:-- | :-: | :-: | :-- | :--
`SIGINT` | 2 | Y | `Ctrl+C` 中断进程
`SIGQUIT` | 3 | Y | `Ctrl+D` 中断进程
`SIGKILL` | 9 |  | 强制中断进程（无法阻塞）
`SIGTERM` | 15 | Y | 优雅终止进程（默认信号）
`SIGSTOP` | 19 |  | 优雅终止进程中

可使用 `kill -l` 打印信号列表。
