import{e as t,bb as b,ad as d,d as g,t as h,aC as f,W as j,z as x,aB as $,aE as w,cj as i,a7 as k,al as p,k as l,bq as C,a3 as v,bc as I,v as y,o as M,bZ as S}from"./index.cd5b3688.js";import{I as z}from"./Folder.324874fd.js";import{b as E,M as O}from"./Layout.233c3ef2.js";import{c as P}from"./useUtil.8a66dda5.js";import{a as A}from"./LinkWithBase.34b4a234.js";import{I as G}from"./ImageWithError.29626ed4.js";import{O as L}from"./obj.fca5b341.js";import{g as W}from"./icon.4d4f88e2.js";import"./useT.c9c66d1e.js";import"./useTitle.b36fbba1.js";import"./Markdown.cc1c2fd1.js";import"./api.0a44e8da.js";import"./index.24a4eb93.js";import"./index.19c33089.js";import"./FolderTree.4f54ab77.js";const H=e=>{const{isHide:a}=P();if(a(e.obj))return null;const{setPathAs:s}=E(),o=t(d,{get color(){return b()},boxSize:"$12",get as(){return W(e.obj)}}),[c,n]=g(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:m}=z({id:1});return t(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===L.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(C,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(v,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(I,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},Y=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(y,{get each(){return M.objs},children:(e,a)=>t(H,{obj:e,get index(){return a()}})})}});export{Y as default};
