import{K as c,al as u,u as f,aZ as l,E as r}from"./index.b0bdc983.js";import{u as o}from"./useT.f19c2ad3.js";let m=0;const s={},i=t=>{const e=(m++).toString(),n=[];for(const a in s)s[a]&&(n.push(a),s[a]=!1);s[e]=!0,typeof t=="function"?c(()=>{s[e]&&(document.title=t())}):document.title=t,u(()=>{delete s[e];for(const a in n)s[a]=!0})},g=()=>{const t=o(),{pathname:e}=f();i(()=>`${e()==="/"?t("manage.sidemenu.home"):l(e())} | ${r("site_title")}`)},h=t=>{const e=o();i(()=>`${e(t)} | ${e("manage.title")}`)};export{i as a,h as b,g as u};
