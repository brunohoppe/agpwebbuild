webpackJsonp([36],{159:function(e,n,s){"use strict";function r(e){return function(){return s(232)("./"+e+".vue")}}var t=s(14),o=s(23);t.a.use(o.a),n.a=new o.a({routes:[{path:"/",component:r("home/home"),children:[{path:"home",component:r("form/simpleForm/simpleForm"),meta:{name:"home"}}]},{path:"/login",component:r("login/login"),meta:{name:"Login"}},{path:"*",component:r("error/error404")}]})},160:function(e,n,s){"use strict";var r=s(171);s(14).a.use(r.a);var t={layoutNeeded:!0,isLoginPage:!1,mobileMode:!1,menuCollapse:!1,menuNeeded:!0,posts:[]},o={setLayoutNeeded:function(e,n){e.layoutNeeded=n},setIsLoginPage:function(e,n){e.isLoginPage=n},setMobileMode:function(e,n){e.mobileMode=n},setMenuCollapse:function(e,n){e.menuCollapse=n},setPosts:function(e,n){e.posts=n}},a={getLayoutNeeded:function(){return t.layoutNeeded},getIsLoginPage:function(){return t.isLoginPage},getMobileMode:function(){return t.mobileMode},getMenuCollapse:function(){return t.menuCollapse},getPosts:function(){return t.posts},getMenuNeeded:function(){return t.menuNeeded}};n.a=new r.a.Store({state:t,mutations:o,getters:a})},161:function(e,n){},162:function(e,n){},163:function(e,n){},164:function(e,n){},165:function(e,n,s){s(225);var r=s(166)(s(193),s(229),null,null);e.exports=r.exports},192:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=s(14),t=s(26),o=s.n(t),a=s(27),u=s.n(a),i=s(33),d=s(159),j=s(160),c=s(23),l=s(163),m=(s.n(l),s(164)),p=(s.n(m),s(162));s.n(p);s(161),r.a.use(u.a),r.a.use(o.a),r.a.use(i.a),r.a.use(c.a),o.a.start(function(){new r.a({el:"#q-app",router:d.a,store:j.a,render:function(e){return e(s(165))}})})},193:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",created:function(){window.localStorage.getItem("user")?this.$router.push("/home"):this.$router.push("/login")}}},224:function(e,n){},225:function(e,n){},227:function(e,n,s){function r(e){return s(t(e))}function t(e){var n=o[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var o={"./af":44,"./af.js":44,"./ar":51,"./ar-dz":45,"./ar-dz.js":45,"./ar-kw":46,"./ar-kw.js":46,"./ar-ly":47,"./ar-ly.js":47,"./ar-ma":48,"./ar-ma.js":48,"./ar-sa":49,"./ar-sa.js":49,"./ar-tn":50,"./ar-tn.js":50,"./ar.js":51,"./az":52,"./az.js":52,"./be":53,"./be.js":53,"./bg":54,"./bg.js":54,"./bn":55,"./bn.js":55,"./bo":56,"./bo.js":56,"./br":57,"./br.js":57,"./bs":58,"./bs.js":58,"./ca":59,"./ca.js":59,"./cs":60,"./cs.js":60,"./cv":61,"./cv.js":61,"./cy":62,"./cy.js":62,"./da":63,"./da.js":63,"./de":66,"./de-at":64,"./de-at.js":64,"./de-ch":65,"./de-ch.js":65,"./de.js":66,"./dv":67,"./dv.js":67,"./el":68,"./el.js":68,"./en-au":69,"./en-au.js":69,"./en-ca":70,"./en-ca.js":70,"./en-gb":71,"./en-gb.js":71,"./en-ie":72,"./en-ie.js":72,"./en-nz":73,"./en-nz.js":73,"./eo":74,"./eo.js":74,"./es":76,"./es-do":75,"./es-do.js":75,"./es.js":76,"./et":77,"./et.js":77,"./eu":78,"./eu.js":78,"./fa":79,"./fa.js":79,"./fi":80,"./fi.js":80,"./fo":81,"./fo.js":81,"./fr":84,"./fr-ca":82,"./fr-ca.js":82,"./fr-ch":83,"./fr-ch.js":83,"./fr.js":84,"./fy":85,"./fy.js":85,"./gd":86,"./gd.js":86,"./gl":87,"./gl.js":87,"./gom-latn":88,"./gom-latn.js":88,"./he":89,"./he.js":89,"./hi":90,"./hi.js":90,"./hr":91,"./hr.js":91,"./hu":92,"./hu.js":92,"./hy-am":93,"./hy-am.js":93,"./id":94,"./id.js":94,"./is":95,"./is.js":95,"./it":96,"./it.js":96,"./ja":97,"./ja.js":97,"./jv":98,"./jv.js":98,"./ka":99,"./ka.js":99,"./kk":100,"./kk.js":100,"./km":101,"./km.js":101,"./kn":102,"./kn.js":102,"./ko":103,"./ko.js":103,"./ky":104,"./ky.js":104,"./lb":105,"./lb.js":105,"./lo":106,"./lo.js":106,"./lt":107,"./lt.js":107,"./lv":108,"./lv.js":108,"./me":109,"./me.js":109,"./mi":110,"./mi.js":110,"./mk":111,"./mk.js":111,"./ml":112,"./ml.js":112,"./mr":113,"./mr.js":113,"./ms":115,"./ms-my":114,"./ms-my.js":114,"./ms.js":115,"./my":116,"./my.js":116,"./nb":117,"./nb.js":117,"./ne":118,"./ne.js":118,"./nl":120,"./nl-be":119,"./nl-be.js":119,"./nl.js":120,"./nn":121,"./nn.js":121,"./pa-in":122,"./pa-in.js":122,"./pl":123,"./pl.js":123,"./pt":125,"./pt-br":124,"./pt-br.js":124,"./pt.js":125,"./ro":126,"./ro.js":126,"./ru":127,"./ru.js":127,"./sd":128,"./sd.js":128,"./se":129,"./se.js":129,"./si":130,"./si.js":130,"./sk":131,"./sk.js":131,"./sl":132,"./sl.js":132,"./sq":133,"./sq.js":133,"./sr":135,"./sr-cyrl":134,"./sr-cyrl.js":134,"./sr.js":135,"./ss":136,"./ss.js":136,"./sv":137,"./sv.js":137,"./sw":138,"./sw.js":138,"./ta":139,"./ta.js":139,"./te":140,"./te.js":140,"./tet":141,"./tet.js":141,"./th":142,"./th.js":142,"./tl-ph":143,"./tl-ph.js":143,"./tlh":144,"./tlh.js":144,"./tr":145,"./tr.js":145,"./tzl":146,"./tzl.js":146,"./tzm":148,"./tzm-latn":147,"./tzm-latn.js":147,"./tzm.js":148,"./uk":149,"./uk.js":149,"./ur":150,"./ur.js":150,"./uz":152,"./uz-latn":151,"./uz-latn.js":151,"./uz.js":152,"./vi":153,"./vi.js":153,"./x-pseudo":154,"./x-pseudo.js":154,"./yo":155,"./yo.js":155,"./zh-cn":156,"./zh-cn.js":156,"./zh-hk":157,"./zh-hk.js":157,"./zh-tw":158,"./zh-tw.js":158};r.keys=function(){return Object.keys(o)},r.resolve=t,e.exports=r,r.id=227},229:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{attrs:{id:"q-app"}},[s("router-view")],1)},staticRenderFns:[]}},232:function(e,n,s){function r(e){var n=t[e];return n?s.e(n[1]).then(function(){return s(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var t={"./dashboard/one/cardChart.vue":[241,1],"./dashboard/one/cardTodo.vue":[242,2],"./dashboard/one/cardTotal.vue":[243,20],"./dashboard/one/dashboard.vue":[260,0],"./dashboard/one/knobStatistics.vue":[244,14],"./dashboard/one/tagKnob.vue":[236,34],"./dragAndDrop/dragAndDrop.vue":[261,3],"./dragAndDrop/exampleTwo/cardExampleTwo.vue":[245,6],"./dragAndDrop/exampleTwo/cardTask.vue":[235,33],"./dragAndDrop/exampleTwo/doingColumn.vue":[237,13],"./dragAndDrop/exampleTwo/doneColumn.vue":[238,32],"./dragAndDrop/exampleTwo/todoColumn.vue":[239,12],"./dragAndDrop/exempleOne/cardExampleOne.vue":[246,8],"./error/error404.vue":[262,31],"./form/advancedFormOne/advancedFormOne.vue":[263,5],"./form/advancedFormOne/cardDataTable.vue":[247,30],"./form/advancedFormOne/cardUserData.vue":[248,29],"./form/embeeded/eDateTime.vue":[249,18],"./form/embeeded/eInput.vue":[240,17],"./form/embeeded/eSelect.vue":[250,16],"./form/embeeded/embeeded.vue":[264,4],"./form/simpleForm/modalAdress.vue":[251,19],"./form/simpleForm/simpleForm.vue":[265,10],"./form/simpleForm/userForm.vue":[252,28],"./home/home.vue":[266,9],"./login/login.vue":[267,15],"./pricing/cardPlanOne.vue":[253,27],"./pricing/cardPlanTwo.vue":[254,26],"./pricing/plansBenefits/benefitFour.vue":[255,25],"./pricing/plansBenefits/benefitOne.vue":[256,24],"./pricing/plansBenefits/benefitThree.vue":[257,23],"./pricing/plansBenefits/benefitTwo.vue":[258,22],"./pricing/pricing.vue":[268,7],"./serverSideDataTable/serverSideDataTable.vue":[269,11],"./serverSideDataTable/tooltipButton.vue":[259,21]};r.keys=function(){return Object.keys(t)},e.exports=r,r.id=232},33:function(e,n,s){"use strict";s.d(n,"a",function(){return v}),s.d(n,"b",function(){return f});var r=s(172),t=s.n(r),o=s(174),a=s.n(o),u=s(228),i=s.n(u),d=s(224),j=(s.n(d),function(){return"https://agpweb.herokuapp.com"}),c=function(){return"http://localhost:3001"},l=function(e){return i.a.start(),e},m=function(e){return i.a.done(),e},p=function(e){return i.a.done(),t.a.reject(e)},f=a.a.create({baseURL:"http://localhost:3001"});f.interceptors.request.use(l),f.interceptors.response.use(m,p);var v={getBaseUrlTest:c,getBaseUrl:j}}},[192]);