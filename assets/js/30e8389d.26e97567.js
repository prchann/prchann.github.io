"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="\u6700\u4f73\u5b9e\u8df5",o={unversionedId:"storage/best-practice",id:"storage/best-practice",title:"\u6700\u4f73\u5b9e\u8df5",description:"MySQL",source:"@site/docs/storage/best-practice.md",sourceDirName:"storage",slug:"/storage/best-practice",permalink:"/docs/storage/best-practice",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/storage/best-practice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8",permalink:"/docs/category/\u5b58\u50a8"},next:{title:"\u89c4\u8303",permalink:"/docs/storage/convention"}},p={},c=[{value:"MySQL",id:"mysql",level:2},{value:"Docker",id:"docker",level:2},{value:"Guides",id:"guides",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"Datetime",id:"datetime",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h2",{id:"mysql"},"MySQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id binary(16) UUID_TO_BIN(UUID())",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"WHERE id = UUID_TO_BIN(?)"))),(0,a.kt)("li",{parentName:"ul"},"Escaping \u5c06\u53c2\u6570\u5f53\u4f5c\u4e00\u4e2a\u503c\u8fdb\u884c\u8f6c\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u8bf7\u6c42 MySQL Server \u7684\u6b21\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u8003\u8651\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5"),(0,a.kt)("li",{parentName:"ul"},"\u5584\u7528\u7d22\u5f15\u548c\u7f13\u5b58")),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n--name mysql \\\n-e LANG=C.UTF-8 \\\n-e MYSQL_ALLOW_EMPTY_PASSWORD=yes \\\n-v mysql:/var/lib/mysql \\\n-p 3306:3306 \\\n--restart always \\\nmysql:5.7 \\\n--character-set-server=utf8mb4 \\\n--collation-server=utf8mb4_unicode_ci\n")),(0,a.kt)("p",null,"Use env ",(0,a.kt)("inlineCode",{parentName:"p"},"LANG")," to support typing Chineses. It comes from base image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/debian#locales"},"debian"),"."),(0,a.kt)("h2",{id:"guides"},"Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 MySQL \u4e2d\u4f7f\u7528 UUID: ",(0,a.kt)("a",{parentName:"li",href:"https://mysqlserverteam.com/mysql-8-0-uuid-support/"},"Mysql 8.0: UUID support"),"\u3002")),(0,a.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("h3",{id:"datetime"},"Datetime"),(0,a.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime"),"(\u800c\u975e ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp"),")\uff0c\u5e76\u56fa\u5b9a\u4e3a UTC \u65f6\u95f4\u3002",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/409286/should-i-use-the-datetime-or-timestamp-data-type-in-mysql?noredirect=1&lq=1"},"\u53c2\u8003"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u968f\u65f6\u533a\u53d8\u5316\uff0c\u5b58\u50a8\u4e2d\u662f\u4e00\u4e2a\u56fa\u5b9a\u503c\uff08\u5b57\u7b26\u4e32\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u9605\u8bfb\u53cb\u597d"),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u8f6c\u6362\u4e3a Unix \u65f6\u95f4\u6233 ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT UNIX_TIMESTAMP(my_datetime)"))))}u.isMDXComponent=!0}}]);