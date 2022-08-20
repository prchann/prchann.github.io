"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[5551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="OpenAPI (Swagger)",l={unversionedId:"basic/network/open-api",id:"basic/network/open-api",title:"OpenAPI (Swagger)",description:"\u6587\u6863",source:"@site/docs/basic/01-network/open-api.md",sourceDirName:"basic/01-network",slug:"/basic/network/open-api",permalink:"/docs/basic/network/open-api",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/basic/01-network/open-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"basicSidebar",previous:{title:"RESTful API",permalink:"/docs/basic/network/restful-api"},next:{title:"SQL",permalink:"/docs/basic/storage/sql"}},p={},d=[{value:"\u6587\u6863",id:"\u6587\u6863",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"\u6587\u4ef6\u683c\u5f0f",id:"\u6587\u4ef6\u683c\u5f0f",level:2},{value:"Markdown",id:"markdown",level:2},{value:"operationId \u89c4\u5219",id:"operationid-\u89c4\u5219",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"components \u590d\u7528\u89c4\u5219",id:"components-\u590d\u7528\u89c4\u5219",level:2},{value:"\u66f4\u591a",id:"\u66f4\u591a",level:2},{value:"\u7a7a\u884c",id:"\u7a7a\u884c",level:3}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openapi-swagger"},"OpenAPI (Swagger)"),(0,r.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/"},"Swagger Specification"),"\u3002"),(0,r.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,r.kt)("p",null,"\u5728 VS Code \u4e2d\u4f7f\u7528\u63d2\u4ef6 ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi"},"OpenAPI ","(","Swagger",")"," Editor")," \u8f85\u52a9\u4e66\u5199\uff0c\u5b83\u6709\u667a\u80fd\u8865\u5168\u3001\u5b9e\u65f6\u9884\u89c8\uff08\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/swagger-api/swagger-ui"},"Swagger UI")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc"),"\uff09\u3001\u5185\u5bb9\u7d22\u5f15\u7b49\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"\u6587\u4ef6\u683c\u5f0f"},"\u6587\u4ef6\u683c\u5f0f"),(0,r.kt)("p",null,"\u63a8\u8350 ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML"),"\u3002\u8f85\u52a9\u5b57\u7b26\u8f83\u5c11\uff0c\u597d\u5199\u597d\u8bfb\u3002"),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"\u53ef\u7528\u6765\u4e66\u5199\u683c\u5f0f\u5316\u5185\u5bb9\u6216\u6bb5\u843d\u3002\u6bd4\u5982\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"info.description")," \u4e2d\u4e66\u5199\u524d\u7f6e\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728 OpenAPI \u4e2d\u4f7f\u7528 Markdown",src:n(690).Z,width:"3584",height:"2240"})),(0,r.kt)("h2",{id:"operationid-\u89c4\u5219"},"operationId \u89c4\u5219"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[<parent-resource>:]<resource>:<action>")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parent-resource"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u8d44\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resource"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u4f5c\uff0c\u5e38\u89c1\u7684\u503c\u6709 ",(0,r.kt)("inlineCode",{parentName:"td"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"index"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"show"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"delete"),"\u3002")))),(0,r.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apps:users:index")," - \u7d22\u5f15\u5e94\u7528\u4e2d\u7684\u7528\u6237\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"users:show")," - \u5c55\u793a\u4e00\u4e2a\u7528\u6237\u3002")),(0,r.kt)("h2",{id:"components-\u590d\u7528\u89c4\u5219"},"components \u590d\u7528\u89c4\u5219"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"components \u590d\u7528\u89c4\u5219",src:n(8582).Z,width:"441",height:"291"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," \u53ef\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"requestBody"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"response"),"\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," \u53ef\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),"\uff1b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8def\u5f84\u53c2\u6570\u547d\u540d\u683c\u5f0f ",(0,r.kt)("inlineCode",{parentName:"li"},":<name>"),"\uff1b"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"response")," \u53ef\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),"\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"schema")," \u53ef\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),"\u3002")),(0,r.kt)("p",null,"\u53e6\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"parameter")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"requestBody")," \u6ce8\u91cd ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),"\u3002"),(0,r.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,r.kt)("h3",{id:"\u7a7a\u884c"},"\u7a7a\u884c"),(0,r.kt)("p",null,"\u501f\u52a9\u7a7a\u884c\u6765\u5206\u9694\u4ee3\u7801\uff0c\u65b9\u4fbf\u9605\u8bfb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u501f\u52a9\u7a7a\u884c\u5206\u5272\u4ee3\u7801",src:n(3940).Z,width:"1254",height:"1020"})))}s.isMDXComponent=!0},8582:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b19ecbe3ea6045e680f142021243d8dd.drawio-9526cbf1d08457ed52fc7df653dace72.svg"},3940:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eff243b94ee5446e80db6a1993428c2d-3268fab54056427ab11bdaede0476599.png"},690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/f3515eff88ca4670b076410df1f14c16-a44f0d9db4c9d80b0023245978152d40.png"}}]);