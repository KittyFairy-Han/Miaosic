webpackJsonp([0],{kvay:function(t,s,e){"use strict";var a=e("Dd8w"),l=e.n(a),i=e("qwAB"),n=e("ZV4u"),r=e("y/jF"),o=e("NYxO"),c={mixins:[e("F4+m").a],props:{fatherImage:{type:String,default:""},songs:{type:Array,default:""},title:{type:String,default:""},isRank:{type:Boolean,default:!1}},data:function(){return{scrollY:0,bgStyle:"",layerStyle:""}},computed:{},created:function(){this.probeType=3,this.isListenScroll=!0},mounted:function(){var t=this;if(this.bgStyle="background-image:url("+this.fatherImage+")",this.isRank)var s=this,e=setTimeout(function(){t.songs.length?t.bgUrl=t.songs[0].image:t.bgUrl=t.fatherImage,s.bgStyle="background-image:url("+t.bgUrl+")",clearTimeout(e)},300);this.height={wall:this.$refs.bgWall.clientHeight,main:document.getElementById("main").clientHeight},this.layerStyle="height:"+(this.height.main+this.height.wall)+"px",this.$refs.main.$el.style.top=this.$refs.bgWall.clientHeight+"px",this.topTransalteY=40-this.$refs.bgWall.clientHeight},methods:l()({back:function(){this.$router.back()},selectSong:function(t,s){this.selectPlay({list:this.songs,index:s})},playRan:function(){this.randomPlay(this.songs)},handlePlayList:function(t){var s=t.length>0?"60px":"";this.$refs.main.$el.style.bottom=s,this.$refs.main.refresh()},makeStyle:function(t){this.scrollY=t.y}},Object(o.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=void 0,e=void 0,a=Math.abs(t/this.$refs.bgWall.clientHeight);t>0?(e=1+a,s=10):(e=1,s=0,Math.min(20,20*a)),this.$refs.bgWall.style.transform="scale("+e+")",t<this.topTransalteY?(s=10,this.$refs.bgWall.style.paddingTop=0,this.$refs.bgWall.style.height="40px",this.$refs.playBtn.style.display="none",this.$refs.layer.style.transform="translate3d(0,0,0)"):t<0&&t>=this.topTransalteY&&(s=0,this.$refs.bgWall.style.paddingTop="70%",this.$refs.bgWall.style.height=0,this.$refs.playBtn.style.display="",this.$refs.layer.style.transform="translate3d(0,"+t+"px,0)"),this.$refs.bgWall.style.zIndex=s}},components:{scroll:i.a,songList:n.a,loading:r.a}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{ref:"bgWall",staticClass:"bg-wall",style:t.bgStyle},[e("div",{staticClass:"back",on:{click:function(s){t.back()}}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.playRan}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer",style:t.layerStyle}),t._v(" "),e("scroll",{ref:"main",staticClass:"main",attrs:{id:"main",data:t.songs,"probe-type":t.probeType,"is-listen-scroll":t.isListenScroll},on:{scroll:t.makeStyle}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,isRank:t.isRank},on:{select:t.selectSong}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-wrapper"},[e("loading")],1)])],1)},staticRenderFns:[]};var g=e("VU/8")(c,h,!1,function(t){e("rJLQ")},"data-v-c390e0e2",null);s.a=g.exports},rJLQ:function(t,s){}});
//# sourceMappingURL=0.f99989674a2d5e25a698.js.map