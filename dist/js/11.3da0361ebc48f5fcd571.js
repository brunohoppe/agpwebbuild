webpackJsonp([11,21],{259:function(t,e,a){a(408);var r=a(166)(a(379),a(434),"data-v-1f49eb66",null);t.exports=r.exports},269:function(t,e,a){a(495);var r=a(166)(a(472),a(511),"data-v-0e30853b",null);t.exports=r.exports},379:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["url"]}},389:function(t,e,a){e=t.exports=a(233)(),e.push([t.i,"img[data-v-1f49eb66]{max-height:300px}",""])},408:function(t,e,a){var r=a(389);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(234)("692d3d21",r,!0)},434:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"primary"},[a("i",[t._v("image")]),t._v(" "),a("q-tooltip",[a("img",{attrs:{src:t.url,alt:""}})])],1)},staticRenderFns:[]}},472:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(259),i=a.n(r);e.default={mounted:function(){this.getBeers()},data:function(){return{beers:[],page:1,searchBeer:"",columns:[{label:"Name",field:"name",width:"80px",sort:!0},{label:"Description",field:"description",width:"150px",sort:!0},{label:"First Brewed",field:"first_brewed",width:"50px",sort:!0},{label:"Picture",field:"image_url",width:"50px"}],configs:{columnPicker:!0,title:"Beer List"}}},watch:{page:function(){this.getBeers()}},computed:{url:function(){return"beers?page="+this.page+"&per_page=10"+this.search},search:function(){return this.searchBeer?"&beer_name="+this.searchBeer:""}},methods:{getBeers:function(){var t=this;this.$http.punk.get(this.url).then(function(e){t.beers=e.data})}},components:{tooltipButton:i.a}}},481:function(t,e,a){e=t.exports=a(233)(),e.push([t.i,".grid-filter[data-v-0e30853b]{max-width:200px}.grid-search[data-v-0e30853b]{max-width:calc(100% - 400px)}.grid-pagination[data-v-0e30853b]{max-width:200px}",""])},495:function(t,e,a){var r=a(481);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(234)("1c950565",r,!0)},511:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"flex wrap gutter"},[a("div",{staticClass:"auto"},[a("q-search",{attrs:{placeholder:"Search for beer name",debounce:500},on:{input:t.getBeers},model:{value:t.searchBeer,callback:function(e){t.searchBeer=e},expression:"searchBeer"}})],1),t._v(" "),a("div",{staticClass:"auto"},[a("q-pagination",{attrs:{max:10},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]),t._v(" "),a("q-data-table",{attrs:{data:t.beers,config:t.configs,columns:t.columns},scopedSlots:t._u([["col-image_url",function(t){return[a("tooltip-button",{attrs:{url:t.row.image_url}})]}]])})],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-title bg-teal text-white"},[t._v("Example using pagination / filter outside of data tables (Tks to\n        "),a("a",{staticClass:"text-black underline",attrs:{href:"https://github.com/wilcorrea"}},[t._v("Willian Correa")]),t._v(" ) ")])}]}}});