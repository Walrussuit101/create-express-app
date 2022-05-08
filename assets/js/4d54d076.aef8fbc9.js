"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Contributing",sidebar_position:6},u="Contributing",p={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"Have a new template? Want to fix a bug? You're more than welcome to fork the repository and open a PR! \ud83d\ude00",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/create-express-app/docs/contributing",editUrl:"https://github.com/Walrussuit101/create-express-app/tree/master/docs/docs/contributing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Contributing",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"E004",permalink:"/create-express-app/docs/errors/E004"}},s={},c=[{value:"Set Up",id:"set-up",level:2},{value:"Installing",id:"installing",level:3},{value:"Running",id:"running",level:3},{value:"Testing",id:"testing",level:3},{value:"Building",id:"building",level:3},{value:"Docs",id:"docs",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Have a new template? Want to fix a bug? You're more than welcome to fork the repository and open a PR! \ud83d\ude00",(0,o.kt)("br",null),"\nBelow are some details on developing in the project."),(0,o.kt)("h2",{id:"set-up"},"Set Up"),(0,o.kt)("p",null,"After forking the repository the project is fairly simple to get running \ud83d\udc4d"),(0,o.kt)("h3",{id:"installing"},"Installing"),(0,o.kt)("p",null,"Install deps & setup husky to format code using ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"prettier")," on any code commit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("p",null,"To run use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," and the arguments as normal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start my-project static --git\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be aware this will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project")," directory in the repository root")),(0,o.kt)("br",null),(0,o.kt)("p",null,"To use hot reloading run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," and the arguments as normal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev my-project static --git\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This will rerun on any code changes and avoid ",(0,o.kt)("a",{parentName:"p",href:"./errors/E002"},"E002")," by deleting the diretory ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project")," first")),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Run the following to execute tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,o.kt)("p",null,"or the following to execute tests and generate a coverage report"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:coverage\n")),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"The following script will build a publish ready version of the project via:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running the tests"),(0,o.kt)("li",{parentName:"ol"},"Compiling TS -> JS"),(0,o.kt)("li",{parentName:"ol"},"Running an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"./src/build.ts")," file to copy / modify additional files to ",(0,o.kt)("inlineCode",{parentName:"li"},"./build")," directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To execute the build version run ",(0,o.kt)("inlineCode",{parentName:"p"},"node build/src/index.js my-project static --git")," or  link the build directory to ",(0,o.kt)("br",null)," be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"create-express-app my-project static --git")," in any directory on your machine")),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("p",null,"On any page in the docs there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit this page")," link in case you find any issues or think there's a better way to explain things \ud83d\ude00"))}m.isMDXComponent=!0}}]);