!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,c,o=[],i=!0,a=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){a=!0,c=u}finally{try{i||null==e.return||e.return()}finally{if(a)throw c}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.83cadfce.js","./useT-legacy.11519580.js","./File-legacy.c22a81b4.js","./useUtil-legacy.2a7c9592.js","./api-legacy.ffc4bb9c.js","./icon-legacy.f248743b.js","./index-legacy.bc8caa23.js"],(function(t){"use strict";var e,r,c,o,i,a,u,l,f;return{setters:[function(n){e=n.q,r=n.f,c=n.B,o=n.b8,i=n.cs,a=n.o,u=n.cr},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=l(),s=n(e(!1),2),y=s[0],d=s[1];return r(f,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(i(encodeURIComponent(a.raw_url)+"/"+u(encodeURIComponent(a.obj.name))),".plist")},onClick:function(){d(!0)},get children(){return t("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();
