(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d2c965"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),r=n("2d00"),o=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?c.f(t,o,r(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),i=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),b=n("b622"),f=n("2d00"),p=b("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",O=f>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=d("concat"),m=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},g=!O||!j;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,n,a,c,r,o=s(this),d=u(o,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],m(r)){if(c=i(r.length),b+c>v)throw TypeError(h);for(n=0;n<c;n++,b++)n in r&&l(d,b,r[n])}else{if(b>=v)throw TypeError(h);l(d,b++,r)}return d.length=b,d}})},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a707c5a8.png"},c228:function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,r,o){var s=Object(a["C"])("Navbar"),i=Object(a["C"])("router-view");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])(s)]),Object(a["h"])(i,{"props-form":r.tempform},null,8,["props-form"])],64)}var r=n("3d4f"),o=n("d178"),s={data:function(){return{tempform:{user:{name:"",email:"",tel:"",address:"",payment_method:""},message:""}}},components:{Navbar:o["a"]},mounted:function(){console.clear()},created:function(){var t=this;r["a"].on("sendForm",(function(e){t.tempform=e}))}};s.render=c;e["default"]=s},d178:function(t,e,n){"use strict";var a=n("7a23"),c=n("9d64"),r=n.n(c),o={class:"\r\n      navbar navbar-expand-lg navbar-dark\r\n      bg-dark\r\n      position-fixed\r\n      header-nav\r\n      w-100\r\n    ",style:{"z-index":"10"}},s={class:"container-fluid"},i={class:"w-50 w-sm-auto"},l=Object(a["h"])("img",{src:r.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),u={class:"navbar-nav ms-auto d-block d-lg-none pe-2",style:{}},d={class:"nav-item",style:{}},b={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},f=Object(a["g"])(" shopping_cart "),p={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},v=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1),h=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),O={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},j={class:"navbar-nav"},m={class:"nav-item"},g=Object(a["g"])("首頁"),x=Object(a["h"])("span",{class:"text-uppercase"},"top",-1),k={class:"nav-item"},w=Object(a["g"])("商品列表"),y=Object(a["h"])("span",{class:"text-uppercase"},"lineup",-1),I={class:"nav-item"},_=Object(a["g"])("最新消息"),M=Object(a["h"])("span",{class:"text-uppercase"},"news",-1),C={class:"nav-item"},T=Object(a["g"])("關於諾貝塔"),N=Object(a["h"])("span",{class:"text-uppercase"},"about",-1),E={class:"nav-item text-center d-none d-lg-block"},z={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},D=Object(a["g"])(" shopping_cart "),F={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},A=Object(a["h"])("span",{class:"visually-hidden"},"unread messages",-1);function B(t,e,n,c,r,B){var J=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",o,[Object(a["h"])("div",s,[Object(a["h"])("h1",i,[Object(a["h"])(J,{class:"navbar-brand",to:"/"},{default:Object(a["M"])((function(){return[l]})),_:1})]),Object(a["h"])("ul",u,[Object(a["h"])("li",d,[Object(a["h"])(J,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",b,[f,r.cartItems?(Object(a["v"])(),Object(a["d"])("span",p,[Object(a["g"])(Object(a["F"])(r.cartItems)+" ",1),v])):Object(a["e"])("",!0)])]})),_:1})])]),h,Object(a["h"])("div",O,[Object(a["h"])("ul",j,[Object(a["h"])("li",m,[Object(a["h"])(J,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(a["M"])((function(){return[g,x]})),_:1})]),Object(a["h"])("li",k,[Object(a["h"])(J,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(a["M"])((function(){return[w,y]})),_:1})]),Object(a["h"])("li",I,[Object(a["h"])(J,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/articles"},{default:Object(a["M"])((function(){return[_,M]})),_:1})]),Object(a["h"])("li",C,[Object(a["h"])(J,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(a["M"])((function(){return[T,N]})),_:1})]),Object(a["h"])("li",E,[Object(a["h"])(J,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(a["M"])((function(){return[Object(a["h"])("span",z,[D,r.cartItems?(Object(a["v"])(),Object(a["d"])("span",F,[Object(a["g"])(Object(a["F"])(r.cartItems)+" ",1),A])):Object(a["e"])("",!0)])]})),_:1})])])])])])}n("99af");var J=n("3d4f"),L={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cartItems=e.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),J["a"].on("update-cart",(function(){t.getCartItem()}))}};L.render=B;e["a"]=L}}]);
//# sourceMappingURL=chunk-79d2c965.9e5e378e.js.map