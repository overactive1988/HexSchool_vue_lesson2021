(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05cca0c4"],{"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),o=c("2d00"),s=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var n=c("c04e"),r=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var s=n(e);s in t?r.f(t,s,o(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),r=c("d039"),o=c("e8b5"),s=c("861d"),a=c("7b0b"),l=c("50c4"),d=c("8418"),i=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),f=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=h>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=u("concat"),m=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},v=!p||!g;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,n,r,o,s=a(this),u=i(s,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],m(o)){if(r=l(o.length),b+r>j)throw TypeError(O);for(c=0;c<r;c++,b++)c in o&&d(u,b,o[c])}else{if(b>=j)throw TypeError(O);d(u,b++,o)}return u.length=b,u}})},b0c0:function(t,e,c){var n=c("83ab"),r=c("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&r(o,l,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},d3e0:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r=c("f907"),o=c.n(r),s=Object(n["h"])("h1",{class:"text-center"},"完成下訂",-1),a=Object(n["h"])("figure",{class:"my-5 text-center mx-auto"},[Object(n["h"])("img",{class:"img-fluid",src:o.a,alt:"step4 完成下訂"})],-1),l={class:"text-center"},d=Object(n["g"])(" 您的訂單編號為："),i=Object(n["h"])("br",{class:"d-block d-sm-none"},null,-1),u={class:"fs-4 text-danger fw-bold"},b=Object(n["h"])("hr",null,null,-1),h=Object(n["h"])("h2",{class:"text-center"},"客戶資訊",-1),f={class:"row justify-content-center"},j={key:0,class:"col-md-6"},O=Object(n["h"])("dt",null,"姓名：",-1),p=Object(n["h"])("dt",null,"寄送地址：",-1),g=Object(n["h"])("dt",null,"E-mail信箱：",-1),m=Object(n["h"])("dt",null,"付款方式：",-1),v=Object(n["h"])("h2",{class:"text-center"},"購買品項",-1),x={class:"p-table table align-middle"},y=Object(n["h"])("thead",{class:"p-table__foot"},[Object(n["h"])("tr",{class:"text-light"},[Object(n["h"])("th",{width:"40%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(n["h"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"},"數量")])],-1),w={class:"p-table__body"},F={class:"d-sm-flex align-items-center"},_={class:"ps-2"},k={class:"badge bg-primary"},$={class:"fs-7 fs-sm-6"},S={class:"text-center"},I={class:"p-table__head"},A={class:"text-light"},E=Object(n["h"])("td",{class:"text-end"},"總計",-1),T={class:"text-center"},B={class:"d-flex justify-content-center mb-4"},C={key:0,class:"material-icons animate-spin"},J=Object(n["g"])(" 結帳付款 ");function q(t,e,c,r,o,q){return Object(n["v"])(),Object(n["d"])(n["a"],null,[s,a,Object(n["h"])("h2",l,[d,i,Object(n["h"])("span",u,Object(n["F"])(this.order.id),1)]),b,h,Object(n["h"])("div",f,[o.order.user?(Object(n["v"])(),Object(n["d"])("dl",j,[O,Object(n["h"])("dd",null,Object(n["F"])(o.order.user.name),1),p,Object(n["h"])("dd",null,Object(n["F"])(o.order.user.address),1),g,Object(n["h"])("dd",null,Object(n["F"])(o.order.user.email),1),m,Object(n["h"])("dd",null,Object(n["F"])(o.order.user.payment_method),1)])):Object(n["e"])("",!0)]),v,Object(n["h"])("table",x,[y,Object(n["h"])("tbody",w,[(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(o.order.products,(function(t){return Object(n["v"])(),Object(n["d"])("tr",{key:t},[Object(n["h"])("td",null,[Object(n["h"])("figure",F,[Object(n["h"])("img",{class:"product-img d-none d-sm-block",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(n["h"])("figcaption",_,[Object(n["h"])("span",k,Object(n["F"])(t.product.category),1),Object(n["h"])("p",$,Object(n["F"])(t.product.title),1)])])]),Object(n["h"])("td",S,Object(n["F"])(t.qty),1)])})),128))]),Object(n["h"])("tfoot",I,[Object(n["h"])("tr",A,[E,Object(n["h"])("td",T,Object(n["F"])(t.$filters.currency(o.order.total))+" NTD",1)])])]),Object(n["h"])("div",B,[Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return q.payment()})},[3===o.loadingStatus.loadingItem?(Object(n["v"])(),Object(n["d"])("span",C," cached ")):Object(n["e"])("",!0),J])])],64)}c("99af");var D={data:function(){return{loadingStatus:{loadingItem:""},order:{}}},methods:{showAlert:function(t){this.$swal(t.data.message)},getOrder:function(){var t=this,e=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/order/").concat(e);this.$http.get(c).then((function(e){t.order=e.data.order,console.log(t.order),console.log(t.order.products),console.log(t.order.user)})).catch((function(t){console.log(t)}))},payment:function(){var t=this;this.loadingStatus.loadingItem="3";var e=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/pay/").concat(e);this.$http.post(c).then((function(c){c.data.success&&(t.loadingStatus.loadingItem="",t.showAlert(c),t.$router.push("/cartcompleted/".concat(e)))})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getOrder()}};D.render=q;e["default"]=D},f907:function(t,e,c){t.exports=c.p+"img/cart_step04.381de4d5.png"}}]);
//# sourceMappingURL=chunk-05cca0c4.9369417a.js.map