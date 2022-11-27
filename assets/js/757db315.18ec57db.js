"use strict";(self.webpackChunkolight_turbo_docusaurus_docs=self.webpackChunkolight_turbo_docusaurus_docs||[]).push([[4426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},i="\u9884\u5904\u7406\u8bed\u8a00",s={unversionedId:"tutorial-css/pretreatment",id:"tutorial-css/pretreatment",title:"\u9884\u5904\u7406\u8bed\u8a00",description:"Sass\u3001Less\u3001Stylus",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial-css/pretreatment.md",sourceDirName:"tutorial-css",slug:"/tutorial-css/pretreatment",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-css/pretreatment",draft:!1,editUrl:"https://github.com/Olight-Headless/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-css/pretreatment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5c5e\u6027",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/tutorial-css/property"},next:{title:"Tutorial Javascript",permalink:"/Olight-Turbo-Docusaurus-Frontend-Docs/docs/category/tutorial-javascript"}},o={},p=[{value:"Sass\u3001Less\u3001Stylus",id:"sasslessstylus",level:2},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:3},{value:"Mixin",id:"mixin",level:3},{value:"\u987a\u5e8f",id:"\u987a\u5e8f",level:3},{value:"\u5c5e\u6027\u58f0\u660e\u987a\u5e8f",id:"\u5c5e\u6027\u58f0\u660e\u987a\u5e8f",level:3},{value:"\u5d4c\u5957\u9009\u62e9\u5668\u6df1\u5ea6",id:"\u5d4c\u5957\u9009\u62e9\u5668\u6df1\u5ea6",level:3},{value:"\u53cc\u659c\u6760\u6ce8\u91ca",id:"\u53cc\u659c\u6760\u6ce8\u91ca",level:3},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9884\u5904\u7406\u8bed\u8a00"},"\u9884\u5904\u7406\u8bed\u8a00"),(0,a.kt)("h2",{id:"sasslessstylus"},"Sass\u3001Less\u3001Stylus"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e CSS \u800c\u8a00\uff0c\u53ef\u4ee5\u5728\u65b0\u9879\u76ee\u4e2d\u5c1d\u8bd5\u653e\u5f03\u4f7f\u7528 Sass\u3001Less\u3001Stylus \u8fd9\u6837\u7684\u5904\u7406\u5668\u8bed\u8a00\uff0c\u56e0\u4e3a\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u5904\u7406\u5668\u8bed\u8a00\u662f\u5728\u4e00\u5b9a\u5386\u53f2\u6761\u4ef6\u4e0b\u7684\u4ea7\u7269\uff0c\u867d\u7136\u8fd9\u4e9b\u4ea7\u7269\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u63d0\u9ad8\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u6548\u7387\uff0c\u4f46\u4e0d\u540c\u7684\u5904\u7406\u5668\u8bed\u8a00\u4e5f\u540c\u65f6\u589e\u52a0\u4e86\u9879\u76ee\u7684\u7ef4\u62a4\u6210\u672c\uff08\u7279\u522b\u662f\u591a\u4eba\u534f\u4f5c\uff0c\u591a\u56e2\u961f\u534f\u4f5c\u7684\u65f6\u5019\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5efa\u8bae\u4f7f\u7528 PostCSS \u5904\u7406\u5668\uff0c\u5b83\u7c7b\u4f3c\u4e8e CSS \u4e2d\u7684 Babel\uff0c\u4e0d\u4f46\u5177\u5907 Sass \u548c Less \u7684\u529f\u80fd\uff0c\u800c\u4e14\u793e\u533a\u7e41\u8363\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6269\u5c55\u76f8\u5173\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u968f\u7740 CSS \u7684\u4e00\u4e9b\u65b0\u7279\u6027\u51fa\u73b0\uff0cSass \u548c Less \u4ee5\u5f80\u7684\u4f18\u52bf\u4e5f\u4f1a\u6162\u6162\u6d88\u5931\u3002"))),(0,a.kt)("h3",{id:"\u8fd0\u7b97\u7b26"},"\u8fd0\u7b97\u7b26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u56db\u5219\u8fd0\u7b97\u7b26\u4e24\u4fa7\u5404\u4fdd\u7559\u4e00\u4e2a\u7a7a\u683c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* bad */\n.selector {\n  width: $default-width/2;\n}\n\n/* good */\n.selector {\n  width: $default-width / 2;\n}\n")))),(0,a.kt)("h3",{id:"mixin"},"Mixin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011Mixin \u540d\u79f0\u548c\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," \u95f4\u65e0\u7a7a\u683c\uff0c\u5728\u62e5\u6709\u591a\u4e2a\u53c2\u6570\u7684\u8868\u8fbe\u5f0f\u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},",")," \u4e4b\u524d\u65e0\u7a7a\u683c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},",")," \u4e4b\u540e\u4fdd\u7559\u4e00\u4e2a\u7a7a\u683c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* bad */\n.selector {\n  .size(30px,20px);\n  .clearfix ();\n}\n\n/* good */\n.selector {\n  .size(30px, 20px);\n  .clearfix();\n}\n")))),(0,a.kt)("h3",{id:"\u987a\u5e8f"},"\u987a\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u6309\u5982\u4e0b\u987a\u5e8f\u7ec4\u7ec7 Sass / Less \u4ee3\u7801\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@import")," \u8bed\u53e5"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u53d8\u91cf\u58f0\u660e"),(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\u58f0\u660e")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import 'common/theme.scss';\n\n$color-red: #f0f0f0;\n\n.selector {\n  color: $color-red;\n}\n")))),(0,a.kt)("h3",{id:"\u5c5e\u6027\u58f0\u660e\u987a\u5e8f"},"\u5c5e\u6027\u58f0\u660e\u987a\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u5bf9\u4e8e Sass \u548c Less\uff0c\u5757\u5185\u7684\u5c5e\u6027\u58f0\u660e\u6309\u5982\u4e0b\u987a\u5e8f\u6392\u5e8f\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5c5e\u6027\u58f0\u660e\uff1a\u9664\u4e86 mixin \u8c03\u7528\u3001extend \u5b50\u7ea7\u9009\u62e9\u5668\u7684\u58f0\u660e\uff0c\u5176\u4ed6\u5c5e\u6027\u58f0\u660e\u7684\u987a\u5e8f\u4e0e\u300c\u5c5e\u6027\u58f0\u660e\u7684\u987a\u5e8f\u300d\u7ae0\u8282\u7684\u89c4\u5219\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"mixin \u8c03\u7528\uff1aSass \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"@include")," \u58f0\u660e\u3001Less \u7684 mixin \u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5d4c\u5957\u7684\u5b50\u7ea7\u9009\u62e9\u5668\uff1a\u5c06\u5d4c\u5957\u7684\u9009\u62e9\u5668\u653e\u5230\u5757\u7684\u672b\u5c3e\uff0c\u5e76\u4e14\u5728\u5176\u4e0a\u65b9\u4fdd\u7559\u4e00\u884c\u7a7a\u884c")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},".btn {\n  background: #ccc;\n  font-weight: bold;\n  @include transition(background 0.5s ease);\n\n  .icon {\n    margin-right: 10px;\n  }\n}\n")))),(0,a.kt)("h3",{id:"\u5d4c\u5957\u9009\u62e9\u5668\u6df1\u5ea6"},"\u5d4c\u5957\u9009\u62e9\u5668\u6df1\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u5d4c\u5957\u9009\u62e9\u5668\u7684\u6df1\u5ea6\u4e0d\u8981\u8d85\u8fc7 3 \u5c42\uff0c\u5426\u5219\u53ef\u80fd\u5e26\u6765\u4e00\u4e9b\u526f\u4f5c\u7528\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0e HTML \u7ed3\u6784\u5f3a\u8026\u5408\uff0c\u96be\u4ee5\u590d\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u8fc7\u9ad8\u7684",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"\u9009\u62e9\u5668\u4f18\u5148\u7ea7"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  .header {\n    .user-name {\n      // STOP\uff01\u4e0d\u8981\u518d\u5d4c\u5957\u66f4\u6df1\u9009\u62e9\u5668\n    }\n  }\n}\n")))),(0,a.kt)("h3",{id:"\u53cc\u659c\u6760\u6ce8\u91ca"},"\u53cc\u659c\u6760\u6ce8\u91ca"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u53ef\u4ee5\u4f7f\u7528\u53cc\u659c\u6760\u6ce8\u91ca\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7f16\u8bd1\u4e3a CSS \u540e\uff0c\u4ee3\u7801\u4e2d\u7684\u53cc\u659c\u6760\u6ce8\u91ca\u4f1a\u88ab\u5220\u9664\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"/* */")," \u4f1a\u88ab\u4fdd\u7559\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"// \u5355\u884c\u6ce8\u91ca\n.selector-a {\n  padding-left: 15px;\n}\n\n/*\n * \u591a\u884c\u6ce8\u91ca\n * \u591a\u884c\u6ce8\u91ca\n */\n.selector-b {\n  margin-left: 15px;\n}\n")),(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u4e3a CSS \u540e\uff0c\u53cc\u659c\u6760\u6ce8\u91ca\u4f1a\u88ab\u5220\u9664\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},".selector-a {\n  padding-left: 15px;\n}\n\n/*\n * \u591a\u884c\u6ce8\u91ca\n * \u591a\u884c\u6ce8\u91ca\n */\n.selector-b {\n  margin-left: 15px;\n}\n")))),(0,a.kt)("h3",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u4f7f\u7528 Mixin (@mixin \u548c @include \u6307\u4ee4) \u6765\u8ba9\u4ee3\u7801\u9075\u5faa DRY \u539f\u5219\uff08Don't Repeat Yourself\uff09\u3001\u589e\u52a0\u62bd\u8c61\u6027\u548c\u964d\u4f4e\u590d\u6742\u5ea6\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5e94\u907f\u514d\u4f7f\u7528 @extend \u6307\u4ee4\uff0c\u5b83\u4e0d\u591f\u76f4\u89c2\u4e14\u5177\u6709\u6f5c\u5728\u98ce\u9669\uff0c\u5c24\u5176\u662f\u5728\u5d4c\u5957\u9009\u62e9\u5668\u4e2d\u3002\u5373\u4f7f\u7ee7\u627f\u7684\u662f\u9876\u5c42\u9009\u62e9\u5668\uff0c\u5982\u679c\u9009\u62e9\u5668\u7684\u987a\u5e8f\u53d1\u751f\u53d8\u5316\uff0c\u4e5f\u53ef\u80fd\u5f15\u8d77\u95ee\u9898\uff08\u6bd4\u5982\uff0c\u5982\u679c\u5b83\u4eec\u5b58\u5728\u4e8e\u5176\u4ed6\u6587\u4ef6\uff0c\u800c\u52a0\u8f7d\u987a\u5e8f\u53d1\u751f\u4e86\u53d8\u5316\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},"Extend  \u76f8\u6bd4 Mixin \u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u65e0\u53c2\u6570\u7684 mixin \u88ab\u591a\u5904\u4f7f\u7528\uff0c\u7f16\u8bd1\u540e\u4f1a\u8f93\u51fa\u591a\u6bb5\u91cd\u590d\u7684\u4ee3\u7801\u3002\u8fd9\u65f6\u5982\u679c\u4f7f\u7528 @extend\uff0c\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002\u4f46\u662f gzip \u7b49\u538b\u7f29\u5de5\u5177\u5c31\u53ef\u4ee5\u89e3\u51b3\u91cd\u590d\u4ee3\u7801\u7684\u95ee\u9898\uff0c\u56e0\u6b64\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u9700\u8981\u4f7f\u7528 mixin \u6765\u8ba9\u4ee3\u7801\u7b26\u5408 DRY \u539f\u5219\u3002"))),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://codeguide.co"},"Code Guide by @mdo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbnb/css"},"Airbnb CSS / Sass Styleguide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/htmlcssguide.html"},"Google HTML/CSS Style Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ecomfe/spec/blob/master/css-style-guide.md"},"spec css-style-guide"))))}c.isMDXComponent=!0}}]);