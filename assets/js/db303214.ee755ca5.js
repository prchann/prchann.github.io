"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[9186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="CLI",p={unversionedId:"basic/os/cli",id:"basic/os/cli",title:"CLI",description:"\u5e38\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002",source:"@site/docs/basic/03-os/02-cli.md",sourceDirName:"basic/03-os",slug:"/basic/os/cli",permalink:"/docs/basic/os/cli",draft:!1,editUrl:"https://github.com/prchann/prchann.github.io/tree/main/docs/basic/03-os/02-cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"basicSidebar",previous:{title:"K8s",permalink:"/docs/basic/os/k8s"},next:{title:"Web \u670d\u52a1",permalink:"/docs/basic/arch/web-server"}},i={},c=[{value:"\u7f51\u7edc\u7c7b",id:"\u7f51\u7edc\u7c7b",level:2},{value:"netstat",id:"netstat",level:3},{value:"lsof",id:"lsof",level:3},{value:"telnet",id:"telnet",level:3},{value:"dig",id:"dig",level:3},{value:"tcpdump",id:"tcpdump",level:3},{value:"\u8fdb\u7a0b\u7c7b",id:"\u8fdb\u7a0b\u7c7b",level:2},{value:"\u67e5\u627e PID",id:"\u67e5\u627e-pid",level:3},{value:"\u8f85\u52a9\u7c7b",id:"\u8f85\u52a9\u7c7b",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli"},"CLI"),(0,a.kt)("p",null,"\u5e38\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u7f51\u7edc\u7c7b"},"\u7f51\u7edc\u7c7b"),(0,a.kt)("h3",{id:"netstat"},"netstat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u88ab\u76d1\u542c\u7684\u7aef\u53e3\nnetstat -an | grep LISTEN\n")),(0,a.kt)("h3",{id:"lsof"},"lsof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b port \u7684\u5360\u7528\u60c5\u51b5\nlsof -i :<port>\n")),(0,a.kt)("h3",{id:"telnet"},"telnet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5224\u65ad host:port \u7684\u53ef\u8bbf\u95ee\u6027\ntelnet <host> <port>\n")),(0,a.kt)("h3",{id:"dig"},"dig"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b DNS \u89e3\u6790\ndig example.com\n\n# \u4ec5\u67e5\u770b\u89e3\u6790\u7ed3\u679c\ndig +short example.com\n\n# \u53cd\u8f6c\uff1a\u901a\u8fc7 IP \u67e5\u57df\u540d\ndig -x 8.8.8.8\n")),(0,a.kt)("h3",{id:"tcpdump"},"tcpdump"),(0,a.kt)("p",null,"TCP \u534f\u8bae\u6293\u5305\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6293\u53d6\u4e00\u7aef\u53e3\u7684 TCP \u5305\ntcpdump -i any port <port>\n\n# \u6293\u53d6\u6765\u53bb\u4e00\u4e3b\u673a\u7684\u5305\ntcpdump host www.example.com\n\n# \u5217\u51fa\u5168\u90e8\u53ef\u7528\u7684\u7f51\u7edc\u63a5\u53e3\ntcpdump -D\n")),(0,a.kt)("p",null,"\u76f8\u4f3c\u5de5\u5177\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mitmproxy/mitmproxy"},"mitmproxy"),": HTTP \u534f\u8bae\u6293\u5305\u5de5\u5177")),(0,a.kt)("h2",{id:"\u8fdb\u7a0b\u7c7b"},"\u8fdb\u7a0b\u7c7b"),(0,a.kt)("h3",{id:"\u67e5\u627e-pid"},"\u67e5\u627e PID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6309\u540d\u79f0\u67e5\u627e PID\npgrep <process_name>\n\n# \u4ec5\u5c55\u793a\u6700\u65b0\u7684\u4e00\u4e2a\u8fdb\u7a0b\npgrep -n <process_name>\n# \u4ec5\u5c55\u793a\u6700\u8001\u7684\u4e00\u4e2a\u8fdb\u7a0b\npgrep -o <process_name>\n\n# \u6740\u6b7b\u5339\u914d <pattern> \u7684\u5168\u90e8 PID\npgrep -f <pattern> | xargs kill\n")),(0,a.kt)("h2",{id:"\u8f85\u52a9\u7c7b"},"\u8f85\u52a9\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u91cd\u590d\u6267\u884c\u67d0\u4e2a\u6307\u4ee4\nwatch -n 10 -c -d <cmd>\n# -n: \u6307\u5b9a\u91cd\u590d\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4 2s\n# -c: \u5c55\u793a ANSI \u989c\u8272\n# -d: \u9ad8\u4eae\u524d\u540e\u4e24\u6b21\u8f93\u51fa\u7ed3\u679c\u7684\u4e0d\u540c\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Idnan/bash-guide"},"Idnan/bash-guide")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://www.compciv.org/unix-tools/"},"General purpose command-line tools"))))}u.isMDXComponent=!0}}]);