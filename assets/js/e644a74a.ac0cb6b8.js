"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[7127],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=l,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={},o="Shell \u57fa\u7840",i={unversionedId:"code/lang/shell/shell-basic",id:"code/lang/shell/shell-basic",title:"Shell \u57fa\u7840",description:"\u6570\u636e\u7c7b\u578b",source:"@site/docs/code/02-lang/00-shell/shell-basic.md",sourceDirName:"code/02-lang/00-shell",slug:"/code/lang/shell/shell-basic",permalink:"/docs/code/lang/shell/shell-basic",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/code/02-lang/00-shell/shell-basic.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/code/front-end/best-practice"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/code/lang/js/node.js/best-practice"}},c={},s=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u5217\u8868 &amp; \u5b57\u5178",id:"\u5217\u8868--\u5b57\u5178",level:3},{value:"\u5217\u8868",id:"\u5217\u8868",level:4},{value:"\u5b57\u5178",id:"\u5b57\u5178",level:4},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:2},{value:"\u904d\u5386",id:"\u904d\u5386",level:2},{value:"\u904d\u5386\u5217\u8868",id:"\u904d\u5386\u5217\u8868",level:3},{value:"\u904d\u5386\u5b57\u5178",id:"\u904d\u5386\u5b57\u5178",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shell-\u57fa\u7840"},"Shell \u57fa\u7840"),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8bbe\u7f6e\nHOST=127.0.0.1\n\n# \u8bfb\u53d6\necho $HOST\n# \u73af\u5883\u53d8\u91cf\u4f1a\u81ea\u52a8\u4f5c\u4e3a\u53d8\u91cf\n# HOST=127.0.0.1 ./test.sh\n")),(0,l.kt)("h3",{id:"\u5217\u8868--\u5b57\u5178"},"\u5217\u8868 & \u5b57\u5178"),(0,l.kt)("h4",{id:"\u5217\u8868"},"\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b9a\u4e49\nlist=(\n    a\n    b\n    c\n    )\n# \u6216\ndeclare -a list=(\n    a\n    b\n    c\n    )\n\n# \u5199\uff0c\u8d77\u59cb\u7d22\u5f15\u4e3a 1\nlist[4]=d\n\n# \u8bfb\u5143\u7d20\necho ${list[1]} # > a\n# \u8bfb\u5168\u90e8\u5143\u7d20\necho ${list[@]} # > a b c d\n# \u8bfb\u957f\u5ea6\necho ${#list[@]} # > 4\n")),(0,l.kt)("h4",{id:"\u5b57\u5178"},"\u5b57\u5178"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5b9a\u4e49\ndeclare -A user\n\n# \u5199\nuser[name]="username"\nuser[birth]="1970-01-01"\n\n# \u8bfb\u5143\u7d20\necho ${user[name]} # > username\n# \u8bfb\u5168\u90e8\u5143\u7d20\necho ${user[@]} # > username 1970-01-01\n')),(0,l.kt)("h2",{id:"\u6761\u4ef6"},"\u6761\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5224\u65ad\u53d8\u91cf var \u662f\u5426\u4e3a\u7a7a\u5b57\u7b26\u4e32\nif [ -z "$var" ]; then\n    echo empty\nelse\n    echo not empty\nfi\n')),(0,l.kt)("h2",{id:"\u904d\u5386"},"\u904d\u5386"),(0,l.kt)("h3",{id:"\u904d\u5386\u5217\u8868"},"\u904d\u5386\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"list=(1\n    2\n    3\n    )\nfor i in \"${list[@]}\"; do\n    echo \"$i\"\ndone\n\nfor Item in 'Item 1' 'Item 2' 'Item 3' 'Item 4'; do\n    echo \"$Item\"\ndone\n")),(0,l.kt)("h3",{id:"\u904d\u5386\u5b57\u5178"},"\u904d\u5386\u5b57\u5178"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'declare -A dict\ndict[k]=v\n\nfor k in "${!dict[@]}"; do\n    echo key is "$k", value is "${dict[$k]}"\ndone\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.compciv.org/unix-tools/"},"General purpose command-line tools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.compciv.org/bash-guide/"},"The Bash Primer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Idnan/bash-guide"},"Idnan/bash-guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jlevy/the-art-of-command-line"},"the-art-of-command-line"))))}u.isMDXComponent=!0}}]);