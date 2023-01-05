# Redis

任一命令均是原子性的。

## 通用命令

```bash
# exists
# @return {number} 存在，1；否则，0
exists key

# delete
del key


# expire
# unit: seconds
expire key 60
# or
set key 'v0' ex 60
# 注意：更新 key 的值时，会同时更新有效期。

# time to live
# @return {number} 已过期/不存在：-2；长期有效：-1；剩余 n 秒：n
ttl key

# 持久化
persist key
```

## 数据类型

### String

常用命令

```bash
# 存储
# @return OK
set key 'value'

# 读取
# @return 如有，返回存储的值；否则，返回 (nil)
get key

# +1
# key 不存在时，初始化 = 1
incr number # 1
# -1
decr number # 0
# +n
incrby number 100 # 100
# -n
decrby number 10 # 99
```

### List

按存储时间排序的链式队列。

常用命令

```bash
# push
# @return 列表长度
rpush key 'v1' 'v2'
lpush key 'v0'

# pop
rpop key # => v2
lpop key # => v0

# range
lrange key 0 -1

# length
llen key
```

特点

* 高效地进行头/尾部操作
* 一端生产，另一端消费

### Set

值唯一的集合。

常用命令

```bash
# add
# @return 值已存在，返回 0；否则，返回 1
sadd key 'v0' 'v1'

# remove
# @return 值已存在，返回 1；否则，返回 0
srem key "v0"

# is member
# @return 值已存在，返回 1；否则，返回 0
sismember key "v0"

# members
# @return {[]}
smembers key


# multiple sets operation

# union
# @return {[]}
sunion key key1
```

特点

* 无序
* 用来做标记的池塘
* 判断是否存在

### Sorted Set

根据 score 排序的集合。

常用命令

```bash
# add
zadd key 0 'v0'

# range
zrange 0 -1
```

特点

* 有序
* 方便读取最高或最低排行

### Hashes

field: value 的映射表。

常用命令

```bash
# set
hset obj f0 'v0' f1 '1'

# get field
hget obj f0

# get object
hgetall obj

# delete
hdel obj

# +n
hincrby obj f1 10 # 11
```

特点：

* key: value 对象
