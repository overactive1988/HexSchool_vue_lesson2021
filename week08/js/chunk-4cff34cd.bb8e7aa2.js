(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cff34cd"],{"3d4f":function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}},o=a();t["a"]=o},b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,r=Function.prototype,l=r.toString,s=/^\s*function ([^ (]*)/,n="name";a&&!(n in r)&&o(r,n,{configurable:!0,get:function(){try{return l.call(this).match(s)[1]}catch(e){return""}}})},edbb:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o={id:"main",class:"container-lg content content-user"},r=Object(a["createVNode"])("h2",{class:"text-center pt-4"},"確認訂單",-1),l=Object(a["createVNode"])("figure",{class:"my-5 text-center mx-auto"},[Object(a["createVNode"])("img",{class:"img-fluid",src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626638282082.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bO7EMZKQTvkxxpYxpMRP6Sukl43Kygd3i%2Bch8d8VIof0qds6sfIVoWypR4pgfbLQXlcJPHlXyxQ4TiVJm7VEFkhHYBtniHye4R6I6Y2PlOgFdJmuhumf2UJUsMnU93liVk6ipF1pYqj7ErA33n9xXJLa1%2FWNO1WT%2BIMiMOfw5Vz5awlrDB86YfMFVjnvRQLGwNi%2FmndtiNAAvEqZtGPR9igNa3XrmyIZJwjaBUjYGzAGoLStiRehfOoiZVLiDemCmsVVmvj4HBZxKS%2BFyWxxJEVcw%2BohlrsO8IuLXyQBIjQx7U3TbYD6EF1t%2FX%2FmYpLp7wGe%2BKhPzaytTSJkxF0FYQ%3D%3D",alt:"step3 確認訂單內容"})],-1),s={class:"my-5 row justify-content-center"},n={class:"col-md-8"},i=Object(a["createVNode"])("h2",{class:"text-center"},"購買品項",-1),d={class:"p-table table align-middle"},b=Object(a["createVNode"])("thead",{class:"p-table__head"},[Object(a["createVNode"])("tr",{class:"text-light"},[Object(a["createVNode"])("th",{class:"p-table__th--name text-center fs-7 fs-sm-6"},"商品"),Object(a["createVNode"])("th",{width:"15%",class:"text-center fs-7 fs-sm-6"},"單價"),Object(a["createVNode"])("th",{width:"20%",class:"text-center fs-7 fs-sm-6"},"數量"),Object(a["createVNode"])("th",{width:"30%",class:"text-end fs-7 fs-sm-6"},"小計")])],-1),u={class:"p-table__body"},m={class:"p-table__foot"},p={class:"text-light"},f={key:0,colspan:"4",class:"text-end"},O={key:0},j={key:1,class:"text-end"},h={key:0},g={colspan:"4",class:"text-end text-light"},V={class:"mb-3"},N=Object(a["createVNode"])("h2",{class:"text-center"},"客戶資訊",-1),y=Object(a["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),v={class:"mb-3"},k=Object(a["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),x={class:"mb-3"},B=Object(a["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),F={class:"mb-3"},w=Object(a["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),S={class:"mb-3"},C=Object(a["createVNode"])("label",{for:"payment",class:"form-label"},"付款方式",-1),D={class:"mb-3"},_=Object(a["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),I={class:"d-flex justify-content-between"},T=Object(a["createTextVNode"])("返回填寫訂單"),$={key:0,class:"material-icons animate-spin"},J=Object(a["createTextVNode"])(" 送出訂單 "),E={key:1,class:"text-center"};function Y(e,t,c,Y,q,L){var A,M,Q=Object(a["resolveComponent"])("ConfirmCart"),G=Object(a["resolveComponent"])("Field"),R=Object(a["resolveComponent"])("router-link"),U=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[r,l,Object(a["createVNode"])("div",s,[q.cart.total>0?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[Object(a["createVNode"])("div",n,[i,Object(a["createVNode"])("table",d,[b,Object(a["createVNode"])("tbody",u,[q.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])(Q,{key:0,cartitem:q.cart},null,8,["cartitem"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("tfoot",m,[Object(a["createVNode"])("tr",p,[(null===(A=q.cart)||void 0===A||null===(M=A.carts)||void 0===M?void 0:M.length)>=1?(Object(a["openBlock"])(),Object(a["createBlock"])("td",f,[q.cart.final_total!==q.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("del",O," 總計： "+Object(a["toDisplayString"])(e.$filters.currency(this.cart.total))+" NTD",1)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])("總計： "+Object(a["toDisplayString"])(e.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(a["openBlock"])(),Object(a["createBlock"])("td",j,"尚無商品"))]),q.cart.final_total!==q.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",h,[Object(a["createVNode"])("td",g," 折扣價： "+Object(a["toDisplayString"])(e.$filters.currency(q.cart.final_total))+" NTD ",1)])):Object(a["createCommentVNode"])("",!0)])])]),Object(a["createVNode"])(U,{ref:"form",onSubmit:L.onSubmit,class:"col-md-4"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("div",V,[N,y,Object(a["createVNode"])(G,{id:"name",name:"姓名",type:"text",class:"form-control",placeholder:"請輸入 姓名",rules:"required",value:c.propsForm.user.name,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",v,[k,Object(a["createVNode"])(G,{id:"email",name:"信箱",type:"email",class:"form-control",placeholder:"請輸入 Email",rules:"email|required",value:c.propsForm.user.email,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",x,[B,Object(a["createVNode"])(G,{id:"tel",name:"電話",type:"tel",class:"form-control",placeholder:"請輸入 電話",value:c.propsForm.user.tel,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",F,[w,Object(a["createVNode"])(G,{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入 地址",rules:"required",value:c.propsForm.user.address,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",S,[C,Object(a["createVNode"])(G,{id:"payment",class:"form-control",name:"付款方式",rules:"required",value:c.propsForm.user.payment_method,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",D,[_,Object(a["createVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10",value:c.propsForm.message,disabled:""},null,8,["value"])]),Object(a["createVNode"])("div",I,[Object(a["createVNode"])(R,{class:"btn btn-secondary",to:"/cartcheck"},{default:Object(a["withCtx"])((function(){return[T]})),_:1}),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary",disabled:q.cart.carts<=1},[2===q.loadingStatus.loadingItem?(Object(a["openBlock"])(),Object(a["createBlock"])("span",$," cached ")):Object(a["createCommentVNode"])("",!0),J],8,["disabled"])])]})),_:1},8,["onSubmit"])],64)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",E,"請先將商品加入購物車"))])])}c("99af");var q=c("3d4f"),L={class:"d-sm-flex align-items-center"},A={class:"ps-2"},M={class:"badge bg-primary"},Q={class:"fs-7 fs-sm-6"},G={class:"text-center"},R={class:"text-center"},U={class:"text-end"},X={key:0,class:"text-success"};function z(e,t,c,o,r,l){return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.cartitem.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("figure",L,[Object(a["createVNode"])("img",{class:"product-img",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(a["createVNode"])("figcaption",A,[Object(a["createVNode"])("span",M,Object(a["toDisplayString"])(t.product.category),1),Object(a["createVNode"])("p",Q,Object(a["toDisplayString"])(t.product.title),1)])])]),Object(a["createVNode"])("td",G,Object(a["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(a["createVNode"])("td",R,Object(a["toDisplayString"])(t.qty),1),Object(a["createVNode"])("td",U,[t.final_total!==t.total?(Object(a["openBlock"])(),Object(a["createBlock"])("small",X,"折扣價：")):Object(a["createCommentVNode"])("",!0),Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$filters.currency(t.final_total))+" NTD ",1)])])})),128)}var P={props:{cartitem:{type:Object,default:function(){return{}}}}};P.render=z;var Z=P,H={props:{propsForm:{type:Object,default:function(){return{}}}},data:function(){return{loadingStatus:{loadingItem:""},cart:"",form:{}}},components:{ConfirmCart:Z},methods:{showAlert:function(e){this.$swal(e.data.message)},check:function(){this.cart.carts.length<1&&(alert("請先加入商品至購物車"),this.$router.push("/products"))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cart=t.data.data,q["a"].emit("update-cart"),e.check())})).catch((function(e){console.log(e)}))},getCartOnly:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cart=t.data.data,q["a"].emit("update-cart"))})).catch((function(e){console.log(e)}))},onSubmit:function(){var e=this;this.loadingStatus.loadingItem=2;var t={data:{user:this.propsForm.user,message:this.propsForm.message}};console.log(t);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/order");this.$http.post(c,t).then((function(t){console.log(t),t.data.success?(e.$refs.form.resetForm(),e.form.message="",e.showAlert(t),e.loadingStatus.loadingItem="",e.getCartOnly(),e.$router.push("/cartpayment/".concat(t.data.orderId))):console.log(t)})).catch((function(e){console.log(e)}))}},mounted:function(){console.clear(),this.getCart()}};H.render=Y;t["default"]=H}}]);
//# sourceMappingURL=chunk-4cff34cd.bb8e7aa2.js.map