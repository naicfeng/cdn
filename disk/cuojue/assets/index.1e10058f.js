import{e,v as C,W as k,t as V,aa as I,ab as z,bd as m,U as A,R as B,u as p,L as y,z as w,k as _,ac as h,be as g,d as M,bf as E,a0 as l,Y as i,r as L,G as n,H as r,bg as x,bh as U,am as W,J as b,a3 as T,bi as H,bj as Y,n as j,aU as N,aM as F,aN as J,aO as q,aP as G,aQ as Q,a6 as f,aS as R,aT as S,bk as K,bl as X,bm as Z}from"./index.b0bdc983.js";import{u as d}from"./useT.f19c2ad3.js";import{b as e1,a as t1}from"./useTitle.60504c9e.js";import{d as n1,e as r1,f as o1,g as a1,h as i1,i as s1,j as c1,k as l1,l as u1,m as m1,n as g1,o as d1,p as _1,q as h1}from"./index.1164018f.js";import{A as p1}from"./LinkWithBase.79e36546.js";var c=(t=>(t[t.SITE=0]="SITE",t[t.STYLE=1]="STYLE",t[t.PREVIEW=2]="PREVIEW",t[t.GLOBAL=3]="GLOBAL",t[t.SINGLE=4]="SINGLE",t[t.ARIA2=5]="ARIA2",t))(c||{}),E1=(t=>(t[t.PUBLIC=0]="PUBLIC",t[t.PRIVATE=1]="PRIVATE",t[t.READONLY=2]="READONLY",t[t.DEPRECATED=3]="DEPRECATED",t))(E1||{});const f1=t=>{const o=V(()=>{if(!I.is_admin(z())){if(t.role===void 0)return!1;if(t.role===m.GENERAL&&!I.is_general(z()))return!1}return!0});return e(B,{get fallback(){return e($1,t)},get children(){return[e(A,{get when(){return!o()},children:null}),e(A,{get when(){return t.children},get children(){return e(v1,t)}})]}})},$1=t=>{const{pathname:o}=p(),a=d(),s=()=>o()===t.to;return e(p1,{display:"flex",as:y,get href(){return t.to},onClick:()=>{D()},w:"$full",alignItems:"center",get _hover(){return{bgColor:s()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return s()?"$info4":""},get color(){return s()?"$info11":""},get external(){return t.external},get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return a(t.title)}})]}})},v1=t=>{const{pathname:o}=p(),[a,s]=M(o().includes(t.to)),O=d();return e(i,{w:"$full",get children(){return[e(E,{justifyContent:"space-between",onClick:()=>{s(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[e(l,{get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return O(t.title)}})]}}),e(h,{as:n1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),e(_,{get when(){return a()},get children(){return e(i,{pl:"$2",get children(){return e($,{get items(){return t.children}})}})}})]}})},$=t=>e(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return e(C,{get each(){return t.items},children:o=>e(f1,o)})}});function I1(t){return L({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},t)}function z1(t){return L({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},t)}const u=n(()=>r(()=>import("./Common.007b2f06.js"),["assets/Common.007b2f06.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/SettingItem.6d58a671.js","assets/item_type.be442da4.js","assets/index.1164018f.js","assets/ResponsiveGrid.1ed7598b.js","assets/LinkWithBase.79e36546.js"])),v=[{title:"manage.sidemenu.profile",icon:r1,to:"/@manage",role:m.GUEST,component:n(()=>r(()=>import("./Profile.ed7255c1.js"),["assets/Profile.ed7255c1.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/LinkWithBase.79e36546.js"]))},{title:"manage.sidemenu.settings",icon:o1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:a1,to:"/@manage/settings/site",component:()=>e(u,{get group(){return c.SITE}})},{title:"manage.sidemenu.style",icon:i1,to:"/@manage/settings/style",component:()=>e(u,{get group(){return c.STYLE}})},{title:"manage.sidemenu.preview",icon:s1,to:"/@manage/settings/preview",component:()=>e(u,{get group(){return c.PREVIEW}})},{title:"manage.sidemenu.global",icon:c1,to:"/@manage/settings/global",component:()=>e(u,{get group(){return c.GLOBAL}})},{title:"manage.sidemenu.other",icon:l1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.175e49d5.js"),["assets/Other.175e49d5.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/useUtil.5dc1d5cd.js","assets/api.30b24623.js","assets/SettingItem.6d58a671.js","assets/item_type.be442da4.js","assets/index.1164018f.js","assets/LinkWithBase.79e36546.js"]))}]},{title:"manage.sidemenu.tasks",icon:z1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:u1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.61d9338d.js"),["assets/Aria2.61d9338d.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useTitle.60504c9e.js","assets/useT.f19c2ad3.js","assets/Tasks.711e1fa6.js"]))},{title:"manage.sidemenu.upload",icon:m1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.dcf44155.js"),["assets/Upload.dcf44155.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useTitle.60504c9e.js","assets/useT.f19c2ad3.js","assets/Tasks.711e1fa6.js"]))},{title:"manage.sidemenu.copy",icon:x,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.597978d3.js"),["assets/Copy.597978d3.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useTitle.60504c9e.js","assets/useT.f19c2ad3.js","assets/Tasks.711e1fa6.js"]))}]},{title:"manage.sidemenu.users",icon:g1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.414d178f.js"),["assets/Users.414d178f.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/DeletePopover.f0601cb5.js"]))},{title:"manage.sidemenu.storages",icon:d1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.dbaa177f.js"),["assets/Storages.dbaa177f.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/DeletePopover.f0601cb5.js"]))},{title:"manage.sidemenu.metas",icon:I1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.7df9e35a.js"),["assets/Metas.7df9e35a.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/useTitle.60504c9e.js","assets/DeletePopover.f0601cb5.js"]))},{title:"manage.sidemenu.about",icon:_1,to:"/@manage/about",role:m.GUEST,component:n(()=>r(()=>import("./About.bec9f4c8.js"),["assets/About.bec9f4c8.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/Markdown.34ba4a3f.js"]))},{title:"manage.sidemenu.home",icon:U,to:"/",role:m.GUEST,external:!0}],{isOpen:A1,onOpen:T1,onClose:D}=W(),C1=()=>{const t=d(),{to:o}=p();return e(i,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return b("$background","$neutral2")()},get children(){return[e(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(T,{"aria-label":"menu",get icon(){return e(h1,{})},display:{"@sm":"none"},onClick:T1,size:"sm"}),e(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return t("manage.title")}})]}}),e(l,{spacing:"$1",get children(){return e(T,{"aria-label":"logout",get icon(){return e(H,{})},onClick:()=>{Y(),j.success(t("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),e(N,{get opened(){return A1()},placement:"left",onClose:D,get children(){return[e(F,{}),e(J,{get children(){return[e(q,{}),e(G,{color:"$info9",get children(){return t("manage.title")}}),e(Q,{get children(){return[e($,{items:v}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(R,{}),e(S,{})]}})}})]}})]}})]}})]}})},w1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.9ce7f7ae.js"),["assets/AddOrEdit.9ce7f7ae.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.1ed7598b.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.9ce7f7ae.js"),["assets/AddOrEdit.9ce7f7ae.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.1ed7598b.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.5b0d4002.js"),["assets/AddOrEdit.5b0d4002.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/FolderTree.34ce4863.js","assets/index.1164018f.js","assets/api.30b24623.js","assets/useT.f19c2ad3.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.5b0d4002.js"),["assets/AddOrEdit.5b0d4002.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/FolderTree.34ce4863.js","assets/index.1164018f.js","assets/api.30b24623.js","assets/useT.f19c2ad3.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.eb800454.js"),["assets/AddOrEdit.eb800454.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/FolderTree.34ce4863.js","assets/index.1164018f.js","assets/api.30b24623.js","assets/useT.f19c2ad3.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.eb800454.js"),["assets/AddOrEdit.eb800454.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/FolderTree.34ce4863.js","assets/index.1164018f.js","assets/api.30b24623.js","assets/useT.f19c2ad3.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.ad14e690.js"),["assets/2fa.ad14e690.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.469c02aa.js"),["assets/Messenger.469c02aa.js","assets/index.b0bdc983.js","assets/index.659f4289.css","assets/useT.f19c2ad3.js"]))}],L1=t=>(e1(t.title),e(f,{h:"$full",get children(){return e(g,{get children(){return t.title}})}})),P=(t,o=[])=>(t.forEach(a=>{a.children?P(a.children,o):o.push({to:K(a.to,"/@manage"),component:a.component||(()=>e(L1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),b1=P(v).concat(w1),R1=()=>{const t=d();return t1(()=>t("manage.title")),e(i,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[e(C1,{}),e(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[e(i,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return b("$background","$neutral2")()},overflowY:"auto",get children(){return[e($,{items:v}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(R,{}),e(S,{})]}})}})]}}),e(i,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return e(X,{get children(){return e(C,{each:b1,children:o=>e(Z,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},V1=Object.freeze(Object.defineProperty({__proto__:null,default:R1},Symbol.toStringTag,{value:"Module"}));export{E1 as F,c as G,V1 as i};
