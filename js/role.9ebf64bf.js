(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["role"],{"1be4":function(e,t,r){var n=r("d066");e.exports=n("document","documentElement")},"37e8":function(e,t,r){var n=r("83ab"),o=r("9bf2"),a=r("825a"),i=r("df75");e.exports=n?Object.defineProperties:function(e,t){a(e);var r,n=i(t),c=n.length,l=0;while(c>l)o.f(e,r=n[l++],t[r]);return e}},"3bbe":function(e,t,r){var n=r("861d");e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},4970:function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"g",(function(){return u}));var n=r("b32d"),o=function(e){return Object(n["a"])({method:"POST",url:"/boss/role/getRolePages",data:e})},a=function(e){return Object(n["a"])({method:"DELETE",url:"/boss/role/".concat(e)})},i=function(e){return Object(n["a"])({method:"POST",url:"/boss/role/saveOrUpdate",data:e})},c=function(e){return Object(n["a"])({method:"GET",url:"/boss/role/".concat(e)})},l=function(){return Object(n["a"])({method:"GET",url:"/boss/role/all"})},s=function(e){return Object(n["a"])({method:"POST",url:"/boss/role/allocateUserRoles",data:e})},u=function(e){return Object(n["a"])({method:"GET",url:"/boss/role/user/".concat(e)})}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),o=r("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},"6c35":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role"},[r("role-list")],1)},o=[],a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-list"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.onSubmit}},[e._v("查询搜索")]),r("el-button",{attrs:{disabled:e.loading},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),r("el-button",{on:{click:e.handleAdd}},[e._v("添加角色")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.roles}},[r("el-table-column",{attrs:{prop:"id",label:"编号"}}),r("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"description",label:"描述"}}),r("el-table-column",{attrs:{prop:"createdTime",label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.row.createdTime))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.$router.push({name:"alloc-menu",params:{roleId:t.row.id}})}}},[e._v("分配菜单")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.$router.push({name:"alloc-resource",params:{roleId:t.row.id}})}}},[e._v("分配资源")])],1),r("div",[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])],1)]}}])})],1)],1),r("el-dialog",{attrs:{title:e.isEdit?"编辑角色":"添加角色",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?r("create-or-edit",{attrs:{"role-id":e.roleId,"is-edit":e.isEdit},on:{success:e.onSuccess,cancel:function(t){e.dialogVisible=!1}}}):e._e()],1)],1)},c=[],l=(r("b0c0"),r("96cf"),r("1da1")),s=r("4970"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"roleform",attrs:{"label-width":"80px",rules:e.rules,model:e.role}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),r("el-form-item",{attrs:{label:"角色编码",prop:"code"}},[r("el-input",{model:{value:e.role.code,callback:function(t){e.$set(e.role,"code",t)},expression:"role.code"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),r("el-form-item",[r("el-button",{on:{click:function(t){return e.$emit("cancel")}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确认")])],1)],1)],1)},d=[],f=(r("a9e3"),a["default"].extend({name:"CreateOrEditRole",props:{roleId:{type:[String,Number]},isEdit:{type:Boolean,default:!1}},data:function(){return{role:{code:"",name:"",description:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"change"}],code:[{required:!0,message:"请输入编码",trigger:"change"}],description:[{required:!0,message:"请输入描述",trigger:"change"}]}}},created:function(){this.isEdit&&this.loadRole()},methods:{loadRole:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])(e.roleId);case 2:r=t.sent,n=r.data,e.role=n.data;case 5:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.roleform.validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,Object(s["b"])(e.role);case 3:e.$message.success("操作成功"),e.$emit("success");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}})),p=f,m=r("2877"),b=Object(m["a"])(p,u,d,!1,null,"df243b36",null),h=b.exports,v=a["default"].extend({name:"RoleList",components:{CreateOrEdit:h},data:function(){return{roles:[],form:{current:1,size:50,name:""},loading:!1,dialogVisible:!1,roleId:null,isEdit:!1}},created:function(){this.loadRoles()},methods:{loadRoles:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(s["f"])(e.form);case 3:r=t.sent,n=r.data,e.roles=n.data.records,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},onSubmit:function(){this.loadRoles()},handleEdit:function(e){this.dialogVisible=!0,this.roleId=e.id,this.isEdit=!0},handleDelete:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("确认删除角色：".concat(e.name,"？"),"删除提示");case 3:return r.next=5,Object(s["c"])(e.id);case 5:t.$message.success("删除成功"),t.loadRoles(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),r.t0&&r.t0.response?t.$message.error("删除失败，请重试"):t.$message.info("取消删除");case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},onReset:function(){this.$refs.form.resetFields(),this.loadRoles()},onSuccess:function(){this.dialogVisible=!1,this.loadRoles()},handleAdd:function(){this.isEdit=!1,this.dialogVisible=!0}}}),g=v,x=Object(m["a"])(g,i,c,!1,null,"3055a93c",null),w=x.exports,_=a["default"].extend({name:"RoleIndex",components:{RoleList:w}}),O=_,E=Object(m["a"])(O,n,o,!1,null,"333ecef8",null);t["default"]=E.exports},7156:function(e,t,r){var n=r("861d"),o=r("d2bb");e.exports=function(e,t,r){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(e,i),e}},"7c73":function(e,t,r){var n,o=r("825a"),a=r("37e8"),i=r("7839"),c=r("d012"),l=r("1be4"),s=r("cc12"),u=r("f772"),d=">",f="<",p="prototype",m="script",b=u("IE_PROTO"),h=function(){},v=function(e){return f+m+d+e+f+"/"+m+d},g=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},x=function(){var e,t=s("iframe"),r="java"+m+":";return t.style.display="none",l.appendChild(t),t.src=String(r),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}w=n?g(n):x();var e=i.length;while(e--)delete w[p][i[e]];return w()};c[b]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(h[p]=o(e),r=new h,h[p]=null,r[b]=e):r=w(),void 0===t?r:a(r,t)}},a9e3:function(e,t,r){"use strict";var n=r("83ab"),o=r("da84"),a=r("94ca"),i=r("6eeb"),c=r("5135"),l=r("c6b6"),s=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,m=r("06cf").f,b=r("9bf2").f,h=r("58a8").trim,v="Number",g=o[v],x=g.prototype,w=l(f(x))==v,_=function(e){var t,r,n,o,a,i,c,l,s=u(e,!1);if("string"==typeof s&&s.length>2)if(s=h(s),t=s.charCodeAt(0),43===t||45===t){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=s.slice(2),i=a.length,c=0;c<i;c++)if(l=a.charCodeAt(c),l<48||l>o)return NaN;return parseInt(a,n)}return+s};if(a(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var O,E=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof E&&(w?d((function(){x.valueOf.call(r)})):l(r)!=v)?s(new g(_(t)),r,E):_(t)},y=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;y.length>R;R++)c(g,O=y[R])&&!c(E,O)&&b(E,O,m(g,O));E.prototype=x,x.constructor=E,i(o,v,E)}},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,l="name";n&&!(l in a)&&o(a,l,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},d2bb:function(e,t,r){var n=r("825a"),o=r("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(r,[]),t=r instanceof Array}catch(a){}return function(r,a){return n(r),o(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},df75:function(e,t,r){var n=r("ca84"),o=r("7839");e.exports=Object.keys||function(e){return n(e,o)}}}]);
//# sourceMappingURL=role.9ebf64bf.js.map