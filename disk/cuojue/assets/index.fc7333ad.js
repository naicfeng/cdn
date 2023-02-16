import{m as T,e as B,bo as h,t as j,W as _,j as e,a5 as b,aw as F,u as z,bk as y,bp as S,bq as O,b6 as L,am as W,R as G,d as D,C as H,r as p,br as K,a as V,a3 as Z,bg as f,aj as q,bf as A,y as J,I as v,bs as Q,bc as X,a8 as Y,B as x,a_ as ee,a$ as te,ao as re,h as ne,n as R}from"./index.49d82d7a.js";import{a as oe}from"./useTitle.e3b4534a.js";const ae=j('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),le=a=>{const n=T({startColor:"#28aff0",endColor:"#120fc4"},a);return(()=>{const t=ae.cloneNode(!0),l=t.firstChild,d=l.firstChild,u=d.nextSibling,s=u.firstChild,g=s.nextSibling;return B(r=>{const i=n.startColor,c=n.endColor;return i!==r._v$&&h(s,"stop-color",r._v$=i),c!==r._v$2&&h(g,"stop-color",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),t})()},se=j('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),ie=a=>{const n=T({startColor:"#28aff0",endColor:"#120fc4"},a);return(()=>{const t=se.cloneNode(!0),l=t.firstChild,d=l.firstChild,u=d.nextSibling,s=u.firstChild,g=s.nextSibling;return B(r=>{const i=n.startColor,c=n.endColor;return i!==r._v$&&h(s,"stop-color",r._v$=i),c!==r._v$2&&h(g,"stop-color",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),t})()},ce=()=>{const a=_("#a9c6ff","#062b74");return e(b,{get bgColor(){return a()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(b,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(ie,{})}}),e(b,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(le,{})}})]}})},ue=()=>{const a=F("github_login_enabled"),{searchParams:n,to:t}=z(),l=n.token;if(l!=null&&l!=""&&(y(l),t(decodeURIComponent(n.redirect||S||"/"),!0)),a)return e(W,{cursor:"pointer",boxSize:"$8",as:O,p:"$0_5",onclick:()=>{window.location.href=L.getUri()+"/auth/github?callback_url="+window.location.href+"&method=github_login&with_params="+Boolean(n.redirect!=null)}})},pe=()=>{const a=G("logo").split(`
`),n=_(a[0],a.pop()),t=D(),l=H(()=>`${t("login.login_to")} ${G("site_title")}`);oe(l);const d=_("white","$neutral1"),[u,s]=p(localStorage.getItem("username")||""),[g,r]=p(localStorage.getItem("password")||""),[i,c]=p(""),[m,M]=K("remember-pwd","false"),[U,E]=V(()=>L.post("/auth/login",{username:u(),password:g(),otp_code:i()})),{searchParams:k,to:I}=z(),$=async()=>{m()==="true"?(localStorage.setItem("username",u()),localStorage.setItem("password",g())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await E();ne(o,C=>{R.success(t("login.success")),y(C.token),I(decodeURIComponent(k.redirect||S||"/"),!0)},(C,P)=>{!w()&&P===402?N(!0):R.error(C)})},[w,N]=p(!1);return e(re,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(Z,{get bgColor(){return d()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(f,{alignItems:"center",justifyContent:"space-around",get children(){return[e(q,{mr:"$2",boxSize:"$12",get src(){return n()}}),e(A,{color:"$info9",fontSize:"$2xl",get children(){return l()}})]}}),e(J,{get when(){return!w()},get fallback(){return e(v,{id:"totp",name:"otp",get placeholder(){return t("login.otp-tips")},get value(){return i()},onChange:o=>c(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&$()}})},get children(){return[e(v,{name:"username",get placeholder(){return t("login.username-tips")},get value(){return u()},onInput:o=>s(o.currentTarget.value)}),e(v,{name:"password",get placeholder(){return t("login.password-tips")},type:"password",get value(){return g()},onInput:o=>r(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&$()}}),e(f,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(Q,{get checked(){return m()==="true"},onChange:()=>M(m()==="true"?"false":"true"),get children(){return t("login.remember")}}),e(X,{as:"a",target:"_blank",get href(){return t("login.forget_url")},get children(){return t("login.forget")}})]}})]}}),e(Y,{w:"$full",spacing:"$2",get children(){return[e(x,{colorScheme:"primary",w:"$full",onClick:()=>{w()?c(""):(s(""),r(""))},get children(){return t("login.clear")}}),e(x,{w:"$full",get loading(){return U()},onClick:$,get children(){return t("login.login")}})]}}),e(x,{w:"$full",colorScheme:"accent",onClick:()=>{y(),I(decodeURIComponent(k.redirect||S||"/"),!0)},get children(){return t("login.use_guest")}}),e(f,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(ee,{}),e(te,{})]}}),e(f,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return e(ue,{})}})]}}),e(ce,{})]}})};export{pe as default};
