"use strict";(self.webpackChunkolight_turbo_docusaurus_docs=self.webpackChunkolight_turbo_docusaurus_docs||[]).push([[1175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),m=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||a;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var m=2;m<a;m++)l[m]=r[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:7},l="\u6a21\u5757",p={unversionedId:"tutorial-javascript/module",id:"tutorial-javascript/module",title:"\u6a21\u5757",description:"ES6 modules",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial-javascript/module.md",sourceDirName:"tutorial-javascript",slug:"/tutorial-javascript/module",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/module",draft:!1,editUrl:"https://github.com/Olight-Headless/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/module.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u7c7b",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/class"},next:{title:"\u64cd\u4f5c\u7b26",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/operator"}},i={},m=[{value:"ES6 modules",id:"es6-modules",level:2},{value:"\u5f15\u5165\u540c\u4e00\u6a21\u5757",id:"\u5f15\u5165\u540c\u4e00\u6a21\u5757",level:2},{value:"\u5f15\u5165\u6a21\u5757\u987a\u5e8f",id:"\u5f15\u5165\u6a21\u5757\u987a\u5e8f",level:2},{value:"\u7981\u6b62 default",id:"\u7981\u6b62-default",level:2},{value:"\u7981\u6b62\u5f15\u7528\u81ea\u8eab",id:"\u7981\u6b62\u5f15\u7528\u81ea\u8eab",level:2},{value:"\u7981\u6b62\u5faa\u73af\u5f15\u7528",id:"\u7981\u6b62\u5faa\u73af\u5f15\u7528",level:2},{value:"\u5bfc\u51fa\u7684\u540d\u79f0\u4f5c\u4e3a\u5c5e\u6027",id:"\u5bfc\u51fa\u7684\u540d\u79f0\u4f5c\u4e3a\u5c5e\u6027",level:2},{value:"import \u8bed\u53e5\u7684\u6392\u5e8f",id:"import-\u8bed\u53e5\u7684\u6392\u5e8f",level:2},{value:"default export",id:"default-export",level:2},{value:"\u76f4\u63a5 export",id:"\u76f4\u63a5-export",level:2},{value:"EMS\u548cCJS",id:"ems\u548ccjs",level:2}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,n.kt)("h2",{id:"es6-modules"},"ES6 modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u4f7f\u7528 ES6 modules \u800c\u975e\u5176\u4ed6\u975e\u6807\u51c6\u7684\u6a21\u5757\u7cfb\u7edf\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import#module-systems"},"import/module-systems")),(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ES6 modules (",(0,n.kt)("inlineCode",{parentName:"p"},"import"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"export"),")\uff0c\u800c\u4e0d\u662f\u5176\u4ed6\u975e\u6807\u51c6\u7684\u6a21\u5757\u7cfb\u7edf\uff0c\u5982 CommonJS\u3001AMD\u3001CMD\u3002"),(0,n.kt)("p",{parentName:"li"},"ES6 modules \u4f5c\u4e3a\u6807\u51c6\u4ee3\u8868\u7740\u672a\u6765\uff0c\u8ba9\u6211\u4eec\u62e5\u62b1\u672a\u6765\u5427\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst React = require('react');\nmodule.exports = React.Component;\n\n// good\nimport React, { Component } from 'react';\nexport default Component;\n")))),(0,n.kt)("h2",{id:"\u5f15\u5165\u540c\u4e00\u6a21\u5757"},"\u5f15\u5165\u540c\u4e00\u6a21\u5757"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u4e0d\u8981\u7528\u591a\u4e2a import \u5f15\u5165\u540c\u4e00\u6a21\u5757\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md"},"import/no-duplicates")),(0,n.kt)("p",{parentName:"li"},"\u591a\u6761 ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\u5f15\u5165\u4e86\u540c\u4e00\u6a21\u5757\u4f1a\u964d\u4f4e\u53ef\u7ef4\u62a4\u6027\uff0c\u4f60\u9700\u8981\u5c06\u5b83\u4eec\u5408\u6210\u4e00\u6761\u8bed\u53e5\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport React from 'react';\nimport { Component }  from 'react';\n\n// good\nimport React, { Component } from 'react';\n")))),(0,n.kt)("h2",{id:"\u5f15\u5165\u6a21\u5757\u987a\u5e8f"},"\u5f15\u5165\u6a21\u5757\u987a\u5e8f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011import \u8bed\u53e5\u9700\u8981\u653e\u5230\u6a21\u5757\u7684\u6700\u4e0a\u65b9\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md"},"import/first")),(0,n.kt)("p",{parentName:"li"},"\u7531\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\u4f1a\u88ab\u58f0\u660e\u63d0\u5347\uff0c\u5c06\u5b83\u4eec\u653e\u5230\u6a21\u5757\u7684\u6700\u4e0a\u65b9\u4ee5\u9632\u6b62\u5f02\u5e38\u884c\u4e3a\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport foo from 'foo';\nfoo.init();\n\nimport bar from 'bar';\nbar.init();\n\n// good\nimport foo from 'foo';\nimport bar from 'bar';\n\nfoo.init();\nbar.init();\n")))),(0,n.kt)("h2",{id:"\u7981\u6b62-default"},"\u7981\u6b62 default"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u7981\u6b62 default import \u7684\u540d\u5b57\u8ddf\u6587\u4ef6\u5185\u7684\u5176\u4ed6 export \u547d\u540d\u76f8\u540c\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md"},"import/no-named-as-default")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// foo.js\nexport default 'foo';\nexport const bar = 'bar';\n\n// bad\nimport bar from './foo.js';\n\n// good\nimport foo from './foo.js';\n")))),(0,n.kt)("h2",{id:"\u7981\u6b62\u5f15\u7528\u81ea\u8eab"},"\u7981\u6b62\u5f15\u7528\u81ea\u8eab"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3010\u5f3a\u5236\u3011\u7981\u6b62\u5f15\u7528\u81ea\u8eab\u3002eslint: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md"},"import/no-self-import"))),(0,n.kt)("h2",{id:"\u7981\u6b62\u5faa\u73af\u5f15\u7528"},"\u7981\u6b62\u5faa\u73af\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3010\u5f3a\u5236\u3011\u7981\u6b62\u5faa\u73af\u5f15\u7528\u3002eslint: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md"},"import/no-cycle"))),(0,n.kt)("h2",{id:"\u5bfc\u51fa\u7684\u540d\u79f0\u4f5c\u4e3a\u5c5e\u6027"},"\u5bfc\u51fa\u7684\u540d\u79f0\u4f5c\u4e3a\u5c5e\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u4e0d\u8981\u5728 default export \u4e0a\u4f7f\u7528\u4e00\u4e2a\u5df2\u5bfc\u51fa\u7684\u540d\u79f0\u4f5c\u4e3a\u5c5e\u6027\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md"},"import/no-named-as-default-member")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// foo.js\nexport default 'foo';\nexport const bar = 'bar';\n\n// bad\nimport foo from './foo.js';\nconst bar = foo.bar; // or\nconst { bar } = foo;\n\n// good\nimport foo, { bar } from './foo.js';\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2.7.8\u3010\u63a8\u8350\u3011\u5728\u6a21\u5757\u5bfc\u5165\u4e4b\u540e\u4fdd\u7559\u4e00\u4e2a\u7a7a\u884c\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md"},"import/newline-after-import")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport foo from './foo.js';\nconst FOO = 'FOO'\n\n// good\nimport foo from './foo.js';\n\nconst FOO = 'FOO'\n")))),(0,n.kt)("h2",{id:"import-\u8bed\u53e5\u7684\u6392\u5e8f"},"import \u8bed\u53e5\u7684\u6392\u5e8f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011import \u8bed\u53e5\u7684\u6392\u5e8f\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md"},"import/order")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\u5efa\u8bae\u6309\u4ee5\u4e0b\u89c4\u5219\u6392\u5e8f\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5148 ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," \u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u518d ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," \u81ea\u5df1\u5de5\u7a0b\u91cc\u7684\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u5148 ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," \u7edd\u5bf9\u8def\u5f84\uff0c\u518d ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," \u76f8\u5bf9\u8def\u5f84")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport foo from 'components/foo';\nimport './index.scss';\nimport React from 'react';\n\n// good\nimport React from 'react';\nimport foo from 'components/foo';\nimport './index.scss';\n")))),(0,n.kt)("h2",{id:"default-export"},"default export"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011\u5f53\u6a21\u5757\u5185\u53ea\u6709\u4e00\u4e2a export \u65f6\uff0c\u4f7f\u7528 default export\u3002eslint: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md"},"import/prefer-default-export")),(0,n.kt)("p",{parentName:"li"},"\u6211\u4eec\u4e5f\u5efa\u8bae\u6587\u4ef6\u5185\u53ea\u5305\u542b\b\u4e00\u4e2a export\uff0c\u8fd9\u6709\u5229\u4e8e\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nexport function foo() {}\n\n// good\nexport default function foo() {}\n")))),(0,n.kt)("h2",{id:"\u76f4\u63a5-export"},"\u76f4\u63a5 export"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011\u4e0d\u8981\u5728 import \u65f6\u76f4\u63a5 export\u3002"),(0,n.kt)("p",{parentName:"li"},"\u867d\u7136\u4e00\u884c\u4ee3\u7801\u66f4\b\u7b80\u6d01\uff0c\b\u4f46\u8fd9\u4e0d\u5229\u4e8e\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u4e00\u81f4\u6027\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nexport { Com as Component } from 'react';\n\n// good\nimport { Component } from 'react';\n\nexport default Component;\n")))),(0,n.kt)("h2",{id:"ems\u548ccjs"},"EMS\u548cCJS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011\u6a21\u5757\u5f00\u53d1\u8005\u9009\u62e9EMS\u548cCJS\u65f6\uff0c\u9700\u8981\u5224\u65ad\u8fd0\u884c\u65f6\u73af\u5883\uff1a\u5982\u679c\u4f60\u7684\u6a21\u5757\u662f\u53ea\u9762\u5411\u6d4f\u89c8\u5668\u7684\u5219\u9009\u62e9ESM\uff1b\u5982\u679c\u4f60\u7684\u6a21\u5757\u662f\u53ea\u9762\u5411Node.js\u7684\u5219\u9009\u62e9CJS\uff0c\u5e76\u4e14\u786e\u5b9a\u9075\u5faa",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_commonjs_namespaces"},"CJS\u547d\u540d\u7a7a\u95f4\u89c4\u5219"),"\uff1b\u5982\u679c\u4f60\u7684\u6a21\u5757\u662f2\u8005\u90fd\u8981\u517c\u5bb9\u7684\uff0c\u5219ESM\u548cCJS\u90fd\u8981\u652f\u6301\u3002"),(0,n.kt)("p",{parentName:"li"},"Node.js\u7684\u6a21\u5757\uff0c\u5386\u53f2\u4e0aNode.js\u9075\u5faa\u7684\u662fCommonJS\uff0c\u56e0\u6b64ES6 Module\u4f1a\u6709\u6bd4\u8f83\u4e25\u91cd\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002\u6682\u65f6\u6ca1\u6709\u7279\u522b\u597d\u7684\u89e3\u6cd5\uff0c\u53ea\u80fd\u5728Node.js\u4e2d\u8ddf\u8fdb\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u5224\u65ad\u4f7f\u7528\u6a21\u5757\u6807\u51c6\u3002",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/issues/33954"},"\u8ba8\u8bbaissue")))))}u.isMDXComponent=!0}}]);