"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[7483],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),b=o,d=m["".concat(c,".").concat(b)]||m[b]||s[b]||l;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5131:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const l={},a="homebrew",i={unversionedId:"code/cli/homebrew",id:"code/cli/homebrew",title:"homebrew",description:"* Homebrew \u5c06\u88ab\u5b89\u88c5\u5230 /usr/local/",source:"@site/docs/code/03-cli/homebrew.md",sourceDirName:"code/03-cli",slug:"/code/cli/homebrew",permalink:"/docs/code/cli/homebrew",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/code/03-cli/homebrew.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"grep",permalink:"/docs/code/cli/grep"},next:{title:"linux-and-shell",permalink:"/docs/code/cli/linux-and-shell"}},c={},p=[],u={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"homebrew"},"homebrew"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Homebrew \u5c06\u88ab\u5b89\u88c5\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/")),(0,o.kt)("li",{parentName:"ul"},"Formula \u5c06\u628a\u5305\u5b89\u88c5\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/Cellar/"),"\uff0c \u5e76\u8f6f\u94fe\u63a5\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew help\n\nbrew search [TEXT|/REGEX/]\nbrew info [FORMULA...]\n\nbrew install FORMULA...\nbrew cask install FORMULA...\n\nbrew update\nbrew upgrade [FORMULA...]\n\nbrew uninstall FORMULA...\n\nbrew list [FORMULA...]\nbrew cask list [FORMULA...]\n")))}s.isMDXComponent=!0}}]);