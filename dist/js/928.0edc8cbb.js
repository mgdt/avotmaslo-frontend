"use strict";(self["webpackChunkavtomaslo"]=self["webpackChunkavtomaslo"]||[]).push([[928],{7764:function(t,e,n){n.d(e,{N:function(){return u}});var r=n(50124),a=n(48534),c=(n(92222),n(38862),n(57327),n(41539),n(46943)),o=n(50086),i=n(13854),l=n(44870),u=(0,i.Q_)("blog",(function(){var t=(0,l.iH)([]);function e(){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o.Z.API_URL,"/blog"));case 2:n=e.sent,t.value=n.data;case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return s=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o.Z.API_URL,"/blog/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function g(t){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o.Z.API_URL,"/blog/slug/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function _(t){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token")?localStorage.getItem("token"):"",a={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},t.next=5,c.Z.post("".concat(o.Z.API_URL,"/blog"),JSON.stringify(e),{headers:a});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),f.apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return d=(0,a.Z)((0,r.Z)().mark((function e(n){var a,i,l;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token")?localStorage.getItem("token"):"",i={"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},e.next=5,c.Z["delete"]("".concat(o.Z.API_URL,"/blog/").concat(n),{headers:i});case 5:e.sent,l=t.value.filter((function(t){return t._id!=n})),t.value=l,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),alert("Ошибка");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),d.apply(this,arguments)}function h(t,e){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=localStorage.getItem("token")?localStorage.getItem("token"):"",i={"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},t.next=5,c.Z.put("".concat(o.Z.API_URL,"/blog/").concat(e),JSON.stringify(n),{headers:i});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),b.apply(this,arguments)}function w(t){return t.imageUrl?o.Z.API_URL+t.imageUrl:n(1802)}return{articles:t,fetchArticles:e,fetchArticle:u,fetchArticleBySlug:g,createArticle:_,deleteArticle:v,updateArticle:h,getImageUrl:w}}))},73294:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var r=n(73396),a=n(87139),c=n(49242),o=n.p+"img/bg-1.ad04f39c.png",i=n(57492),l=n(58737),u=function(t){return(0,r.dD)("data-v-52ca08f4"),t=t(),(0,r.Cn)(),t},s={class:"page-blog"},g=u((function(){return(0,r._)("img",{src:o,alt:"",class:"blog__bg-top"},null,-1)})),p=u((function(){return(0,r._)("img",{src:i,alt:"",class:"blog__bg-btm"},null,-1)})),_={class:"breadcrumbs"},f={class:"container"},v=u((function(){return(0,r._)("img",{src:l,alt:"",class:"breadcrumbs__arrow"},null,-1)})),d=u((function(){return(0,r._)("span",{class:"breadcrumbs__current"},"Блог",-1)})),h={class:"blog"},b={class:"container"},w=u((function(){return(0,r._)("h1",{class:"section__title blog__title"},[(0,r._)("span",null,"Блог компании")],-1)})),m={class:"blog__items"},Z=["src"],k={class:"blog__item-date"},x={class:"blog__item-title"},y=u((function(){return(0,r._)("div",{class:"blog__item-link"},"Читать статью",-1)})),A={class:"blog__nav"},P={class:"pagination"},C=u((function(){return(0,r._)("div",{class:"pagination__arrow"},[(0,r._)("svg",{width:"9",height:"13",viewBox:"0 0 9 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("path",{d:"M8 12L2 6.5L8 1",stroke:"black","stroke-width":"2"})])],-1)})),I=u((function(){return(0,r._)("div",{class:"pagination__button-text"},"Назад",-1)})),L=[C,I],S={class:"pagination__pages"},U=["onClick"],D=u((function(){return(0,r._)("div",{class:"pagination__button-text"},"Вперёд",-1)})),R=u((function(){return(0,r._)("div",{class:"pagination__arrow"},[(0,r._)("svg",{width:"9",height:"13",viewBox:"0 0 9 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("path",{d:"M1 12L7 6.5L1 1",stroke:"black","stroke-width":"2"})])],-1)})),H=[D,R];function B(t,e,n,o,i,l){var u=(0,r.up)("Header"),C=(0,r.up)("RouterLink"),I=(0,r.up)("Callback"),D=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",s,[g,p,(0,r.Wm)(u),(0,r._)("section",_,[(0,r._)("div",f,[(0,r.Wm)(C,{to:"/",class:"breadcrumbs__link"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Главная")]})),_:1}),v,d])]),(0,r._)("section",h,[(0,r._)("div",b,[w,(0,r._)("div",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.slicedArticles,(function(t){return(0,r.wg)(),(0,r.j4)(C,{to:"/article/".concat(t.slug),class:"blog__item",key:t._id},{default:(0,r.w5)((function(){return[(0,r._)("img",{src:o.blogStore.getImageUrl(t),alt:"",class:"blog__item-img"},null,8,Z),(0,r._)("div",k,(0,a.zw)(o.formatDate(t.createdAt)),1),(0,r._)("h3",x,(0,a.zw)(t.title),1),y]})),_:2},1032,["to"])})),128))]),(0,r.wy)((0,r._)("div",A,[(0,r._)("div",P,[(0,r._)("div",{class:"pagination__prev pagination__button",onClick:e[0]||(e[0]=function(t){return o.currentPage>1?o.currentPage--:""})},L),(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.pagesCount,(function(t,e){return(0,r.wg)(),(0,r.iD)("div",{class:(0,a.C_)(["pagination__page",{"pagination__page--active":t==o.currentPage}]),onClick:function(e){return o.currentPage=t},key:e},null,10,U)})),128))]),(0,r._)("div",{class:"pagination__next pagination__button",onClick:e[1]||(e[1]=function(t){return o.currentPage<o.pagesCount?o.currentPage++:""})},H)]),(0,r._)("button",{onClick:e[2]||(e[2]=function(t){return o.limit+=o.perPage}),class:"blog__button btn-primary"}," Показать больше ")],512),[[c.F8,o.blogStore.articles.length>o.limit]])])]),(0,r.Wm)(I),(0,r.Wm)(D)])}var F=n(50124),M=n(48534),z=(n(92222),n(47042),n(70586)),Y=n(65841),j=n(50953),N=n(7764),T=n(44870),W={components:{Header:z.Z,Callback:Y.Z,Footer:j.Z},setup:function(){var t=(0,N.N)();function e(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()>9?e.getMonth()+1:"0".concat(e.getMonth()+1),a=e.getDate()>9?e.getDate()+1:"0".concat(e.getDate()+1);return"".concat(a,".").concat(r,".").concat(n)}var n=(0,T.iH)(1),a=6,c=(0,T.iH)(6),o=(0,r.Fl)((function(){var e=(n.value-1)*c.value,r=n.value*c.value;return t.articles.slice(e,r)})),i=(0,r.Fl)((function(){return Math.ceil(t.articles.length/c.value)}));return(0,r.YP)((function(){return t.articles}),(0,M.Z)((0,F.Z)().mark((function t(){return(0,F.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.value=1;case 1:case"end":return t.stop()}}),t)}))),{deep:!0}),(0,r.YP)((function(){return n}),(function(){window.scrollTo(0,0)}),{deep:!0}),(0,r.bv)((0,M.Z)((0,F.Z)().mark((function e(){return(0,F.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchArticles();case 2:case"end":return e.stop()}}),e)})))),{blogStore:t,currentPage:n,limit:c,slicedArticles:o,pagesCount:i,perPage:a,formatDate:e}}},J=n(40089);const K=(0,J.Z)(W,[["render",B],["__scopeId","data-v-52ca08f4"]]);var O=K},58737:function(t,e,n){t.exports=n.p+"img/breadcrumbs-arrow.81f459cf.svg"},57492:function(t,e,n){t.exports=n.p+"img/bg-2.2bebd254.png"}}]);
//# sourceMappingURL=928.0edc8cbb.js.map