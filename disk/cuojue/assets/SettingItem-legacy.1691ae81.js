!function(){function e(e,n){for(var r in n){(l=n[r]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,r,l)}if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(n),u=0;u<t.length;u++){var l,i=t[u];(l=n[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}return e}function n(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.ca6b3844.js","./useT-legacy.75e3d16a.js","./index-legacy.6233a67c.js","./item_type-legacy.d1f1c701.js","./index-legacy.c838a02c.js"],(function(r){"use strict";var t,u,l,i,c,a,o,g,d,f,h,v,y,b,s,p,O,k,m,w,j,x,C,T,D,E,P,R;return{setters:[function(e){t=e.e,u=e.aV,l=e.ax,i=e.k,c=e.ac,a=e.R,o=e.a6,g=e.U,d=e.I,f=e.bO,h=e.T,v=e.bP,y=e.bQ,b=e.bR,s=e.bS,p=e.bT,O=e.bU,k=e.bV,m=e.v,w=e.bW,j=e.bX,x=e.bY,C=e.F,T=e.aX},function(e){D=e.u},function(e){E=e.F},function(e){P=e.T},function(e){R=e.G}],execute:function(){r("I",(function(r){var S=D();return t(T,{w:"$full",display:"flex",flexDirection:"column",get children(){var T,D;return[t(u,(T={},"for",D={},D.for=D.for||{},D.for.get=function(){return r.key},n(T,"display","flex"),n(T,"alignItems","center"),"children",D.children=D.children||{},D.children.get=function(){return[l((function(){return S("settings.".concat(r.key))})),t(i,{get when(){return r.flag===E.DEPRECATED},get children(){return t(c,{ml:"$2",as:R,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},e(T,D),T)),t(a,{get fallback(){return t(o,{get children(){return S("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[P.String,P.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===P.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===P.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===P.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===P.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===E.READONLY},get children(){return[t(y,{get children(){return[t(b,{get children(){return S("global.choose")}}),t(s,{}),t(p,{})]}}),t(O,{get children(){return t(k,{get children(){return t(m,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(w,{value:e,get children(){return[t(j,{get children(){return S("settings.".concat(r.key,"s.").concat(e))}}),t(x,{})]}})}})}})}})]}})}})]}}),t(C,{get children(){return l((function(){return!!r.help}),!0)()?S("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();