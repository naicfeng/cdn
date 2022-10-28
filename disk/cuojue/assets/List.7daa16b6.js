import{e as t,a0 as l,z as k,aA as h,aD as b,cj as u,k as f,aB as w,bq as j,ac as $,ba as p,ak as A,bb as a,bu as y,bD as C,d,K as v,ck as S,cl as I,cm as z,ad as m,v as O,o as P,W as M}from"./index.b0bdc983.js";import{u as B}from"./useT.f19c2ad3.js";import{I as D}from"./Folder.980c267a.js";import{b as L,M as E}from"./Layout.813e77d2.js";import{c as T}from"./useUtil.5dc1d5cd.js";import{a as W}from"./LinkWithBase.79e36546.js";import{O as F}from"./obj.fca5b341.js";import{g as H}from"./icon.b67cba2a.js";import"./useTitle.60504c9e.js";import"./Markdown.34ba4a3f.js";import"./api.30b24623.js";import"./index.1164018f.js";import"./index.d9163c04.js";import"./FolderTree.34ce4863.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],_=e=>{const{isHide:o}=T();if(o(e.obj))return null;const{setPathAs:c}=L(),{show:s}=D({id:1});return t(E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:k()}},as:W,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{h(()=>{b(!1),u(e.index,!0,!0)}),s(n,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{u(e.index,n.target.checked)}})}}),t($,{class:"icon",boxSize:"$6",get color(){return p()},get as(){return H(e.obj)},mr:"$1","on:click":n=>{e.obj.type===F.IMAGE&&(n.stopPropagation(),n.preventDefault(),A.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return y(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},re=()=>{const e=B(),[o,c]=d(),[s,n]=d(!1);v(()=>{o()&&S(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?n(!s()):h(()=>{c(i.name),n(!1)})}});return t(M,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return r[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return I()},get indeterminate(){return z()},onChange:i=>{b(i.target.checked)}})}}),t(a,m(()=>g(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),t(a,m({get w(){return r[1].w}},()=>g(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),t(a,m({get w(){return r[2].w}},()=>g(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),t(O,{get each(){return P.objs},children:(i,x)=>t(_,{obj:i,get index(){return x()}})})]}})};export{re as default};
