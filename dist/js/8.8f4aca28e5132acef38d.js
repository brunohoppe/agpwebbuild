webpackJsonp([8],{1040:function(r,e,t){var o=t(991);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t(285)("0a72d3f8",o,!0)},1095:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"hrrf-container"},[t("div",{staticClass:"hrrf-container-header"},[t("div",{staticClass:"hrrf-professor-header"},[t("div",{staticClass:"cabecalho-professor"},[r._v("Professor: ")]),r._v(" "),t("div",{staticClass:"nome-professor"},[t("b",[r._v(r._s(r.getProfessorSelecionado().nome))])])])]),r._v(" "),t("div",{staticClass:"contp"},[t("div",{staticClass:"contc"},[t("div",{staticClass:"hrr-form-mg"},[t("label",{staticClass:"stacked-label"},[r._v("Data")]),r._v(" "),t("flat-pickr",{class:{"has-error":r.isFormSubmitted&&r.$v.horario.data.$invalid},attrs:{config:r.config},model:{value:r.horario.data,callback:function(e){r.horario.data=e},expression:"horario.data"}})],1),r._v(" "),t("div",{staticClass:"hrrf-form-mg"},[t("label",{staticClass:"stacked-label"},[r._v("Horário Início")]),r._v(" "),t("flat-pickr",{class:{"has-error":r.isFormSubmitted&&r.$v.horario.horaInicio.$invalid},attrs:{config:r.configTime},model:{value:r.horario.horaInicio,callback:function(e){r.horario.horaInicio=e},expression:"horario.horaInicio"}})],1),r._v(" "),t("div",{staticClass:"hrrf-form-mg"},[t("label",{staticClass:"stacked-label"},[r._v("Horário Fim")]),r._v(" "),t("flat-pickr",{class:{"has-error":r.isFormSubmitted&&r.$v.horario.horaFim.$invalid},attrs:{config:r.configTime},model:{value:r.horario.horaFim,callback:function(e){r.horario.horaFim=e},expression:"horario.horaFim"}})],1),r._v(" "),t("div",{staticClass:"hrrf-form-mg"},[t("label",{staticClass:"stacked-label hrrf-form-mg"},[r._v("Turno")]),r._v(" "),t("label",{staticClass:"stacked-label"},[t("q-checkbox",{attrs:{disable:""},model:{value:r.professor.flagTurnoMatinal,callback:function(e){r.professor.flagTurnoMatinal=e},expression:"professor.flagTurnoMatinal"}}),r._v("\n        Matinal\n      ")],1),r._v(" "),t("label",{staticClass:"stacked-label"},[t("q-checkbox",{attrs:{disable:""},model:{value:r.professor.flagTurnoDiurno,callback:function(e){r.professor.flagTurnoDiurno=e},expression:"professor.flagTurnoDiurno"}}),r._v("\n        Diurno\n      ")],1),r._v(" "),t("label",{staticClass:"stacked-label hrrf-form-mg"},[t("q-checkbox",{attrs:{disable:""},model:{value:r.professor.flagTurnoNoturno,callback:function(e){r.professor.flagTurnoNoturno=e},expression:"professor.flagTurnoNoturno"}}),r._v("\n        Noturno\n      ")],1)]),r._v(" "),t("div",{staticClass:"hrrf-form-mg"},[t("button",{staticClass:"indigo button-margin",on:{click:function(e){r.salvarHorario()}}},[r._v("\n        Salvar\n      ")]),r._v(" "),t("button",{staticClass:"white button-margin",on:{click:function(e){r.goTo("horarioslist")}}},[r._v("\n        Cancelar\n      ")])])])])])},staticRenderFns:[]}},313:function(r,e,t){t(1040);var o=t(11)(t(939),t(1095),null,null);r.exports=o.exports},333:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(31).withParams;e.default=o},337:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=(0,a.default)({type:"required"},function(r){return Array.isArray(r)?!!r.length:void 0!==r&&null!==r&&!!String(r).length})},340:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=(0,a.default)({type:"alpha"},function(r){return void 0===r||null===r||""===r||/^[a-zA-Z]*$/.test(r)})},341:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=(0,a.default)({type:"alphaNum"},function(r){return void 0===r||null===r||""===r||/^[a-zA-Z0-9]*$/.test(r)})},342:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return(0,a.default)({type:"and"},function(){for(var r=this,t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];return e.length>0&&e.reduce(function(e,t){return e&&t.apply(r,o)},!0)})}},343:function(r,e,t){"use strict";function o(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(337),i=o(a),n=t(333),s=o(n);e.default=function(r,e){return(0,s.default)({type:"between",min:r,max:e},function(t){return!(0,i.default)(t)||!/\s/.test(t)&&Number(r)<=t&&Number(e)>=t})}},344:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=(0,a.default)({type:"email"},function(r){return void 0===r||null===r||""===r||/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/.test(r)})},345:function(r,e,t){"use strict";function o(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.sameAs=e.required=e.minLength=e.maxLength=e.email=e.between=e.numeric=e.alphaNum=e.alpha=void 0;var a=t(340),i=o(a),n=t(341),s=o(n),l=t(348),u=o(l),c=t(343),f=o(c),d=t(344),h=o(d),p=t(346),v=o(p),m=t(347),b=o(m),g=t(337),_=o(g),y=t(350),x=o(y),k=t(349),I=o(k),F=t(342),M=o(F);e.alpha=i.default,e.alphaNum=s.default,e.numeric=u.default,e.between=f.default,e.email=h.default,e.maxLength=v.default,e.minLength=b.default,e.required=_.default,e.sameAs=x.default,e.or=I.default,e.and=M.default},346:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=function(r){return(0,a.default)({type:"maxLength",max:r},function(e){return Array.isArray(e)?0===e.length||e.length<=r:void 0===e||null===e||(""===e||String(e).length<=r)})}},347:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=function(r){return(0,a.default)({type:"minLength",min:r},function(e){return Array.isArray(e)?0===e.length||e.length>=r:void 0===e||null===e||(""===e||String(e).length>=r)})}},348:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=(0,a.default)({type:"numeric"},function(r){return void 0===r||null===r||""===r||/^[0-9]*$/.test(r)})},349:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return(0,a.default)({type:"or"},function(){for(var r=this,t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];return e.length>0&&e.reduce(function(e,t){return e||t.apply(r,o)},!1)})}},350:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(333),a=function(r){return r&&r.__esModule?r:{default:r}}(o);e.default=function(r){var e={type:"sameAs",eq:r};return(0,a.default)(e,function(e,t){return e===("function"==typeof r?r.call(this,t):t[r])})}},389:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:Array,columns:Array,filterKey:String,iconclassp:String,actionbtnpass:Function},data:function(){var r={};return this.columns.forEach(function(e){r[e]=1}),{sortKey:"",sortOrders:r}},created:function(){},mounted:function(){},computed:{},methods:{sortBy:function(r){this.sortKey=r,this.sortOrders[r]=-1*this.sortOrders[r]},actionBtn:function(r,e){this.actionbtnpass(r,e)}},filters:{capitalize:function(r){return r.charAt(0).toUpperCase()+r.slice(1)}}}},393:function(r,e,t){e=r.exports=t(284)(),e.push([r.i,"table[data-v-fe4eaefa]{border:2px solid #42b983;border-radius:3px;background-color:#fff}th[data-v-fe4eaefa]{background-color:#42b983;color:#fff;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}td[data-v-fe4eaefa]{background-color:#f9f9f9}td[data-v-fe4eaefa],th[data-v-fe4eaefa]{padding:10px 20px}th.active[data-v-fe4eaefa]{color:#fff}th.active .arrow[data-v-fe4eaefa]{opacity:1}.arrow[data-v-fe4eaefa]{display:inline-block;vertical-align:middle;width:0;height:0;margin-left:5px;opacity:.66}.arrow.asc[data-v-fe4eaefa]{border-bottom:4px solid #fff}.arrow.asc[data-v-fe4eaefa],.arrow.dsc[data-v-fe4eaefa]{border-left:4px solid transparent;border-right:4px solid transparent}.arrow.dsc[data-v-fe4eaefa]{border-top:4px solid #fff}",""])},395:function(r,e,t){var o=t(393);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t(285)("10e90544",o,!0)},410:function(r,e,t){t(395);var o=t(11)(t(389),t(412),"data-v-fe4eaefa",null);r.exports=o.exports},412:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("table",[t("thead",[t("tr",[r._l(r.columns,function(e){return t("th",{key:e},[r._v("\r\n        "+r._s(r._f("capitalize")(e.colName))+"\r\n      ")])}),r._v(" "),t("th")],2)]),r._v(" "),t("tbody",r._l(r.data,function(e,o){return t("tr",{key:e},[r._l(r.columns,function(o){return t("td",{key:o},[r._v("\r\n        "+r._s(e[o.colId].descricao)+"\r\n      ")])}),r._v(" "),t("td",[t("button",{on:{click:function(t){r.actionBtn(o,e)}}},[t("i",{class:r.iconclassp})])])],2)}))])},staticRenderFns:[]}},939:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(183),a=t.n(o),i=t(12),n=t(8),s=t(345),l=(t.n(s),t(410)),u=t.n(l);e.default={components:{simplegrid:u.a},data:function(){return{horarios:[],searchQuery:"",iconclassp:"fa fa-close",gridColumns:[{colName:"data",colId:"data"},{colName:"hora início",colId:"horaInicio"},{colName:"hora fim",colId:"horaFim"}],gridData:[],isFormSubmitted:!1,professor:this.getProfessorSelecionado(),horario:{data:"",horaInicio:"",horaFim:"",professor:{id:this.getProfessorSelecionado().idProfessor}},configTime:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",allowInput:!0,time_24hr:!0,locale:this.getLocaleFlatpickr().pt},config:{allowInput:!0,dateFormat:"d/m/Y",minDate:"today",locale:this.getLocaleFlatpickr().pt}}},mixins:[n.a],methods:a()({criarHorarioEmLote:function(){this.horarios=[];for(var r=1;r<this.gridData.length;r++)if(c(this)){var e=this.getDecreptHorario(this.gridData[r]);this.horarios.push(e)}},selecionaHorario:function(){var r=this;if(this.gridData.filter(function(e){return console.log(e),e.data.value===r.horario.data&&e.horaInicio.value===r.horario.horaInicio&&e.horaFim.value===r.horario.horaFim})[0])return void this.$emit("showToast",{msg:"Horário repetido",type:"error"});this.gridData.push({data:{value:this.horario.data,descricao:this.horario.data},horaInicio:{value:this.horario.horaInicio,descricao:this.horario.horaInicio},horaFim:{value:this.horario.horaFim,descricao:this.horario.horaFim},professor:{id:this.getProfessorSelecionado().idProfessor}})},removeItemGrid:function(r,e){this.gridData.splice(r,1)},goTo:function(r){this.$router.push("/int/"+r)},getDecreptHorario:function(r){var e=void 0;if(r.horaInicio&&r.horaFim){var t=r.horaInicio.toString().replace(":","");t=parseInt(t);var o=r.horaFim.toString().replace(":","");o=parseInt(o),e={data:new Date(parseInt(r.data.substring(6,10)),parseInt(r.data.substring(3,5)-1),parseInt(r.data.substring(0,2))),horaInicio:t,horaFim:o,professor:{id:r.professor.id}}}return e},salvarHorario:function(){var r=this;if(c(this)){var e=this.getDecreptHorario(this.horario);this.criarHorario(e).then(function(e){e.data&&(r.$emit("showToast",{msg:"Realizado com sucesso",type:"success"}),r.goTo("horarioslist"))}).catch(function(e){r.$emit("showToast",e)})}}},t.i(i.d)(["criarHorario"]),t.i(i.b)(["getHorarios","getProfessorSelecionado"])),validations:{horario:{horaInicio:{required:s.required,isValidHour:function(r){return this.isValidHour(r)}},horaFim:{required:s.required,isValidHour:function(r){return this.isValidHour(r)}},data:{required:s.required,isDate:function(r){return this.isDate(r)}}}}};var c=function(r){return!!f(r)&&(!!r.isValidHoraInicioFim(r.horario.horaInicio,r.horario.horaFim)||(r.$emit("showToast",{msg:"Horário Início não pode ser maior que o Horário Fim.",type:"error"}),!1))},f=function(r){var e=!0;return r.isFormSubmitted=!0,r.$v.horario.$touch(),r.$v.horario.$invalid&&(r.$emit("showToast",{msg:"Preencha os campos obrigatórios!",type:"error"}),e=!1),r.$v.horario.data.isDate||(r.$emit("showToast",{msg:"Data da Aula Inválida",type:"error"}),e=!1),r.$v.horario.horaInicio.isValidHour&&r.$v.horario.horaFim.isValidHour||(r.$emit("showToast",{msg:"Horário Inválido",type:"error"}),e=!1),e}},991:function(r,e,t){e=r.exports=t(284)(),e.push([r.i,".hrrf-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#fff;padding:15px}.hrrf-form-mg{margin-bottom:15px}.cabecalho-professor,.nome-professor{padding:10px}.hrrf-professor-header{min-height:60px;background-color:#e7f8e8;border:1px solid #c5baab;border-radius:5px;padding:5px;margin-bottom:15px}.contp,.hrrf-professor-header{display:-webkit-box;display:-ms-flexbox;display:flex}.contp{-ms-flex:1 1 100%;flex:1 1 100%}.contc,.contp{-webkit-box-flex:1}.contc{-ms-flex:1 1 40%;flex:1 1 40%}.contbtn{-webkit-box-flex:1;-ms-flex:1 1 20%;flex:1 1 20%}",""])}});