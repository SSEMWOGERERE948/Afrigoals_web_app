(()=>{var e={};e.id=73,e.ids=[73],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3922:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>g,tree:()=>d});var r=a(482),l=a(9108),t=a(2563),i=a.n(t),n=a(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(s,o);let d=["",{children:["leagues",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8386)),"F:\\Afrigoals\\afrigoals_orig\\project\\src\\app\\leagues\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,2848)),"F:\\Afrigoals\\afrigoals_orig\\project\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"]}],c=["F:\\Afrigoals\\afrigoals_orig\\project\\src\\app\\leagues\\page.tsx"],m="/leagues/page",x={require:a,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/leagues/page",pathname:"/leagues",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1932:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},5281:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,1476,23)),Promise.resolve().then(a.bind(a,3083))},7034:(e,s,a)=>{Promise.resolve().then(a.bind(a,1734))},3083:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var r=a(2295),l=a(3729),t=a(8902);function i(){let[e,s]=(0,l.useState)(!1),a=[{label:"Dashboard",href:"/admin/dashboard"},{label:"Team Management",href:"/admin/team-management"},{label:"Shop Management",href:"/admin/shop-management"}];return(0,r.jsxs)("nav",{className:"bg-green-700 text-white",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center h-16",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("a",{href:"/",className:"font-bold text-xl",children:"Afrigoals"})}),r.jsx("div",{className:"hidden md:block",children:r.jsx("div",{className:"ml-10 flex items-center space-x-4",children:a.map(e=>r.jsx("a",{href:e.href,className:"hover:bg-green-600 px-3 py-2 rounded-md",children:e.label},e.label))})}),r.jsx("div",{className:"md:hidden",children:r.jsx("button",{onClick:()=>s(!e),className:"p-2 rounded-md hover:bg-green-600",children:e?r.jsx(t.q5L,{className:"h-6 w-6"}):r.jsx(t.cur,{className:"h-6 w-6"})})})]})}),e&&r.jsx("div",{className:"md:hidden",children:r.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1",children:a.map(e=>r.jsx("a",{href:e.href,className:"block px-3 py-2 rounded-md hover:bg-green-600",children:e.label},e.label))})})]})}},1734:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var r=a(2295),l=a(3729),t=a(3673);function i(){let[e,s]=(0,l.useState)([{id:"upl",name:"StarTimes Uganda Premier League",logo:"/images/upl.jpeg"}]),a=a=>{e.some(e=>e.id===a.id)||s([...e,a])},i=a=>{s(e.filter(e=>e.id!==a))};return(0,r.jsxs)("div",{className:"space-y-6",children:[r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Manage Followed Leagues"}),(0,r.jsxs)("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Leagues You Follow"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:e.map(e=>r.jsx(t.Zb,{className:"relative",children:(0,r.jsxs)(t.aY,{className:"p-4 flex items-center space-x-4",children:[r.jsx("img",{src:e.logo,alt:e.name,className:"w-12 h-12 rounded-md"}),r.jsx("span",{className:"font-medium",children:e.name}),r.jsx("button",{onClick:()=>i(e.id),className:"absolute top-2 right-2 text-red-500 hover:text-red-700",children:"Unfollow"})]})},e.id))})]}),(0,r.jsxs)("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Available Leagues"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{id:"upl",name:"StarTimes Uganda Premier League",logo:"/images/upl.jpeg"},{id:"big-league",name:"Fufa Big League",logo:"/images/fufa_big_league.jpeg"},{id:"regional-league",name:"Regional Leagues",logo:"/images/regional_league.jpeg"},{id:"women-super-league",name:"Fufa Women Super League",logo:"/images/women_super_league.jpeg"}].map(s=>r.jsx(t.Zb,{className:`cursor-pointer hover:bg-gray-50 ${e.some(e=>e.id===s.id)?"opacity-50 cursor-not-allowed":""}`,onClick:()=>a(s),children:(0,r.jsxs)(t.aY,{className:"p-4 flex items-center space-x-4",children:[r.jsx("img",{src:s.logo,alt:s.name,className:"w-12 h-12 rounded-md"}),r.jsx("span",{className:"font-medium",children:s.name})]})},s.id))})]})]})}},3673:(e,s,a)=>{"use strict";a.d(s,{Ol:()=>n,Zb:()=>i,aY:()=>d,ll:()=>o});var r=a(2295),l=a(3729),t=a(6943);let i=l.forwardRef(({className:e,...s},a)=>r.jsx("div",{ref:a,className:(0,t.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...s}));i.displayName="Card";let n=l.forwardRef(({className:e,...s},a)=>r.jsx("div",{ref:a,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",e),...s}));n.displayName="CardHeader";let o=l.forwardRef(({className:e,...s},a)=>r.jsx("h3",{ref:a,className:(0,t.cn)("text-2xl font-semibold leading-none tracking-tight",e),...s}));o.displayName="CardTitle",l.forwardRef(({className:e,...s},a)=>r.jsx("p",{ref:a,className:(0,t.cn)("text-sm text-muted-foreground",e),...s})).displayName="CardDescription";let d=l.forwardRef(({className:e,...s},a)=>r.jsx("div",{ref:a,className:(0,t.cn)("p-6 pt-0",e),...s}));d.displayName="CardContent",l.forwardRef(({className:e,...s},a)=>r.jsx("div",{ref:a,className:(0,t.cn)("flex items-center p-6 pt-0",e),...s})).displayName="CardFooter"},6943:(e,s,a)=>{"use strict";a.d(s,{cn:()=>t});var r=a(6815),l=a(9377);function t(...e){return(0,l.m6)((0,r.W)(e))}},2848:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g,metadata:()=>x});var r=a(5036);a(5023);let l=(0,a(6843).createProxy)(String.raw`F:\Afrigoals\afrigoals_orig\project\src\components\Navigation.tsx`),{__esModule:t,$$typeof:i}=l,n=l.default;var o=a(6876),d=a(646),c=a.n(d);function m(){let e=[{icon:r.jsx(o.QDI,{}),label:"Matches",href:"/"},{icon:r.jsx(o.kpq,{}),label:"News",href:"/news"},{icon:r.jsx(o.yyP,{}),label:"Leagues",href:"/leagues"},{icon:r.jsx(o.QJe,{}),label:"Favourite",href:"/favourite"},{icon:r.jsx(o.FeP,{}),label:"Shop",href:"/shop"},{icon:r.jsx(o.Fm7,{}),label:"More",href:"/"}];return r.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200",children:r.jsx("div",{className:"grid grid-cols-6 h-16",children:e.map(e=>(0,r.jsxs)(c(),{href:e.href,className:"flex flex-col items-center justify-center text-gray-600 hover:text-green-600",children:[r.jsx("span",{className:"text-xl mb-1",children:e.icon}),r.jsx("span",{className:"text-xs",children:e.label})]},e.label))})})}let x={title:"AfriGoals - Ugandan Football Platform",description:"Your premier destination for Ugandan football"};function g({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:"bg-gray-50",children:[r.jsx(n,{}),r.jsx("main",{className:"pb-16",children:e}),r.jsx(m,{})]})})}},8386:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var r=a(5036);let l=(0,a(6843).createProxy)(String.raw`F:\Afrigoals\afrigoals_orig\project\src\components\leagues\LeaguesList.tsx`),{__esModule:t,$$typeof:i}=l,n=l.default;function o(){return(0,r.jsxs)("div",{className:"relative mb-6",children:[r.jsx("input",{type:"text",placeholder:"Find leagues",className:"w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-200"}),r.jsx("svg",{className:"absolute left-3 top-2.5 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}function d(){return(0,r.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[r.jsx("h1",{className:"text-2xl font-bold mb-6",children:"LEAGUES"}),r.jsx(o,{}),r.jsx(n,{})]})}},5023:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[198,697],()=>a(3922));module.exports=r})();