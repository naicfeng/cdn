(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{4167:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(46),i=a.n(r),l=a(13),c=a(85),s=a(66),d=a(6),u=a(7),h=a(9),p=a(8),m=a(10),g=a(84),f=a.n(g),w=a(5),v=a(64),b=a(65),j=a(1),E=a(37),k=a.n(E),y=a(2),O=a(34),x=a.n(O),S=a(18),I={html:"text/html",sql:"text/html",go:"go",py:"python",js:"javascript",json:"text/json",c:"clike",cpp:"clike",css:"css",txt:"text/html"},L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={val:""},a.componentWillReceiveProps=function(e){a.props.save!==e.save&&a.save()},a.save=function(){x.a.post("/File/Edit",{item:window.fileInfo.path,content:window.document.getElementById("val").value}).then(function(e){e.data.result.success?a.props.toggleSnackbar("top","right","\u6587\u4ef6\u5df2\u4fdd\u5b58","success"):a.props.toggleSnackbar("top","right",e.data.result.error,"error")}).catch(function(e){a.props.toggleSnackbar("top","right",e.message,"error")})},a.componentDidMount=function(){var e=window.fileInfo.name.split(".").pop().toLowerCase();if("md"===e)window.editormd("editormd",{path:"/static/js/mdeditor/lib/",height:740,tex:!0,toolbarIcons:function(){return["undo","redo","|","bold","del","italic","quote","|","h1","h2","h3","h4","h5","h6","|","list-ul","list-ol","hr","|","link","reference-link","image","code","preformatted-text","code-block","table","datetime","html-entities","pagebreak","|","goto-line","watch","clear","search","|","help","info"]}});else if(-1!==S.a.indexOf(e))window.editormd("editormd",{path:"/static/js/mdeditor/lib/",height:740,watch:!1,toolbar:!1,codeFold:!0,searchReplace:!0,placeholder:"Enjoy coding!",mode:I[e]});x.a.get(window.fileInfo.url).then(function(e){e.data.result.hasOwnProperty("success")?a.props.toggleSnackbar("top","right",e.data.result.error,"error"):a.setState({val:e.data.result})}).catch(function(e){a.props.toggleSnackbar("top","right",e.message,"error")})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({val:e.target.value})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.layout},o.a.createElement(k.a,{className:e.root,elevation:1},o.a.createElement("div",{id:"editormd"},o.a.createElement("textarea",{id:"val",value:this.state.val,onChange:this.handleChange}))))}}]),t}(n.Component),M=Object(l.b)(function(e){return{save:e.explorer.fileSave}},function(e){return{toggleSnackbar:function(t,a,n,o){e(Object(y.B)(t,a,n,o))}}})(Object(w.withStyles)(function(e){return{layout:Object(j.a)({width:"auto",marginTop:"30px",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"})}})(L)),P=Object(w.createMuiTheme)(window.colorTheme),C=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.MuiThemeProvider,{theme:P},o.a.createElement("div",{className:e.root,id:"container"},o.a.createElement(f.a,null),o.a.createElement(b.a,null),o.a.createElement(v.a,null),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.toolbar}),o.a.createElement(M,null)))))}}]),t}(n.Component),F=Object(w.withStyles)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:0*e.spacing.unit,minWidth:0},toolbar:e.mixins.toolbar}})(C),N={navigator:{path:window.path,refresh:!0},viewUpdate:{open:window.isHomePage,explorerViewMethod:"icon",sortMethod:"timePos",contextType:"none",menuOpen:!1,navigatorLoading:!0,navigatorError:!1,navigatorErrorMsg:null,modalsLoading:!1,storageRefresh:!1,modals:{createNewFolder:!1,rename:!1,move:!1,remove:!1,share:!1,music:!1,remoteDownload:!1,torrentDownload:!1},snackbar:{toggle:!1,vertical:"top",horizontal:"center",msg:"",color:""}},explorer:{fileList:[],fileSave:!1,dirList:[],selected:[{path:"/",name:window.fileInfo.name,type:"file"}],selectProps:{isMultiple:!1,withFolder:!1,withFile:!0},imgPreview:{first:null,other:[]},keywords:null}},R=Object(c.b)(s.a,N);i.a.render(o.a.createElement(l.a,{store:R},o.a.createElement(F,null)),document.getElementById("root"))}},[[4167,24,0,2]]]);
