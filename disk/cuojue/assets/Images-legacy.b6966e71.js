!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.89baa7ec.js","./Folder-legacy.2c63a7b5.js","./Layout-legacy.8b4e761a.js","./useUtil-legacy.033c5735.js","./ImageWithError-legacy.c0bc1669.js","./icon-legacy.175333fe.js","./index-legacy.4acdde1c.js","./index-legacy.4bc98a06.js","./api-legacy.8c4e543f.js","./LinkWithBase-legacy.b9f639ce.js","./index-legacy.d973ddb1.js","./FolderTree-legacy.a71b0fcf.js"],(function(n){"use strict";var t,r,o,a,i,c,u,l,f,s,d,g,b,y,j,h,p,m,v,x,w,$,k,A,I,S;return{setters:[function(e){t=e.j,r=e.ad,o=e.am,a=e.r,i=e.C,c=e.aI,u=e.a3,l=e.aH,f=e.aK,s=e.cm,d=e.ao,g=e.y,b=e.bv,y=e.ak,j=e.al,h=e.E,p=e.o,m=e.bg},function(e){v=e.b},function(e){x=e.a,w=e.M},function(e){$=e.c,k=e.a},function(e){A=e.I},function(e){I=e.O,S=e.g},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(n){if((0,$().isHide)(n.obj)||n.obj.type!==I.IMAGE)return null;var h=x().setPathAs,p=t(o,{get color(){return r()},boxSize:"$12",get as(){return S(n.obj)}}),m=e(a(!1),2),E=m[0],M=m[1],C=i((function(){return c()&&(E()||n.obj.selected)})),L=v({id:1}).show,z=k().rawLink;return t(w.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(u,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(r())}},onMouseEnter:function(){M(!0),h(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){M(!1)},onContextMenu:function(e){l((function(){f(!1),s(n.index,!0,!0)})),L(e,{props:n.obj})},get children(){return t(d,{w:"$full",pos:"relative",get children(){return[t(g,{get when(){return C()},get children(){return t(b,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),t(A,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:p,get src(){return z(n.obj)},loading:"lazy",onClick:function(){j.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(){return t(m,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(h,{get each(){return p.objs},children:function(e,n){return t(E,{obj:e,get index(){return n()}})}})}})}))}}}))}();