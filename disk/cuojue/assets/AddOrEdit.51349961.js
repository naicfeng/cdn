import{u as p,br as x,a as d,b4 as g,f as t,a2 as C,be as v,a$ as o,aZ as m,C as k,B as _,bc as h,n as F,a5 as I,bf as S,a8 as c,I as T,bN as L,T as E,bp as M,x as B,F as D}from"./index.675162b4.js";import{F as H}from"./FolderTree.c59628bf.js";import{u as b}from"./useT.73eac740.js";import"./index.f65d3513.js";import"./api.45dab2c5.js";const R=e=>{const r=b();return t(o,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(m,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(L,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(E,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(o,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(B,{get when(){return e.help},get children(){return t(D,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},Z=()=>{const e=b(),{params:r,back:n}=p(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,w]=d(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await w();h(a,s)})();const[y,$]=d(()=>g.post(`/admin/meta/${u?"update":"create"}`,l));return t(I,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(v,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(o,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(m,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(H,{id:"path",get value(){return l.path},onChange:a=>s("path",a)})]}}),t(k,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:a=>t(R,{get name(){return a.name},get type(){return a.type},get value(){return l[a.name]},onChange:i=>s(a.name,i),get sub(){return l[`${a.name[0]}_sub`]},onSub:i=>s(`${a.name[0]}_sub`,i),get help(){return a.help}})}),t(_,{get loading(){return y()},onClick:async()=>{const a=await $();h(a,()=>{F.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{Z as default};
