!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,o=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(u){a=!0,c=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw c}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.8faf339a.js","./useT-legacy.5c631e7c.js","./File-legacy.c83656b9.js","./useUtil-legacy.160dbf34.js","./api-legacy.e5c17346.js","./icon-legacy.1efaf426.js","./index-legacy.eb6fd18f.js","./Layout-legacy.16304288.js","./useTitle-legacy.4737fd4f.js","./Markdown-legacy.047be34d.js","./index-legacy.227fce2e.js","./FolderTree-legacy.4f18338a.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,c,o,i,a,u,l,f;return{setters:[function(n){t=n.d,r=n.e,c=n.B,o=n.b7,i=n.cs,a=n.o,u=n.cr},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=l(),s=n(t(!1),2),y=s[0],d=s[1];return r(f,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(i(encodeURIComponent(a.raw_url)+"/"+u(encodeURIComponent(a.obj.name))),".plist")},onClick:function(){d(!0)},get children(){return e("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();