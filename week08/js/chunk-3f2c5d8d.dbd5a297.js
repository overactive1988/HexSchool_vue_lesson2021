(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2c5d8d"],{2532:function(e,t,a){"use strict";var c=a("23e7"),n=a("5a34"),r=a("1d80"),o=a("ab13");c({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(r(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"3d4f":function(e,t,a){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,a){var c=e.get(t);c?c.push(a):e.set(t,[a])},off:function(t,a){var c=e.get(t);c&&(a?c.splice(c.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var c=e.get(t);c&&c.slice().map((function(e){e(a)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,a)}))}}},n=c();t["a"]=n},"3dfc":function(e,t,a){e.exports=a.p+"img/404.9206bf02.png"},"44e7":function(e,t,a){var c=a("861d"),n=a("c6b6"),r=a("b622"),o=r("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,a){var c=a("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"8cdb":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=a("3dfc"),r=a.n(n),o={class:"nav-header"},s=Object(c["createVNode"])("div",{id:"main",class:"container-fulid text-center bg-primary"},[Object(c["createVNode"])("div",{class:"container pt-8 pb-4 content position-relative"},[Object(c["createVNode"])("div",{class:"col position-relative"},[Object(c["createVNode"])("figure",{class:"ms-4 mb-0"},[Object(c["createVNode"])("img",{src:r.a,alt:"塔尼亞",class:"img-fluid"})])]),Object(c["createVNode"])("h2",{class:"fs-xl text-light"},"404"),Object(c["createVNode"])("p",{class:"fs-4 text-light"},"對不起，找不到您想前往的頁面…")])],-1);function i(e,t,a,n,r,i){var l=Object(c["resolveComponent"])("Navbar"),d=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("header",o,[Object(c["createVNode"])(l)]),s,Object(c["createVNode"])(d)],64)}var l=a("d178"),d=a("fd2d"),b={components:{Navbar:l["a"],Footer:d["a"]}};a("c348");b.render=i;t["default"]=b},"9fe6":function(e,t,a){"use strict";a("caad"),a("2532"),a("a434");t["a"]={methods:{saveLocalStorage:function(e){var t=JSON.stringify(e);localStorage.setItem("Favorite",t)},getLocalStorage:function(){return JSON.parse(localStorage.getItem("Favorite"))},addMyFavorite:function(e){this.myFavorite.includes(e)?this.myFavorite.splice(this.myFavorite.indexOf(e),1):this.myFavorite.push(e),this.saveLocalStorage(this.myFavorite),this.emitter.emit("update-favorite")}}}},a434:function(e,t,a){"use strict";var c=a("23e7"),n=a("23cb"),r=a("a691"),o=a("50c4"),s=a("7b0b"),i=a("65f0"),l=a("8418"),d=a("1dde"),b=d("splice"),u=Math.max,p=Math.min,f=9007199254740991,v="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var a,c,d,b,m,g,h=s(this),O=o(h.length),j=n(e,O),x=arguments.length;if(0===x?a=c=0:1===x?(a=0,c=O-j):(a=x-2,c=p(u(r(t),0),O-j)),O+a-c>f)throw TypeError(v);for(d=i(h,c),b=0;b<c;b++)m=j+b,m in h&&l(d,b,h[m]);if(d.length=c,a<c){for(b=j;b<O-c;b++)m=b+c,g=b+a,m in h?h[g]=h[m]:delete h[g];for(b=O;b>O-c+a;b--)delete h[b-1]}else if(a>c)for(b=O-c;b>j;b--)m=b+c-1,g=b+a-1,m in h?h[g]=h[m]:delete h[g];for(b=0;b<a;b++)h[b+j]=arguments[b+2];return h.length=O-c+a,d}})},ab13:function(e,t,a){var c=a("b622"),n=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,"/./"[e](t)}catch(c){}}return!1}},c348:function(e,t,a){"use strict";a("e861")},caad:function(e,t,a){"use strict";var c=a("23e7"),n=a("4d64").includes,r=a("44d2");c({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d178:function(e,t,a){"use strict";var c=a("7a23"),n={class:"\r\n      navbar navbar-expand-lg navbar-dark\r\n      bg-dark\r\n      position-fixed\r\n      header-nav\r\n      w-100\r\n      nav-bar\r\n    ",style:{"z-index":"10"}},r={class:"container-fluid"},o={class:"w-auto"},s=Object(c["createVNode"])("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626951642442.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UP6QtkXC9JnrYjnguN%2FrLpP3eFkq%2Fy84Tpk7MB7OwBY18SbD5rumr4N29ezT%2FyrFH%2FWT97RHlnjGnHN6tbh%2B5QcFTJCcjH%2BjeHKg%2BCK%2BuGi1ICAuqADwFh%2FzyRudSZU9%2BcVe%2B%2BoY6t1JK3I%2BrPpNFd5ruoryyTgfeOT8ekewGXd7HxNJRBIfWzC1kfFn%2BJI%2BF%2F9RshF3veGS80eYqcBoeR6yBe4J0tNWyzun1k4RbxlHhxdIZESTOlX%2F%2BUQp9t76HmMNOG%2BxcU6zZDR3UWaeIwvJiX3wkyrulHBe83YnxGpxdeZK%2BqNBlLAr3rt0dP4aTQQnYeff%2FgdOVX1AxesREQ%3D%3D",alt:"LITTLE WITCH NOBETA",width:"120",class:"d-inline-block align-text-top"},null,-1),i={class:"navbar-nav ms-auto d-lg-none pe-2 flex-row align-items-center"},l={key:0,class:"nav-item me-3"},d={class:"material-icons position-relative h1"},b=Object(c["createTextVNode"])(" star "),u={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},p=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),f={class:"nav-item me-2"},v={class:"material-icons position-relative h1"},m=Object(c["createTextVNode"])(" shopping_cart "),g={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},h=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),O=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},x={class:"navbar-nav"},N={class:"nav-item"},V=Object(c["createTextVNode"])("首頁"),k=Object(c["createVNode"])("span",{class:"text-uppercase"},"top",-1),y={class:"nav-item"},w=Object(c["createTextVNode"])("商品列表"),F=Object(c["createVNode"])("span",{class:"text-uppercase"},"lineup",-1),B={class:"nav-item"},T=Object(c["createTextVNode"])("最新消息"),C=Object(c["createVNode"])("span",{class:"text-uppercase"},"news",-1),S={key:0,class:"nav-item text-center d-none d-lg-block"},I={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},_=Object(c["createTextVNode"])(" star "),D={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},z=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),J={class:"nav-item text-center d-none d-lg-block"},L={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},A=Object(c["createTextVNode"])(" shopping_cart "),H={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},R=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1);function E(e,t,a,E,G,M){var P=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",n,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("h1",o,[Object(c["createVNode"])(P,{class:"navbar-brand",to:"/"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]),Object(c["createVNode"])("ul",i,[G.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",l,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",d,[b,G.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",u,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(G.myFavorite.length)+" ",1),p])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",f,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",v,[m,G.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",g,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(G.cartItems)+" ",1),h])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])]),O,Object(c["createVNode"])("div",j,[Object(c["createVNode"])("ul",x,[Object(c["createVNode"])("li",N,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(c["withCtx"])((function(){return[V,k]})),_:1})]),Object(c["createVNode"])("li",y,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(c["withCtx"])((function(){return[w,F]})),_:1})]),Object(c["createVNode"])("li",B,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/articles"},{default:Object(c["withCtx"])((function(){return[T,C]})),_:1})]),G.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",S,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",I,[_,G.myFavorite.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",D,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(G.myFavorite.length)+" ",1),z])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",J,[Object(c["createVNode"])(P,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",L,[A,G.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",H,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(G.cartItems)+" ",1),R])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])])])])])}a("99af"),a("159b");var G=a("3d4f"),M=a("9fe6"),P={data:function(){return{cartItems:"",favoriteProduct:[],myFavorite:this.getLocalStorage()||[]}},mixins:[M["a"]],methods:{getCartItem:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartItems=t.data.data.carts.length)})).catch((function(e){return e}))},getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.myFavorite.length>0&&this.myFavorite.forEach((function(t){var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&e.favoriteProduct.push(t.data.product)})).catch((function(e){return e}))}))}},mounted:function(){var e=this;this.getCartItem(),this.getFavorite(),G["a"].on("update-cart",(function(){e.getCartItem()})),G["a"].on("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))},unmounted:function(){var e=this;G["a"].off("update-cart",(function(){e.getCartItem()})),G["a"].off("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))}};P.render=E;t["a"]=P},e861:function(e,t,a){},fd2d:function(e,t,a){"use strict";var c=a("7a23"),n={class:"\r\n      bg-dark\r\n      fs-7\r\n      p-3\r\n      text-center\r\n      position-relative\r\n      d-flex d-sm-block\r\n      flex-column\r\n    "},r={class:"order-2 mt-2 mt-sm-0 position-sm-absolute copyRight"},o=Object(c["createStaticVNode"])('<nav><ul class="\r\n            d-flex\r\n            justify-content-sm-between justify-content-center\r\n            p-1\r\n            mb-1\r\n            list-unstyled\r\n          "><li class="px-2 px-sm-0"><a class="text-link" href="https://www.facebook.com/tokyofarmer" target="_blank"><i class="bi bi-facebook fs-6"></i></a></li><li class="px-2 px-sm-0"><a class="text-link" href="https://www.instagram.com/leo_tokyofarmer/" target="_blank"><i class="bi bi-instagram fs-6"></i></a></li><li class="px-2 px-sm-0"><a class="text-link" href="https://www.youtube.com/channel/UC_AyDfrqqpUg-6vVz72vS5g" target="_blank"><i class="bi bi-youtube fs-6"></i></a></li></ul></nav>',1),s={class:"text-light"},i=Object(c["createTextVNode"])("made by "),l=Object(c["createVNode"])("a",{class:"text-link text-decoration-none",href:"https://github.com/overactive1988",target:"_blank"},"leolee",-1),d=Object(c["createVNode"])("span",{class:"material-icons"}," account_box ",-1),b=Object(c["createVNode"])("p",{class:"text-light mb-2"},[Object(c["createTextVNode"])(" 本站所使用一切 小魔女諾貝塔 相關素材已取得授權"),Object(c["createVNode"])("br"),Object(c["createTextVNode"])("著作權皆屬於 "),Object(c["createVNode"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"希萌創意行銷股份有限公司"),Object(c["createTextVNode"])(" 所有 ")],-1),u=Object(c["createVNode"])("small",{class:"text-light"},[Object(c["createTextVNode"])("© 2021 "),Object(c["createVNode"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"SimonCreative"),Object(c["createTextVNode"])(" All rights reserved")],-1);function p(e,t){var a=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("footer",n,[Object(c["createVNode"])("div",r,[o,Object(c["createVNode"])("small",s,[i,l,Object(c["createVNode"])(a,{class:"text-link",to:"/login"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])]),b,u])}const f={};f.render=p;t["a"]=f}}]);
//# sourceMappingURL=chunk-3f2c5d8d.dbd5a297.js.map