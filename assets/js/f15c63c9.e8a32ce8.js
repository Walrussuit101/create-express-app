"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[503],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},o),{},{components:r})):n.createElement(f,s({ref:t},o))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],l={sidebar_label:"static",sidebar_position:1},c="static",p={unversionedId:"templates/static",id:"templates/static",title:"static",description:"A web server that serves HTML, CSS, and a bundled JS file (explore the code)",source:"@site/docs/templates/static.md",sourceDirName:"templates",slug:"/templates/static",permalink:"/create-express-app/docs/templates/static",editUrl:"https://github.com/Walrussuit101/create-express-app/tree/master/docs/docs/templates/static.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"static",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arguments",permalink:"/create-express-app/docs/arguments"},next:{title:"rest-api",permalink:"/create-express-app/docs/templates/rest-api"}},o={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Scripts",id:"scripts",level:2},{value:"start",id:"start",level:3},{value:"dev",id:"dev",level:3},{value:"compile:client",id:"compileclient",level:3},{value:"compile:client:stats",id:"compileclientstats",level:3},{value:"Web Server",id:"web-server",level:2},{value:"GET /",id:"get-",level:3},{value:"GET /index.css",id:"get-indexcss",level:3},{value:"GET /bundle.js",id:"get-bundlejs",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static"},(0,i.kt)("inlineCode",{parentName:"h1"},"static")),(0,i.kt)("p",null,"A web server that serves HTML, CSS, and a bundled JS file (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Walrussuit101/create-express-app/tree/master/templates/static"},"explore the code"),")"),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @walrussuit/create-express-app my-project static --git\ncd my-project\nnpm start\n")),(0,i.kt)("h2",{id:"scripts"},"Scripts"),(0,i.kt)("p",null,"These are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"./package.json")),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,i.kt)("p",null,"Compiles the client TypeScript code (using ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),") and starts the web server on localhost at port 8080 (unless you provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT")," environment variable)"),(0,i.kt)("h3",{id:"dev"},"dev"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,i.kt)("p",null,"Re-compiles the client code / restarts the server (using ",(0,i.kt)("a",{parentName:"p",href:"https://nodemon.io/"},"nodemon"),") on changes to any TypeScript, HTML, JSON, or CSS files (hot-reloading)"),(0,i.kt)("h3",{id:"compileclient"},"compile:client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run compile:client\n")),(0,i.kt)("p",null,"Compiles the client TypeScript code (and it's dependencies) in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/client")," directory and outputs it to a bundle JavaScript file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/client/dist")," directory for the web server to serve."),(0,i.kt)("h3",{id:"compileclientstats"},"compile:client:stats"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run compile:client:stats\n")),(0,i.kt)("p",null,"Does the same as the above script, but will output statistics of the resulting JavaScript bundle (size, etc)."),(0,i.kt)("h2",{id:"web-server"},"Web Server"),(0,i.kt)("p",null,"The web server's routes are registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/server.ts")," file"),(0,i.kt)("h3",{id:"get-"},"GET /"),(0,i.kt)("p",null,"Returns the HTML file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/client")," directory. This file will make requests for the subsequent CSS/JavaScript files"),(0,i.kt)("h3",{id:"get-indexcss"},"GET /index.css"),(0,i.kt)("p",null,"Returns the CSS file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/client")," directory."),(0,i.kt)("h3",{id:"get-bundlejs"},"GET /bundle.js"),(0,i.kt)("p",null,"Returns the compiled, bundled, client TypeScript file from the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/client/dist")," directory."))}m.isMDXComponent=!0}}]);