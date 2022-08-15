"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[1103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=a,s=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(s,o(o({ref:t},c),{},{components:n})):r.createElement(s,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="RESTful API",l={unversionedId:"network/restful-api",id:"network/restful-api",title:"RESTful API",description:"Do an action in a resource .",source:"@site/docs/network/restful-api.md",sourceDirName:"network",slug:"/network/restful-api",permalink:"/docs/network/restful-api",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/network/restful-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenAPI (Swagger)",permalink:"/docs/network/open-api"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/docs/category/\u64cd\u4f5c\u7cfb\u7edf"}},p={},d=[{value:"Do an <code>action</code> in a <code>resource</code> .",id:"do-an-action-in-a-resource-",level:2},{value:"method \u4e0e action \u7684\u5bf9\u5e94\u5173\u7cfb",id:"method-\u4e0e-action-\u7684\u5bf9\u5e94\u5173\u7cfb",level:2},{value:"\u8d44\u6e90\u5173\u7cfb\u7684\u8868\u793a",id:"\u8d44\u6e90\u5173\u7cfb\u7684\u8868\u793a",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restful-api"},"RESTful API"),(0,a.kt)("h2",{id:"do-an-action-in-a-resource-"},"Do an ",(0,a.kt)("inlineCode",{parentName:"h2"},"action")," in a ",(0,a.kt)("inlineCode",{parentName:"h2"},"resource")," ."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"action -",">"," resource")),(0,a.kt)("p",null,"\u5411\u67d0\u4e2a\u8d44\u6e90 ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," \u6267\u884c\u67d0\u4e2a\u52a8\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u3002\u501f\u52a9 HTTP \u6765\u8868\u8fbe\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"method -",">"," path")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"method")," \u8868\u793a\u6267\u884c\u7684\u52a8\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"path")," \u8868\u793a\u63a5\u53d7\u52a8\u4f5c\u7684\u8d44\u6e90 ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /users/{id}"),"\u8868\u793a\u201c\u5220\u9664 ID \u4e3a {id} \u7684\u7528\u6237\u201d\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"query: \u67e5\u8be2/\u8fc7\u6ee4\u6761\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"req body: \u6267\u884c\u52a8\u4f5c\u6240\u9700\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"res body: \u6267\u884c\u52a8\u4f5c\u6240\u5f97\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ul"},"header",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Accept"),": \u8bf7\u6c42\u8005\u6240\u671f\u671b\u7684\u6267\u884c\u7ed3\u679c\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"req: \u8bf7\u6c42\u8005\u6267\u884c\u52a8\u4f5c\u6240\u9700\u4fe1\u606f\u7684\u5c55\u73b0\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"x-www-form-urlencoded")),(0,a.kt)("li",{parentName:"ul"},"res: \u52a8\u4f5c\u6267\u884c\u6240\u5f97\u7ed3\u679c\u7684\u5c55\u73b0\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))))))),(0,a.kt)("h2",{id:"method-\u4e0e-action-\u7684\u5bf9\u5e94\u5173\u7cfb"},"method \u4e0e action \u7684\u5bf9\u5e94\u5173\u7cfb"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,a.kt)("th",{parentName:"tr",align:"left"},"/users"),(0,a.kt)("th",{parentName:"tr",align:"left"},"/users/{id}"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"GET")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u53d6\u5168\u90e8 ",(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u53d6\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"user"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"POST")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"PUT")),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"user"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"PATCH")),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"user")," \u7684\u90e8\u5206\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"user"))))),(0,a.kt)("h2",{id:"\u8d44\u6e90\u5173\u7cfb\u7684\u8868\u793a"},"\u8d44\u6e90\u5173\u7cfb\u7684\u8868\u793a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ea7\u54c1 product")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4 group")," \u7684\u5173\u7cfb ",(0,a.kt)("inlineCode",{parentName:"p"},"/groups/{groupId}/products/{productId}"),"\u3002"))}u.isMDXComponent=!0}}]);