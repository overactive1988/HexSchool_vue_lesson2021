(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278593d8"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),r=n("2d00"),o=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?c.f(t,o,r(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),i=n("50c4"),l=n("8418"),b=n("65f0"),u=n("1dde"),d=n("b622"),p=n("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,f="Maximum allowed index exceeded",O=p>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),j=u("concat"),g=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},m=!O||!j;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,r,o=s(this),u=b(o,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],g(r)){if(c=i(r.length),d+c>v)throw TypeError(f);for(n=0;n<c;n++,d++)n in r&&l(u,d,r[n])}else{if(d>=v)throw TypeError(f);l(u,d++,r)}return u.length=d,u}})},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a707c5a8.png"},ec27:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"top"},r={class:"container-fluid position-relative"},o=Object(a["h"])("div",{class:"top-scrolldown"},[Object(a["g"])(" SCROLL DOWN"),Object(a["h"])("span",{class:"top-scrolldown__line"})],-1),s={class:"container position-relative vh-100"},i={class:"top__inner"},l=Object(a["h"])("h2",{class:"top__title text-light"},[Object(a["g"])("小魔女諾貝塔"),Object(a["h"])("br"),Object(a["g"])("雜貨工坊")],-1),b=Object(a["h"])("p",{class:"top__subtitle text-light h6 fw-normal mb-2 mb-md-4"}," 所有小魔女諾貝塔相關的商品，只有在這裡獨家販售 ",-1),u=Object(a["g"])("商品列表"),d=Object(a["h"])("span",{class:"material-icons"}," navigate_next ",-1);function p(t,e,n,p,h,v){var f=Object(a["C"])("TopNavbar"),O=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])(f)]),Object(a["h"])("main",null,[Object(a["h"])("section",c,[Object(a["h"])("div",r,[o,Object(a["h"])("div",s,[Object(a["h"])("div",i,[l,b,Object(a["h"])(O,{class:"top__button btn btn-outline-light w-100",to:"/products"},{default:Object(a["M"])((function(){return[u,d]})),_:1})])])])])])],64)}var h=n("9d64"),v=n.n(h),f={class:"\r\n      nav-top\r\n      navbar navbar-expand-lg\r\n      header-nav\r\n      navbar-dark\r\n      position-absolute\r\n      w-100\r\n    ",style:{"z-index":"1"}},O={class:"container-fluid"},j=Object(a["h"])("img",{src:v.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),g=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),m={class:"\r\n          nav-top__collapse\r\n          collapse\r\n          navbar-collapse\r\n          position-lg-relative\r\n          justify-content-lg-end\r\n        ",id:"navbarNavDropdown"},x={class:"navbar-nav"},_={class:"nav-item"},w=Object(a["g"])("首頁"),k=Object(a["h"])("span",{class:"text-uppercase"},"top",-1),y={class:"nav-item"},C=Object(a["g"])("商品列表"),I=Object(a["h"])("span",{class:"text-uppercase"},"lineup",-1),T={class:"nav-item"},M=Object(a["g"])("關於諾貝塔"),N=Object(a["h"])("span",{class:"text-uppercase"},"about",-1),D={class:"nav-item text-center"},E={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},L=Object(a["g"])(" shopping_cart "),z={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},A=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1);function B(t,e,n,c,r,o){var s=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",f,[Object(a["h"])("div",O,[Object(a["h"])("h1",null,[Object(a["h"])(s,{class:"navbar-brand",to:"/"},{default:Object(a["M"])((function(){return[j]})),_:1})]),g,Object(a["h"])("div",m,[Object(a["h"])("ul",x,[Object(a["h"])("li",_,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(a["M"])((function(){return[w,k]})),_:1})]),Object(a["h"])("li",y,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(a["M"])((function(){return[C,I]})),_:1})]),Object(a["h"])("li",T,[Object(a["h"])(s,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(a["M"])((function(){return[M,N]})),_:1})]),Object(a["h"])("li",D,[Object(a["h"])(s,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",E,[L,r.cartItems?(Object(a["v"])(),Object(a["d"])("span",z,[Object(a["g"])(Object(a["F"])(r.cartItems)+" ",1),A])):Object(a["e"])("",!0)])]})),_:1})])])])])])}n("99af");var J=n("3d4f"),S={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cartItems=e.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),J["a"].on("update-cart",(function(){t.getCartItem()}))}};S.render=B;var W=S,F={components:{TopNavbar:W}};F.render=p;e["default"]=F}}]);
//# sourceMappingURL=chunk-278593d8.45fc2bb8.js.map