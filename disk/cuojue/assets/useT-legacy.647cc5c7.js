!function(){function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,u,o=[],i=!0,a=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(o.push(e.value),!t||o.length!==t);i=!0);}catch(l){a=!0,u=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw u}}return o}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}System.register(["./index-legacy.6877f13e.js"],(function(t){"use strict";var n,e;return{setters:[function(r){n=r.b2,e=r.b3}],execute:function(){t("u",(function(){var t=r(n(),1)[0];return function(r,n,u){var o=t(r,n,u);if(!o){var i=r.lastIndexOf(".");i===r.length-1&&(i=r.lastIndexOf(".",i-1));var a=r.slice(i+1);return e(a).split("_").join(" ")}return o}}))}}}))}();
