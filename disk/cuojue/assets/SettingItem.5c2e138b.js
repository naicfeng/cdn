import{f as t,aZ as i,a8 as c,x as h,am as d,$ as m,af as y,a0 as g,I as f,bN as b,T as S,bO as C,bP as T,bQ as k,bR as O,bS as o,bT as x,bU as $,C as v,bV as w,bW as D,bX as I,F as E,a$ as F}from"./index.26595e72.js";import{u as N}from"./useT.82af320b.js";import{F as u}from"./index.79ba6d54.js";import{T as a}from"./item_type.be442da4.js";import{M as A}from"./index.adc66fd6.js";const V=e=>{const l=N();return t(F,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(i,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[c(()=>l(`settings.${e.key}`)),t(h,{get when(){return e.flag===u.DEPRECATED},get children(){return t(d,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}}),t(m,{get fallback(){return t(y,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(f,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(b,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(S,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(C,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(T,{get children(){return[t(k,{get children(){return l("global.choose")}}),t(O,{}),t(o,{})]}}),t(x,{get children(){return t($,{get children(){return t(v,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(w,{value:n,get children(){return[t(D,{get children(){return l(`settings.${e.key}s.${n}`)}}),t(I,{})]}})})}})}})]}})}})]}}),t(E,{get children(){return c(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{V as I};