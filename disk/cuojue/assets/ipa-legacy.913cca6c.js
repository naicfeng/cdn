!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,o=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(u){a=!0,c=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw c}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.0862b082.js","./useT-legacy.f8b4a3e3.js","./File-legacy.341100c9.js","./useUtil-legacy.1bfc1188.js","./api-legacy.22b97ddd.js","./icon-legacy.e70dbe3e.js","./index-legacy.30aba2ac.js","./Layout-legacy.df40cfd4.js","./useTitle-legacy.967cebc4.js","./Markdown-legacy.00b486d6.js","./index-legacy.2efa0dc9.js","./FolderTree-legacy.03f0f3fe.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,c,o,i,a,u,l,f;return{setters:[function(n){t=n.d,r=n.e,c=n.B,o=n.b6,i=n.cs,a=n.o,u=n.cr},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=l(),s=n(t(!1),2),y=s[0],d=s[1];return r(f,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(i(encodeURIComponent(a.raw_url)+"/"+u(encodeURIComponent(a.obj.name))),".plist")},onClick:function(){d(!0)},get children(){return e("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();