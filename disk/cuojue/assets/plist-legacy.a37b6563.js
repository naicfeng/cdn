!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,i,u=[],o=!0,a=!1;try{for(e=e.call(t);!(o=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==e.return||e.return()}finally{if(a)throw i}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./index-legacy.1dde76d2.js","./useT-legacy.f3b1445e.js","./File-legacy.86f871b2.js","./useUtil-legacy.988a9a2a.js","./api-legacy.0029be3f.js","./icon-legacy.7fbcb1df.js","./index-legacy.f7b93b1e.js"],(function(n){"use strict";var e,r,i,u,o,a;return{setters:[function(t){e=t.q,r=t.f,i=t.B,u=t.o},function(t){o=t.u},function(t){a=t.F},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=o(),c=t(e(!1),2),l=c[0],f=c[1];return r(a,{get children(){return r(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+u.raw_url},onClick:function(){f(!0)},get children(){return n("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
