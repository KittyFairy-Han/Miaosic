webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=a()({},r.c,{uin:0,needNewCode:1,platform:"h5"}),n=r.b;return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,n)},n.a=function(t){var n=a()({},r.c,{topid:t,needNewCode:1,tpl:3,page:"detail",type:"top",platform:"h5"}),e=r.b;return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,e)};var i=e("woOf"),a=e.n(i),s=e("Gak4"),r=e("T452")},Kjo5:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),a=e.n(i),s=e("kvay"),r=e("BRgg"),o=e("T452"),c=e("NYxO"),u=e("PvFA"),f={data:function(){return{songs:[]}},created:function(){this.isRank=!0,this.receiveRank()},computed:a()({title:function(){return this.rank.topTitle},bgImage:function(){return this.rank.picUrl}},Object(c.c)(["rank"])),methods:{receiveRank:function(){var t=this;this.rank.id?Object(r.a)(this.rank.id).then(function(n){n.code===o.a?t.songs=t._normalizeSongs(n.songlist):console.log("error")}):this.$router.push({path:"/rank-page"})},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.data.songid&&t.data.albummid&&n.push(Object(u.a)(t.data))}),n}},components:{MusicList:s.a}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"father-image":this.bgImage,songs:this.songs,isRank:this.isRank}})],1)},staticRenderFns:[]};var d=e("VU/8")(f,h,!1,function(t){e("hTDQ")},"data-v-4b51787b",null);n.default=d.exports},hTDQ:function(t,n){}});
//# sourceMappingURL=6.d1c617adf26a1257c24e.js.map