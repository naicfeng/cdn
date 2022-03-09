!function(window,document){function getRecord(a,c){return new Promise(function(n,o){a("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({target:c}))).then(e=>e.json()).then(({results:e,code:t,error:r})=>{if(401===t)throw r;e&&0<e.length?(t=e[0],n(t)):a("post","/classes/Counter",{target:c,time:0}).then(e=>e.json()).then((e,t)=>{if(t)throw t;n(e)}).catch(e=>{console.error("Failed to create",e),o(e)})}).catch(e=>{console.error("LeanCloud Counter Error:",e),o(e)})})}function increment(e,n){new Promise(function(t,r){e("post","/batch",{requests:n}).then(e=>{if((e=e.json()).error)throw e.error;t(e)}).catch(e=>{console.error("Failed to save visitor count",e),r(e)})})}function buildIncrement(e){return{method:"PUT",path:"/1.1/classes/Counter/"+e,body:{time:{__op:"Increment",amount:1}}}}function validHost(){if(CONFIG.web_analytics.leancloud.ignore_local){var e=window.location.hostname;if("localhost"===e||"127.0.0.1"===e)return!1}return!0}function validUV(){var e="LeanCloud_UV_Flag",t=localStorage.getItem(e);return!(t&&(new Date).getTime()-parseInt(t,10)<=864e5)&&(localStorage.setItem(e,(new Date).getTime().toString()),!0)}function addCount(Counter){var enableIncr=CONFIG.web_analytics.enable&&validHost(),getterArr=[],incrArr=[],pvCtn=document.querySelector("#leancloud-site-pv-container"),pvGetter,uvCtn=(pvCtn&&(pvGetter=getRecord(Counter,"site-pv").then(e=>{enableIncr&&incrArr.push(buildIncrement(e.objectId));var t=document.querySelector("#leancloud-site-pv");t&&(t.innerText=(e.time||0)+(enableIncr?1:0),pvCtn.style.display="inline")}),getterArr.push(pvGetter)),document.querySelector("#leancloud-site-uv-container")),uvGetter,viewCtn=(uvCtn&&(uvGetter=getRecord(Counter,"site-uv").then(e=>{var t=validUV()&&enableIncr,r=(t&&incrArr.push(buildIncrement(e.objectId)),document.querySelector("#leancloud-site-uv"));r&&(r.innerText=(e.time||0)+(t?1:0),uvCtn.style.display="inline")}),getterArr.push(uvGetter)),document.querySelector("#leancloud-page-views-container")),path,target,viewGetter;viewCtn&&(path=eval(CONFIG.web_analytics.leancloud.path||"window.location.pathname"),target=decodeURI(path.replace(/\/*(index.html)?$/,"/")),viewGetter=getRecord(Counter,target).then(e=>{enableIncr&&incrArr.push(buildIncrement(e.objectId));var t=document.querySelector("#leancloud-page-views");t&&(t.innerText=(e.time||0)+(enableIncr?1:0),viewCtn.style.display="inline")}),getterArr.push(viewGetter)),enableIncr&&Promise.all(getterArr).then(()=>{0<incrArr.length&&increment(Counter,incrArr)})}var appId=CONFIG.web_analytics.leancloud.app_id,appKey=CONFIG.web_analytics.leancloud.app_key,serverUrl=CONFIG.web_analytics.leancloud.server_url;if(!appId)throw new Error("LeanCloud appId is empty");if(!appKey)throw new Error("LeanCloud appKey is empty");function fetchData(n){addCount((e,t,r)=>fetch(n+"/1.1"+t,{method:e,headers:{"X-LC-Id":appId,"X-LC-Key":appKey,"Content-Type":"application/json"},body:JSON.stringify(r)}))}var apiServer="-MdYXbMMI"!==appId.slice(-9)?serverUrl:`https://${appId.slice(0,8).toLowerCase()}.api.lncldglobal.com`;apiServer?fetchData(apiServer):fetch("https://app-router.leancloud.cn/2/route?appId="+appId).then(e=>e.json()).then(e=>{e.api_server&&fetchData("https://"+e.api_server)})}(window,document);