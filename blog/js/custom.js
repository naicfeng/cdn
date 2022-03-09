(function() {
  var times = document.getElementsByTagName('time');
  if (times.length === 0) { return; }
  var posts = document.getElementsByClassName('post-content');
  if (posts.length === 0) { return; }

  var pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
  var lupTime = new Date(times[1].dateTime);  /* 文章更新时间戳 */
  var showtext = lupTime.getTime() === pubTime.getTime()?'发布':'更新';
  var now = Date.now()  /* 当前时间戳 */
  var interval = parseInt(now - lupTime)
  /* 发布时间超过指定时间（毫秒） */
  if (interval > 3600*24*90*1000){
    var days = parseInt(interval / 86400000)
    posts[0].insertAdjacentHTML('afterbegin', '<div class="note note-warning" style="font-size:0.9rem"><p>' +
      '<div class="h6">文章时效性提示</div><p>这是一篇' + showtext + '于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。' +
      '</p></p></div>');
  }
	//if (document.domain != 'cuojue.org' && document.domain != 'localhost')window.location.href='https://cuojue.org';
	if (top.location != self.location)top.location=self.location;
//	var dynamicLoading = {
//		css: function(path){
//				if(!path || path.length === 0){
//				  throw new Error('argument "path" is required !');
//				}
//				var head = document.getElementsByTagName('head')[0];
//				var link = document.createElement('link');
//				link.href = path;
//				link.rel = 'stylesheet';
//				link.type = 'text/css';
//				head.appendChild(link);
//		  },
//		js: function(path){
//			if(!path || path.length === 0){
//			  throw new Error('argument "path" is required !');
//			}
//			var head = document.getElementsByTagName('head')[0];
//			var script = document.createElement('script');
//			script.src = path;
//			script.type = 'text/javascript';
//			head.appendChild(script);
//		  }
//	}
//	if(document.getElementById("hexo-blog-encrypt")){
//		const mainElement = document.getElementById('hexo-blog-encrypt');
//		mainElement.setAttribute('data-wpm','抱歉, 这个密码看着不太对, 请再试试.');
//		mainElement.setAttribute('data-whm','抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.');
//		//动态加载 CSS 文件
//		dynamicLoading.css("/css/hbe.style.css");
//		//动态加载 JS 文件
//		dynamicLoading.js("/lib/hbe.js");
//	}
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
