"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[2942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="RPC",c={unversionedId:"basic/network/rpc",id:"basic/network/rpc",title:"RPC",description:"gRPC",source:"@site/docs/basic/01-network/09-rpc.md",sourceDirName:"basic/01-network",slug:"/basic/network/rpc",permalink:"/docs/basic/network/rpc",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/basic/01-network/09-rpc.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"basicSidebar",previous:{title:"IPC",permalink:"/docs/basic/network/ipc"},next:{title:"\u5b58\u50a8\u4ecb\u8d28",permalink:"/docs/basic/storage/disk"}},p={},l=[{value:"gRPC",id:"grpc",level:2}],s={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc"},"RPC"),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gRPC",src:r(1817).Z,width:"751",height:"471"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u4e3b\u8981\u7528\u4e8e\u540e\u53f0\u670d\u52a1\u95f4\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},"pb \u5b9a\u4e49\u63a5\u53e3\uff08\u670d\u52a1\u3001\u65b9\u6cd5\u548c msg\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"protoc")," \u7f16\u8bd1\u6210\u8bed\u8a00\u7684 C \u7aef\u548c S \u7aef"),(0,a.kt)("li",{parentName:"ul"},"metadata, msg"),(0,a.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316\uff1a\u4e8c\u8fdb\u5236 <-> \u8bed\u8a00\u6570\u636e\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u5411\u548c\u53cc\u5411\u6d41"),(0,a.kt)("li",{parentName:"ul"},"LB\uff0c\u5065\u5eb7\u68c0\u67e5\uff0ctracing\uff0c\u8ba4\u8bc1\uff0c\u53d6\u6d88\uff0c\u8d85\u65f6..."),(0,a.kt)("li",{parentName:"ul"},"smaller, faster, simpler")))}u.isMDXComponent=!0},1817:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6B19370FEE7544E8A3E30A76A5C13C8F.drawio-bb01d33c404c89cdbf85cf14d8786f63.svg"}}]);