import{f as e,a5 as i,o as n,bD as m}from"./index.6ff39b49.js";import{d}from"./useUtil.d9f18320.js";import{c as s}from"./Layout.efe6f0a5.js";import"./api.bd226a3b.js";import"./useT.c01ad73b.js";import"./useTitle.fdff9b4a.js";import"./index.71ee0f6f.js";import"./index.cd30264f.js";import"./FolderTree.3566da05.js";const j=()=>{const[r]=d(),a=t=>n.obj.name.endsWith(".md")?t:"```"+m(n.obj.name)+`
`+t+"\n```";return e(i,{get loading(){return r.loading},get children(){return e(s,{get children(){var t,o;return a((o=(t=r())==null?void 0:t.content)!=null?o:"")}})}})};export{j as default};
