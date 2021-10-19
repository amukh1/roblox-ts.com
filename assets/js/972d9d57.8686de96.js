(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},168:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/roblox-ts-256-87091e1f34fdfaa0a2ac1a7666b607e1.png"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(104)),i={title:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is roblox-ts?",source:"@site/docs/introduction.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/introduction.mdx",version:"current",sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/quick-start"}},c=[{value:"What is roblox-ts?",id:"what-is-roblox-ts",children:[]},{value:"Features",id:"features",children:[]},{value:"Why should you use roblox-ts?",id:"why-should-you-use-roblox-ts",children:[]},{value:"Why should you <em>not</em> use roblox-ts?",id:"why-should-you-not-use-roblox-ts",children:[]},{value:"Learning Resources",id:"learning-resources",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("img",{src:r(168).default})),Object(a.b)("h2",{id:"what-is-roblox-ts"},"What is roblox-ts?"),Object(a.b)("p",null,"In short, roblox-ts is a way to use the tooling and ecosystem surrounding TypeScript for Roblox development. This includes intellisense, IDE extensions, linters, code formatters, and more! It allows you to write TypeScript code that is then compiled into Luau code for use inside of Roblox."),Object(a.b)("p",null,"roblox-ts works with both ",Object(a.b)("strong",{parentName:"p"},"TypeScript")," files (",Object(a.b)("inlineCode",{parentName:"p"},".ts"),") ",Object(a.b)("em",{parentName:"p"},"and")," ",Object(a.b)("strong",{parentName:"p"},"Luau")," files (",Object(a.b)("inlineCode",{parentName:"p"},".lua"),") which are paired with TypeScript type definition files (",Object(a.b)("inlineCode",{parentName:"p"},".d.ts"),")."),Object(a.b)("p",null,"Typings for the Roblox API are partially handwritten and partially automatically generated from the Roblox API dump and Developer Hub documentation."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Write TypeScript code, run it in Roblox"),Object(a.b)("li",{parentName:"ul"},"Automatic project structure setup for creating games, models, plugins, and packages"),Object(a.b)("li",{parentName:"ul"},"Automatically generated type definitions for the Roblox API"),Object(a.b)("li",{parentName:"ul"},"Infers the structure of your game using your Rojo configuration file"),Object(a.b)("li",{parentName:"ul"},"Use VSCode's intellisense, autocompletion, and type checking abilities"),Object(a.b)("li",{parentName:"ul"},"Use industry standard tools for linting and formatting like ",Object(a.b)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")," and ",Object(a.b)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/org/rbxts"},"Growing collection of NPM packages")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/madou/typescript-transformer-handbook"},"TypeScript Transformer Plugins"))),Object(a.b)("h2",{id:"why-should-you-use-roblox-ts"},"Why should you use roblox-ts?"),Object(a.b)("p",null,"roblox-ts is great for managing large scale projects. Static types and intellisense allow you and your IDE to understand what your code is doing on a deeper level without having to mentally track what's going on. TypeScript's typing system allows you to clearly describe what each function expects as inputs and gives back as an output."),Object(a.b)("p",null,"roblox-ts, TypeScript, and most of the related tooling is open source! This means you can hack it, tweak it, and customize it to your liking. roblox-ts supports ",Object(a.b)("a",{parentName:"p",href:"./guides/typescript-transformers"},"TypeScript transformer plugins")," which allow you to modify the behavior of the compiler itself! You can also write your own ESLint plugins to enforce certain rules on your code."),Object(a.b)("h2",{id:"why-should-you-not-use-roblox-ts"},"Why should you ",Object(a.b)("em",{parentName:"h2"},"not")," use roblox-ts?"),Object(a.b)("p",null,"The biggest downside to using roblox-ts is debugging. When you use the Roblox Studio debugger (or when you encounter an error), you will see the compiled Luau code instead of TypeScript code. While we actively work to make the compiled Luau code as readable as possible, this does still introduce a bit of complexity. Usually, it's pretty easy to mentally map your compiled Luau code to your TypeScript code."),Object(a.b)("p",null,"The silver lining here is that the remaining few bugs should be logical bugs anyway!"),Object(a.b)("h2",{id:"learning-resources"},"Learning Resources"),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Need help?")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Feel free to ask us questions in our ",Object(a.b)("a",{parentName:"p",href:"https://discord.gg/f6Rn6RY"},"Discord server's #help channel"),"!"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"},"TypeScript for the New Programmer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html"},"TypeScript Tooling in 5 minutes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/typescript/"},"Learn X in Y minutes TypeScript Walk-through"))))}u.isMDXComponent=!0}}]);