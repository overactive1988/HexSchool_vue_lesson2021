(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79bd18fe"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),o=c("2d00"),s=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a?a.push(c):t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&(c?a.splice(a.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var a=t.get(e);a&&a.slice().map((function(t){t(c)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,c)}))}}},n=a();e["a"]=n},6034:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n=c("c40b"),o=c.n(n),s={class:"container-lg content mt-4"},l=Object(a["h"])("h1",{class:"text-center"},"確認購物車",-1),i=Object(a["h"])("figure",{class:"my-5 text-center mx-auto"},[Object(a["h"])("img",{class:"img-fluid",src:o.a,alt:"step1 確認購物車"})],-1),r={class:"text-end mb-2"},d={key:0,class:"material-icons animate-spin"},u=Object(a["g"])(" 清空購物車 "),b={class:"p-table table align-middle"},h=Object(a["h"])("thead",{class:"p-table__head"},[Object(a["h"])("tr",{class:"text-light"},[Object(a["h"])("th",{width:"30%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(a["h"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"},"數量"),Object(a["h"])("th",{width:"20%",class:"text-end fs-7 fs-sm-6"},"小計"),Object(a["h"])("th",{width:"20%"})])],-1),p={class:"p-table__body"},f={key:0,class:"text-danger"},j={class:"p-table__foot"},O={class:"text-light"},g={colspan:"2"},m={key:0,class:"input-group mb-3 input-group-sm"},v={class:"input-group-append"},y={key:0,class:"material-icons animate-spin"},x=Object(a["g"])(" 套用優惠碼 "),k={key:0,colspan:"2",class:"text-end"},C={key:0},_={key:1,class:"text-end"},w={key:0},I={colspan:"4",class:"text-end text-light"},S={key:1,class:"text-center"},$={class:"d-flex justify-content-between mb-4"},N=Object(a["g"])("繼續購物"),A=Object(a["g"])("下一步");function F(t,e,c,n,o,F){var P,q,D=Object(a["C"])("UserCart"),T=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",s,[l,i,o.cart.total>0?(Object(a["v"])(),Object(a["d"])(a["a"],{key:0},[Object(a["h"])("div",r,[Object(a["h"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return F.deleteCartAll&&F.deleteCartAll.apply(F,arguments)}),disabled:o.cart.carts<=1},[1===o.loadingStatus.loadingItem?(Object(a["v"])(),Object(a["d"])("span",d," cached ")):Object(a["e"])("",!0),u],8,["disabled"])]),Object(a["h"])("table",b,[h,Object(a["h"])("tbody",p,[o.cart.carts?(Object(a["v"])(),Object(a["d"])(D,{key:0,loading:o.loadingStatus,cartitem:o.cart,onDeleteCart:F.deleteCart,onAddProductNum:F.addProductNum,onCutProductNum:F.cutProductNum},null,8,["loading","cartitem","onDeleteCart","onAddProductNum","onCutProductNum"])):Object(a["e"])("",!0),Object(a["h"])("tr",null,[Object(a["h"])("td",null,[this.message?(Object(a["v"])(),Object(a["d"])("span",f,Object(a["F"])(this.message),1)):Object(a["e"])("",!0)])])]),Object(a["h"])("tfoot",j,[Object(a["h"])("tr",O,[Object(a["h"])("td",g,[o.cart.final_total==o.cart.total?(Object(a["v"])(),Object(a["d"])("div",m,[Object(a["N"])(Object(a["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.coupon_code=t}),placeholder:"請輸入優惠碼",disabled:o.cart.final_total!==o.cart.total},null,8,["disabled"]),[[a["J"],o.coupon_code]]),Object(a["h"])("div",v,[Object(a["h"])("button",{class:"btn btn-sm btn-outline-light ms-2",type:"button",onClick:e[3]||(e[3]=function(t){return F.addCouponCode()}),disabled:o.cart.final_total!==o.cart.total},[3===o.loadingStatus.loadingItem?(Object(a["v"])(),Object(a["d"])("span",y," cached ")):Object(a["e"])("",!0),x],8,["disabled"])])])):Object(a["e"])("",!0)]),(null===(P=o.cart)||void 0===P||null===(q=P.carts)||void 0===q?void 0:q.length)>=1?(Object(a["v"])(),Object(a["d"])("td",k,[o.cart.final_total!==o.cart.total?(Object(a["v"])(),Object(a["d"])("del",C," 總計： "+Object(a["F"])(t.$filters.currency(this.cart.total))+" NTD",1)):(Object(a["v"])(),Object(a["d"])(a["a"],{key:1},[Object(a["g"])("總計： "+Object(a["F"])(t.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(a["v"])(),Object(a["d"])("td",_,"尚無商品"))]),o.cart.final_total!==o.cart.total?(Object(a["v"])(),Object(a["d"])("tr",w,[Object(a["h"])("td",I," 折扣價： "+Object(a["F"])(t.$filters.currency(o.cart.final_total))+" NTD ",1)])):Object(a["e"])("",!0)])])],64)):(Object(a["v"])(),Object(a["d"])("p",S,"請先將商品加入購物車")),Object(a["h"])("div",$,[Object(a["h"])(T,{class:"btn btn-secondary",to:"/products"},{default:Object(a["M"])((function(){return[N]})),_:1}),Object(a["h"])(T,{class:["btn btn-primary",{disabled:o.cart.carts<=1}],"aria-disabled":o.cart.carts<=1,to:"/cartcheck"},{default:Object(a["M"])((function(){return[A]})),_:1},8,["aria-disabled","class"])])])}c("99af");var P=c("3d4f"),q={class:"d-sm-flex align-items-center"},D={class:"ps-sm-2"},T={class:"badge bg-primary"},M={class:"fs-7 fs-sm-6 mb-1"},U={key:0,class:"badge bg-success fs-8 fs-sm-7"},J={class:"input-group"},B={class:"input-group input-group-sm text-center mb-3 w-75 mx-auto"},E=Object(a["h"])("span",null,"-",-1),V={class:"form-control m-0 fs-7 fs-sm-6"},z=Object(a["h"])("span",null,"+",-1),G={class:"text-end fs-7 fs-sm-6"},H={key:0,class:"text-success"},K={class:"text-end"},L={key:0,class:"material-icons animate-spin"},Q=Object(a["g"])(" 刪除 ");function R(t,e,c,n,o,s){var l=Object(a["C"])("router-link");return Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(c.cartitem.carts,(function(e){return Object(a["v"])(),Object(a["d"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])(l,{class:"p-table__link text-decoration-none",to:"/product/".concat(e.product.id)},{default:Object(a["M"])((function(){return[Object(a["h"])("figure",q,[Object(a["h"])("img",{class:"product-img d-none d-sm-block",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(a["h"])("figcaption",D,[Object(a["h"])("span",T,Object(a["F"])(e.product.category),1),Object(a["h"])("p",M,Object(a["F"])(e.product.title),1),e.coupon?(Object(a["v"])(),Object(a["d"])("div",U,"已套用優惠券")):Object(a["e"])("",!0)])])]})),_:2},1032,["to"])]),Object(a["h"])("td",null,[Object(a["h"])("div",J,[Object(a["h"])("div",B,[Object(a["h"])("button",{type:"button",onClick:function(c){return t.$emit("cut-product-num",e)},class:["btn-dark btn input-group-text rounded-0 fs-8 border-end-0",{disabled:e.qty<=1}],disabled:e.id===c.loading.loadingItem},[E],10,["onClick","disabled"]),Object(a["h"])("p",V,Object(a["F"])(e.qty),1),Object(a["h"])("button",{type:"button",onClick:function(c){return t.$emit("add-product-num",e)},class:"btn-dark btn input-group-text rounded-0 fs-8",disabled:e.id===c.loading.loadingItem},[z],8,["onClick","disabled"])])])]),Object(a["h"])("td",G,[e.final_total!==e.total?(Object(a["v"])(),Object(a["d"])("small",H,"折扣價：")):Object(a["e"])("",!0),Object(a["g"])(Object(a["F"])(t.$filters.currency(e.final_total))+" NTD ",1)]),Object(a["h"])("td",K,[Object(a["h"])("button",{onClick:function(c){return t.$emit("delete-cart",e)},type:"button",class:"btn btn-outline-danger btn-sm fs-7 fs-sm-6"},[c.loading.loadingItem===e.id?(Object(a["v"])(),Object(a["d"])("span",L," cached ")):Object(a["e"])("",!0),Q],8,["onClick"])])])})),128)}var W={emits:["delete-cart","add-product-num","cut-product-num"],props:{cartitem:{type:Object,default:function(){return{}}},loading:{type:Object,default:function(){return{}}}}};W.render=R;var X=W,Y={data:function(){return{loadingStatus:{loadingItem:""},cart:"",coupon_code:"",message:""}},components:{UserCart:X},methods:{showAlert:function(t){this.$swal(t.data.message)},deleteCartAll:function(){var t=this;this.loadingStatus.loadingItem=1;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/carts");this.$http.delete(e).then((function(e){e.data.success&&(t.loadingStatus.loadingItem="",t.showAlert(e),t.getCart())})).catch((function(t){console.log(t)}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,P["a"].emit("update-cart"),console.log(t.cart))})).catch((function(t){console.log(t)}))},deleteCart:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.delete(c).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",e.showAlert(t),e.getCart())})).catch((function(t){console.log(t)}))},cutProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty-=1}},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(a,c).then((function(t){console.log(t),t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty+=1}},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(a,c).then((function(t){console.log(t),t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addCouponCode:function(){var t=this;this.loadingStatus.loadingItem=3;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/coupon"),c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){e.data.success?(t.loadingStatus.loadingItem="",t.showAlert(e),t.coupon_code="",t.message="",t.getCart()):(console.log(e),t.message=e.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getCart()}};Y.render=F;e["default"]=Y},8418:function(t,e,c){"use strict";var a=c("c04e"),n=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var s=a(e);s in t?n.f(t,s,o(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),s=c("861d"),l=c("7b0b"),i=c("50c4"),r=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=u("concat"),m=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},v=!O||!g;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,a,n,o,s=l(this),u=d(s,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?s:arguments[e],m(o)){if(n=i(o.length),b+n>f)throw TypeError(j);for(c=0;c<n;c++,b++)c in o&&r(u,b,o[c])}else{if(b>=f)throw TypeError(j);r(u,b++,o)}return u.length=b,u}})},c40b:function(t,e,c){t.exports=c.p+"img/cart_step01.981b4c46.png"}}]);
//# sourceMappingURL=chunk-79bd18fe.ad736b23.js.map