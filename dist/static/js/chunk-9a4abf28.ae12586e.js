(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a4abf28"],{"3f55":function(t,e,s){},"7e62":function(t,e,s){"use strict";var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v("\n      "+t._s(t.config[t.type].desc)+"\n    ")]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},n=[],a={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},i=a,o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:i}},methods:{handleToHome:function(){this.$router.push({path:"/home"})}}},p=o,r=(s("a973"),s("2877")),l=Object(r["a"])(p,c,n,!1,null,"279b4b1c",null);e["a"]=l.exports},a973:function(t,e,s){"use strict";var c=s("3f55"),n=s.n(c);n.a},cc89:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{attrs:{type:"404"}})},n=[],a=s("7e62"),i={components:{ExceptionPage:a["a"]}},o=i,p=s("2877"),r=Object(p["a"])(o,c,n,!1,null,"329907fc",null);e["default"]=r.exports}}]);