HTMLElement.prototype.wrap=function(o){this.parentNode.insertBefore(o,this),this.parentNode.removeChild(this),o.appendChild(this)},Fluid.events={registerNavbarEvent:function(){var o,e=jQuery("#navbar");0!==e.length&&(o=jQuery("#navbar .dropdown-menu"),0<e.offset().top&&(e.removeClass("navbar-dark"),o.removeClass("navbar-dark")),Fluid.utils.listenScroll(function(){e[50<e.offset().top?"addClass":"removeClass"]("top-nav-collapse"),o[50<e.offset().top?"addClass":"removeClass"]("dropdown-collapse"),0<e.offset().top?e.removeClass("navbar-dark"):e.addClass("navbar-dark"),o.removeClass("navbar-dark")}),jQuery("#navbar-toggler-btn").on("click",function(){jQuery(".animated-icon").toggleClass("open"),jQuery("#navbar").toggleClass("navbar-col-show")}))},registerParallaxEvent:function(){var n,r=jQuery('#banner[parallax="true"]');0!==r.length&&0!==(n=jQuery("#board")).length&&Fluid.utils.listenScroll(function(){var o=jQuery(window).scrollTop()/5,e=96+parseInt(n.css("margin-top"),10),e=(r.css({transform:"translate3d(0,"+(o=e<o?e:o)+"px,0)"}),jQuery(".side-col"));e&&e.css({"padding-top":o+"px"})})},registerScrollDownArrowEvent:function(){var o=jQuery(".scroll-down-bar");0!==o.length&&o.on("click",function(){Fluid.utils.scrollToElement("#board",-jQuery("#navbar").height())})},registerScrollTopArrowEvent:function(){var e,n,r,o,t,a=jQuery("#scroll-top-button");0!==a.length&&0!==(e=jQuery("#board")).length&&(r=n=!1,(o=function(){var o=e[0].getClientRects()[0].right,o=document.body.offsetWidth-o;n=50<=o,a.css({bottom:n&&r?"20px":"-60px",right:o-64+"px"})})(),jQuery(window).resize(o),t=e.offset().top,Fluid.utils.listenScroll(function(){var o=document.body.scrollTop+document.documentElement.scrollTop;r=t<=o,a.css({bottom:n&&r?"20px":"-60px"})}),a.on("click",function(){jQuery("body,html").animate({scrollTop:0,easing:"swing"})}))},registerImageLoadedEvent:function(){if("NProgress"in window){var o,e=document.getElementById("banner"),e=(e&&(e=e.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/(['"])/g,""),(o=new Image).onload=function(){window.NProgress&&window.NProgress.inc(.2)},o.src=e,o.complete&&o.onload()),jQuery("main img:not([lazyload])")),n=e.length;for(const o of e){const r=o.onload;o.onload=function(){r&&r(),window.NProgress&&window.NProgress.inc(.5/n)},o.complete&&o.onload()}}},billboard:function(){0 in window}};