!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.0c90f1bb.js","./useT-legacy.d67719a0.js","./useUtil-legacy.21dcd026.js","./icon-legacy.dd7329b0.js","./index-legacy.9b99f821.js","./obj-legacy.97e43e8b.js"],(function(n,r){"use strict";var o,u,i,c,a,l,f,p,s,d,g,m,b,h,y,v,j,w,O,x,S,_,$,k,P,A,E,D,I,T,C,z,M,U,B,L,q;return{setters:[function(e){o=e.f,u=e.am,i=e.ba,c=e.o,a=e.a2,l=e.be,f=e.bb,p=e.a8,s=e.bu,d=e.bC,g=e.A,m=e.bD,b=e.ar,h=e.ao,y=e.B,v=e.ap,j=e.C,w=e.aq,O=e.bE,x=e.x,S=e.a7,_=e.bF,$=e.bG,k=e.R,P=e.U,A=e.bH,E=e.bI,D=e.q,I=e.bs,T=e.Y,C=e.Z,z=e.D},function(e){M=e.u},function(e){U=e.b},function(e){B=e.g},function(e){L=e.t},function(e){q=e.O}],execute:function(){var F=n("F",(function(e){return o(a,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(u,{get color(){return i()},boxSize:"$20",get as(){return B(c.obj)}}),o(a,{spacing:"$2",get children(){return[o(l,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(f,{color:"$neutral10",size:"sm",get children(){return[p((function(){return s(c.obj.size)}))," · ",p((function(){return d(c.obj.modified)}))]}})]}}),o(a,{spacing:"$2",get children(){return e.children}})]}})})),G=function(){var e=M(),n=g((function(){return m(c.obj.name)}));return o(x,{get when(){return n().length},get children(){return o(b,{get children(){return[o(h,{as:y,colorScheme:"success",get rightIcon(){return o(u,{as:L})},get children(){return e("home.preview.open_with")}}),o(v,{get children(){return o(j,{get each(){return n()},children:function(e){return o(w,{as:"a",target:"_blank",get href(){return O(e.value,c.raw_url,c.obj.name)},get children(){return e.key}})}})}})]}})}})},H=function(e){var n=M(),r=U().copyCurrentRawLink;return o(F,{get children(){return[o(S,{spacing:"$2",get children(){return[o(y,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(y,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(x,{get when(){return e.openWith},get children(){return o(G,{})}})]}})},R=Object.freeze(Object.defineProperty({__proto__:null,Download:H,default:H},Symbol.toStringTag,{value:"Module"})),V=function(e){return o($,{w:"$full",h:"70vh",get children(){return o(_.iframe,{w:"$full",h:"$full",get src(){return O(e.scheme,c.raw_url,c.obj.name)}})}})},W=[{name:"Markdown",type:q.TEXT,component:k((function(){return P((function(){return r.import("./markdown-legacy.1b7207e1.js")}),void 0)}))},{name:"Text Editor",type:q.TEXT,component:k((function(){return P((function(){return r.import("./text-editor-legacy.3525e4c8.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:k((function(){return P((function(){return r.import("./html-legacy.da0614a0.js")}),void 0)}))},{name:"Image",type:q.IMAGE,component:k((function(){return P((function(){return r.import("./image-legacy.d7489644.js")}),void 0)}))},{name:"Video",type:q.VIDEO,component:k((function(){return P((function(){return r.import("./video-legacy.c7c34b44.js")}),void 0)}))},{name:"Audio",type:q.AUDIO,component:k((function(){return P((function(){return r.import("./audio-legacy.7d3b0300.js")}),void 0)}))},{name:"Ipa",exts:["ipa"],component:k((function(){return P((function(){return r.import("./ipa-legacy.25b608cd.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:k((function(){return P((function(){return r.import("./plist-legacy.de5758f9.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:k((function(){return P((function(){return r.import("./aliyun_office-legacy.7107d76a.js")}),void 0)}))}],X=function(e){var n=[];return W.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(A(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),E(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(V,{scheme:r})})})})),n.push({name:"Download",component:k((function(){return P((function(){return Promise.resolve().then((function(){return R}))}),void 0)}))}),n},Y=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=g((function(){return X(t(t({},c.obj),{},{provider:c.provider}))})),r=e(D(n()[0]),2),u=r[0],i=r[1];return o(x,{get when(){return n().length>1},get fallback(){return o(H,{openWith:!0})},get children(){return o(a,{w:"$full",spacing:"$2",get children(){return[o(S,{w:"$full",spacing:"$2",get children(){return[o(I,{alwaysShowBorder:!0,get value(){return u().name},onChange:function(e){i(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(G,{})]}}),o(T,{get fallback(){return o(C,{})},get children(){return o(z,{get component(){return u().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Y)}}}))}();