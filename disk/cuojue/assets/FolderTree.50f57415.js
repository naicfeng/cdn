import{ao as f,e,I as R,k as i,B as c,a0 as C,M as m,f as b,aM as T,i as k,j as $,m as v,q as w,d as g,Y as M,aw as z,a as D,_ as V,ba as p,bb as h,ae as H,bc as P,z as j,a1 as q,a_ as A,W as J,v as N,p as W,ar as X,bd as Y}from"./index.fdb5f3d1.js";import{d as E}from"./index.e6a8b019.js";import{k as G}from"./api.32dd7530.js";import{u as F}from"./useT.91d7fff7.js";const x=X(),S=t=>{const[n,a]=g("/");return e(M,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(x.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(_,{path:"/"})}})}})},_=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=z(x),[y,B]=D(()=>G(t.path,V(),l)),I=async()=>{if(n().length>0)return;const u=await B();Y(u,a)},{isOpen:s,onToggle:O}=f(),d=()=>o()===t.path;return e(M,{get children(){return[e(C,{spacing:"$2",get children(){return[e(i,{get when(){return!y()},get fallback(){return e(p,{size:"sm",get color(){return h()}})},get children(){return e(H,{get color(){return h()},as:E,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{O(),s()&&I()}})}}),e(P,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":j()}},onClick:()=>{r(t.path)},get children(){return q(()=>t.path==="/",!0)()?"root":A(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(J,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(N,{get each(){return n()},children:u=>e(_,{get path(){return W(t.path,u.name)}})})}})}})]}})},Z=t=>{var r;const n=F(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(w,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e(b,{get children(){return[e(k,{get children(){return n("home.toolbar.choose_dst_folder")}}),e($,{get children(){return e(S,{onChange:o})}}),e(v,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ee=t=>{const{isOpen:n,onOpen:a,onClose:o}=f(),r=F();return[e(C,{w:"$full",spacing:"$2",get children(){return[e(R,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(w,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(m,{}),e(b,{get children(){return[e(T,{}),e(k,{get children(){return r("global.choose_folder")}}),e($,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(v,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{ee as F,Z as M};