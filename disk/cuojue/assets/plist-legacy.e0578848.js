!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(a){u=!0,c=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.6877f13e.js","./useT-legacy.647cc5c7.js","./File-legacy.4947d4fe.js","./useUtil-legacy.f78b8d34.js","./api-legacy.e31b6658.js","./icon-legacy.07e942b7.js","./index-legacy.7c0da38f.js","./Layout-legacy.de77860c.js","./useTitle-legacy.5774a174.js","./Markdown-legacy.2b98e804.js","./index-legacy.075ed3cc.js","./FolderTree-legacy.3225b426.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,c,i,o,u;return{setters:[function(n){t=n.d,r=n.e,c=n.B,i=n.o},function(n){o=n.u},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=o(),a=n(t(!1),2),l=a[0],f=a[1];return r(u,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+i.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
