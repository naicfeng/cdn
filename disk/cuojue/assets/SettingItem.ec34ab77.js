import{e as t,aW as i,ay as c,k as h,ad as d,R as m,a7 as y,U as g,I as b,bO as f,T as S,bP as T,bQ as k,bR as C,bS as O,bT as o,bU as v,bV as w,v as x,bW as D,bX as I,bY as $,F as E,aY as F}from"./index.cd5b3688.js";import{u as R}from"./useT.c9c66d1e.js";import{F as u}from"./index.03050695.js";import{T as a}from"./item_type.be442da4.js";import{G as A}from"./index.24a4eb93.js";const V=e=>{const l=R();return t(F,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(i,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[c(()=>l(`settings.${e.key}`)),t(h,{get when(){return e.flag===u.DEPRECATED},get children(){return t(d,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}}),t(m,{get fallback(){return t(y,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(b,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(f,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(S,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(T,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(k,{get children(){return[t(C,{get children(){return l("global.choose")}}),t(O,{}),t(o,{})]}}),t(v,{get children(){return t(w,{get children(){return t(x,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(D,{value:n,get children(){return[t(I,{get children(){return l(`settings.${e.key}s.${n}`)}}),t($,{})]}})})}})}})]}})}})]}}),t(E,{get children(){return c(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{V as I};
