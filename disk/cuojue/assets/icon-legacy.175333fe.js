!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,a,c=[],u=!0,i=!1;try{for(e=e.call(r);!(u=(n=e.next()).done)&&(c.push(n.value),!t||c.length!==t);u=!0);}catch(o){i=!0,a=o}finally{try{u||null==e.return||e.return()}finally{if(i)throw a}}return c}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}System.register(["./index-legacy.4bc98a06.js","./index-legacy.4acdde1c.js","./index-legacy.89baa7ec.js"],(function(t){"use strict";var e,n,a,c,u,i,o,l,s,f,p,y,d,v,m,h,b,A,O;return{setters:[function(r){e=r.p,n=r.q,a=r.r,c=r.s,u=r.t,i=r.v,o=r.w,l=r.x,s=r.y,f=r.z,p=r.A,y=r.C,d=r.D},function(r){v=r.f,m=r.g,h=r.k},function(r){b=r.ap,A=r.bG,O=r.bH}],execute:function(){var g=t("O",function(r){return r[r.UNKNOWN=0]="UNKNOWN",r[r.FOLDER=1]="FOLDER",r[r.VIDEO=2]="VIDEO",r[r.AUDIO=3]="AUDIO",r[r.TEXT=4]="TEXT",r[r.IMAGE=5]="IMAGE",r}(g||{}));var x={"dmg,ipa,plist,tipa":i,"exe,msi":o,"zip,gz,rar,7z,tar,jar,xz":l,apk:function(r){return b({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},r)},db:v,md:s,epub:m,iso:h,m3u8:u,"doc,docx":f,"xls,xlsx":p,"ppt,pptx":y,pdf:d};t("g",(function(t){return function(t,i){if(t!==g.FOLDER)for(var o=0,l=Object.entries(x);o<l.length;o++){var s=r(l[o],2),f=s[0],p=s[1];if(f.split(",").includes(i.toLowerCase()))return p}switch(t){case g.FOLDER:return O;case g.VIDEO:return u;case g.AUDIO:return c;case g.TEXT:return a;case g.IMAGE:return n;default:return e}}(t.type,A(t.name))}))}}}))}();
