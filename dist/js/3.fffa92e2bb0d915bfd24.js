webpackJsonp([3],{460:function(t,a,o){o(586);var e=o(1)(o(526),o(617),null,null);t.exports=e.exports},486:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={}},487:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={methods:{login:function(){window.localStorage.setItem("user",""),this.$router.push("/login")},goTo:function(){this.$router.push("/public")}}}},490:function(t,a,o){a=t.exports=o(454)(),a.push([t.i,".toolbar[data-v-02953891]{min-height:60px;background-color:#fff;color:#000}.right-itens a[data-v-02953891],.right-itens button[data-v-02953891]{margin-right:10px}.text-black[data-v-02953891]{color:#000}.toolbar-logo[data-v-02953891]{width:35px;height:auto;margin-right:5px}.label-login[data-v-02953891]{margin-right:10px;font-size:90%}",""])},493:function(t,a,o){a=t.exports=o(454)(),a.push([t.i,".footer-page{font-family:Quicksand;padding:5px;background:#fff;color:#000;height:50px;width:100%}",""])},495:function(t,a,o){var e=o(490);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(455)("ce277828",e,!0)},498:function(t,a,o){var e=o(493);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(455)("653d8fdb",e,!0)},502:function(t,a,o){o(498);var e=o(1)(o(486),o(507),null,null);t.exports=e.exports},503:function(t,a,o){o(495);var e=o(1)(o(487),o(504),"data-v-02953891",null);t.exports=e.exports},504:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"toolbar"},[o("q-toolbar-title",{attrs:{padding:1}},[o("span",[t._v("AGP")])]),t._v(" "),o("div",{staticClass:"right-itens"},[o("button",{staticClass:"text-black inline",on:{click:function(a){t.goTo()}}},[o("label",{staticClass:"label-login",attrs:{for:""}},[t._v("Cadastre-se")]),t._v(" "),o("i",{staticClass:"fa fa-2x fa-user-circle"})]),t._v(" "),o("button",{staticClass:"text-black inline",on:{click:function(a){t.login()}}},[o("label",{staticClass:"label-login",attrs:{for:""}},[t._v("Entrar")]),t._v(" "),o("i",{staticClass:"fa fa-2x fa-sign-out"})])])],1)},staticRenderFns:[]}},507:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"footer-page"},[t._v("\n    ™ Desenvolvido por zeno&zeno\n")])},staticRenderFns:[]}},526:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(503),n=o.n(e),s=o(502),i=o.n(s);a.default={components:{toolbar:n.a,footerexternal:i.a}}},560:function(t,a,o){a=t.exports=o(454)(),a.push([t.i,".button-margin{margin:30px}.header-page{font-size:200%;font-family:Quicksand;padding:40px}.button-group{display:-ms-grid;display:grid;-ms-grid-columns:100%;grid-template-columns:100%}",""])},586:function(t,a,o){var e=o(560);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(455)("0fe38afc",e,!0)},617:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("q-layout",{style:{backgroundColor:"whitesmoke"}},[o("toolbar",{slot:"header"}),t._v(" "),o("div",{staticClass:"layout-view"},[o("div",{staticClass:"layout-container"},[o("div",{staticClass:"group-items"},[o("div",{staticClass:"button-group"},[o("div",{staticClass:"header-page"},[t._v("\n            Cadastre-se no nosso sistema para trabalhar ou estudar conosco!\n          ")]),t._v(" "),o("button",{staticClass:"teal button-margin big"},[t._v("Seja um Professor")]),t._v(" "),o("button",{staticClass:"indigo button-margin big"},[t._v("Seja um Aluno")])])]),t._v(" "),o("router-view")],1)]),t._v(" "),o("footerexternal")],1)},staticRenderFns:[]}}});