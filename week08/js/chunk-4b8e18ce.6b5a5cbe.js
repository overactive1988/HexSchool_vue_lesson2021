(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b8e18ce"],{"1dde":function(t,e,c){var a=c("d039"),s=c("b622"),r=c("2d00"),l=s("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a?a.push(c):t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&(c?a.splice(a.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var a=t.get(e);a&&a.slice().map((function(t){t(c)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,c)}))}}},s=a();e["a"]=s},6007:function(t,e,c){t.exports=c.p+"img/cart_step03.86d08d0b.png"},8418:function(t,e,c){"use strict";var a=c("c04e"),s=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var l=a(e);l in t?s.f(t,l,r(0,c)):t[l]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),s=c("d039"),r=c("e8b5"),l=c("861d"),n=c("7b0b"),o=c("50c4"),i=c("8418"),b=c("65f0"),u=c("1dde"),d=c("b622"),h=c("2d00"),f=d("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",O=h>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),j=u("concat"),v=function(t){if(!l(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},g=!O||!j;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,a,s,r,l=n(this),u=b(l,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?l:arguments[e],v(r)){if(s=o(r.length),d+s>m)throw TypeError(p);for(c=0;c<s;c++,d++)c in r&&i(u,d,r[c])}else{if(d>=m)throw TypeError(p);i(u,d++,r)}return u.length=d,u}})},b0c0:function(t,e,c){var a=c("83ab"),s=c("9bf2").f,r=Function.prototype,l=r.toString,n=/^\s*function ([^ (]*)/,o="name";a&&!(o in r)&&s(r,o,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(t){return""}}})},edbb:function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),s=c("6007"),r=c.n(s),l={class:"container-lg content"},n=Object(a["h"])("h1",{class:"text-center"},"確認訂單",-1),o=Object(a["h"])("figure",{class:"my-5 text-center mx-auto"},[Object(a["h"])("img",{class:"img-fluid",src:r.a,alt:"step3 確認訂單內容"})],-1),i={class:"my-5 row justify-content-center"},b={class:"col-md-8"},u=Object(a["h"])("h2",{class:"text-center"},"購買品項",-1),d={class:"p-table table align-middle"},h=Object(a["h"])("thead",{class:"p-table__head"},[Object(a["h"])("tr",{class:"text-light"},[Object(a["h"])("th",{class:"p-table__th--name text-center fs-7 fs-sm-6"},"商品"),Object(a["h"])("th",{width:"15%",class:"text-center fs-7 fs-sm-6"},"單價"),Object(a["h"])("th",{width:"20%",class:"text-center fs-7 fs-sm-6"},"數量"),Object(a["h"])("th",{width:"30%",class:"text-end fs-7 fs-sm-6"},"小計")])],-1),f={class:"p-table__body"},m={class:"p-table__foot"},p={class:"text-light"},O={key:0,colspan:"4",class:"text-end"},j={key:0},v={key:1,class:"text-end"},g={key:0},y={colspan:"4",class:"text-end text-light"},x={class:"mb-3"},F=Object(a["h"])("h2",{class:"text-center"},"客戶資訊",-1),w=Object(a["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),k={class:"mb-3"},_=Object(a["h"])("label",{for:"email",class:"form-label"},"Email",-1),C={class:"mb-3"},$=Object(a["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),S={class:"mb-3"},T=Object(a["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),q={class:"mb-3"},I=Object(a["h"])("label",{for:"payment",class:"form-label"},"付款方式",-1),D={class:"mb-3"},E=Object(a["h"])("label",{for:"message",class:"form-label"},"留言",-1),M={class:"d-flex justify-content-between"},N=Object(a["g"])("返回填寫訂單"),A={key:0,class:"material-icons animate-spin"},B=Object(a["g"])(" 送出訂單 "),J={key:1,class:"text-center"};function U(t,e,c,s,r,U){var z,G,H=Object(a["C"])("ConfirmCart"),K=Object(a["C"])("Field"),L=Object(a["C"])("router-link"),P=Object(a["C"])("Form");return Object(a["v"])(),Object(a["d"])("div",l,[n,o,Object(a["h"])("div",i,[r.cart.total>0?(Object(a["v"])(),Object(a["d"])(a["a"],{key:0},[Object(a["h"])("div",b,[u,Object(a["h"])("table",d,[h,Object(a["h"])("tbody",f,[r.cart.carts?(Object(a["v"])(),Object(a["d"])(H,{key:0,cartitem:r.cart},null,8,["cartitem"])):Object(a["e"])("",!0)]),Object(a["h"])("tfoot",m,[Object(a["h"])("tr",p,[(null===(z=r.cart)||void 0===z||null===(G=z.carts)||void 0===G?void 0:G.length)>=1?(Object(a["v"])(),Object(a["d"])("td",O,[r.cart.final_total!==r.cart.total?(Object(a["v"])(),Object(a["d"])("del",j," 總計： "+Object(a["F"])(t.$filters.currency(this.cart.total))+" NTD",1)):(Object(a["v"])(),Object(a["d"])(a["a"],{key:1},[Object(a["g"])("總計： "+Object(a["F"])(t.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(a["v"])(),Object(a["d"])("td",v,"尚無商品"))]),r.cart.final_total!==r.cart.total?(Object(a["v"])(),Object(a["d"])("tr",g,[Object(a["h"])("td",y," 折扣價： "+Object(a["F"])(t.$filters.currency(r.cart.final_total))+" NTD ",1)])):Object(a["e"])("",!0)])])]),Object(a["h"])(P,{ref:"form",onSubmit:U.onSubmit,class:"col-md-4"},{default:Object(a["M"])((function(){return[Object(a["h"])("div",x,[F,w,Object(a["h"])(K,{id:"name",name:"姓名",type:"text",class:"form-control",placeholder:"請輸入 姓名",rules:"required",value:c.propsForm.user.name,disabled:""},null,8,["value"])]),Object(a["h"])("div",k,[_,Object(a["h"])(K,{id:"email",name:"信箱",type:"email",class:"form-control",placeholder:"請輸入 Email",rules:"email|required",value:c.propsForm.user.email,disabled:""},null,8,["value"])]),Object(a["h"])("div",C,[$,Object(a["h"])(K,{id:"tel",name:"電話",type:"tel",class:"form-control",placeholder:"請輸入 電話",value:c.propsForm.user.tel,disabled:""},null,8,["value"])]),Object(a["h"])("div",S,[T,Object(a["h"])(K,{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入 地址",rules:"required",value:c.propsForm.user.address,disabled:""},null,8,["value"])]),Object(a["h"])("div",q,[I,Object(a["h"])(K,{id:"payment",class:"form-control",name:"付款方式",rules:"required",value:c.propsForm.user.payment_method,disabled:""},null,8,["value"])]),Object(a["h"])("div",D,[E,Object(a["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10",value:c.propsForm.message,disabled:""},null,8,["value"])]),Object(a["h"])("div",M,[Object(a["h"])(L,{class:"btn btn-secondary",to:"/cartcheck"},{default:Object(a["M"])((function(){return[N]})),_:1}),Object(a["h"])("button",{type:"submit",class:"btn btn-primary",disabled:r.cart.carts<=1},[2===r.loadingStatus.loadingItem?(Object(a["v"])(),Object(a["d"])("span",A," cached ")):Object(a["e"])("",!0),B],8,["disabled"])])]})),_:1},8,["onSubmit"])],64)):(Object(a["v"])(),Object(a["d"])("p",J,"請先將商品加入購物車"))])])}c("99af");var z=c("3d4f"),G={class:"d-sm-flex align-items-center"},H={class:"ps-2"},K={class:"badge bg-primary"},L={class:"fs-7 fs-sm-6"},P={class:"text-center"},Q={class:"text-center"},R={class:"text-end"},V={key:0,class:"text-success"};function W(t,e,c,s,r,l){return Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(c.cartitem.carts,(function(e){return Object(a["v"])(),Object(a["d"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])("figure",G,[Object(a["h"])("img",{class:"product-img",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(a["h"])("figcaption",H,[Object(a["h"])("span",K,Object(a["F"])(e.product.category),1),Object(a["h"])("p",L,Object(a["F"])(e.product.title),1)])])]),Object(a["h"])("td",P,Object(a["F"])(t.$filters.currency(e.product.price)),1),Object(a["h"])("td",Q,Object(a["F"])(e.qty),1),Object(a["h"])("td",R,[e.final_total!==e.total?(Object(a["v"])(),Object(a["d"])("small",V,"折扣價：")):Object(a["e"])("",!0),Object(a["g"])(Object(a["F"])(t.$filters.currency(e.final_total))+" NTD ",1)])])})),128)}var X={props:{cartitem:{type:Object,default:function(){return{}}}}};X.render=W;var Y=X,Z={props:{propsForm:{type:Object,default:function(){return{}}}},data:function(){return{loadingStatus:{loadingItem:""},cart:"",form:{}}},components:{ConfirmCart:Y},methods:{showAlert:function(t){this.$swal(t.data.message)},check:function(){this.cart.carts.length<1&&(alert("請先加入商品至購物車"),this.$router.push("/products"))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,z["a"].emit("update-cart"),t.check())})).catch((function(t){console.log(t)}))},getCartOnly:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,z["a"].emit("update-cart"))})).catch((function(t){console.log(t)}))},onSubmit:function(){var t=this;this.loadingStatus.loadingItem=2;var e={data:{user:this.propsForm.user,message:this.propsForm.message}};console.log(e);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/order");this.$http.post(c,e).then((function(e){console.log(e),e.data.success?(t.$refs.form.resetForm(),t.form.message="",t.showAlert(e),t.loadingStatus.loadingItem="",t.getCartOnly(),t.$router.push("/cartpayment/".concat(e.data.orderId))):console.log(e)})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getCart()}};Z.render=U;e["default"]=Z}}]);
//# sourceMappingURL=chunk-4b8e18ce.6b5a5cbe.js.map