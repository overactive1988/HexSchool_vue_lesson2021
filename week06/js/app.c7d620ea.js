(function(e){function n(n){for(var r,c,a=n[0],d=n[1],i=n[2],f=0,h=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&h.push(u[c][0]),u[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},c={app:0},u={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-21ae05be":"554bc43e","chunk-2d0cb75f":"7eff409e","chunk-2d0de6a7":"23514459","chunk-2d0e95df":"04cf98a7","chunk-2d230459":"83fdc48c","chunk-4b2afe33":"3fd0ab77","chunk-557c6d50":"3893bf11","chunk-589dacf1":"abccb824","chunk-68d358d4":"c6f97426","chunk-a123b520":"7ac29a6e","chunk-d4c8aa62":"f9efad52"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-4b2afe33":1,"chunk-557c6d50":1,"chunk-a123b520":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-21ae05be":"31d6cfe0","chunk-2d0cb75f":"31d6cfe0","chunk-2d0de6a7":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d230459":"31d6cfe0","chunk-4b2afe33":"7732718b","chunk-557c6d50":"307b687f","chunk-589dacf1":"31d6cfe0","chunk-68d358d4":"31d6cfe0","chunk-a123b520":"6704ae23","chunk-d4c8aa62":"31d6cfe0"}[e]+".css",u=d.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===u))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){i=h[a],f=i.getAttribute("data-href");if(f===r||f===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var h=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",h.name="ChunkLoadError",h.type=r,h.request=c,t[1](h)}u[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),c=t("bc3a"),u=t.n(c),o=t("2106"),a=t.n(o),d=t("7bb1"),i=t("3aa8"),f=t("cbdf"),h=t("9457");t("7b17"),t("ab8b");function l(e,n){var t=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(t)}t("c504");const p={};p.render=l;var b=p,s=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}},{path:"/login",component:function(){return t.e("chunk-4b2afe33").then(t.bind(null,"a55b"))}},{path:"/",component:function(){return t.e("chunk-a123b520").then(t.bind(null,"d504"))},children:[{path:"",component:function(){return t.e("chunk-2d230459").then(t.bind(null,"ec27"))}},{path:"products",component:function(){return t.e("chunk-21ae05be").then(t.bind(null,"e6dc"))}},{path:"product/:id",component:function(){return t.e("chunk-68d358d4").then(t.bind(null,"d2f1"))}},{path:"cart",component:function(){return t.e("chunk-589dacf1").then(t.bind(null,"b789"))}}]},{path:"/admin",component:function(){return t.e("chunk-557c6d50").then(t.bind(null,"459d"))},children:[{path:"",component:function(){return t.e("chunk-2d0cb75f").then(t.bind(null,"4a84"))}},{path:"products",component:function(){return t.e("chunk-d4c8aa62").then(t.bind(null,"724a"))}},{path:"orders",component:function(){return t.e("chunk-2d0de6a7").then(t.bind(null,"860c"))}}]}],k=Object(s["a"])({history:Object(s["b"])(),routes:m}),v=k;Object.keys(i["a"]).forEach((function(e){"default"!==e&&Object(d["e"])(e,i["a"][e])})),Object(d["d"])({generateMessage:Object(f["a"])({zh_TW:h}),validateOnInput:!0}),Object(f["b"])("zh_TW");var g=Object(r["c"])(b);g.use(a.a,u.a),g.use(v),g.component("Form",d["c"]),g.component("Field",d["b"]),g.component("ErrorMessage",d["a"]),g.mount("#app")},c504:function(e,n,t){"use strict";t("e973")},e973:function(e,n,t){}});
//# sourceMappingURL=app.c7d620ea.js.map