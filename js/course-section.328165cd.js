(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["course-section"],{"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"37e8":function(e,t,n){var r=n("83ab"),o=n("9bf2"),s=n("825a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=r.length,c=0;while(i>c)o.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("69f3"),s=n("7dd0"),a="String Iterator",i=o.set,c=o.getterFor(a);s(String,"String",(function(e){i(this,{type:a,string:String(e),index:0})}),(function(){var e,t=c(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),s=n("9bf2"),a=r("unscopables"),i=Array.prototype;void 0==i[a]&&s.f(i,a,{configurable:!0,value:o(null)}),e.exports=function(e){i[a][e]=!0}},4614:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"course-section"},[n("el-card",[n("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[e._v(" "+e._s(e.course.courseName)+" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleShowAddSection}},[e._v("添加阶段")])],1),n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{data:e.sections,props:e.defaultProps,draggable:"","allow-drop":e.handleAllowDrop},on:{"node-drop":e.handleSort},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,o=t.data;return n("div",{staticClass:"inner"},[n("span",[e._v(e._s(r.label))]),o.sectionName?n("span",{staticClass:"actions"},[n("el-button",{on:{click:function(t){return t.stopPropagation(),e.handleEditSectionShow(o)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.handleShowAddLesson(o)}}},[e._v("添加课时")]),n("el-select",{staticClass:"select-status",attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleSectionStatusChange(o)}},model:{value:o.status,callback:function(t){e.$set(o,"status",t)},expression:"data.status"}},[n("el-option",{attrs:{label:"已隐藏",value:0}}),n("el-option",{attrs:{label:"待更新",value:1}}),n("el-option",{attrs:{label:"已更新",value:2}})],1)],1):n("span",{staticClass:"actions"},[n("el-button",{on:{click:function(t){return e.handleShowEditLesson(o,r.parent.data)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.$router.push({name:"course-video",params:{courseId:e.courseId,theme:o.theme},query:{sectionId:r.parent.id,lessonId:o.id}})}}},[e._v("上传视频")]),n("el-select",{staticClass:"select-status",attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleLessonStatusChange(o)}},model:{value:o.status,callback:function(t){e.$set(o,"status",t)},expression:"data.status"}},[n("el-option",{attrs:{label:"已隐藏",value:0}}),n("el-option",{attrs:{label:"待更新",value:1}}),n("el-option",{attrs:{label:"已更新",value:2}})],1)],1)])}}])})],1),n("el-dialog",{attrs:{title:"添加课程阶段",visible:e.isAddSectionShow},on:{"update:visible":function(t){e.isAddSectionShow=t}}},[n("el-form",{ref:"section-form",attrs:{model:e.section,"label-width":"100px",rules:e.sectionRules}},[n("el-form-item",{attrs:{label:"课程名称"}},[n("el-input",{attrs:{value:e.course.courseName,autocomplete:"off",disabled:""}})],1),n("el-form-item",{attrs:{label:"章节名称",prop:"sectionName"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.section.sectionName,callback:function(t){e.$set(e.section,"sectionName",t)},expression:"section.sectionName"}})],1),n("el-form-item",{attrs:{label:"章节描述",prop:"description"}},[n("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.section.description,callback:function(t){e.$set(e.section,"description",t)},expression:"section.description"}})],1),n("el-form-item",{attrs:{label:"章节排序",prop:"orderNum"}},[n("el-input-number",{model:{value:e.section.orderNum,callback:function(t){e.$set(e.section,"orderNum",t)},expression:"section.orderNum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.isAddSectionShow=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddSection}},[e._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"添加课时",visible:e.isAddLessonShow},on:{"update:visible":function(t){e.isAddLessonShow=t}}},[n("el-form",{ref:"lesson-form",attrs:{model:e.lesson,"label-width":"100px",rules:e.lessonRules}},[n("el-form-item",{attrs:{label:"课程名称"}},[n("el-input",{attrs:{value:e.course.courseName,autocomplete:"off",disabled:""}})],1),n("el-form-item",{attrs:{label:"章节名称"}},[n("el-input",{attrs:{value:e.lesson.sectionName,disabled:"",autocomplete:"off"}})],1),n("el-form-item",{attrs:{label:"课时名称",prop:"theme"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.lesson.theme,callback:function(t){e.$set(e.lesson,"theme",t)},expression:"lesson.theme"}})],1),n("el-form-item",{attrs:{label:"时长",prop:"duration"}},[n("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:e.lesson.duration,callback:function(t){e.$set(e.lesson,"duration",e._n(t))},expression:"lesson.duration"}},[n("template",{slot:"append"},[e._v("分钟")])],2)],1),n("el-form-item",{attrs:{label:"是否开放试听",prop:"isFree"}},[n("el-switch",{model:{value:e.lesson.isFree,callback:function(t){e.$set(e.lesson,"isFree",t)},expression:"lesson.isFree"}})],1),n("el-form-item",{attrs:{label:"课时排序",prop:"orderNum"}},[n("el-input-number",{model:{value:e.lesson.orderNum,callback:function(t){e.$set(e.lesson,"orderNum",t)},expression:"lesson.orderNum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.isAddLessonShow=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddLesson}},[e._v("确 定")])],1)],1)],1)},o=[],s=(n("d81d"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),a=n("2b0e"),i=n("b32d"),c=function(e){return Object(i["a"])({method:"GET",url:"/boss/course/section/getSectionAndLesson",params:{courseId:e}})},u=function(e){return Object(i["a"])({method:"POST",url:"/boss/course/section/saveOrUpdateSection",data:e})},l=function(e){return Object(i["a"])({method:"GET",url:"/boss/course/section/getBySectionId",params:{sectionId:e}})},d=n("6fd8"),f=function(e){return Object(i["a"])({method:"POST",url:"/boss/course/lesson/saveOrUpdate",data:e})},p=a["default"].extend({name:"CourseSection",props:{courseId:{type:[String,Number],required:!0}},data:function(){var e={children:"lessonDTOS",label:function(e){return e.sectionName||e.theme}},t={courseId:this.courseId,sectionName:"",description:"",orderNum:0,status:0},n={courseId:this.courseId,sectionId:void 0,sectionName:"",theme:"",duration:0,isFree:!1,orderNum:0,status:0};return{course:{},sections:[],defaultProps:e,isAddSectionShow:!1,section:t,isAddLessonShow:!1,lesson:n,isLoading:!1,sectionRules:{sectionName:[{required:!0,message:"请输入章节名称",trigger:"change"}],orderNum:[{required:!0,message:"请输入章节排序",trigger:"change"}],description:[{required:!0,message:"请输入章节描述",trigger:"change"}]},lessonRules:{theme:[{required:!0,message:"请输入课时名称",trigger:"change"}],orderNum:[{required:!0,message:"请输入排序",trigger:"change"}],duration:[{required:!0,message:"请输入时长",trigger:"change"}]}}},created:function(){this.loadSections(),this.loadCourse()},methods:{loadCourse:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["b"])(e.courseId);case 2:n=t.sent,r=n.data,e.course=r.data;case 5:case"end":return t.stop()}}),t)})))()},loadSections:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c(e.courseId);case 2:n=t.sent,r=n.data,e.sections=r.data;case 5:case"end":return t.stop()}}),t)})))()},handleShowAddSection:function(){this.section={courseId:this.courseId,sectionName:"",description:"",orderNum:0,status:0},this.isAddSectionShow=!0},handleAddSection:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs["section-form"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,u(e.section);case 3:e.loadSections(),e.isAddSectionShow=!1,e.$refs["section-form"].resetFields(),e.$message.success("操作成功");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},handleEditSectionShow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l(e.id);case 2:r=n.sent,o=r.data,t.section=o.data,t.isAddSectionShow=!0;case 6:case"end":return n.stop()}}),n)})))()},handleSectionStatusChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u(e);case 2:t.$message.success("操作成功");case 3:case"end":return n.stop()}}),n)})))()},handleLessonStatusChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,f(e);case 2:t.$message.success("操作成功");case 3:case"end":return n.stop()}}),n)})))()},handleShowAddLesson:function(e){console.log(e),this.lesson={sectionName:e.sectionName,sectionId:e.id,courseId:this.courseId,theme:"",duration:0,isFree:!1,orderNum:0,status:0},this.isAddLessonShow=!0},handleAddLesson:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs["lesson-form"].validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,f(e.lesson);case 3:e.$message.success("操作成功"),e.loadSections(),e.isAddLessonShow=!1;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},handleShowEditLesson:function(e,t){this.lesson=e,this.lesson.sectionName=t.sectionName,this.isAddLessonShow=!0},handleAllowDrop:function(e,t,n){return e.data.sectionId===t.data.sectionId&&"inner"!==n},handleSort:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.isLoading=!0,r.prev=1,r.next=4,Promise.all(t.parent.childNodes.map((function(t,n){return e.data.lessonDTOS?u({id:t.data.id,orderNum:n+1}):f({id:t.data.id,orderNum:n+1})})));case 4:n.$message.success("排序成功"),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](1),console.log(r.t0),n.$message.error("排序失败");case 11:n.isLoading=!1;case 12:case"end":return r.stop()}}),r,null,[[1,7]])})))()}}}),m=p,h=(n("7273"),n("2877")),v=Object(h["a"])(m,r,o,!1,null,"5415186e",null);t["default"]=v.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),s="["+o+"]",a=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),s=function(e){return function(t,n){var s,a,i=String(o(t)),c=r(n),u=i.length;return c<0||c>=u?e?"":void 0:(s=i.charCodeAt(c),s<55296||s>56319||c+1===u||(a=i.charCodeAt(c+1))<56320||a>57343?e?i.charAt(c):s:e?i.slice(c,c+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"6fd8":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("b32d"),o=function(e){return Object(r["a"])({method:"POST",url:"/boss/course/getQueryCourses",data:e})},s=function(e){return Object(r["a"])({method:"GET",url:"/boss/course/changeState",params:e})},a=function(e){return Object(r["a"])({method:"POST",url:"/boss/course/saveOrUpdateCourse",data:e})},i=function(e,t){return Object(r["a"])({method:"POST",url:"/boss/course/upload",data:e,onUploadProgress:t})},c=function(e){return Object(r["a"])({method:"GET",url:"/boss/course/getCourseById",params:{courseId:e}})}},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var s,a;return o&&"function"==typeof(s=t.constructor)&&s!==n&&r(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},7273:function(e,t,n){"use strict";n("8d29")},"7c73":function(e,t,n){var r,o=n("825a"),s=n("37e8"),a=n("7839"),i=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",p="prototype",m="script",h=l("IE_PROTO"),v=function(){},b=function(e){return f+m+d+e+f+"/"+m+d},g=function(e){e.write(b("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=u("iframe"),n="java"+m+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(b("document.F=Object")),e.close(),e.F},S=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}S=r?g(r):w();var e=a.length;while(e--)delete S[p][a[e]];return S()};i[h]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[p]=o(e),n=new v,v[p]=null,n[h]=e):n=S(),void 0===t?n:s(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("9ed3"),s=n("e163"),a=n("d2bb"),i=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),d=n("c430"),f=n("3f8c"),p=n("ae93"),m=p.IteratorPrototype,h=p.BUGGY_SAFARI_ITERATORS,v=l("iterator"),b="keys",g="values",w="entries",S=function(){return this};e.exports=function(e,t,n,l,p,y,x){o(n,t,l);var O,A,I,N=function(e){if(e===p&&E)return E;if(!h&&e in j)return j[e];switch(e){case b:return function(){return new n(this,e)};case g:return function(){return new n(this,e)};case w:return function(){return new n(this,e)}}return function(){return new n(this)}},k=t+" Iterator",_=!1,j=e.prototype,R=j[v]||j["@@iterator"]||p&&j[p],E=!h&&R||N(p),C="Array"==t&&j.entries||R;if(C&&(O=s(C.call(new e)),m!==Object.prototype&&O.next&&(d||s(O)===m||(a?a(O,m):"function"!=typeof O[v]&&c(O,v,S)),i(O,k,!0,!0),d&&(f[k]=S))),p==g&&R&&R.name!==g&&(_=!0,E=function(){return R.call(this)}),d&&!x||j[v]===E||c(j,v,E),f[t]=E,p)if(A={values:N(g),keys:y?E:N(b),entries:N(w)},x)for(I in A)(h||_||!(I in j))&&u(j,I,A[I]);else r({target:t,proto:!0,forced:h||_},A);return A}},"8d29":function(e,t,n){},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),s=n("5c6c"),a=n("d44e"),i=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=o(r,{next:s(1,n)}),a(e,u,!1,!0),i[u]=c,e}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),s=n("94ca"),a=n("6eeb"),i=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,b="Number",g=o[b],w=g.prototype,S=c(f(w))==b,y=function(e){var t,n,r,o,s,a,i,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(s=u.slice(2),a=s.length,i=0;i<a;i++)if(c=s.charCodeAt(i),c<48||c>o)return NaN;return parseInt(s,r)}return+u};if(s(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(S?d((function(){w.valueOf.call(n)})):c(n)!=b)?u(new g(y(t)),n,O):y(t)},A=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;A.length>I;I++)i(g,x=A[I])&&!i(O,x)&&h(O,x,m(g,x));O.prototype=w,w.constructor=O,a(o,b,O)}},ae93:function(e,t,n){"use strict";var r,o,s,a=n("e163"),i=n("9112"),c=n("5135"),u=n("b622"),l=n("c430"),d=u("iterator"),f=!1,p=function(){return this};[].keys&&(s=[].keys(),"next"in s?(o=a(a(s)),o!==Object.prototype&&(r=o)):f=!0),void 0==r&&(r={}),l||c(r,d)||i(r,d,p),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},d2bb:function(e,t,n){var r=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(s){}return function(n,s){return r(n),o(s),t?e.call(n,s):n.__proto__=s,n}}():void 0)},d44e:function(e,t,n){var r=n("9bf2").f,o=n("5135"),s=n("b622"),a=s("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,a)&&r(e,a,{configurable:!0,value:t})}},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,s=n("1dde"),a=n("ae40"),i=s("map"),c=a("map");r({target:"Array",proto:!0,forced:!i||!c},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),s=n("e260"),a=n("9112"),i=n("b622"),c=i("iterator"),u=i("toStringTag"),l=s.values;for(var d in o){var f=r[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{a(p,c,l)}catch(h){p[c]=l}if(p[u]||a(p,u,d),o[d])for(var m in s)if(p[m]!==s[m])try{a(p,m,s[m])}catch(h){p[m]=s[m]}}}},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e163:function(e,t,n){var r=n("5135"),o=n("7b0b"),s=n("f772"),a=n("e177"),i=s("IE_PROTO"),c=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),s=n("3f8c"),a=n("69f3"),i=n("7dd0"),c="Array Iterator",u=a.set,l=a.getterFor(c);e.exports=i(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),s.Arguments=s.Array,o("keys"),o("values"),o("entries")}}]);
//# sourceMappingURL=course-section.328165cd.js.map