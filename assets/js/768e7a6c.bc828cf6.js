"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[5963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,f=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="git",c={unversionedId:"code/cli/git",id:"code/cli/git",title:"git",description:"GitHub Git Cheat Sheet",source:"@site/docs/code/03-cli/git.md",sourceDirName:"code/03-cli",slug:"/code/cli/git",permalink:"/docs/code/cli/git",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/code/03-cli/git.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"curl",permalink:"/docs/code/cli/curl"},next:{title:"grep",permalink:"/docs/code/cli/grep"}},l={},p=[{value:"More common command",id:"more-common-command",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git"},"git"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.github.com/training-kit/downloads/github-git-cheat-sheet/"},"GitHub Git Cheat Sheet")),(0,a.kt)("h2",{id:"more-common-command"},"More common command"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"git checkout -- <file>")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discard changes of file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"git push origin :<branch>")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Delete remote branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --soft HEAD~1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Undo last commit")))))}d.isMDXComponent=!0}}]);