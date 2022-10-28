var L=Object.defineProperty,O=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var E=(s,a,e)=>a in s?L(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,$=(s,a)=>{for(var e in a||(a={}))v.call(a,e)&&E(s,e,a[e]);if(C)for(var e of C(a))I.call(a,e)&&E(s,e,a[e]);return s},j=(s,a)=>O(s,T(a));var k=(s,a,e)=>new Promise((t,n)=>{var m=c=>{try{w(e.next(c))}catch(o){n(o)}},y=c=>{try{w(e.throw(c))}catch(o){n(o)}},w=c=>c.done?t(c.value):Promise.resolve(c.value).then(m,y);w((e=e.apply(s,a)).next())});import{j as U,R as g,h as N,n as A,D as S,I as D,as as F}from"./vendor.fa461620.js";import{b as p}from"./index.c6766dd6.js";import"./index.f7155a4e.js";function J(s,a){const e=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=s,n.click(),URL.revokeObjectURL(t)}const _=["version","password"],d={accounts:[],settings:[],metas:[]},z=()=>{const{t:s}=U(),[a,e]=g.useState(""),t=o=>{e(r=>`${r}
${o}`)},n=N(),m=o=>{n({title:s(o),status:"error",duration:3e3,isClosable:!0})},y=()=>k(void 0,null,function*(){var R;e("get settings...");const r=(yield p.get("settings")).data;if(r.code!==200){m(r.message);return}else t("get settings success"),d.settings=r.data,d.settings=d.settings.filter(f=>!_.includes(f.key));t("get accounts...");const i=(yield p.get("accounts")).data;if(i.code!==200){m(i.message);return}else t("get accounts success"),d.accounts=i.data;t("get metas...");const l=(yield p.get("metas")).data;if(l.code!==200){m(l.message);return}else t("get metas success"),d.metas=l.data;t("download backup file..."),J(`${((R=d.settings.find(f=>f.key==="title"))==null?void 0:R.value)||"Disk"}.json`,d)}),w=()=>k(void 0,null,function*(){e("choose data file..."),document.querySelector("#restore-file").click()}),c=o=>{const r=o.target.files,b=r[0];if(!r||!b)return;const i=new FileReader;i.onload=x=>k(void 0,null,function*(){const l=JSON.parse(i.result);t("restore settings...");const f=(yield p.post("settings",l.settings)).data;if(f.code!==200){m(f.message);return}t("restore settings success"),t("restore accounts...");for(const u of l.accounts){const h=(yield p.post("account/create",j($({},u),{id:0}))).data;if(h.code!==200){t(`failed to restore account:[${u.name}],the reason is [${h.message}]`);continue}t(`restore account:[${u.name}] success`)}t("finish restore accounts"),t("restore metas...");for(const u of l.metas){const h=(yield p.post("meta/create",j($({},u),{id:0}))).data;if(h.code!==200){t(`failed to restore meta:[${u.path}],the reason is [${h.message}]`);continue}t(`restore meta:[${u.path}] success`)}t("finish restore metas"),n({title:s("restore success"),status:"success",duration:3e3,isClosable:!0})}),i.readAsText(b)};return g.createElement(A,null,g.createElement(S,{colorScheme:"green",onClick:y},s("Backup")),g.createElement(S,{ml:"2",onClick:w},s("Restore")),g.createElement(D,{display:"none",type:"file",id:"restore-file",onChange:c}),g.createElement(F,{readOnly:!0,rows:23,mt:"2",value:a}))};export{z as default};
