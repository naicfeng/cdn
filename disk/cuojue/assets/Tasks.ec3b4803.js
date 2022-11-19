import{a as h,b4 as $,q as y,f as e,c3 as b,V as I,a2 as c,be as f,bb as p,bv as B,bw as z,B as k,bc as m,n as P,x as C,bt as V,C as S,au as F,a7 as H,m as L}from"./index.675162b4.js";import{u as l}from"./useT.73eac740.js";const M={errored:"danger",succeeded:"success",canceled:"neutral"},_=t=>{const n=l();return e(V,{get colorScheme(){var r;return(r=M[t.state])!=null?r:"info"},get children(){return n(`tasks.${t.state}`)}})},j=t=>{const n=l(),r=t.done==="undone"?"cancel":"delete",[o,i]=h(()=>$.post(`/admin/task/${t.type}/${r}?tid=${t.id}`)),[d,s]=y(!1);return e(C,{get when(){return!d()},get children(){return e(b,{get bgColor(){return I("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(c,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(f,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(_,{get state(){return t.state}}),e(p,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(B,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(z,{color:"$info8",rounded:"$md"})}})]}}),e(b,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(k,{colorScheme:"danger",get loading(){return o()},onClick:async()=>{const u=await i();m(u,()=>{P.success(n("global.delete_success")),s(!0)})},get children(){return n(`global.${r}`)}})}})]}})}})},q=t=>{const n=l(),[r,o]=h(()=>$.get(`/admin/task/${t.type}/${t.done}`)),[i,d]=y([]),s=async()=>{const a=await o();m(a,g=>{var w;return d((w=g==null?void 0:g.sort((x,v)=>x.id>v.id?1:-1))!=null?w:[])})};if(s(),t.done==="undone"){const a=setInterval(s,2e3);F(()=>clearInterval(a))}const[u,T]=h(()=>$.post(`/admin/task/${t.type}/clear_done`));return e(c,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(f,{size:"lg",get children(){return n(`tasks.${t.done}`)}}),e(C,{get when(){return t.done==="done"},get children(){return e(H,{spacing:"$2",get children(){return[e(k,{colorScheme:"accent",get loading(){return r()},onClick:s,get children(){return n("global.refresh")}}),e(k,{get loading(){return u()},onClick:async()=>{const a=await T();m(a,()=>s())},get children(){return n("global.clear")}})]}})}}),e(c,{w:"$full",spacing:"$2",get children(){return e(S,{get each(){return i()},children:a=>e(j,L(a,t))})}})]}})},R=t=>{const n=l();return e(c,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(f,{size:"xl",get children(){return n(`tasks.${t.type}`)}}),e(c,{w:"$full",spacing:"$2",get children(){return e(S,{each:["undone","done"],children:r=>e(q,{get type(){return t.type},done:r})})}})]}})};export{R as T};
