(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278593d8"],{"1dde":function(t,n,e){var a=e("d039"),c=e("b622"),o=e("2d00"),r=c("species");t.exports=function(t){return o>=51||!a((function(){var n=[],e=n.constructor={};return e[r]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"3d4f":function(t,n,e){"use strict";var a=function(t){return{all:t=t||new Map,on:function(n,e){var a=t.get(n);a?a.push(e):t.set(n,[e])},off:function(n,e){var a=t.get(n);a&&(e?a.splice(a.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var a=t.get(n);a&&a.slice().map((function(t){t(e)})),(a=t.get("*"))&&a.slice().map((function(t){t(n,e)}))}}},c=a();n["a"]=c},8418:function(t,n,e){"use strict";var a=e("c04e"),c=e("9bf2"),o=e("5c6c");t.exports=function(t,n,e){var r=a(n);r in t?c.f(t,r,o(0,e)):t[r]=e}},"99af":function(t,n,e){"use strict";var a=e("23e7"),c=e("d039"),o=e("e8b5"),r=e("861d"),s=e("7b0b"),i=e("50c4"),l=e("8418"),u=e("65f0"),b=e("1dde"),d=e("b622"),p=e("2d00"),f=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",O=p>=51||!c((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),j=b("concat"),g=function(t){if(!r(t))return!1;var n=t[f];return void 0!==n?!!n:o(t)},m=!O||!j;a({target:"Array",proto:!0,forced:m},{concat:function(t){var n,e,a,c,o,r=s(this),b=u(r,0),d=0;for(n=-1,a=arguments.length;n<a;n++)if(o=-1===n?r:arguments[n],g(o)){if(c=i(o.length),d+c>v)throw TypeError(h);for(e=0;e<c;e++,d++)e in o&&l(b,d,o[e])}else{if(d>=v)throw TypeError(h);l(b,d++,o)}return b.length=d,b}})},"9d64":function(t,n,e){t.exports=e.p+"img/logo.a707c5a8.png"},ec27:function(t,n,e){"use strict";e.r(n);var a=e("7a23"),c=Object(a["f"])('<main><section class="top position-relative"><div class="top__inner"><h2 class="top__title text-light">小魔女諾貝塔<br>雜貨工坊</h2><p class="top__subtitle text-light h6 fw-normal mb-4"> 所有小魔女諾貝塔相關的商品，只有在這裡獨家販售 </p><button type="button" class="top__button btn btn-outline-light w-100"> 商品列表<span class="material-icons"> navigate_next </span></button></div><div class="top-scrolldown"> SCROLL DOWN<span class="top-scrolldown__line"></span></div></section></main>',1);function o(t,n,e,o,r,s){var i=Object(a["C"])("TopNavbar");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])(i)]),c],64)}var r=e("9d64"),s=e.n(r),i={class:"navbar navbar-expand-lg header-nav navbar-dark position-absolute w-100",style:{"z-index":"1"}},l={class:"container-fluid"},u=Object(a["h"])("img",{src:s.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),b=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},p={class:"navbar-nav"},f={class:"nav-item"},v=Object(a["g"])("首頁"),h=Object(a["h"])("span",{class:"text-uppercase"},"top",-1),O={class:"nav-item"},j=Object(a["g"])("商品列表"),g=Object(a["h"])("span",{class:"text-uppercase"},"lineup",-1),m={class:"nav-item"},x=Object(a["g"])("關於諾貝塔"),w=Object(a["h"])("span",{class:"text-uppercase"},"about",-1),_={class:"nav-item text-center"},k={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},y=Object(a["g"])(" shopping_cart "),I={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},T=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1);function C(t,n,e,c,o,r){var s=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",i,[Object(a["h"])("div",l,[Object(a["h"])("h1",null,[Object(a["h"])(s,{class:"navbar-brand",to:"/"},{default:Object(a["M"])((function(){return[u]})),_:1})]),b,Object(a["h"])("div",d,[Object(a["h"])("ul",p,[Object(a["h"])("li",f,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(a["M"])((function(){return[v,h]})),_:1})]),Object(a["h"])("li",O,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(a["M"])((function(){return[j,g]})),_:1})]),Object(a["h"])("li",m,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(a["M"])((function(){return[x,w]})),_:1})]),Object(a["h"])("li",_,[Object(a["h"])(s,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",k,[y,o.cartItems?(Object(a["v"])(),Object(a["d"])("span",I,[Object(a["g"])(Object(a["F"])(o.cartItems)+" ",1),T])):Object(a["e"])("",!0)])]})),_:1})])])])])])}e("99af");var M=e("3d4f"),N={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(n).then((function(n){n.data.success&&(t.cartItems=n.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),M["a"].on("update-cart",(function(){t.getCartItem()}))}};N.render=C;var D=N,E={components:{TopNavbar:D}};E.render=o;n["default"]=E}}]);
//# sourceMappingURL=chunk-278593d8.f9075e26.js.map