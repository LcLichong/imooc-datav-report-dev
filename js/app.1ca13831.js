(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0681":function(t,e,a){"use strict";a("29f1")},"29f1":function(t,e,a){},"45ff":function(t,e,a){"use strict";a("a7cf")},4657:function(t,e,a){"use strict";a("8fc0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"app",components:{}},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,null,null),u=l.exports,p=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("top-view"),a("sales-view"),a("bottom-view"),a("map-view")],1)},d=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-view"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-sales")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-orders")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("today-users")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-users")],1)],1)],1)],1)},h=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"累计销售额",value:"¥ 82,283,095"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("昨日销售额")]),a("span",{staticClass:"emphasis"},[t._v(" ¥ 30,000,000")])]},proxy:!0}])},[[a("div",{staticClass:"compare-wrapper"},[a("div",{staticClass:"compare"},[a("span",[t._v("日同比")]),a("span",{staticClass:"emphasis"},[t._v("7.33%")]),a("div",{staticClass:"increase"})]),a("div",{staticClass:"compare"},[a("span",[t._v("月同比")]),a("span",{staticClass:"emphasis"},[t._v("7.33%")]),a("div",{staticClass:"decrease"})])])]],2)},y=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-card"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"value"},[t._v(t._s(t.value))]),a("div",{staticClass:"chart"},[t._t("default")],2),a("div",{staticClass:"line"}),a("div",{staticClass:"total"},[t._t("footer")],2)])},b=[],w={props:{title:String,value:String}},x=w,g=(a("0681"),a("c62f"),Object(c["a"])(x,_,b,!1,null,"eb101b8e",null)),C=g.exports,O={components:{CommonCard:C}},S={mixins:[O]},j=S,$=(a("45ff"),Object(c["a"])(j,m,y,!1,null,"3e8b0da8",null)),E=$.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"累计订单量",value:"2,593,548"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("昨日订单量")]),a("span",{staticClass:"emphasis"},[t._v(" 2,000,000")])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"total-orders-chart"}})]],2)},P=[],T={mixins:[O],mounted:function(){var t=document.querySelector("#total-orders-chart"),e=this.$echarts.init(t);e.setOption({xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:[620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],areaStyle:{color:"purple"},lineStyle:{width:0},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,bottom:0,left:0,right:0}})}},M=T,A=Object(c["a"])(M,k,P,!1,null,null,null),V=A.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"今日交易用户数",value:"461,829"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("退货率")]),a("span",{staticClass:"emphasis"},[t._v(" 5.54%")])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"today-users-chart"}})]],2)},z=[],B={mixins:[O],mounted:function(){var t=document.querySelector("#today-users-chart"),e=this.$echarts.init(t);e.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},color:["#3398DB"],xAxis:{type:"category",data:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],show:!1},yAxis:{show:!1},series:[{name:"直接访问",type:"bar",data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],barWidth:"60%"}],grid:{top:0,bottom:0,left:0,right:0}})}},H=B,J=Object(c["a"])(H,q,z,!1,null,null,null),U=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"累计用户数",value:"1,496,889"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"total-users-footer"},[a("span",[t._v("日同比")]),a("span",{staticClass:"emphasis"},[t._v(" 49.64%")]),a("div",{staticClass:"increase"}),a("span",{staticClass:"month"},[t._v("月同比")]),a("span",{staticClass:"emphasis"},[t._v(" 87.05%")]),a("div",{staticClass:"decrease"})])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"total-users-chart"}})]],2)},D=[],G={mixins:[O],mounted:function(){var t=document.querySelector("#total-users-chart"),e=this.$echarts.init(t);e.setOption({xAxis:{type:"value",show:!1},yAxis:{type:"category",show:!1},series:[{type:"bar",stack:"总量",data:[100],barWidth:10,itemStyle:{color:"#45c946"}},{type:"bar",stack:"总量",data:[250],itemStyle:{color:"#eee"}},{type:"custom",data:[100],stack:"总量",renderItem:function(t,e){var a=e.value(0),s=e.coord([a,0]);return{type:"group",position:s,children:[{type:"path",shape:{d:"M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",x:-5,y:-20,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}},{type:"path",shape:{d:"M0 767.909l512.029-511.913L1024 767.909 0 767.909z",x:-5,y:10,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}}]}}}],grid:{top:0,bottom:0,left:0,right:0}})}},I=G,L=(a("4657"),Object(c["a"])(I,W,D,!1,null,"3c483d0c",null)),F=L.exports,K={components:{TotalSales:E,TotalOrders:V,TodayUsers:U,TotalUsers:F}},N=K,Q=Object(c["a"])(N,v,h,!1,null,"46f669b4",null),R=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("sales view")])},Y=[],Z={},tt=Z,et=Object(c["a"])(tt,X,Y,!1,null,"79f90e62",null),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("bottom view")])},rt=[],nt={},ot=nt,it=Object(c["a"])(ot,st,rt,!1,null,"1ddcbc76",null),ct=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("map view")])},ut=[],pt={},ft=pt,dt=Object(c["a"])(ft,lt,ut,!1,null,"0d1ed96f",null),vt=dt.exports,ht={name:"Home",components:{TopView:R,SalesView:at,BottomView:ct,MapView:vt}},mt=ht,yt=(a("9719"),Object(c["a"])(mt,f,d,!1,null,"3f74807c",null)),_t=yt.exports;s["a"].use(p["a"]);var bt=[{path:"/",name:"Home",component:_t}],wt=new p["a"]({routes:bt}),xt=wt,gt=(a("f4f9"),a("450d"),a("c2cc")),Ct=a.n(gt),Ot=(a("7a0f"),a("0f6c")),St=a.n(Ot),jt=(a("b8e0"),a("a4c4")),$t=a.n(jt),Et=(a("1951"),a("eedf")),kt=a.n(Et);s["a"].use(kt.a),s["a"].use($t.a),s["a"].use(St.a),s["a"].use(Ct.a);var Pt=a("313e"),Tt=a.n(Pt);s["a"].config.productionTip=!1,s["a"].prototype.$echarts=Tt.a,new s["a"]({router:xt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},"8fc0":function(t,e,a){},9719:function(t,e,a){"use strict";a("a47b")},a47b:function(t,e,a){},a7cf:function(t,e,a){},b3c2:function(t,e,a){},c62f:function(t,e,a){"use strict";a("b3c2")}});