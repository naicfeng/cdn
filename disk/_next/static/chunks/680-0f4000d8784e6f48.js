(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{94875:function(e,t,r){"use strict";var n=r(4637),a=r(25566),o=r.n(a);t.Z=function(){return(0,n.jsx)("div",{className:"w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30",dangerouslySetInnerHTML:{__html:o().footer}})}},76886:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var n=r(4637),a=function(e){var t=e.className;return(0,n.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};t.Z=function(e){var t=e.loadingText;return(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-1 rounded py-32 dark:text-white",children:[(0,n.jsx)(a,{className:"mr-3 -ml-1 h-5 w-5 animate-spin"}),(0,n.jsx)("div",{children:t})]})}},19398:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(4637),a=r(60385),o=r(74792),i=r(17744),s=r(70646),c=r(8381),l=r(61176),d=r(40632),u=r(41999),f=r(59496),m=r(4313),p=r(25566),h=r.n(p),x=r(24354),v=r.n(x),g=r(72698),y=r.n(g),b=r(61644),j=r(63509),w=r(14870),k=r(68781),N=r(76886),C=r(92063),I=r(50289);function O(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){O(o,n,a,i,s,"next",e)}function s(e){O(o,n,a,i,s,"throw",e)}i(void 0)}))}}function F(e){var t=e.split("/"===h().baseDirectory?"root:":h().baseDirectory);return t.length>1?t[1].split("/").map((function(e){return encodeURIComponent(decodeURIComponent(e))})).join("/"):""}function P(e){var t=e.driveItem,r=e.driveItemPath,o=e.itemDescription,i=e.disabled;return(0,n.jsx)(l.default,{href:r,passHref:!0,children:(0,n.jsxs)("a",{className:"flex items-center space-x-4 border-b border-gray-400/30 px-4 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-850 ".concat(i?"pointer-events-none cursor-not-allowed":"cursor-pointer"),children:[(0,n.jsx)(a.G,{icon:t.file?(0,C.LP)(t.name):["far","folder"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-8",children:t.name}),(0,n.jsx)("div",{className:"overflow-hidden truncate font-mono text-xs opacity-60 ".concat("Loading ..."===o&&"animate-pulse"),children:o})]})]})})}function E(e){var t=e.result,r=(0,b.ZP)("/api/item/?id=".concat(t.id),I._),a=r.data,o=r.error,i=(0,m.$G)().t;if(o)return(0,n.jsx)(P,{driveItem:t,driveItemPath:"",itemDescription:o,disabled:!0});if(!a)return(0,n.jsx)(P,{driveItem:t,driveItemPath:"",itemDescription:i("Loading ..."),disabled:!0});var s="".concat(F(a.parentReference.path),"/").concat(encodeURIComponent(a.name));return(0,n.jsx)(P,{driveItem:t,driveItemPath:s,itemDescription:decodeURIComponent(s),disabled:!1})}function R(e){var t=e.result;if(""===t.path)return(0,n.jsx)(E,{result:t});var r=decodeURIComponent(t.path);return(0,n.jsx)(P,{driveItem:t,driveItemPath:t.path,itemDescription:r,disabled:!1})}function T(e){var t=e.searchOpen,r=e.setSearchOpen,s=function(){var e=(0,f.useState)(""),t=e[0],r=e[1],n=function(){var e=S(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().get("/api/search/?q=".concat(t));case 2:return(r=e.sent.data).map((function(e){e.path="path"in e.parentReference?"".concat(F(e.parentReference.path),"/").concat(encodeURIComponent(e.name)):""})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=(0,k.Z)((function(){return(0,j.Z)(n,1e3)})),o=(0,w.r5)(S(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}return e.abrupt("return",[]);case 4:return e.abrupt("return",a(t));case 5:case"end":return e.stop()}}),e)}))),[t]);return{query:t,setQuery:r,results:o}}(),c=s.query,l=s.setQuery,d=s.results,u=(0,m.$G)().t,p=function(){r(!1),l("")};return(0,n.jsx)(o.u,{appear:!0,show:t,as:f.Fragment,children:(0,n.jsx)(i.V,{as:"div",className:"fixed inset-0 z-[200] overflow-y-auto",onClose:p,children:(0,n.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,n.jsx)(o.u.Child,{as:f.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(i.V.Overlay,{className:"fixed inset-0 bg-white/80 dark:bg-gray-800/80"})}),(0,n.jsx)(o.u.Child,{as:f.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-100",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,n.jsxs)("div",{className:"my-12 inline-block w-full max-w-3xl transform overflow-hidden rounded border border-gray-400/30 text-left shadow-xl transition-all",children:[(0,n.jsxs)(i.V.Title,{as:"h3",className:"flex items-center space-x-4 border-b border-gray-400/30 bg-gray-50 p-4 dark:bg-gray-800 dark:text-white",children:[(0,n.jsx)(a.G,{icon:"search",className:"h-4 w-4"}),(0,n.jsx)("input",{type:"text",id:"search-box",className:"w-full bg-transparent focus:outline-none focus-visible:outline-none",placeholder:u("Search ..."),value:c,onChange:function(e){return l(e.target.value)}}),(0,n.jsx)("div",{className:"rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",children:"ESC"})]}),(0,n.jsxs)("div",{className:"max-h-[80vh] overflow-x-hidden overflow-y-scroll bg-white dark:bg-gray-900 dark:text-white",onClick:p,children:[d.loading&&(0,n.jsxs)("div",{className:"px-4 py-12 text-center text-sm font-medium",children:[(0,n.jsx)(N.H,{className:"svg-inline--fa mr-2 inline-block h-4 w-4 animate-spin"}),(0,n.jsx)("span",{children:u("Loading ...")})]}),d.error&&(0,n.jsx)("div",{className:"px-4 py-12 text-center text-sm font-medium",children:u("Error: {{message}}",{message:d.error.message})}),d.result&&(0,n.jsx)(n.Fragment,{children:0===d.result.length?(0,n.jsx)("div",{className:"px-4 py-12 text-center text-sm font-medium",children:u("Nothing here.")}):d.result.map((function(e){return(0,n.jsx)(R,{result:e},e.id)}))})]})]})})]})})})}var L=r(40346),D=r(76931),G=r(74233);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=function(e){var t=e.href,r=e.children,a=e.as,o=e.locale,i=U(e,["href","children","as","locale"]);return(0,n.jsx)(l.default,{href:t,as:a,locale:o,children:(0,n.jsx)("a",A({},i,{children:r}))})},Z=function(e){switch(e){case"en":return"\ud83c\uddec\ud83c\udde7 English";case"zh-CN":default:return"\ud83c\udde8\ud83c\uddf3 \u7b80\u4f53\u4e2d\u6587"}},H=(0,G.Z)((function(){var e=(0,u.useRouter)(),t=e.locales,r=e.pathname,i=e.query,s=e.asPath,c=V((0,D.Z)(["NEXT_LOCALE"]),2),l=(c[0],c[1]);return(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)(L.v,{children:[(0,n.jsxs)(L.v.Button,{className:"flex items-center space-x-1.5 hover:opacity-80 dark:text-white",children:[(0,n.jsx)(a.G,{className:"h-4 w-4",icon:"language"}),(0,n.jsx)(a.G,{className:"h-3 w-3",icon:"chevron-down"})]}),(0,n.jsx)(o.u,{as:f.Fragment,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,n.jsx)(L.v.Items,{className:"absolute top-0 right-0 z-20 mt-8 w-28 divide-y divide-gray-900 overflow-auto rounded border border-gray-900/10 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-500/30 dark:bg-gray-900 dark:text-white",children:t.map((function(e){return(0,n.jsx)(L.v.Item,{children:(0,n.jsx)(M,{href:{pathname:r,query:i},as:s,locale:e,onClick:function(){return l("NEXT_LOCALE",e,{path:"/"})},children:(0,n.jsx)("div",{className:"m-1 cursor-pointer rounded px-2 py-1 text-left text-sm font-medium hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600/10 dark:hover:text-blue-400",children:Z(e)})},e)},e)}))})})]})})}));var B=function(){var e=(0,u.useRouter)(),t=function(){var e=(0,f.useState)(""),t=e[0],r=e[1];return(0,f.useEffect)((function(){var e=window.navigator.userAgent;e.indexOf("Windows")>-1?r("windows"):e.indexOf("Mac OS")>-1?r("mac"):e.indexOf("Linux")>-1?r("linux"):r("other")}),[]),t}(),r=(0,f.useState)(!1),p=r[0],x=r[1],v=(0,f.useState)(!1),g=v[0],y=v[1],b=(0,f.useState)(!1),j=b[0],w=b[1],k=function(){return w(!0)};(0,c.y1)("".concat("mac"===t?"cmd":"ctrl","+k"),(function(e){k(),e.preventDefault()})),(0,f.useEffect)((function(){x(function(){var e=!0,t=!1,r=void 0;try{for(var n,a=h().protectedRoutes[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;if(localStorage.hasOwnProperty(o))return!0}}catch(i){t=!0,r=i}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}return!1}())}),[]);var N=(0,m.$G)().t;return(0,n.jsxs)("div",{className:"sticky top-0 z-[100] border-b border-gray-900/10 bg-white bg-opacity-80 backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900",children:[(0,n.jsx)(s.x7,{}),(0,n.jsx)(T,{searchOpen:j,setSearchOpen:w}),(0,n.jsxs)("div",{className:"mx-auto flex w-full items-center justify-between space-x-4 px-4 py-1",children:[(0,n.jsx)(l.default,{href:"/",passHref:!0,children:(0,n.jsxs)("a",{className:"flex items-center space-x-2 py-2 hover:opacity-80 dark:text-white md:p-2",children:[(0,n.jsx)(d.default,{src:h().icon,alt:"icon",width:"25",height:"25",priority:!0}),(0,n.jsx)("span",{className:"hidden font-bold sm:block",children:h().title})]})}),(0,n.jsxs)("div",{className:"flex flex-1 items-center space-x-4 text-gray-700 md:flex-initial",children:[(0,n.jsxs)("button",{className:"flex flex-1 items-center justify-between rounded-lg bg-gray-100 px-2.5 py-1.5 hover:opacity-80 dark:bg-gray-800 dark:text-white md:w-48",onClick:k,children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(a.G,{className:"h-4 w-4",icon:"search"}),(0,n.jsx)("span",{className:"truncate text-sm font-medium",children:N("Search ...")})]}),(0,n.jsxs)("div",{className:"hidden items-center space-x-1 md:flex",children:[(0,n.jsx)("div",{className:"rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",children:"mac"===t?"\u2318":"Ctrl"}),(0,n.jsx)("div",{className:"rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",children:"K"})]})]}),(0,n.jsx)(H,{}),0!==h().links.length&&h().links.map((function(e){return(0,n.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 hover:opacity-80 dark:text-white",children:[(0,n.jsx)(a.G,{icon:["fab",e.name.toLowerCase()]}),(0,n.jsx)("span",{className:"hidden text-sm font-medium md:inline-block",children:N(e.name)})]},e.name)})),h().email&&(0,n.jsxs)("a",{href:h().email,className:"flex items-center space-x-2 hover:opacity-80 dark:text-white",children:[(0,n.jsx)(a.G,{icon:["far","envelope"]}),(0,n.jsx)("span",{className:"hidden text-sm font-medium md:inline-block",children:N("Email")})]}),p&&(0,n.jsxs)("button",{className:"flex items-center space-x-2 p-2 hover:opacity-80 dark:text-white",onClick:function(){return y(!0)},children:[(0,n.jsx)("span",{className:"hidden text-sm font-medium md:inline-block",children:N("Logout")}),(0,n.jsx)(a.G,{icon:"sign-out-alt"})]})]})]}),(0,n.jsx)(o.u,{appear:!0,show:g,as:f.Fragment,children:(0,n.jsx)(i.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",open:g,onClose:function(){return y(!1)},children:(0,n.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,n.jsx)(o.u.Child,{as:f.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-50",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(i.V.Overlay,{className:"fixed inset-0 bg-gray-50 dark:bg-gray-800"})}),(0,n.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,n.jsx)(o.u.Child,{as:f.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-50",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,n.jsxs)("div",{className:"my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle transition-all dark:bg-gray-900",children:[(0,n.jsx)(i.V.Title,{className:"text-lg font-bold text-gray-900 dark:text-gray-100",children:N("Clear all tokens?")}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("p",{className:"text-sm text-gray-500",children:N("These tokens are used to authenticate yourself into password protected folders, ")+N("clearing them means that you will need to re-enter the passwords again.")})}),(0,n.jsx)("div",{className:"mt-4 max-h-32 overflow-y-scroll font-mono text-sm dark:text-gray-100",children:h().protectedRoutes.map((function(e,t){return(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)(a.G,{icon:"key"}),(0,n.jsx)("span",{className:"truncate",children:e})]},t)}))}),(0,n.jsxs)("div",{className:"mt-8 flex items-center justify-end",children:[(0,n.jsx)("button",{className:"mr-3 inline-flex items-center justify-center space-x-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300",onClick:function(){return y(!1)},children:N("Cancel")}),(0,n.jsxs)("button",{className:"inline-flex items-center justify-center space-x-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300",onClick:function(){return y(!1),h().protectedRoutes.forEach((function(e){localStorage.removeItem(e)})),s.ZP.success(N("Cleared all tokens")),void setTimeout((function(){e.reload()}),1e3)},children:[(0,n.jsx)(a.G,{icon:["far","trash-alt"]}),(0,n.jsx)("span",{children:N("Clear all")})]})]})]})})]})})})]})}},15748:function(e){"use strict";e.exports={clientId:"d87bcc39-1750-4ca0-ad54-f8d0efbb2735",obfuscatedClientSecret:"U2FsdGVkX1830zo3/pFDqaBCVBb37iLw3WnBDWGF9GIB2f4apzv0roemp8Y+iIxI3Ih5ecyukqELQEGzZlYiWg==",redirectUri:"http://localhost",authApi:"https://login.microsoftonline.com/common/oauth2/v2.0/token",driveApi:"https://graph.microsoft.com/v1.0/me/drive",scope:"user.read files.read.all offline_access",hideFileRegex:"README[.]md",cacheControlHeader:"max-age=0, s-maxage=120, stale-while-revalidate"}},25566:function(e,t,r){"use strict";var n=r(17459);e.exports={userPrincipalName:n.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME||"wuyue@cuojue.onmicrosoft.com",icon:"/icons/128.png",title:"WuYang's OneDrive",baseDirectory:"/Public/\u5171\u4eab",maxItems:50,googleFontSans:"Inter",googleFontMono:"Fira Mono",googleFontLinks:["https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap"],footer:"&copy;&nbsp;2022 Copyright&nbsp; WuYang&#39;s OneDrive.",protectedRoutes:[],email:"",links:[{name:"\ud83d\udcf0 Blog",link:"https://cuojue.org"}],datetimeFormat:"YYYY-MM-DD HH:mm:ss"}},50289:function(e,t,r){"use strict";r.d(t,{_:function(){return u},E:function(){return m}});var n=r(24354),a=r.n(n),o=r(72698),i=r.n(o),s=r(87750),c=r(78165);function l(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){l(o,n,a,i,s,"next",e)}function s(e){l(o,n,a,i,s,"throw",e)}i(void 0)}))}}function u(e,t){return f.apply(this,arguments)}function f(){return(f=d(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r?i().get(t,{headers:{"od-protected-token":r}}):i().get(t);case 3:return e.abrupt("return",e.sent.data);case 6:throw e.prev=6,e.t0=e.catch(0),{status:e.t0.response.status,message:e.t0.response.data};case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=function(t,n){return n&&!n.folder?null:0===t?["/files/?path=".concat(e),r]:["/files/?path=".concat(e,"&next=").concat(n.next),r]},r=(0,c.hV)(e),n={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!0};return(0,s.ZP)(t,u,n)}},92063:function(e,t,r){"use strict";r.d(t,{VT:function(){return o},RT:function(){return i},LP:function(){return s}});var n={image:["far","file-image"],pdf:["far","file-pdf"],word:["far","file-word"],powerpoint:["far","file-powerpoint"],excel:["far","file-excel"],audio:["far","file-audio"],video:["far","file-video"],archive:["far","file-archive"],code:["far","file-code"],text:["far","file-alt"],file:["far","file"],markdown:["fab","markdown"],book:["fas","book"],link:["fas","link"]},a={gif:n.image,jpeg:n.image,jpg:n.image,png:n.image,heic:n.image,webp:n.image,pdf:n.pdf,doc:n.word,docx:n.word,ppt:n.powerpoint,pptx:n.powerpoint,xls:n.excel,xlsx:n.excel,aac:n.audio,mp3:n.audio,ogg:n.audio,flac:n.audio,oga:n.audio,opus:n.audio,m4a:n.audio,avi:n.video,flv:n.video,mkv:n.video,mp4:n.video,"7z":n.archive,bz2:n.archive,xz:n.archive,wim:n.archive,gz:n.archive,rar:n.archive,tar:n.archive,zip:n.archive,c:n.code,cpp:n.code,js:n.code,jsx:n.code,java:n.code,sh:n.code,cs:n.code,py:n.code,css:n.code,html:n.code,ts:n.code,tsx:n.code,rs:n.code,vue:n.code,json:n.code,yml:n.code,yaml:n.code,toml:n.code,txt:n.text,rtf:n.text,vtt:n.text,srt:n.text,log:n.text,diff:n.text,md:n.markdown,epub:n.book,mobi:n.book,azw3:n.book,url:n.link};function o(e){return e.slice(2+(e.lastIndexOf(".")-1>>>0))}function i(e){return o(e).toLowerCase()}function s(e,t){var r=i(e),o=r in a?a[r]:n.file;return"ts"===r&&(null===t||void 0===t?void 0:t.video)&&(o=n.video),o}},78165:function(e,t,r){"use strict";r.d(t,{hV:function(){return c},ss:function(){return l}});var n=r(93881),a=r.n(n),o=r(25566),i=r.n(o);function s(e){return a()(e).toString()}function c(e){var t=JSON.parse(localStorage.getItem(l(e)));return t?s(t):null}function l(e){var t=i().protectedRoutes,r="",n=!0,a=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var l=s.value;if(l&&e.startsWith(l.split("/").map((function(e){return encodeURIComponent(e)})).join("/"))){r=l;break}}}catch(d){a=!0,o=d}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}},86010:function(){}}]);