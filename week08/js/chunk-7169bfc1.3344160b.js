(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7169bfc1"],{"3d4f":function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}},o=a();t["a"]=o},"5ae0":function(e,t,c){"use strict";var a=c("7a23"),o={class:"d-sm-flex align-items-center"},r={class:"ps-2"},l={class:"badge bg-primary"},s={class:"fs-7 fs-sm-6"},n={class:"text-center"},d={class:"text-center"},i={class:"text-end"},b={key:0,class:"text-success"};function m(e,t,c,m,u,f){return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.cartitem.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("figure",o,[Object(a["createVNode"])("img",{class:"product-img",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(a["createVNode"])("figcaption",r,[Object(a["createVNode"])("span",l,Object(a["toDisplayString"])(t.product.category),1),Object(a["createVNode"])("p",s,Object(a["toDisplayString"])(t.product.title),1)])])]),Object(a["createVNode"])("td",n,Object(a["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(a["createVNode"])("td",d,Object(a["toDisplayString"])(t.qty),1),Object(a["createVNode"])("td",i,[t.final_total!==t.total?(Object(a["openBlock"])(),Object(a["createBlock"])("small",b,"折扣價：")):Object(a["createCommentVNode"])("",!0),Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$filters.currency(t.final_total))+" NTD ",1)])])})),128)}var u={props:{cartitem:{type:Object,default:function(){return{}}}}};u.render=m;t["a"]=u},b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,r=Function.prototype,l=r.toString,s=/^\s*function ([^ (]*)/,n="name";a&&!(n in r)&&o(r,n,{configurable:!0,get:function(){try{return l.call(this).match(s)[1]}catch(e){return""}}})},e727:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o={id:"main",class:"container-lg content"},r=Object(a["createVNode"])("h2",{class:"pt-4 text-light"},"填寫訂單",-1),l={class:"bg-light my-3 my-sm-5 p-4"},s=Object(a["createVNode"])("figure",{class:"mt-0 mb-3 my-sm-5 text-center mx-auto"},[Object(a["createVNode"])("img",{class:"img-fluid",src:"https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626638262066.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NfdAEOCee8c1DktKIangjnAP2g1jIMG3H05q4kQGNqzb98VCcv%2FKXolI3t4JA2gIaWZkQ0D1AfKLG41aAqt6m9eCFVINJBi9MTzqVxzwFe6DWq55IQKgZxbvFGOiSRkcaRXIxVuMJrX%2BFFtRqXGgxy2BLFU6I7EV9MSr3uUVYpyiQgdxLLmhDi8ws1TQdsz2nLgsxcmdT6k4PgpYaSbnahWJoQgcLONzYJ4ClFzQ6rjUveFIZ7vJSJd4LtkV7vsrT3xkL9KIEE%2FtxXoK6aW8Zph2X%2BfJvpwbc2yaUQfQCZcbX77chGTXSjuT7QN7Ooxig6tYUctLj6P0rYWPYgNd1A%3D%3D",alt:"step2 填寫訂單"})],-1),n={class:"my-5 row justify-content-center"},d={class:"mb-3"},i=Object(a["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),b=Object(a["createVNode"])("span",{class:"badge bg-danger p-1 fs-7 ms-1"},"必要",-1),m={class:"mb-3"},u=Object(a["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),f=Object(a["createVNode"])("span",{class:"badge bg-danger p-1 fs-7 ms-1"},"必要",-1),p={class:"mb-3"},j=Object(a["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),O=Object(a["createVNode"])("span",{class:"badge bg-danger p-1 fs-7 ms-1"},"必要",-1),g={class:"mb-3"},V=Object(a["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),N=Object(a["createVNode"])("span",{class:"badge bg-danger p-1 fs-7 ms-1"},"必要",-1),h={class:"mb-3"},k=Object(a["createVNode"])("label",{for:"payment",class:"form-label"},"付款方式",-1),v=Object(a["createVNode"])("span",{class:"badge bg-danger p-1 fs-7 ms-1"},"必要",-1),y=Object(a["createVNode"])("option",{value:""},"請選擇付款方式",-1),x=Object(a["createVNode"])("option",{value:"ATM轉帳"},"ATM轉帳",-1),B=Object(a["createVNode"])("option",{value:"信用卡"},"信用卡",-1),w=Object(a["createVNode"])("option",{value:"面交"},"面交",-1),C={class:"mb-3"},S=Object(a["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),D={class:"d-flex justify-content-between"},_=Object(a["createTextVNode"])("返回購物車"),F={key:0,class:"material-icons animate-spin"},T=Object(a["createTextVNode"])(" 確認訂單 "),I={class:"col-lg-6 order-0 order-lg-1"},U=Object(a["createVNode"])("h3",{class:"mb-3"},"購買品項",-1),q={class:"p-table table align-middle"},A=Object(a["createVNode"])("thead",{class:"p-table__head"},[Object(a["createVNode"])("tr",{class:"text-light"},[Object(a["createVNode"])("th",{class:"p-table__th--name text-center fs-7 fs-sm-6"}," 商品 "),Object(a["createVNode"])("th",{width:"15%",class:"text-center fs-7 fs-sm-6"},"單價"),Object(a["createVNode"])("th",{width:"20%",class:"text-center fs-7 fs-sm-6"},"數量"),Object(a["createVNode"])("th",{width:"30%",class:"text-end fs-7 fs-sm-6"},"小計")])],-1),J={class:"p-table__body"},L={class:"p-table__foot"},Q={class:"text-light"},$={key:0,colspan:"4",class:"text-end"},M={key:0},z={key:1,class:"text-end"},E={key:0},X={colspan:"4",class:"text-end text-light"},G={key:1,class:"text-center"};function K(e,t,c,K,P,Y){var W,Z,R=Object(a["resolveComponent"])("Field"),H=Object(a["resolveComponent"])("ErrorMessage"),ee=Object(a["resolveComponent"])("router-link"),te=Object(a["resolveComponent"])("Form"),ce=Object(a["resolveComponent"])("ConfirmCart");return Object(a["openBlock"])(),Object(a["createBlock"])("main",o,[r,Object(a["createVNode"])("div",l,[s,Object(a["createVNode"])("div",n,[P.cart.total>0?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[Object(a["createVNode"])(te,{ref:"form",onSubmit:Y.onSubmit,class:"mt-4 mt-lg-0 col-lg-6 order-1 order-lg-0"},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createVNode"])("div",d,[i,b,Object(a["createVNode"])(R,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入 姓名",rules:"required",modelValue:P.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.form.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(H,{name:"姓名",class:"invalid-feedback"})]),Object(a["createVNode"])("div",m,[u,f,Object(a["createVNode"])(R,{id:"email",name:"信箱",type:"email",class:["form-control",{"is-invalid":c["信箱"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:P.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return P.form.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(H,{name:"信箱",class:"invalid-feedback"})]),Object(a["createVNode"])("div",p,[j,O,Object(a["createVNode"])(R,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入 電話",rules:Y.isPhone,modelValue:P.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return P.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(a["createVNode"])(H,{name:"電話",class:"invalid-feedback"})]),Object(a["createVNode"])("div",g,[V,N,Object(a["createVNode"])(R,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入 地址",rules:"required",modelValue:P.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return P.form.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(H,{name:"地址",class:"invalid-feedback"})]),Object(a["createVNode"])("div",h,[k,v,Object(a["createVNode"])(R,{id:"payment",class:["d-block w-50 p-1",{"is-invalid":c["付款方式"]}],name:"付款方式",as:"select",rules:"required",modelValue:P.form.user.payment_method,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.form.user.payment_method=e})},{default:Object(a["withCtx"])((function(){return[y,x,B,w]})),_:2},1032,["modelValue","class"]),Object(a["createVNode"])(H,{name:"付款方式",class:"invalid-feedback"})]),Object(a["createVNode"])("div",C,[S,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=function(e){return P.form.message=e})},null,512),[[a["vModelText"],P.form.message]])]),Object(a["createVNode"])("div",D,[Object(a["createVNode"])(ee,{class:"btn btn-secondary",to:"/cart"},{default:Object(a["withCtx"])((function(){return[_]})),_:1}),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary",disabled:P.cart.carts<=1},[2===P.loadingStatus.loadingItem?(Object(a["openBlock"])(),Object(a["createBlock"])("span",F," cached ")):Object(a["createCommentVNode"])("",!0),T],8,["disabled"])])]})),_:1},8,["onSubmit"]),Object(a["createVNode"])("div",I,[U,Object(a["createVNode"])("table",q,[A,Object(a["createVNode"])("tbody",J,[P.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])(ce,{key:0,cartitem:P.cart},null,8,["cartitem"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("tfoot",L,[Object(a["createVNode"])("tr",Q,[(null===(W=P.cart)||void 0===W||null===(Z=W.carts)||void 0===Z?void 0:Z.length)>=1?(Object(a["openBlock"])(),Object(a["createBlock"])("td",$,[P.cart.final_total!==P.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("del",M," 總計： "+Object(a["toDisplayString"])(e.$filters.currency(this.cart.total))+" NTD",1)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])("總計： "+Object(a["toDisplayString"])(e.$filters.currency(this.cart.total))+" NTD",1)],64))])):(Object(a["openBlock"])(),Object(a["createBlock"])("td",z,"尚無商品"))]),P.cart.final_total!==P.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",E,[Object(a["createVNode"])("td",X," 折扣價： "+Object(a["toDisplayString"])(e.$filters.currency(P.cart.final_total))+" NTD ",1)])):Object(a["createCommentVNode"])("",!0)])])])],64)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",G,"請先將商品加入購物車"))])])])}c("99af");var P=c("3d4f"),Y=c("5ae0"),W={data:function(){return{loadingStatus:{loadingItem:""},cart:"",form:{user:{name:"",email:"",tel:"",address:"",payment_method:""},message:""}}},components:{ConfirmCart:Y["a"]},methods:{showAlert:function(e){this.$swal(e.data.message)},check:function(){this.cart.carts.length<1&&(alert("請先加入商品至購物車"),this.$router.push("/products"))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cart=t.data.data,P["a"].emit("update-cart"),e.check())})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需為正確的 手機號碼"},onSubmit:function(){this.loadingStatus.loadingItem=2,P["a"].emit("sendForm",this.form),this.$router.push("/cartconfirm")}},mounted:function(){console.clear(),this.getCart()}};W.render=K;t["default"]=W}}]);
//# sourceMappingURL=chunk-7169bfc1.3344160b.js.map