import{u as y,bs as I,a as d,b5 as c,f as e,a2 as C,bf as F,b0 as i,a_ as o,I as g,bg as _,C as k,am as v,an as q,B as D,bd as p,n as L,a5 as U,bq as E}from"./index.6ff39b49.js";import{F as T}from"./FolderTree.3566da05.js";import{u as m}from"./useT.c01ad73b.js";import"./index.71ee0f6f.js";import"./api.bd226a3b.js";const B=r=>{const l=m();return e(i,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(o,{mb:"0",get children(){return l(`users.permissions.${r.name}`)}}),e(E,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},O=()=>{const r=m(),{params:l,back:h}=y(),{id:a}=l,[s,t]=I({id:0,username:"",password:"",base_path:"",role:0,permission:0}),[f,b]=d(()=>c.get(`/admin/user/get?id=${a}`));a&&(async()=>{const n=await b();p(n,t)})();const[w,$]=d(()=>c.post(`/admin/user/${a?"update":"create"}`,s));return e(U,{get loading(){return f()},get children(){return e(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(F,{get children(){return r(`global.${a?"edit":"add"}`)}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(g,{id:"username",get value(){return s.username},onInput:n=>t("username",n.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(g,{id:"password",type:"password",placeholder:"********",get value(){return s.password},onInput:n=>t("password",n.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(T,{id:"base_path",get value(){return s.base_path},onChange:n=>t("base_path",n),onlyFolder:!0})]}}),e(i,{w:"$full",required:!0,get children(){return[e(o,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(_,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(k,{each:v,children:(n,u)=>e(B,{name:n,get can(){return q.can(s,u())},onChange:x=>{x?t("permission",s.permission|=1<<u()):t("permission",s.permission&=~(1<<u()))}})})}})]}}),e(D,{get loading(){return w()},onClick:async()=>{const n=await $();p(n,()=>{L.success(r("global.save_success")),h()})},get children(){return r(`global.${a?"save":"add"}`)}})]}})}})};export{O as default};
