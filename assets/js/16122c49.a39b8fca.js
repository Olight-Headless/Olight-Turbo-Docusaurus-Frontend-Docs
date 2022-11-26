"use strict";(self.webpackChunkolight_turbo_docusaurus_docs=self.webpackChunkolight_turbo_docusaurus_docs||[]).push([[4434],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(o),k=r,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=o[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2427:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:4},s="Hooks",l={unversionedId:"tutorial-react/code-rules/hooks",id:"tutorial-react/code-rules/hooks",title:"Hooks",description:"Let's translate docs/intro.md to French.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial-react/code-rules/hooks.md",sourceDirName:"tutorial-react/code-rules",slug:"/tutorial-react/code-rules/hooks",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-react/code-rules/hooks",draft:!1,editUrl:"https://github.com/Olight-Headless/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-react/code-rules/hooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u89c4\u8303",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-react/code-rules/name"},next:{title:"\u65e0\u969c\u788d",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-react/code-rules/accessibility"}},c={},i=[],u={toc:i};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Let's translate ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4.1\u3010\u5f3a\u5236\u3011\u53ea\u5728\u6700\u9876\u5c42\u8c03\u7528 Hooks\uff0c\u4e0d\u8981\u5728\u5faa\u73af\u3001\u6761\u4ef6\u548c\u5d4c\u5957\u51fd\u6570\u4e2d\u8c03\u7528 Hooks\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level"},"rules of Hooks - only call Hooks at the top level")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad - call Hooks inside conditions\nfunction ComponentWithConditionalHook() {\n  if (cond) {\n    useConditionalHook();\n  }\n}\n\n// bad - call Hooks inside loops\nfunction ComponentWithHookInsideLoop() {\n  while (cond) {\n    useHookInsideLoop();\n  }\n}\n\n// bad - call Hooks inside callback\nfunction ComponentWithHookInsideCallback() {\n  useEffect(() => {\n    useHookInsideCallback();\n  });\n}\n\n// good\nfunction ComponentWithHook() {\n  useHook();\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4.2\u3010\u5f3a\u5236\u3011Hooks \u547d\u540d\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u5f00\u5934\uff0c\u5c0f\u9a7c\u5cf0\u5f62\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nconst customHook = () => {}\n\n// good\nconst useCustomHook = () => {}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4.3\u3010\u5f3a\u5236\u3011\u53ea\u5728 React \u51fd\u6570\u7ec4\u4ef6\u548c\u81ea\u5b9a\u4e49 Hooks \u4e2d\u8c03\u7528 Hooks\uff0c\u4e0d\u80fd\u5728\u666e\u901a\u7684 JavaScript \u51fd\u6570\u4e2d\u8c03\u7528 Hooks\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions"},"rules of Hooks - only call Hooks from React functions")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad - call Hooks inside class componennt\nclass ClassComponentWithHook extends React.Component {\n  render() {\n    React.useState();\n  }\n}\n\n// bad - call Hooks inside normal function\nfunction normalFunctionWithHook() {\n  useHookInsideNormalFunction();\n}\n\n// good - call Hooks inside function component\nfunction ComponentWithHook() {\n  useHook();\n}\n\n// good - call Hooks inside custom Hooks\nfunction useHookWithHook() {\n  useHook();\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4.4\u3010\u63a8\u8350\u3011",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u53ca",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/3c1a7ac87c5b4903aa0de02d11bd9ec2590ad598/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L1518"},"\u7c7b\u4f3c Hooks "),"\u9700\u8981\u58f0\u660e\u6240\u6709\u4f9d\u8d56\u3002eslint: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/14920"},"exhaustive-deps")),(0,r.kt)("p",{parentName:"li"},"\u6b64\u89c4\u5219\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u53ef\u80fd\u8fc7\u4e8e\u4e25\u683c\uff0c\u5e76\u4e14 ESLint autofix \u53ef\u80fd\u4f1a\u9020\u6210\u4e00\u4e9b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/16313"},"\u95ee\u9898"),"\uff0c\u56e0\u6b64\u9700\u6ce8\u610f\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5347\u7ea7 ",(0,r.kt)("inlineCode",{parentName:"li"},"eslint-plugin-react-hooks")," \u5230 2.4.0 \u7248\u672c\u53ca\u4ee5\u4e0a\uff0c\u56e0\u4e3a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md#240"},"2.4.0 \u7248\u672c\u540e\u8be5\u89c4\u5219\u7684 autofix \u88ab\u9ed8\u8ba4\u7981\u7528")),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e9b\u573a\u666f\u4e0b\u6b64\u89c4\u5219\u786e\u5b9e\u4e0d\u9002\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7 ESLint \u884c\u6ce8\u91ca\u624b\u52a8\u7981\u7528\u6b64\u89c4\u5219\uff0c\u5728\u884c\u5c3e\u6dfb\u52a0\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"// eslint-disable-line react-hooks/exhaustive-deps"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nfunction MyComponent() {\n  const local = {};\n  useEffect(() => {\n    console.log(local);\n  }, []);\n}\n\n// good\nfunction MyComponent() {\n  const local = {};\n  useEffect(() => {\n    console.log(local);\n  }, [local]);\n}\n")))))}p.isMDXComponent=!0}}]);