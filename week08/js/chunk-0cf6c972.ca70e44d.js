(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf6c972"],{2532:function(e,t,a){"use strict";var c=a("23e7"),n=a("5a34"),r=a("1d80"),o=a("ab13");c({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(r(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},2673:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"bg-cover--02"},r={class:"nav-header"},o={"aria-label":"breadcrumb"},i={class:"breadcrumb"},s={class:"breadcrumb-item"},l=Object(c["createTextVNode"])("首頁"),d=Object(c["createVNode"])("li",{class:"breadcrumb-item text-light active","aria-current":"page"}," 最新消息 ",-1),u={class:"container-fluid pb-5 bg-01"},b={id:"main",class:"container-lg content"},p=Object(c["createVNode"])("h2",{class:"pt-4 text-light"},"最新消息",-1),g={class:"row mt-4"},f={class:"card h-100 card-articles"},v={class:"card-body d-flex flex-column py-2"},O={class:"mb-1 fs-7"},j={class:"card-title mb-4"},m={class:"card-text mt-2 text-muted card-articles__date"},h={class:"d-flex justify-content-center mt-5 mb-4"};function N(e,t,a,N,x,V){var k=Object(c["resolveComponent"])("Navbar"),y=Object(c["resolveComponent"])("router-link"),B=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("header",r,[Object(c["createVNode"])(k)]),Object(c["createVNode"])("nav",o,[Object(c["createVNode"])("ol",i,[Object(c["createVNode"])("li",s,[Object(c["createVNode"])(y,{class:"text-light",to:"/"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]),d])]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",b,[p,Object(c["createVNode"])("div",g,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(x.articles,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t,class:"col-12 col-sm-6 col-md-4 col-lg-3 mb-4"},[Object(c["createVNode"])("div",f,[Object(c["createVNode"])(y,{to:"/article/".concat(t.id),class:"\r\n                  d-flex\r\n                  flex-column\r\n                  text-decoration-none\r\n                  stretched-link\r\n                  h-100\r\n                "},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("img",{src:t.image,alt:"",class:"card-img-top img-cover"},null,8,["src"]),Object(c["createVNode"])("div",v,[Object(c["createVNode"])("span",O,Object(c["toDisplayString"])(t.tag),1),Object(c["createVNode"])("h5",j,Object(c["toDisplayString"])(t.title),1),Object(c["createVNode"])("small",m,[Object(c["createVNode"])("time",{datetime:e.$filters.datetime(t.create_at)},Object(c["toDisplayString"])(e.$filters.date(t.create_at)),9,["datetime"])])])]})),_:2},1032,["to"])])])})),128))]),Object(c["createVNode"])("div",h,[Object(c["createVNode"])(B,{page:x.pagination,onGetPage:V.getArticles},null,8,["page","onGetPage"])])])])])}a("99af");var x=a("d178"),V={"aria-label":"Page navigation example"},k={class:"c-pagination"},y=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),B=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function F(e,t,a,n,r,o){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",V,[Object(c["createVNode"])("ul",k,[Object(c["createVNode"])("li",{class:["c-page-item",{disabled:!a.page.has_pre}]},[Object(c["createVNode"])("a",{class:"c-page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("get-page",a.page.current_page-1)}),["prevent"]))},[y])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.page.total_pages,(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["c-page-item",{active:t===a.page.current_page}],key:"pagination"+n},[Object(c["createVNode"])("a",{class:"c-page-link",href:"#",onClick:Object(c["withModifiers"])((function(a){return e.$emit("get-page",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["c-page-item",{disabled:!a.page.has_next}]},[Object(c["createVNode"])("a",{class:"c-page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(t){return e.$emit("get-page",a.page.current_page+1)}),["prevent"]))},[B])],2)])])}var w={props:{page:{type:Object,default:function(){return{}}}}};w.render=F;var C=w,T={data:function(){return{articles:{},pagination:{}}},components:{Navbar:x["a"],Pagination:C},methods:{getArticles:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pagination.current_page||1,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/articles?page=").concat(t);this.$http.get(a).then((function(t){if(t.data.success){var a=t.data,c=a.articles,n=a.pagination;e.articles=c,e.pagination=n,console.log(e.articles)}})).catch((function(e){console.log(e)}))}},mounted:function(){console.clear(),this.getArticles()}};T.render=N;t["default"]=T},"3d4f":function(e,t,a){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,a){var c=e.get(t);c?c.push(a):e.set(t,[a])},off:function(t,a){var c=e.get(t);c&&(a?c.splice(c.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var c=e.get(t);c&&c.slice().map((function(e){e(a)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,a)}))}}},n=c();t["a"]=n},"44e7":function(e,t,a){var c=a("861d"),n=a("c6b6"),r=a("b622"),o=r("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,a){var c=a("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"9fe6":function(e,t,a){"use strict";a("caad"),a("2532"),a("a434");t["a"]={methods:{saveLocalStorage:function(e){var t=JSON.stringify(e);localStorage.setItem("Favorite",t)},getLocalStorage:function(){return JSON.parse(localStorage.getItem("Favorite"))},addMyFavorite:function(e){this.myFavorite.includes(e)?this.myFavorite.splice(this.myFavorite.indexOf(e),1):this.myFavorite.push(e),this.saveLocalStorage(this.myFavorite),this.emitter.emit("update-favorite")}}}},a434:function(e,t,a){"use strict";var c=a("23e7"),n=a("23cb"),r=a("a691"),o=a("50c4"),i=a("7b0b"),s=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),b=Math.max,p=Math.min,g=9007199254740991,f="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,c,d,u,v,O,j=i(this),m=o(j.length),h=n(e,m),N=arguments.length;if(0===N?a=c=0:1===N?(a=0,c=m-h):(a=N-2,c=p(b(r(t),0),m-h)),m+a-c>g)throw TypeError(f);for(d=s(j,c),u=0;u<c;u++)v=h+u,v in j&&l(d,u,j[v]);if(d.length=c,a<c){for(u=h;u<m-c;u++)v=u+c,O=u+a,v in j?j[O]=j[v]:delete j[O];for(u=m;u>m-c+a;u--)delete j[u-1]}else if(a>c)for(u=m-c;u>h;u--)v=u+c-1,O=u+a-1,v in j?j[O]=j[v]:delete j[O];for(u=0;u<a;u++)j[u+h]=arguments[u+2];return j.length=m-c+a,d}})},ab13:function(e,t,a){var c=a("b622"),n=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,"/./"[e](t)}catch(c){}}return!1}},caad:function(e,t,a){"use strict";var c=a("23e7"),n=a("4d64").includes,r=a("44d2");c({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d178:function(e,t,a){"use strict";var c=a("7a23"),n={class:"\r\n      navbar navbar-expand-lg navbar-dark\r\n      bg-dark\r\n      position-fixed\r\n      header-nav\r\n      w-100\r\n      nav-bar\r\n    ",style:{"z-index":"10"}},r={class:"container-fluid"},o={class:"w-auto"},i=Object(c["createVNode"])("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626951642442.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UP6QtkXC9JnrYjnguN%2FrLpP3eFkq%2Fy84Tpk7MB7OwBY18SbD5rumr4N29ezT%2FyrFH%2FWT97RHlnjGnHN6tbh%2B5QcFTJCcjH%2BjeHKg%2BCK%2BuGi1ICAuqADwFh%2FzyRudSZU9%2BcVe%2B%2BoY6t1JK3I%2BrPpNFd5ruoryyTgfeOT8ekewGXd7HxNJRBIfWzC1kfFn%2BJI%2BF%2F9RshF3veGS80eYqcBoeR6yBe4J0tNWyzun1k4RbxlHhxdIZESTOlX%2F%2BUQp9t76HmMNOG%2BxcU6zZDR3UWaeIwvJiX3wkyrulHBe83YnxGpxdeZK%2BqNBlLAr3rt0dP4aTQQnYeff%2FgdOVX1AxesREQ%3D%3D",alt:"LITTLE WITCH NOBETA",width:"120",class:"d-inline-block align-text-top"},null,-1),s={class:"navbar-nav ms-auto d-lg-none pe-2 flex-row align-items-center"},l={key:0,class:"nav-item me-3"},d={class:"material-icons position-relative h1"},u=Object(c["createTextVNode"])(" star "),b={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},p=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),g={class:"nav-item me-2"},f={class:"material-icons position-relative h1"},v=Object(c["createTextVNode"])(" shopping_cart "),O={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},j=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),m=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},N={class:"navbar-nav"},x={class:"nav-item"},V=Object(c["createTextVNode"])("首頁"),k=Object(c["createVNode"])("span",{class:"text-uppercase"},"top",-1),y={class:"nav-item"},B=Object(c["createTextVNode"])("商品列表"),F=Object(c["createVNode"])("span",{class:"text-uppercase"},"lineup",-1),w={class:"nav-item"},C=Object(c["createTextVNode"])("最新消息"),T=Object(c["createVNode"])("span",{class:"text-uppercase"},"news",-1),S={key:0,class:"nav-item text-center d-none d-lg-block"},_={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},I=Object(c["createTextVNode"])(" star "),D={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},L=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),P={class:"nav-item text-center d-none d-lg-block"},A={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},J=Object(c["createTextVNode"])(" shopping_cart "),z={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},H=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1);function M(e,t,a,M,E,G){var R=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",n,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("h1",o,[Object(c["createVNode"])(R,{class:"navbar-brand",to:"/"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]),Object(c["createVNode"])("ul",s,[E.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",l,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",d,[u,E.myFavorite.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",b,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(E.myFavorite.length)+" ",1),p])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",g,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",f,[v,E.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",O,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(E.cartItems)+" ",1),j])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])]),m,Object(c["createVNode"])("div",h,[Object(c["createVNode"])("ul",N,[Object(c["createVNode"])("li",x,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(c["withCtx"])((function(){return[V,k]})),_:1})]),Object(c["createVNode"])("li",y,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(c["withCtx"])((function(){return[B,F]})),_:1})]),Object(c["createVNode"])("li",w,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/articles"},{default:Object(c["withCtx"])((function(){return[C,T]})),_:1})]),E.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",S,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",_,[I,E.myFavorite.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",D,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(E.myFavorite.length)+" ",1),L])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",P,[Object(c["createVNode"])(R,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",A,[J,E.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",z,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(E.cartItems)+" ",1),H])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])])])])])}a("99af"),a("159b");var E=a("3d4f"),G=a("9fe6"),R={data:function(){return{cartItems:"",favoriteProduct:[],myFavorite:this.getLocalStorage()||[]}},mixins:[G["a"]],methods:{getCartItem:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartItems=t.data.data.carts.length)})).catch((function(e){return e}))},getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.myFavorite.length>0&&this.myFavorite.forEach((function(t){var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&e.favoriteProduct.push(t.data.product)})).catch((function(e){return e}))}))}},mounted:function(){var e=this;this.getCartItem(),this.getFavorite(),E["a"].on("update-cart",(function(){e.getCartItem()})),E["a"].on("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))},unmounted:function(){var e=this;E["a"].off("update-cart",(function(){e.getCartItem()})),E["a"].off("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))}};R.render=M;t["a"]=R}}]);
//# sourceMappingURL=chunk-0cf6c972.ca70e44d.js.map