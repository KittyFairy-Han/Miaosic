webpackJsonp([8],{YOyO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),i=s("6Xyt"),c=s("2X+S"),o=s("vhoT"),n=s("qwAB"),l=s("rGUG"),h=s("NYxO"),u=s("8stH"),y=s("T452"),f={mixins:[s("F4+m").a],data:function(){return{placeholder:"搜索歌手、歌曲",hotKey:[],query:""}},computed:a()({},Object(h.c)(["searchHistory","currentIndexPlay","currentSong"]),{shortcut:function(){return this.hotKey.concat(this.searchHistory)}}),created:function(){this.isBeforeScroll=!0,this.getHot()},methods:a()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh()},getHot:function(){var t=this;Object(u.a)().then(function(e){e.code===y.a&&(t.hotKey=e.data.hotkey.slice(0,10))})},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveHistory:function(t){this.saveSearchHistory(this.query),this.playSong(t)},playSong:function(t){t.id!==this.currentSong.id&&(this.insertSong(t),this.setCurrentPlay(this.currentIndexPlay+1),this.playing||this.setPlayingState(!0))},deleteItem:function(t){this.deleteSearchHistory(t)},clearHistory:function(){this.clearSearchHistory()},onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},beforeScroll:function(){this.$refs.shortcut.refresh()}},Object(h.d)({setCurrentPlay:"SET_CURRENT_PLAY",setPlayingState:"SET_PLAYING"}),Object(h.b)(["saveSearchHistory","deleteSearchHistory","clearSearchHistory","insertSong"])),watch:{query:function(t){t&&""!==t||this.$refs.shortcut.refresh()}},components:{SearchBox:c.a,Suggest:i.a,SearchList:o.a,Scroll:n.a,TopTip:l.a}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{data:t.shortcut,isBeforeScroll:t.isBeforeScroll},on:{beforeScroll:t.beforeScroll}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("ul",t._l(t.hotKey,function(e){return s("li",{staticClass:"item",on:{click:function(s){t.addQuery(e.k)}}},[s("span",[t._v(t._s(e.k))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),s("span",{staticClass:"clear",on:{click:function(e){t.clearHistory()}}},[s("i",{staticClass:"icon-clear"})])]),t._v(" "),s("search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteItem}})],1)])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveHistory}})],1),t._v(" "),s("router-view"),t._v(" "),s("top-tip",{ref:"topTip"},[s("div",{staticClass:"tip-title"},[s("i",{staticClass:"icon-ok"}),t._v(" "),s("span",{staticClass:"text"},[t._v("1首歌曲已经添加到播放列表")])])])],1)},staticRenderFns:[]};var v=s("VU/8")(f,d,!1,function(t){s("f7Bb")},null,null);e.default=v.exports},f7Bb:function(t,e){}});
//# sourceMappingURL=8.5c128bff59e473b768a4.js.map