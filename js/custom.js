!function(){var t=document.getElementsByTagName("time");if(0!==t.length){var e=document.getElementsByClassName("post-content");if(0!==e.length){var n=new Date(t[0].dateTime),o=new Date(t[1].dateTime),a=o.getTime()===n.getTime()?"发布":"更新",i=Date.now(),s=parseInt(i-o);if(s>7776e6){var c=parseInt(s/864e5);e[0].innerHTML='<div class="note note-warning" style="font-size:0.9rem"><p><div class="h6">文章时效性提示</div><p>这是一篇'+a+"于 "+c+" 天前的文章，部分信息可能已发生改变，请注意甄别。</p></p></div>"+e[0].innerHTML}}}}(),lazyload(),function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),"cuojue.org"!=document.domain&&"localhost"!=document.domain&&(window.location.href="https://cuojue.org"),top.location!=self.location&&(top.location=self.location);