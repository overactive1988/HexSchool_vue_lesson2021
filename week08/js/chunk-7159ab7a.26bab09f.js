(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7159ab7a"],{"1dde":function(e,t,a){var n=a("d039"),c=a("b622"),r=a("2d00"),o=c("species");e.exports=function(e){return r>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3d4f":function(e,t,a){"use strict";var n=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n?n.push(a):e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&(a?n.splice(n.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var n=e.get(t);n&&n.slice().map((function(e){e(a)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,a)}))}}},c=n();t["a"]=c},8418:function(e,t,a){"use strict";var n=a("c04e"),c=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?c.f(e,o,r(0,a)):e[o]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),c=a("d039"),r=a("e8b5"),o=a("861d"),l=a("7b0b"),s=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),m=a("b622"),f=a("2d00"),b=m("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",j=f>=51||!c((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),O=d("concat"),v=function(e){if(!o(e))return!1;var t=e[b];return void 0!==t?!!t:r(e)},g=!j||!O;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,a,n,c,r,o=l(this),d=u(o,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?o:arguments[t],v(r)){if(c=s(r.length),m+c>h)throw TypeError(p);for(a=0;a<c;a++,m++)a in r&&i(d,m,r[a])}else{if(m>=h)throw TypeError(p);i(d,m++,r)}return d.length=m,d}})},b0c0:function(e,t,a){var n=a("83ab"),c=a("9bf2").f,r=Function.prototype,o=r.toString,l=/^\s*function ([^ (]*)/,s="name";n&&!(s in r)&&c(r,s,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(e){return""}}})},e727:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),c={class:"container content"},r=Object(n["h"])("h1",{class:"text-center"},"填寫訂單",-1),o={class:"my-5 row justify-content-center"},l={class:"mb-3"},s=Object(n["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),i={class:"mb-3"},u=Object(n["h"])("label",{for:"email",class:"form-label"},"Email",-1),d={class:"mb-3"},m=Object(n["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),f={class:"mb-3"},b=Object(n["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),h={class:"mb-3"},p=Object(n["h"])("label",{for:"payment",class:"form-label"},"付款方式",-1),j=Object(n["h"])("option",{value:""},"請選擇付款方式",-1),O=Object(n["h"])("option",{value:"ATM轉帳"},"ATM轉帳",-1),v=Object(n["h"])("option",{value:"信用卡"},"信用卡",-1),g=Object(n["h"])("option",{value:"面交"},"面交",-1),y={class:"mb-3"},w=Object(n["h"])("label",{for:"message",class:"form-label"},"留言",-1),V={class:"text-end"},k={key:0,class:"material-icons animate-spin"},x=Object(n["g"])(" 確認訂單 "),S={class:"d-flex justify-content-between mb-4"},M=Object(n["g"])("返回購物車");function C(e,t,a,C,U,_){var E=Object(n["C"])("Field"),$=Object(n["C"])("ErrorMessage"),q=Object(n["C"])("Form"),A=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["d"])("div",c,[r,Object(n["h"])("div",o,[Object(n["h"])(q,{ref:"form",onSubmit:_.onSubmit,class:"col-md-6"},{default:Object(n["M"])((function(e){var a=e.errors;return[Object(n["h"])("div",l,[s,Object(n["h"])(E,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入 姓名",rules:"required",modelValue:U.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return U.form.user.name=e})},null,8,["class","modelValue"]),Object(n["h"])($,{name:"姓名",class:"invalid-feedback"})]),Object(n["h"])("div",i,[u,Object(n["h"])(E,{id:"email",name:"信箱",type:"email",class:["form-control",{"is-invalid":a["信箱"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:U.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return U.form.user.email=e})},null,8,["class","modelValue"]),Object(n["h"])($,{name:"信箱",class:"invalid-feedback"})]),Object(n["h"])("div",d,[m,Object(n["h"])(E,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入 電話",rules:_.isPhone,modelValue:U.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return U.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(n["h"])($,{name:"電話",class:"invalid-feedback"})]),Object(n["h"])("div",f,[b,Object(n["h"])(E,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入 地址",rules:"required",modelValue:U.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return U.form.user.address=e})},null,8,["class","modelValue"]),Object(n["h"])($,{name:"地址",class:"invalid-feedback"})]),Object(n["h"])("div",h,[p,Object(n["h"])(E,{id:"payment",class:["d-block w-50 p-1",{"is-invalid":a["付款方式"]}],name:"付款方式",as:"select",rules:"required",modelValue:U.form.user.payment_method,"onUpdate:modelValue":t[5]||(t[5]=function(e){return U.form.user.payment_method=e})},{default:Object(n["M"])((function(){return[j,O,v,g]})),_:2},1032,["modelValue","class"]),Object(n["h"])($,{name:"付款方式",class:"invalid-feedback"})]),Object(n["h"])("div",y,[w,Object(n["N"])(Object(n["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=function(e){return U.form.message=e})},null,512),[[n["J"],U.form.message]])]),Object(n["h"])("div",V,[Object(n["h"])("button",{type:"submit",class:"btn btn-primary",disabled:U.cart.carts<=1},[2===U.loadingStatus.loadingItem?(Object(n["v"])(),Object(n["d"])("span",k," cached ")):Object(n["e"])("",!0),x],8,["disabled"])])]})),_:1},8,["onSubmit"])]),Object(n["h"])("div",S,[Object(n["h"])(A,{class:"btn btn-secondary",to:"/cart"},{default:Object(n["M"])((function(){return[M]})),_:1})])])}a("99af");var U=a("3d4f"),_={data:function(){return{loadingStatus:{loadingItem:""},cart:"",form:{user:{name:"123",email:"koushun777@gmail.com",tel:"0912345678",address:"12444",payment_method:""},message:""}}},methods:{showAlert:function(e){this.$swal(e.data.message)},check:function(){this.cart.carts.length<1&&(alert("請先加入商品至購物車"),this.$router.push("/products"))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cart=t.data.data,U["a"].emit("update-cart"),e.check())})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需為正確的 手機號碼"},onSubmit:function(){this.loadingStatus.loadingItem=2,this.$router.push("/cartconfirm")}},mounted:function(){console.clear(),this.getCart()}};_.render=C;t["default"]=_}}]);
//# sourceMappingURL=chunk-7159ab7a.26bab09f.js.map