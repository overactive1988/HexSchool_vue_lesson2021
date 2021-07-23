(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5560200"],{"07ac":function(e,t,c){var o=c("23e7"),a=c("6f53").values;o({target:"Object",stat:!0},{values:function(e){return a(e)}})},"6f53":function(e,t,c){var o=c("83ab"),a=c("df75"),r=c("fc6a"),n=c("d1e7").f,l=function(e){return function(t){var c,l=r(t),d=a(l),i=d.length,s=0,u=[];while(i>s)c=d[s++],o&&!n.call(l,c)||u.push(e?[c,l[c]]:l[c]);return u}};e.exports={entries:l(!0),values:l(!1)}},"724a":function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a");var o=c("7a23"),a={class:"container content"},r=Object(o["createVNode"])("h2",{class:"text-center"},"商品列表",-1),n={class:"text-end mt-4"},l={class:"table mt-4"},d=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"6%"},"排序"),Object(o["createVNode"])("th",{width:"10%"},"商品縮圖"),Object(o["createVNode"])("th",{width:"10%"},"商品名稱"),Object(o["createVNode"])("th",{width:"20%"},"商品敘述"),Object(o["createVNode"])("th",{width:"12%"},"商品規格"),Object(o["createVNode"])("th",{width:"10%"},"原價"),Object(o["createVNode"])("th",{width:"10%"},"售價"),Object(o["createVNode"])("th",{width:"10%"},"是否啟用"),Object(o["createVNode"])("th",{width:"12%"},"刪除")])],-1),i={class:"align-middle"},s={key:0,class:"text-success"},u={key:1},b={class:"btn-group"},p=Object(o["createTextVNode"])(" 總共有 "),m={id:"productCount"},j=Object(o["createTextVNode"])(" 項商品 "),O={class:"d-flex justify-content-center mt-5 mb-4"};function f(e,t,c,f,h,g){var V=Object(o["resolveComponent"])("Pagination"),N=Object(o["resolveComponent"])("AdminProductModal"),v=Object(o["resolveComponent"])("DelProductModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[r,Object(o["createVNode"])("div",n,[Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(e){return g.openModal("new")}),class:"btn btn-primary"}," 建立新的商品 ")]),Object(o["createVNode"])("table",l,[d,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(h.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tbody",{id:"productList",key:t},[Object(o["createVNode"])("tr",i,[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.num),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("img",{class:"product-img",src:t.imageUrl,alt:t.title},null,8,["src","alt"])]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.description),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.content),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",u,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return g.openModal("edit",t)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return g.openModal("delete",t)}}," 刪除 ",8,["onClick"])])])])])})),128))]),Object(o["createVNode"])("p",null,[p,Object(o["createVNode"])("span",m,Object(o["toDisplayString"])(h.allproductsNum.length),1),j]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])(V,{page:h.pagination,onGetPage:g.getData},null,8,["page","onGetPage"])]),Object(o["createVNode"])(N,{ref:"adminModal","props-product":h.tempProduct,onUpdateProduct:g.updateProduct},null,8,["props-product","onUpdateProduct"]),Object(o["createVNode"])(v,{ref:"adminDelModal","props-product":h.tempProduct,onDeleteProduct:g.deleteProduct},null,8,["props-product","onDeleteProduct"])])}var h=c("5530"),g=(c("99af"),c("07ac"),c("1799")),V=(c("a434"),{class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),N={class:"modal-dialog modal-xl modal-dialog-centered"},v={class:"modal-content border-0"},w={class:"modal-header bg-primary text-white"},y={id:"productModalLabel",class:"modal-title"},P={key:0},k={key:1},x=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),M={class:"modal-body"},U={class:"row"},D={class:"col-sm-4"},B={class:"mb-1"},C={class:"form-group"},S=Object(o["createVNode"])("label",{class:"text-light bg-secondary mb-2 py-1 px-2",for:"mainImageUrl"},"請輸入主圖片網址",-1),$={class:"btn btn-outline-success btn-sm d-block w-100 mt-3"},T=Object(o["createTextVNode"])(" 上傳圖片 "),I=Object(o["createVNode"])("div",{class:"mt-4 mb-1"},"多圖新增",-1),_={key:0},A=Object(o["createVNode"])("hr",null,null,-1),L={class:"form-group"},F={class:"\r\n                          btn btn-outline-success btn-sm\r\n                          d-block\r\n                          w-100\r\n                          my-3\r\n                        "},G=Object(o["createTextVNode"])(" 上傳圖片 "),J={class:"mb2"},E={key:0,class:"mt-4"},q={key:1},z={class:"mt-4 mb-2"},H={class:"col-sm-8"},K={class:"form-group"},Q=Object(o["createVNode"])("label",{for:"title"},"標題",-1),R={class:"row mt-3"},W={class:"form-group col-md-6"},X=Object(o["createVNode"])("label",{for:"category"},"分類",-1),Y={class:"form-group col-md-6"},Z=Object(o["createVNode"])("label",{for:"unit"},"單位(個、台、隻...)",-1),ee={class:"row mt-3"},te={class:"form-group col-md-6"},ce=Object(o["createVNode"])("label",{for:"origin_price"},"原價",-1),oe={class:"form-group col-md-6"},ae=Object(o["createVNode"])("label",{for:"price"},"售價",-1),re=Object(o["createVNode"])("hr",null,null,-1),ne={class:"form-group"},le=Object(o["createVNode"])("label",{for:"description"},"商品描述",-1),de={class:"form-group mt-3"},ie=Object(o["createVNode"])("label",{for:"content"},"商品規格",-1),se=Object(o["createVNode"])("hr",null,null,-1),ue={class:"form-group"},be=Object(o["createVNode"])("label",{for:"stuck"},"庫存(選填)",-1),pe={class:"form-group mt-3"},me={class:"form-check"},je=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Oe={class:"modal-footer"},fe=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function he(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",V,[Object(o["createVNode"])("div",N,[Object(o["createVNode"])("div",v,[Object(o["createVNode"])("div",w,[Object(o["createVNode"])("h3",y,[c.propsProduct.title?(Object(o["openBlock"])(),Object(o["createBlock"])("span",P,"編輯商品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",k,"新增商品"))]),x]),Object(o["createVNode"])("div",M,[Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("div",C,[S,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"mainImageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.newProduct.imageUrl=e})},null,512),[[o["vModelText"],r.newProduct.imageUrl,void 0,{trim:!0}]]),Object(o["createVNode"])("img",{class:"img-fluid my-3 form-img",src:r.newProduct.imageUrl,alt:r.newProduct.title},null,8,["src","alt"])]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("label",$,[Object(o["createVNode"])("input",{id:"upload_img",style:{display:"none"},type:"file",onChange:t[2]||(t[2]=function(){return n.uploadMainImgage&&n.uploadMainImgage.apply(n,arguments)})},null,32),T])])]),I,Array.isArray(r.newProduct.imagesUrl)?(Object(o["openBlock"])(),Object(o["createBlock"])("div",_,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.newProduct.imagesUrl,(function(e,c){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"mb-4",key:"addImage"+c},[A,Object(o["createVNode"])("div",L,[Object(o["createVNode"])("label",{class:"text-light bg-secondary mb-2 py-1 px-2",for:"subImageUrl-"+c},"請輸入副圖片 "+Object(o["toDisplayString"])(c+1)+" 的網址",9,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"subImageUrl-"+c,type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(e){return r.newProduct.imagesUrl[c]=e}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],r.newProduct.imagesUrl[c]]]),Object(o["createVNode"])("img",{class:"img-fluid my-3 form-img",src:e,alt:""},null,8,["src"]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("label",F,[Object(o["createVNode"])("input",{id:"upload_img",style:{display:"none"},type:"file",onChange:t[3]||(t[3]=function(){return n.uploadSubImgage&&n.uploadSubImgage.apply(n,arguments)})},null,32),G])]),Object(o["createVNode"])("div",J,[Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:function(e){return r.newProduct.imagesUrl.splice(c,1)}}," 刪除圖片 ",8,["onClick"])])])])})),128)),!r.newProduct.imagesUrl.length||r.newProduct.imagesUrl[r.newProduct.imagesUrl.length-1]?(Object(o["openBlock"])(),Object(o["createBlock"])("div",E,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[4]||(t[4]=function(e){return r.newProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",q,[Object(o["createVNode"])("div",z,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[5]||(t[5]=function(){return n.createImages&&n.createImages.apply(n,arguments)})}," 新增圖片 ")])]))]),Object(o["createVNode"])("div",H,[Object(o["createVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"title",type:"text",class:"form-control mt-1",placeholder:"請輸入標題","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.newProduct.title=e})},null,512),[[o["vModelText"],r.newProduct.title,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",R,[Object(o["createVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"category",type:"text",class:"form-control mt-1",placeholder:"請輸入分類","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.newProduct.category=e})},null,512),[[o["vModelText"],r.newProduct.category]])]),Object(o["createVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"unit",type:"text",class:"form-control mt-1",placeholder:"請輸入單位","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.newProduct.unit=e})},null,512),[[o["vModelText"],r.newProduct.unit]])])]),Object(o["createVNode"])("div",ee,[Object(o["createVNode"])("div",te,[ce,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control mt-1",placeholder:"請輸入原價","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.newProduct.origin_price=e})},null,512),[[o["vModelText"],r.newProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",oe,[ae,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"price",type:"number",min:"0",class:"form-control mt-1",placeholder:"請輸入售價","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.newProduct.price=e})},null,512),[[o["vModelText"],r.newProduct.price,void 0,{number:!0}]])])]),re,Object(o["createVNode"])("div",ne,[le,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"description",type:"text",class:"form-control mt-1",placeholder:"請輸入商品描述",rows:"6","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.newProduct.description=e})},"\r\n                ",512),[[o["vModelText"],r.newProduct.description,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",de,[ie,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"content",type:"text",class:"form-control mt-1",placeholder:"請輸入商品規格",rows:"4","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.newProduct.content=e})},"\r\n                ",512),[[o["vModelText"],r.newProduct.content,void 0,{trim:!0}]])]),se,Object(o["createVNode"])("div",ue,[be,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"stuck",type:"number",min:"0",class:"form-control mt-1",placeholder:"請輸入庫存量","onUpdate:modelValue":t[13]||(t[13]=function(e){return r.newProduct.stuck=e})},null,512),[[o["vModelText"],r.newProduct.stuck,void 0,{number:!0}]])]),Object(o["createVNode"])("div",pe,[Object(o["createVNode"])("div",me,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[14]||(t[14]=function(e){return r.newProduct.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.newProduct.is_enabled]]),je])])])])]),Object(o["createVNode"])("div",Oe,[fe,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[15]||(t[15]=function(t){return e.$emit("update-product",c.propsProduct)})}," 確認 ")])])])],512)}var ge=c("8edb"),Ve={props:{propsProduct:{type:Object,default:function(){return{}}}},methods:{createImages:function(){this.newProduct.imagesUrl=[""]},uploadMainImgage:function(e){var t=this;console.dir(e);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/upload"),o=e.target.files[0],a=new FormData;a.append("file-to-upload",o),this.$http.post(c,a).then((function(e){t.newProduct.imageUrl=e.data.imageUrl})).catch((function(e){console.log(e)}))},uploadSubImgage:function(e){var t=this;console.dir(e);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/upload"),o=e.target.files[0],a=new FormData;a.append("file-to-upload",o),this.$http.post(c,a).then((function(e){t.newProduct.imagesUrl[t.newProduct.imagesUrl.length-1]=e.data.imageUrl})).catch((function(e){console.log(e)}))}},data:function(){return{modal:"",newProduct:[]}},watch:{propsProduct:function(){this.newProduct=this.propsProduct}},mixins:[ge["a"]]};Ve.render=he;var Ne=Ve,ve={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},we={class:"modal-dialog modal-dialog-centered"},ye={class:"modal-content border-0"},Pe=Object(o["createVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(o["createVNode"])("h3",{id:"delProductModalLabel",class:"modal-title"},[Object(o["createVNode"])("span",null,"刪除商品")]),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ke={class:"modal-body"},xe=Object(o["createTextVNode"])(" 是否刪除 "),Me={class:"text-danger"},Ue=Object(o["createTextVNode"])(" 商品(刪除後將無法恢復)。 "),De={class:"modal-footer"},Be=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ce(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",ve,[Object(o["createVNode"])("div",we,[Object(o["createVNode"])("div",ye,[Pe,Object(o["createVNode"])("div",ke,[xe,Object(o["createVNode"])("strong",Me,Object(o["toDisplayString"])(c.propsProduct.title),1),Ue]),Object(o["createVNode"])("div",De,[Be,Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-product",c.propsProduct)}),type:"button",class:"btn btn-danger"}," 確認刪除 ")])])])],512)}var Se={props:{propsProduct:{type:Object,default:function(){return{}}}},data:function(){return{modal:""}},mixins:[ge["a"]]};Se.render=Ce;var $e=Se,Te={data:function(){return{isNew:!0,products:[],allproductsNum:"",tempProduct:{imagesUrl:[]},pagination:{}}},components:{Pagination:g["a"],AdminProductModal:Ne,DelProductModal:$e},mounted:function(){console.clear(),this.getData()},methods:{showAlert:function(e){this.$swal(e.data.message)},getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pagination.current_page||1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/products?page=").concat(t);this.$http.get(c).then((function(t){if(t.data.success){var c=t.data,o=c.products,a=c.pagination;e.products=o,e.pagination=a,e.getAllproducts()}})).catch((function(e){console.log(e)}))},getAllproducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products/all");this.$http.get(t).then((function(t){e.allproductsNum=Object.values(t.data.products)})).catch((function(e){console.log(e)}))},deleteProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/").concat(this.tempProduct.id);this.$http.delete(t).then((function(t){e.$refs.adminDelModal.closeModal(),e.showAlert(t),e.getData()})).catch((function(e){console.log(e)}))},openModal:function(e,t){switch(e){case"new":this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.adminModal.openModal();break;case"edit":this.getData(),this.tempProduct=Object(h["a"])({},t),this.isNew=!1,this.$refs.adminModal.openModal();break;case"delete":this.tempProduct=Object(h["a"])({},t),this.$refs.adminDelModal.openModal();break;default:break}},updateProduct:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/").concat(e.id),o="put"),this.$http[o](c,{data:e}).then((function(e){e.data.success?(t.$refs.adminModal.closeModal(),t.getData()):t.showAlert(e)})).catch((function(e){console.log(e)}))}}};Te.render=f;t["default"]=Te},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),n=c("50c4"),l=c("7b0b"),d=c("65f0"),i=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,p=Math.min,m=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,O,f,h=l(this),g=n(h.length),V=a(e,g),N=arguments.length;if(0===N?c=o=0:1===N?(c=0,o=g-V):(c=N-2,o=p(b(r(t),0),g-V)),g+c-o>m)throw TypeError(j);for(s=d(h,o),u=0;u<o;u++)O=V+u,O in h&&i(s,u,h[O]);if(s.length=o,c<o){for(u=V;u<g-o;u++)O=u+o,f=u+c,O in h?h[f]=h[O]:delete h[f];for(u=g;u>g-o+c;u--)delete h[u-1]}else if(c>o)for(u=g-o;u>V;u--)O=u+o-1,f=u+c-1,O in h?h[f]=h[O]:delete h[f];for(u=0;u<c;u++)h[u+V]=arguments[u+2];return h.length=g-o+c,s}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),n=c("5135"),l=c("861d"),d=c("9bf2").f,i=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};i(b,s);var p=b.prototype=s.prototype;p.constructor=b;var m=p.toString,j="Symbol(test)"==String(s("test")),O=/^Symbol\((.*)\)[^)]+$/;d(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=j?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-f5560200.fc288638.js.map