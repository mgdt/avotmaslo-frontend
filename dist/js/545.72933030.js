"use strict";(self["webpackChunkavtomaslo"]=self["webpackChunkavtomaslo"]||[]).push([[545],{65182:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(44870);function r(){var e=(0,a.iH)({imageUrl:"",title:"",content:"",slug:""});return{article:e}}},7764:function(e,t,n){n.d(t,{N:function(){return u}});var a=n(50124),r=n(48534),i=(n(92222),n(38862),n(57327),n(41539),n(46943)),o=n(50086),l=n(13854),c=n(44870),u=(0,l.Q_)("blog",(function(){var e=(0,c.iH)([]);function t(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o.Z.API_URL,"/blog"));case 2:n=t.sent,e.value=n.data;case 4:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o.Z.API_URL,"/blog/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o.Z.API_URL,"/blog/slug/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("token")?localStorage.getItem("token"):"",r={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},e.next=5,i.Z.post("".concat(o.Z.API_URL,"/blog"),JSON.stringify(t),{headers:r});case 5:e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),alert("Ошибка");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),h.apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)((0,a.Z)().mark((function t(n){var r,l,c;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=localStorage.getItem("token")?localStorage.getItem("token"):"",l={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},t.next=5,i.Z["delete"]("".concat(o.Z.API_URL,"/blog/").concat(n),{headers:l});case 5:t.sent,c=e.value.filter((function(e){return e._id!=n})),e.value=c,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),alert("Ошибка");case 14:case"end":return t.stop()}}),t,null,[[0,10]])}))),m.apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return y=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,l;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("token")?localStorage.getItem("token"):"",l={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},e.next=5,i.Z.put("".concat(o.Z.API_URL,"/blog/").concat(t),JSON.stringify(n),{headers:l});case 5:e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),alert("Ошибка");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),y.apply(this,arguments)}function w(e){return e.imageUrl?o.Z.API_URL+e.imageUrl:n(1802)}return{articles:e,fetchArticles:t,fetchArticle:u,fetchArticleBySlug:p,createArticle:f,deleteArticle:g,updateArticle:v,getImageUrl:w}}))},75468:function(e,t,n){n.d(t,{Z:function(){return J}});var a=n(73396),r=n(49242),i=function(e){return(0,a.dD)("data-v-017fd9b2"),e=e(),(0,a.Cn)(),e},o={class:"input-group"},l=i((function(){return(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("span",{class:"input-group-text",id:""},"Заголовок")],-1)})),c={class:"input-group"},u=i((function(){return(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("span",{class:"input-group-text",id:""},"ID")],-1)})),s=i((function(){return(0,a._)("label",{style:{"margin-top":"5px","margin-bottom":"10px"}},"Текст статьи:",-1)})),p=i((function(){return(0,a._)("label",null,"Картинка для списка:",-1)})),d=i((function(){return(0,a._)("button",{class:"btn btn-secondary",type:"submit"},"Сохранить",-1)}));function f(e,t,n,i,f,h){var g=(0,a.up)("QuillEditor"),m=(0,a.up)("ImageUploaderArticle");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((function(){return n.handleSubmit&&n.handleSubmit.apply(n,arguments)}),["prevent"]))},[(0,a._)("div",o,[l,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.article.title=e})},null,512),[[r.nr,n.article.title]])]),(0,a._)("div",c,[u,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",required:"",placeholder:"Без пробелов на англ. языке","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.article.slug=e})},null,512),[[r.nr,n.article.slug]])]),s,(0,a.Wm)(g,{content:n.article.content,"onUpdate:content":t[2]||(t[2]=function(e){return n.article.content=e}),contentType:"html",style:{"margin-bottom":"20px"},toolbar:"full",modules:i.modules},null,8,["content","modules"]),p,(0,a.Wm)(m,{imageUrlProp:n.article.imageUrl,onUpdateImage:n.updateImage,imageMaxWidth:300,wrapSize:300},null,8,["imageUrlProp","onUpdateImage"]),d],32)}n(41539),n(92222);var h=n(87139),g=function(e){return(0,a.dD)("data-v-4ec9fff4"),e=e(),(0,a.Cn)(),e},m={class:"input-group"},v=["src"],y=g((function(){return(0,a._)("div",{class:"image-overlay"},[(0,a._)("span",null,"Нажмите, чтобы загрузить или обновить изображение")],-1)})),w={key:1,class:"image-wrap-text"};function b(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("label",{class:"image-wrap",style:(0,h.j5)("width: ".concat(n.wrapSize,"px; height: ").concat(n.wrapSize,"px"))},[r.imageUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:r.config.API_URL+r.imageUrl,style:(0,h.j5)("max-width: ".concat(n.imageMaxWidth,"px; max-height: ").concat(n.imageMaxWidth,"px;")),class:"image-wrap-img",alt:""},null,12,v)):(0,a.kq)("",!0),y,r.imageUrl?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",w,"Нажмите, чтобы загрузить или обновить изображение")),(0,a._)("input",{type:"file",ref:"fileInput",onChange:t[0]||(t[0]=function(){return r.handleFileInputChange&&r.handleFileInputChange.apply(r,arguments)})},null,544)],4)])}var Z=n(50124),I=n(48534),x=n(44870),k=n(46943),A=n(50086),U={props:["imageUrlProp","extraInfo","imageMaxWidth","wrapSize"],emits:["updateImage"],setup:function(e,t){var n=(0,x.iH)(null),r=(0,x.iH)("");function i(){return o.apply(this,arguments)}function o(){return o=(0,I.Z)((0,Z.Z)().mark((function e(){return(0,Z.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.value.files[0]&&l();case 1:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(){return c.apply(this,arguments)}function c(){return c=(0,I.Z)((0,Z.Z)().mark((function a(){var i,o,l,c;return(0,Z.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=new FormData,i.append("file",n.value.files[0]),o=localStorage.getItem("token")?localStorage.getItem("token"):"",l={"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(o)},a.next=6,k.Z.post("".concat(A.Z.API_URL,"/upload"),i,{headers:l});case 6:c=a.sent,r.value="/uploads/"+c.data.filename,t.emit("updateImage","/uploads/"+c.data.filename,e.extraInfo);case 9:case"end":return a.stop()}}),a)}))),c.apply(this,arguments)}return(0,a.bv)((function(){r.value=e.imageUrlProp})),(0,a.ic)((function(){r.value=e.imageUrlProp})),{handleFileInputChange:i,fileInput:n,imageUrl:r,config:A.Z}}},P=n(40089);const _=(0,P.Z)(U,[["render",b],["__scopeId","data-v-4ec9fff4"]]);var S=_,q=n(96149),D=n(13087),C=n(62833),L=(n(74916),n(77601),n(81299),n(74819),n(38880),n(62040));function R(e,t){while(!Object.prototype.hasOwnProperty.call(e,t))if(e=(0,L.Z)(e),null===e)break;return e}function F(){return F="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var a=R(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},F.apply(this,arguments)}var T=n(39110),B=n(26720),E=n(39792),H=n.n(E),z=H()["import"]("blots/block"),N=function(e){(0,T.Z)(n,e);var t=(0,B.Z)(n);function n(){return(0,D.Z)(this,n),t.apply(this,arguments)}return(0,C.Z)(n,[{key:"deleteAt",value:function(e,t){F((0,L.Z)(n.prototype),"deleteAt",this).call(this,e,t),this.cache={}}}],[{key:"create",value:function(e){var t=F((0,L.Z)(n),"create",this).call(this,e);if(!0===e)return t;var a=document.createElement("img");return a.setAttribute("src",e),t.appendChild(a),t}},{key:"value",value:function(e){var t=e.dataset,n=t.src,a=t.custom;return{src:n,custom:a}}}]),n}(z);N.blotName="imageBlot",N.className="image-uploading",N.tagName="span",H().register({"formats/imageBlot":N});var O=N,j=function(){function e(t,n){(0,D.Z)(this,e),this.quill=t,this.options=n,this.range=null,this.placeholderDelta=null,"function"!==typeof this.options.upload&&console.warn("[Missing config] upload function that returns a promise is required");var a=this.quill.getModule("toolbar");a&&a.addHandler("image",this.selectLocalImage.bind(this)),this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}return(0,C.Z)(e,[{key:"selectLocalImage",value:function(){var e=this;this.quill.focus(),this.range=this.quill.getSelection(),this.fileHolder=document.createElement("input"),this.fileHolder.setAttribute("type","file"),this.fileHolder.setAttribute("accept","image/*"),this.fileHolder.setAttribute("style","visibility:hidden"),this.fileHolder.onchange=this.fileChanged.bind(this),document.body.appendChild(this.fileHolder),this.fileHolder.click(),window.requestAnimationFrame((function(){document.body.removeChild(e.fileHolder)}))}},{key:"handleDrop",value:function(e){var t=this;if(e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length){if(e.stopPropagation(),e.preventDefault(),document.caretRangeFromPoint){var n=document.getSelection(),a=document.caretRangeFromPoint(e.clientX,e.clientY);n&&a&&n.setBaseAndExtent(a.startContainer,a.startOffset,a.startContainer,a.startOffset)}else{var r=document.getSelection(),i=document.caretPositionFromPoint(e.clientX,e.clientY);r&&i&&r.setBaseAndExtent(i.offsetNode,i.offset,i.offsetNode,i.offset)}this.quill.focus(),this.range=this.quill.getSelection();var o=e.dataTransfer.files[0];setTimeout((function(){t.quill.focus(),t.range=t.quill.getSelection(),t.readAndUploadFile(o)}),0)}}},{key:"handlePaste",value:function(e){var t=this,n=e.clipboardData||window.clipboardData;if(n&&(n.items||n.files))for(var a=n.items||n.files,r=/^image\/(jpe?g|gif|png|svg|webp)$/i,i=function(){if(r.test(a[o].type)){var n=a[o].getAsFile?a[o].getAsFile():a[o];n&&(t.quill.focus(),t.range=t.quill.getSelection(),e.preventDefault(),setTimeout((function(){t.quill.focus(),t.range=t.quill.getSelection(),t.readAndUploadFile(n)}),0))}},o=0;o<a.length;o++)i()}},{key:"readAndUploadFile",value:function(e){var t=this,n=!1,a=new FileReader;a.addEventListener("load",(function(){if(!n){var e=a.result;t.insertBase64Image(e)}}),!1),e&&a.readAsDataURL(e),this.options.upload(e).then((function(e){t.insertToEditor(e)}),(function(e){n=!0,t.removeBase64Image(),console.warn(e)}))}},{key:"fileChanged",value:function(){var e=this.fileHolder.files[0];this.readAndUploadFile(e)}},{key:"insertBase64Image",value:function(e){var t=this.range;this.placeholderDelta=this.quill.insertEmbed(t.index,O.blotName,"".concat(e),"user")}},{key:"insertToEditor",value:function(e){var t=this.range,n=this.calculatePlaceholderInsertLength();this.quill.deleteText(t.index,n,"user"),this.quill.insertEmbed(t.index,"image","".concat(e),"user"),t.index++,this.quill.setSelection(t,"user")}},{key:"calculatePlaceholderInsertLength",value:function(){return this.placeholderDelta.ops.reduce((function(e,t){return t.hasOwnProperty("insert")&&e++,e}),0)}},{key:"removeBase64Image",value:function(){var e=this.range,t=this.calculatePlaceholderInsertLength();this.quill.deleteText(e.index,t,"user")}}]),e}();window.ImageUploader=j;var M=j,W={components:{ImageUploaderArticle:S,QuillEditor:q.Bn},props:["article","handleSubmit","updateImage"],setup:function(){var e={name:"imageUploader",module:M,options:{upload:function(e){return new Promise((function(t,n){var a=new FormData;a.append("file",e);var r=localStorage.getItem("token")?localStorage.getItem("token"):"",i={"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(r)};k.Z.post("".concat(A.Z.API_URL,"/upload"),a,{headers:i}).then((function(e){console.log(e),t("".concat(A.Z.API_URL,"/uploads/").concat(e.data.filename))})).catch((function(e){n("Upload failed"),console.error("Error:",e)}))}))}}};return{modules:e}}};const Q=(0,P.Z)(W,[["render",f],["__scopeId","data-v-017fd9b2"]]);var J=Q}}]);
//# sourceMappingURL=545.72933030.js.map