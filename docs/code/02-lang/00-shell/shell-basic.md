# Shell 基础

## 数据类型

### 变量

```shell
# 设置
HOST=127.0.0.1

# 读取
echo $HOST
# 环境变量会自动作为变量
# HOST=127.0.0.1 ./test.sh
```

### 列表 & 字典

#### 列表

```shell
# 定义
list=(
    a
    b
    c
    )
# 或
declare -a list=(
    a
    b
    c
    )

# 写，起始索引为 1
list[3]=d

# 读元素
echo ${list[0]} # > a
# 读全部元素
echo ${list[@]} # > a b c d
# 读长度
echo ${#list[@]} # > 4
```

#### 字典

```shell
# 定义
declare -A user

# 写
user[name]="username"
user[birth]="1970-01-01"

# 读元素
echo ${user[name]} # > username
# 读全部元素
echo ${user[@]} # > username 1970-01-01
```

## 条件

```shell
# 判断变量 var 是否为空字符串
if [ -z "$var" ]; then
    echo empty
else
    echo not empty
fi

# 判断文件存在性
[ -f "/path/to/file" ] && echo found
[ ! -f "/path/to/file" ] && echo not found
test -f "/path/to/file" && echo found
```

## 遍历

### 遍历列表

```shell
list=(1
    2
    3
    )
for i in "${list[@]}"; do
    echo "$i"
done

for Item in 'Item 1' 'Item 2' 'Item 3' 'Item 4'; do
    echo "$Item"
done
```

### 遍历字典

```shell
declare -A dict
dict[k]=v

for k in "${!dict[@]}"; do
    echo key is "$k", value is "${dict[$k]}"
done
```

## 函数

```shell
# 定义
function say() {
    # 读取入参
    echo $1
}

# 调用：直接书写函数名，后面跟着入参
say hi
```

1. [The Bash Primer](http://www.compciv.org/bash-guide/)
1. [Idnan/bash-guide](https://github.com/Idnan/bash-guide)
1. [cht.sh](http://cht.sh/bash/:learn)
1. [the-art-of-command-line](https://github.com/jlevy/the-art-of-command-line)
