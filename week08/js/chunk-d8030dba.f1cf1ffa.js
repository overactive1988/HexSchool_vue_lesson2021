(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8030dba"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var c=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(c["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c["a"])(t,e):void 0}}},"466d":function(t,e,r){"use strict";var c=r("d784"),o=r("825a"),a=r("50c4"),n=r("1d80"),i=r("8aa5"),s=r("14c3");c("match",(function(t,e,r){return[function(e){var r=n(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,r):new RegExp(e)[t](String(r))},function(t){var c=r(e,this,t);if(c.done)return c.value;var n=o(this),l=String(t);if(!n.global)return s(n,l);var d=n.unicode;n.lastIndex=0;var u,b=[],f=0;while(null!==(u=s(n,l))){var p=String(u[0]);b[f]=p,""===p&&(n.lastIndex=i(l,a(n.lastIndex),d)),f++}return 0===f?null:b}]}))},"4df4":function(t,e,r){"use strict";var c=r("0366"),o=r("7b0b"),a=r("9bdd"),n=r("e95a"),i=r("50c4"),s=r("8418"),l=r("35a1");t.exports=function(t){var e,r,d,u,b,f,p=o(t),h="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,v=void 0!==g,j=l(p),O=0;if(v&&(g=c(g,m>2?arguments[2]:void 0,2)),void 0==j||h==Array&&n(j))for(e=i(p.length),r=new h(e);e>O;O++)f=v?g(p[O],O):p[O],s(r,O,f);else for(u=j.call(p),b=u.next,r=new h;!(d=b.call(u)).done;O++)f=v?a(u,g,[d.value,O],!0):d.value,s(r,O,f);return r.length=O,r}},"6b75":function(t,e,r){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,c=new Array(e);r<e;r++)c[r]=t[r];return c}r.d(e,"a",(function(){return c}))},"9bdd":function(t,e,r){var c=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(c(r)[0],r[1]):e(r)}catch(n){throw o(t),n}}},a630:function(t,e,r){var c=r("23e7"),o=r("4df4"),a=r("1c7e"),n=!a((function(t){Array.from(t)}));c({target:"Array",stat:!0,forced:n},{from:o})},b0c0:function(t,e,r){var c=r("83ab"),o=r("9bf2").f,a=Function.prototype,n=a.toString,i=/^\s*function ([^ (]*)/,s="name";c&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(t){return""}}})},d28b:function(t,e,r){var c=r("746f");c("iterator")},ed84:function(t,e,r){"use strict";r.r(e);r("caad"),r("2532");var c=r("7a23"),o={class:"nav-header"},a={"aria-label":"breadcrumb"},n={class:"breadcrumb"},i={class:"breadcrumb-item"},s=Object(c["createTextVNode"])("首頁"),l=Object(c["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"},"商品列表",-1),d={id:"main",class:"container-fluid content"},u=Object(c["createVNode"])("h2",{class:"text-center pt-4"},"商品列表",-1),b={class:"mt-4 text-end"},f=Object(c["createTextVNode"])(" 總共有 "),p={id:"productCount"},h=Object(c["createTextVNode"])(" 項商品 "),m={class:"row"},g={class:"\r\n          col-12 col-sm-3 col-md-2\r\n          position-relativd position-sm-fixed\r\n          me-auto\r\n        "},v={class:"list-group mb-3 mb-sm-0"},j={class:"col-12 col-sm-9 col-md-10 ms-auto"},O={class:"\r\n            row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4\r\n            g-3\r\n            list-unstyled\r\n          "},y={class:"card h-100"},N={class:"card-body"},k={class:"card-title"},w={class:"card-text"},V={class:"\r\n                  card-footer\r\n                  d-flex\r\n                  align-items-center\r\n                  justify-content-between\r\n                  position-relative\r\n                ",style:{"z-index":"5"}},C={key:0,class:"material-icons"},x={key:1,class:"material-icons"},S={key:0,class:"material-icons animate-spin"},A=Object(c["createTextVNode"])(" 加到購物車 ");function B(t,e,r,B,I,F){var M=Object(c["resolveComponent"])("Navbar"),P=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("header",o,[Object(c["createVNode"])(M)]),Object(c["createVNode"])("nav",a,[Object(c["createVNode"])("ol",n,[Object(c["createVNode"])("li",i,[Object(c["createVNode"])(P,{to:"/"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]),l])]),Object(c["createVNode"])("div",d,[u,Object(c["createVNode"])("p",b,[f,Object(c["createVNode"])("span",p,Object(c["toDisplayString"])(this.filterProducts.length),1),h]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("a",{href:"#",class:["list-group-item",{active:""===I.selectCategory}],"aria-current":"true",onClick:e[1]||(e[1]=Object(c["withModifiers"])((function(t){return I.selectCategory=""}),["prevent"]))},"所有商品",2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(I.categories,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{href:"#",key:t,class:["list-group-item list-group-item-action",{active:t===I.selectCategory}],"aria-current":"true",onClick:Object(c["withModifiers"])((function(e){return I.selectCategory=t}),["prevent"])},Object(c["toDisplayString"])(t),11,["onClick"])})),128))])]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("ul",O,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(F.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e,class:"col"},[Object(c["createVNode"])("div",y,[Object(c["createVNode"])(P,{to:"/product/".concat(e.id),class:"text-decoration-none stretched-link h-100"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("img",{src:e.imageUrl,class:"card-img-top",alt:"item.title"},null,8,["src"]),Object(c["createVNode"])("div",N,[Object(c["createVNode"])("h5",k,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("p",w,Object(c["toDisplayString"])(e.price)+"NTD",1)])]})),_:2},1032,["to"]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(r){return t.addMyFavorite(e.id)}),["prevent"])},[I.myFavorite.includes(e.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("span",C," star ")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",x," star_border "))],8,["onClick"]),Object(c["createVNode"])("button",{onClick:function(t){return F.addCart(e.id)},type:"button",disabled:I.loadingStatus.loadingItem===e.id+1,class:"btn btn-primary btn-sm"},[I.loadingStatus.loadingItem===e.id+1?(Object(c["openBlock"])(),Object(c["createBlock"])("span",S," cached ")):Object(c["createCommentVNode"])("",!0),A],8,["onClick","disabled"])])])])})),128))])])])])],64)}var I=r("6b75");function F(t){if(Array.isArray(t))return Object(I["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function M(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var P=r("06c5");function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(t){return F(t)||M(t)||Object(P["a"])(t)||T()}r("99af"),r("6062"),r("159b"),r("4de4"),r("ac1f"),r("466d");var $=r("d178"),_=r("9fe6"),E={props:["propsCategory"],data:function(){return{loadingStatus:{loadingItem:""},products:[],myFavorite:this.getLocalStorage()||[],categories:[],selectCategory:""}},mixins:[_["a"]],components:{Navbar:$["a"]},inject:["emitter"],methods:{showAlert:function(t){this.$swal(t.data.message)},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products/all");this.$http.get(e).then((function(e){if(e.data.success){var r=e.data.products;t.products=r,t.getCatgories()}})).catch((function(t){return t}))},addCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus.loadingItem=t+1;var c={data:{product_id:t,qty:r}},o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.post(o,c).then((function(t){e.loadingStatus.loadingItem="",e.emitter.emit("update-cart"),e.showAlert(t)})).catch((function(t){console.log(t)}))},getCatgories:function(){var t=new Set;this.products.forEach((function(e){t.add(e.category)})),this.categories=D(t),this.selectCategory=this.propsCategory,this.emitter.emit("clearProps")}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.selectCategory)}))}},mounted:function(){this.getProducts(),this.topCategory=""}};E.render=B;e["default"]=E},fb6a:function(t,e,r){"use strict";var c=r("23e7"),o=r("861d"),a=r("e8b5"),n=r("23cb"),i=r("50c4"),s=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),b=u("slice"),f=d("species"),p=[].slice,h=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var r,c,d,u=s(this),b=i(u.length),m=n(t,b),g=n(void 0===e?b:e,b);if(a(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(u,m,g);for(c=new(void 0===r?Array:r)(h(g-m,0)),d=0;m<g;m++,d++)m in u&&l(c,d,u[m]);return c.length=d,c}})}}]);
//# sourceMappingURL=chunk-d8030dba.f1cf1ffa.js.map