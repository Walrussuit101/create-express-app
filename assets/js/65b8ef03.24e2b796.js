"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[520],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1011:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_label:"Arguments",sidebar_position:2},u="Arguments",c={unversionedId:"arguments",id:"arguments",title:"Arguments",description:"Arguments should follow this format:",source:"@site/docs/arguments.md",sourceDirName:".",slug:"/arguments",permalink:"/create-express-app/docs/arguments",editUrl:"https://github.com/Walrussuit101/create-express-app/tree/master/docs/docs/arguments.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Arguments",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/create-express-app/docs/getting-started"},next:{title:"static",permalink:"/create-express-app/docs/templates/static"}},s={},p=[{value:"<code>&lt;PROJECT_NAME&gt;</code>",id:"project_name",level:2},{value:"<code>&lt;TEMPLATE&gt;</code>",id:"template",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"Arguments should follow this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @walrussuit/cea <PROJECT_NAME> <TEMPLATE> [OPTIONS]\n")),(0,o.kt)("h2",{id:"project_name"},(0,o.kt)("inlineCode",{parentName:"h2"},"<PROJECT_NAME>")),(0,o.kt)("p",null,"Can be one of two values:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A value only containing  ",(0,o.kt)("inlineCode",{parentName:"li"},"a-z"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"A-Z"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0-9"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," characters",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For when you want to create a new directory for your project",(0,o.kt)("br",null),(0,o.kt)("br",null)))),(0,o.kt)("li",{parentName:"ol"},"A value only containing a ",(0,o.kt)("inlineCode",{parentName:"li"},"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For when you want to use the current directory for your project")))),(0,o.kt)("h2",{id:"template"},(0,o.kt)("inlineCode",{parentName:"h2"},"<TEMPLATE>")),(0,o.kt)("p",null,"Must be a valid template (see sidebar or click ",(0,o.kt)("a",{parentName:"p",href:"./templates/static"},"here")," for more details on templates)"))}d.isMDXComponent=!0}}]);