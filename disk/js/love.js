(function(window,document,navigator){var screen=window.screen,encode=encodeURIComponent,max=Math.max,performance=window.performance,useNewPerformanceAPI="getEntriesByType"in performance&&"getEntriesByName"in performance,t=useNewPerformanceAPI?performance.getEntriesByType("navigation")[0]:performance.timing,startTime=useNewPerformanceAPI?t.startTime:t.navigationStart,filterNumber=function(num){return isNaN(num)||num==Infinity||num<0?void 0:num},randomStr=function(num){return Math.random().toString(36).slice(-num)},randomNum=function(num){return Math.ceil(Math.random()*(num-1))+1};function sendLove(){var pv_data=[randomStr(randomNum(4))+'='+randomStr(randomNum(6)),'love=UA-77075137-2','dt='+encode(document.title),'dl='+encode(window.location.href),'de='+encode(document.characterSet||document.charset),'dr='+encode(document.referrer),'ul='+(navigator.language||navigator.browserLanguage||navigator.userLanguage),'sd='+screen.colorDepth+'-bit','sr='+screen.width+'x'+screen.height,'vp='+max(document.documentElement.clientWidth,window.innerWidth||0)+'x'+max(document.documentElement.clientHeight,window.innerHeight||0),'plt='+filterNumber(t.loadEventStart-startTime||0),'dns='+filterNumber(t.domainLookupEnd-t.domainLookupStart||0),'pdt='+filterNumber(t.responseEnd-t.responseStart||0),'rrt='+filterNumber(t.redirectEnd-t.redirectStart||0),'tcp='+filterNumber(t.connectEnd-t.connectStart||0),'srt='+filterNumber(t.responseStart-t.requestStart||0),'dit='+filterNumber(t.domInteractive-t.domLoading||0),'clt='+filterNumber(t.domContentLoadedEventStart-startTime||0),'z='+Date.now()];window.__love_img=new Image();window.__love_img.src='https://love.cuojue.workers.dev/?'+pv_data.join('&')}window.love=sendLove;if(document.readyState==='complete'){sendLove()}else{window.addEventListener('load',sendLove)}})(window,document,navigator);