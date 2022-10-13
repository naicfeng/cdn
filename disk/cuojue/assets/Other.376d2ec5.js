import{d as i,a,b4 as o,e as t,bf as $,c2 as M,ae as S,B as c,bd as g,n as v,I as O,a0 as R,Z as U}from"./index.cd5b3688.js";import{u as x}from"./useT.c9c66d1e.js";import{b as D}from"./useTitle.b36fbba1.js";import{c as E}from"./useUtil.8a66dda5.js";import{G as b}from"./index.03050695.js";import{I as C}from"./SettingItem.ec34ab77.js";import"./api.0a44e8da.js";import"./index.24a4eb93.js";import"./LinkWithBase.34b4a234.js";import"./item_type.be442da4.js";const W=()=>{const r=x();D("manage.sidemenu.other");const[u,m]=i(""),[l,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:l()}));(async()=>{const e=await T();g(e,n=>{var _,f,y;m(((_=n.find(s=>s.key==="aria2_uri"))==null?void 0:_.value)||""),d(((f=n.find(s=>s.key==="aria2_secret"))==null?void 0:f.value)||""),h(((y=n.find(s=>s.key==="token"))==null?void 0:y.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=E();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>m(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return l()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return r("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return r("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(r("settings_other.reset_token_success")),h(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{W as default};
