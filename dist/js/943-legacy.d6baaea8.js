"use strict";(self["webpackChunkavtomaslo"]=self["webpackChunkavtomaslo"]||[]).push([[943],{41069:function(t,e,n){n.d(e,{G:function(){return i}});var r=n(50124),a=n(48534),c=(n(47941),n(41539),n(78783),n(33948),n(41637),n(92222),n(39714),n(57327),n(38862),n(44870)),u=n(50086),o=n(46943),s=n(13854),i=(0,s.Q_)("products",(function(){var t=(0,c.iH)([]),e=(0,c.iH)("_id"),s=(0,c.iH)("-1"),i=(0,c.iH)({}),p=(0,c.iH)("");function l(){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products/minMaxValues"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return d=(0,a.Z)((0,r.Z)().mark((function n(){var a,c;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(p.value&&(i.value.category=p.value),!(Object.keys(i.value).length>0)){n.next=8;break}return c=new URLSearchParams(i.value),n.next=5,o.Z.get("".concat(u.Z.API_URL,"/products?sort=").concat(e.value,"&sortDir=").concat(s.value,"&").concat(c.toString()));case 5:a=n.sent,n.next=11;break;case 8:return n.next=10,o.Z.get("".concat(u.Z.API_URL,"/products?sort=").concat(e.value,"&sortDir=").concat(s.value));case 10:a=n.sent;case 11:t.value=a.data;case 12:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function v(t){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products?").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return x=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products?isBest=true"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function m(){return k.apply(this,arguments)}function k(){return k=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products/filterFields"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function I(){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u.Z.API_URL,"/products/deliveryText"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function P(t){return U.apply(this,arguments)}function U(){return U=(0,a.Z)((0,r.Z)().mark((function e(n){var a,c,s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token")?localStorage.getItem("token"):"",c={"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},e.next=5,o.Z["delete"]("".concat(u.Z.API_URL,"/products/").concat(n),{headers:c});case 5:e.sent,s=t.value.filter((function(t){return t._id!=n})),t.value=s,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),alert("Ошибка");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),U.apply(this,arguments)}function _(t){return A.apply(this,arguments)}function A(){return A=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token")?localStorage.getItem("token"):"",a={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},t.next=5,o.Z.post("".concat(u.Z.API_URL,"/products"),JSON.stringify(e),{headers:a});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),A.apply(this,arguments)}function L(t,e){return R.apply(this,arguments)}function R(){return R=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,c;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=localStorage.getItem("token")?localStorage.getItem("token"):"",c={"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},t.next=5,o.Z.put("".concat(u.Z.API_URL,"/products/").concat(e),JSON.stringify(n),{headers:c});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),R.apply(this,arguments)}function S(t){return T.apply(this,arguments)}function T(){return T=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token")?localStorage.getItem("token"):"",a={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},t.next=5,o.Z.put("".concat(u.Z.API_URL,"/products/deliveryText"),JSON.stringify({text:e}),{headers:a});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),T.apply(this,arguments)}function B(t){return t.imageUrl?u.Z.API_URL+t.imageUrl:n(1802)}return{products:t,filterCategory:p,sort:e,sortDir:s,filtersBody:i,fetchProducts:h,getImageUrl:B,deleteProduct:P,createProduct:_,fetchProduct:y,updateProduct:L,updateDeliveryText:S,fetchMinMaxValues:l,fetchFilterFields:m,fetchDeliveryText:I,fetchProductsByIds:v,fetchBestProducts:w}}))},45943:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(73396),a=function(t){return(0,r.dD)("data-v-36d24171"),t=t(),(0,r.Cn)(),t},c={class:"container"},u=a((function(){return(0,r._)("h3",{style:{"margin-bottom":"20px"}}," Редактирование текста Доставка и оплата в товарах ",-1)}));function o(t,e,n,a,o,s){var i=(0,r.up)("QuillEditor");return(0,r.wg)(),(0,r.iD)("div",c,[u,(0,r.Wm)(i,{content:a.text,"onUpdate:content":e[0]||(e[0]=function(t){return a.text=t}),contentType:"html",style:{"margin-bottom":"20px"}},null,8,["content"]),(0,r._)("button",{onClick:e[1]||(e[1]=function(){return a.handleUpdate&&a.handleUpdate.apply(a,arguments)}),class:"btn btn-secondary",type:"submit"}," Сохранить ")])}var s=n(50124),i=n(48534),p=n(96149),l=n(41069),f=n(44870),h={components:{QuillEditor:p.Bn},setup:function(){var t=(0,f.iH)(""),e=(0,l.G)(),n=e.fetchDeliveryText,a=e.updateDeliveryText;function c(){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t.value);case 2:alert("Успешно");case 3:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return(0,r.bv)((0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t.value=e.sent;case 3:case"end":return e.stop()}}),e)})))),{text:t,handleUpdate:c}}},d=n(40089);const v=(0,d.Z)(h,[["render",o],["__scopeId","data-v-36d24171"]]);var Z=v}}]);
//# sourceMappingURL=943-legacy.d6baaea8.js.map