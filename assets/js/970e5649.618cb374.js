(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(309)),o={title:"Build Rhythms",id:"buildrhythms"},c={unversionedId:"patternlib/howtos/buildrhythms",id:"patternlib/howtos/buildrhythms",isDocsHomePage:!1,title:"Build Rhythms",description:"This page will teach you how to get started writing rhythms using different techniques. It is a good way to learn Tidal Cycles in a more intuitive way.",source:"@site/docs/patternlib/howtos/buildrhythms.md",slug:"/patternlib/howtos/buildrhythms",permalink:"/docs/patternlib/howtos/buildrhythms",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/buildrhythms.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621678939,sidebar:"docs",previous:{title:"Build Arpeggios",permalink:"/docs/patternlib/howtos/buildarpeggios"},next:{title:"Play chords",permalink:"/docs/patternlib/howtos/playchords"}},s=[{value:"From a simple to a complex rhythm",id:"from-a-simple-to-a-complex-rhythm",children:[]},{value:"Another rhythmic construction",id:"another-rhythmic-construction",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page will teach you how to get started writing rhythms using different techniques. It is a good way to learn ",Object(l.b)("strong",{parentName:"p"},"Tidal Cycles")," in a more intuitive way."),Object(l.b)("h2",{id:"from-a-simple-to-a-complex-rhythm"},"From a simple to a complex rhythm"),Object(l.b)("p",null,"Simple bass drum - snare:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn"\n')),Object(l.b)("p",null,"Let's pick a different snare sample:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn:3"\n')),Object(l.b)("p",null,"Now, we are going to change the rhythm:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*2 [~ sn:3]"\n')),Object(l.b)("p",null,"And add some toms:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),Object(l.b)("p",null,"Start to transform, shift a quarter cycle every other cycle:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (0.25 <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),Object(l.b)("p",null,"Pattern the shift amount:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),Object(l.b)("p",null,"Add some patterned effects:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n')),Object(l.b)("p",null,"More transformation:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux\' [id,rev,(# speed 2)] $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n')),Object(l.b)("h2",{id:"another-rhythmic-construction"},"Another rhythmic construction"),Object(l.b)("p",null,"Let's start with a sequence:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 0 [2 0] [2 3]" # sound "feel" # speed 1.5\n')),Object(l.b)("p",null,"We add a bit of flavour:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),Object(l.b)("p",null,"Swap the samples round every other cycle:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),Object(l.b)("p",null,"Always worth trying a ",Object(l.b)("inlineCode",{parentName:"p"},"jux rev"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),Object(l.b)("p",null,"Calm it down a bit by reducing the amount of panning:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),Object(l.b)("p",null,"Vary the speed:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n')),Object(l.b)("p",null,"Add an offset ",Object(l.b)("inlineCode",{parentName:"p"},"vowel")," effect:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n')),Object(l.b)("p",null,"Let's add another friend:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n\n\nd2 $ juxBy 0.5 rev $ chunk 4 ((+ speed (1 + sine)) . ply 8) $ note "3(3,8)" # sound "bass"\n  # speed "<2 4>"\n  # legato 1\n')))}u.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,m=i["".concat(o,".").concat(d)]||i[d]||b[d]||l;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);