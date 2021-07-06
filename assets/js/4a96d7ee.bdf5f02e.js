(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(214)),o={id:"upgrading",title:"Upgrading"},l={unversionedId:"getting-started/upgrading",id:"getting-started/upgrading",isDocsHomePage:!1,title:"Upgrading",description:"-----",source:"@site/docs/getting-started/Upgrading.md",slug:"/getting-started/upgrading",permalink:"/docs/getting-started/upgrading",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/Upgrading.md",version:"current",lastUpdatedBy:"Kolja Lampe",lastUpdatedAt:1623792265,sidebar:"docs",previous:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"},next:{title:"Downgrading",permalink:"/docs/getting-started/downgrading"}},c=[{value:"Library",id:"library",children:[]},{value:"Editor plugin",id:"editor-plugin",children:[]},{value:"SuperDirt",id:"superdirt",children:[]}],p={toc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Tidal Cycles is a composite software. To upgrade it, it is ",Object(i.b)("strong",{parentName:"p"},"highly")," recommended to upgrade everything along with the pattern library (the text editor and the SuperDirt audio engine as well). Each time a new version of ",Object(i.b)("strong",{parentName:"p"},"Tidal")," is released, a new version of ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," will likely follow, etc..."),Object(i.b)("h2",{id:"library"},"Library"),Object(i.b)("p",null,"Upgrade tidal with the following from a terminal window (",Object(i.b)("strong",{parentName:"p"},"Linux"),"/",Object(i.b)("strong",{parentName:"p"},"MacOS"),"/",Object(i.b)("strong",{parentName:"p"},"Windows"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cabal update\ncabal install tidal --lib\n")),Object(i.b)("p",null,"If you're using an older version of haskell you might have to miss the\n",Object(i.b)("inlineCode",{parentName:"p"},"--lib")," off the above command."),Object(i.b)("h2",{id:"editor-plugin"},"Editor plugin"),Object(i.b)("p",null,"Your text editor might refer to the Tidal Cycles plugin as an ",Object(i.b)("em",{parentName:"p"},"extension")," or as a ",Object(i.b)("em",{parentName:"p"},"package"),". Check the sidebar to get more information about ways to update your favorite text editor. "),Object(i.b)("h2",{id:"superdirt"},"SuperDirt"),Object(i.b)("p",null,"To upgrade the ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," sound synthesiser/sampler, open ",Object(i.b)("strong",{parentName:"p"},"SuperCollider"),",\nand paste the following command in the interactive editor. Select the text and press Shift+Enter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'Quarks.update("SuperDirt")\n')),Object(i.b)("p",null,"You'll need to recompile the class library. You can do this either by simply restarting the software or via the ",Object(i.b)("em",{parentName:"p"},"Recompile class library")," entry on the ",Object(i.b)("em",{parentName:"p"},"Language")," top-bar menu."))}d.isMDXComponent=!0},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,g=u["".concat(o,".").concat(b)]||u[b]||s[b]||i;return r?a.a.createElement(g,l(l({ref:t},p),{},{components:r})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);