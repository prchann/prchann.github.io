# Node.js 最佳实践

## Callback

回调函数是通过**实参**传入的。

```javascript
function sayHi() {
  console.log('Hi')
}

function sayHello() {
  console.log('Hello')
}

let func = sayHi

setTimeout(func, 1000) // Hi

func = sayHello

func() // Hello
```

## 模块

Node 会缓存已加载的模块，并在下次使用时从缓存读取。

Mongoose 利用此机制，在第一次调用时设置 Mongo 链接。

## WeakSet, WeakMap

需要 Map 或 Set 时，优先考虑使用 weak 型，以帮助垃圾回收，提升内存利用率。

## async, await

参考 [ES2017 异步函数的最佳实践（async / await）](https://mp.weixin.qq.com/s/XeezXHxSYsu-PBz19Xb0MQ)。

1. 先安排任务，再 await

这样可以获取更好的并发效果，对比以下代码

```javascript
// before
async function sayName() {
  const [ name, type ] = await Promise.all([
    sleep(1000, 'Presto'),
    sleep(2000, 'Dog'),
  ]);

  // 模拟繁重的计算...
  for (let i = 0; i < 1e9; ++i)
    continue;

  // 'Presto the Dog!'
  return `${name} the ${type}!`;
}

// after
async function sayName() {
  // 安排任务优先...
  const pending = Promise.all([
    sleep(1000, 'Presto'),
    sleep(2000, 'Dog'),
  ]);

  // ... 同步进行...
  for (let i = 0; i < 1e9; ++i)
    continue;

  // ... 再`await`
  const [ name, type ] = await pending;

  // 'Presto the Dog!'
  return `${name} the ${type}!`;
}
```

1. 避免使用 return await

因为 async 函数中，会将 `reture value` 中的 value 打包成 promise 后返回，而 `await func()` 则是将 func\(\) 的结果解包。

```javascript
// before
async () => {
  return await func();
}

// after
async () => {
  return func();
}
```

1. 留意 async 函数的开销

对于简单的异步操作，或者无需异步时，建议不使用 async。

```javascript
import { promises as fs } from 'fs';

// 这是一个效率不高的原生 readFile 的封装器。
async function readFile(filename) {
  const contents = await fs.readFile(filename, { encoding: 'utf8' });
  return contents;
}

// 这种优化避免了`async`包装器的开销。.
function readFile(filename) {
  return fs.readFile(filename, { encoding: 'utf8' });
}
```

```javascript
// All of these are semantically equivalent.
const p1 = async () => 'Presto';
const p2 = () => Promise.resolve('Presto');
const p3 = () => new Promise(resolve => resolve('Presto'));

// But since they are all immediately resolved,
// there is no need for promises.
const p4 = () => 'Presto';
```

## 进程退出

大多数进程管理软件以及 docker 使用 `SIGTERM`。可监听 process 的该事件，执行清理动作。

```javascript
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('server terminated');
  });
});
```

`nodemon` 重启进程时默认使用 `SIGUSR2`，可通过 `nodemon --signal SIGTERM index.js` 修改信号。[参考文档](https://github.com/remy/nodemon#gracefully-reloading-down-your-script)。

* [How to exit Node.js process gracefully](https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program)
