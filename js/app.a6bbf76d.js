(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0431a037":"a937af51","chunk-2d0a45cd":"32d5a53e","chunk-2d0da5be":"7f72342b","chunk-304dce62":"d4428265","chunk-53fd742b":"c70eb3de","chunk-75404907":"489b66b3","chunk-99f3e926":"be7ad64c","chunk-f1f9a57c":"3263d56a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0431a037":1,"chunk-304dce62":1,"chunk-53fd742b":1,"chunk-75404907":1,"chunk-99f3e926":1,"chunk-f1f9a57c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0431a037":"b359ab96","chunk-2d0a45cd":"31d6cfe0","chunk-2d0da5be":"31d6cfe0","chunk-304dce62":"6cab0ee7","chunk-53fd742b":"9c81ca9b","chunk-75404907":"43ee3386","chunk-99f3e926":"25482a66","chunk-f1f9a57c":"8cfd4996"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"39d7":function(e,t,n){},"478b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main",attrs:{id:"main"}},[n("router-view")],1)},o=[],i={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}},u=i,c=n("2877"),s=Object(c["a"])(u,a,o,!1,null,"8361ed66",null),l=s.exports,d=n("2909"),f=(n("a434"),n("b0c0"),n("53ca")),p=n("b85c"),h=(n("ac1f"),n("1276"),n("159b"),n("4de4"),n("d81d"),n("99af"),n("7db0"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0"),n("4d63"),n("25f0"),n("fb6a"),n("b680"),n("5319"),n("a15b"),n("c35a"),n("a9e3"),n("2b3d"),n("841c"),n("466d"),n("caad"),n("2532"),n("5530")),m=n("f753"),g=n.n(m);r["a"].prototype.$http=g.a;g.a.defaults.headers["Content-Type"]="application/json;charset=UTF-8";var v=g.a.create({timeout:12e4,transformRequest:[function(e,t){return window.localStorage.getItem("userAppInfo")?t.Authorization=JSON.parse(window.localStorage.getItem("userAppInfo")).token:t.Authorization="",JSON.stringify(e)}],transformResponse:[function(e,t){if(t.authorization||t.Authorization){var n=JSON.parse(window.localStorage.getItem("userAppInfo"));n.token=t.authorization||t.Authorization,window.localStorage.setItem("userAppInfo",JSON.stringify(n))}var r;return e&&(r=0==e.indexOf("{")?JSON.parse(e):e),r}]});g.a.CancelToken;var b={CancelToken:g.a.CancelToken,cancelQueue:[],add:function(e){e.cancelToken=new b.CancelToken((function(e){b.cancelQueue.push(e)}))},delete:function(){b.cancelQueue.forEach((function(e,t){e()})),b.cancelQueue.splice(0)}},w=function(e){var t={};return t["t"]=Date.now(),e=Object.assign(e||{},t),e};v.interceptors.request.use((function(e){b.add(e);var t=e.params,n=(e.data,e.method);return"get"===n&&(e.params=w(t)),e})),v.interceptors.response.use((function(e){var t=e.data;switch(t.code){case"TK01":be.push("/login"),b.delete();break;case"TK02":be.push("/login"),b.delete();break;case"TK05":be.push("/login"),b.delete();break}return e}),(function(e){if(console.log(e.message.includes("504")),e.message.includes("504"))return Promise.reject(e)}));for(var O=["post","get","put"],y={},S=function(e){var t=O[e];y[t]=function(e,n){return new Promise((function(r,a){v[t](e,n).then((function(e){r(e)}),(function(t){g.a.isCancel(t)?console.log("频繁请求：url",e):a(t)}))}))},y.postConfig=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,a){v.post(e,t,n).then((function(e){r(e.data)})).catch((function(e){a(e)}))}))}},N=0;N<O.length;N++)S(N);var k=y,L=k,T=function(e,t){return function(n){return k.get(e,Object(h["a"])({params:n},t))}},C={interfacePath:function(){var e="/";switch(location.hostname){case"119.3.27.90":e="http://119.3.27.90/api";break;case"122.9.81.224":e="http://122.9.81.224/api";break;case"itg.e-raising.cn":e="https://itg.e-raising.cn";break;case"scc.itg.com.cn":e="https://scc.itg.com.cn/api";break;case"172.20.13.3":e="http://172.20.13.3/api";break;case"172.20.13.131":e="http://172.20.13.131/api";break;default:e="http://172.20.13.131/api"}return{server:e,basic:e+"/basic",member:e+"/member",openApi:e+"/openapi",fileServer:e+"/openapi/n/file/",fileServerDownload:e+"/openapi/n/file/downloadFile/"}}()};window.common=C;var x=C,P=(x.interfacePath.server,{axios:L}),R=function(e){return function(){return n("627e")("./views".concat(e,".vue"))}},A=function(e,t){e&&("string"!==typeof t&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t))},I=function(e){if(e){var t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return t}}},j=[],D=n("7736"),M=n("cd56"),$=[{path:"order",meta:{title:"订单",needFooter:!0},name:"order",component:function(){return n.e("chunk-75404907").then(n.bind(null,"7915"))}},{path:"order-detail",meta:{title:"详情"},name:"order-detail",component:function(){return n.e("chunk-2d0a45cd").then(n.bind(null,"05b4"))}}],E=[{path:"stock",meta:{title:"库存",needFooter:!0},name:"stock",component:function(){return n.e("chunk-2d0da5be").then(n.bind(null,"6aeb"))}}],F={path:"/login",name:"login",meta:{title:"登录 "},component:function(){return n.e("chunk-0431a037").then(n.bind(null,"dd7b"))}},_={path:"/403",meta:{title:"403-权限不足"},name:"error-403",component:function(){return n.e("chunk-53fd742b").then(n.bind(null,"5140"))}},B={path:"/500",meta:{title:"500-服务端错误"},name:"error-500",component:function(){return n.e("chunk-304dce62").then(n.bind(null,"721c"))}},J={path:"/",name:"otherRouter",redirect:"/home",component:M["default"],children:[{path:"home",meta:{title:"首页",needFooter:!0},name:"home_index",component:function(){return n.e("chunk-f1f9a57c").then(n.bind(null,"77b8"))}}].concat(Object(d["a"])($),Object(d["a"])(E))},q=[],U=[F,J].concat(q,[B,_]),H={state:{loading:!1,added:!1,navList:[],currNav:"",currNavTitle:"",cachePage:[],lang:"",isFullScreen:!1,openedSubmenuArr:[],menuTheme:"dark",themeColor:"",pageOpenedList:[],currentPageName:"",currentPath:[{title:"首页",path:"",name:"home_index"}],menuList:[],routers:[J],tagsList:Object(d["a"])(J.children),noClosableTagList:[],messageCount:0,dontCache:["test","test"],listTableHeight:536,mercusData:"null"},getters:{noClosableTagList:function(e){return e.noClosableTagList}},mutations:{updateAppRouter:function(e,t){var n;(n=e.routers).push.apply(n,Object(d["a"])(t)),be.addRoutes(t);var r=t.find((function(e){return"工作台"==e.title}));r&&r.children&&r.children.length?(e.noClosableTagList.push(r.children[0].name),e.pageOpenedList.find((function(e){return"home_index"==e.name}))&&(e.pageOpenedList.map((function(t,n){"home_index"==t.name&&e.pageOpenedList.splice(n,1)})),e.cachePage.indexOf("home_index")&&(e.cachePage.splice(e.cachePage.indexOf("home_index"),1),localStorage.cachePage=JSON.stringify(e.cachePage))),be.push({path:r.children[0].path})):(e.noClosableTagList.push("home_index"),be.push({name:"home_index"}))},updateDefaultRouter:function(e,t){be.addRoutes(t)},setLoading:function(e,t){e.loading=t},mercusData:function(e,t){e.mercusData=t},setAdded:function(e,t){e.added=t},setNavList:function(e,t){e.navList=t},setCurrNav:function(e,t){e.currNav=t},setCurrNavTitle:function(e,t){e.currNavTitle=t},setTagsList:function(e,t){var n;(n=e.tagsList).push.apply(n,Object(d["a"])(t))},updateMenulist:function(e,t){e.menuList=t},addOpenSubmenu:function(e,t){var n=!1,r=!1;0==t.length&&(r=!0),e.openedSubmenuArr.indexOf(t)>-1&&(n=!0),n||r||e.openedSubmenuArr.push(t)},closePage:function(e,t){e.cachePage.forEach((function(n,r){n==t&&e.cachePage.splice(r,1)}))},initCachepage:function(e){localStorage.cachePage&&(e.cachePage=JSON.parse(localStorage.cachePage))},removeTag:function(e,t){e.pageOpenedList.map((function(n,r){n.name==t&&e.pageOpenedList.splice(r,1)})),e.cachePage.indexOf(t)&&(e.cachePage.splice(e.cachePage.indexOf(t),1),localStorage.cachePage=JSON.stringify(e.cachePage))},pageOpenedList:function(e,t){var n=e.pageOpenedList[t.index];t.argu&&(n.argu=t.argu),t.query&&(n.query=t.query),e.pageOpenedList.splice(t.index,1,n),localStorage.pageOpenedList=JSON.stringify(e.pageOpenedList)},clearAllTags:function(e){var t=[];e.pageOpenedList.forEach((function(n){e.noClosableTagList.find((function(e){return e==n.name}))&&t.push(n)})),e.pageOpenedList=t,e.cachePage.length=0,localStorage.pageOpenedList=JSON.stringify(e.pageOpenedList)},clearOtherTags:function(e,t){var n=t.$route.name,r=0;e.pageOpenedList.forEach((function(e,t){e.name==n&&(r=t)})),0==r?e.pageOpenedList.splice(1):(e.pageOpenedList.splice(r+1),e.pageOpenedList.splice(1,r-1));var a=e.cachePage.filter((function(e){return e==n}));e.cachePage=a,localStorage.pageOpenedList=JSON.stringify(e.pageOpenedList)},setOpenedList:function(e){e.pageOpenedList=localStorage.pageOpenedList?ne.getStore("pageOpenedList"):[]},setCurrentPath:function(e,t){e.currentPath=t},setCurrentPageName:function(e,t){e.currentPageName=t},setAvatarPath:function(e,t){localStorage.avatarImgPath=t},switchLang:function(e,t){e.lang=t,r["a"].config.lang=t},clearOpenedSubmenu:function(e){e.openedSubmenuArr.length=0},setMessageCount:function(e,t){e.messageCount=t},increateTag:function(e,t){ne.oneOf(t.name,e.dontCache)||(e.cachePage.push(t.name),localStorage.cachePage=JSON.stringify(e.cachePage)),e.pageOpenedList.push(t),localStorage.pageOpenedList=JSON.stringify(e.pageOpenedList)}}},V=H,W={state:{userInfo:{}},getters:{userInfo:function(e){return"{}"!==JSON.stringify(e.userInfo)?e.userInfo:I("userInfo")||{}}},mutations:{logout:function(){window.localStorage.removeItem("userAppInfo")},setUserInfo:function(e,t){e.userInfo=t}},actions:{}},z=W,Q={state:{sex:[]},getter:{},mutations:{setSex:function(e,t){e.sex=t}},actions:{}},Y=Q,K={state:{drawerWidth:1e3},getters:{drawerWidth:function(e){return e.drawerWidth}},mutations:{setDrawerWidth:function(e,t){e.drawerWidth=t}},actions:{setDrawerWidth:function(e,t){var n=e.commit;n("setDrawerWidth",t)}}},X={state:{currentValueSetCode:[],valueSet:{}},getters:{currentValueSetCode:function(e){return e.valueSet}},mutations:{setValueSetCode:function(e,t){e.valueSet=t||{}}},actions:{setValueSetCode:function(e,t){var n=e.commit;n("setValueSetCode",t)}}};r["a"].use(D["a"]);var G=new D["a"].Store({state:{department:{},storgeList:[]},mutations:{departmentSet:function(e,t){e.department=t},storgeListSet:function(e,t){var n=e.storgeList.find((function(e){return e.path==t.path}));n?e.storgeList.forEach((function(e){t})):e.storgeList.push(t),console.log(e.storgeList)}},actions:{departmentAct:function(e,t){var n=e.commit;n("departmentSet",t)},storgeListAct:function(e,t){var n=e.commit;n("storgeListSet",t)}},modules:{app:V,user:z,dict:Y,cpnt:K,codeValue:X}}),Z=G,ee={getStore:I,setStore:A};function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!==Object(f["a"])(e))return e;if(t.has(e))return t.get(e);var n=new e.constructor;for(var r in t.set(e,n),e)e.hasOwnProperty(r)&&(n[r]=te(e[r],t));return n}ee.spin=function(e){e?(void 0).openSpin():(void 0).closeSpin()},ee.formatMonth=function(e){if(null==e||""===e)return"";var t=new Date(e),n=t.getMonth()+1;return n<10&&(n="0"+n),t.getFullYear()+"-"+n},ee.formatMonthT=function(e){if(null==e||""===e)return"";var t=new Date(e),n=t.getMonth()+1;return n<10&&(n="0"+n),t.getFullYear()+""+n},ee.formatMonthReport=function(){var e=new Date,t=e.getMonth()+1;return t<10&&(t="0"+t),e.getFullYear()+t},ee.formatDate=function(e){if(null==e||""==e)return"";var t=new Date(e),n=t.getMonth()+1;n<10&&(n="0"+n);var r=t.getDate();return r<10&&(r="0"+r),t.getFullYear()+"-"+n+"-"+r},ee.formatDateTime=function(e){function t(e){return e<10?"0"+e:e}var n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),i=n.getHours(),u=n.getMinutes(),c=n.getSeconds();return r+"-"+t(a)+"-"+t(o)+" "+t(i)+":"+t(u)+":"+t(c)},ee.formatDuring=function(e){var t=parseInt(e/36e5),n=parseInt(e%36e5/6e4),r=parseInt(e%6e4/1e3),a=o(t)+":"+o(n)+":"+o(r);return a;function o(e){return e<10?"0"+e:e}},ee.getThreeMonths=function(e){var t=e.split("-"),n=parseInt(t[0]),r=parseInt(t[1]),a=parseInt(t[2]),o=new Date(n,r-4,a);return o.valueOf()},ee.getThreeMonthsAfter=function(e){var t=e.split("-"),n=parseInt(t[0]),r=parseInt(t[1]),a=parseInt(t[2]),o=new Date(n,r+2,a);return o.valueOf()},ee.title=function(e){e=e||"",window.document.title=e},ee.inOf=function(e,t){var n=!0;return e.forEach((function(e){t.indexOf(e)<0&&(n=!1)})),n},ee.getToken=function(){return I("userAppInfo").token},ee.getuserAppInfo=function(){return I("userAppInfo")},ee.getPageStorge=function(e,t){var n=e.$store.state.storgeList;n.forEach((function(e){return e.path==t&&e}))},ee.setuserAppInfo=function(e){A("userAppInfo",e)},ee.oneOf=function(e,t){return t.indexOf(e)>=0},ee.getRouterObjByName=function(e,t){if(!t||!e||!e.length)return null;var n,r=null,a=Object(p["a"])(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;if(o.name===t)return o;if(r=ee.getRouterObjByName(o.children,t),r)return r}}catch(i){a.e(i)}finally{a.f()}return null},ee.handleTitle=function(e,t){return"object"==Object(f["a"])(t.title)?e.$t(t.title.i18n):t.title},ee.setCurrentPath=function(e,t){var n="",r=!1;e.$store.state.app.routers.forEach((function(a){var o=this,i="children";"Array"===this.getRealType(a[i])&&a[i].forEach((function(i){i.name===t&&(n=o.handleTitle(e,i),"otherRouter"===a.name&&(r=!0))}),this)}),this);var a=[];if("home_index"===t)a=[{title:ee.handleTitle(e,ee.getRouterObjByName(e.$store.state.app.routers,"home_index")),path:"",name:"home_index"}];else if((t.indexOf("_index")>=0||r)&&"home_index"!==t)a=[{title:ee.handleTitle(e,ee.getRouterObjByName(e.$store.state.app.routers,"home_index")),path:"/home",name:"home_index"},{title:n,path:"",name:t}];else{var o=e.$store.state.app.routers.filter((function(e){if(e.children.length<=1)return e.children[0].name===t;var n=0,r=e.children,a=r.length;while(n<a){if(r[n].name===t)return!0;n++}return!1}))[0];if(o.children.length<=1&&"home"===o.name)a=[{title:"首页",path:"",name:"home_index"}];else if(o.children.length<=1&&"home"!==o.name)a=[{title:"首页",path:"/home",name:"home_index"},{title:o.title,path:"",name:t}];else{var i=o.children.filter((function(e){return e.name===t}))[0];a=[{title:"首页",path:"/home",name:"home_index"},{title:o.title,path:"",name:o.name},{title:i.title,path:o.path+"/"+i.path,name:t}]}}return e.$store.commit("setCurrentPath",a),a},ee.openNewPage=function(e,t,n,r){var a=t.name;if(e.$store){A("currentOnlcikMenuNo",t.path);var o=e.$store.state.app.pageOpenedList,i=o.length,u=0,c=!1;while(u<i){if(a===o[u].name){e.$store.commit("pageOpenedList",{index:u,argu:n,query:r}),c=!0;break}u++}if(!c){var s=e.$store.state.app.tagsList.filter((function(e){return e.children&&e.children[0]?a===e.children[0].name:(e.name,a===e.name)}));s=s[0],s&&(s=s.children&&s.children[0]?s.children[0]:s,n&&(s.argu=n),r&&(s.query=r),e.$store.commit("increateTag",s))}e.$store.commit("setCurrentPageName",a)}},ee.toDefaultPage=function(e,t,n,r){var a=!0;a&&r()},ee.fullscreenEvent=function(e){e.$store.commit("initCachepage")},ee.initRouter=function(e){var t=[],n=[],r=[{path:"/*",name:"error-404",meta:{title:"404-页面不存在"},component:"/error-page/404"}],a=I("userAppInfo");if(a){var o=null==window.localStorage.getItem("menuData")||e.getStore("refreshLeftMenuFlag");if(o){e.getStore("refreshLeftMenuFlag")&&e.setStore("refreshLeftMenuFlag",!1);var i=e.getStore("currentCompany")||{},u=e.getStore("userAppInfo")||{},c=u.empId;P.getMenuList({sysType:"01",sysCode:"02",empId:c,companyId:i.orgId}).then((function(a){if(a=a.data,a.success){var o=a.data.menuButtonTreeDTOS;function i(e){"Array"==ee.getRealType(e.children)&&e.children.map((function(e){e.title=e.elementName,e.component=e.elementUrl,e.name=e.elementNo,e.path=e.elementNo,e.hidden="1"!=e.visibleFlag}))}o.forEach((function(e){e.title=e.elementName,e.component=e.elementUrl,e.name=e.elementNo,e.path=e.elementNo,e.hidden="1"!=e.visibleFlag,e.children=e.menuButtonTreeDTOS||[],e.children.length&&i(e)}));var u=o.reduce((function(e,t){var n=t.menuButtonTreeDTOS.reduce((function(e,t){var n=t.menuButtonTreeDTOS?t.menuButtonTreeDTOS.filter((function(e){return"button"==e.elementType})):[];return[].concat(Object(d["a"])(e),Object(d["a"])(n))}),[]);return[].concat(Object(d["a"])(e),Object(d["a"])(n))}),[]);A("btnList",u),o=[{type:-1,children:o}],o&&(ee.initAllMenuData(t,o),ee.initRouterNode(n,r),e.$store.commit("updateAppRouter",t.filter((function(e){if("Array"==ee.getRealType(e.children))return e.children.length>0}))),e.$store.commit("updateDefaultRouter",n),ee.initMenuData(e,o),A("menuData",JSON.stringify(o))),e.$store.commit("setAdded",!0)}else ee.initRouterNode(n,r),e.$store.commit("updateAppRouter","[]"),e.$store.commit("updateDefaultRouter",n),A("menuData","[]"),e.$store.commit("setAdded",!0)}))}else{var s=window.localStorage.getItem("menuData");if(!s)return void e.$store.commit("setAdded",!1);var l=JSON.parse(s);ee.initAllMenuData(t,l),ee.initRouterNode(n,r),e.$store.commit("updateAppRouter",t.filter((function(e){if("Array"==ee.getRealType(e.children))return e.children.length>0}))),e.$store.commit("updateDefaultRouter",n),ee.initMenuData(e,l),A("menuData",JSON.stringify(l))}}},ee.initAllMenuData=function(e,t){var n=[];t.forEach((function(e){-1===e.type&&e.children.forEach((function(e){n.push(e)}))})),ee.initRouterNode(e,n)},ee.initMenuData=function(e,t){var n,r=[],a=t,o=[];if(a.forEach((function(e){var t={name:e.name,title:e.title,icon:e.icon};o.push(t)})),!(o.length<1)){e.$store.commit("setNavList",o);var i=window.localStorage.getItem("currNav");if(i){var u,c=Object(p["a"])(o);try{for(c.s();!(u=c.n()).done;)if(n=u.value,n.name===i){e.$store.commit("setCurrNavTitle",n.title);break}}catch(h){c.e(h)}finally{c.f()}}else i=o[0].name,e.$store.commit("setCurrNavTitle",o[0].title);e.$store.commit("setCurrNav",i);var s,l=Object(p["a"])(a);try{for(l.s();!(s=l.n()).done;)if(n=s.value,n.name===i){a=n.children;break}}catch(h){l.e(h)}finally{l.f()}ee.initRouterNode(r,a),e.$store.commit("updateMenulist",r.filter((function(e){if("Array"==ee.getRealType(e.children))return e.children.length>0})));var f=[];"Array"===this.getRealType(e.$store.state.app.routers)&&e.$store.state.app.routers.map((function(e){e.children.length<=1?f.push(e.children[0]):f.push.apply(f,Object(d["a"])(e.children))})),e.$store.commit("setTagsList",f)}},ee.initRouterNode=function(e,t){var n,r=Object(p["a"])(t);try{var a=function(){var t=n.value,r=Object.assign({},t);r.component=R(r.component),t.children&&t.children.length>0&&(r.children=[],ee.initRouterNode(r.children,t.children));var a={},o=[];r.buttons&&r.buttons.forEach((function(e){o.push(e.name)})),a.permTypes=o||null,a.title=r.title?r.title+"":null,a.url=r.url?r.url:null,a.keepAlive=!!j.find((function(e){return e==t.name})),r.meta=a,e.push(r)};for(r.s();!(n=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}},ee.changeDatePicker=function(e,t){e["".concat(t,"Start")]=e[t][0],e["".concat(t,"End")]=e[t][1]},ee.throttle=function(e,t){var n=0;return function(){var r=Date.now(),a=this,o=arguments;r-n>=t&&(e.apply(a,o),n=Date.now())}},ee.debounce=function(e,t){var n;return function(){var r=this,a=arguments;n&&clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t)}},ee.deepClone=te,ee.numNull=function(e){return e&&null!=e&&void 0!=e?1*e:0},ee.isNum=function(e){if(console.log(e),void 0===e||null===e||""===e)return!1;if("string"===typeof e){var t=/^\d+$/,n=/^-\d+$/,r=/^[1-9]\d*[.]\d+$/,a=/^0[.]\d+$/,o=/^-[1-9]\d*[.]\d+$/,i=/^-0[.]\d+$/;return!!(t.test(e)||n.test(e)||r.test(e)||a.test(e)||o.test(e)||i.test(e))}return"number"===typeof e},ee.positiveRealNumber=function(e,t,n){var r=/^[1-9][0-9]+.?[0-9]+$/;r.test(t)?n():n(new Error(e.message))},ee.getLocalInfo=function(e,t){return JSON.parse(localStorage.getItem(e))[t]},ee.positiveNumberValidate=function(e,t,n){""===t&&e.required?n(new Error(e.keyName+"不能为空")):0===t||t&&t<=0?n(new Error(e.keyName+"必须大于0")):n()},ee.positiveNonnegativeNumberValidate=function(e,t,n){""===t&&e.required?n(new Error(e.keyName+"不能为空")):0===t||t&&t<0?n(new Error(e.keyName+"必须大于等于0")):n()},ee.positiveNumberValidateCanBeNull=function(e,t,n){if(""===t&&e.required)return n();0===t||t&&t<=0?n(new Error(e.keyName+"必须大于0")):n()},ee.positiveIntegerValidate=function(e,t,n){var r=/^[1-9]\d*$/;""===t&&e.required?n(new Error(e.keyName+"不能为空")):0==t||t&&!r.test(t)?n(new Error(e.keyName+"必须为正整数")):n()},ee.positiveIntegerValidateCanBeNull=function(e,t,n){var r=/^[1-9]\d*$/;if(""===t&&e.required)return n();0==t||t&&!r.test(t)?n(new Error(e.keyName+"必须为正整数")):n()},ee.getRealType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},ee.amount=function(e,t){var n=!1;e&&-0===String(e).indexOf("-")&&(e=String(e).substr(1),n=!0);var r=/^(\d{1,18})|(\d{1,18}\.)|(\d{1,17}\.\d{0,1})|(\d{1,16}\.\d{0,2})|(\.\d{1,2})$/,a=r.test(e);if(0==a)return 0;t=t>0&&t<=8?t:2;for(var o=ee.toFixed(parseFloat((e+"").replace(/[^\d\.-]/g,"")),t)+"",i=o.split(".")[0].split("").reverse(),u=o.split(".")[1],c="",s=0;s<i.length;s++)c+=i[s]+((s+1)%3==0&&s+1!=i.length?",":"");return n?"-"+c.split("").reverse().join("")+"."+u:c.split("").reverse().join("")+"."+u},ee.toFixed=function(e,t){if(t>20||t<0)throw new RangeError("toFixed() digits argument must be between 0 and 20");var n=e;if(isNaN(n)||n>=Math.pow(10,21))return n.toString();if("undefined"==typeof t||0==t)return Math.round(n).toString();var r=n.toString(),a=r.split(".");if(a.length<2){r+=".";for(var o=0;o<t;o+=1)r+="0";return r}var i=a[0],u=a[1];if(u.length==t)return r;if(u.length<t){for(var c=0;c<t-u.length;c+=1)r+="0";return r}r=i+"."+u.substr(0,t);var s=u.substr(t,1);if(parseInt(s,10)>=5){var l=Math.pow(10,t);r=(Math.round(parseFloat(r)*l)+1)/l,r=r.toFixed(t)}return r},ee.amountNum=function(e,t){var n=ee.amount(e,t);return n.replace(/,/g,"")},ee.strip=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;if(e=+Number.parseFloat(e),"NaN"===e.toString()&&(e=0),e<0)return-ee.strip(Math.abs(e),t);if(e>=1){var n=(e+"").split(".");return parseFloat(e.toPrecision(t+n[0].length))}e+=1;var r=(e+"").split("."),a=e.toPrecision(t+r[0].length),o=parseFloat(a.replace("1.","0."));return 2===o?"1":parseFloat(a.replace("1.","0."))},ee.downLoadPDF=function(e,t){g()({method:"get",url:t,responseType:"blob"}).then((function(t){var n=new Blob([t.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8"}),r=(t.headers["content-disposition"],e),a=document.createElement("a"),o=window.URL.createObjectURL(n);a.style.display="none",a.href=o,a.download=r,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(o)}))},ee.tofix=function(e,t){var n=Math.pow(10,t),r=parseInt(e*n+.5,10)/n;return r},ee.getCodeSetName=function(e,t,n){var r=n;return null!=e&&""!=e&&e[t]&&e[t].forEach((function(e){e.itemCode==n&&(r=e.itemName)})),r},ee.getCodeNameByCode=function(e,t){if(!t)return"";var n=t;if(e&&e.length)for(var r=0;r<e.length;r++){var a=e[r];if(a.itemCode==t){n=a.itemName;break}}return n},ee.getStatusNameByCode=function(e,t){var n=t;return e&&e.forEach((function(e){e.value==t&&(n=e.label)})),n},ee.parseReponse=function(e){},ee.downloadFile=function(e,t,n){var r=new XMLHttpRequest;function a(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join("&")}"get"===t.toLowerCase()&&(n=a(n),e+=-1==e.indexOf("?")?"?"+n:"&"+n),r.open(t,e,!0),r.setRequestHeader("Authorization",ee.getToken()),r.responseType="blob",r.onload=function(e){var t=r.response,n=new FileReader;n.readAsText(t),n.onload=function(e){var n=this.result;if(n&&-1!==n.indexOf("success")&&0==JSON.parse(n).success);else{var a=r.getResponseHeader("Content-Disposition");a&&(a=-1!=decodeURI(a).search("attachment;filename=")?decodeURI(a.replace("attachment;filename=","")):decodeURI(a.replace("attachment; filename=","")));var o=r.getResponseHeader("Content-Type"),i=new Blob([t],{type:o});if(window.navigator.msSaveBlob)window.navigator.msSaveOrOpenBlob(i,a);else{var u=document.createElement("a");u.download=a,u.style.display="none",u.href=URL.createObjectURL(i),document.body.appendChild(u),u.click(),document.body.removeChild(u)}}}},"post"===t.toLowerCase()?(n=JSON.stringify(n),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(n)):r.send(null)},ee.hasBtnPermisson=function(e){var t=window.localStorage.getItem("btnList");return!!t&&(t=JSON.parse(t),!!t.find((function(t){return t.elementNo==e})))},ee.closeCurrentPage=function(e){Z.commit("removeTag",e),we.back()},ee.toBae64DownImg=function(e){var t=new XMLHttpRequest;t.open("get",e,!0),t.setRequestHeader("Authorization",JSON.parse(window.localStorage.getItem("userAppInfo")).token),t.responseType="blob",t.onload=function(){if(200==this.status){var t=this.response,n=new FileReader;n.onloadend=function(n){var r=n.target.result;e=e.split("?")[1];var a=e.lastIndexOf("."),o=e.substr(a+1),i=e.split("-")[1].split(".")[0];if("msSaveOrOpenBlob"in navigator)window.navigator.msSaveOrOpenBlob(t,"".concat(i,".").concat(o));else{var u=document.createElement("a");u.setAttribute("download","".concat(i,".").concat(o)),u.setAttribute("href",r),u.click()}},n.readAsDataURL(t)}},t.send()},ee.toBae64DownImgOne=function(e,t,n){var r=new XMLHttpRequest;r.open("get",e,!0),r.responseType="blob",r.onload=function(){if(200==this.status){var e=this.response,r=new FileReader;r.onloadend=function(r){var a=r.target.result;if("msSaveOrOpenBlob"in navigator)window.navigator.msSaveOrOpenBlob(e,"".concat(n,".").concat(t));else{var o=document.createElement("a");o.setAttribute("download","".concat(n,".").concat(t)),o.setAttribute("href",a),o.click()}},r.readAsDataURL(e)}},r.send()},ee.smalltoBIG=function(e){var t=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],r=[["元","万","亿"],["","拾","佰","仟"]],a=e<0?"欠":"";e=Math.abs(e);for(var o="",i=0;i<t.length;i++)o+=(n[Math.floor(10*e*Math.pow(10,i))%10]+t[i]).replace(/零./,"");o=o||"整",e=Math.floor(e);for(i=0;i<r[0].length&&e>0;i++){for(var u="",c=0;c<r[1].length&&e>0;c++)u=n[e%10]+r[1][c]+u,e=Math.floor(e/10);o=u.replace(/(零.)*零$/,"").replace(/^$/,"零")+r[0][i]+o}return a+o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},ee.parseQueryString=function(e){var t=/^[^\?]+\?([\w\W]+)$/,n=/([^&=]+)=([\w\W]*?)(&|$)/g,r=t.exec(e),a={};if(r&&r[1]){var o,i=r[1];while(null!=(o=n.exec(i)))a[o[1]]=o[2]}return a},ee.toNonExponential=function(e){var t=Number(e).toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);return Number(e).toFixed(Math.max(0,(t[1]||"").length-t[2]))},ee.amount_=function(e,t){e+="";var n=!1;e&&-0===String(e).indexOf("-")&&(e=String(e).substr(1),n=!0);var r=/^(\d{1,18})|(\d{1,18}\.)|(\d{1,17}\.\d{0,1})|(\d{1,16}\.\d{0,2})|(\.\d{1,2})$/,a=r.test(e);if(0==a)return"-";e.includes(".")&&!t&&(t=e.split(".")[1].length);for(var o=ee.toFixed(e.replace(/[^\d\.-]/g,""),t)+"",i=o.split(".")[0].split("").reverse(),u=o.split(".")[1],c="",s=0;s<i.length;s++)c+=i[s]+((s+1)%3==0&&s+1!=i.length?",":"");return n?"-"+c.split("").reverse().join("")+"."+u:c.split("").reverse().join("")+"."+u};var ne=ee,re=n("3211"),ae=n("1da1"),oe=(n("96cf"),{}),ie=oe,ue=x.interfacePath.basic,ce={url:null,valueSetCodeObj:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{setCodes:ce.valueSetCodeObj[e]&&ce.valueSetCodeObj[e].join(",")}},le=function(e){var t=ce.url;if(null===t||null===ce.valueSetCodeObj)throw new Error("value-set OPTIONS 缺少配置");return T(t)(se(e))},de=function(e){var t={};if(e&&"object"==Object(f["a"])(e.data))for(var n in e.data)t[n]=e.data[n].map((function(e){var t=e.id,n=e.itemCode,r=e.itemName,a=e.setName,o=e.status;return{id:t,itemCode:n,itemName:r,setName:a,status:o}}));return t},fe=function(e){ce=e},pe=function(){var e=Object(ae["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le(t);case 2:if(r=e.sent,a=r.data,a.data){e.next=7;break}return localStorage.setItem("codeSet","{}"),e.abrupt("return");case 7:return n.currentRoute.name,localStorage.setItem("codeSet",JSON.stringify(de(a))),e.abrupt("return",de(a));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();fe({url:ue+"/s/config/queryMostCodeSet",valueSetCodeObj:ie});var he=function(){var e=Object(ae["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),r=function(){var e={};if(!ie[t])return"no result";ie[t].forEach((function(t){e[t]=[]})),Z.dispatch("setValueSetCode",e)},"no result"!==r()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,pe(t,n);case 6:a=e.sent,Z.dispatch("setValueSetCode",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),me=he;r["a"].use(re["a"]);var ge={mode:"hash",routes:U},ve=function(e){var t=I("routerHistory")||[],n=t.indexOf(e.path);-1==n?t.push(e.path):-1!=n&&(t.splice(n,1),t.push(e.path)),t.length>10&&t.splice(0,1),A("routerHistory",t)},be=new re["a"](ge),we=be;be.beforeEach((function(e,t,n){me(e.name,be),ne.title(e.meta.title),I("userAppInfo")||"login"===e.name?0===e.matched.length&&"/"!==e.fullPath&&"/"!==t.fullPath?n({name:"error-404"}):ne.toDefaultPage(Object(d["a"])(U),e.name,be,n):n({name:"login"}),ve(t)})),be.afterEach((function(e){ne.openNewPage(be.app,e,e.params,e.query),window.scrollTo(0,0)}));var Oe=re["a"].prototype.push;re["a"].prototype.push=function(e){return Oe.call(this,e).catch((function(e){return e}))};var ye=n("c265"),Se=(n("9e35"),n("39d7"),function(e,t,n){var r,a,o;e=Te(e),t=Te(t);try{r=e.toString().split(".")[1].length}catch(i){r=0}try{a=t.toString().split(".")[1].length}catch(i){a=0}return o=Math.pow(10,Math.max(r,a)),void 0==n?Math.round(e*o+t*o)/o:(Math.round(e*o+t*o)/o).toFixed(n)}),Ne=function(e,t,n){var r,a,o;e=Te(e),t=Te(t);try{r=e.toString().split(".")[1].length}catch(i){r=0}try{a=t.toString().split(".")[1].length}catch(i){a=0}return o=Math.pow(10,Math.max(r,a)),void 0==n?Math.round(e*o-t*o)/o:(Math.round(e*o-t*o)/o).toFixed(n)},ke=function(e,t,n){var r,a,o,i;e=Te(e),t=Te(t);try{r=e.toString().split(".")[1].length}catch(u){r=0}try{a=t.toString().split(".")[1].length}catch(u){a=0}return o=Number(e.toString().replace(".","")),i=Number(t.toString().replace(".","")),void 0==n?o*i/Math.pow(10,r+a):(o*i/Math.pow(10,r+a)).toFixed(n)},Le=function(e,t,n){var r,a,o,i;e=Te(e),t=Te(t);try{r=e.toString().split(".")[1].length}catch(c){r=0}try{a=t.toString().split(".")[1].length}catch(c){a=0}o=Number(e.toString().replace(".","")),i=Number(t.toString().replace(".",""));var u=void 0==n?ke(o/i,Math.pow(10,a-r)):ke(o/i,Math.pow(10,a-r),n);return u};function Te(e){return!isNaN(e)&&e||0}var Ce={arithmeticAdd:Se,arithmeticSub:Ne,arithmeticDiv:Le,arithmeticTim:ke};r["a"].use(ye["a"]),r["a"].config.productionTip=!1,r["a"].prototype.$utils=ne,r["a"].prototype.$calculator=Ce,r["a"].prototype.$common=x,r["a"].prototype.$toast.setDefaultOptions({duration:2e3}),new r["a"]({router:be,store:Z,render:function(e){return e(l)}}).$mount("#app")},"627e":function(e,t,n){var r={"./views/Main.vue":["cd56"],"./views/error-page/403.vue":["5140","chunk-53fd742b"],"./views/error-page/404.vue":["1db4","chunk-99f3e926"],"./views/error-page/500.vue":["721c","chunk-304dce62"],"./views/home/home.vue":["77b8","chunk-f1f9a57c"],"./views/login.vue":["dd7b","chunk-0431a037"],"./views/order/order-detail.vue":["05b4","chunk-2d0a45cd"],"./views/order/order.vue":["7915","chunk-75404907"],"./views/stock/stock.vue":["6aeb","chunk-2d0da5be"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="627e",e.exports=a},c255:function(e,t,n){"use strict";n("478b")},cd56:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrap"},[n("div",{staticClass:"content-view"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.needFooter,expression:"$route.meta.needFooter"}],staticClass:"tab-bar"},[n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",to:"/order",icon:"search"}},[e._v("订单")]),n("van-tabbar-item",{attrs:{replace:"",to:"/stock",icon:"search"}},[e._v("库存")])],1)],1)])},a=[],o=(n("c255"),n("2877")),i={},u=Object(o["a"])(i,r,a,!1,null,"38f4881b",null);t["default"]=u.exports}});