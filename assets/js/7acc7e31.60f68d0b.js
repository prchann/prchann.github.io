"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[8881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"127.0.0.1 vs 0.0.0.0",title:"127.0.0.1 vs 0.0.0.0",authors:"pr",tags:["network","docker","container"]},l="127.0.0.1 vs 0.0.0.0",i={permalink:"/blog/127.0.0.1 vs 0.0.0.0",editUrl:"https://github.com/prchann/prchann.github.io/tree/main/blog/2023-01-05-127.0.0.1-vs-0.0.0.0/index.md",source:"@site/blog/2023-01-05-127.0.0.1-vs-0.0.0.0/index.md",title:"127.0.0.1 vs 0.0.0.0",description:"\u7531\u4e00\u4e2a\u95ee\u9898\u5f15\u53d1\u7684\u5b66\u4e60\u3002",date:"2023-01-05T00:00:00.000Z",formattedDate:"2023\u5e741\u67085\u65e5",tags:[{label:"network",permalink:"/blog/tags/network"},{label:"docker",permalink:"/blog/tags/docker"},{label:"container",permalink:"/blog/tags/container"}],readingTime:1.64,hasTruncateMarker:!1,authors:[{name:"Pr Chan",url:"https://github.com/prchann",imageURL:"https://github.com/prchann.png",key:"pr"}],frontMatter:{slug:"127.0.0.1 vs 0.0.0.0",title:"127.0.0.1 vs 0.0.0.0",authors:"pr",tags:["network","docker","container"]}},p={authorsImageUrls:[void 0]},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u95ee\u9898\u5206\u6790",id:"\u95ee\u9898\u5206\u6790",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7531\u4e00\u4e2a\u95ee\u9898\u5f15\u53d1\u7684\u5b66\u4e60\u3002"),(0,a.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,"\u5bb9\u5668\u4e2d\u76d1\u542c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0:<port>")," \u7684\u8fdb\u7a0b\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:<port>")," \u7684\u8fdb\u7a0b\uff0c\u524d\u8005\u53ef\u4ece\u5bbf\u4e3b\u673a\u8bbf\u95ee\u5230\uff0c\u540e\u8005\u5219\u4e0d\u53ef\u3002\u4e3a\u4ec0\u4e48\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl '127.0.0.1:<port>'\n# curl: (56) Recv failure: Connection reset by peer\n")),(0,a.kt)("h2",{id:"\u95ee\u9898\u5206\u6790"},"\u95ee\u9898\u5206\u6790"),(0,a.kt)("p",null,"\u8fdb\u7a0b\u76d1\u542c socket\uff0c\u5e95\u5c42\u662f\u8c03\u7528\u7cfb\u7edf\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind(2)"),"\uff0c\u6709 2 \u4e2a\u53c2\u6570\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7f51\u7edc\u63a5\u53e3"),"\uff1aOS \u4e0a\u53ef\u80fd\u6709\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"eth0"),"\u3002\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," \u6307\u672c\u673a\u63a5\u53e3\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," \u6307\u4efb\u610f\u63a5\u53e3\uff08\u7c7b\u6bd4\u901a\u914d\u7b26 ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\uff09\u3002\u76d1\u542c\u7684\u7f51\u7edc\u63a5\u53e3\u8868\u793a\u53ea\u63a5\u6536\u6765\u81ea\u8be5\u63a5\u53e3\u7684\u7f51\u7edc\u8bf7\u6c42\uff1b"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7f51\u7edc\u7aef\u53e3"),"\uff1a\u53ea\u63a5\u6536\u6765\u81ea\u8be5\u7aef\u53e3\u7684\u7f51\u7edc\u8bf7\u6c42\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e91\u670d\u52a1\u5668\u8bbe\u7f6e\u5b89\u5168\u7ec4\u65f6\uff0c\u5e38\u89c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\u3002")),(0,a.kt)("p",null,"\u5728 container \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u7279\u6307\u672c container\uff08\u975e\u5bbf\u4e3b\u673a\uff09\u3002\u76d1\u542c\u8be5\u7f51\u7edc\u63a5\u53e3\u5219\u8868\u793a\u53ea\u63a5\u6536\u6765\u81ea\u672c container \u7684\u7f51\u7edc\u8bf7\u6c42\u3002\u90a3\u4e48\uff0c\u5b83\u4e0d\u4f1a\u63a5\u6536\u6765\u81ea\u672c container \u5916\u90e8\uff08\u5305\u62ec\u5bbf\u4e3b\u673a\uff09\u7684\u7f51\u7edc\u8bf7\u6c42\u3002\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," \u5219\u4f1a\uff0c\u56e0\u4e3a\u5b83\u8868\u793a\u63a5\u6536\u6765\u81ea\u4efb\u610f\u63a5\u53e3\u7684\u7f51\u7edc\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"container \u7f51\u7edc\u63a5\u53e3\u7684\u793a\u610f\u56fe",src:n(7846).Z,width:"944",height:"902"})),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u82e5\u671f\u671b\u5230\u8fbe\u6216\u6765\u81ea\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u8bf7\u6c42\u88ab container \u5185\u7684\u8fdb\u7a0b\u63a5\u6536\uff0c\u8ba9\u8fdb\u7a0b\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," \u7f51\u7edc\u63a5\u53e3\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/59179831/docker-app-server-ip-address-127-0-0-1-difference-of-0-0-0-0-ip"},"Docker app server ip address 127.0.0.1 difference of 0.0.0.0 ip")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost"},"What is the difference between 0.0.0.0, 127.0.0.1 and localhost?"))))}u.isMDXComponent=!0},7846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/B15D04DD618F40EA9BC78272A03F3630-af36f3d4776ca7507da2f57ee903635c.png"}}]);