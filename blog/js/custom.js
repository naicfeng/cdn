(function () {
  var times = document.getElementsByTagName('time');
  if (times.length === 0) { return; }
  var posts = document.getElementsByClassName('post-content');
  if (posts.length === 0) { return; }

  var pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
  var lupTime = new Date(times[1].dateTime);  /* 文章更新时间戳 */
  var showtext = lupTime.getTime() === pubTime.getTime() ? '发布' : '更新';
  var now = Date.now()  /* 当前时间戳 */
  var interval = parseInt(now - lupTime)
  /* 发布时间超过指定时间（毫秒） */
  if (interval > 3600 * 24 * 90 * 1000) {
    var days = parseInt(interval / 86400000)
    posts[0].insertAdjacentHTML('afterbegin', '<div class="note note-warning" style="font-size:0.9rem"><p>' +
      '<div class="h6">文章时效性提示</div><p>这是一篇' + showtext + '于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。' +
      '</p></p></div>');
  }
  //if (document.domain != 'cuojue.org' && document.domain != 'localhost')window.location.href='https://cuojue.org';
  if (top.location != self.location) top.location = self.location;
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
(function (window, document, navigator) {
  var screen = window.screen,
    encode = encodeURIComponent,
    max = Math.max,
    //min = Math.min,
    performance = window.performance,
    useNewPerformanceAPI = "getEntriesByType" in performance && "getEntriesByName" in performance,
    t = useNewPerformanceAPI ? performance.getEntriesByType("navigation")[0] : performance.timing,
    startTime = useNewPerformanceAPI ? t.startTime : t.navigationStart,
    filterNumber = function (num) { return isNaN(num) || num == Infinity || num < 0 ? void 0 : num; },
    randomStr = function (num) { return Math.random().toString(36).slice(-num); },
    randomNum = function (num) { return Math.ceil(Math.random() * (num - 1)) + 1; };

  // sendLove: collect data and send.
  function sendLove() {
    var pv_data = [
      // Random String against Easy Privacy
      randomStr(randomNum(4)) + '=' + randomStr(randomNum(6)),
      // GA tid
      'love=' + 'UA-77075137-1',
      // Title
      'dt=' + encode(document.title),
      // Document Encoding
      'de=' + encode(document.characterSet || document.charset),
      // Referrer
      'dr=' + encode(document.referrer),
      // Language
      'ul=' + (navigator.language || navigator.browserLanguage || navigator.userLanguage),
      // Color Depth
      'sd=' + screen.colorDepth + '-bit',
      // Screen Size
      'sr=' + screen.width + 'x' + screen.height,
      // Display
      'vp=' + max(document.documentElement.clientWidth, window.innerWidth || 0) + 'x' + max(document.documentElement.clientHeight, window.innerHeight || 0),
      // plt: Page Loading Time
      // open the page => window.onload
      // (window.onload)
      'plt=' + filterNumber(t.loadEventStart - startTime || 0),
      // dns: DNS Time
      'dns=' + filterNumber(t.domainLookupEnd - t.domainLookupStart || 0),
      // pdt: Page Dowenload Time
      // start download time => finish download time
      'pdt=' + filterNumber(t.responseEnd - t.responseStart || 0),
      // rrt: Redirect Time
      'rrt=' + filterNumber(t.redirectEnd - t.redirectStart || 0),
      // tcp: TCP Time
      'tcp=' + filterNumber(t.connectEnd - t.connectStart || 0),
      // srt: Server Response Time
      // start request => server send first byte
      // (TTFB - TCP - DNS)
      'srt=' + filterNumber(t.responseStart - t.requestStart || 0),
      // dit: DOM Interactive Time
      'dit=' + filterNumber(t.domInteractive - t.domLoading || 0),
      // clt: Content Loading Time
      // open the page => DOMContentLoaded
      'clt=' + filterNumber(t.domContentLoadedEventStart - startTime || 0),
      'z=' + Date.now()
    ];

    window.__love_img = new Image();
    window.__love_img.src = 'https://love.cuojue.workers.dev/?' + pv_data.join('&');
  }

  window.love = sendLove;

  if (document.readyState === 'complete') {
    sendLove();
  } else {
    window.addEventListener('load', sendLove);
  }
})(window, document, navigator);