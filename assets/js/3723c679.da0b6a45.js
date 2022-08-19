"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[1206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(s,a(a({ref:t},c),{},{components:n})):r.createElement(s,a({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),l=(n(7294),n(3905));const i={},a="pkg",o={unversionedId:"code/go/pkg",id:"code/go/pkg",title:"pkg",description:"fmt",source:"@site/docs/code/go/pkg.md",sourceDirName:"code/go",slug:"/code/go/pkg",permalink:"/docs/code/go/pkg",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/code/go/pkg.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"Go",permalink:"/docs/code/go/lang-basic"},next:{title:"Node.js",permalink:"/docs/code/javascript/node.js/"}},p={},d=[{value:"fmt",id:"fmt",level:2},{value:"log",id:"log",level:2},{value:"os",id:"os",level:2},{value:"<code>database/sql</code>",id:"databasesql",level:2},{value:"<code>gorm</code>",id:"gorm",level:2},{value:"<code>error</code>",id:"error",level:2},{value:"<code>strconv</code>",id:"strconv",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pkg"},"pkg"),(0,l.kt)("h2",{id:"fmt"},"fmt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Print()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Println()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Printf()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'fmt.Errorf("AddAlbum: %v", err)')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Sprintf()"))),(0,l.kt)("h2",{id:"log"},"log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log.Fatal(err)"))),(0,l.kt)("h2",{id:"os"},"os"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'os.Getenv("ENV_VAR_NAME")'))),(0,l.kt)("h2",{id:"databasesql"},(0,l.kt)("inlineCode",{parentName:"h2"},"database/sql")),(0,l.kt)("p",null,"\u5305 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql")," \u5bf9\u5173\u7cfb\u578b DB \u7684\u64cd\u4f5c\u8fdb\u884c\u4e86\u4e0a\u5c42\u7684\u7edf\u4e00\u5c01\u88c5\uff0cDB \u9002\u914d\u4ea4\u7ed9\u4e0b\u5c42\u7684 driver \u53bb\u5b9e\u73b0\u3002\u5e94\u5c3d\u53ef\u80fd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u907f\u514d\u4f7f\u7528 driver\uff0c\u53ef\u8ba9\u4ee3\u7801\u66f4\u62bd\u8c61\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u7684\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u81ea\u884c\u7ba1\u7406 DB \u7684\u8fde\u63a5\uff0c\u56e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql.DB")," handle \u5e95\u5c42\u5df2\u627f\u62c5\u4e86\u8be5\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"R/W \u6570\u636e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"R: ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Rows()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Row()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Query()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"db.QueryRow()")),(0,l.kt)("li",{parentName:"ul"},"W: ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Exec()"))),(0,l.kt)("p",null,"\u53d6\u6d88\u64cd\u4f5c"),(0,l.kt)("p",null,"\u7f16\u7a0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"required")," import driver"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"required")," \u6253\u5f00\u67d0\u4e2a\u6570\u636e\u5e93\u7684 handle: ",(0,l.kt)("inlineCode",{parentName:"li"},"sql.Open()")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"required")," \u786e\u8ba4\u8fde\u63a5\u6210\u529f ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Ping()"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"sql.Open()")," \u4e0d\u4f1a\u5efa\u7acb\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"required")," R/W \u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"optional")," \u91ca\u653e\u8d44\u6e90 ",(0,l.kt)("inlineCode",{parentName:"li"},"defer rows.Close()"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Rows()")," \u53ef\u80fd\u5c06\u5927\u91cf\u6570\u636e\u8bfb\u5165\u5185\u5b58\uff0c\u5efa\u8bae\u624b\u52a8\u91ca\u653e")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"context")),(0,l.kt)("h2",{id:"gorm"},(0,l.kt)("inlineCode",{parentName:"h2"},"gorm")),(0,l.kt)("h2",{id:"error"},(0,l.kt)("inlineCode",{parentName:"h2"},"error")),(0,l.kt)("h2",{id:"strconv"},(0,l.kt)("inlineCode",{parentName:"h2"},"strconv")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strconv.Atoi()"))))}m.isMDXComponent=!0}}]);