(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a2f6e9"],{"081f":function(e,t,a){},2377:function(e,t,a){},"40a4":function(e,t,a){"use strict";var s=a("081f"),n=a.n(s);n.a},"4f36":function(e,t,a){e.exports=a.p+"img/samanLogo.7ac01663.png"},"5b7e":function(e,t,a){"use strict";var s=a("2377"),n=a.n(s);n.a},"78d0":function(e,t,a){"use strict";var s=a("7f58"),n=a.n(s);n.a},"7f58":function(e,t,a){},f593:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{key:e.$route.path})],1)],1)],1)]),a("TheFooter")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[s("CSidebarBrand",{staticClass:"d-md-down-none bg-white",attrs:{to:"/"}},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:a("4f36"),alt:""}})])]),s("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),s("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},r=[],i=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"success",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs"},{name:"Cards",to:"/base/cards"},{name:"Carousels",to:"/base/carousels"},{name:"Collapses",to:"/base/collapses"},{name:"Forms",to:"/base/forms"},{name:"Jumbotrons",to:"/base/jumbotrons"},{name:"List Groups",to:"/base/list-groups"},{name:"Navs",to:"/base/navs"},{name:"Navbars",to:"/base/navbars"},{name:"Paginations",to:"/base/paginations"},{name:"Popovers",to:"/base/popovers"},{name:"Progress Bars",to:"/base/progress-bars"},{name:"Switches",to:"/base/switches"},{name:"Tables",to:"/base/tables"},{name:"Tabs",to:"/base/tabs"},{name:"Tooltips",to:"/base/tooltips"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons"},{name:"Button Dropdowns",to:"/buttons/dropdowns"},{name:"Button Groups",to:"/buttons/button-groups"},{name:"Brand Buttons",to:"/buttons/brand-buttons"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands"},{name:"Flags",to:"/icons/flags"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts"},{name:"Badges",to:"/notifications/badges"},{name:"Modals",to:"/notifications/modals"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login"},{name:"Register",to:"/pages/register"},{name:"Error 404",to:"/pages/404"},{name:"Error 500",to:"/pages/500"}]}]}],c={name:"TheSidebar",nav:i,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},m=c,d=a("2877"),l=Object(d["a"])(m,o,r,!1,null,null,null),C=l.exports,u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[s("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),s("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),s("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[s("img",{staticClass:"img-fluid",attrs:{src:a("4f36"),alt:""}})]),s("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",{attrs:{to:"/dashboard"}},[e._v(" Dashboard ")])],1),s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[e._v(" Users ")])],1),s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",[e._v(" Settings ")])],1)],1),s("CHeaderNav",{staticClass:"mr-4"},[s("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-bell"}})],1)],1),s("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-list"}})],1)],1),s("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-envelope-open"}})],1)],1),s("TheHeaderDropdownAccnt")],1),s("CSubheader",{staticClass:"px-3"},[s("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},b=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[a("CHeaderNavLink",[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])]},proxy:!0}])},[a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Account")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-bell"}}),e._v(" Updates "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"info"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-envelope-open"}}),e._v(" Messages "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"success"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-task"}}),e._v(" Tasks "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"danger"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-comment-square"}}),e._v(" Comments "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"warning"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Settings")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-user"}}),e._v(" Profile ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-settings"}}),e._v(" Settings ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-dollar"}}),e._v(" Payments "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"secondary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-file"}}),e._v(" Projects "),a("CBadge",{staticClass:"mfs-auto",attrs:{color:"primary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownDivider"),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-shield-alt"}}),e._v(" Lock Account ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Logout ")],1)],1)},v=[],g={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}}},f=g,h=(a("78d0"),Object(d["a"])(f,p,v,!1,null,"c3b26e62",null)),_=h.exports,w={name:"TheHeader",components:{TheHeaderDropdownAccnt:_}},I=w,N=Object(d["a"])(I,u,b,!1,null,null,null),S=N.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",{attrs:{fixed:!1}},[a("h1",{staticClass:"text"},[e._v("Saman Express")])])},x=[],H={name:"TheFooter"},T=H,k=(a("40a4"),Object(d["a"])(T,D,x,!1,null,"53ceb3eb",null)),B=k.exports,$={name:"TheContainer",components:{TheSidebar:C,TheHeader:S,TheFooter:B}},y=$,E=(a("5b7e"),Object(d["a"])(y,s,n,!1,null,"3b21ac01",null));t["default"]=E.exports}}]);
//# sourceMappingURL=chunk-56a2f6e9.bae03cb7.js.map