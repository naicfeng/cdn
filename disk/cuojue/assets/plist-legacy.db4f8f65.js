!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);o=!0);}catch(a){u=!0,i=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.8faf339a.js","./useT-legacy.5c631e7c.js","./File-legacy.c83656b9.js","./useUtil-legacy.160dbf34.js","./api-legacy.e5c17346.js","./icon-legacy.1efaf426.js","./index-legacy.eb6fd18f.js","./Layout-legacy.16304288.js","./useTitle-legacy.4737fd4f.js","./Markdown-legacy.047be34d.js","./index-legacy.227fce2e.js","./FolderTree-legacy.4f18338a.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,i,c,o,u;return{setters:[function(n){t=n.d,r=n.e,i=n.B,c=n.o},function(n){o=n.u},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=o(),a=n(t(!1),2),l=a[0],f=a[1];return r(u,{get children(){return r(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();