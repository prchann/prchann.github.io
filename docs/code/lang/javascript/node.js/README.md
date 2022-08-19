# Node.js

## 特点及应用场景

### 特点

* 单线程：Node 进程仅启动一个线程来执行开发者的代码；
* 异步：采用异步的方式以减少等待。如 fs.readFile() 可免去等待 OS 读取文件的时间；
* 事件循环：循环从事件队列中获取任务，逐一执行。

### 使用场景

#### 特别适合 I/O 密集型

Node 像个领导人，把具体任务交由他人执行，自己主要起到分发的作用。大幅减少等待时间。类比 Nginx。

#### 不适合 CPU 密集型

因长时间/大量计算会阻塞事件循环，这与 Node 的运行机制冲突。

优化方案有：

* 大任务拆分为多个小任务，并发执行；
* Child Process 子进程中执行计算，通过事件消息进行通讯；
* 调用 C/C++ 拓展来执行计算任务；
* 调用其他服务（如 Java）执行计算。

## 异步任务类型

1. Tick: 通过 nextTick 创建；
2. Microtasks: Promise 类任务，如通过 Promise 创建；
3. Macrotasks:
   1. 异步 I/O：事件，如网络请求、文件读取等；
   2. 非 I/O 异步：通过 setTimeout, setInterval 创建。

## 低性能表现

* RegExp 和 JSON 操作是慢的；
* JavaScript 做位运算效率不高，如需频繁转码/编码等操作，考虑通过 C/C++ 拓展模块实现；
* 性能不高的核心模块
  * Encryption
  * Compression
  * File System: require I/O
  * Child Process

## :warning: 注意

### Promise

`reject(err)` 前记得 `return`。

```javascript
if (err) {
   return reject(err)
}
```
