(this["webpackJsonpstaking-frontend"]=this["webpackJsonpstaking-frontend"]||[]).push([[6],{1097:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return De}));var a,i,r,s,o,p,u,c,l,d,m,b,y,f=n(21),j=n(0),x=n(3),O=n(17),h=n(215),v=n(869),g=n(1),w=n.n(g),T=n(11),k=n(27),M=n(219),S=n(52),z=n(871),A=n(891),C=n(218),I=n(165),F=n(18),R=n(36),E=n(204),N=n(847),P=n(848),H=n(980),U=n(4),Q=function(e){var t=e.value,n=e.decimals,a=e.inline,i=e.fontSize,r=void 0===i?"40px":i,s=e.lineHeight,o=void 0===s?"1":s,p=e.prefix,u=void 0===p?"":p,c=e.bold,l=void 0===c||c,d=e.color,m=void 0===d?"text":d,b=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:2}),y=b.countUp,f=b.update,x=Object(j.useRef)(f);return Object(j.useEffect)((function(){x.current(t)}),[t,x]),Object(U.jsxs)(O.v,{style:{lineHeight:o,display:a?"inline":"block"},bold:l,fontSize:r,color:m,children:[u,y]})},B=function(e){var t=e.balance,n=(e.prefix,e.decimals);return Object(R.c)().account?Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(Q,{value:Number(t),decimals:n,fontSize:"24px",lineHeight:"36px"})}):Object(U.jsx)(O.v,{color:"textDisabled",style:{lineHeight:"54px"},children:"Connect wallet to view"})},_=Object(x.e)(P.a)(a||(a=Object(f.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 30%;\n  background-position: 80% 50%;\n  min-height: 376px;\n"])),M.a),V=x.e.div(i||(i=Object(f.a)(["\n  margin-bottom: 16px;\n"]))),D=x.e.div(r||(r=Object(f.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Y=x.e.div(s||(s=Object(f.a)(["\n  margin-top: 24px;\n"]))),W=function(){var e=Object(j.useState)(!1),t=Object(k.a)(e,2),n=t[0],a=(t[1],Object(R.c)().account),i=Object(h.a)(),r=Object(z.a)(C,Object(F.a)(I.a)),s=Object(z.a)(A,Object(F.a)(I.b)),o=Object(j.useState)(0),p=Object(k.a)(o,2),u=p[0],c=(p[1],Object(j.useState)(0)),l=Object(k.a)(c,2),d=l[0],m=l[1],b=Object(j.useState)(0),y=Object(k.a)(b,2),f=y[0],x=y[1],v=Object(j.useState)(0),g=Object(k.a)(v,2),M=g[0],P=g[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(T.a)(w.a.mark((function e(){var t,n,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0,!a){e.next=28;break}return e.prev=2,console.log("getting totalAMount",r),e.next=6,r.methods.calcHarvestTotForUser(a).call();case 6:t=e.sent,m(Number(t)/1e18),console.log("registeredIds",t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("error getting reigsted is",e.t0);case 14:return e.prev=14,e.next=17,r.methods.listRegisteredTokens(a).call();case 17:return n=e.sent.length,e.next=20,s.methods.tokensOfOwner(a).call();case 20:i=e.sent.length,P(i),x(n),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(14),console.log("error",e.t1,a);case 28:case"end":return e.stop()}}),e,null,[[2,11],[14,25]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,a,u,s]),Object(U.jsx)(_,{children:Object(U.jsxs)(O.f,{children:[Object(U.jsx)(N.a,{size:"xl",mb:"10px",children:"Your Earnings"}),Object(U.jsx)(N.a,{color:"rgba(255,255,255,0.8)",size:"md",mb:"24px",ml:"5px",children:"Locked rappears earn royalties as ETH"}),Object(U.jsxs)(V,{children:[Object(U.jsxs)(D,{children:[i(546,"RAPPEARS in Wallet"),":"]}),Object(U.jsx)(B,{balance:M,decimals:0})]}),Object(U.jsxs)(V,{children:[Object(U.jsx)(D,{children:"Your RAPPEARS registered:"}),Object(U.jsx)(B,{balance:f,decimals:0})]}),Object(U.jsxs)(V,{children:[Object(U.jsxs)(D,{children:[i(544,"Royalties to Harvest"),":"]}),Object(U.jsx)(B,{balance:d,decimals:0})]}),Object(U.jsx)(Y,{children:a?Object(U.jsx)(S.b,{to:"/farms",children:Object(U.jsx)(O.d,{id:"harvest-all",width:"100%",children:n?i(548,"Collecting Royalties"):i(532,"Claim Royalties")})}):Object(U.jsx)(E.a,{width:"100%"})})]})})},Z=n(16),$=n.n(Z),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new $.a(e).dividedBy(new $.a(10).pow(t));return n.toNumber()},J=n(50),L=n(856),X=n(199),G=n(76),K=Object(x.e)(P.a)(o||(o=Object(f.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ee=x.e.div(p||(p=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 0px;\n"]))),te=function(){Object(h.a)();var e=function(){var e=Object(X.a)().slowRefresh,t=Object(j.useState)(),n=Object(k.a)(t,2),a=n[0],i=n[1];return Object(j.useEffect)((function(){function e(){return(e=Object(T.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,i(new $.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),a}(),t=q(function(e){var t=Object(j.useState)(new $.a(0)),n=Object(k.a)(t,2),a=n[0],i=n[1],r=Object(X.a)().slowRefresh,s=Object(L.a)();return Object(j.useEffect)((function(){var t=function(){var t=Object(T.a)(w.a.mark((function t(){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(J.a)(e,s),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:a=t.sent,i(new $.a(a));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[s,e,r]),a}(Object(F.d)())),n=e?q(e)-t:0;Object(G.a)();return Object(U.jsx)(K,{children:Object(U.jsxs)(O.f,{children:[Object(U.jsx)(N.a,{size:"xl",mb:"24px",children:"DAO Voting & Proposals"}),Object(U.jsxs)(ee,{children:[Object(U.jsx)(O.v,{style:{flex:3},fontSize:"20px",children:"Coming Soon........"}),Object(U.jsx)("div",{style:{flex:1,textAlign:"right"},children:n?Object(U.jsx)(Q,{fontSize:"14px",value:0}):0}),Object(U.jsx)("hr",{})]}),Object(U.jsx)(O.v,{fontSize:"14px",color:"textSubtle",children:"Current Proposal"}),Object(U.jsx)("br",{})]})})},ne=Object(x.e)(P.a)(u||(u=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ae=function(){var e=Object(G.h)(),t=Object(j.useState)(0),n=Object(k.a)(t,2),a=n[0],i=n[1];return Object(j.useEffect)((function(){var t=Number(e.registeredNfts)/100;Number.isNaN(t)||setTimeout((function(){i(t||0),console.log("setting",t)}),1e3)}),[e.registeredNfts]),Object(U.jsx)(ne,{children:Object(U.jsxs)(O.f,{children:[Object(U.jsx)(O.v,{fontWeight:800,fontSize:"24px",mb:"14px",children:"Project Statistics"}),0!==a?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(N.a,{size:"xl",children:Object(U.jsx)(Q,{value:a,decimals:0})}),Object(U.jsx)(O.v,{ml:"5px",mt:"5px",color:"textSubtle",children:"Rappears Staked"})]}):Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(O.t,{height:66})})]})})},ie=x.e.div(c||(c=Object(f.a)(["\n  margin-bottom: 24px;\n}\n"]))),re=function(e){var t=e.balance,n=e.prefix,a=e.decimals;return t?Object(U.jsx)(ie,{children:Object(U.jsx)(Q,{prefix:n,decimals:a,value:Number(t),lineHeight:"1.5"})}):Object(U.jsx)(O.v,{color:"textDisabled",style:{lineHeight:"50px"},children:"Loading..."})},se=Object(x.e)(P.a)(l||(l=Object(f.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 45%;\n  background-position: 85% 50%;\n  background-repeat: no-repeat;\n\n  @media only screen and (min-width: 792px) {\n    background-size: 50%;\n    background-position: 45% 70%;\n    background-repeat: no-repeat;\n  }\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),oe=Object(x.e)(O.v).attrs({fontSize:"45px"})(d||(d=Object(f.a)(["\n  line-height: 44px;\n  font-weight: 800;\n  display: inline-block;\n"]))),pe=x.e.div(m||(m=Object(f.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ue=x.e.div(b||(b=Object(f.a)(["\n  font-size: 15px;\n  font-weight: 200;\n  color: white;\n"]))),ce=function(){var e=Object(G.h)();Object(G.d)();console.log("rewardPool",e);var t=e.rewardsPaidOut,n=void 0===t?0:t,a=e.treasuryHoldings,i=void 0===a?0:a,r=new $.a(i.toString()).multipliedBy(3e3).dividedBy(1e18).toFixed(2),s=new $.a(n.toString()).multipliedBy(3e3).dividedBy(1e18).toFixed(2);return Object(U.jsx)(se,{children:Object(U.jsxs)(O.f,{children:[Object(U.jsx)(N.a,{size:"xl",mb:"10px",children:"DAO Stats"}),Object(U.jsx)(O.v,{color:"contrast",fontWeight:800,fontSize:"25px",mb:"5px",children:"Rappear holders have earned"}),Object(U.jsx)(oe,{color:"#79ff4e",children:n?Object(U.jsxs)(U.Fragment,{children:["US$",Object(U.jsx)(Q,{fontSize:"45px",color:"#79ff4e",inline:!0,lineHeight:"0.8",value:Number(s)}),Object(U.jsxs)(ue,{children:[(Number(s)/3e3).toFixed(4)," ETH"]})]}):Object(U.jsx)(O.t,{animation:"pulse",variant:"rect",height:"44px"})}),Object(U.jsx)(O.v,{color:"contrast",fontWeight:800,fontSize:"25px",mt:"5px",mb:"25px",children:"through music and trade royalties"}),Object(U.jsx)(pe,{children:"Treasury Holdings (US$ Value)"}),Object(U.jsx)(re,{prefix:"$",balance:"".concat(r)}),Object(U.jsx)(pe,{children:"Number of Music (tracks) generating royalties"}),Object(U.jsx)(re,{balance:"0",decimals:0})]})})},le=n(368),de=n(983),me=n.n(de),be=x.e.div(y||(y=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 0;\n  transition: opacity 0.3s ease;\n"])));function ye(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(be,{children:Object(U.jsx)(me.a,{id:"tsparticles",options:{particles:{number:{value:0},color:{value:["#00FFFC","#FC00FF","#fffc00"]},shape:{type:["circle","square"],options:{}},opacity:{value:1,animation:{enable:!0,minimumValue:0,speed:2,startValue:"max",destroy:"min"}},size:{value:6,random:{enable:!0,minimumValue:2}},links:{enable:!1},life:{duration:{sync:!0,value:5},count:1},move:{enable:!0,gravity:{enable:!0,acceleration:10},speed:{min:10,max:60},decay:.1,direction:"none",straight:!1,outModes:{default:"destroy",top:"none"}},rotate:{value:{min:0,max:360},direction:"random",animation:{enable:!0,speed:60}},tilt:{direction:"random",enable:!0,value:{min:0,max:360},animation:{enable:!0,speed:60}},roll:{darken:{enable:!0,value:25},enable:!0,speed:{min:15,max:25}},wobble:{distance:30,enable:!0,speed:{min:-15,max:15}}},emitters:{life:{count:0,duration:.1,delay:.9},rate:{delay:.1,quantity:250},size:{width:0,height:0}}}})})})}var fe,je,xe,Oe,he,ve,ge,we,Te,ke=Object(x.f)(fe||(fe=Object(f.a)(["\n\t0%,5% {\n\t\ttransform: scaleY(0) ;\n\t}\n    10%{\n        transform: scaleY(1) ;\n    }\n\t90% {\n        transform: scaleY(1) ;\n\t}\n\t95%,100% {\n        transform: scaleY(0) ;\n\t}\n"]))),Me=Object(x.f)(je||(je=Object(f.a)(["\n   0%,5% {\n\t\ttransform: translate3d(-80vw,0,0);\n\t}\n    10%{\n        transform:  translate3d(-80vw,0,0);\n    }\n\t90% {\n        transform:  translate3d(0,0,0);\n\t}\n\t95%,100% {\n        transform: translate3d(0,0,0);\n\t}\n"]))),Se=Object(x.f)(xe||(xe=Object(f.a)(["\n    0%,5% {\n\t\ttransform:  translate3d(80vw,0,0);\n\t}\n    10%{\n        transform:  translate3d(80vw,0,0);\n    }\n\t90% {\n        transform:  translate3d(0,0,0);\n\t}\n\t95%,100% {\n        transform: translate3d(0,0,0);\n\t}\n"]))),ze=Object(x.f)(Oe||(Oe=Object(f.a)(["\n    0%{\n\t\topacity:0;\n\t}\n   \n\t95% {\n        opacity:0;\n\t}\n    100%{\n        opacity:1;\n    }\n"]))),Ae=x.e.div(he||(he=Object(f.a)(["\n  position: relative;\n  padding: 3rem;\n  @media only screen and (max-width: 500px) {\n    padding: 3rem 0 0 0;\n  }\n"]))),Ce=x.e.div(ve||(ve=Object(f.a)(['\n  margin-top: 30px;\n  position: relative;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  font-size: 2rem;\n  background-color: #04d9ff24;\n  border-radius: 10px;\n  z-index: 3;\n  :after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    box-shadow: inset 0 0 0.1em #04d9ff, inset 0 0 0.2em #04d9ff,\n      inset 0 0 0.5em #04d9ff, 0 0 4em #04d9ff;\n    animation: '," 2s linear forwards;\n    border: 5px solid #fff;\n    border-radius: inherit;\n  }\n  @media only screen and (max-width: 500px) {\n    top: 15%;\n  }\n  @media only screen and (min-width: 568px) {\n    font-size: 3.5rem;\n  }\n  @media only screen and (min-width: 768px) {\n    font-size: 5rem;\n  }\n"])),ze),Ie=x.e.div(ge||(ge=Object(f.a)(["\n  overflow: hidden;\n  width: 100%;\n  /* transform: translate(300px,0); */\n  animation: "," 2s linear forwards;\n  padding: 1rem 1rem;\n"])),Me),Fe=x.e.h1(we||(we=Object(f.a)(["\n  text-align: center;\n  font-size: inherit;\n  color: #fff;\n  text-shadow: 0 0 0.2em #ff3333, 0 0 0.3em #ff3333, 0 0 0.5em #ff3333,\n    0 0 8.8em #ff3333, 0 0 8.6em #ff3333;\n  animation: "," 2s linear forwards;\n"])),Se),Re=x.e.div(Te||(Te=Object(f.a)(["\n  position: relative;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  z-index: 2;\n  box-shadow: 0 0 10px #04d9ff, 0 0 20px #04d9ff, 0 0 40px #04d9ff,\n    0 0 80px #04d9ff, 0 0 120px #04d9ff;\n  animation: "," 2s linear forwards;\n"])),ke);var Ee,Ne,Pe,He,Ue=function(e){var t=e.videoPlayed,n=(e.setVideoPlayed,Object(j.useState)(!1)),a=Object(k.a)(n,2),i=a[0],r=(a[1],Object(j.useState)(!0)),s=Object(k.a)(r,2),o=(s[0],s[1],Object(j.useState)(t)),p=Object(k.a)(o,2);return p[0],p[1],Object(U.jsxs)(Ae,{children:[i?Object(U.jsx)(le.a,{}):Object(U.jsx)(Ce,{children:Object(U.jsxs)(Ie,{children:[Object(U.jsxs)(Fe,{children:["Rappears ",Object(U.jsx)("br",{})," DAO"]}),Object(U.jsx)(Re,{})]})}),Object(U.jsx)(ye,{})]})},Qe=n(892),Be=Object(x.e)(v.a)(Ee||(Ee=Object(f.a)(["\n  background: #090e1a url(",");\n  padding: 0;\n  max-width: 100vw;\n"])),Qe.a),_e=(x.e.div(Ne||(Ne=Object(f.a)(["\n  align-items: center;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  text-align: center;\n"]))),Object(x.e)(O.b)(Pe||(Pe=Object(f.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}))),Ve=x.e.div(He||(He=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  > div {\n    width: 100%;\n    margin: 1rem;\n  }\n  @media only screen and (min-width: 800px) {\n    flex-direction: row;\n    align-items: stretch;\n    > div {\n      min-width: 45%;\n      max-width: 45%;\n      margin: 0 1rem;\n    }\n  }\n"]))),De=function(e){var t=e.videoPlayed,n=e.setVideoPlayed;Object(h.a)();return Object(U.jsxs)(Be,{children:[Object(U.jsx)(Ue,{videoPlayed:t,setVideoPlayed:n}),Object(U.jsxs)("div",{style:{padding:"3rem 1rem"},children:[Object(U.jsxs)(Ve,{children:[Object(U.jsx)(ce,{}),Object(U.jsx)(W,{})]}),Object(U.jsx)(_e,{}),Object(U.jsxs)(Ve,{children:[Object(U.jsx)(te,{}),Object(U.jsx)(ae,{})]})]})]})}},847:function(e,t,n){"use strict";var a,i,r=n(21),s=n(17),o=n(3),p=(Object(o.f)(a||(a=Object(r.a)(["\n    0%,5% {\n\t\ttransform:  translate3d(80vw,0,0);\n\t}\n    10%{\n        transform:  translate3d(80vw,0,0);\n    }\n\t90% {\n        transform:  translate3d(0,0,0);\n\t}\n\t95%,100% {\n        transform: translate3d(0,0,0);\n\t}\n"]))),Object(o.e)(s.l)(i||(i=Object(r.a)(["\n  text-shadow: 0 0 0.2em #ff3333, 0 0 0.3em #ff3333, 0 0 0.5em #ff3333,\n    0 0 8.8em #ff3333, 0 0 8.6em #ff3333;\n"]))));t.a=p},848:function(e,t,n){"use strict";var a,i,r,s=n(21),o=n(17),p=n(3),u=function(e){var t=e.theme;return Object(p.f)(a||(a=Object(s.a)(["\n  0% {\n    box-shadow: 0 0 1rem ",", 0 0 1rem ",", inset 0 0 2rem 0 ",";\n  }\n  50% {\n    box-shadow: 0 0 4rem ",", 0 0 2rem ",", inset 0 0 4.5rem 0 ",";\n  }\n  100% {\n    box-shadow: 0 0 1rem ","), 0 0 1rem $",",inset 0 0 2rem 0 ",";\n  }\n"])),t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor,t.colors.borderColor)},c=Object(p.e)(o.e)(i||(i=Object(s.a)(["\n  animation: ",";\n  background: #ff333310;\n  backdrop-filter: blur(2px);\n  border: 1px solid ",";\n  box-shadow: 0 0 2rem ",",\n    0 0 2rem ",",\n    inset 0 0 2rem ",";\n"])),(function(e){return e.animate?Object(p.d)(r||(r=Object(s.a)([""," 1s 1s infinite "])),u):"none"}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor}));t.a=c},856:function(e,t,n){"use strict";var a=n(27),i=n(0),r=n(95),s=n.n(r),o=n(36),p=n(61);t.a=function(){var e=Object(o.c)().library,t=Object(i.useRef)(e),n=Object(i.useState)(e?new s.a(e):Object(p.b)()),r=Object(a.a)(n,2),u=r[0],c=r[1];return Object(i.useEffect)((function(){e!==t.current&&(c(e?new s.a(e):Object(p.b)()),t.current=e)}),[e]),u}},869:function(e,t,n){"use strict";var a,i,r=n(21),s=n(3),o=s.e.div(a||(a=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),p=Object(s.e)(o)(i||(i=Object(r.a)(["\n  min-height: 60vh;\n  max-height: 120vh;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}));t.a=p},871:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n(856),r=n(50),s=function(e,t){var n=Object(i.a)();return Object(a.useMemo)((function(){return Object(r.f)(e,t,n)}),[e,t,n])}},891:function(e){e.exports=JSON.parse('[{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"pause","type":"bool"}],"name":"PauseEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_ELEMENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"qty","type":"uint256[]"}],"name":"airdropMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"baseTokenUris","outputs":[{"internalType":"uint256","name":"startId","type":"uint256"},{"internalType":"uint256","name":"endId","type":"uint256"},{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearBaseUris","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721AUpgradeable.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721AUpgradeable.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"uint256","name":"startId","type":"uint256"},{"internalType":"uint256","name":"endId","type":"uint256"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"},{"internalType":"uint256","name":"_devFee","type":"uint256"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxElements","type":"uint256"}],"name":"setMaxElements","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"setMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintPriceWei","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_pause","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whitelistStart","type":"uint256"},{"internalType":"uint256","name":"_publicStart","type":"uint256"}],"name":"setStartTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},892:function(e,t,n){"use strict";t.a=n.p+"static/media/brickBg.ee97b925.jpg"}}]);
//# sourceMappingURL=6.a41767b6.chunk.js.map