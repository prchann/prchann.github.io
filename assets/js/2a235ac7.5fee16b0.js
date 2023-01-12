"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[8168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},l="Node.js \u6700\u4f73\u5b9e\u8df5",s={unversionedId:"code/lang/js/node.js/node-best-practice",id:"code/lang/js/node.js/node-best-practice",title:"Node.js \u6700\u4f73\u5b9e\u8df5",description:"Callback",source:"@site/docs/code/02-lang/01-js/node.js/node-best-practice.md",sourceDirName:"code/02-lang/01-js/node.js",slug:"/code/lang/js/node.js/node-best-practice",permalink:"/docs/code/lang/js/node.js/node-best-practice",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/code/02-lang/01-js/node.js/node-best-practice.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"Node.js \u7b80\u4ecb",permalink:"/docs/code/lang/js/node.js/intro"},next:{title:"\u5e38\u7528\u4f9d\u8d56\u5305",permalink:"/docs/code/lang/js/node.js/node-denpendencies"}},i={},c=[{value:"Callback",id:"callback",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2},{value:"WeakSet, WeakMap",id:"weakset-weakmap",level:2},{value:"async, await",id:"async-await",level:2},{value:"\u8fdb\u7a0b\u9000\u51fa",id:"\u8fdb\u7a0b\u9000\u51fa",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodejs-\u6700\u4f73\u5b9e\u8df5"},"Node.js \u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h2",{id:"callback"},"Callback"),(0,r.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u662f\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u53c2"),"\u4f20\u5165\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function sayHi() {\n  console.log('Hi')\n}\n\nfunction sayHello() {\n  console.log('Hello')\n}\n\nlet func = sayHi\n\nsetTimeout(func, 1000) // Hi\n\nfunc = sayHello\n\nfunc() // Hello\n")),(0,r.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,r.kt)("p",null,"Node \u4f1a\u7f13\u5b58\u5df2\u52a0\u8f7d\u7684\u6a21\u5757\uff0c\u5e76\u5728\u4e0b\u6b21\u4f7f\u7528\u65f6\u4ece\u7f13\u5b58\u8bfb\u53d6\u3002"),(0,r.kt)("p",null,"Mongoose \u5229\u7528\u6b64\u673a\u5236\uff0c\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u8bbe\u7f6e Mongo \u94fe\u63a5\u3002"),(0,r.kt)("h2",{id:"weakset-weakmap"},"WeakSet, WeakMap"),(0,r.kt)("p",null,"\u9700\u8981 Map \u6216 Set \u65f6\uff0c\u4f18\u5148\u8003\u8651\u4f7f\u7528 weak \u578b\uff0c\u4ee5\u5e2e\u52a9\u5783\u573e\u56de\u6536\uff0c\u63d0\u5347\u5185\u5b58\u5229\u7528\u7387\u3002"),(0,r.kt)("h2",{id:"async-await"},"async, await"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/XeezXHxSYsu-PBz19Xb0MQ"},"ES2017 \u5f02\u6b65\u51fd\u6570\u7684\u6700\u4f73\u5b9e\u8df5\uff08async / await\uff09"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u5b89\u6392\u4efb\u52a1\uff0c\u518d await")),(0,r.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u83b7\u53d6\u66f4\u597d\u7684\u5e76\u53d1\u6548\u679c\uff0c\u5bf9\u6bd4\u4ee5\u4e0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// before\nasync function sayName() {\n  const [ name, type ] = await Promise.all([\n    sleep(1000, 'Presto'),\n    sleep(2000, 'Dog'),\n  ]);\n\n  // \u6a21\u62df\u7e41\u91cd\u7684\u8ba1\u7b97...\n  for (let i = 0; i < 1e9; ++i)\n    continue;\n\n  // 'Presto the Dog!'\n  return `${name} the ${type}!`;\n}\n\n// after\nasync function sayName() {\n  // \u5b89\u6392\u4efb\u52a1\u4f18\u5148...\n  const pending = Promise.all([\n    sleep(1000, 'Presto'),\n    sleep(2000, 'Dog'),\n  ]);\n\n  // ... \u540c\u6b65\u8fdb\u884c...\n  for (let i = 0; i < 1e9; ++i)\n    continue;\n\n  // ... \u518d`await`\n  const [ name, type ] = await pending;\n\n  // 'Presto the Dog!'\n  return `${name} the ${type}!`;\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u907f\u514d\u4f7f\u7528 return await")),(0,r.kt)("p",null,"\u56e0\u4e3a async \u51fd\u6570\u4e2d\uff0c\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"reture value")," \u4e2d\u7684 value \u6253\u5305\u6210 promise \u540e\u8fd4\u56de\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"await func()")," \u5219\u662f\u5c06 func","(",")"," \u7684\u7ed3\u679c\u89e3\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// before\nasync () => {\n  return await func();\n}\n\n// after\nasync () => {\n  return func();\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7559\u610f async \u51fd\u6570\u7684\u5f00\u9500")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7b80\u5355\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u6216\u8005\u65e0\u9700\u5f02\u6b65\u65f6\uff0c\u5efa\u8bae\u4e0d\u4f7f\u7528 async\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { promises as fs } from 'fs';\n\n// \u8fd9\u662f\u4e00\u4e2a\u6548\u7387\u4e0d\u9ad8\u7684\u539f\u751f readFile \u7684\u5c01\u88c5\u5668\u3002\nasync function readFile(filename) {\n  const contents = await fs.readFile(filename, { encoding: 'utf8' });\n  return contents;\n}\n\n// \u8fd9\u79cd\u4f18\u5316\u907f\u514d\u4e86`async`\u5305\u88c5\u5668\u7684\u5f00\u9500\u3002.\nfunction readFile(filename) {\n  return fs.readFile(filename, { encoding: 'utf8' });\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// All of these are semantically equivalent.\nconst p1 = async () => 'Presto';\nconst p2 = () => Promise.resolve('Presto');\nconst p3 = () => new Promise(resolve => resolve('Presto'));\n\n// But since they are all immediately resolved,\n// there is no need for promises.\nconst p4 = () => 'Presto';\n")),(0,r.kt)("h2",{id:"\u8fdb\u7a0b\u9000\u51fa"},"\u8fdb\u7a0b\u9000\u51fa"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u8fdb\u7a0b\u7ba1\u7406\u8f6f\u4ef6\u4ee5\u53ca docker \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGTERM"),"\u3002\u53ef\u76d1\u542c process \u7684\u8be5\u4e8b\u4ef6\uff0c\u6267\u884c\u6e05\u7406\u52a8\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"process.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('server terminated');\n  });\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodemon")," \u91cd\u542f\u8fdb\u7a0b\u65f6\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGUSR2"),"\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"nodemon --signal SIGTERM index.js")," \u4fee\u6539\u4fe1\u53f7\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remy/nodemon#gracefully-reloading-down-your-script"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program"},"How to exit Node.js process gracefully"))))}u.isMDXComponent=!0}}]);