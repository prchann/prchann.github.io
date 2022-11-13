"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[3649],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),p=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(k,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6552:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Cookie, Session, Token",o={unversionedId:"basic/network/cookie-session-token",id:"basic/network/cookie-session-token",title:"Cookie, Session, Token",description:"Cookie",source:"@site/docs/basic/01-network/05-cookie-session-token.md",sourceDirName:"basic/01-network",slug:"/basic/network/cookie-session-token",permalink:"/docs/basic/network/cookie-session-token",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/basic/01-network/05-cookie-session-token.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"basicSidebar",previous:{title:"HTTP \u534f\u8bae",permalink:"/docs/basic/network/http"},next:{title:"CDN",permalink:"/docs/basic/network/cdn"}},k={},p=[{value:"Cookie",id:"cookie",level:2},{value:"\u683c\u5f0f\u548c\u5c5e\u6027",id:"\u683c\u5f0f\u548c\u5c5e\u6027",level:3},{value:"Session",id:"session",level:2},{value:"Token",id:"token",level:2},{value:"JSON Web Token",id:"json-web-token",level:3},{value:"\u5355\u70b9\u767b\u5f55",id:"\u5355\u70b9\u767b\u5f55",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:p};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cookie-session-token"},"Cookie, Session, Token"),(0,r.kt)("h2",{id:"cookie"},"Cookie"),(0,r.kt)("p",null,"HTTP \u662f\u65e0\u72b6\u6001\u7684\uff0c\u4f46\u5e38\u89c1\u7684\u7528\u6237\u5e94\u7528\u5219\u662f\u6709\u72b6\u6001\u7684\u3002\u4e3a\u6807\u8bb0\u7528\u6237\u72b6\u6001\uff0cCookie \u5e94\u8fd0\u800c\u751f\u3002\u5b83\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u4fe1\u606f\u4f20\u8f93\u548c\u5b58\u50a8\u7ea6\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cookie",src:a(2019).Z,width:"521",height:"601"})),(0,r.kt)("p",null,"\u670d\u52a1\u7aef\u901a\u8fc7 HTTP \u54cd\u5e94\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),"\uff0c\u5411\u5ba2\u6237\u7aef",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u901a\u8fc7 HTTP \u8bf7\u6c42\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie"),"\uff0c\u5411\u670d\u52a1\u7aef",(0,r.kt)("strong",{parentName:"p"},"\u4f20\u9012"),"\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u5185\u7f6e\u652f\u6301 Cookie \u7684\u80fd\u529b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Set-Cookie")," \u54cd\u5e94\u5934\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06 Cookie \u5b58\u50a8\u8d77\u6765\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8bfb\u5199 Cookie \u7684 JavaScript \u63a5\u53e3\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u9875\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5c06\u5b58\u50a8\u4e2d\u7684 Cookie \u8bbe\u7f6e\u5230\u8bf7\u6c42\u5934 ",(0,r.kt)("inlineCode",{parentName:"li"},"Cookie"),"\u4e2d\uff0c\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u3002")),(0,r.kt)("h3",{id:"\u683c\u5f0f\u548c\u5c5e\u6027"},"\u683c\u5f0f\u548c\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Set-Cookie: <name>=<value>; expires=<expired_at>; domain=<domain>; path=<path>; secure; httpOnly; samesite\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f8b\u5b50"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"userID=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u503c\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"userID=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expires"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u6548\u622a\u6b62\u65e5\u671f\u3002UTC +0 \u65f6\u533a\u3002\u9ed8\u8ba4\u65f6\uff0c\u6d4f\u89c8\u5668\u5173\u95ed\u7a97\u53e3\u5373\u5b9e\u6548\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"expires=Tue, 19 Jan 2038 03:14:07 GMT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"max-age"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u6548\u65f6\u957f\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u9ed8\u8ba4\u65f6\uff0c\u6d4f\u89c8\u5668\u5173\u95ed\u7a97\u53e3\u5373\u5b9e\u6548\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"max-age=3600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"domain"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u6548\u57df\u540d\u8303\u56f4\u3002\u8de8\u57df\u65e0\u6548\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"domain=example.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u6548\u8def\u5f84\u8303\u56f4\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"path=/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secure"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ec5 HTTPS \u65f6\u624d\u4f1a\u53d1\u9001\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httpOnly"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u524d\u7aef JavaScript \u4e0d\u80fd\u8bfb\u5199\u8be5 Cookie\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"samesite"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9650\u5236\u540c\u6e90\uff0c\u5373\u53ea\u6709 AJAX \u7684\u8bf7\u6c42\u57df\u540d\u548c\u8bbf\u95ee\u9875\u9762\u57df\u540d\u4e00\u81f4\u65f6\uff0cAJAX \u624d\u80fd\u53d1\u8d77\u8bf7\u6c42\u3002"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"\u4e86\u89e3",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/cookie"},"\u66f4\u591a"),"\u3002"),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("p",null,"\u57fa\u4e8e Cookie \u7684\u4e00\u79cd\u72b6\u6001\u6807\u8bb0\u65b9\u6cd5\u3002\u524d\u7aef\u5b58\u50a8\u552f\u4e00\u6807\u8bc6 ","(","Session",")","\uff0c\u540e\u53f0\u5b58\u50a8 Session \u5bf9\u7528\u6237 ID \u7684\u6620\u5c04\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"session",src:a(610).Z,width:"531",height:"651"})),(0,r.kt)("p",null,"\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cookie \u8f7b\u91cf\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u53f0\u4f9d\u8d56\u6620\u5c04\u8868\uff1a\u4e3a\u6ee1\u8db3\u5206\u5e03\u5f0f\u67b6\u6784\u548c\u8bfb\u5199\u6027\u80fd\uff0c\u4e00\u822c\u5b58\u50a8\u4e8e Redis \u7b49\u7f13\u5b58\u6570\u636e\u5e93\u4e2d\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Session \u7684\u503c\u9700\u52a0\u5bc6\uff0c\u5426\u5219\u5bb9\u6613\u4f2a\u9020\u3002")),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("p",null,"\u57fa\u4e8e Cookie \u7684\u4e00\u79cd\u72b6\u6001\u6807\u8bb0\u65b9\u6cd5\u3002\u524d\u7aef\u5b58\u50a8\u552f\u4e00\u6807\u8bc6 ","(","ID",")"," \u548c\u7b7e\u540d ","(","\u6821\u9a8c",")","\u3002"),(0,r.kt)("p",null,"\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cookie \u5bb9\u91cf\u8f83\u5927\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u53f0\u6839\u636e Token \u672c\u8eab\u7684\u7b7e\u540d\u5373\u53ef\u6821\u9a8c\u6709\u6548\u6027\uff0c\u65e0\u6620\u5c04\u8868\u4f9d\u8d56\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"token",src:a(3723).Z,width:"361",height:"571"})),(0,r.kt)("h3",{id:"json-web-token"},"JSON Web Token"),(0,r.kt)("p",null,"\u4e00\u79cd\u7b80\u5355\u6613\u7528\u4e14\u6210\u719f\u7684 Token \u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e86\u89e3",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io"},"\u66f4\u591a"),"\u3002"),(0,r.kt)("h3",{id:"\u5355\u70b9\u767b\u5f55"},"\u5355\u70b9\u767b\u5f55"),(0,r.kt)("p",null,"\u6709\u7684\u4f01\u4e1a\u53ef\u80fd\u6709\u591a\u4e8e\u4e00\u4e2a\u57df\u540d\uff0c\u4f46 Cookie \u6700\u5927\u7684\u53ef\u7528\u8303\u56f4\u53ea\u80fd\u662f\u540c\u4e00\u4e2a\u57df\u540d\u3002\u7528\u6237\u4f7f\u7528\u540c\u4e00\u4f01\u4e1a\u7684\u4e0d\u540c\u57df\u540d\u5e94\u7528\u65f6\uff0c\u4e3a\u4e86\u65e0\u9700\u591a\u6b21\u767b\u5f55\uff0c\u5355\u70b9\u767b\u5f55\u6280\u672f\u5e94\u8fd0\u800c\u751f\u3002"),(0,r.kt)("p",null,"\u5173\u952e\u903b\u8f91\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u51fa\u4e00\u4e2a\u72ec\u7acb\u4e14\u4f01\u4e1a\u7ea7\u552f\u4e00\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1 ","(","SSO",")","\uff0c\u8d1f\u8d23\u8eab\u4efd\u8ba4\u8bc1\u3001Token \u751f\u6210\u3001Token \u6821\u9a8c\u7b49\u5de5\u4f5c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5404\u5e94\u7528\u5c06\u501f\u52a9 SSO \u751f\u6210\u7684 Token \u5b58\u50a8\u5728\u81ea\u8eab\u57df\u540d\u4e0b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5404\u5e94\u7528\u670d\u52a1\u7aef\u62ff\u7740\u4ece\u8bf7\u6c42\u5934\u4e2d\u8bfb\u53d6\u7684 Token\uff0c\u53bb\u627e SSO \u6821\u9a8c\u6709\u6548\u6027\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5355\u70b9\u767b\u5f55",src:a(8844).Z,width:"701",height:"1621"})),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/hKL3haddZkIEHpNuUgWh3A"},"\u524d\u7aef\u9274\u6743\u5fc5\u987b\u4e86\u89e3\u76845\u4e2a\u5144\u5f1f\uff1acookie\u3001session\u3001token\u3001jwt\u3001\u5355\u70b9\u767b\u5f55"))))}d.isMDXComponent=!0},3723:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/55668d0c296842ceab623945cc671f28.drawio-fdafde46aba5c30024b8e38145ddd640.svg"},2019:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/5a836af489114198a5bb413c7f1b56b2.drawio-4bd97c50bfd726e0794068299b662165.svg"},610:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/8aa6c45b941f44d2a42ab690aa66f23b.drawio-03048ccbe16f816a4b690487736c131c.svg"},8844:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aaccaf52b8fa4898abbf0a5f19d749db.drawio-505272896139d08712a2251bd7bb4782.svg"}}]);