import{j as t,ad as g,am as b,r as d,C as h,aI as f,a3 as j,K as x,aH as $,aK as w,cm as l,ao as k,al as C,y as i,bv as v,ak as y,bc as p,E as I,o as M,c0 as S}from"./index.0f8e5364.js";import{b as E}from"./Folder.ad89769e.js";import{a as O,M as P}from"./Layout.957881a5.js";import{c as z}from"./useUtil.0653d77c.js";import{a as A}from"./LinkWithBase.ed43b423.js";import{I as G}from"./ImageWithError.9ffb8642.js";import{g as H,O as L}from"./icon.eb2c3699.js";import"./index.dbbd6d06.js";import"./index.1db66847.js";import"./api.49cbe88e.js";import"./index.6fdf0ec9.js";import"./FolderTree.546323f8.js";const W=e=>{const{isHide:a}=z();if(a(e.obj))return null;const{setPathAs:s}=O(),o=t(b,{get color(){return g()},boxSize:"$12",get as(){return H(e.obj)}}),[c,n]=d(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:m}=E({id:1});return t(P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),l(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===L.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(i,{get when(){return u()},get children(){return t(v,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{l(e.index,r.target.checked)}})}}),t(i,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},R=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(I,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{R as default};
