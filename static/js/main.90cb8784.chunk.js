(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(6),a=n.n(i),o=(n(12),n(7)),s=n(4),l=(n(13),n(0));function u(t){return Object(l.jsx)("div",{onClick:t.cellClicked,style:{width:"20px",height:"20px",background:t.isAlive?"gray":"white",border:"0.1px solid lightgray",boxSizing:"border-box"}})}function d(t){return Object(l.jsx)("div",{style:{display:"flex"},children:t.children})}function j(t,e){for(var n=[],r=0;r<t;r++){n[r]=[];for(var c=0;c<e;c++)n[r][c]=0}return n}var b=function t(e){var n=[];return e.forEach((function(e){Array.isArray(e)?n.push(t(e)):n.push(e)})),n};n(15);function f(){var t=Object(r.useState)(j(40,50)),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)(0),a=Object(s.a)(i,2),f=a[0],p=a[1],x=Object(r.useState)(null),h=Object(s.a)(x,2),O=h[0],v=h[1];function y(){p((function(t){return t+1})),c((function(t){return function(t,e,n){for(var r=b(n),c=0;c<t;c++)for(var i=0;i<e;i++){var a=1===n[c][i],o=0;c-1>0&&i-1>0&&1===n[c-1][i-1]&&o++,c-1>0&&1===n[c-1][i]&&o++,c-1>0&&i+1<e&&1===n[c-1][i+1]&&o++,i-1>0&&1===n[c][i-1]&&o++,i+1<e&&1===n[c][i+1]&&o++,c+1<t&&i-1>0&&1===n[c+1][i-1]&&o++,c+1<t&&1===n[c+1][i]&&o++,c+1<t&&i+1<e&&1===n[c+1][i+1]&&o++,a&&(o<2||o>3)&&(r[c][i]=0),a||3!==o||(r[c][i]=1)}return r}(40,50,t)}))}var g=function(){clearInterval(O),v(null)};return Object(l.jsxs)("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",flexFlow:"column"},children:[Object(l.jsx)("h1",{children:"Welcome to Game of Life"}),Object(l.jsxs)("div",{style:{display:"flex",padding:"10px",gap:"20px",alignItems:"center"},children:[Object(l.jsx)("button",{style:{background:"transparent",border:0,cursor:"pointer"},onClick:function(){O||v(setInterval(y,100))},children:Object(l.jsx)("span",{class:"iconify","data-icon":"pixelarticons:play","data-width":"36"})}),Object(l.jsx)("button",{style:{background:"transparent",border:0,cursor:"pointer"},onClick:g,children:Object(l.jsx)("span",{class:"iconify","data-icon":"pixelarticons:pause","data-width":"36"})}),Object(l.jsx)("button",{style:{background:"transparent",border:0,cursor:"pointer"},onClick:function(){c(j(40,50)),g(),p(0)},children:Object(l.jsx)("span",{class:"iconify","data-icon":"pixelarticons:undo","data-width":"36"})}),"Gen ",f]}),Object(l.jsx)("div",{children:n.map((function(t,e){return Object(l.jsx)(d,{children:t.map((function(t,r){return Object(l.jsx)(u,{isAlive:t,cellClicked:function(){var i=Object(o.a)(n);i[e][r]=t?0:1,c(i)}},e+r)}))},e)}))})]})}a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.90cb8784.chunk.js.map