(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19cb068e"],{"459d":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function c(t,e,a,c,o,r){var s=Object(n["y"])("AdminNavbar"),i=Object(n["y"])("router-view"),l=Object(n["y"])("AdminFooter");return Object(n["t"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(s)]),o.check?(Object(n["t"])(),Object(n["d"])(i,{key:0})):Object(n["e"])("",!0),Object(n["h"])(l)],64)}a("ac1f"),a("5319");var o=a("9d64"),r=a.n(o),s={class:"navbar navbar-expand-lg navbar-dark bg-primary header-nav"},i={class:"container-fluid"},l=Object(n["h"])("img",{src:r.a,alt:"LITTLE WITCH NOBETA",width:"140",class:"d-inline-block align-text-top"},null,-1),b=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},d={class:"navbar-nav"},u={class:"nav-item"},j=Object(n["g"])("管理介面首頁"),O=Object(n["h"])("span",{class:"text-uppercase"},"admin",-1),p={class:"nav-item"},v=Object(n["g"])("商品列表"),g=Object(n["h"])("span",{class:"text-uppercase"},"products",-1),f={class:"nav-item"},m=Object(n["g"])("訂單列表"),k=Object(n["h"])("span",{class:"text-uppercase"},"orders",-1),x={class:"nav-item"},w=Object(n["g"])("優惠券設定"),y=Object(n["h"])("span",{class:"text-uppercase"},"coupon",-1);function _(t,e){var a=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["d"])("nav",s,[Object(n["h"])("div",i,[Object(n["h"])("h1",null,[Object(n["h"])(a,{class:"navbar-brand",to:"/"},{default:Object(n["I"])((function(){return[l]})),_:1})]),b,Object(n["h"])("div",h,[Object(n["h"])("ul",d,[Object(n["h"])("li",u,[Object(n["h"])(a,{class:"nav-link text-decoration-none header-nav-link",to:"/admin"},{default:Object(n["I"])((function(){return[j,O]})),_:1})]),Object(n["h"])("li",p,[Object(n["h"])(a,{class:"nav-link text-decoration-none header-nav-link",to:"/admin/products"},{default:Object(n["I"])((function(){return[v,g]})),_:1})]),Object(n["h"])("li",f,[Object(n["h"])(a,{class:"nav-link text-decoration-none header-nav-link",to:"/admin/orders"},{default:Object(n["I"])((function(){return[m,k]})),_:1})]),Object(n["h"])("li",x,[Object(n["h"])(a,{class:"nav-link text-decoration-none header-nav-link",to:"/admin/coupon"},{default:Object(n["I"])((function(){return[w,y]})),_:1})])])])])])}const I={};I.render=_;var A=I,N={class:"bg-primary fixed-bottom fs-7 p-3 text-center"},T={class:"position-absolute ms-2 text-light copyRight"},$=Object(n["g"])("made by "),C=Object(n["h"])("a",{class:"text-link text-decoration-none",href:"https://github.com/overactive1988",target:"_blank"},"leolee",-1),D=Object(n["h"])("span",{class:"material-icons"}," account_box ",-1),E=Object(n["h"])("p",{class:"text-light mb-2"},[Object(n["g"])(" 本站所使用一切 小魔女諾貝塔 相關素材已取得授權"),Object(n["h"])("br"),Object(n["g"])("著作權皆屬於 "),Object(n["h"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"希萌創意行銷股份有限公司"),Object(n["g"])(" 所有 ")],-1),F=Object(n["h"])("small",{class:"text-light"},[Object(n["g"])("© 2021 "),Object(n["h"])("a",{class:"text-link text-decoration-none",href:"http://simon.moe/",target:"_blank"},"SimonCreative"),Object(n["g"])(" All rights reserved")],-1);function J(t,e){var a=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["d"])("footer",N,[Object(n["h"])("small",T,[$,C,Object(n["h"])(a,{class:"text-white-50",to:"/login"},{default:Object(n["I"])((function(){return[D]})),_:1})]),E,F])}const L={};L.render=J;var z=L,B={data:function(){return{check:!1}},components:{AdminNavbar:A,AdminFooter:z},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.loginCheck()},methods:{loginCheck:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(e).then((function(e){e.data.success?t.check=!0:(alert("您尚未登入，請重新登入"),t.$router.push("/login"))})).catch((function(t){console.log(t)}))}}};a("ae7f");B.render=c;e["default"]=B},"9d64":function(t,e,a){t.exports=a.p+"img/logo.a707c5a8.png"},ae7f:function(t,e,a){"use strict";a("d1d1")},d1d1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-19cb068e.bef75c0f.js.map