webpackJsonp([5],{"0IAC":function(t,e){},"3NJf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("qwAB"),r=n("y/jF"),c=n("BRgg"),o=n("T452"),l=n("NYxO"),u={mixins:[n("F4+m").a],data:function(){return{rankList:[]}},created:function(){this.receiveRankList()},methods:s()({receiveRankList:function(){var t=this;Object(c.b)().then(function(e){e.code===o.a?t.rankList=e.data.topList:console.log("请求榜单列表 error")})},selectItem:function(t){this.$router.push({path:"/rank-page/"+t.id}),this.setRank(t)},handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.rankPage.style.bottom=e,this.$refs.rankList.refresh()}},Object(l.d)({setRank:"SET_RANK"})),components:{scroll:i.a,loading:r.a}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rankPage",staticClass:"rank-page"},[n("scroll",{ref:"rankList",staticClass:"top-list",attrs:{data:t.rankList}},[n("ul",t._l(t.rankList,function(e){return n("li",{staticClass:"top",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"rank.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"song-list"},t._l(e.songList,function(e,a){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(a+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+t._s(e.singername))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.rankList.length,expression:"!rankList.length"}],staticClass:"loading-wrapper"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")(u,f,!1,function(t){n("0IAC")},"data-v-d8ef7a24",null);e.default=p.exports},BRgg:function(t,e,n){"use strict";e.b=function(){var t=s()({},r.c,{uin:0,needNewCode:1,platform:"h5"}),e=r.b;return Object(i.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,e)},e.a=function(t){var e=s()({},r.c,{topid:t,needNewCode:1,tpl:3,page:"detail",type:"top",platform:"h5"}),n=r.b;return Object(i.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,n)};var a=n("woOf"),s=n.n(a),i=n("Gak4"),r=n("T452")}});
//# sourceMappingURL=5.aa072e12dbaf8874cae0.js.map