import{d as u,u as l,j as e,bf as i,I as c,_ as p,W as m,bL as d,a8 as a,bg as g,B as o,a3 as $}from"./index.49d82d7a.js";import{a as f}from"./Layout.48d2d659.js";import"./useTitle.e3b4534a.js";import"./api.b6547f41.js";import"./useUtil.06017065.js";import"./index.c0f11380.js";import"./index.ab952217.js";import"./FolderTree.78ef75c6.js";const P=()=>{const t=u(),{refresh:n}=f(),{back:s}=l();return e($,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(i,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return p()},get background(){return m("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>d(r.currentTarget.value)}),e(a,{w:"$full",justifyContent:"space-between",get children(){return[e(g,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1"}),e(a,{spacing:"$2",get children(){return[e(o,{colorScheme:"neutral",onClick:s,get children(){return t("global.back")}}),e(o,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{P as default};
