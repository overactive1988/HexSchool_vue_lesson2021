(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e99f7a"],{2532:function(e,t,a){"use strict";var c=a("23e7"),r=a("5a34"),n=a("1d80"),o=a("ab13");c({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(n(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"3d4f":function(e,t,a){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,a){var c=e.get(t);c?c.push(a):e.set(t,[a])},off:function(t,a){var c=e.get(t);c&&(a?c.splice(c.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var c=e.get(t);c&&c.slice().map((function(e){e(a)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,a)}))}}},r=c();t["a"]=r},"44e7":function(e,t,a){var c=a("861d"),r=a("c6b6"),n=a("b622"),o=n("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"466d":function(e,t,a){"use strict";var c=a("d784"),r=a("825a"),n=a("50c4"),o=a("1d80"),i=a("8aa5"),s=a("14c3");c("match",(function(e,t,a){return[function(t){var a=o(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,a):new RegExp(t)[e](String(a))},function(e){var c=a(t,this,e);if(c.done)return c.value;var o=r(this),l=String(e);if(!o.global)return s(o,l);var d=o.unicode;o.lastIndex=0;var u,b=[],p=0;while(null!==(u=s(o,l))){var v=String(u[0]);b[p]=v,""===v&&(o.lastIndex=i(l,n(o.lastIndex),d)),p++}return 0===p?null:b}]}))},"4de4":function(e,t,a){"use strict";var c=a("23e7"),r=a("b727").filter,n=a("1dde"),o=n("filter");c({target:"Array",proto:!0,forced:!o},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,a){var c=a("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"9fe6":function(e,t,a){"use strict";a("caad"),a("2532"),a("a434");t["a"]={methods:{saveLocalStorage:function(e){var t=JSON.stringify(e);localStorage.setItem("Favorite",t)},getLocalStorage:function(){return JSON.parse(localStorage.getItem("Favorite"))},addMyFavorite:function(e){this.myFavorite.includes(e)?this.myFavorite.splice(this.myFavorite.indexOf(e),1):this.myFavorite.push(e),this.saveLocalStorage(this.myFavorite),this.emitter.emit("update-favorite")}}}},a434:function(e,t,a){"use strict";var c=a("23e7"),r=a("23cb"),n=a("a691"),o=a("50c4"),i=a("7b0b"),s=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),b=Math.max,p=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,c,d,u,h,g,O=i(this),m=o(O.length),j=r(e,m),N=arguments.length;if(0===N?a=c=0:1===N?(a=0,c=m-j):(a=N-2,c=p(b(n(t),0),m-j)),m+a-c>v)throw TypeError(f);for(d=s(O,c),u=0;u<c;u++)h=j+u,h in O&&l(d,u,O[h]);if(d.length=c,a<c){for(u=j;u<m-c;u++)h=u+c,g=u+a,h in O?O[g]=O[h]:delete O[g];for(u=m;u>m-c+a;u--)delete O[u-1]}else if(a>c)for(u=m-c;u>j;u--)h=u+c-1,g=u+a-1,h in O?O[g]=O[h]:delete O[g];for(u=0;u<a;u++)O[u+j]=arguments[u+2];return O.length=m-c+a,d}})},ab13:function(e,t,a){var c=a("b622"),r=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,"/./"[e](t)}catch(c){}}return!1}},b0c0:function(e,t,a){var c=a("83ab"),r=a("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,s="name";c&&!(s in n)&&r(n,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})},b6d4:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),r={class:"bg-cover--01"},n={class:"nav-header"},o={"aria-label":"breadcrumb"},i={class:"breadcrumb"},s={class:"breadcrumb-item"},l=Object(c["createTextVNode"])("首頁"),d=Object(c["createVNode"])("li",{class:"breadcrumb-item text-light active","aria-current":"page"}," 收藏清單 ",-1),u={class:"container-fluid pb-5 bg-01"},b={id:"main",class:"container-lg content"},p=Object(c["createVNode"])("h2",{class:"pt-4 text-light"},"收藏清單",-1),v={class:"mt-4 text-end text-light"},f=Object(c["createTextVNode"])(" 您共有 "),h={id:"productCount"},g=Object(c["createTextVNode"])(" 件收藏商品 "),O={class:"ms-auto"},m={class:"\r\n                row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4\r\n                g-3\r\n                list-unstyled\r\n              "},j={class:"card h-100"},N={class:"card-body"},V={class:"card-title"},x={class:"card-text"},y={class:"row gx-2",style:{"z-index":"8"}},k={class:"col-6"},F={key:0,class:"material-icons animate-spin"},w=Object(c["createTextVNode"])(" 加到購物車 "),B={class:"col-6"},C={key:1},S=Object(c["createVNode"])("h3",{class:"h4 text-center text-light"}," 您目前沒有收藏任何商品，趕快去商品頁面逛逛吧～ ",-1),T={class:"nav-products mt-5"},I={class:"nav-products__lists article-list w-100 w-md-50 mx-auto","data-aos":"fade-up","data-aos-easing":"linear","data-aos-duration":"600"},_={class:"nav-products__list"},D=Object(c["createVNode"])("span",null,"所有商品",-1),L={class:"d-flex my-4"},P=Object(c["createTextVNode"])("返回");function M(e,t,a,M,z,A){var E=Object(c["resolveComponent"])("Navbar"),J=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",r,[Object(c["createVNode"])("header",n,[Object(c["createVNode"])(E)]),Object(c["createVNode"])("nav",o,[Object(c["createVNode"])("ol",i,[Object(c["createVNode"])("li",s,[Object(c["createVNode"])(J,{class:"text-light",to:"/"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]),d])]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("main",b,[p,this.favoriteProduct.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[Object(c["createVNode"])("p",v,[f,Object(c["createVNode"])("span",h,Object(c["toDisplayString"])(this.favoriteProduct.length),1),g]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])("ul",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(z.favoriteProduct,(function(a){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:a,class:"col"},[Object(c["createVNode"])("div",j,[Object(c["createVNode"])(J,{to:"/product/".concat(a.id),class:"text-decoration-none stretched-link h-100"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("img",{src:a.imageUrl,class:"card-img-top",alt:"item.title"},null,8,["src"]),Object(c["createVNode"])("div",N,[Object(c["createVNode"])("h5",V,Object(c["toDisplayString"])(a.title),1),Object(c["createVNode"])("p",x,Object(c["toDisplayString"])(a.price)+"NTD",1)])]})),_:2},1032,["to"]),Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",k,[Object(c["createVNode"])("button",{onClick:function(e){return A.addCart(a.id)},type:"button",disabled:z.loadingStatus.loadingItem===a.id+1,class:"btn btn-nobeta btn-sm card-lick__button w-100"},[z.loadingStatus.loadingItem===a.id+1?(Object(c["openBlock"])(),Object(c["createBlock"])("span",F," cached ")):Object(c["createCommentVNode"])("",!0),w],8,["onClick","disabled"])]),Object(c["createVNode"])("div",B,[Object(c["createVNode"])("button",{onClick:[Object(c["withModifiers"])((function(t){return e.addMyFavorite(a.id)}),["prevent"]),t[1]||(t[1]=function(e){return A.getFavorite()})],type:"button",disabled:z.loadingStatus.loadingItem===a.id+2,class:"btn btn-secondary btn-sm card-lick__button w-100"}," 取消收藏 ",8,["onClick","disabled"])])])])])})),128))])])],64)):(Object(c["openBlock"])(),Object(c["createBlock"])("div",C,[S,Object(c["createVNode"])("nav",T,[Object(c["createVNode"])("ul",I,[Object(c["createVNode"])("li",_,[Object(c["createVNode"])("a",{href:"#","aria-current":"true",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return A.clickCategory()}),["prevent"]))},[D])]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(this.category,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e.name,class:"nav-products__list"},[Object(c["createVNode"])("a",{href:"#","aria-current":"true",onClick:Object(c["withModifiers"])((function(t){return A.clickCategory(e.name)}),["prevent"])},[Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.name),1)],8,["onClick"])])})),128))])])])),Object(c["createVNode"])("div",L,[Object(c["createVNode"])(J,{class:"btn btn-nobeta",to:"/products"},{default:Object(c["withCtx"])((function(){return[P]})),_:1})])])])])}a("159b"),a("99af"),a("4de4"),a("ac1f"),a("466d");var z=a("d178"),A=a("9fe6"),E=a("3d4f"),J={props:["propsCategory"],data:function(){return{loadingStatus:{loadingItem:""},products:[],product:{},cart:{},favoriteProduct:[],myFavorite:this.getLocalStorage()||[],category:[{name:"諾貝塔"},{name:"塔妮亞"},{name:"莫妮卡"},{name:"其他周邊"}]}},components:{Navbar:z["a"]},mixins:[A["a"]],inject:["emitter"],methods:{showAlert:function(e){this.$swal(e.data.message)},getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.myFavorite.length>0&&this.myFavorite.forEach((function(t){var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&e.favoriteProduct.push(t.data.product)})).catch((function(e){return e}))}))},addCart:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.addMyFavorite(e),this.loadingStatus.loadingItem=e+1;var c={data:{product_id:e,qty:a}},r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.post(r,c).then((function(e){t.loadingStatus.loadingItem="",t.emitter.emit("update-cart"),t.showAlert(e)})).catch((function(e){console.log(e)})),this.getFavorite()},clickCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";E["a"].emit("categoryTop",e),this.$router.push("/products/")}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return t.category.match(e.selectCategory)}))}},mounted:function(){console.clear(),this.getFavorite()}};J.render=M;t["default"]=J},caad:function(e,t,a){"use strict";var c=a("23e7"),r=a("4d64").includes,n=a("44d2");c({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d178:function(e,t,a){"use strict";var c=a("7a23"),r={class:"\r\n      navbar navbar-expand-lg navbar-dark\r\n      bg-dark\r\n      position-fixed\r\n      header-nav\r\n      w-100\r\n      nav-bar\r\n    ",style:{"z-index":"10"}},n={class:"container-fluid"},o={class:"w-auto"},i=Object(c["createVNode"])("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626951642442.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UP6QtkXC9JnrYjnguN%2FrLpP3eFkq%2Fy84Tpk7MB7OwBY18SbD5rumr4N29ezT%2FyrFH%2FWT97RHlnjGnHN6tbh%2B5QcFTJCcjH%2BjeHKg%2BCK%2BuGi1ICAuqADwFh%2FzyRudSZU9%2BcVe%2B%2BoY6t1JK3I%2BrPpNFd5ruoryyTgfeOT8ekewGXd7HxNJRBIfWzC1kfFn%2BJI%2BF%2F9RshF3veGS80eYqcBoeR6yBe4J0tNWyzun1k4RbxlHhxdIZESTOlX%2F%2BUQp9t76HmMNOG%2BxcU6zZDR3UWaeIwvJiX3wkyrulHBe83YnxGpxdeZK%2BqNBlLAr3rt0dP4aTQQnYeff%2FgdOVX1AxesREQ%3D%3D",alt:"LITTLE WITCH NOBETA",width:"120",class:"d-inline-block align-text-top"},null,-1),s={class:"navbar-nav ms-auto d-lg-none pe-2 flex-row align-items-center"},l={key:0,class:"nav-item me-3"},d={class:"material-icons position-relative h1"},u=Object(c["createTextVNode"])(" star "),b={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},p=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),v={class:"nav-item me-2"},f={class:"material-icons position-relative h1"},h=Object(c["createTextVNode"])(" shopping_cart "),g={key:0,class:"\r\n                  position-absolute\r\n                  top-0\r\n                  start-100\r\n                  translate-middle\r\n                  badge\r\n                  rounded-pill\r\n                  bg-secondary\r\n                  font-monospace\r\n                  lh-xs\r\n                "},O=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),m=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},N={class:"navbar-nav"},V={class:"nav-item"},x=Object(c["createTextVNode"])("首頁"),y=Object(c["createVNode"])("span",{class:"text-uppercase"},"top",-1),k={class:"nav-item"},F=Object(c["createTextVNode"])("商品列表"),w=Object(c["createVNode"])("span",{class:"text-uppercase"},"lineup",-1),B={class:"nav-item"},C=Object(c["createTextVNode"])("最新消息"),S=Object(c["createVNode"])("span",{class:"text-uppercase"},"news",-1),T={class:"nav-item"},I=Object(c["createTextVNode"])("關於諾貝塔"),_=Object(c["createVNode"])("span",{class:"text-uppercase"},"about",-1),D={key:0,class:"nav-item text-center d-none d-lg-block"},L={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},P=Object(c["createTextVNode"])(" star "),M={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},z=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1),A={class:"nav-item text-center d-none d-lg-block"},E={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},J=Object(c["createTextVNode"])(" shopping_cart "),H={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                    lh-xs\r\n                  "},R=Object(c["createVNode"])("span",{class:"visually-hidden"},"unread messages",-1);function G(e,t,a,G,Q,U){var Y=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",r,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("h1",o,[Object(c["createVNode"])(Y,{class:"navbar-brand",to:"/"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]),Object(c["createVNode"])("ul",s,[Q.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",l,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",d,[u,Q.myFavorite.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",b,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Q.myFavorite.length)+" ",1),p])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",v,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",f,[h,Q.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",g,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Q.cartItems)+" ",1),O])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])]),m,Object(c["createVNode"])("div",j,[Object(c["createVNode"])("ul",N,[Object(c["createVNode"])("li",V,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(c["withCtx"])((function(){return[x,y]})),_:1})]),Object(c["createVNode"])("li",k,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(c["withCtx"])((function(){return[F,w]})),_:1})]),Object(c["createVNode"])("li",B,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/articles"},{default:Object(c["withCtx"])((function(){return[C,S]})),_:1})]),Object(c["createVNode"])("li",T,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(c["withCtx"])((function(){return[I,_]})),_:1})]),Q.myFavorite.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("li",D,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",L,[P,Q.myFavorite.length?(Object(c["openBlock"])(),Object(c["createBlock"])("span",M,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Q.myFavorite.length)+" ",1),z])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("li",A,[Object(c["createVNode"])(Y,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",E,[J,Q.cartItems?(Object(c["openBlock"])(),Object(c["createBlock"])("span",H,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Q.cartItems)+" ",1),R])):Object(c["createCommentVNode"])("",!0)])]})),_:1})])])])])])}a("99af"),a("159b");var Q=a("3d4f"),U=a("9fe6"),Y={data:function(){return{cartItems:"",favoriteProduct:[],myFavorite:this.getLocalStorage()||[]}},mixins:[U["a"]],methods:{getCartItem:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartItems=t.data.data.carts.length)})).catch((function(e){return e}))},getFavorite:function(){var e=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.myFavorite.length>0&&this.myFavorite.forEach((function(t){var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&e.favoriteProduct.push(t.data.product)})).catch((function(e){return e}))}))}},mounted:function(){var e=this;this.getCartItem(),this.getFavorite(),Q["a"].on("update-cart",(function(){e.getCartItem()})),Q["a"].on("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))},unmounted:function(){var e=this;Q["a"].off("update-cart",(function(){e.getCartItem()})),Q["a"].off("update-favorite",(function(){e.myFavorite=e.getLocalStorage(),e.getFavorite()}))}};Y.render=G;t["a"]=Y}}]);
//# sourceMappingURL=chunk-71e99f7a.4729e160.js.map