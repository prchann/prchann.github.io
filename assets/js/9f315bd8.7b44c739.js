"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[5954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:0},o="jQuery",l={unversionedId:"code/front-end/jquery",id:"code/front-end/jquery",title:"jQuery",description:"$(document).ready()",source:"@site/docs/code/01-front-end/jquery.md",sourceDirName:"code/01-front-end",slug:"/code/front-end/jquery",permalink:"/docs/code/front-end/jquery",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/code/01-front-end/jquery.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"codeSidebar",previous:{title:"\u7f16\u7801",permalink:"/docs/code/"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/code/front-end/best-practice"}},s={},c=[{value:"<code>$(document).ready()</code>",id:"documentready",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Selecting Elements",id:"selecting-elements",level:2},{value:"Working with Selections",id:"working-with-selections",level:2},{value:"Manipulating Elements",id:"manipulating-elements",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jquery"},"jQuery"),(0,i.kt)("h2",{id:"documentready"},(0,i.kt)("inlineCode",{parentName:"h2"},"$(document).ready()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5f53 DOM \u52a0\u8f7d\u5b8c\u6210\u65f6\uff0c\u8fd0\u884c\u4ee3\u7801\n$(document).ready(function() {\n\n});\n\n// shorthand\n$(function() {\n\n});\n\n\n// \u5f53\u6574\u4e2a\u9875\u9762\uff08\u5305\u62ec DOM, images, iframes \u7b49\u8d44\u6e90\uff09\u52a0\u8f7d\u5b8c\u6210\u65f6\uff0c\u8fd0\u884c\u4ee3\u7801\nwindow.onload = function() {\n\n};\n\n// \u6216\u8005\n$(window).on('load', function() {\n\n})\n")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// set\n$().attr('key', 'value');\n// set patch\n$().attr({\n  key0: 'v0',\n  key1: 'v1'\n});\n\n// get\nconst v0 = $().attr('key');\n")),(0,i.kt)("h2",{id:"selecting-elements"},"Selecting Elements"),(0,i.kt)("p",null,"\u9009\u62e9\u5668\u5e94\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u77ed\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u7cbe\u51c6\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'$(\'#myId\'); // ID: \u8981\u6c42\u5728\u9875\u9762\u4e2d\u552f\u4e00\u3002\n$(\'.myClass\'); // \u7c7b\n$("input[name=\'first_name\']"); // \u5c5e\u6027\n$("#contents ul.people li"); // CSS \u7ec4\u5408\n$("div.myClass, ul.people"); // \u5217\u8868\uff1a\u7528\u9017\u53f7\u5206\u5272\n\n// \u4f2a\u7c7b\n$( "a.external:first" ); // \u7b2c\u4e00\u4e2a\n$( "tr:odd" ); // \u5947\u6570\n\n$( "#myForm :input" ); // \u5168\u90e8 input-like \u5143\u7d20\n$( "div:visible" ); // \u53ef\u89c1\n$( "div:gt(2)" ); // \u7b2c\u4e8c\u4e2a\u53ca\u4ee5\u540e\n$( "div:animated" ); // \u5168\u90e8\u6b63\u5728\u8fd0\u52a8\u7684 div\n\n\n// \u5224\u65ad\u662f\u5426\u6709\u9009\u4e2d\u5143\u7d20\nif ( $(\'div.foo\').length ) {\n\n}\n\n\n// \u63d0\u70bc\uff0c\u8fc7\u6ee4\n$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags\n$( "h1" ).not( ".bar" );           // h1 elements that don\'t have a class of bar\n$( "ul li" ).filter( ".current" ); // unordered list items with class of current\n$( "ul li" ).first();              // just the first unordered list item\n$( "ul li" ).eq( 5 );              // the sixth\n\n\n// \u9009\u62e9\u8868\u5355\u5143\u7d20\n$( "form :checked" ); // \u5305\u542b\u5df2\u52fe\u9009\u7684 checkbox, radio, select\n$( "form :disabled" );\n$( "form :enabled" );\n$( "form :input" ); // \u5305\u542b input, textarea, select, and button\n$( "form :selected" );\n\n// \u6839\u636e\u7c7b\u578b\u7b5b\u9009\n// :password\n// :reset\n// :radio\n// :text\n// :submit\n// :checkbox\n// :button\n// :image\n// :file\n')),(0,i.kt)("h2",{id:"working-with-selections"},"Working with Selections"),(0,i.kt)("p",null,"\u8d4b\u503c\u65f6\uff0c\u5f71\u54cd\u9009\u62e9\u5668\u4e2d\u7684\u5168\u90e8\u5143\u7d20\uff1b\u53d6\u503c\u65f6\uff0c\u4ec5\u83b7\u53d6\u9009\u62e9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u503c\uff08",(0,i.kt)("inlineCode",{parentName:"p"},".text()")," \u9664\u5916\uff0c\u5b83\u83b7\u53d6\u5168\u90e8\u5143\u7d20\u7684\u503c\uff09\u3002"),(0,i.kt)("p",null,"\u94fe\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'$( "#content" )\n    .find( "h3" )\n    .eq( 2 )\n    .html( "new text for the third h3!" );\n')),(0,i.kt)("p",null,"\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},".end()")," \u6765\u8fd4\u56de\u5230\u539f\u5148\u7684\u9009\u62e9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'$( "#content" )\n    .find( "h3" )\n    .eq( 2 )\n        .html( "new text for the third h3!" )\n        .end() // Restores the selection to all h3s in #content\n    .eq( 0 )\n        .html( "new text for the first h3!" );\n')),(0,i.kt)("h2",{id:"manipulating-elements"},"Manipulating Elements"),(0,i.kt)("p",null,"Getting and Setting Information About Elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".html()")," \u2013 Get or set the HTML contents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".text()")," \u2013 Get or set the text contents; HTML will be stripped."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".attr()")," \u2013 Get or set the value of the provided attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".width()")," \u2013 Get or set the width in pixels of the first element in the selection as an integer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".height()")," \u2013 Get or set the height in pixels of the first element in the selection as an integer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".position()")," \u2013 Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".val()")," \u2013 Get or set the value of form elements.")),(0,i.kt)("p",null,"Moving, Copying, and Removing Elements"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn.jquery.com/using-jquery-core/manipulating-elements/"},"https://learn.jquery.com/using-jquery-core/manipulating-elements/")))}p.isMDXComponent=!0}}]);