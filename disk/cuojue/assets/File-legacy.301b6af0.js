!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.fb1c5cba.js","./useUtil-legacy.0913c20e.js","./icon-legacy.3ee3f832.js","./index-legacy.1b6c3776.js"],(function(n,r){"use strict";var o,u,i,c,a,l,f,p,d,s,g,m,b,h,y,v,j,w,O,_,x,S,k,$,P,A,E,D,I,T,z,C,M,L,U,B,V,F;return{setters:[function(e){o=e.j,u=e.am,i=e.ad,c=e.o,a=e.a3,l=e.bf,f=e.bc,p=e.a9,d=e.bv,s=e.bF,g=e.d,m=e.C,b=e.bG,h=e.ai,y=e.ab,v=e.B,j=e.af,w=e.E,O=e.ag,_=e.bH,x=e.y,S=e.a8,k=e.bI,$=e.bJ,P=e.U,A=e.V,E=e.bD,D=e.bK,I=e.r,T=e.aS,z=e.Z,C=e.$,M=e.D},function(e){L=e.a,U=e.b},function(e){B=e.g,V=e.O},function(e){F=e.P}],execute:function(){var G=n("F",(function(e){return o(a,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(u,{get color(){return i()},boxSize:"$20",get as(){return B(c.obj)}}),o(a,{spacing:"$2",get children(){return[o(l,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(f,{color:"$neutral10",size:"sm",get children(){return[p((function(){return d(c.obj.size)}))," · ",p((function(){return s(c.obj.modified)}))]}})]}}),o(a,{spacing:"$2",get children(){return e.children}})]}})})),H=function(){var e=g(),n=m((function(){return b(c.obj.name)})),r=L().currentObjLink;return o(x,{get when(){return n().length},get children(){return o(h,{get children(){return[o(y,{as:v,colorScheme:"success",get rightIcon(){return o(u,{as:F})},get children(){return e("home.preview.open_with")}}),o(j,{get children(){return o(w,{get each(){return n()},children:function(e){return o(O,{as:"a",target:"_blank",get href(){return _(e.value,{raw_url:c.raw_url,name:c.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},W=function(e){var n=g(),r=U().copyCurrentRawLink;return o(G,{get children(){return[o(S,{spacing:"$2",get children(){return[o(v,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(v,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(x,{get when(){return e.openWith},get children(){return o(H,{})}})]}})},X=Object.freeze(Object.defineProperty({__proto__:null,Download:W,default:W},Symbol.toStringTag,{value:"Module"})),J=function(e){var n=L().currentObjLink;return o($,{w:"$full",h:"70vh",get children(){return o(k.iframe,{w:"$full",h:"$full",get src(){return _(e.scheme,{raw_url:c.raw_url,name:c.obj.name,d_url:n(!0)})}})}})},K=[{name:"Markdown",type:V.TEXT,component:P((function(){return A((function(){return r.import("./markdown-legacy.e1fddcc7.js")}),void 0)}))},{name:"Text Editor",type:V.TEXT,component:P((function(){return A((function(){return r.import("./text-editor-legacy.99146273.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:P((function(){return A((function(){return r.import("./html-legacy.887c29d9.js")}),void 0)}))},{name:"Image",type:V.IMAGE,component:P((function(){return A((function(){return r.import("./image-legacy.263ec73b.js")}),void 0)}))},{name:"Video",type:V.VIDEO,component:P((function(){return A((function(){return r.import("./video-legacy.eb8ee37e.js")}),void 0)}))},{name:"Audio",type:V.AUDIO,component:P((function(){return A((function(){return r.import("./audio-legacy.5742bf11.js")}),void 0)}))},{name:"Ipa",exts:["ipa"],component:P((function(){return A((function(){return r.import("./ipa-legacy.cd200ffb.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:P((function(){return A((function(){return r.import("./plist-legacy.09af03eb.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:P((function(){return A((function(){return r.import("./aliyun_office-legacy.46d758ac.js")}),void 0)}))}],R=function(e){var n=[];return K.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(E(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),D(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(J,{scheme:r})})})})),n.push({name:"Download",component:P((function(){return A((function(){return Promise.resolve().then((function(){return X}))}),void 0)}))}),n},Z=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=m((function(){return R(t(t({},c.obj),{},{provider:c.provider}))})),r=e(I(n()[0]),2),u=r[0],i=r[1];return o(x,{get when(){return n().length>1},get fallback(){return o(W,{openWith:!0})},get children(){return o(a,{w:"$full",spacing:"$2",get children(){return[o(S,{w:"$full",spacing:"$2",get children(){return[o(T,{alwaysShowBorder:!0,get value(){return u().name},onChange:function(e){i(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(H,{})]}}),o(z,{get fallback(){return o(C,{})},get children(){return o(M,{get component(){return u().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Z)}}}))}();
