import{e as t,E as C,a3 as y,j as x,aA as L,aB as S,bJ as d,$ as T,Z as M,b as f,a as h,L as W,N,K as P,S as p,as as E,bK as _,k as U,bL as I,ad as g,a6 as l,aw as z,U as n,V as r,bM as w,aN as j,bN as H,bO as Y,aF as F,W as R,ah as D,bP as J,bQ as K,n as X,bi as Q,ba as Z,bb as q,bc as G,bd as ee,be as te,av as $,bg as O,bh as k,bR as ne,bS as re,bT as oe}from"./index.726c3413.js";import{d as ae,e as ie,f as se,g as le,h as ce,i as ue,j as ge,k as me,l as de,b as he,m as _e,c as pe}from"./index.cd1b463f.js";import{f as Ee,g as fe,h as Ie,i as $e,j as be}from"./index.5cbdb8fb.js";import{A as ve}from"./LinkWithBase.b3f6b95d.js";import{S as Ae}from"./index.370d444a.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e))(i||{}),Le=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Le||{});const Se=e=>{const o=x(()=>{if(!L.is_admin(S())){if(e.role===void 0)return!1;if(e.role===d.GENERAL&&!L.is_general(S()))return!1}return!0});return t(M,{get fallback(){return t(Te,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(we,e)}})]}})},Te=e=>{const{pathname:o}=f(),a=h(),c=()=>o()===e.to;return t(ve,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var A;if(V(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let m=e.to;m.startsWith("http")||(m=N(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},we=e=>{const{pathname:o}=f(),[a,c]=U(o().includes(e.to)),u=h();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return u(e.title)}})]}}),t(E,{as:Ee,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(C,{get each(){return e.items},children:o=>t(Se,o)})}});function De(e){return z({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.ee9e94aa.js"),["assets/Common.ee9e94aa.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/SettingItem.4cc504e5.js","assets/item_type.be442da4.js","assets/index.5cbdb8fb.js","assets/ResponsiveGrid.acef4cec.js","assets/LinkWithBase.b3f6b95d.js","assets/index.370d444a.js"])),v=[{title:"manage.sidemenu.profile",icon:ae,to:"/@manage",role:d.GUEST,component:n(()=>r(()=>import("./Profile.dcef4382.js"),["assets/Profile.dcef4382.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/LinkWithBase.b3f6b95d.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ie,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:se,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:le,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:ce,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ue,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:w,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:w,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.other",icon:ge,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.086cd78c.js"),["assets/Other.086cd78c.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/SettingItem.4cc504e5.js","assets/item_type.be442da4.js","assets/index.5cbdb8fb.js","assets/LinkWithBase.b3f6b95d.js","assets/index.370d444a.js"]))}]},{title:"manage.sidemenu.tasks",icon:De,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:j,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.a4c6212e.js"),["assets/offline_download.a4c6212e.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/Tasks.da3b7f50.js","assets/Paginator.e98aa586.js","assets/index.5cbdb8fb.js"]))},{title:"manage.sidemenu.upload",icon:me,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.a309c22b.js"),["assets/Upload.a309c22b.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/Tasks.da3b7f50.js","assets/Paginator.e98aa586.js","assets/index.5cbdb8fb.js"]))},{title:"manage.sidemenu.copy",icon:H,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.26a9991e.js"),["assets/Copy.26a9991e.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/Tasks.da3b7f50.js","assets/Paginator.e98aa586.js","assets/index.5cbdb8fb.js"]))}]},{title:"manage.sidemenu.users",icon:de,to:"/@manage/users",component:n(()=>r(()=>import("./Users.b1504cb0.js"),["assets/Users.b1504cb0.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/DeletePopover.d3387505.js","assets/Wether.233e4816.js"]))},{title:"manage.sidemenu.storages",icon:fe,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.8b10371b.js"),["assets/Storages.8b10371b.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/DeletePopover.d3387505.js"]))},{title:"manage.sidemenu.metas",icon:Ae,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.84713a5b.js"),["assets/Metas.84713a5b.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/DeletePopover.d3387505.js","assets/Wether.233e4816.js"]))},{title:"manage.sidemenu.indexes",icon:he,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.1ca4b64a.js"),["assets/indexes.1ca4b64a.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/Common.ee9e94aa.js","assets/index.cd1b463f.js","assets/SettingItem.4cc504e5.js","assets/item_type.be442da4.js","assets/index.5cbdb8fb.js","assets/ResponsiveGrid.acef4cec.js","assets/LinkWithBase.b3f6b95d.js","assets/index.370d444a.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.8de2c617.js"),["assets/backup-restore.8de2c617.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/index.cd1b463f.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.docs",icon:$e,to:"https://alist.nn.ci",role:d.GUEST,external:!0},{title:"manage.sidemenu.home",icon:Y,to:"/",role:d.GUEST,refresh:!0}],{isOpen:Ce,onOpen:Pe,onClose:V}=F(),Re=()=>{const e=h(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(D,{"aria-label":"menu",get icon(){return t(be,{})},display:{"@sm":"none"},onClick:Pe,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(D,{"aria-label":"logout",get icon(){return t(J,{})},onClick:()=>{K(),X.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Q,{get opened(){return Ce()},placement:"left",onClose:V,get children(){return[t(Z,{}),t(q,{get children(){return[t(G,{}),t(ee,{color:"$info9",get children(){return e("manage.title")}}),t(te,{get children(){return[t(b,{items:v}),t($,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}})]}})]}})]}})},Oe=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.a7b2ba2f.js"),["assets/AddOrEdit.a7b2ba2f.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.acef4cec.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.a7b2ba2f.js"),["assets/AddOrEdit.a7b2ba2f.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.acef4cec.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.fa4fe28a.js"),["assets/AddOrEdit.fa4fe28a.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/FolderTree.055b66cc.js","assets/index.5cbdb8fb.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.fa4fe28a.js"),["assets/AddOrEdit.fa4fe28a.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/FolderTree.055b66cc.js","assets/index.5cbdb8fb.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.6a0bda03.js"),["assets/AddOrEdit.6a0bda03.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/FolderTree.055b66cc.js","assets/index.5cbdb8fb.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.6a0bda03.js"),["assets/AddOrEdit.6a0bda03.js","assets/index.726c3413.js","assets/index.15d8d646.css","assets/FolderTree.055b66cc.js","assets/index.5cbdb8fb.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.cf53e709.js"),["assets/2fa.cf53e709.js","assets/index.726c3413.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.8d802f3a.js"),["assets/Messenger.8d802f3a.js","assets/index.726c3413.js","assets/index.15d8d646.css"]))}],ke=e=>(_e(e.title),t($,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:ne(a.to,"/@manage"),component:a.component||(()=>t(ke,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Ve=B(v).concat(Oe),Be=()=>{const e=h();return pe(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Re,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:v}),t($,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(re,{get children(){return t(C,{each:Ve,children:o=>t(oe,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));export{Le as F,i as G,Ue as i};
