(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ad90f1"],{"3d4f":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a?a.push(c):t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&(c?a.splice(a.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var a=t.get(e);a&&a.slice().map((function(t){t(c)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,c)}))}}},o=a();e["a"]=o},6034:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={id:"main",class:"container-lg content"},n=Object(a["createVNode"])("h2",{class:"pt-4"},"確認購物車",-1),s=Object(a["createVNode"])("figure",{class:"my-5 text-center mx-auto"},[Object(a["createVNode"])("img",{class:"img-fluid",src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626638211897.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cE9cq%2FuejGmjfshmJWikytVxp1UR98rJprDbTcN9R7qyaqv9AGb4Nxrt5eNf9naqv1a7MIc9wQmEUGPppvJv%2BjhHz9do1NAk5xS6EyIDOG1ZOY7E5JXOECmeXUgnDZy2W1hbBAyB0lIsASpoSW8H2AywjxzMYFE%2FHboUtkzswdjy5tDy07DBmpnAM9udZ6KRX8DxpBwZqhYNE9u18aFpNC5O3TXoafvGsgvOx7d%2B10siwv%2FlWYYPe925Q3eR67yfRHol3RSioPgSiIPE9t9l%2BQHRiKdzszK15bDfahZlDlDbnDyTf7gv0S0L7QhM5rj14j8ELLYCuy3%2FjFAhsAXPNA%3D%3D",alt:"step1 確認購物車"})],-1),r={class:"text-end mb-2"},l={key:0,class:"material-icons animate-spin"},i=Object(a["createTextVNode"])(" 清空購物車 "),d={class:"p-table table align-middle"},u=Object(a["createVNode"])("thead",{class:"p-table__head"},[Object(a["createVNode"])("tr",{class:"text-light"},[Object(a["createVNode"])("th",{width:"30%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(a["createVNode"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"},"數量"),Object(a["createVNode"])("th",{width:"20%",class:"text-end fs-7 fs-sm-6"},"小計"),Object(a["createVNode"])("th",{width:"20%"})])],-1),b={class:"p-table__body"},p={key:0,class:"text-danger"},m={class:"p-table__foot"},j={class:"text-light"},O={colspan:"2"},g={key:0,class:"input-group mb-3 input-group-sm"},f={class:"input-group-append"},h={key:0,class:"material-icons animate-spin"},N=Object(a["createTextVNode"])(" 套用優惠碼 "),k={key:0,colspan:"2",class:"text-end"},y={key:0},V={key:1,class:"text-end"},v={key:0},x={colspan:"4",class:"text-end text-light"},B={key:1,class:"mt-4 w-100 w-md-50 mx-auto"},C=Object(a["createVNode"])("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1627073373471.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nNa9akIBbRDa89lEbbSqN8nB8m2IENQvCpVTrLT4B7yQT2D5ppJ1tJEiX1jbDw%2BK4joUPKWJLxVY0n4HCQu4Ej5IC1let9%2FZv6OO5LQZJkv4NIwMAiGrXiSxkWAVfu1yYAYWKd979eFzInOK1C93ucgF2NcNVYiseScKRn8MPVAVDntip%2BpThF7cO8Qn17wroEIglimPOZ60%2FRnuQeHFmxNtyJtBpZKuSPSzTH1FL1ZP6sPrkTVrUE9KZAsE4xMfc89IRQiklA8wLcNYY%2FoyGInF14NMYBrYEFR2TU%2FP%2BmF4qhyG%2Bw5rFvcsC36BzpdHacqxhhuiKuwc0nLF6Xz9fA%3D%3D",alt:"請先將商品加入購物車",class:"img-fluid"},null,-1),S={class:"d-flex justify-content-between mb-4"},D=Object(a["createTextVNode"])("繼續購物"),w=Object(a["createTextVNode"])("下一步");function I(t,e,c,I,_,A){var F,T,P=Object(a["resolveComponent"])("UserCart"),E=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[n,_.cart.total>0?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[s,Object(a["createVNode"])("div",r,[Object(a["createVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return A.deleteCartAll&&A.deleteCartAll.apply(A,arguments)}),disabled:_.cart.carts<=1},[1===_.loadingStatus.loadingItem?(Object(a["openBlock"])(),Object(a["createBlock"])("span",l," cached ")):Object(a["createCommentVNode"])("",!0),i],8,["disabled"])]),Object(a["createVNode"])("table",d,[u,Object(a["createVNode"])("tbody",b,[_.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])(P,{key:0,loading:_.loadingStatus,cartitem:_.cart,onDeleteCart:A.deleteCart,onAddProductNum:A.addProductNum,onCutProductNum:A.cutProductNum},null,8,["loading","cartitem","onDeleteCart","onAddProductNum","onCutProductNum"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",null,[this.message?(Object(a["openBlock"])(),Object(a["createBlock"])("span",p,Object(a["toDisplayString"])(this.message),1)):Object(a["createCommentVNode"])("",!0)])])]),Object(a["createVNode"])("tfoot",m,[Object(a["createVNode"])("tr",j,[Object(a["createVNode"])("td",O,[_.cart.final_total==_.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return _.coupon_code=t}),placeholder:"請輸入優惠碼",disabled:_.cart.final_total!==_.cart.total},null,8,["disabled"]),[[a["vModelText"],_.coupon_code]]),Object(a["createVNode"])("div",f,[Object(a["createVNode"])("button",{class:"btn btn-sm btn-outline-light ms-2",type:"button",onClick:e[3]||(e[3]=function(t){return A.addCouponCode()}),disabled:_.cart.final_total!==_.cart.total},[3===_.loadingStatus.loadingItem?(Object(a["openBlock"])(),Object(a["createBlock"])("span",h," cached ")):Object(a["createCommentVNode"])("",!0),N],8,["disabled"])])])):Object(a["createCommentVNode"])("",!0)]),(null===(F=_.cart)||void 0===F||null===(T=F.carts)||void 0===T?void 0:T.length)>=1?(Object(a["openBlock"])(),Object(a["createBlock"])("td",k,[_.cart.final_total!==_.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("del",y," 總計： "+Object(a["toDisplayString"])(t.$filters.currency(this.cart.total))+" NTD",1)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])("總計： "+Object(a["toDisplayString"])(t.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(a["openBlock"])(),Object(a["createBlock"])("td",V,"尚無商品"))]),_.cart.final_total!==_.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",v,[Object(a["createVNode"])("td",x," 折扣價： "+Object(a["toDisplayString"])(t.$filters.currency(_.cart.final_total))+" NTD ",1)])):Object(a["createCommentVNode"])("",!0)])])],64)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",B,[Object(a["createVNode"])(E,{to:"/products"},{default:Object(a["withCtx"])((function(){return[C]})),_:1})])),Object(a["createVNode"])("div",S,[Object(a["createVNode"])(E,{class:"btn btn-secondary",to:"/products"},{default:Object(a["withCtx"])((function(){return[D]})),_:1}),Object(a["createVNode"])(E,{class:["btn btn-primary",{disabled:_.cart.carts<=1}],"aria-disabled":_.cart.carts<=1,to:"/cartcheck"},{default:Object(a["withCtx"])((function(){return[w]})),_:1},8,["aria-disabled","class"])])])}c("99af");var _=c("3d4f"),A={class:"d-sm-flex align-items-center"},F={class:"ps-sm-2"},T={class:"badge bg-primary"},P={class:"fs-7 fs-sm-6 mb-1"},E={key:0,class:"badge bg-success fs-8 fs-sm-7"},$={class:"input-group"},q={class:"input-group input-group-sm text-center mb-3 w-75 mx-auto"},Y=Object(a["createVNode"])("span",null,"-",-1),z={class:"form-control m-0 fs-7 fs-sm-6"},R=Object(a["createVNode"])("span",null,"+",-1),J={class:"text-end fs-7 fs-sm-6"},K={key:0,class:"text-success"},Q=Object(a["createVNode"])("br",null,null,-1),U={class:"text-dark"},Z={class:"text-end"},G={key:0,class:"material-icons animate-spin"},L=Object(a["createTextVNode"])(" 刪除 ");function M(t,e,c,o,n,s){var r=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.cartitem.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])(r,{class:"p-table__link text-decoration-none",to:"/product/".concat(e.product.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("figure",A,[Object(a["createVNode"])("img",{class:"product-img d-none d-sm-block",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(a["createVNode"])("figcaption",F,[Object(a["createVNode"])("span",T,Object(a["toDisplayString"])(e.product.category),1),Object(a["createVNode"])("p",P,Object(a["toDisplayString"])(e.product.title),1),e.coupon?(Object(a["openBlock"])(),Object(a["createBlock"])("div",E," 已套用優惠券 ")):Object(a["createCommentVNode"])("",!0)])])]})),_:2},1032,["to"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",$,[Object(a["createVNode"])("div",q,[Object(a["createVNode"])("button",{type:"button",onClick:function(c){return t.$emit("cut-product-num",e)},class:["btn-dark btn input-group-text rounded-0 fs-8 border-end-0",{disabled:e.qty<=1}],disabled:e.id===c.loading.loadingItem},[Y],10,["onClick","disabled"]),Object(a["createVNode"])("p",z,Object(a["toDisplayString"])(e.qty),1),Object(a["createVNode"])("button",{type:"button",onClick:function(c){return t.$emit("add-product-num",e)},class:"btn-dark btn input-group-text rounded-0 fs-8",disabled:e.id===c.loading.loadingItem},[R],8,["onClick","disabled"])])])]),Object(a["createVNode"])("td",J,[e.final_total!==e.total?(Object(a["openBlock"])(),Object(a["createBlock"])("small",K,[Object(a["createTextVNode"])("折扣價："+Object(a["toDisplayString"])(t.$filters.currency(e.final_total))+" NTD",1),Q,Object(a["createVNode"])("del",U,Object(a["toDisplayString"])(t.$filters.currency(e.total))+" NTD",1)])):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.$filters.currency(e.total))+" NTD",1)],64))]),Object(a["createVNode"])("td",Z,[Object(a["createVNode"])("button",{onClick:function(c){return t.$emit("delete-cart",e)},type:"button",class:"btn btn-outline-danger btn-sm fs-7 fs-sm-6"},[c.loading.loadingItem===e.id?(Object(a["openBlock"])(),Object(a["createBlock"])("span",G," cached ")):Object(a["createCommentVNode"])("",!0),L],8,["onClick"])])])})),128)}var H={emits:["delete-cart","add-product-num","cut-product-num"],props:{cartitem:{type:Object,default:function(){return{}}},loading:{type:Object,default:function(){return{}}}}};H.render=M;var X=H,W={data:function(){return{loadingStatus:{loadingItem:""},cart:"",coupon_code:"",message:""}},components:{UserCart:X},methods:{showAlert:function(t){this.$swal(t.data.message)},deleteCartAll:function(){var t=this;this.loadingStatus.loadingItem=1;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/carts");this.$http.delete(e).then((function(e){e.data.success&&(t.loadingStatus.loadingItem="",t.showAlert(e),t.getCart())})).catch((function(t){console.log(t)}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,_["a"].emit("update-cart"))})).catch((function(t){console.log(t)}))},deleteCart:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.delete(c).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",e.showAlert(t),e.getCart())})).catch((function(t){console.log(t)}))},cutProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty-=1}},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(a,c).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addProductNum:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var c={data:{product_id:t.product.id,qty:t.qty+=1}},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart/").concat(t.id);this.$http.put(a,c).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",e.getCart())})).catch((function(t){console.log(t)}))},addCouponCode:function(){var t=this;this.loadingStatus.loadingItem=3;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/coupon"),c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){e.data.success?(t.loadingStatus.loadingItem="",t.showAlert(e),t.coupon_code="",t.message="",t.getCart()):(t.coupon_code="",t.loadingStatus.loadingItem="",t.message=e.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getCart()}};W.render=I;e["default"]=W}}]);
//# sourceMappingURL=chunk-46ad90f1.d0bbe239.js.map