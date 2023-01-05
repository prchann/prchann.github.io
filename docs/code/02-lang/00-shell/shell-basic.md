# Shell 基础

## 语法

### 变量

```sh
# 读取环境变量
# 环境变量会自动作为变量
# HOST=127.0.0.1 ./test.sh
echo $HOST

# 设置变量
export HOST=127.0.0.1
```

### 条件

```sh
# 判断变量 var 是否为空字符串
if [ -z "$var" ]; then
    echo true
else
    echo false
fi
```

* [General purpose command-line tools](http://www.compciv.org/unix-tools/)
* [The Bash Primer](http://www.compciv.org/bash-guide/)
* [Idnan/bash-guide](https://github.com/Idnan/bash-guide)
* [the-art-of-command-line](https://github.com/jlevy/the-art-of-command-line)
