(this["webpackJsonpweb-crawler-frontend"]=this["webpackJsonpweb-crawler-frontend"]||[]).push([[9],{259:function(e,a,i){"use strict";i.r(a);var l=i(67),n=i(17),s=i(0),c="https://gowebevaluator.onrender.com",t="https://webevaluator.onrender.com/api",r="https://flask-backend-aman-codes.vercel.app",o={goStatus:function(){return"".concat(c,"/status")},crawl:function(){return"".concat(c,"/crawl")},ssl:function(){return"".concat(c,"/ssl")},sslapi:function(){return"".concat(r,"/ssl")},cookieChecker:function(){return"".concat(t,"/cchecker")},ada:function(){return"".concat(t,"/errors/css")},tenon:function(){return"".concat(t,"/tenon")},sniffer:function(){return"".concat(t,"/sniffer")},download:function(){return"".concat(t,"/pdf")},header:function(){return"".concat(r,"/securityheader")}},d=i(159),u=i.n(d),j=function(e,a,i){return u()({method:"POST",url:e,data:a}).then((function(e){var a=e.data;return console.log("data is",a),i(a),a})).catch((function(e){throw console.error(e),e}))},m=i(3),h=i(74),b=i(241),v=i(210),x=i.n(v),p=i(202),O=i.n(p),f=i(213),N=i(113),g=i(131),_=i(261),A=i(257),y=i(130),w=i(258),C=i(203),k=i(2),S=function(e){var a=e.rows,i=void 0===a?[]:a,l=e.columns,n=e.uniqueId;return Object(k.jsx)("div",{style:{height:500,width:"100%",background:"white",overflowX:"auto"},children:Object(k.jsx)(C.a,{rows:i,columns:l,pagination:!0,checkboxSelection:!1,components:{Toolbar:C.b},getRowId:function(e){return e[n]||e.id}})})},I=["children","value","index"],W=function(e){var a=e.children,i=e.value,n=e.index,s=Object(f.a)(e,I);return Object(k.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:i!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},s),{},{children:i===n&&Object(k.jsx)(w.a,{p:3,children:Object(k.jsx)(y.a,{children:a})})}))},D=Object(N.a)((function(){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}})),q=function(e){var a=e.mapping,i=D(),c=Object(s.useState)(0),t=Object(n.a)(c,2),r=t[0],o=t[1];return Object(k.jsxs)("div",{className:i.root,children:[Object(k.jsx)(g.a,{position:"static",color:"default",children:Object(k.jsx)(_.a,{value:r,onChange:function(e,a){o(a)},indicatorColor:"primary",textColor:"#0000008a",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs",children:Object.keys(a).map((function(e,i){return Object(s.createElement)(A.a,Object(l.a)(Object(l.a)({label:a[e].title},{id:"scrollable-auto-tab-".concat(n=i),"aria-controls":"scrollable-auto-tabpanel-".concat(n)}),{},{key:i}));var n}))})}),Object.keys(a).map((function(e,i){return Object(k.jsx)(W,{value:r,index:i,children:Object(k.jsx)(S,{rows:a[e].rows,columns:a[e].columns,uniqueId:a[e].uniqueId})},i)}))]})},G=[{field:"host",headerName:"Host"},{field:"tcp_port",headerName:"TCP Port"},{field:"issued_to",headerName:"Issued To"},{field:"issued_o",headerName:"Issued Organization"},{field:"issuer_c",headerName:"Issuer Country"},{field:"issuer_o",headerName:"Issuer Organization"},{field:"issuer_ou",headerName:"Issuer Organizational Unit"},{field:"issuer_cn",headerName:"Issuer Common Name"},{field:"cert_sn",headerName:"Serial Number"},{field:"cert_sha1",headerName:"SHA1"},{field:"cert_alg",headerName:"Algorithm"},{field:"cert_ver",headerName:"Version"},{field:"valid_from",headerName:"Valid From"},{field:"valid_till",headerName:"Valid Till"},{field:"days_left",headerName:"Days Left"},{field:"grade",headerName:"Grade"},{field:"poodle_vuln",headerName:"Poodle Vulnerability"},{field:"heartbleed_vuln",headerName:"Heartbleed Vulnerability"},{field:"heartbeat_vuln",headerName:"Heartbeat Vulnerability"},{field:"freak_vuln",headerName:"Freak Vulnerability"},{field:"logjam_vuln",headerName:"Logjam Vulnerability"},{field:"drownVulnerable",headerName:"Drown Vulnerable"},{field:"cert_sans",headerName:"DNS Names",valueFormatter:function(e){return e.value.replace(/DNS:/g,"").replace(/;/g,",")}}],T="cert_sn",L=[{flex:1,field:"name",headerName:"Name"},{flex:1,field:"value",headerName:"Value"},{flex:1,field:"domain",headerName:"Domain"},{flex:1,field:"path",headerName:"Path"},{flex:1,field:"expires",headerName:"Expires"},{flex:1,field:"size",headerName:"Size"},{flex:1,field:"httpOnly",headerName:"HTTP Only"},{flex:1,field:"secure",headerName:"Secure"},{flex:1,field:"session",headerName:"Session"},{flex:1,field:"sameParty",headerName:"Same Party"},{flex:1,field:"sourceScheme",headerName:"Source Scheme"},{flex:1,field:"source Port",headerName:"Source Port"},{flex:1,field:"placed_by",headerName:"Placed By"},{flex:1,field:"functionality",headerName:"Functionality"},{flex:1,field:"purpose",headerName:"Purpose"}],E="name",P=[{flex:1,field:"selector",headerName:"Selector"},{flex:1,field:"name",headerName:"Name"},{flex:1,field:"description",headerName:"Description"},{flex:1,field:"count",headerName:"Count"}],R="name",z=[{flex:1,field:"type",headerName:"Type"},{flex:1,field:"code",headerName:"Code"},{flex:1,field:"message",headerName:"Message"},{flex:1,field:"element",headerName:"Element"},{flex:1,field:"msgInfo",headerName:"Success Criterion",valueFormatter:function(e){var a,i;return null===(a=e.value[0])||void 0===a||null===(i=a["Success Criterion"])||void 0===i?void 0:i.join(" \n")}},{flex:1,field:"msgInfo",headerName:"Suggested Techniques",valueFormatter:function(e){var a,i;return null===(a=e.value[1])||void 0===a||null===(i=a["Suggested Techniques"])||void 0===i?void 0:i.join(" \n")}}],K=[{flex:1,field:"type",headerName:"Type"},{flex:1,field:"code",headerName:"Code"},{flex:1,field:"message",headerName:"Message"},{flex:1,field:"element",headerName:"Element"},{flex:1,field:"msgInfo",headerName:"Section",valueFormatter:function(e){var a;return null===(a=e.value[0])||void 0===a?void 0:a.Section}}],V="code",B=Object(N.a)((function(e){return{root:{margin:"1rem 0 5rem 0",fontFamily:"Roboto"},heading:{color:e.palette.primary.main,paddingLeft:"1rem"},heading2:{color:e.palette.text.primary,margin:0,cursor:"pointer"},flex:{display:"flex",margin:"auto",maxWidth:"1000px",textAlign:"center"},p:{color:"white",margin:0,cursor:"pointer",display:"block",fontSize:"1.5em"},button_div:{marginTop:"40px",marginBottom:"40px",textAlign:"center"},head_div:{marginTop:"40px",marginBottom:"40px",textAlign:"center"},url_container:{minWidth:"350px",maxWidth:"350px",padding:"20px",background:"#2ab7ca",borderRadius:"5px",margin:"auto"},url_div:{textAlign:"center",margin:"auto"},url_p:{color:"white",margin:0,cursor:"pointer",display:"block",fontSize:"2.5em"},ssl_container:{minWidth:"350px",maxWidth:"350px",padding:"20px",background:"#2ab7ca",borderRadius:"5px",textAlign:"center",margin:"auto",marginTop:"20px",marginBottom:"20px"},ssl_div:{textAlign:"right"},ssl_para_issue:{color:"green",fontSize:"1em",margin:"0",marginTop:"10px"},ssl_para_expire:{color:"#851e3e",fontSize:"1em",margin:"0"},wcag_container:{minWidth:"350px",maxWidth:"350px",padding:"20px",background:"#fe4a49",borderRadius:"5px",textAlign:"center",margin:"auto",marginTop:"20px",marginBottom:"20px"},wcag_container_warn:{minWidth:"350px",maxWidth:"350px",padding:"20px",background:"#fed766",borderRadius:"5px",textAlign:"center",margin:"auto",marginTop:"20px",marginBottom:"20px"},score_div:{textAlign:"center",margin:"auto",marginLeft:"400px",padding:"30px",display:"flex"},score_val:{margin:"auto",padding:"10px",marginLeft:"10px",marginRight:"10px"},score_ssl:{color:"#7bc043",margin:0,cursor:"pointer",display:"block",fontSize:"2.5em"},score_cookie:{color:"#2ab7ca",margin:0,cursor:"pointer",display:"block",fontSize:"2.5em"},score_ada:{color:"#fed766",margin:0,cursor:"pointer",display:"block",fontSize:"2.5em"},score_text:{color:"#fe4a49",margin:0,cursor:"pointer",display:"block",fontSize:"2.5em"},para:{color:e.palette.primary.main,margin:0,cursor:"pointer",display:"block",fontSize:"1.5em"},score_loader1:{marginLeft:"85px"},score_border:{padding:"20px",border:"2px solid red",borderRadius:"50%",width:"90px",borderColor:e.palette.primary.main,marginBottom:"15px",margin:"auto"}}}));a.default=function(){var e,a,i,c,t,r,d,v,p,f,N,g,_,A,y,w,C,S,I,W,D,F,U=new URLSearchParams(Object(m.e)().search).get("url"),H=Object(s.useState)(null),J=Object(n.a)(H,2),M=J[0],Y=J[1],X=Object(s.useState)({}),Q=Object(n.a)(X,2),Z=Q[0],$=Q[1],ee=Object(s.useState)(null),ae=Object(n.a)(ee,2),ie=ae[0],le=ae[1],ne=Object(s.useState)(null),se=Object(n.a)(ne,2),ce=se[0],te=se[1],re=Object(s.useState)(null),oe=Object(n.a)(re,2),de=oe[0],ue=oe[1],je=Object(s.useState)(null),me=Object(n.a)(je,2),he=me[0],be=me[1],ve=Object(s.useRef)(null),xe=Object(s.useState)(null),pe=Object(n.a)(xe,2),Oe=pe[0],fe=pe[1],Ne=Object(s.useState)(null),ge=Object(n.a)(Ne,2),_e=ge[0],Ae=ge[1],ye=Object(s.useState)(null),we=Object(n.a)(ye,2),Ce=we[0],ke=we[1],Se=Object(s.useState)(null),Ie=Object(n.a)(Se,2),We=Ie[0],De=Ie[1],qe=Object(s.useState)(null),Ge=Object(n.a)(qe,2),Te=Ge[0],Le=Ge[1],Ee=Object(s.useState)(!1),Pe=Object(n.a)(Ee,2),Re=Pe[0],ze=Pe[1],Ke=Object(s.useState)(null),Ve=Object(n.a)(Ke,2),Be=Ve[0],Fe=Ve[1],Ue=function(){ve.current.scrollIntoView({behavior:"smooth"})},He=Object(s.useState)({1:{id:1,title:"SSL Certificates",columns:G,uniqueId:T,rows:[]},2:{id:2,title:"Initial Cookies",columns:L,uniqueId:E,rows:[]},3:{id:3,title:"Accepted Cookies",columns:L,uniqueId:E,rows:[]},4:{id:4,title:"Denied Cookies",columns:L,uniqueId:E,rows:[]},5:{id:5,title:"WCAG2A",columns:z,uniqueId:V,rows:[]},6:{id:6,title:"WCAG2AA",columns:z,uniqueId:V,rows:[]},7:{id:7,title:"WCAG2AAA",columns:z,uniqueId:V,rows:[]},8:{id:8,title:"Section 508",columns:K,uniqueId:V,rows:[]},9:{id:9,title:"Accessibility Error",columns:P,uniqueId:R,rows:[]},10:{id:10,title:"Accessibility Warnings",columns:P,uniqueId:R,rows:[]}}),Je=Object(n.a)(He,2),Me=Je[0],Ye=Je[1];Object(s.useEffect)((function(){Ye((function(e){return console.log("ssl inside useEffect is ",Z),Object(l.a)(Object(l.a)({},e),{},{1:{id:1,title:"SSL Certificates",columns:G,uniqueId:T,rows:[Z]||!1}})}))}),[JSON.stringify(Z)]),Object(s.useEffect)((function(){Ye((function(e){var a,i,n;return Object(l.a)(Object(l.a)({},e),{},{2:{id:2,title:"Initial Cookies",columns:L,uniqueId:E,rows:(null===ie||void 0===ie||null===(a=ie.data)||void 0===a?void 0:a.initialCookies)||[]},3:{id:3,title:"Accepted Cookies",columns:L,uniqueId:E,rows:(null===ie||void 0===ie||null===(i=ie.data)||void 0===i?void 0:i.consentAcceptedCookies)||[]},4:{id:4,title:"Denied Cookies",columns:L,uniqueId:E,rows:(null===ie||void 0===ie||null===(n=ie.data)||void 0===n?void 0:n.consentDeniedCookies)||[]}})}))}),[JSON.stringify(ie)]),Object(s.useEffect)((function(){Ye((function(e){var a,i,n,s;return Object(l.a)(Object(l.a)({},e),{},{5:{id:5,title:"WCAG2A",columns:z,uniqueId:V,rows:(null===de||void 0===de||null===(a=de.result)||void 0===a?void 0:a.WCAG2A)||[]},6:{id:6,title:"WCAG2AA",columns:z,uniqueId:V,rows:(null===de||void 0===de||null===(i=de.result)||void 0===i?void 0:i.WCAG2AA)||[]},7:{id:7,title:"WCAG2AAA",columns:z,uniqueId:V,rows:(null===de||void 0===de||null===(n=de.result)||void 0===n?void 0:n.WCAG2AAA)||[]},8:{id:8,title:"Section 508",columns:K,uniqueId:V,rows:(null===de||void 0===de||null===(s=de.result)||void 0===s?void 0:s.Section508)||[]}})}))}),[JSON.stringify(de)]),Object(s.useEffect)((function(){Ye((function(e){var a,i;return Object(l.a)(Object(l.a)({},e),{},{9:{id:9,title:"Accessibility Error",columns:P,uniqueId:R,rows:(null===ce||void 0===ce||null===(a=ce.data)||void 0===a?void 0:a.error)||[]},10:{id:10,title:"Accessibility Warnings",columns:P,uniqueId:R,rows:(null===ce||void 0===ce||null===(i=ce.data)||void 0===i?void 0:i.warning)||[]}})}))}),[JSON.stringify(ce)]),Object(s.useEffect)((function(){var e=[];e.push(function(e,a,i){return u()({method:"POST",url:e,data:a}).then((function(e){var a=e.data;return console.log("data is",a),console.log("ssl is",a[Object.keys(a)[0]]),i(a[Object.keys(a)[0]]),a[Object.keys(a)[0]]})).catch((function(e){throw console.error(e),e}))}(o.sslapi(),{URL:U},$)),e.push(j(o.crawl(),{URL:U},Y)),e.push(j(o.cookieChecker(),{url:U},le)),e.push(j(o.ada(),{url:U},te)),e.push(j(o.sniffer(),{url:U},ue)),e.push(j(o.header(),{URL:U},be)),Promise.allSettled(e).then((function(e){console.log(e),fe(e[0].value?100:0),Ae(e[2].value.data.consentAsked&&e[2].value.data.denyConsent?100:e[2].value.data.consentAsked||e[2].value.data.denyConsent?50:0),ke(e[4].value.result.Section508.length+e[4].value.result.WCAG2A.length+e[4].value.result.WCAG2AA.length+e[4].value.result.WCAG2AAA.length),De(e[3].value.data.error.length+e[3].value.data.warning.length),Le(100-10*Object.values(e[5].value)[0].missing.length),Fe(Object.values(e[5].value)[0].missing),console.log(Object.values(e[5].value)[0].missing),console.log(Be),console.log(he)})).catch((function(e){fe(0),Ae(0),ke(0),De(0),Le(0),Fe([]),console.error(e)})),Ye([])}),[]),console.log("cookieScore",_e);var Xe=B();return Object(k.jsxs)("div",{className:Xe.root,children:[Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsxs)("h1",{className:Xe.heading,children:["URL getting scanned: ",U]})}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsxs)("div",{className:Xe.score_div,children:[null!==Oe?Object(k.jsxs)("div",{className:Xe.score_val,children:[Object(k.jsx)("div",{className:Xe.score_border,children:Object(k.jsx)("p",{className:Xe.score_ssl,children:Oe})}),Object(k.jsx)("p",{className:Xe.para,children:"SSL Score"})]}):Object(k.jsx)("div",{className:Xe.score_loader1,children:Object(k.jsx)(h.a,{})}),null!==Ce?Object(k.jsxs)("div",{className:Xe.score_val,children:[Object(k.jsx)("div",{className:Xe.score_border,children:Object(k.jsx)("p",{className:Xe.score_text,children:(1e3-Ce)/10})}),Object(k.jsx)("p",{className:Xe.para,children:"WCAG Score"})]}):Object(k.jsx)("div",{className:Xe.score_loader1,children:Object(k.jsx)(h.a,{})}),null!==We?Object(k.jsxs)("div",{className:Xe.score_val,children:[Object(k.jsx)("div",{className:Xe.score_border,children:Object(k.jsx)("p",{className:Xe.score_ada,children:100-We})}),Object(k.jsx)("p",{className:Xe.para,children:"Accessibility Score"})]}):Object(k.jsx)("div",{className:Xe.score_loader1,children:Object(k.jsx)(h.a,{})}),null!==Te?Object(k.jsxs)("div",{className:Xe.score_val,children:[Object(k.jsx)("div",{className:Xe.score_border,children:Object(k.jsx)("p",{className:Xe.score_text,children:Te})}),Object(k.jsx)("p",{className:Xe.para,children:"Security Header Score"})]}):Object(k.jsx)("div",{className:Xe.score_loader1,children:Object(k.jsx)(h.a,{})})]})}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.url_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Media URLs"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:M?null===(e=Object.keys(null===M||void 0===M?void 0:M.mediaList))||void 0===e?void 0:e.length:Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.url_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Site URLs"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:M?null===(a=Object.keys(null===M||void 0===M?void 0:M.urlList))||void 0===a?void 0:a.length:Object(k.jsx)(h.a,{})})})]})]}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsx)("h1",{className:Xe.heading,children:"Secure Sockets Layer Certifications"})}),Object(k.jsx)("div",{className:Xe.flex,children:Z?Object(k.jsx)("div",{className:Xe.ssl_container,children:Object(k.jsxs)("div",{onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:[Object(k.jsx)("p",{className:Xe.p,children:Z.issuer_cn}),Object(k.jsxs)("div",{className:Xe.ssl_div,children:[Object(k.jsxs)("p",{className:Xe.ssl_para_issue,children:["Issued on: ",null===Z||void 0===Z?void 0:Z.valid_from]}),Object(k.jsxs)("p",{className:Xe.ssl_para_expire,children:["Expires on: ",null===Z||void 0===Z?void 0:Z.valid_till]})]})]})}):Object(k.jsx)(h.a,{})}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsx)("h1",{className:Xe.heading,children:"Cookies Availability and Permissions"})}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.ssl_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Cookies Consent Asked"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:ie?"".concat((null===ie||void 0===ie||null===(i=ie.data)||void 0===i?void 0:i.consentAsked)?"Yes":"No"):Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.ssl_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Deny Cookies Option Present"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:ie?"".concat((null===ie||void 0===ie||null===(c=ie.data)||void 0===c?void 0:c.denyConsent)?"Yes":"No"):Object(k.jsx)(h.a,{})})})]})]}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.ssl_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Initial Cookies:"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:ie?null===ie||void 0===ie||null===(t=ie.data)||void 0===t||null===(r=t.initialCookies)||void 0===r?void 0:r.length:Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.ssl_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Cookies After Accept:"," "]}),ie?Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:(null===ie||void 0===ie||null===(d=ie.data)||void 0===d||null===(v=d.consentAcceptedCookies)||void 0===v?void 0:v.length)||0})}):Object(k.jsx)(h.a,{})]})]}),Object(k.jsx)("div",{className:Xe.flex,children:Object(k.jsxs)("div",{className:Xe.ssl_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Cookies After Deny:"," "]}),ie?Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:(null===ie||void 0===ie||null===(p=ie.data)||void 0===p||null===(f=p.consentDeniedCookies)||void 0===f?void 0:f.length)||0})}):Object(k.jsx)(h.a,{})]})}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsx)("h1",{className:Xe.heading,children:"Web Content Accessibility (WCAG) Checks"})}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.wcag_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["WCAG2A Errors:"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:de?null===de||void 0===de||null===(N=de.result)||void 0===N||null===(g=N.WCAG2A)||void 0===g?void 0:g.length:Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.wcag_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["WCAG2AA Errors:"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:de?null===de||void 0===de||null===(_=de.result)||void 0===_||null===(A=_.WCAG2AA)||void 0===A?void 0:A.length:Object(k.jsx)(h.a,{})})})]})]}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.wcag_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["WCAG2AAA Errors:"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:de?null===de||void 0===de||null===(y=de.result)||void 0===y||null===(w=y.WCAG2AAA)||void 0===w?void 0:w.length:Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.wcag_container,children:[Object(k.jsxs)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:["Section 508 Errors:"," "]}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:de?null===de||void 0===de||null===(C=de.result)||void 0===C||null===(S=C.Section508)||void 0===S?void 0:S.length:Object(k.jsx)(h.a,{})})})]})]}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsx)("h1",{className:Xe.heading,children:"Other Accessibility and ADA Compliance Checks"})}),Object(k.jsxs)("div",{className:Xe.flex,children:[Object(k.jsxs)("div",{className:Xe.wcag_container,children:[Object(k.jsx)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:"Errors"}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:ce?null===ce||void 0===ce||null===(I=ce.data)||void 0===I||null===(W=I.error)||void 0===W?void 0:W.length:Object(k.jsx)(h.a,{})})})]}),Object(k.jsxs)("div",{className:Xe.wcag_container_warn,children:[Object(k.jsx)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:"Warnings"}),Object(k.jsx)("div",{className:Xe.url_div,children:Object(k.jsx)("p",{className:Xe.url_p,children:ce?null===ce||void 0===ce||null===(D=ce.data)||void 0===D||null===(F=D.warning)||void 0===F?void 0:F.length:Object(k.jsx)(h.a,{})})})]})]}),Object(k.jsx)("div",{className:Xe.head_div,children:Object(k.jsx)("h1",{className:Xe.heading,children:"Missing Security Headers"})}),Object(k.jsx)("div",{children:Be?Be.map((function(e){return Object(k.jsx)("div",{className:Xe.wcag_container,columns:{xs:4,sm:8,md:12},children:Object(k.jsx)("p",{className:Xe.p,onClick:Ue,onKeyDown:Ue,"aria-hidden":"true",children:e})})})):null}),Object(k.jsxs)("div",{className:Xe.button_div,children:[Object(k.jsx)(b.a,{variant:"contained",color:"primary",size:"large",className:Xe.button,startIcon:Object(k.jsx)(x.a,{}),onClick:function(){ze(!0),u()({url:o.download(),method:"POST",data:{url:U},responseType:"blob"}).then((function(e){O()(e.data,"report.pdf"),ze(!1)}))},children:"Download Complete Report"}),Re?Object(k.jsx)(h.a,{}):null]}),Object(k.jsx)("div",{ref:ve}),Object(k.jsx)(q,{mapping:Me})]})}}}]);
//# sourceMappingURL=9.f01c0223.chunk.js.map