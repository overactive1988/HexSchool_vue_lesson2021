(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1561c14"],{"07ac":function(t,e,c){var o=c("23e7"),l=c("6f53").values;o({target:"Object",stat:!0},{values:function(t){return l(t)}})},"6f53":function(t,e,c){var o=c("83ab"),l=c("df75"),n=c("fc6a"),a=c("d1e7").f,r=function(t){return function(e){var c,r=n(e),i=l(r),d=i.length,s=0,u=[];while(d>s)c=i[s++],o&&!a.call(r,c)||u.push(t?[c,r[c]]:r[c]);return u}};t.exports={entries:r(!0),values:r(!1)}},"724a":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var o=c("7a23"),l={class:"container content"},n=Object(o["h"])("h1",{class:"text-center"},"商品列表",-1),a={class:"text-end mt-4"},r={class:"table mt-4"},i=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"6%"},"排序"),Object(o["h"])("th",{width:"10%"},"產品縮圖"),Object(o["h"])("th",{width:"10%"},"產品名稱"),Object(o["h"])("th",{width:"20%"},"產品敘述"),Object(o["h"])("th",{width:"12%"},"商品規格"),Object(o["h"])("th",{width:"10%"},"原價"),Object(o["h"])("th",{width:"10%"},"售價"),Object(o["h"])("th",{width:"10%"},"是否啟用"),Object(o["h"])("th",{width:"12%"},"刪除")])],-1),d={class:"align-middle"},s={key:0,class:"text-success"},u={key:1},b={class:"btn-group"},h=Object(o["g"])(" 總共有 "),p={id:"productCount"},m=Object(o["g"])(" 項產品 "),j={class:"d-flex justify-content-center mt-5"};function O(t,e,c,O,f,g){var v=Object(o["y"])("Pagination"),y=Object(o["y"])("AdminProductModal"),w=Object(o["y"])("DelProductModal");return Object(o["t"])(),Object(o["d"])("div",l,[n,Object(o["h"])("div",a,[Object(o["h"])("button",{onClick:e[1]||(e[1]=function(t){return g.openModal("new")}),class:"btn btn-primary"}," 建立新的產品 ")]),Object(o["h"])("table",r,[i,(Object(o["t"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(f.products,(function(e){return Object(o["t"])(),Object(o["d"])("tbody",{id:"productList",key:e},[Object(o["h"])("tr",d,[Object(o["h"])("td",null,Object(o["B"])(e.num),1),Object(o["h"])("td",null,[Object(o["h"])("img",{class:"product-img",src:e.imageUrl,alt:e.title},null,8,["src","alt"])]),Object(o["h"])("td",null,Object(o["B"])(e.title),1),Object(o["h"])("td",null,Object(o["B"])(e.description),1),Object(o["h"])("td",null,Object(o["B"])(e.content),1),Object(o["h"])("td",null,Object(o["B"])(t.$filters.currency(e.origin_price)),1),Object(o["h"])("td",null,Object(o["B"])(t.$filters.currency(e.price)),1),Object(o["h"])("td",null,[e.is_enabled?(Object(o["t"])(),Object(o["d"])("span",s,"啟用")):(Object(o["t"])(),Object(o["d"])("span",u,"未啟用"))]),Object(o["h"])("td",null,[Object(o["h"])("div",b,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return g.openModal("edit",e)}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return g.openModal("delete",e)}}," 刪除 ",8,["onClick"])])])])])})),128))]),Object(o["h"])("p",null,[h,Object(o["h"])("span",p,Object(o["B"])(f.allproductsNum.length),1),m]),Object(o["h"])("div",j,[Object(o["h"])(v,{page:f.pagination,onGetProduct:g.getData},null,8,["page","onGetProduct"])]),Object(o["h"])(y,{ref:"adminControlModal","where-product":f.tempProduct,onUpdateProduct:g.updateProduct},null,8,["where-product","onUpdateProduct"]),Object(o["h"])(w,{ref:"adminDelModal","temp-product":f.tempProduct,onDeleteProduct:g.deleteProduct},null,8,["temp-product","onDeleteProduct"])])}var f=c("5530"),g=(c("99af"),c("07ac"),c("1799")),v=(c("a434"),{class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),y={class:"modal-dialog modal-xl modal-dialog-centered"},w={class:"modal-content border-0"},P=Object(o["h"])("div",{class:"modal-header bg-primary text-white"},[Object(o["h"])("h5",{id:"productModalLabel",class:"modal-title"},[Object(o["h"])("span",null,"新增產品")]),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},U={class:"row"},k={class:"col-sm-4"},M={class:"mb-1"},C={class:"form-group"},$=Object(o["h"])("label",{class:"text-light bg-secondary mb-2 py-1 px-2",for:"mainImageUrl"},"請輸入主圖片網址",-1),D={class:"btn btn-outline-success btn-sm d-block w-100 mt-3"},I=Object(o["g"])(" 上傳圖片 "),_=Object(o["h"])("div",{class:"mt-4 mb-1"},"多圖新增",-1),J={key:0},F=Object(o["h"])("hr",null,null,-1),V={class:"form-group"},S={class:"\r\n                          btn btn-outline-success btn-sm\r\n                          d-block\r\n                          w-100\r\n                          my-3\r\n                        "},A=Object(o["g"])(" 上傳圖片 "),B={class:"mb2"},N={key:0,class:"mt-4"},L={key:1},E={class:"mt-4 mb-2"},G={class:"col-sm-8"},T={class:"form-group"},q=Object(o["h"])("label",{for:"title"},"標題",-1),z={class:"row mt-3"},H={class:"form-group col-md-6"},K=Object(o["h"])("label",{for:"category"},"分類",-1),Q={class:"form-group col-md-6"},R=Object(o["h"])("label",{for:"unit"},"單位(個、台、隻...)",-1),W={class:"row mt-3"},X={class:"form-group col-md-6"},Y=Object(o["h"])("label",{for:"origin_price"},"原價",-1),Z={class:"form-group col-md-6"},tt=Object(o["h"])("label",{for:"price"},"售價",-1),et=Object(o["h"])("hr",null,null,-1),ct={class:"form-group"},ot=Object(o["h"])("label",{for:"description"},"產品描述",-1),lt={class:"form-group mt-3"},nt=Object(o["h"])("label",{for:"content"},"商品規格",-1),at={class:"form-group mt-3"},rt={class:"form-check"},it=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),dt={class:"modal-footer"},st=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(t,e,c,l,n,a){return Object(o["t"])(),Object(o["d"])("div",v,[Object(o["h"])("div",y,[Object(o["h"])("div",w,[P,Object(o["h"])("div",x,[Object(o["h"])("div",U,[Object(o["h"])("div",k,[Object(o["h"])("div",M,[Object(o["h"])("div",C,[$,Object(o["J"])(Object(o["h"])("input",{id:"mainImageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.whereProduct.imageUrl=t})},null,512),[[o["F"],c.whereProduct.imageUrl,void 0,{trim:!0}]]),Object(o["h"])("img",{class:"img-fluid my-3 form-img",src:c.whereProduct.imageUrl,alt:c.whereProduct.title},null,8,["src","alt"])]),Object(o["h"])("div",null,[Object(o["h"])("label",D,[Object(o["h"])("input",{id:"upload_img",style:{display:"none"},type:"file",onChange:e[2]||(e[2]=function(){return a.uploadMainImgage&&a.uploadMainImgage.apply(a,arguments)})},null,32),I])])]),_,Array.isArray(c.whereProduct.imagesUrl)?(Object(o["t"])(),Object(o["d"])("div",J,[(Object(o["t"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(c.whereProduct.imagesUrl,(function(t,l){return Object(o["t"])(),Object(o["d"])("div",{class:"mb-4",key:"addImage"+l},[F,Object(o["h"])("div",V,[Object(o["h"])("label",{class:"text-light bg-secondary mb-2 py-1 px-2",for:"subImageUrl-"+l},"請輸入副圖片 "+Object(o["B"])(l+1)+" 的網址",9,["for"]),Object(o["J"])(Object(o["h"])("input",{id:"subImageUrl-"+l,type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(t){return c.whereProduct.imagesUrl[l]=t}},null,8,["id","onUpdate:modelValue"]),[[o["F"],c.whereProduct.imagesUrl[l]]]),Object(o["h"])("img",{class:"img-fluid my-3 form-img",src:t,alt:""},null,8,["src"]),Object(o["h"])("div",null,[Object(o["h"])("label",S,[Object(o["h"])("input",{id:"upload_img",style:{display:"none"},type:"file",onChange:e[3]||(e[3]=function(){return a.uploadSubImgage&&a.uploadSubImgage.apply(a,arguments)})},null,32),A])]),Object(o["h"])("div",B,[Object(o["h"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:function(t){return c.whereProduct.imagesUrl.splice(l,1)}}," 刪除圖片 ",8,["onClick"])])])])})),128)),!c.whereProduct.imagesUrl.length||c.whereProduct.imagesUrl[c.whereProduct.imagesUrl.length-1]?(Object(o["t"])(),Object(o["d"])("div",N,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=function(t){return c.whereProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["e"])("",!0)])):(Object(o["t"])(),Object(o["d"])("div",L,[Object(o["h"])("div",E,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=function(){return a.createImages&&a.createImages.apply(a,arguments)})}," 新增圖片 ")])]))]),Object(o["h"])("div",G,[Object(o["h"])("div",T,[q,Object(o["J"])(Object(o["h"])("input",{id:"title",type:"text",class:"form-control mt-1",placeholder:"請輸入標題","onUpdate:modelValue":e[6]||(e[6]=function(t){return c.whereProduct.title=t})},null,512),[[o["F"],c.whereProduct.title,void 0,{trim:!0}]])]),Object(o["h"])("div",z,[Object(o["h"])("div",H,[K,Object(o["J"])(Object(o["h"])("input",{id:"category",type:"text",class:"form-control mt-1",placeholder:"請輸入分類","onUpdate:modelValue":e[7]||(e[7]=function(t){return c.whereProduct.category=t})},null,512),[[o["F"],c.whereProduct.category]])]),Object(o["h"])("div",Q,[R,Object(o["J"])(Object(o["h"])("input",{id:"unit",type:"text",class:"form-control mt-1",placeholder:"請輸入單位","onUpdate:modelValue":e[8]||(e[8]=function(t){return c.whereProduct.unit=t})},null,512),[[o["F"],c.whereProduct.unit]])])]),Object(o["h"])("div",W,[Object(o["h"])("div",X,[Y,Object(o["J"])(Object(o["h"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control mt-1",placeholder:"請輸入原價","onUpdate:modelValue":e[9]||(e[9]=function(t){return c.whereProduct.origin_price=t})},null,512),[[o["F"],c.whereProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",Z,[tt,Object(o["J"])(Object(o["h"])("input",{id:"price",type:"number",min:"0",class:"form-control mt-1",placeholder:"請輸入售價","onUpdate:modelValue":e[10]||(e[10]=function(t){return c.whereProduct.price=t})},null,512),[[o["F"],c.whereProduct.price,void 0,{number:!0}]])])]),et,Object(o["h"])("div",ct,[ot,Object(o["J"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control mt-1",placeholder:"請輸入產品描述",rows:"6","onUpdate:modelValue":e[11]||(e[11]=function(t){return c.whereProduct.description=t})},"\r\n                ",512),[[o["F"],c.whereProduct.description,void 0,{trim:!0}]])]),Object(o["h"])("div",lt,[nt,Object(o["J"])(Object(o["h"])("textarea",{id:"content",type:"text",class:"form-control mt-1",placeholder:"請輸入商品規格",rows:"4","onUpdate:modelValue":e[12]||(e[12]=function(t){return c.whereProduct.content=t})},"\r\n                ",512),[[o["F"],c.whereProduct.content,void 0,{trim:!0}]])]),Object(o["h"])("div",at,[Object(o["h"])("div",rt,[Object(o["J"])(Object(o["h"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[13]||(e[13]=function(t){return c.whereProduct.is_enabled=t})},null,512),[[o["E"],c.whereProduct.is_enabled]]),it])])])])]),Object(o["h"])("div",dt,[st,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=function(e){return t.$emit("update-product",c.whereProduct)})}," 確認 ")])])])],512)}var bt=c("8edb"),ht={props:{whereProduct:{type:Object,default:function(){return{}}}},methods:{createImages:function(){this.whereProduct.imagesUrl=[""]},uploadMainImgage:function(t){var e=this;console.dir(t);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/upload"),o=t.target.files[0],l=new FormData;l.append("file-to-upload",o),this.$http.post(c,l).then((function(t){console.log(t),e.whereProduct.imageUrl=t.data.imageUrl})).catch((function(t){console.log(t)}))},uploadSubImgage:function(t){var e=this;console.dir(t);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/upload"),o=t.target.files[0],l=new FormData;l.append("file-to-upload",o),this.$http.post(c,l).then((function(t){console.log(t),e.whereProduct.imagesUrl[e.whereProduct.imagesUrl.length-1]=t.data.imageUrl})).catch((function(t){console.log(t)}))}},data:function(){return{modal:""}},mixins:[bt["a"]]};ht.render=ut;var pt=ht,mt={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},jt={class:"modal-dialog modal-dialog-centered"},Ot={class:"modal-content border-0"},ft=Object(o["h"])("div",{class:"modal-header bg-danger text-white"},[Object(o["h"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(o["h"])("span",null,"刪除產品")]),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},vt=Object(o["g"])(" 是否刪除 "),yt={class:"text-danger"},wt=Object(o["g"])(" 商品(刪除後將無法恢復)。 "),Pt={class:"modal-footer"},xt=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ut(t,e,c,l,n,a){return Object(o["t"])(),Object(o["d"])("div",mt,[Object(o["h"])("div",jt,[Object(o["h"])("div",Ot,[ft,Object(o["h"])("div",gt,[vt,Object(o["h"])("strong",yt,Object(o["B"])(c.tempProduct.title),1),wt]),Object(o["h"])("div",Pt,[xt,Object(o["h"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("delete-product",c.tempProduct)}),type:"button",class:"btn btn-danger"}," 確認刪除 ")])])])],512)}var kt={props:{tempProduct:{type:Object,default:function(){return{}}}},data:function(){return{modal:""}},mixins:[bt["a"]]};kt.render=Ut;var Mt=kt,Ct={data:function(){return{isNew:!0,products:[],allproductsNum:"",tempProduct:{imagesUrl:[]},pagination:{}}},components:{Pagination:g["a"],AdminProductModal:pt,DelProductModal:Mt},mounted:function(){this.getData()},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pagination.current_page||1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products?page=").concat(e);this.$http.get(c).then((function(e){if(e.data.success){var c=e.data,o=c.products,l=c.pagination;t.products=o,t.pagination=l,t.getAllproducts()}})).catch((function(t){console.log(t)}))},getAllproducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/products/all");this.$http.get(e).then((function(e){t.allproductsNum=Object.values(e.data.products)})).catch((function(t){console.log(t)}))},deleteProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(e){t.$refs.adminDelModal.closeAdminModal(),alert("已刪除".concat(t.tempProduct.title,"商品")),console.log(e.data),t.getData()})).catch((function(t){console.log(t)}))},openModal:function(t,e){switch(t){case"new":this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.adminControlModal.openModal();break;case"edit":this.getData(),this.tempProduct=Object(f["a"])({},e),this.isNew=!1,this.$refs.adminControlModal.openModal();break;case"delete":this.tempProduct=Object(f["a"])({},e),this.$refs.adminDelModal.openModal();break;default:break}},updateProduct:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/admin/product/").concat(t.id),o="put"),this.$http[o](c,{data:t}).then((function(t){t.data.success?(e.$refs.adminControlModal.closeAdminModal(),e.getData()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},created:function(){console.clear()}};Ct.render=O;e["default"]=Ct},a434:function(t,e,c){"use strict";var o=c("23e7"),l=c("23cb"),n=c("a691"),a=c("50c4"),r=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,h=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,o,s,u,j,O,f=r(this),g=a(f.length),v=l(t,g),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=g-v):(c=y-2,o=h(b(n(e),0),g-v)),g+c-o>p)throw TypeError(m);for(s=i(f,o),u=0;u<o;u++)j=v+u,j in f&&d(s,u,f[j]);if(s.length=o,c<o){for(u=v;u<g-o;u++)j=u+o,O=u+c,j in f?f[O]=f[j]:delete f[O];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)j=u+o-1,O=u+c-1,j in f?f[O]=f[j]:delete f[O];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,s}})},e01a:function(t,e,c){"use strict";var o=c("23e7"),l=c("83ab"),n=c("da84"),a=c("5135"),r=c("861d"),i=c("9bf2").f,d=c("e893"),s=n.Symbol;if(l&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new s(t):void 0===t?s():s(t);return""===t&&(u[e]=!0),e};d(b,s);var h=b.prototype=s.prototype;h.constructor=b;var p=h.toString,m="Symbol(test)"==String(s("test")),j=/^Symbol\((.*)\)[^)]+$/;i(h,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=p.call(t);if(a(u,t))return"";var c=m?e.slice(7,-1):e.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-d1561c14.1c639f03.js.map