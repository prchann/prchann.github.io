"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[9340],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l="Vim",o={unversionedId:"basic/miscellaneous/vim",id:"basic/miscellaneous/vim",title:"Vim",description:"\u6559\u7a0b",source:"@site/docs/basic/miscellaneous/vim.md",sourceDirName:"basic/miscellaneous",slug:"/basic/miscellaneous/vim",permalink:"/docs/basic/miscellaneous/vim",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/basic/miscellaneous/vim.md",tags:[],version:"current",frontMatter:{},sidebar:"basicSidebar",previous:{title:"\u6559\u7a0b",permalink:"/docs/basic/miscellaneous/guide"},next:{title:"Visual Studio Code",permalink:"/docs/basic/miscellaneous/visual-studio-code"}},c={},s=[{value:".vimrc",id:"vimrc",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vim"},"Vim"),(0,a.kt)("p",null,"\u6559\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"> vimtutor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cs.colostate.edu/helpdocs/vi.html"},"Basic vi Commands"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'i: insert \u5728\u5149\u6807\u524d\u63d2\u5165\na: append \u5728\u5149\u6807\u540e\u63d2\u5165\nA: \u5728\u672c\u884c\u540e\u63d2\u5165\nctl + f: forward \u5411\u524d\u4e00\u9875\nctl + b: backward \u5411\u540e\u4e00\u9875\nctl + d: down \u5411\u4e0b\u534a\u9875\nctl + u: up \u5411\u4e0a\u534a\u9875\n\ndw: delete word\nd$: \u4ece\u5149\u6807\u5220\u9664\u81f3\u884c\u5c3e\n\nw - word \u4ece\u5f53\u524d\u5149\u6807\u5f53\u524d\u4f4d\u7f6e\u76f4\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u8d77\u59cb\u5904\uff0c\u4e0d\u5305\u62ec\u5b83\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u3002\ne - word end \u4ece\u5f53\u524d\u5149\u6807\u5f53\u524d\u4f4d\u7f6e\u76f4\u5230\u201c\u5355\u8bcd\u672b\u5c3e\u201d\uff0c\u5305\u62ec\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u3002\n$ - \u4ece\u5f53\u524d\u5149\u6807\u5f53\u524d\u4f4d\u7f6e\u76f4\u5230\u5f53\u524d\u884c\u672b\u3002\n\n\u4f7f\u7528\u64cd\u4f5c\u7b26\u65f6\u8f93\u5165\u6570\u5b57\u53ef\u4ee5\u4f7f\u5b83\u91cd\u590d\u90a3\u4e48\u591a\u6b21\n\u8f93\u5165 2w \u4f7f\u5149\u6807\u5411\u524d\u79fb\u52a8\u4e24\u4e2a\u5355\u8bcd\u3002\n\u8f93\u5165 3e \u4f7f\u5149\u6807\u5411\u524d\u79fb\u52a8\u5230\u7b2c\u4e09\u4e2a\u5355\u8bcd\u7684\u672b\u5c3e\u3002\n\u8f93\u5165 0 (\u6570\u5b57\u96f6) \u79fb\u52a8\u5149\u6807\u5230\u884c\u9996\u3002\n\ndd: \u5220\u9664\u5f53\u524d\u884c\n2dd:\n\nu: undo\nU: undo \u6574\u884c\nctl + r: redo\noperator [number] motion: d2w delete 2 words\n\ndd\np: \u5c06\u5220\u9664\u7684\u884c\u7c98\u8d34\u5230\u5149\u6807\u7684\u540e\u4e00\u884c\n\nr: replace \u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\n\nce: change to word end\uff1b\u5220\u9664\u81f3\u5355\u8bcd\u5c3e\u90e8\uff0c\u540c\u65f6\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\n\nctl + g: \u5728\u72b6\u6001\u680f\u663e\u793a\u5f53\u524d\u6587\u4ef6\u540d\u548c\u5149\u6807\u6240\u5728\u884c\u7684\u4fe1\u606f\nG: \u8df3\u8f6c\u5230\u6587\u4ef6\u6700\u540e\u4e00\u884c\ngg: \u8df3\u8f6c\u5230\u6587\u4ef6\u7b2c\u4e00\u884c\nnumber + G: \u8df3\u8f6c\u5230\u7b2c number \u884c\n\n/ + pattern: \u641c\u7d22 pattern\nn: \u4e0b\u4e00\u4e2a\nN: \u4e0a\u4e00\u4e2a\n\n%: \u8df3\u8f6c\u5230\u5339\u914d\u7684\u62ec\u53f7\u7b26 ([{ \u7b49\n\n`:s/old/new`: \u66ff\u6362\u4e00\u4e2a\n`:s/old/new/g`: \u66ff\u6362\u4e00\u884c\n`#,#s/old/new/g`: \u66ff\u6362\u4ece # \u5230 # \u884c\n`:%s/old/new/g`: \u66ff\u6362\u6574\u4e2a\u6587\u4ef6\n`:%s/old/new/gc`: \u66ff\u6362\u6574\u4e2a\u6587\u4ef6\uff0c\u6bcf\u4e2a\u66ff\u6362\u524d\u7ed9\u4e88\u786e\u8ba4\n`:[start_line_no],[end_line_no]d`: \u5220\u9664\u6307\u5b9a\u7684\u884c\nCTRL-O \u5e26\u60a8\u8df3\u8f6c\u56de\u8f83\u65e7\u7684\u4f4d\u7f6e\uff0cCTRL-I \u5219\u5e26\u60a8\u5230\u8f83\u65b0\u7684\u4f4d\u7f6e\n\n`:!ls`: \u6267\u884c shell \u547d\u4ee4\n\nv: \u53ef\u89c6\u6a21\u5f0f\uff0c\u79fb\u52a8\u5149\u6807\u6765\u9009\u62e9\u6587\u672c\n`:w TEST`: \u5c06\u9009\u4e2d\u7684\u6587\u672c\u4fdd\u5b58\u81f3 TEST \u6587\u4ef6\u4e2d\nd: \u5220\u9664\u9009\u4e2d\u7684\u6587\u672c\n\n`:r FILE`: read \u8bfb\u53d6 FILE \u7684\u5185\u5bb9\uff0c\u5e76\u5c06\u5176\u7f6e\u5165\u5230\u5149\u6807\u6240\u5728\u4f4d\u7f6e\n`:r !ls`: \u8bfb\u53d6 ls \u547d\u4ee4\u7684\u8f93\u5165\uff0c\u5e76\u5c06\u5176\u7f6e\u5165\u5230\u5149\u6807\u6240\u5728\u4f4d\u7f6e\n\no: \u5728\u4e0b\u884c\u5f00\u59cb\u63d2\u5165\nO: \u5728\u4e0a\u884c\u5f00\u59cb\u63d2\u5165\n\nR: \u66ff\u6362\u6a21\u5f0f\uff0c\u6bcf\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\u5c06\u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\n\ny: yank \u590d\u5236\np: paste \u7c98\u8d34\nyw: \u590d\u5236\u4e00\u4e2a\u5355\u8bcd\n\n`:set ic`: ignore case\n`/pattern/c`: \u5355\u6b21\u5ffd\u7565\u5927\u5c0f\u5199\n`:set hls is`: hightlight search, incsearch\n\nCTRL-D \u548c <TAB> \u53ef\u4ee5\u8fdb\u884c"\u547d\u4ee4\u884c"\u8865\u5168\n\nCTRL-W CTRL-W  \u53ef\u4ee5\u4f7f\u60a8\u5728\u7a97\u53e3\u4e4b\u95f4\u8df3\u8f6c\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"b: \u5411\u540e\u79fb\u52a8\u5149\u6807\u4e00\u4e2a\u5355\u8bcd\nI: \u5728\u672c\u884c\u6700\u524d\u9762\u5f00\u59cb\u8f93\u5165\nC: \u5220\u9664\u672c\u884c\u5149\u6807\u540e\u7684\u5185\u5bb9\uff0c\u5e76\u5f00\u59cb\u63d2\u5165\ncc: \u5220\u9664\u672c\u884c\u5185\u5bb9\uff0c\u5e76\u5f00\u59cb\u63d2\u5165\nD: \u5220\u9664\u672c\u884c\u5149\u6807\u540e\u7684\u5185\u5bb9\ndd: \u5220\u9664\u672c\u884c\nyy: \u590d\u5236\u672c\u884c\n")),(0,a.kt)("h2",{id:"vimrc"},".vimrc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vim-plug"),(0,a.kt)("li",{parentName:"ul"},"vim-javascript"),(0,a.kt)("li",{parentName:"ul"},"nerdtree"),(0,a.kt)("li",{parentName:"ul"},"syntastic: install eslint globally")))}p.isMDXComponent=!0}}]);