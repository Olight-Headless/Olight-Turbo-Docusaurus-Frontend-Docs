"use strict";(self.webpackChunkolight_turbo_docusaurus_docs=self.webpackChunkolight_turbo_docusaurus_docs||[]).push([[7347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l="\u5bf9\u8c61",i={unversionedId:"tutorial-javascript/object",id:"tutorial-javascript/object",title:"\u5bf9\u8c61",description:"\u521b\u5efa\u5bf9\u8c61",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial-javascript/object.md",sourceDirName:"tutorial-javascript",slug:"/tutorial-javascript/object",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/object",draft:!1,editUrl:"https://github.com/Olight-Headless/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/object.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/array"},next:{title:"\u51fd\u6570",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-javascript/function"}},p={},s=[{value:"\u521b\u5efa\u5bf9\u8c61",id:"\u521b\u5efa\u5bf9\u8c61",level:2},{value:"\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5",id:"\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5",level:2},{value:"\u5bf9\u8c61\u7b80\u5199\u5c5e\u6027",id:"\u5bf9\u8c61\u7b80\u5199\u5c5e\u6027",level:2},{value:"\u5bf9\u8c61\u5c5e\u6027",id:"\u5bf9\u8c61\u5c5e\u6027",level:2},{value:"\u4f18\u5148\u4f7f\u7528 . \u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027",id:"\u4f18\u5148\u4f7f\u7528--\u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027",level:2},{value:"\u6269\u5c55\u8fd0\u7b97\u7b26",id:"\u6269\u5c55\u8fd0\u7b97\u7b26",level:2},{value:"\u89e3\u6784\u5bf9\u8c61",id:"\u89e3\u6784\u5bf9\u8c61",level:2},{value:"\u5bf9\u8c61\u7684\u52a8\u6001\u5c5e\u6027",id:"\u5bf9\u8c61\u7684\u52a8\u6001\u5c5e\u6027",level:2},{value:"Object.prototypes",id:"objectprototypes",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,r.kt)("h2",{id:"\u521b\u5efa\u5bf9\u8c61"},"\u521b\u5efa\u5bf9\u8c61"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u4f7f\u7528\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-new-object"},"no-new-object")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst obj = new Object();\n\n// good\nconst obj = {};\n")))),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5"},"\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u4f7f\u7528\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u7b80\u5199\u8bed\u6cd5\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/object-shorthand"},"object-shorthand")),(0,r.kt)("p",{parentName:"li"},"ES6 \u63d0\u4f9b\u4e86\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u7b80\u5199\u8bed\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = 'foo';\n\n// bad\nconst atom = {\n  value: value,\n  addValue: function (value) {\n    return value + ' added';\n  },\n};\n\n// good\nconst atom = {\n  value,\n  addValue(value) {\n    return value + ' added';\n  },\n};\n")))),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u7b80\u5199\u5c5e\u6027"},"\u5bf9\u8c61\u7b80\u5199\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011\u5c06\u5bf9\u8c61\u7684\u7b80\u5199\u5c5e\u6027\u5199\u5728\u4e00\u8d77\u3002\n\u5c06\u7b80\u5199\u7684\u5c5e\u6027\u5199\u5728\u4e00\u8d77\uff0c\u7f6e\u4e8e\u5bf9\u8c61\u7684\u8d77\u59cb\u6216\u672b\u5c3e\uff0c\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u6574\u6d01\u6027\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u51fa\u4e8e\u5c5e\u6027\u7684\u542b\u4e49\u6216\u5176\u4ed6\u8003\u8651\u8fdb\u884c\u6392\u5e8f\u4e5f\u662f\u5141\u8bb8\u7684\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const anakinSkywalker = 'Anakin Skywalker';\nconst lukeSkywalker = 'Luke Skywalker';\n\n// bad\nconst obj = {\n  episodeOne: 1,\n  twoJediWalkIntoACantina: 2,\n  lukeSkywalker,\n  episodeThree: 3,\n  mayTheFourth: 4,\n  anakinSkywalker,\n};\n\n// good\nconst obj = {\n  lukeSkywalker,\n  anakinSkywalker,\n  episodeOne: 1,\n  twoJediWalkIntoACantina: 2,\n  episodeThree: 3,\n  mayTheFourth: 4,\n};\n")))),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u5c5e\u6027"},"\u5bf9\u8c61\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u4e0d\u8981\u7528\u5f15\u53f7\u5305\u88f9\uff0c\u9664\u975e\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/quote-props"},"quote-props")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u6837\u66f4\u52a0\u7b80\u6d01\uff0c\u4e5f\u6709\u52a9\u4e8e\u8bed\u6cd5\u9ad8\u4eae\u548c\u4e00\u4e9b JS \u5f15\u64ce\u7684\u4f18\u5316\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst bad = {\n  'foo': 3,\n  'bar': 4,\n  'data-blah': 5,\n  'one two': 12,\n};\n\n// good\nconst good = {\n  foo: 3,\n  bar: 4,\n  'data-blah': 5,\n  'one two': 12,\n};\n")))),(0,r.kt)("h2",{id:"\u4f18\u5148\u4f7f\u7528--\u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027"},"\u4f18\u5148\u4f7f\u7528 . \u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u4f18\u5148\u4f7f\u7528 . \u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/dot-notation"},"dot-notation")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u53ef\u8bfb\u6027\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," \b\u4ec5\u5e94\u5728\u8bbf\u95ee\u52a8\u6001\u5c5e\u6027\u540d\b\u6216\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u7684\u5c5e\u6027\u540d\u65f6\u88ab\u4f7f\u7528\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n  active: true,\n  [getDynamicKey()]: 'foo',\n  'data-bar': 'bar',\n};\n\n// bad\nconst isActive = obj['active'];\n\n// good\nconst isActive = obj.active;\nconst foo = obj[getDynamicKey()];\nconst bar = obj['data-bar'];\n")))),(0,r.kt)("h2",{id:"\u6269\u5c55\u8fd0\u7b97\u7b26"},"\u6269\u5c55\u8fd0\u7b97\u7b26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u4f7f\u7528\u6269\u5c55\u8fd0\u7b97\u7b26 ... \u5904\u7406\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u66ff\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u65b9\u6cd5\uff0c\u6765\u8fdb\u884c\u5bf9\u8c61\b\u7684\u6d45\u62f7\u8d1d\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// very bad - original \u4f1a\u88ab\u5f71\u54cd\nconst original = { a: 1, b: 2 };\nconst copy = Object.assign(original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }  original => { a: 1, b: 2, c: 3 }\ndelete copy.a; // copy => { b: 2, c: 3 }  original => { b: 2, c: 3 }\n\n// bad\nconst original = { a: 1, b: 2 };\nconst copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }\n\n// good\nconst original = { a: 1, b: 2 };\nconst copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }\n")),(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\b\u6392\u9664\b\u67d0\u4e9b\u5c5e\u6027\u7684\u65b0\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// good\nconst copy = { a: 1, b: 2, c: 3 };\nconst { a, ...noA } = copy; // noA => { b: 2, c: 3 }\n")))),(0,r.kt)("h2",{id:"\u89e3\u6784\u5bf9\u8c61"},"\u89e3\u6784\u5bf9\u8c61"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u4f7f\u7528\u89e3\u6784\u83b7\u53d6\u5bf9\u8c61\u5c5e\u6027\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/prefer-destructuring"},"prefer-destructuring")),(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u5bf9\u8c61\u7684\u540c\u540d\u5c5e\u6027\u3001\u591a\u4e2a\u5c5e\u6027\u65f6\uff0c\u4f7f\u7528\u89e3\u6784\u8ba9\u4ee3\u7801\u66f4\u7b80\u6d01\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11\u4e3a\u4e86\u4f7f\u7528\u5c5e\u6027\u800c\u521b\u5efa\u7684\u4e34\u65f6\u5f15\u7528\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction getFullName(user) {\n  const firstName = user.firstName;\n  const lastName = user.lastName;\n\n  return `${firstName} ${lastName}`;\n}\n\n// good\nfunction getFullName(user) {\n  const { firstName, lastName } = user;\n  return `${firstName} ${lastName}`;\n}\n\n// best\nfunction getFullName({ firstName, lastName }) {\n  return `${firstName} ${lastName}`;\n}\n")))),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u7684\u52a8\u6001\u5c5e\u6027"},"\u5bf9\u8c61\u7684\u52a8\u6001\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u53c2\u8003\u3011\u5bf9\u8c61\u7684\u52a8\u6001\u5c5e\u6027\u540d\u5e94\u76f4\u63a5\u5199\u5728\u5b57\u9762\u91cf\u5b9a\u4e49\u4e2d\u3002\nES6 \u5141\u8bb8\u5728\u65b0\u5efa\u5bf9\u8c61\u5b57\u9762\u91cf\u65f6\u4f7f\u7528\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u5c5e\u6027\u540d\uff0c\u8fd9\u6837\u53ef\u4ee5\u5c06\u6240\u6709\u5c5e\u6027\u5b9a\u4e49\u5728\u4e00\u4e2a\u5730\u65b9\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getKey(k) {\n  return `a key named ${k}`;\n}\n\n// bad\nconst obj = {\n  id: 1,\n  name: 'tod',\n};\nobj[getKey('foo')] = 'foo';\n\n// good\nconst obj = {\n  id: 1,\n  name: 'tod',\n  [getKey('foo')]: 'foo',\n};\n")))),(0,r.kt)("h2",{id:"objectprototypes"},"Object.prototypes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3010\u5f3a\u5236\u3011\u4e0d\u8981\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u8c03\u7528 Object.prototypes \u4e0a\u7684\u65b9\u6cd5\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-prototype-builtins"},"no-prototype-builtins")),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u8981\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototypes")," \u4e0a\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOwnProperty"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"propertyIsEnumerable"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"isPrototypeOf"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u65b9\u6cd5\u53ef\u80fd\u4f1a\u88ab\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u8986\u76d6\uff0c\u5bfc\u81f4\u9519\u8bef\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n  foo: 'foo',\n  hasOwnProperty: false,\n};\nconst objNull = Object.create(null);\n\n// bad => Uncaught TypeError: obj.hasOwnProperty is not a function\nconsole.log(obj.hasOwnProperty('foo'));\nconsole.log(objNull.hasOwnProperty('foo'));\n\n// good\nconsole.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));\nconsole.log(Object.prototype.hasOwnProperty.call(objNull, 'foo'));\n")))))}u.isMDXComponent=!0}}]);