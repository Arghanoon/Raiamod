(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68e78c42"],{b48a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mx-0"},[t._m(0),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("اسکرینشات ویدئو")]),s("input",{ref:"imageInputElement",staticClass:"d-none",attrs:{type:"file",accept:"image/jpeg,image/png,image/gif"},on:{change:t.onImageChange}}),s("div",{staticClass:"aspect-100",attrs:{id:"item-image"}},[s("img",{ref:"imageElement",attrs:{src:a("ba23")}})]),s("div",{staticClass:"d-flex align-items-center justify-content-center text-center mt-3"},[t.cropper?t._e():s("span",{staticClass:"cursor-pointer",on:{click:t.selectImage}},[s("span",{staticClass:"fa fa-folder-open fa-2x text-warning"})]),t.cropper?s("span",{staticClass:"cursor-pointer ml-2",on:{click:t.cropperConfirm}},[s("span",{staticClass:"fa fa-cloud-upload-alt fa-2x text-info"})]):t._e()])])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("عنوان ویدئو")]),a("input",{staticClass:"form-control",attrs:{type:"text"}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("توضیحات")]),a("textarea",{staticClass:"form-control"})]),a("div",{staticClass:"form-group"},[a("label",[t._v("بسته تبلیغاتی")]),a("select",{staticClass:"form-control"},[a("option",{attrs:{selected:""}},[t._v("-- انتخاب بسته --")]),a("option",[t._v("1000 نمایش یک ماه")]),a("option",[t._v("5000 نمایش سه ماه")]),a("option",[t._v("12000 نمایش شش ماه")]),a("option",[t._v("30000 نمایش 12 ماه")])])]),a("div",{staticClass:"form-group"},[a("label",[t._v("مدت زمان")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",[t._v("ثانیه")]),a("input",{staticClass:"form-control",attrs:{type:"number",min:"0",max:"60"}})]),a("div",{staticClass:"form-group col"},[a("label",[t._v("دقیقه")]),a("input",{staticClass:"form-control",attrs:{type:"number",min:"0",max:"60"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 text-center"},[a("button",{staticClass:"btn btn-outline-success"},[t._v(" ثبت اطلاعات ")])])}],n=a("bab4"),r=a.n(n),o=(a("4604"),{name:"AdvertisesUploadVideo",data:function(){return{cropper:null}},methods:{selectImage:function(){this.$refs.imageInputElement.click()},onImageChange:function(){var t=this;if(this.$refs.imageInputElement.files.length>0){var e=new FileReader;e.onload=function(){t.$refs.imageElement.src=e.result,t.cropper=new r.a(t.$refs.imageElement,{aspectRatio:1})},e.readAsDataURL(this.$refs.imageInputElement.files[0])}},cropperConfirm:function(){if(this.cropper){var t=this.cropper.getCroppedCanvas().toDataURL();this.cropper.destroy(),this.cropper=null,this.$refs.imageElement.src=t}}}}),c=o,l=(a("d6a1"),a("2877")),p=Object(l["a"])(c,s,i,!1,null,"75c76392",null);e["default"]=p.exports},ba23:function(t,e,a){t.exports=a.p+"img/default-item.681a9181.jpg"},d6a1:function(t,e,a){"use strict";var s=a("f5db"),i=a.n(s);i.a},f5db:function(t,e,a){}}]);
//# sourceMappingURL=chunk-68e78c42.4c305550.js.map