(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d54a80"],{"040f":function(t,e,n){},"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),s=n("2d00"),r=c("species");t.exports=function(t){return s>=51||!a((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},"3dfc":function(t,e,n){t.exports=n.p+"img/404.9206bf02.png"},"57b0":function(t,e,n){"use strict";n("040f")},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?c.f(t,r,s(0,n)):t[r]=n}},"8cdb":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=n("3dfc"),s=n.n(c),r=Object(a["h"])("div",{class:"container-fulid text-center bg-primary"},[Object(a["h"])("div",{class:"container content position-relative"},[Object(a["h"])("div",{class:"position-absolute top-50 start-50 translate-middle p-3 w-100"},[Object(a["h"])("div",{class:"row flex-wrap flex-column align-middle"},[Object(a["h"])("div",{class:"col position-relative"},[Object(a["h"])("figure",{class:"ms-4 mb-0"},[Object(a["h"])("img",{src:s.a,alt:"塔尼亞",class:"img-fluid"})])]),Object(a["h"])("div",{class:"col"},[Object(a["h"])("h1",{class:"fs-xl text-light"},"404"),Object(a["h"])("p",{class:"fs-4 text-light"},"對不起，找不太到您想前往的頁面…")])])])])],-1);function o(t,e,n,c,s,o){var i=Object(a["C"])("Navbar"),l=Object(a["C"])("Footer");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])(i)]),r,Object(a["h"])(l)],64)}var i=n("d178"),l=n("fd2d"),b={components:{Navbar:i["a"],Footer:l["a"]}};n("57b0");b.render=o;e["default"]=b},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),s=n("e8b5"),r=n("861d"),o=n("7b0b"),i=n("50c4"),l=n("8418"),b=n("65f0"),u=n("1dde"),d=n("b622"),f=n("2d00"),h=d("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",j=f>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=u("concat"),g=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},m=!j||!O;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,s,r=o(this),u=b(r,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],g(s)){if(c=i(s.length),d+c>p)throw TypeError(v);for(n=0;n<c;n++,d++)n in s&&l(u,d,s[n])}else{if(d>=p)throw TypeError(v);l(u,d++,s)}return u.length=d,u}})},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a707c5a8.png"},d178:function(t,e,n){"use strict";var a=n("7a23"),c=n("9d64"),s=n.n(c),r={class:"navbar navbar-expand-lg navbar-dark bg-dark header-nav"},o={class:"container-fluid"},i=Object(a["h"])("img",{src:s.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),l=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},u={class:"navbar-nav"},d={class:"nav-item"},f=Object(a["g"])("首頁"),h=Object(a["h"])("span",{class:"text-uppercase"},"top",-1),p={class:"nav-item"},v=Object(a["g"])("商品列表"),j=Object(a["h"])("span",{class:"text-uppercase"},"lineup",-1),O={class:"nav-item"},g=Object(a["g"])("關於諾貝塔"),m=Object(a["h"])("span",{class:"text-uppercase"},"about",-1),x={class:"nav-item text-center"},k={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},w=Object(a["g"])(" shopping_cart "),y={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},_=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1);function C(t,e,n,c,s,C){var I=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",r,[Object(a["h"])("div",o,[Object(a["h"])("h1",null,[Object(a["h"])(I,{class:"navbar-brand",to:"/"},{default:Object(a["M"])((function(){return[i]})),_:1})]),l,Object(a["h"])("div",b,[Object(a["h"])("ul",u,[Object(a["h"])("li",d,[Object(a["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(a["M"])((function(){return[f,h]})),_:1})]),Object(a["h"])("li",p,[Object(a["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(a["M"])((function(){return[v,j]})),_:1})]),Object(a["h"])("li",O,[Object(a["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(a["M"])((function(){return[g,m]})),_:1})]),Object(a["h"])("li",x,[Object(a["h"])(I,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",k,[w,s.cartItems?(Object(a["v"])(),Object(a["d"])("span",y,[Object(a["g"])(Object(a["F"])(s.cartItems)+" ",1),_])):Object(a["e"])("",!0)])]})),_:1})])])])])])}n("99af");var I=n("3d4f"),M={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cartItems=e.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),I["a"].on("update-cart",(function(){t.getCartItem()}))}};M.render=C;e["a"]=M},fd2d:function(t,e,n){"use strict";var a=n("7a23"),c={class:"\r\n      bg-dark\r\n      fs-7\r\n      p-3\r\n      text-center\r\n      position-relative\r\n      d-flex d-sm-block\r\n      flex-column\r\n    "},s={class:"order-2 mt-2 mt-sm-0 position-sm-absolute copyRight"},r=Object(a["f"])('<nav><ul class="\r\n            d-flex\r\n            justify-content-sm-between justify-content-center\r\n            p-1\r\n            mb-1\r\n            list-unstyled\r\n          "><li class="px-2 px-sm-0"><a class="text-link" href="https://www.facebook.com/tokyofarmer" target="_blank"><i class="bi bi-facebook fs-6"></i></a></li><li class="px-2 px-sm-0"><a class="text-link" href="https://www.instagram.com/leo_tokyofarmer/" target="_blank"><i class="bi bi-instagram fs-6"></i></a></li><li class="px-2 px-sm-0"><a class="text-link" href="https://www.youtube.com/channel/UC_AyDfrqqpUg-6vVz72vS5g" target="_blank"><i class="bi bi-youtube fs-6"></i></a></li></ul></nav>',1),o={class:"text-light"},i=Object(a["g"])("made by "),l=Object(a["h"])("a",{class:"text-link text-decoration-none",href:"https://github.com/overactive1988",target:"_blank"},"leolee",-1),b=Object(a["h"])("span",{class:"material-icons"}," account_box ",-1),u=Object(a["h"])("p",{class:"text-light mb-2"},[Object(a["g"])(" 本站所使用一切 小魔女諾貝塔 相關素材已取得授權"),Object(a["h"])("br"),Object(a["g"])("著作權皆屬於 "),Object(a["h"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"希萌創意行銷股份有限公司"),Object(a["g"])(" 所有 ")],-1),d=Object(a["h"])("small",{class:"text-light"},[Object(a["g"])("© 2021 "),Object(a["h"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"SimonCreative"),Object(a["g"])(" All rights reserved")],-1);function f(t,e){var n=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("footer",c,[Object(a["h"])("div",s,[r,Object(a["h"])("small",o,[i,l,Object(a["h"])(n,{class:"text-link",to:"/login"},{default:Object(a["M"])((function(){return[b]})),_:1})])]),u,d])}const h={};h.render=f;e["a"]=h}}]);
//# sourceMappingURL=chunk-37d54a80.81f6cb96.js.map