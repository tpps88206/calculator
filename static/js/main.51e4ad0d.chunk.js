(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var a,i,c=n(27),r=n(5),o=n(0),l=n(42),s=n(6),f=n(106),u=n(168),p=n(104),b=n(172),j=n(167),d=n(35),h=n(36),x=n(10),O=n(99),m=n(169),g=n(94),v=n(21),y=n(171),w=n(46),S=n(37),k=n(108),C=n(100),A=n.n(C),E=n(101),T=n.n(E),W=n(102),_=n.n(W),R=n(109),D=function(e){if(!e||!e.epics)return[];var t=T()(Object.entries(e).filter((function(e){var t=Object(S.a)(e,1)[0];return"default"!==t&&"epics"!==t})).filter((function(e){var t=Object(S.a)(e,2)[1];return t&&t.type})).map((function(e){var t=Object(S.a)(e,2);return[t[0],t[1].type]})));return Object.entries(e.epics).map((function(e){var n=Object(S.a)(e,2),a=n[0],i=n[1];return a.endsWith("Epic")?i:function(e,n){return e.pipe(Object(k.a)(t[a]),Object(R.a)((function(t){return i(e,n,t)})))}}))},F=y.a.apply(void 0,Object(c.a)((a=[w],_()(a)?[]:A()(a.map(D))))),H=Object(v.a)(),I=Object(m.a)(),L=function(){var e,t=Object({NODE_ENV:"production",PUBLIC_URL:"/calculator",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FLAVOR,n=Object(x.createStore)((e=H,Object(x.combineReducers)({router:Object(h.b)(e),calculate:w.default})),Object(O.composeWithDevTools)({trace:"dev"===t})(Object(x.applyMiddleware)(Object(g.a)(H),I)));return I.run(F),n},B=n(64),P=n(80),V=n.n(P),N=n(164),K=function(e){var t=e.message,n=e.className,a=e.style;return Object(r.jsxs)("div",{className:V()("d-flex flex-column justify-center align-center vh-100",n),style:a,children:[Object(r.jsx)(N.a,{}),t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:t})]})]})},J=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,222))})),U=function(){return Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(K,{message:"Loading..."}),children:Object(r.jsx)(B.c,{children:Object(r.jsx)(B.a,{path:"/",component:J})})})},z=L(),M=function(){return Object(r.jsx)(d.a,{store:z,children:Object(r.jsx)(h.a,{history:H,children:Object(r.jsx)(U,{})})})},q={palette:{primary:{main:"#45baae"},secondary:{main:"#3f51b5"},error:{main:"#FF3B30"},background:{default:"#fff"},link:{main:"#11456C"},action:{hover:"#c7eae7",selected:"#e9f7f5"}}},G=n(18),Q=function(e){return{".color-white":{color:"#ffffff"},".color-black":{color:"#000000"},".color-primary":{color:e.palette.primary.main},".color-error":{color:e.palette.error.main},".color-success":{color:e.palette.success.main},".color-warning":{color:e.palette.warning.main},".color-info":{color:e.palette.info.main},".color-text-primary":{color:e.palette.text.primary},".color-text-secondary":{color:e.palette.text.secondary}}},X={".d-none":{display:"none"},".d-inline":{display:"inline"},".d-inline-block":{display:"inline-block"},".d-inline-flex":{display:"inline-flex"},".d-block":{display:"block"},".d-flex":{display:"flex"}},Y={".flex-row":{flexDirection:"row"},".flex-row-rev":{flexDirection:"row-reverse"},".flex-column":{flexDirection:"column"},".flex-column-rev":{flexDirection:"column-reverse"},".justify-start":{justifyContent:"flex-start"},".justify-end":{justifyContent:"flex-end"},".justify-center":{justifyContent:"center"},".justify-space-between":{justifyContent:"space-between"},".justify-space-around":{justifyContent:"space-around"},".justify-space-evenly":{justifyContent:"space-evenly"},".justify-row":{justifyContent:"row"},".align-start":{alignItems:"flex-start"},".align-end":{alignItems:"flex-end"},".align-center":{alignItems:"center"},".align-stretch":{alignItems:"stretch"},".align-baseline":{alignItems:"baseline"},".align-self-start":{alignSelf:"flex-start"},".align-self-end":{alignSelf:"flex-end"},".align-self-center":{alignSelf:"center"},".align-self-stretch":{alignSelf:"stretch"},".align-self-baseline":{alignSelf:"baseline"},".flex-nowrap":{flexWrap:"nowrap"},".flex-wrap":{flexWrap:"wrap"},".flex-wrap-reverse":{flexWrap:"wrap-reverse"},".flex-shrink-0":{flexShrink:0}},Z={".position-static":{position:"static"},".position-relative":{position:"relative"},".position-absolute":{position:"absolute"},".position-fixed":{position:"fixed"},".position-sticky":{position:"sticky"}},$={".w-100":{width:"100%"},".h-100":{height:"100%"},".vw-100":{width:"100vw"},".vh-100":{height:"100vh"},".min-w-100":{minWidth:"100%"},".min-h-100":{minHeight:"100%"},".min-vw-100":{minWidth:"100vw"},".min-vh-100":{minHeight:"100vh"},".max-w-100":{maxWidth:"100%"},".max-h-100":{maxHeight:"100%"},".max-vw-100":{maxWidth:"100vw"},".max-vh-100":{maxHeight:"100vh"}},ee=n(16),te={m:"margin",p:"padding"},ne={t:"Top",b:"Bottom",l:"Left",r:"Right"},ae=function(e){var t={},n=["t","b","l","r","x","y","a"],a=[].concat(Object(c.a)(new Array(20).fill().map((function(e,t){return-t/2}))),Object(c.a)(new Array(20).fill().map((function(e,t){return t/2}))));return["m","p"].forEach((function(i){n.forEach((function(n){a.forEach((function(a){var c;switch(n){case"x":var r,o=te[i];r={},Object(ee.a)(r,"".concat(o,"Left"),e.spacing(a)),Object(ee.a)(r,"".concat(o,"Right"),e.spacing(a)),c=r;break;case"y":var l,s=te[i];l={},Object(ee.a)(l,"".concat(s,"Top"),e.spacing(a)),Object(ee.a)(l,"".concat(s,"Bottom"),e.spacing(a)),c=l;break;case"a":var f,u=te[i];f={},Object(ee.a)(f,"".concat(u,"Top"),e.spacing(a)),Object(ee.a)(f,"".concat(u,"Bottom"),e.spacing(a)),Object(ee.a)(f,"".concat(u,"Left"),e.spacing(a)),Object(ee.a)(f,"".concat(u,"Right"),e.spacing(a)),c=f;break;default:var p="".concat(te[i]).concat(ne[n]);c=Object(ee.a)({},p,e.spacing(a))}var b=".".concat(i).concat(n,"-").concat(a.toString().replace("-","n").replace(".","_"));t[b]=c}))}))})),t},ie={".text-center":{textAlign:"center"},".text-left":{textAlign:"left"},".text-right":{textAlign:"right"},".text-truncate":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},".text-bold":{fontWeight:500}},ce=Object(p.a)(q),re=Object(s.b)({plugins:Object(c.a)(Object(f.a)().plugins)});re.createStyleSheet((i=ce,{"@global":Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)({html:{height:"100%",overflow:"hidden"},body:{height:"100%",fontFamily:"Roboto, Noto Sans TC, sans-serif","-webkit-font-smoothing":"antialiased"},"#root":{height:"100%"},"h1, h2, h3, h4, h5, h6, p":{margin:0,padding:0},a:{display:"inline-block",textDecoration:"none",color:"inherit"},button:{outline:"none",border:"none"}},X),Y),Z),$),ie),Q(i)),ae(i))}),{meta:"global"}).attach();var oe=document.getElementById("root");oe&&Object(l.render)(Object(r.jsx)(b.b,{jss:re,children:Object(r.jsxs)(j.a,{theme:ce,children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(M,{})]})}),oe)},46:function(e,t,n){"use strict";n.r(t),n.d(t,"clearAll",(function(){return l})),n.d(t,"setValue",(function(){return s}));var a=n(18),i=n(107),c={value:null,displayValue:"0",operator:null,waitingForOperand:!1},r=Object(i.a)({name:"calculate",initialState:c,reducers:{clearAll:function(e,t){return c},setValue:function(e,t){var n=t.payload;return Object(a.a)(Object(a.a)({},e),n)}}}),o=r.actions,l=o.clearAll,s=o.setValue;t.default=r.reducer}},[[147,1,2]]]);
//# sourceMappingURL=main.51e4ad0d.chunk.js.map