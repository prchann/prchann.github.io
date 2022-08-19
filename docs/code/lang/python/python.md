# Python

## 数据类型

### int, float

### str

```python
foo = 'hello'
bar = "world"

baz = '''\
hello
world
'''
```

#### 字符串和编码

内存中用 `unicode` 编码；为了节省空间，写入磁盘或输出到网络时，使用 `utf-8` 编码。

```python
# 编解码
'abc'.encode('utf-8') # => b'abc'
b'abc'.decode('utf-8') # => 'abc'
```

#### 格式化

```python
'Hello, %s!' % 'World' # => 'Hello, World!'
# 多个占位符时，用括号包裹
'Hello, %s and %s!' % ('You', 'Me') # => 'Hello, You and Me!'

# 占位符类型
%s # str
%d # digist/int
%f # float
%x # 十六进制整数
```

### bool

```python
True or False
True and False
not True
```

### None

```python
# 函数无 'return' 或 'return 空' 时，均返回 None
None
```

## 数据结构

### list 列表

```python
# define
foo = [1, 'world']

# read
foo[0] # => 1
foo[-1] # => 'world'

# update
foo[0] = 2
foo[0] # => 2

# create
foo.append('new')
foo.insert(1, 'second')

# delete
foo.pop()

# others
len(foo) # => 3
```

### tuple 元组

不可变的 list。

```python
# define
foo = ('cassie', 'perry', 'someone')
# empty tuple
bar = ()
# one element tuple
baz = ('first',)

# read
foo[0] # => 'cassie'
```

### dict 字典

```python
# define
user = {
  name: 'perry',
  birth: 1992,
}

# exists
'test' in user # => False

# read
user.get('test') # => None
user['name'] # => 'perry'
user['test'] # => Error

# update
user['birth'] = 2020

# delete
user.pop('birth') # => 2020
```

### set 集合

仅有 Key 且唯一的 dict。

```python
# define
foo = set([1, 1, 2]) # => {1, 2}

# create
foo.add(3)

# delete
foo.delete(3)
```

## 函数

```python
def doSomething(param1, param2):
  # 数据类型检查
  if not isinstance(param1, (int, float)):
    raise TypeError('bad operand type')
  if not param2:
    # 跳过
    pass

  # 返回多个值，实际上是返回 tuple
  return 1, 2

foo, bar = doSomething(1, 2)
```

## venv

```bash
python3 -m venv venv
source ./venv/bin/activate
```

