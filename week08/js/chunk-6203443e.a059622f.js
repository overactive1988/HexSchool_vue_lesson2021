(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6203443e"],{"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),o=c("2d00"),s=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,c){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,c){var n=t.get(e);n?n.push(c):t.set(e,[c])},off:function(e,c){var n=t.get(e);n&&(c?n.splice(n.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var n=t.get(e);n&&n.slice().map((function(t){t(c)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,c)}))}}},a=n();e["a"]=a},6034:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=c("c40b"),o=c.n(a),s={class:"container-lg content mt-4"},l=Object(n["h"])("h1",{class:"text-center"},"確認購物車",-1),i=Object(n["h"])("figure",{class:"my-5 text-center mx-auto"},[Object(n["h"])("img",{class:"img-fluid",src:o.a,alt:"step1 確認購物車"})],-1),r={class:"text-end mb-2"},d={key:0,class:"material-icons animate-spin"},u=Object(n["g"])(" 清空購物車 "),b={class:"p-table table align-middle"},h=Object(n["h"])("thead",{class:"p-table__head"},[Object(n["h"])("tr",{class:"text-light"},[Object(n["h"])("th",{width:"30%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(n["h"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"},"數量"),Object(n["h"])("th",{width:"20%",class:"text-end fs-7 fs-sm-6"},"小計"),Object(n["h"])("th",{width:"20%"})])],-1),p={class:"p-table__body"},f={class:"p-table__foot"},j={class:"text-light"},O={colspan:"2"},g={class:"input-group mb-3 input-group-sm"},m={class:"input-group-append"},v={key:0,colspan:"2",class:"text-end"},y={key:0},x={key:1,class:"text-end"},C={key:0},k={colspan:"4",class:"text-end text-light"},_={key:1,class:"text-center"},w={class:"d-flex justify-content-between mb-4"},$=Object(n["g"])("繼續購物"),I=Object(n["g"])("下一步");function N(t,e,c,a,o,N){var S,A,P=Object(n["C"])("UserCart"),F=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["d"])("div",s,[l,i,o.cart.total>0?(Object(n["v"])(),Object(n["d"])(n["a"],{key:0},[Object(n["h"])("div",r,[Object(n["h"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return N.deleteCartAll&&N.deleteCartAll.apply(N,arguments)}),disabled:o.cart.carts<=1},[1===o.loadingStatus.loadingItem?(Object(n["v"])(),Object(n["d"])("span",d," cached ")):Object(n["e"])("",!0),u],8,["disabled"])]),Object(n["h"])("table",b,[h,Object(n["h"])("tbody",p,[o.cart.carts?(Object(n["v"])(),Object(n["d"])(P,{key:0,loading:o.loadingStatus,cartitem:o.cart,onDeleteCart:N.deleteCart,onAddProductNum:N.addProductNum,onCutProductNum:N.cutProductNum},null,8,["loading","cartitem","onDeleteCart","onAddProductNum","onCutProductNum"])):Object(n["e"])("",!0)]),Object(n["h"])("tfoot",f,[Object(n["h"])("tr",j,[Object(n["h"])("td",O,[Object(n["h"])("div",g,[Object(n["N"])(Object(n["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.coupon_code=t}),placeholder:"請輸入優惠碼"},null,512),[[n["J"],o.coupon_code]]),Object(n["h"])("div",m,[Object(n["h"])("button",{class:"btn btn-sm btn-outline-light ms-2",type:"button",onClick:e[3]||(e[3]=function(t){return N.addCouponCode()})}," 套用優惠碼 ")])])]),(null===(S=o.cart)||void 0===S||null===(A=S.carts)||void 0===A?void 0:A.length)>=1?(Object(n["v"])(),Object(n["d"])("td",v,[o.cart.final_total!==o.cart.total?(Object(n["v"])(),Object(n["d"])("del",y," 總計： "+Object(n["F"])(t.$filters.currency(this.cart.total))+" NTD",1)):(Object(n["v"])(),Object(n["d"])(n["a"],{key:1},[Object(n["g"])("總計： "+Object(n["F"])(t.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(n["v"])(),Object(n["d"])("td",x,"尚無商品"))]),o.cart.final_total!==o.cart.total?(Object(n["v"])(),Object(n["d"])("tr",C,[Object(n["h"])("td",k," 折扣價： "+Object(n["F"])(t.$filters.currency(o.cart.final_total))+" NTD ",1)])):Object(n["e"])("",!0)])])],64)):(Object(n["v"])(),Object(n["d"])("p",_,"請先將商品加入購物車")),Object(n["h"])("div",w,[Object(n["h"])(F,{class:"btn btn-secondary",to:"/products"},{default:Object(n["M"])((function(){return[$]})),_:1}),Object(n["h"])(F,{class:["btn btn-primary",{disabled:o.cart.carts<=1}],"aria-disabled":o.cart.carts<=1,to:"/cartcheck"},{default:Object(n["M"])((function(){return[I]})),_:1},8,["aria-disabled","class"])])])}c("99af");var S=c("3d4f"),A={class:"d-sm-flex align-items-center"},P={class:"ps-2"},F={class:"badge bg-primary"},q={class:"fs-7 fs-sm-6"},D={class:"input-group"},T={class:"input-group input-group-sm text-center mb-3 w-75 mx-auto"},M=Object(n["h"])("span",null,"-",-1),U={class:"form-control m-0 fs-7 fs-sm-6"},J=Object(n["h"])("span",null,"+",-1),B={class:"text-end fs-7 fs-sm-6"},E={key:0,class:"text-success"},V={class:"text-end"},z={key:0,class:"material-icons animate-spin"},G=Object(n["g"])(" 刪除 ");function H(t,e,c,a,o,s){var l=Object(n["C"])("router-link");return Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(c.cartitem.carts,(function(e){return Object(n["v"])(),Object(n["d"])("tr",{key:e.id},[Object(n["h"])("td",null,[Object(n["h"])(l,{class:"p-table__link text-decoration-none",to:"/product/".concat(e.product.id)},{default:Object(n["M"])((function(){return[Object(n["h"])("figure",A,[Object(n["h"])("img",{class:"product-img d-none d-sm-block",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(n["h"])("figcaption",P,[Object(n["h"])("span",F,Object(n["F"])(e.product.category),1),Object(n["h"])("p",q,Object(n["F"])(e.product.title),1)])])]})),_:2},1032,["to"])]),Object(n["h"])("td",null,[Object(n["h"])("div",D,[Object(n["h"])("div",T,[Object(n["h"])("button",{type:"button",onClick:function(c){return t.$emit("cut-product-num",e)},class:["btn-dark btn input-group-text rounded-0 fs-8 border-end-0",{disabled:e.qty<=1}],disabled:e.id===c.loading.loadingItem},[M],10,["onClick","disabled"]),Object(n["h"])("p",U,Object(n["F"])(e.qty),1),Object(n["h"])("button",{type:"button",onClick:function(c){return t.$emit("add-product-num",e)},class:"btn-dark btn input-group-text rounded-0 fs-8",disabled:e.id===c.loading.loadingItem},[J],8,["onClick","disabled"])])])]),Object(n["h"])("td",B,[e.final_total!==e.total?(Object(n["v"])(),Object(n["d"])("small",E,"折扣價：")):Object(n["e"])("",!0),Object(n["g"])(Object(n["F"])(t.$filters.currency(e.final_total))+" NTD ",1)]),Object(n["h"])("td",V,[Object(n["h"])("button",{onClick:function(c){return t.$emit("delete-cart",e)},type:"button",class:"btn btn-outline-danger btn-sm fs-7 fs-sm-6"},[c.loading.loadingItem===e.id?(Object(n["v"])(),Object(n["d"])("span",z," cached ")):Object(n["e"])("",!0),G],8,["onClick"])])])})),128)}var K={emits:["delete-cart","add-product-num","cut-product-num"],props:{cartitem:{type:Object,default:function(){return{}}},loading:{type:Object,default:function(){return{}}}}};K.render=H;var L=K,Q={data:function(){return{loadingStatus:{loadingItem:""},cart:"",coupon_code:""}},components:{UserCart:L},methods:{showAlert:function(t){this.$swal(t.data.message)},deleteCartAll:function(){var t=this;this.loadingStatus.loadingItem=1;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/carts");this.$http.delete(e).then((function(e){e.data.success&&(t.loadingStatus.loadingItem="",t.showAlert(e),t.getCart())})).catch((function(t){console.log(t)}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,S["a"].emit("update-cart"),console.log(t.cart))})).catch((function(t){console.log(t)}))},deleteCart:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.delete(c).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",e.showAlert(t),e.getCart())})).catch((function(t){console.log(t)}))},cutProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty-=1}},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(n,c).then((function(t){console.log(t),t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty+=1}},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(n,c).then((function(t){console.log(t),t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/coupon"),c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){e.data.success?(console.log(e),t.getCart()):console.log(e)})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getCart()}};Q.render=N;e["default"]=Q},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var s=n(e);s in t?a.f(t,s,o(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),o=c("e8b5"),s=c("861d"),l=c("7b0b"),i=c("50c4"),r=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=h>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=u("concat"),m=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},v=!O||!g;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,n,a,o,s=l(this),u=d(s,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],m(o)){if(a=i(o.length),b+a>f)throw TypeError(j);for(c=0;c<a;c++,b++)c in o&&r(u,b,o[c])}else{if(b>=f)throw TypeError(j);r(u,b++,o)}return u.length=b,u}})},c40b:function(t,e,c){t.exports=c.p+"img/cart_step01.bc41163f.png"}}]);
//# sourceMappingURL=chunk-6203443e.a059622f.js.map