Fluid.utils={listenScroll:function(e){if("Debouncer"in window){var t=new Debouncer(e);window.addEventListener("scroll",t,!1),t.handleEvent()}else window.addEventListener("scroll",e,!1)},scrollToElement:function(e,t){var n=$(e).offset();n&&$("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})},waitElementVisible:function(e,t,n){var o="undefined"!=typeof window,i=o&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent),r="IntersectionObserver"in window;if(o&&!i){var d;d="string"==typeof e?document.querySelector(e):e;var c=n||2,a=function(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,o=t.top;return o>=0&&o<=n*(c+1)||o<=0&&o>=-n*c-t.height};if(a(d))t&&t();else{var s=function(){var e=function(){a(d)&&(window.removeEventListener("scroll",e),t&&t())};window.addEventListener("scroll",e)};if(r)new IntersectionObserver(function(e,n){e[0].intersectionRect.x<=0?"Debouncer"in window?new Debouncer(s).handleEvent():s():e[0].isIntersecting&&t&&t();n.disconnect()},{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)+"px"}).observe(d);else if("Debouncer"in window)new Debouncer(s).handleEvent();else s()}}else t&&t()},waitElementLoaded:function(e,t){var n="undefined"!=typeof window,o=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);n&&!o?"MutationObserver"in window?new MutationObserver(function(n,o){document.getElementById(e)&&(t&&t(),o.disconnect())}).observe(document,{childList:!0,subtree:!0}):document.addEventListener("DOMContentLoaded",function(){t&&t()}):t&&t()},createScript:function(e,t){var n=document.createElement("script");n.setAttribute("src",e),n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.async=!1,"function"==typeof t&&(window.attachEvent?n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||(n.onreadystatechange=null,t())}:n.onload=t);var o=document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;o.parentNode.insertBefore(n,o)},createCssLink:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e);var n=document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;n.parentNode.insertBefore(t,n)},loadComments:function(e,t){var n=document.querySelector("#comments[lazyload]");if(n){this.waitElementVisible(e,function(){t&&t(),n.removeAttribute("lazyload")},CONFIG.lazyload.offset_factor)}else t&&t()}};