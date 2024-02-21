import{d as l,a as h,b6 as $,r as C,j as e,c7 as y,W as v,a3 as c,bf as w,bc as S,y as k,bz as z,bA as P,B as m,bd as f,n as j,bx as F,E as T,ax as H,a8 as L,m as M}from"./index.0f8e5364.js";const V={errored:"danger",succeeded:"success",canceled:"neutral"},_=t=>{const n=l();return e(F,{get colorScheme(){var r;return(r=V[t.state])!=null?r:"info"},get children(){return n(`tasks.${t.state}`)}})},A=t=>{const n=l(),r=t.done==="undone"?"cancel":"delete",[o,i]=h(()=>$.post(`/admin/task/${t.type}/${r}?tid=${t.id}`)),[d,s]=C(!1);return e(k,{get when(){return!d()},get children(){return e(y,{get bgColor(){return v("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(c,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(w,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(_,{get state(){return t.state}}),e(S,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(k,{get when(){return t.error},get children(){return e(S,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),e(z,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(P,{color:"$info8",rounded:"$md"})}})]}}),e(y,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(m,{colorScheme:"danger",get loading(){return o()},onClick:async()=>{const u=await i();f(u,()=>{j.success(n("global.delete_success")),s(!0)})},get children(){return n(`global.${r}`)}})}})]}})}})},D=t=>{const n=l(),[r,o]=h(()=>$.get(`/admin/task/${t.type}/${t.done}`)),[i,d]=C([]),s=async()=>{const a=await o();f(a,g=>{var b;return d((b=g==null?void 0:g.sort((B,I)=>B.id>I.id?1:-1))!=null?b:[])})};if(s(),t.done==="undone"){const a=setInterval(s,2e3);H(()=>clearInterval(a))}const[u,x]=h(()=>$.post(`/admin/task/${t.type}/clear_done`));return e(c,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(w,{size:"lg",get children(){return n(`tasks.${t.done}`)}}),e(k,{get when(){return t.done==="done"},get children(){return e(L,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",get loading(){return r()},onClick:s,get children(){return n("global.refresh")}}),e(m,{get loading(){return u()},onClick:async()=>{const a=await x();f(a,()=>s())},get children(){return n("global.clear")}})]}})}}),e(c,{w:"$full",spacing:"$2",get children(){return e(T,{get each(){return i()},children:a=>e(A,M(a,t))})}})]}})},N=t=>{const n=l();return e(c,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(w,{size:"xl",get children(){return n(`tasks.${t.type}`)}}),e(c,{w:"$full",spacing:"$2",get children(){return e(T,{each:["undone","done"],children:r=>e(D,{get type(){return t.type},done:r})})}})]}})};export{N as T};
