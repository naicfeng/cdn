import{d as i,a,b3 as o,e as t,be as $,c2 as M,ad as S,B as c,bc as g,n as v,I as O,a0 as R,Z as U}from"./index.b0bdc983.js";import{u as x}from"./useT.f19c2ad3.js";import{b as D}from"./useTitle.60504c9e.js";import{c as E}from"./useUtil.5dc1d5cd.js";import{G as b}from"./index.1e10058f.js";import{I as C}from"./SettingItem.6d58a671.js";import"./api.30b24623.js";import"./index.1164018f.js";import"./LinkWithBase.79e36546.js";import"./item_type.be442da4.js";const W=()=>{const r=x();D("manage.sidemenu.other");const[u,m]=i(""),[l,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:l()}));(async()=>{const e=await T();g(e,n=>{var _,y,f;m(((_=n.find(s=>s.key==="aria2_uri"))==null?void 0:_.value)||""),d(((y=n.find(s=>s.key==="aria2_secret"))==null?void 0:y.value)||""),h(((f=n.find(s=>s.key==="token"))==null?void 0:f.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=E();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>m(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return l()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return r("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return r("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(r("settings_other.reset_token_success")),h(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{W as default};
