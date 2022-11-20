"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[8370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="IP \u534f\u8bae",c={unversionedId:"basic/network/ip",id:"basic/network/ip",title:"IP \u534f\u8bae",description:"Port",source:"@site/docs/basic/01-network/00-ip.md",sourceDirName:"basic/01-network",slug:"/basic/network/ip",permalink:"/docs/basic/network/ip",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/basic/01-network/00-ip.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"basicSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/basic/"},next:{title:"TCP",permalink:"/docs/basic/network/tcp"}},p={},l=[{value:"Port",id:"port",level:2},{value:"\u7aef\u53e3\u7528\u9014",id:"\u7aef\u53e3\u7528\u9014",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ip-\u534f\u8bae"},"IP \u534f\u8bae"),(0,o.kt)("h2",{id:"port"},"Port"),(0,o.kt)("p",null,"\u5360 16 \u4f4d\uff0c\u6700\u5927\u6570\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"2^16"),"\u3002"),(0,o.kt)("h3",{id:"\u7aef\u53e3\u7528\u9014"},"\u7aef\u53e3\u7528\u9014"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(0, 2^10]"),": \u666e\u901a\u7aef\u53e3\uff0c\u4f9b\u516c\u5171\u8bbe\u65bd\u548c\u77e5\u540d\u670d\u52a1\u4f7f\u7528\uff0c\u5982 SSH 22,  HTTP 80, HTTPS 443\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(2^10, 49151]"),": \u5df2\u6ce8\u518c\u7aef\u53e3\uff0c\u88ab\u67d0\u4e9b\u5e38\u89c1\u8f6f\u4ef6\u6ce8\u518c\uff0c\u5982 MySQL 3306, Redis 6379\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(49151, 2^16]"),": \u52a8\u6001\u7aef\u53e3\uff0c\u5f00\u653e",(0,o.kt)("em",{parentName:"li"},"\u4e34\u65f6"),"\u4f7f\u7528\u3002")))}u.isMDXComponent=!0}}]);