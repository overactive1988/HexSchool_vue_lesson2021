(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3732bb38"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),r=n("2d00"),s=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},"6f92":function(t,e,n){t.exports=n.p+"img/about_bg.370848e4.jpg"},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var s=a(e);s in t?c.f(t,s,r(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),r=n("e8b5"),s=n("861d"),o=n("7b0b"),i=n("50c4"),l=n("8418"),u=n("65f0"),b=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",j=f>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=b("concat"),g=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},m=!j||!O;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,r,s=o(this),b=u(s,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],g(r)){if(c=i(r.length),d+c>v)throw TypeError(h);for(n=0;n<c;n++,d++)n in r&&l(b,d,r[n])}else{if(d>=v)throw TypeError(h);l(b,d++,r)}return b.length=d,b}})},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a707c5a8.png"},d178:function(t,e,n){"use strict";var a=n("7a23"),c=n("9d64"),r=n.n(c),s={class:"\r\n      navbar navbar-expand-lg navbar-dark\r\n      bg-dark\r\n      position-fixed\r\n      header-nav\r\n      w-100\r\n    ",style:{"z-index":"10"}},o={class:"container-fluid"},i={class:"w-50 w-sm-auto"},l=Object(a["h"])("img",{src:r.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),u={class:"navbar-nav ms-auto d-block d-lg-none pe-2",style:{}},b={class:"nav-item",style:{}},d={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},f=Object(a["g"])(" shopping_cart "),p={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                "},v=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1),h=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},O={class:"navbar-nav"},g={class:"nav-item"},m=Object(a["g"])("首頁"),x=Object(a["h"])("span",{class:"text-uppercase"},"top",-1),k={class:"nav-item"},w=Object(a["g"])("商品列表"),y=Object(a["h"])("span",{class:"text-uppercase"},"lineup",-1),I={class:"nav-item"},_=Object(a["g"])("關於諾貝塔"),M=Object(a["h"])("span",{class:"text-uppercase"},"about",-1),C={class:"nav-item text-center d-none d-lg-block"},T={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},N=Object(a["g"])(" shopping_cart "),E={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},z=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1);function D(t,e,n,c,r,D){var A=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",s,[Object(a["h"])("div",o,[Object(a["h"])("h1",i,[Object(a["h"])(A,{class:"navbar-brand",to:"/"},{default:Object(a["M"])((function(){return[l]})),_:1})]),Object(a["h"])("ul",u,[Object(a["h"])("li",b,[Object(a["h"])(A,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",d,[f,r.cartItems?(Object(a["v"])(),Object(a["d"])("span",p,[Object(a["g"])(Object(a["F"])(r.cartItems)+" ",1),v])):Object(a["e"])("",!0)])]})),_:1})])]),h,Object(a["h"])("div",j,[Object(a["h"])("ul",O,[Object(a["h"])("li",g,[Object(a["h"])(A,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(a["M"])((function(){return[m,x]})),_:1})]),Object(a["h"])("li",k,[Object(a["h"])(A,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(a["M"])((function(){return[w,y]})),_:1})]),Object(a["h"])("li",I,[Object(a["h"])(A,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(a["M"])((function(){return[_,M]})),_:1})]),Object(a["h"])("li",C,[Object(a["h"])(A,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",T,[N,r.cartItems?(Object(a["v"])(),Object(a["d"])("span",E,[Object(a["g"])(Object(a["F"])(r.cartItems)+" ",1),z])):Object(a["e"])("",!0)])]})),_:1})])])])])])}n("99af");var A=n("3d4f"),B={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cartItems=e.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),A["a"].on("update-cart",(function(){t.getCartItem()}))}};B.render=D;e["a"]=B},f820:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=n("6f92"),r=n.n(c),s=Object(a["h"])("div",{class:"container content content-user"},[Object(a["h"])("h1",{class:"text-center pt-4"},"關於諾貝塔"),Object(a["h"])("figure",{class:"text-center"},[Object(a["h"])("img",{class:"img-fluid",src:r.a,alt:""})])],-1);function o(t,e,n,c,r,o){var i=Object(a["C"])("Navbar");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])(i)]),s],64)}var i=n("d178"),l={components:{Navbar:i["a"]}};l.render=o;e["default"]=l}}]);
//# sourceMappingURL=chunk-3732bb38.183b3224.js.map