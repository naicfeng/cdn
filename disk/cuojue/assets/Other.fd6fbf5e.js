import{d as j,r as i,a,b6 as o,j as t,bf as u,c3 as x,m as I,B as c,bd as g,n as l,I as L,a8 as D,a6 as E}from"./index.49d82d7a.js";import{b as F}from"./useTitle.e3b4534a.js";import{c as N}from"./useUtil.06017065.js";import{G as T}from"./index.adbce753.js";import{I as q}from"./SettingItem.721e3df3.js";import"./api.b6547f41.js";import"./index.c0f11380.js";import"./LinkWithBase.12449e42.js";import"./item_type.be442da4.js";const te=()=>{const r=j();F("manage.sidemenu.other");const[d,m]=i(""),[p,h]=i(""),[_,k]=i(""),[y,f]=i(""),[b,w]=i([]),[A,G]=a(()=>o.get(`/admin/setting/list?groups=${T.ARIA2},${T.SINGLE}`)),[U,Q]=a(()=>o.post("/admin/setting/set_aria2",{uri:d(),secret:p()})),[B,H]=a(()=>o.post("/admin/setting/set_qbit",{url:_()}));(async()=>{const e=await G();g(e,n=>{var $,v,S,C;m((($=n.find(s=>s.key==="aria2_uri"))==null?void 0:$.value)||""),h(((v=n.find(s=>s.key==="aria2_secret"))==null?void 0:v.value)||""),f(((S=n.find(s=>s.key==="token"))==null?void 0:S.value)||""),k(((C=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:C.value)||""),w(n)})})();const[M,O]=a(()=>o.post("/admin/setting/reset_token")),{copy:R}=N();return t(E,{get loading(){return A()},get children(){return[t(u,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(x,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(q,I(()=>b().find(e=>e.key==="aria2_uri"),{get value(){return d()},onChange:e=>m(e)})),t(q,I(()=>b().find(e=>e.key==="aria2_secret"),{get value(){return p()},onChange:e=>h(e)}))]}}),t(c,{my:"$2",get loading(){return U()},onClick:async()=>{const e=await Q();g(e,n=>{l.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(u,{my:"$2",get children(){return r("settings.qbittorrent_url")}}),t(L,{get value(){return _()},onInput:e=>{k(e.currentTarget.value)}}),t(c,{my:"$2",get loading(){return B()},onClick:async()=>{const e=await H();g(e,n=>{l.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(u,{my:"$2",get children(){return r("settings.token")}}),t(L,{get value(){return y()},readOnly:!0}),t(D,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{R(y())},get children(){return r("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return M()},onClick:async()=>{const e=await O();g(e,n=>{l.success(r("settings_other.reset_token_success")),f(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{te as default};
