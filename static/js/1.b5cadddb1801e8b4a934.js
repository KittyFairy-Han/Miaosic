webpackJsonp([1],{APW1:function(t,e){},eOFt:function(t,e){},ieVo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("y/jF"),a=i("qwAB"),o=i("GQaK"),c={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:1}},created:function(){},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t.initSlider()},20),window.addEventListener("resize",function(){t.slider&&t.slider.enabled&&(t._setSliderWidth(!0),t.slider.refresh())})},beforeDestroy:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(t){this.group=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,s=0;s<this.group.length;s++){this.group[s].style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initDots:function(){this.dots=new Array(this.group.length)},initSlider:function(){this.slider=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.autoPlay&&(this.play(),this.slider.on("scrollEnd",this.play))},play:function(){var t=this;this.currentPageIndex=this.slider.getCurrentPage().pageX+1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.interval)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"carousel"},[i("div",{ref:"sliderGroup",staticClass:"carousel-group"},[t._t("default")],2),t._v(" "),i("div",{ref:"dots",staticClass:"dots"},t._l(t.dots,function(e,s){return i("span",{staticClass:"dot",class:{active:t.currentPageIndex-1===s}})}))])},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("eOFt")},"data-v-2f2a25a2",null).exports,u=i("m40h"),h=i("F4+m"),f=i("T452"),m=i("NYxO"),p={mixins:[h.a],data:function(){return{carousel:{},discList:[]}},created:function(){this.receiveCarousel(),this.receiveDiscList()},methods:n()({receiveCarousel:function(){var t=this;Object(u.a)().then(function(e){e.code===f.a&&(t.carousel=e.data.slider)})},receiveDiscList:function(){var t=this;Object(u.c)().then(function(e){e.code===f.a&&(t.discList=e.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.recommendContent.refresh())},selectItem:function(t){this.$router.push({path:"/recommend-page/"+t.dissid}),this.setDisc(t)},handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.recommendPage.style.bottom=e,this.$refs.recommendContent.refresh()}},Object(m.d)({setDisc:"SET_DISC"})),components:{Scroll:a.a,Slider:d,Loading:r.a}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"recommendPage",staticClass:"recommend-page"},[i("scroll",{ref:"recommendContent",staticClass:"recommend-content",attrs:{data:t.discList}},[i("div",[t.carousel.length?i("div",{staticClass:"carousel-wrapper"},[i("slider",{ref:"slider"},t._l(t.carousel,function(e){return i("div",{staticClass:"carousel-item"},[i("a",{attrs:{href:e.linkUrl}},[i("img",{attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}))],1):t._e(),t._v(" "),i("div",{staticClass:"disc-list"},[i("h1",{staticClass:"title"},[t._v("热门歌单推荐")]),t._v(" "),i("ul",t._l(t.discList,function(e){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"disc.imgurl"}],attrs:{width:"60",height:"60"}})]),t._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-wrapper"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var g=i("VU/8")(p,v,!1,function(t){i("APW1")},"data-v-21b5f552",null);e.default=g.exports},m40h:function(t,e,i){"use strict";e.a=function(){var t=a()({},c.c,{platform:"h5",uin:0,needNewCode:1});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.b)},e.c=function(){var t=c.d?"/api/getDiscList":"http://www.fairyhan.cn/api/getDiscList",e=a()({},c.c,{picmid:1,rnd:Math.random(),loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,format:"json"});a()({},c.b,{name:"getPlaylist"});return d.a.get(t,{params:e}).then(function(t){return n.a.resolve(t.data)})},e.b=function(t){var e=c.d?"/api/getDiscDetail":"http://www.fairyhan.cn/api/getDiscDetail",i=a()({},c.c,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,loginUin:0,format:"json"});a()({},c.b,{name:"playlistinfoCallback"});return d.a.get(e,{params:i}).then(function(t){return n.a.resolve(t.data)})};var s=i("//Fk"),n=i.n(s),r=i("woOf"),a=i.n(r),o=i("Gak4"),c=i("T452"),l=i("mtWM"),d=i.n(l)}});
//# sourceMappingURL=1.b5cadddb1801e8b4a934.js.map