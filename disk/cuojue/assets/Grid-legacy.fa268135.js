!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.89baa7ec.js","./Folder-legacy.2c63a7b5.js","./Layout-legacy.8b4e761a.js","./useUtil-legacy.033c5735.js","./LinkWithBase-legacy.b9f639ce.js","./ImageWithError-legacy.c0bc1669.js","./icon-legacy.175333fe.js","./index-legacy.4acdde1c.js","./index-legacy.4bc98a06.js","./api-legacy.8c4e543f.js","./index-legacy.d973ddb1.js","./FolderTree-legacy.a71b0fcf.js"],(function(t){"use strict";var n,r,o,a,i,l,c,u,f,s,g,d,b,y,h,m,p,j,v,x,w,$,k,A,S,I,C,E;return{setters:[function(e){n=e.j,r=e.ad,o=e.am,a=e.r,i=e.C,l=e.aI,c=e.a3,u=e.K,f=e.aH,s=e.aK,g=e.cm,d=e.ao,b=e.al,y=e.y,h=e.bv,m=e.ak,p=e.bc,j=e.E,v=e.o,x=e.c0},function(e){w=e.b},function(e){$=e.a,k=e.M},function(e){A=e.c},function(e){S=e.a},function(e){I=e.I},function(e){C=e.g,E=e.O},function(){},function(){},function(){},function(){},function(){}],execute:function(){var M=function(t){if((0,A().isHide)(t.obj))return null;var j=$().setPathAs,v=n(o,{get color(){return r()},boxSize:"$12",get as(){return C(t.obj)}}),x=e(a(!1),2),M=x[0],z=x[1],O=i((function(){return l()&&(M()||t.obj.selected)})),H=w({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(c,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:u()}},as:S,get href(){return t.obj.name},onMouseEnter:function(){z(!0),j(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){z(!1)},onContextMenu:function(e){f((function(){s(!1),g(t.index,!0,!0)})),H(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===E.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(y,{get when(){return O()},get children(){return n(h,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(y,{get when(){return t.obj.thumb},fallback:v,get children(){return n(I,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:v,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(x,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(j,{get each(){return v.objs},children:function(e,t){return n(M,{obj:e,get index(){return t()}})}})}})}))}}}))}();
