(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5667dcdc"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),r=c("2d00"),l=n("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d4f":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a?a.push(c):t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&(c?a.splice(a.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var a=t.get(e);a&&a.slice().map((function(t){t(c)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,c)}))}}},n=a();e["a"]=n},8418:function(t,e,c){"use strict";var a=c("c04e"),n=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var l=a(e);l in t?n.f(t,l,r(0,c)):t[l]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),r=c("e8b5"),l=c("861d"),s=c("7b0b"),o=c("50c4"),i=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),h=c("2d00"),f=b("isConcatSpreadable"),m=9007199254740991,O="Maximum allowed index exceeded",j=h>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=d("concat"),v=function(t){if(!l(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},g=!j||!p;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,a,n,r,l=s(this),d=u(l,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?l:arguments[e],v(r)){if(n=o(r.length),b+n>m)throw TypeError(O);for(c=0;c<n;c++,b++)c in r&&i(d,b,r[c])}else{if(b>=m)throw TypeError(O);i(d,b++,r)}return d.length=b,d}})},b0c0:function(t,e,c){var a=c("83ab"),n=c("9bf2").f,r=Function.prototype,l=r.toString,s=/^\s*function ([^ (]*)/,o="name";a&&!(o in r)&&n(r,o,{configurable:!0,get:function(){try{return l.call(this).match(s)[1]}catch(t){return""}}})},edbb:function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),n={class:"container content"},r=Object(a["h"])("h1",{class:"text-center"},"確認訂單",-1),l={class:"table align-middle"},s=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"10%"},"縮圖"),Object(a["h"])("th",{width:"10%"},"類別"),Object(a["h"])("th",{width:"15%"},"品名"),Object(a["h"])("th",{width:"5%",class:"text-end"},"數量"),Object(a["h"])("th",{width:"10%",class:"text-end"},"單價"),Object(a["h"])("th",{width:"12%",class:"text-end"},"合計")])],-1),o=Object(a["h"])("td",{colspan:"5",class:"text-end"},"總計",-1),i={key:0,class:"text-end"},u={key:1,class:"text-end"},d={class:"my-5 row justify-content-center"},b={class:"mb-3"},h=Object(a["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),f={class:"mb-3"},m=Object(a["h"])("label",{for:"email",class:"form-label"},"Email",-1),O={class:"mb-3"},j=Object(a["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),p={class:"mb-3"},v=Object(a["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),g={class:"mb-3"},y=Object(a["h"])("label",{for:"payment",class:"form-label"},"付款方式",-1),x={class:"mb-3"},w=Object(a["h"])("label",{for:"message",class:"form-label"},"留言",-1),k={class:"text-end"},C={key:0,class:"material-icons animate-spin"},S=Object(a["g"])(" 送出訂單 "),F={class:"d-flex justify-content-between mb-4"},$=Object(a["g"])("返回填寫訂單");function q(t,e,c,q,E,I){var M,_,A=Object(a["C"])("ConfirmCart"),B=Object(a["C"])("Field"),J=Object(a["C"])("Form"),T=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",n,[r,Object(a["h"])("table",l,[s,Object(a["h"])("tbody",null,[E.cart.carts?(Object(a["v"])(),Object(a["d"])(A,{key:0,loading:E.loadingStatus,cartitem:E.cart},null,8,["loading","cartitem"])):Object(a["e"])("",!0)]),Object(a["h"])("tfoot",null,[Object(a["h"])("tr",null,[o,(null===(M=E.cart)||void 0===M||null===(_=M.carts)||void 0===_?void 0:_.length)>=1?(Object(a["v"])(),Object(a["d"])("td",i,Object(a["F"])(t.$filters.currency(this.cart.total)),1)):(Object(a["v"])(),Object(a["d"])("td",u,"尚無商品"))])])]),Object(a["h"])("div",d,[Object(a["h"])(J,{ref:"form",onSubmit:I.onSubmit,class:"col-md-6"},{default:Object(a["M"])((function(){return[Object(a["h"])("div",b,[h,Object(a["h"])(B,{id:"name",name:"姓名",type:"text",class:"form-control",placeholder:"請輸入 姓名",rules:"required",value:E.form.user.name,disabled:""},null,8,["value"])]),Object(a["h"])("div",f,[m,Object(a["h"])(B,{id:"email",name:"信箱",type:"email",class:"form-control",placeholder:"請輸入 Email",rules:"email|required",value:E.form.user.email,disabled:""},null,8,["value"])]),Object(a["h"])("div",O,[j,Object(a["h"])(B,{id:"tel",name:"電話",type:"tel",class:"form-control",placeholder:"請輸入 電話",value:E.form.user.tel,disabled:""},null,8,["value"])]),Object(a["h"])("div",p,[v,Object(a["h"])(B,{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入 地址",rules:"required",value:E.form.user.address,disabled:""},null,8,["value"])]),Object(a["h"])("div",g,[y,Object(a["h"])(B,{id:"payment",class:"form-control",name:"付款方式",rules:"required",value:E.form.user.payment_method,disabled:""},null,8,["value"])]),Object(a["h"])("div",x,[w,Object(a["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10",value:E.form.message,disabled:""},null,8,["value"])]),Object(a["h"])("div",k,[Object(a["h"])("button",{type:"submit",class:"btn btn-primary",disabled:E.cart.carts<=1},[2===E.loadingStatus.loadingItem?(Object(a["v"])(),Object(a["d"])("span",C," cached ")):Object(a["e"])("",!0),S],8,["disabled"])])]})),_:1},8,["onSubmit"])]),Object(a["h"])("div",F,[Object(a["h"])(T,{class:"btn btn-secondary",to:"/cartcheck"},{default:Object(a["M"])((function(){return[$]})),_:1})])])}c("99af");var E=c("3d4f"),I={class:"text-end"},M={class:"text-end"},_={class:"text-end"},A={class:"text-success"};function B(t,e,c,n,r,l){return Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(c.cartitem.carts,(function(e){return Object(a["v"])(),Object(a["d"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])("img",{class:"product-img",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"])]),Object(a["h"])("td",null,Object(a["F"])(e.product.category),1),Object(a["h"])("td",null,Object(a["F"])(e.product.title),1),Object(a["h"])("td",I,Object(a["F"])(e.qty),1),Object(a["h"])("td",M,Object(a["F"])(t.$filters.currency(e.product.price)),1),Object(a["h"])("td",_,[Object(a["h"])("small",A,"價格："+Object(a["F"])(t.$filters.currency(e.total)),1)])])})),128)}var J={emits:["delete-cart","add-product-num","cut-product-num"],props:{cartitem:{type:Object,default:function(){return{}}},loading:{type:Object,default:function(){return{}}}}};J.render=B;var T=J,U={data:function(){return{loadingStatus:{loadingItem:""},cart:"",form:{user:{name:"123",email:"koushun777@gmail.com",tel:"0912345678",address:"12444",payment_method:"信用卡"},message:""}}},components:{ConfirmCart:T},methods:{showAlert:function(t){this.$swal(t.data.message)},check:function(){this.cart.carts.length<1&&(alert("請先加入商品至購物車"),this.$router.push("/products"))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,E["a"].emit("update-cart"),t.check())})).catch((function(t){console.log(t)}))},getCartOnly:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,E["a"].emit("update-cart"))})).catch((function(t){console.log(t)}))},onSubmit:function(){var t=this;this.loadingStatus.loadingItem=2;var e={data:{user:this.form.user,message:this.form.message}};console.log(e);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/order");this.$http.post(c,e).then((function(e){console.log(e),e.data.success&&(t.$refs.form.resetForm(),t.form.message="",t.showAlert(e),t.loadingStatus.loadingItem="",t.getCartOnly(),t.$router.push("/cartcompleted"))})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getCart()}};U.render=q;e["default"]=U}}]);
//# sourceMappingURL=chunk-5667dcdc.76cada74.js.map