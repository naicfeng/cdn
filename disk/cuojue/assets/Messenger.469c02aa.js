import{e,be as i,a1 as w,n as y,d as R,a as r,b3 as o,br as b,al as k,W as c,v as C,av as x,ad as T,I as W,a0 as B,B as g,h as F,aJ as H,ci as L}from"./index.b0bdc983.js";import{u as N}from"./useT.f19c2ad3.js";const z=t=>e(i,{get children(){return t.content}}),D=t=>e(w,{get src(){return t.content}}),J={string:z,image:D},V=()=>{const t=N();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>o.post("/admin/message/get")),[p,m]=r(()=>o.post("/admin/message/send",{message:a()})),[h,v]=b([]),s=async()=>{const n=await u();F(n,I=>{v(L($=>$.push(I)))})},S=async()=>{const n=await m();H(n)},f=setInterval(s,1e3);return k(()=>clearInterval(f)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.recieved_msgs")}}),e(C,{each:h,children:n=>e(x,T({get component(){return J[n.type]}},n))})]}}),e(W,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.recieve")}}),e(g,{get loading(){return p()},onClick:S,get children(){return t("manage.send")}})]}})]}})};export{V as Messenger,J as Shower,V as default};
