(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87e491ac"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?i(t):c(r(t))}},"07ac":function(t,e,n){var r=n("23e7"),c=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return c(t)}})},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),a=n("2d00"),o=c("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var r=n("23e7"),c=n("5a34"),a=n("1d80"),o=n("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(a(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},"3d4f":function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}},c=r();e["a"]=c},"44e7":function(t,e,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==c(t))}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6f53":function(t,e,n){var r=n("83ab"),c=n("df75"),a=n("fc6a"),o=n("d1e7").f,i=function(t){return function(e){var n,i=a(e),s=c(i),u=s.length,l=0,d=[];while(u>l)n=s[l++],r&&!o.call(i,n)||d.push(t?[n,i[n]]:i[n]);return d}};t.exports={entries:i(!0),values:i(!1)}},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?c.f(t,o,a(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),a=n("e8b5"),o=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),b=n("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=b>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=d("concat"),j=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},m=!g||!O;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,r,c,a,o=i(this),d=l(o,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],j(a)){if(c=s(a.length),f+c>p)throw TypeError(v);for(n=0;n<c;n++,f++)n in a&&u(d,f,a[n])}else{if(f>=p)throw TypeError(v);u(d,f++,a)}return d.length=f,d}})},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a707c5a8.png"},a434:function(t,e,n){"use strict";var r=n("23e7"),c=n("23cb"),a=n("a691"),o=n("50c4"),i=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),f=Math.max,b=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,l,d,v,g,O=i(this),j=o(O.length),m=c(t,j),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=j-m):(n=y-2,r=b(f(a(e),0),j-m)),j+n-r>h)throw TypeError(p);for(l=s(O,r),d=0;d<r;d++)v=m+d,v in O&&u(l,d,O[v]);if(l.length=r,n<r){for(d=m;d<j-r;d++)v=d+r,g=d+n,v in O?O[g]=O[v]:delete O[g];for(d=j;d>j-r+n;d--)delete O[d-1]}else if(n>r)for(d=j-r;d>m;d--)v=d+r-1,g=d+n-1,v in O?O[g]=O[v]:delete O[g];for(d=0;d<n;d++)O[d+m]=arguments[d+2];return O.length=j-r+n,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("d066"),o=n("c430"),i=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),d=n("5135"),f=n("e8b5"),b=n("861d"),h=n("825a"),p=n("7b0b"),v=n("fc6a"),g=n("c04e"),O=n("5c6c"),j=n("7c73"),m=n("df75"),y=n("241c"),w=n("057f"),x=n("7418"),S=n("06cf"),k=n("9bf2"),F=n("d1e7"),I=n("9112"),C=n("6eeb"),N=n("5692"),M=n("f772"),T=n("d012"),E=n("90e3"),P=n("b622"),A=n("e538"),$=n("746f"),_=n("d44e"),J=n("69f3"),D=n("b727").forEach,B=M("hidden"),L="Symbol",W="prototype",q=P("toPrimitive"),z=J.set,H=J.getterFor(L),Q=Object[W],R=c.Symbol,U=a("JSON","stringify"),G=S.f,K=k.f,V=w.f,X=F.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),nt=N("wks"),rt=c.QObject,ct=!rt||!rt[W]||!rt[W].findChild,at=i&&l((function(){return 7!=j(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(Q,e);r&&delete Q[e],K(t,e,n),r&&t!==Q&&K(Q,e,r)}:K,ot=function(t,e){var n=Y[t]=j(R[W]);return z(n,{type:L,tag:t,description:e}),i||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof R},st=function(t,e,n){t===Q&&st(Z,e,n),h(t);var r=g(e,!0);return h(n),d(Y,r)?(n.enumerable?(d(t,B)&&t[B][r]&&(t[B][r]=!1),n=j(n,{enumerable:O(0,!1)})):(d(t,B)||K(t,B,O(1,{})),t[B][r]=!0),at(t,r,n)):K(t,r,n)},ut=function(t,e){h(t);var n=v(e),r=m(n).concat(ht(n));return D(r,(function(e){i&&!dt.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?j(t):ut(j(t),e)},dt=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===Q&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,B)&&this[B][e])||n)},ft=function(t,e){var n=v(t),r=g(e,!0);if(n!==Q||!d(Y,r)||d(Z,r)){var c=G(n,r);return!c||!d(Y,r)||d(n,B)&&n[B][r]||(c.enumerable=!0),c}},bt=function(t){var e=V(v(t)),n=[];return D(e,(function(t){d(Y,t)||d(T,t)||n.push(t)})),n},ht=function(t){var e=t===Q,n=V(e?Z:v(t)),r=[];return D(n,(function(t){!d(Y,t)||e&&!d(Q,t)||r.push(Y[t])})),r};if(s||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===Q&&n.call(Z,t),d(this,B)&&d(this[B],e)&&(this[B][e]=!1),at(this,e,O(1,t))};return i&&ct&&at(Q,e,{configurable:!0,set:n}),ot(e,t)},C(R[W],"toString",(function(){return H(this).tag})),C(R,"withoutSetter",(function(t){return ot(E(t),t)})),F.f=dt,k.f=st,S.f=ft,y.f=w.f=bt,x.f=ht,A.f=function(t){return ot(P(t),t)},i&&(K(R[W],"description",{configurable:!0,get:function(){return H(this).description}}),o||C(Q,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:R}),D(m(nt),(function(t){$(t)})),r({target:L,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=R(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!i},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(p(t))}}),U){var pt=!s||l((function(){var t=R();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,c=[t],a=1;while(arguments.length>a)c.push(arguments[a++]);if(r=e,(b(e)||void 0!==t)&&!it(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),c[1]=e,U.apply(null,c)}})}R[W][q]||I(R[W],q,R[W].valueOf),_(R,L),T[B]=!0},ab13:function(t,e,n){var r=n("b622"),c=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[c]=!1,"/./"[t](e)}catch(r){}}return!1}},caad:function(t,e,n){"use strict";var r=n("23e7"),c=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d178:function(t,e,n){"use strict";var r=n("7a23"),c=n("9d64"),a=n.n(c),o={class:"navbar navbar-expand-lg navbar-dark bg-dark header-nav"},i={class:"container-fluid"},s=Object(r["h"])("img",{src:a.a,alt:"LITTLE WITCH NOBETA",width:"180",class:"d-inline-block align-text-top"},null,-1),u=Object(r["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},d={class:"navbar-nav"},f={class:"nav-item"},b=Object(r["g"])("首頁"),h=Object(r["h"])("span",{class:"text-uppercase"},"top",-1),p={class:"nav-item"},v=Object(r["g"])("商品列表"),g=Object(r["h"])("span",{class:"text-uppercase"},"lineup",-1),O={class:"nav-item"},j=Object(r["g"])("關於諾貝塔"),m=Object(r["h"])("span",{class:"text-uppercase"},"about",-1),y={class:"nav-item text-center"},w={class:"material-icons position-relative",style:{"font-size":"2.8rem"}},x=Object(r["g"])(" shopping_cart "),S={key:0,class:"\r\n                    position-absolute\r\n                    top-0\r\n                    start-100\r\n                    translate-middle\r\n                    badge\r\n                    rounded-pill\r\n                    bg-secondary\r\n                    font-monospace\r\n                  "},k=Object(r["h"])("span",{class:"visually-hidden"},"unread messages",-1);function F(t,e,n,c,a,F){var I=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["d"])("nav",o,[Object(r["h"])("div",i,[Object(r["h"])("h1",null,[Object(r["h"])(I,{class:"navbar-brand",to:"/"},{default:Object(r["M"])((function(){return[s]})),_:1})]),u,Object(r["h"])("div",l,[Object(r["h"])("ul",d,[Object(r["h"])("li",f,[Object(r["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/"},{default:Object(r["M"])((function(){return[b,h]})),_:1})]),Object(r["h"])("li",p,[Object(r["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/products"},{default:Object(r["M"])((function(){return[v,g]})),_:1})]),Object(r["h"])("li",O,[Object(r["h"])(I,{class:"nav-link text-decoration-none header-nav-link fs-5",to:"/about"},{default:Object(r["M"])((function(){return[j,m]})),_:1})]),Object(r["h"])("li",y,[Object(r["h"])(I,{class:"nav-link text-decoration-none",to:"/cart"},{default:Object(r["M"])((function(){return[Object(r["h"])("span",w,[x,a.cartItems?(Object(r["v"])(),Object(r["d"])("span",S,[Object(r["g"])(Object(r["F"])(a.cartItems)+" ",1),k])):Object(r["e"])("",!0)])]})),_:1})])])])])])}n("99af");var I=n("3d4f"),C={data:function(){return{cartItems:""}},methods:{getCartItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cartItems=e.data.data.carts.length)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getCartItem(),I["a"].on("update-cart",(function(){t.getCartItem()}))}};C.render=F;e["a"]=C},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),a=n("da84"),o=n("5135"),i=n("861d"),s=n("9bf2").f,u=n("e893"),l=a.Symbol;if(c&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var b=f.prototype=l.prototype;b.constructor=f;var h=b.toString,p="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var n=p?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var r=n("b622");e.f=r},e6dc:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a"),n("caad"),n("2532");var r=n("7a23"),c={class:"container content"},a=Object(r["h"])("h1",{class:"text-center"},"商品列表",-1),o={class:"mt-4 text-end"},i=Object(r["g"])(" 總共有 "),s={id:"productCount"},u=Object(r["g"])(" 項商品 "),l={class:"table align-middle mt-4"},d=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",{width:"10%"},"商品縮圖"),Object(r["h"])("th",{width:"10%"},"商品名稱"),Object(r["h"])("th",{width:"27%"},"商品敘述"),Object(r["h"])("th",{width:"17%"},"商品規格"),Object(r["h"])("th",{class:"text-end",width:"9%"},"價格"),Object(r["h"])("th",{class:"text-end",width:"23%"})])],-1),f={class:"text-end"},b={class:"h5"},h={class:"text-end"},p={class:"btn-group btn-group-sm"},v=Object(r["g"])("查看更多"),g={key:0,class:"material-icons animate-spin"},O=Object(r["g"])(" 加到購物車 ");function j(t,e,n,j,m,y){var w=Object(r["C"])("Navbar"),x=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("header",null,[Object(r["h"])(w)]),Object(r["h"])("div",c,[a,Object(r["h"])("p",o,[i,Object(r["h"])("span",s,Object(r["F"])(m.allproductsNum.length),1),u]),Object(r["h"])("table",l,[d,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["d"])(r["a"],null,Object(r["B"])(m.products,(function(e){return Object(r["v"])(),Object(r["d"])("tr",{class:"align-middle",key:e.id},[Object(r["h"])("td",null,[Object(r["h"])("img",{class:"product-img",src:e.imageUrl,alt:e.title},null,8,["src","alt"])]),Object(r["h"])("td",null,Object(r["F"])(e.title),1),Object(r["h"])("td",null,Object(r["F"])(e.description),1),Object(r["h"])("td",null,Object(r["F"])(e.content),1),Object(r["h"])("td",f,[Object(r["h"])("div",b,Object(r["F"])(t.$filters.currency(e.price))+" 元",1)]),Object(r["h"])("td",h,[Object(r["h"])("div",p,[Object(r["h"])(x,{class:"btn btn-outline-primary",to:"/product/".concat(e.id)},{default:Object(r["M"])((function(){return[v]})),_:2},1032,["to"]),Object(r["h"])("button",{onClick:function(t){return y.addCart(e.id)},type:"button",disabled:m.loadingStatus.loadingItem===e.id+1,class:"btn btn-outline-danger"},[m.loadingStatus.loadingItem===e.id+1?(Object(r["v"])(),Object(r["d"])("span",g," cached ")):Object(r["e"])("",!0),O],8,["onClick","disabled"]),Object(r["h"])("button",{onClick:function(t){return y.addMyFavorite(e.id)},type:"button",class:["btn btn-outline-danger",{active:m.myFavorite.includes(e.id)}]}," 加到我的最愛 ",10,["onClick"])])])])})),128))])])])],64)}n("a434"),n("99af"),n("07ac");var m=n("d178"),y=n("3d4f"),w={save:function(t){var e=JSON.stringify(t);localStorage.setItem("Favorite",e)},get:function(){return JSON.parse(localStorage.getItem("Favorite"))}},x={data:function(){return{loadingStatus:{loadingItem:""},products:[],product:{},cart:{},allproductsNum:"",myFavorite:w.get()||[]}},components:{Navbar:m["a"]},methods:{addMyFavorite:function(t){this.myFavorite.includes(t)?this.myFavorite.splice(this.myFavorite.indexOf(t),1):this.myFavorite.push(t),console.log(this.myFavorite),w.save(this.myFavorite)},showAlert:function(t){this.$swal(t.data.message)},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products/all");this.$http.get(e).then((function(e){if(e.data.success){var n=e.data.products;t.products=n,t.getAllproducts(),console.log(t.products)}})).catch((function(t){console.log(t)}))},getAllproducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products/all");this.$http.get(e).then((function(e){t.allproductsNum=Object.values(e.data.products)})).catch((function(t){console.log(t)}))},addCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus.loadingItem=t+1;var r={data:{product_id:t,qty:n}},c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/cart");this.$http.post(c,r).then((function(t){e.loadingStatus.loadingItem="",y["a"].emit("update-cart"),e.showAlert(t)})).catch((function(t){console.log(t)}))}},mounted:function(){console.clear(),this.getProducts()}};x.render=j;e["default"]=x}}]);
//# sourceMappingURL=chunk-87e491ac.4d456425.js.map