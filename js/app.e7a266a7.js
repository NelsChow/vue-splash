(function(e){function t(t){for(var n,o,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"038d":function(e,t,a){e.exports=a.p+"img/vue.f4b57650.svg"},"12ea":function(e,t,a){"use strict";(function(e){a("b0c0");var n=a("d051"),s={install:function(e){e.component(n["a"].name,n["a"])}};n["a"].install=s.install;var r=null;"undefined"!==typeof window?r=window.Vue:"undefined"!==typeof e&&(r=e.Vue),r&&r.use(n["a"]),t["a"]=n["a"]}).call(this,a("c8ba"))},"2fb4":function(e,t,a){},"40a0":function(e,t,a){"use strict";var n=a("e44a"),s=a.n(n);s.a},"4dab":function(e,t,a){e.exports=a.p+"img/reload.f812b117.svg"},"53df":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ForkMe"),e._m(0),a("main",{staticClass:"vue-splash-content"},[a("Browser",{key:e.BrowserComponentKey,on:{update:e.forceRerender}})],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"vue-splash-header"},[a("span",{staticClass:"vue-splash-header__text"},[e._v("Vue Splash")]),a("span",{staticClass:"vue-splash-header__caption"},[e._v("splash your app logo 💦")])])}],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{id:"fork-me",href:"https://github.com/MehdiKhoshnevisz/vue-splash"}},[a("img",{staticClass:"attachment-full size-full",attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"}})])}],l=(a("bd47"),a("2877")),u={},c=Object(l["a"])(u,o,i,!1,null,null,null),d=c.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-splash-browser"},[n("div",{staticClass:"vue-splash-browser__header"},[n("div",{staticClass:"vue-splash-browser__header__actions"},[n("span",{staticClass:"vue-splash-browser__header-action",attrs:{id:"action-danger"}}),n("span",{staticClass:"vue-splash-browser__header-action",attrs:{id:"action-warning"}}),n("span",{staticClass:"vue-splash-browser__header-action",attrs:{id:"action-success"}}),n("transition",{attrs:{name:"fade"}},[e.completeLoader?e._e():n("div",{staticClass:"vue-splash-browser__loader",style:e.loaderStyle})])],1),n("div",{staticClass:"vue-splash-browser__header__buttons"},[n("img",{staticClass:"vue-splash-browser__header-button",attrs:{src:a("4dab")},on:{click:e.reloadBrowser}})])]),n("transition",{attrs:{name:"fade"}},[e.isLoaded?n("div",{staticClass:"vue-splash-browser__splash-wrapper"},[n("Splash",{attrs:{logo:e.logo}})],1):e._e()]),n("transition",{attrs:{name:"fade"}},[e.isLoaded?e._e():n("div",{staticClass:"vue-splash-browser__content"},[n("span",[e._v("browser content")])])])],1)},f=[],h=a("038d"),v=a.n(h),_={name:"Browser",data:function(){return{loaderWidth:0,isLoaded:!1,completeLoader:!1}},mounted:function(){this.startTimeout()},computed:{loaderStyle:function(){return{width:this.loaderWidth+"%"}},logo:function(){return v.a}},methods:{startTimeout:function(){var e=this;this.isLoaded=!0;var t=4e3,a=t/100;setTimeout((function(){e.isLoaded=!1}),t),setInterval((function(){if(!e.isLoaded)return e.loaderWidth=100,void setTimeout((function(){e.completeLoader=!0}),0);e.loaderWidth++}),a)},reloadBrowser:function(){this.$emit("update")}}},b=_,m=(a("dd46"),Object(l["a"])(b,p,f,!1,null,"6480ad4f",null)),w=m.exports,g={name:"App",components:{ForkMe:d,Browser:w},data:function(){return{BrowserComponentKey:0}},methods:{forceRerender:function(){this.BrowserComponentKey+=1}}},y=g,C=Object(l["a"])(y,s,r,!1,null,null,null),O=C.exports,x=a("12ea");a("2fb4");n["a"].use(x["a"]),new n["a"]({render:function(e){return e(O)}}).$mount("#app")},bd47:function(e,t,a){"use strict";var n=a("53df"),s=a.n(n);s.a},d051:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-splash"},[a("div",[a("div",{staticClass:"vue-splash__anim mb-3"},[a("img",{attrs:{src:e.logo}})]),e.caption?a("div",{staticClass:"vue-splash__text"},[a("span",[e._v(e._s(e.caption))])]):e._e()])])},s=[],r={name:"VueSplash",props:{logo:{type:String,default:""},caption:{type:String,default:"Your Magnificent App Name"}}},o=r,i=(a("40a0"),a("2877")),l=Object(i["a"])(o,n,s,!1,null,"0d2b71fa",null);t["a"]=l.exports},dd46:function(e,t,a){"use strict";var n=a("df71"),s=a.n(n);s.a},df71:function(e,t,a){},e44a:function(e,t,a){}});
//# sourceMappingURL=app.e7a266a7.js.map