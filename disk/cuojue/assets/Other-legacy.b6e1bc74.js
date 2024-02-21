!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var h={};function y(){}function p(){}function d(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=d.prototype=y.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,c,u){var s=l(r[i],r,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function _(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,s(w,"constructor",d),s(d,"constructor",p),p.displayName=s(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.89baa7ec.js","./index-legacy.4bc98a06.js","./useUtil-legacy.033c5735.js","./index-legacy.70438a62.js","./SettingItem-legacy.21ac461a.js","./api-legacy.8c4e543f.js","./index-legacy.4acdde1c.js","./LinkWithBase-legacy.b9f639ce.js","./item_type-legacy.d1f1c701.js"],(function(t){"use strict";var e,i,a,c,u,s,f,l,h,y,p,d,v,g,m,w,b,x;return{setters:[function(t){e=t.d,i=t.r,a=t.a,c=t.b6,u=t.j,s=t.bf,f=t.c5,l=t.m,h=t.B,y=t.bd,p=t.n,d=t.I,v=t.a8,g=t.a6},function(t){m=t.n},function(t){w=t.c},function(t){b=t.G},function(t){x=t.I},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e();m("manage.sidemenu.other");var _=o(i(""),2),L=_[0],k=_[1],j=o(i(""),2),E=j[0],S=j[1],O=o(i(""),2),I=O[0],A=O[1],G=o(i(""),2),N=G[0],$=G[1],P=o(i([]),2),C=P[0],T=P[1],F=o(a((function(){return c.get("/admin/setting/list?groups=".concat(b.ARIA2,",").concat(b.SINGLE))})),2),q=F[0],B=F[1],U=o(a((function(){return c.post("/admin/setting/set_aria2",{uri:L(),secret:E()})})),2),Y=U[0],M=U[1],R=o(a((function(){return c.post("/admin/setting/set_qbit",{url:I()})})),2),W=R[0],z=R[1],D=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:e=t.sent,y(e,(function(t){var r,e,n,o;k((null===(r=t.find((function(t){return"aria2_uri"===t.key})))||void 0===r?void 0:r.value)||""),S((null===(e=t.find((function(t){return"aria2_secret"===t.key})))||void 0===e?void 0:e.value)||""),$((null===(n=t.find((function(t){return"token"===t.key})))||void 0===n?void 0:n.value)||""),A((null===(o=t.find((function(t){return"qbittorrent_url"===t.key})))||void 0===o?void 0:o.value)||""),T(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();D();var H=o(a((function(){return c.post("/admin/setting/reset_token")})),2),J=H[0],K=H[1],Q=w().copy;return u(g,{get loading(){return q()},get children(){return[u(s,{mb:"$2",get children(){return t("settings_other.aria2")}}),u(f,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[u(x,l((function(){return C().find((function(t){return"aria2_uri"===t.key}))}),{get value(){return L()},onChange:function(t){return k(t)}})),u(x,l((function(){return C().find((function(t){return"aria2_secret"===t.key}))}),{get value(){return E()},onChange:function(t){return S(t)}}))]}}),u(h,{my:"$2",get loading(){return Y()},onClick:(o=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M();case 2:n=r.sent,y(n,(function(r){p.success("".concat(t("settings_other.aria2_version")," ").concat(r))}));case 4:case"end":return r.stop()}}),e)}))),function(){return o.apply(this,arguments)}),get children(){return t("settings_other.set_aria2")}}),u(s,{my:"$2",get children(){return t("settings.qbittorrent_url")}}),u(d,{get value(){return I()},onInput:function(t){A(t.currentTarget.value)}}),u(h,{my:"$2",get loading(){return W()},onClick:(e=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:e=t.sent,y(e,(function(t){p.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.set_qbit")}}),u(s,{my:"$2",get children(){return t("settings.token")}}),u(d,{get value(){return N()},readOnly:!0}),u(v,{my:"$2",spacing:"$2",get children(){return[u(h,{onClick:function(){Q(N())},get children(){return t("settings_other.copy_token")}}),u(h,{colorScheme:"danger",get loading(){return J()},onClick:(e=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,K();case 2:n=r.sent,y(n,(function(r){p.success(t("settings_other.reset_token_success")),$(r)}));case 4:case"end":return r.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.reset_token")}})];var e}})];var e,o}})}))}}}))}();
