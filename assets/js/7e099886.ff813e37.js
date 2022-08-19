"use strict";(self.webpackChunkhippy=self.webpackChunkhippy||[]).push([[72],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l="Python \u57fa\u7840",i={unversionedId:"code/lang/python/basic",id:"code/lang/python/basic",title:"Python \u57fa\u7840",description:"\u6570\u636e\u7c7b\u578b",source:"@site/docs/code/lang/python/basic.md",sourceDirName:"code/lang/python",slug:"/code/lang/python/basic",permalink:"/docs/code/lang/python/basic",draft:!1,editUrl:"https://github.com/chenpeirui/chenpeirui.github.io/tree/main/docs/code/lang/python/basic.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"Node.js \u5783\u573e\u56de\u6536",permalink:"/docs/code/lang/javascript/node.js/nodejs-garbage-collection"},next:{title:"curl",permalink:"/docs/code/cli/curl"}},p={},c=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"int, float",id:"int-float",level:3},{value:"str",id:"str",level:3},{value:"\u5b57\u7b26\u4e32\u548c\u7f16\u7801",id:"\u5b57\u7b26\u4e32\u548c\u7f16\u7801",level:4},{value:"\u683c\u5f0f\u5316",id:"\u683c\u5f0f\u5316",level:4},{value:"bool",id:"bool",level:3},{value:"None",id:"none",level:3},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"list \u5217\u8868",id:"list-\u5217\u8868",level:3},{value:"tuple \u5143\u7ec4",id:"tuple-\u5143\u7ec4",level:3},{value:"dict \u5b57\u5178",id:"dict-\u5b57\u5178",level:3},{value:"set \u96c6\u5408",id:"set-\u96c6\u5408",level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"venv",id:"venv",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-\u57fa\u7840"},"Python \u57fa\u7840"),(0,o.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,o.kt)("h3",{id:"int-float"},"int, float"),(0,o.kt)("h3",{id:"str"},"str"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"foo = 'hello'\nbar = \"world\"\n\nbaz = '''\\\nhello\nworld\n'''\n")),(0,o.kt)("h4",{id:"\u5b57\u7b26\u4e32\u548c\u7f16\u7801"},"\u5b57\u7b26\u4e32\u548c\u7f16\u7801"),(0,o.kt)("p",null,"\u5185\u5b58\u4e2d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"unicode")," \u7f16\u7801\uff1b\u4e3a\u4e86\u8282\u7701\u7a7a\u95f4\uff0c\u5199\u5165\u78c1\u76d8\u6216\u8f93\u51fa\u5230\u7f51\u7edc\u65f6\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"utf-8")," \u7f16\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \u7f16\u89e3\u7801\n'abc'.encode('utf-8') # => b'abc'\nb'abc'.decode('utf-8') # => 'abc'\n")),(0,o.kt)("h4",{id:"\u683c\u5f0f\u5316"},"\u683c\u5f0f\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"'Hello, %s!' % 'World' # => 'Hello, World!'\n# \u591a\u4e2a\u5360\u4f4d\u7b26\u65f6\uff0c\u7528\u62ec\u53f7\u5305\u88f9\n'Hello, %s and %s!' % ('You', 'Me') # => 'Hello, You and Me!'\n\n# \u5360\u4f4d\u7b26\u7c7b\u578b\n%s # str\n%d # digist/int\n%f # float\n%x # \u5341\u516d\u8fdb\u5236\u6574\u6570\n")),(0,o.kt)("h3",{id:"bool"},"bool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"True or False\nTrue and False\nnot True\n")),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \u51fd\u6570\u65e0 'return' \u6216 'return \u7a7a' \u65f6\uff0c\u5747\u8fd4\u56de None\nNone\n")),(0,o.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("h3",{id:"list-\u5217\u8868"},"list \u5217\u8868"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# define\nfoo = [1, 'world']\n\n# read\nfoo[0] # => 1\nfoo[-1] # => 'world'\n\n# update\nfoo[0] = 2\nfoo[0] # => 2\n\n# create\nfoo.append('new')\nfoo.insert(1, 'second')\n\n# delete\nfoo.pop()\n\n# others\nlen(foo) # => 3\n")),(0,o.kt)("h3",{id:"tuple-\u5143\u7ec4"},"tuple \u5143\u7ec4"),(0,o.kt)("p",null,"\u4e0d\u53ef\u53d8\u7684 list\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# define\nfoo = ('cassie', 'perry', 'someone')\n# empty tuple\nbar = ()\n# one element tuple\nbaz = ('first',)\n\n# read\nfoo[0] # => 'cassie'\n")),(0,o.kt)("h3",{id:"dict-\u5b57\u5178"},"dict \u5b57\u5178"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# define\nuser = {\n  name: 'perry',\n  birth: 1992,\n}\n\n# exists\n'test' in user # => False\n\n# read\nuser.get('test') # => None\nuser['name'] # => 'perry'\nuser['test'] # => Error\n\n# update\nuser['birth'] = 2020\n\n# delete\nuser.pop('birth') # => 2020\n")),(0,o.kt)("h3",{id:"set-\u96c6\u5408"},"set \u96c6\u5408"),(0,o.kt)("p",null,"\u4ec5\u6709 Key \u4e14\u552f\u4e00\u7684 dict\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# define\nfoo = set([1, 1, 2]) # => {1, 2}\n\n# create\nfoo.add(3)\n\n# delete\nfoo.delete(3)\n")),(0,o.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def doSomething(param1, param2):\n  # \u6570\u636e\u7c7b\u578b\u68c0\u67e5\n  if not isinstance(param1, (int, float)):\n    raise TypeError('bad operand type')\n  if not param2:\n    # \u8df3\u8fc7\n    pass\n\n  # \u8fd4\u56de\u591a\u4e2a\u503c\uff0c\u5b9e\u9645\u4e0a\u662f\u8fd4\u56de tuple\n  return 1, 2\n\nfoo, bar = doSomething(1, 2)\n")),(0,o.kt)("h2",{id:"venv"},"venv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource ./venv/bin/activate\n")))}d.isMDXComponent=!0}}]);