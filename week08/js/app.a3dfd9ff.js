(function(e){function n(n){for(var c,a,o=n[0],d=n[1],i=n[2],h=0,f=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-076bfcd6":"940c2bf2","chunk-08be935a":"e56f7a07","chunk-1259ac34":"6055359b","chunk-2eb103ca":"4ac2eab7","chunk-61a0471e":"94c49244","chunk-dfd9a15a":"7fd668c3","chunk-f5560200":"73d51929","chunk-1ab26052":"8514a19b","chunk-1d4d6c7c":"6cf928b3","chunk-22ab02a5":"b27e89a0","chunk-2654dc84":"4cf01a31","chunk-2783f036":"0d5f08e6","chunk-2840b7e8":"b78016c6","chunk-2afa8682":"344458f5","chunk-3b6bce0c":"b6777612","chunk-d8030dba":"8e95e1e1","chunk-2d0bdb35":"f5f1b205","chunk-2d0e9ad9":"0ce3792b","chunk-2d0f0f7f":"53cb8eb9","chunk-37f46349":"c60e07fe","chunk-4cff34cd":"66a43ce4","chunk-4de5d8dc":"068d2e43","chunk-70d5d9aa":"0297a7ae","chunk-71e99f7a":"07d544e5","chunk-a7f4d268":"a6de705d","chunk-ac38739e":"fa864436","chunk-d3504012":"0e8fd0d1"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-1ab26052":1,"chunk-1d4d6c7c":1,"chunk-2654dc84":1,"chunk-3b6bce0c":1,"chunk-a7f4d268":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-076bfcd6":"31d6cfe0","chunk-08be935a":"31d6cfe0","chunk-1259ac34":"31d6cfe0","chunk-2eb103ca":"31d6cfe0","chunk-61a0471e":"31d6cfe0","chunk-dfd9a15a":"31d6cfe0","chunk-f5560200":"31d6cfe0","chunk-1ab26052":"e6f87137","chunk-1d4d6c7c":"992976b9","chunk-22ab02a5":"31d6cfe0","chunk-2654dc84":"b7c6bb04","chunk-2783f036":"31d6cfe0","chunk-2840b7e8":"31d6cfe0","chunk-2afa8682":"31d6cfe0","chunk-3b6bce0c":"e3d9c7fa","chunk-d8030dba":"31d6cfe0","chunk-2d0bdb35":"31d6cfe0","chunk-2d0e9ad9":"31d6cfe0","chunk-2d0f0f7f":"31d6cfe0","chunk-37f46349":"31d6cfe0","chunk-4cff34cd":"31d6cfe0","chunk-4de5d8dc":"31d6cfe0","chunk-70d5d9aa":"31d6cfe0","chunk-71e99f7a":"31d6cfe0","chunk-a7f4d268":"b7c6bb04","chunk-ac38739e":"31d6cfe0","chunk-d3504012":"31d6cfe0"}[e]+".css",r=d.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===r))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],h=i.getAttribute("data-href");if(h===c||h===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],l.parentNode.removeChild(l),t(u)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=o(e);var f=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),a=t("f5af"),r=t.n(a),u=(t("e829"),t("bc3a")),o=t.n(u),d=t("2106"),i=t.n(d),h=t("8a14"),f=(t("fe26"),t("3730")),l=t.n(f),b=t("7bb1"),p=t("3aa8"),s=t("cbdf"),m=t("9457"),k=t("f9d5"),v=t.n(k);t("4413"),t("7b17"),t("ab8b");function g(e,n,t,a,r,u){var o=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(o)}var y={methods:{createTitleDesc:function(e){if(e.meta.title){var n=e.meta.title+" | 小魔女諾貝塔雜貨工坊";document.title=n}else document.title="小魔女諾貝塔雜貨工坊";if(e.meta.desc){var t=e.meta.desc+" | 小魔女諾貝塔雜貨工坊";document.querySelector("meta[name='description']").setAttribute("content",t)}else document.querySelector("meta[name='description']").setAttribute("content","小魔女諾貝塔雜貨工坊，在古堡探險的旅途中，為您提供所需的道具與物資。")}},mounted:function(){var e=this.$route;this.createTitleDesc(e)},watch:{$route:function(e){this.createTitleDesc(e)}}};y.render=g;var O=y,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),w=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2654dc84").then(t.bind(null,"8cdb"))},meta:{title:"找不到頁面",desc:""}},{path:"/login",component:function(){return t.e("chunk-1ab26052").then(t.bind(null,"a55b"))},meta:{title:"後台登入介面",desc:""}},{path:"/",component:function(){return t.e("chunk-a7f4d268").then(t.bind(null,"d504"))},children:[{path:"",component:function(){return t.e("chunk-d3504012").then(t.bind(null,"c332"))},meta:{title:"",desc:"諾貝塔為了瞭解自己的身世之謎而來到古堡探險，並在那邊挑戰了許多生魂，學習到各類的魔法與能力，同時也遇上了充滿謎團的小黑貓，如今已能在古堡裡獨當一面的諾貝塔，開始販賣起不知從何處入手的奇怪商品與物資…"}},{path:"articles",component:function(){return t.e("chunk-076bfcd6").then(t.bind(null,"2673"))},meta:{title:"最新消息",desc:"來自官方的諾貝塔相關創作與新聞的所有最新消息，統統集結於此"}},{path:"article/:id",component:function(){return t.e("chunk-22ab02a5").then(t.bind(null,"9b32"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-2afa8682"),t.e("chunk-d8030dba")]).then(t.bind(null,"ed84"))},meta:{title:"商品列表",desc:"專門販賣諾貝塔不知從何處入手的奇怪商品與物資…"}},{path:"product/:id",component:function(){return Promise.all([t.e("chunk-2afa8682"),t.e("chunk-3b6bce0c")]).then(t.bind(null,"658f"))}},{path:"favorite",component:function(){return t.e("chunk-71e99f7a").then(t.bind(null,"b6d4"))},meta:{title:"收藏清單"}},{path:"cart",component:function(){return t.e("chunk-4de5d8dc").then(t.bind(null,"c228"))},children:[{path:"",component:function(){return t.e("chunk-37f46349").then(t.bind(null,"6034"))},meta:{title:"確認購物車",desc:"距離獲得諾貝塔的稀有寶物與商品只差臨門一腳了"}},{path:"/cartcheck",component:function(){return t.e("chunk-2783f036").then(t.bind(null,"e727"))},meta:{title:"填寫訂單",desc:"距離獲得諾貝塔的稀有寶物與商品只差臨門一腳了"}},{path:"/cartconfirm",component:function(){return t.e("chunk-4cff34cd").then(t.bind(null,"edbb"))},meta:{title:"確認訂單",desc:"距離獲得諾貝塔的稀有寶物與商品只差臨門一腳了"}},{path:"/cartpayment",component:function(){return t.e("chunk-2d0e9ad9").then(t.bind(null,"8f0e"))},meta:{title:"完成下訂"},children:[{path:"/cartpayment/:id",component:function(){return t.e("chunk-70d5d9aa").then(t.bind(null,"d3e0"))}}]},{path:"/cartcompleted",component:function(){return t.e("chunk-2d0bdb35").then(t.bind(null,"2cb0"))},meta:{title:"完成付款"},children:[{path:"/cartcompleted/:id",component:function(){return t.e("chunk-2d0f0f7f").then(t.bind(null,"9f40"))}}]}]},{path:"about",component:function(){return t.e("chunk-ac38739e").then(t.bind(null,"9cbb"))},meta:{title:"關於諾貝塔",desc:"關於諾貝塔為何踏上探險旅途的故事"}}]},{path:"/admin",component:function(){return t.e("chunk-1d4d6c7c").then(t.bind(null,"459d"))},children:[{path:"",component:function(){return t.e("chunk-08be935a").then(t.bind(null,"4a84"))},meta:{title:"後台管理介面",desc:""}},{path:"products",component:function(){return Promise.all([t.e("chunk-1259ac34"),t.e("chunk-f5560200")]).then(t.bind(null,"724a"))},meta:{title:"商品列表",desc:""}},{path:"orders",component:function(){return Promise.all([t.e("chunk-1259ac34"),t.e("chunk-dfd9a15a")]).then(t.bind(null,"860c"))},meta:{title:"訂單列表",desc:""}},{path:"coupon",component:function(){return Promise.all([t.e("chunk-1259ac34"),t.e("chunk-61a0471e")]).then(t.bind(null,"e48a"))},meta:{title:"優惠券設定",desc:""}},{path:"articles",component:function(){return Promise.all([t.e("chunk-1259ac34"),t.e("chunk-2eb103ca")]).then(t.bind(null,"c587"))},meta:{title:"文章列表",desc:""}},{path:"article/:id",component:function(){return t.e("chunk-2840b7e8").then(t.bind(null,"ae4a"))}}]}],P=Object(j["a"])({history:Object(j["b"])(),routes:w,scrollBehavior:function(){return{top:0,behavior:"smooth"}}}),S=P;t("ac1f"),t("5319"),t("b680"),t("99af");function T(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function E(e){var n=new Date(1e3*e);return n.toLocaleDateString()}function _(e){var n=new Date(1e3*e),t=n.getFullYear(),c=n.getMonth()+1,a=n.getDate(),r="".concat(t,"-").concat(c,"-").concat(a);return r}Object.keys(p["a"]).forEach((function(e){"default"!==e&&Object(b["e"])(e,p["a"][e])})),Object(b["d"])({generateMessage:Object(s["a"])({zh_TW:m}),validateOnInput:!0}),Object(s["b"])("zh_TW"),r.a.init();var C=Object(c["createApp"])(O);C.config.globalProperties.$filters={date:E,datetime:_,currency:T},C.use(i.a,o.a),C.use(S);var A={confirmButtonColor:"#562a4d",cancelButtonColor:"#ff7674",icon:"success"};C.use(v.a,A),C.use(l.a),C.component("Loading",h["a"]),C.component("Form",b["c"]),C.component("Field",b["b"]),C.component("ErrorMessage",b["a"]),C.mount("#app")}});
//# sourceMappingURL=app.a3dfd9ff.js.map