"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[5499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),k=l,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),l=(t(7294),t(3905));const a={},i="Redis",s={unversionedId:"basic/storage/redis",id:"basic/storage/redis",title:"Redis",description:"\u4efb\u4e00\u547d\u4ee4\u5747\u662f\u539f\u5b50\u6027\u7684\u3002",source:"@site/docs/basic/02-storage/01-redis.md",sourceDirName:"basic/02-storage",slug:"/basic/storage/redis",permalink:"/docs/basic/storage/redis",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/basic/02-storage/01-redis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"basicSidebar",previous:{title:"MySQL",permalink:"/docs/basic/storage/mysql"},next:{title:"MongoDB",permalink:"/docs/basic/storage/mongodb"}},o={},u=[{value:"\u901a\u7528\u547d\u4ee4",id:"\u901a\u7528\u547d\u4ee4",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"String",id:"string",level:3},{value:"List",id:"list",level:3},{value:"Set",id:"set",level:3},{value:"Sorted Set",id:"sorted-set",level:3},{value:"Hashes",id:"hashes",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis"},"Redis"),(0,l.kt)("p",null,"\u4efb\u4e00\u547d\u4ee4\u5747\u662f\u539f\u5b50\u6027\u7684\u3002"),(0,l.kt)("h2",{id:"\u901a\u7528\u547d\u4ee4"},"\u901a\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# exists\n# @return {number} \u5b58\u5728\uff0c1\uff1b\u5426\u5219\uff0c0\nexists key\n\n# delete\ndel key\n\n\n# expire\n# unit: seconds\nexpire key 60\n# or\nset key 'v0' ex 60\n# \u6ce8\u610f\uff1a\u66f4\u65b0 key \u7684\u503c\u65f6\uff0c\u4f1a\u540c\u65f6\u66f4\u65b0\u6709\u6548\u671f\u3002\n\n# time to live\n# @return {number} \u5df2\u8fc7\u671f/\u4e0d\u5b58\u5728\uff1a-2\uff1b\u957f\u671f\u6709\u6548\uff1a-1\uff1b\u5269\u4f59 n \u79d2\uff1an\nttl key\n\n# \u6301\u4e45\u5316\npersist key\n")),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b58\u50a8\n# @return OK\nset key 'value'\n\n# \u8bfb\u53d6\n# @return \u5982\u6709\uff0c\u8fd4\u56de\u5b58\u50a8\u7684\u503c\uff1b\u5426\u5219\uff0c\u8fd4\u56de (nil)\nget key\n\n# +1\n# key \u4e0d\u5b58\u5728\u65f6\uff0c\u521d\u59cb\u5316 = 1\nincr number # 1\n# -1\ndecr number # 0\n# +n\nincrby number 100 # 100\n# -n\ndecrby number 10 # 99\n")),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"\u6309\u5b58\u50a8\u65f6\u95f4\u6392\u5e8f\u7684\u94fe\u5f0f\u961f\u5217\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# push\n# @return \u5217\u8868\u957f\u5ea6\nrpush key 'v1' 'v2'\nlpush key 'v0'\n\n# pop\nrpop key # => v2\nlpop key # => v0\n\n# range\nlrange key 0 -1\n\n# length\nllen key\n")),(0,l.kt)("p",null,"\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u5730\u8fdb\u884c\u5934/\u5c3e\u90e8\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7aef\u751f\u4ea7\uff0c\u53e6\u4e00\u7aef\u6d88\u8d39")),(0,l.kt)("h3",{id:"set"},"Set"),(0,l.kt)("p",null,"\u503c\u552f\u4e00\u7684\u96c6\u5408\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# add\n# @return \u503c\u5df2\u5b58\u5728\uff0c\u8fd4\u56de 0\uff1b\u5426\u5219\uff0c\u8fd4\u56de 1\nsadd key 'v0' 'v1'\n\n# remove\n# @return \u503c\u5df2\u5b58\u5728\uff0c\u8fd4\u56de 1\uff1b\u5426\u5219\uff0c\u8fd4\u56de 0\nsrem key \"v0\"\n\n# is member\n# @return \u503c\u5df2\u5b58\u5728\uff0c\u8fd4\u56de 1\uff1b\u5426\u5219\uff0c\u8fd4\u56de 0\nsismember key \"v0\"\n\n# members\n# @return {[]}\nsmembers key\n\n\n# multiple sets operation\n\n# union\n# @return {[]}\nsunion key key1\n")),(0,l.kt)("p",null,"\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6765\u505a\u6807\u8bb0\u7684\u6c60\u5858"),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u5b58\u5728")),(0,l.kt)("h3",{id:"sorted-set"},"Sorted Set"),(0,l.kt)("p",null,"\u6839\u636e score \u6392\u5e8f\u7684\u96c6\u5408\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# add\nzadd key 0 'v0'\n\n# range\nzrange 0 -1\n")),(0,l.kt)("p",null,"\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u8bfb\u53d6\u6700\u9ad8\u6216\u6700\u4f4e\u6392\u884c")),(0,l.kt)("h3",{id:"hashes"},"Hashes"),(0,l.kt)("p",null,"field: value \u7684\u6620\u5c04\u8868\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# set\nhset obj f0 'v0' f1 '1'\n\n# get field\nhget obj f0\n\n# get object\nhgetall obj\n\n# delete\nhdel obj\n\n# +n\nhincrby obj f1 10 # 11\n")),(0,l.kt)("p",null,"\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key: value \u5bf9\u8c61")))}c.isMDXComponent=!0}}]);