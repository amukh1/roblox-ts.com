(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||l;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(104)),o={title:"LuaTuple<T>"},i={unversionedId:"guides/lua-tuple",id:"guides/lua-tuple",isDocsHomePage:!1,title:"LuaTuple<T>",description:"The Problem",source:"@site/docs/guides/lua-tuple.mdx",slug:"/guides/lua-tuple",permalink:"/docs/guides/lua-tuple",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/lua-tuple.mdx",version:"current",sidebar:"docs",previous:{title:"Indexing Children",permalink:"/docs/guides/indexing-children"},next:{title:"Roact JSX",permalink:"/docs/guides/roact-jsx"}},u=[{value:"The Problem",id:"the-problem",children:[]},{value:"The Solution",id:"the-solution",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Using <code>LuaTuple&lt;T&gt;</code> in Your Own Code",id:"using-luatuplet-in-your-own-code",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"the-problem"},"The Problem"),Object(l.b)("p",null,"Given the following Luau code, how do we type it?"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'local function foo()\n    return "abc", 123\nend\n')),Object(l.b)("p",null,"Multiple returns are a common occurrence in Luau, but not really a concept in TypeScript. ",Object(l.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple"},'TypeScript does have a feature called "tuples"')," which allow for fixed length array types with an individual type for each index."),Object(l.b)("p",null,"So we might type this as:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"declare function foo(): [string, number];\n")),Object(l.b)("p",null,"However, this is not correct! TypeScript tuples are arrays, not multiple returns. It would expect the Luau to be ",Object(l.b)("inlineCode",{parentName:"p"},'return { "abc", 123 }'),"."),Object(l.b)("h2",{id:"the-solution"},"The Solution"),Object(l.b)("p",null,"To solve this problem, roblox-ts introduces a special type called ",Object(l.b)("inlineCode",{parentName:"p"},"LuaTuple<T>"),". This is typed as:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"type LuaTuple<T extends Array<any>> = T & { readonly LUA_TUPLE: never };\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"LUA_TUPLE")," is used to ensure the type name is not lost or cast into an ",Object(l.b)("inlineCode",{parentName:"p"},"Array<T>")," accidentally."),Object(l.b)("p",null,"When the compiler sees this type as a function return type, it can infer that it's meant to be a multiple return."),Object(l.b)("p",null,"In general, this type is used for typing existing Luau modules or the Roblox API."),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"If you immediately destructure the result, it will be compiled into a simple variable declaration from a multiple return."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"const [actualTimeYielded, totalTime] = wait(1);\n")),Object(l.b)("p",null,"If you do ",Object(l.b)("em",{parentName:"p"},"not")," destructure the result, the compiler will wrap the return in ",Object(l.b)("inlineCode",{parentName:"p"},"{ }")," and turn the result into an array object."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"const result = wait(1);\nconst actualTimeYielded = result[0];\nconst totalTime = result[1];\n")),Object(l.b)("p",null,"You can also index the result immediately after the function call and receive an optimized emit:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},'import { Players } from "@rbxts/services";\n\n// .Wait() here returns LuaTuple<[character: Model]>,\n// so we need to use `[0]` to grab the first (and only) element.\nconst character = Players.LocalPlayer.Character || Players.LocalPlayer.CharacterAdded.Wait()[0];\n')),Object(l.b)("h2",{id:"using-luatuplet-in-your-own-code"},"Using ",Object(l.b)("inlineCode",{parentName:"h2"},"LuaTuple<T>")," in Your Own Code"),Object(l.b)("p",null,"The compiler supports using ",Object(l.b)("inlineCode",{parentName:"p"},"LuaTuple<T>")," in outside of type definitions, but it's generally not recommended. However, if you're writing code that is consumed by an existing Luau module this can be useful!"),Object(l.b)("p",null,"Unfortunately, you have to assert the type of your return because of the ",Object(l.b)("inlineCode",{parentName:"p"},"LUA_TUPLE")," tag."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},'function hasMultipleReturns(): LuaTuple<[string, number]> {\n    // this will compile into `return "abc", 123`\n    return ["abc", 123] as LuaTuple<[string, number]>\n}\n')))}p.isMDXComponent=!0}}]);