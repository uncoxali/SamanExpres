(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0321a722"],{"2dc9":function(e,a,i){"use strict";i.r(a);var t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("CRow",[i("CCol",{attrs:{lg:"6"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData()},scopedSlots:e._u([{key:"header",fn:function(){return[i("CIcon",{attrs:{name:"cil-grid"}}),e._v(" Simple Table "),i("div",{staticClass:"card-header-actions"},[i("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/nav",rel:"noreferrer noopener",target:"_blank"}},[i("small",{staticClass:"text-muted"},[e._v("docs")])])])]},proxy:!0}])})],1),i("CCol",{attrs:{lg:"6"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData(),striped:"",caption:"Striped Table"}})],1)],1),i("CRow",[i("CCol",{attrs:{lg:"6"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData(),small:"",caption:"Condensed Table"}})],1),i("CCol",{attrs:{lg:"6"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData(),fixed:"",border:"",caption:"Bordered Table"}})],1)],1),i("CRow",[i("CCol",{attrs:{sm:"12"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData(),hover:"",striped:"",border:"",small:"",fixed:"",caption:"Combined All Table"}})],1)],1),i("CRow",[i("CCol",{attrs:{sm:"12"}},[i("CTableWrapper",{attrs:{items:e.getShuffledUsersData(),hover:"",striped:"",border:"",small:"",fixed:"",dark:"",caption:"Combined All dark Table"}})],1)],1)],1)},r=[],n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("CCard",[i("CCardHeader",[e._t("header",[i("CIcon",{attrs:{name:"cil-grid"}}),e._v(" "+e._s(e.caption)+" ")])],2),i("CCardBody",[i("CDataTable",{attrs:{hover:e.hover,striped:e.striped,border:e.border,small:e.small,fixed:e.fixed,items:e.items,fields:e.fields,"items-per-page":e.small?10:5,dark:e.dark,pagination:""},scopedSlots:e._u([{key:"status",fn:function(a){var t=a.item;return[i("td",[i("CBadge",{attrs:{color:e.getBadge(t.status)}},[e._v(e._s(t.status))])],1)]}}])})],1)],1)},o=[],l={name:"Table",props:{items:Array,fields:{type:Array,default:function(){return["username","registered","role","status"]}},caption:{type:String,default:"Table"},hover:Boolean,striped:Boolean,border:Boolean,small:Boolean,fixed:Boolean,dark:Boolean},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"}}},u=l,s=i("2877"),d=Object(s["a"])(u,n,o,!1,null,null,null),c=d.exports,m=i("bd76"),p={name:"Tables",components:{CTableWrapper:c},methods:{shuffleArray:function(e){for(var a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[i],e[i]=t}return e},getShuffledUsersData:function(){return this.shuffleArray(m["a"].slice(0))}}},f=p,g=Object(s["a"])(f,t,r,!1,null,null,null);a["default"]=g.exports},bd76:function(e,a,i){"use strict";var t=[{_id:"5fa3c0c143f9651fdac94de9",index:0,guid:"a0e459a4-62f1-40af-a136-ea26a52d1d76",isActive:!1,balance:"$1,781.19",picture:"http://placehold.it/32x32",age:25,eyeColor:"brown",name:"Ali Mohamadi",gender:"male",company:"iran",email:"Alif.mohamady20@gmail.com",phone:"+989104866595",address:"iran, Tehran city , Saman Experess",about:"i'm Developer Front End.\r\n",registered:"2020-5-11T01:50:34 -05:-30",latitude:16.769818,longitude:39.46888,tags:["quis","consectetur","amet","mollit","laboris","amet","commodo"],friends:[{id:0,name:"Alba Harding"},{id:1,name:"Maxwell Moon"},{id:2,name:"Shana Hicks"}],greeting:"Hello, Richmond Shaffer! You have 10 unread messages.",favoriteFruit:"banana"},{_id:"5fa3c0c1d9a27abe63936834",index:1,guid:"7549fc0f-a4ff-4c85-af40-484cb5cfdbcd",isActive:!0,balance:"$3,206.27",picture:"http://placehold.it/32x32",age:23,eyeColor:"brown",name:"Bass Kerr",gender:"male",company:"QNEKT",email:"basskerr@qnekt.com",phone:"+1 (808) 594-3988",address:"706 Fane Court, Wyano, Louisiana, 3353",about:"Laborum adipisicing ea commodo fugiat sit sunt elit consequat do. Aute non cupidatat reprehenderit et voluptate voluptate id ipsum anim. Veniam veniam fugiat tempor exercitation nulla proident irure quis irure proident incididunt amet officia. Deserunt eu eiusmod ullamco Lorem sit culpa ea sint tempor excepteur veniam officia ullamco amet.\r\n",registered:"2020-02-12T09:56:32 -04:-30",latitude:17.98422,longitude:122.617922,tags:["ad","dolor","aliqua","adipisicing","aliquip","commodo","exercitation"],friends:[{id:0,name:"Barrett Russell"},{id:1,name:"Cheri Mccullough"},{id:2,name:"Ginger Bowman"}],greeting:"Hello, Bass Kerr! You have 10 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c1ce6d27e7ff4134f0",index:2,guid:"d3f1f552-ef6e-40d5-aece-e46b07d548aa",isActive:!0,balance:"$2,780.22",picture:"http://placehold.it/32x32",age:20,eyeColor:"brown",name:"Mcdowell Pratt",gender:"male",company:"COASH",email:"mcdowellpratt@coash.com",phone:"+1 (862) 541-2499",address:"240 Nautilus Avenue, Allentown, Massachusetts, 2464",about:"Veniam dolor ullamco magna dolor voluptate. Non quis voluptate duis culpa veniam reprehenderit. Ea aliquip aliqua ex nisi elit duis. Voluptate aliqua dolore reprehenderit est quis officia excepteur est irure consequat. Aliqua pariatur duis veniam amet aliquip ex ut minim deserunt esse eiusmod id veniam. Ipsum non ad excepteur dolore ad aliquip nulla Lorem eu quis dolore est proident. Culpa commodo dolore aliquip aliqua ad consequat consequat exercitation excepteur labore aute ut cupidatat dolor.\r\n",registered:"2014-10-02T06:06:07 -04:-30",latitude:55.478523,longitude:76.129863,tags:["reprehenderit","culpa","aute","esse","labore","dolor","enim"],friends:[{id:0,name:"Suarez Phelps"},{id:1,name:"Morgan Fletcher"},{id:2,name:"Francesca Schroeder"}],greeting:"Hello, Mcdowell Pratt! You have 2 unread messages.",favoriteFruit:"strawberry"},{_id:"5fa3c0c13e93c93ba97649b2",index:3,guid:"f6e91b4b-2069-4b34-88e5-f58baad6ee51",isActive:!0,balance:"$2,110.40",picture:"http://placehold.it/32x32",age:32,eyeColor:"green",name:"Gallagher Bentley",gender:"male",company:"NAMEGEN",email:"gallagherbentley@namegen.com",phone:"+1 (941) 423-2654",address:"629 Bartlett Street, Bedias, Indiana, 2968",about:"Adipisicing deserunt voluptate ex consequat laborum aliquip pariatur. Duis laboris do do officia sit mollit irure veniam amet voluptate magna. Officia cillum pariatur cillum adipisicing proident id et ea tempor excepteur Lorem. Incididunt amet cupidatat mollit do nostrud cupidatat esse et. Occaecat magna nulla elit occaecat sunt. Tempor et eu qui nisi minim exercitation exercitation dolore quis. Et nulla minim ea dolor.\r\n",registered:"2017-05-14T02:02:30 -05:-30",latitude:1.587604,longitude:6.25682,tags:["eu","Lorem","duis","dolore","non","eu","do"],friends:[{id:0,name:"Cummings Doyle"},{id:1,name:"Mcguire Price"},{id:2,name:"Alice Durham"}],greeting:"Hello, Gallagher Bentley! You have 10 unread messages.",favoriteFruit:"strawberry"},{_id:"5fa3c0c1dad024c6ca8f64cb",index:4,guid:"11179fe2-dae6-48ac-85fb-559d6036bda1",isActive:!1,balance:"$2,537.53",picture:"http://placehold.it/32x32",age:28,eyeColor:"blue",name:"Nunez Fuentes",gender:"male",company:"ZINCA",email:"nunezfuentes@zinca.com",phone:"+1 (911) 563-4000",address:"431 Irwin Street, Glenville, West Virginia, 1337",about:"Non nostrud cillum sint enim labore veniam. Sit aliquip deserunt ea magna. Anim exercitation laborum est ullamco deserunt. Veniam culpa excepteur sint sit incididunt esse ea sint culpa consectetur. Ullamco ex nisi dolor consequat occaecat deserunt est dolore amet pariatur et adipisicing ex. Nulla Lorem enim do in dolor aliquip ipsum consequat Lorem. Eiusmod velit id exercitation duis officia adipisicing eu ex commodo quis sunt duis.\r\n",registered:"2016-06-20T09:00:05 -05:-30",latitude:75.734338,longitude:-30.081131,tags:["anim","irure","non","quis","amet","aliqua","quis"],friends:[{id:0,name:"Shawna Kaufman"},{id:1,name:"Bates Atkinson"},{id:2,name:"Coffey Hays"}],greeting:"Hello, Nunez Fuentes! You have 5 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c112a81cfa00a82c32",index:5,guid:"a8c5a384-3be1-4ba9-a2ef-149189dd9eaf",isActive:!1,balance:"$3,366.97",picture:"http://placehold.it/32x32",age:39,eyeColor:"brown",name:"Lester Carson",gender:"male",company:"STOCKPOST",email:"lestercarson@stockpost.com",phone:"+1 (838) 542-2402",address:"847 Schenck Court, Cassel, Kansas, 4579",about:"Mollit excepteur aliqua mollit laboris pariatur cupidatat adipisicing aliquip eu ullamco sint. Consectetur id esse adipisicing deserunt deserunt nostrud officia cupidatat tempor enim dolor eu enim sint. In occaecat reprehenderit eu deserunt. Enim consectetur Lorem magna in ullamco sit pariatur.\r\n",registered:"2018-07-04T07:59:28 -05:-30",latitude:66.723935,longitude:103.606428,tags:["dolor","qui","aliquip","quis","sint","consequat","nisi"],friends:[{id:0,name:"Buchanan Howe"},{id:1,name:"Anderson Peck"},{id:2,name:"Shanna Vasquez"}],greeting:"Hello, Lester Carson! You have 8 unread messages.",favoriteFruit:"banana"},{_id:"5fa3c0c1ca2c998545579fb4",index:6,guid:"be7de9ea-526f-4bff-a25e-1a7137e7a20b",isActive:!0,balance:"$3,080.82",picture:"http://placehold.it/32x32",age:22,eyeColor:"brown",name:"Laverne Skinner",gender:"female",company:"VIASIA",email:"laverneskinner@viasia.com",phone:"+1 (911) 412-2767",address:"469 Linden Street, Healy, California, 6688",about:"Laborum ullamco nisi consectetur do aliquip officia labore pariatur labore sint ea ullamco. Aliquip cupidatat cillum veniam esse nostrud tempor tempor in do velit culpa. Sit anim excepteur nostrud laboris amet esse aliquip ea eiusmod sunt amet. Esse non magna sit proident sit enim. Ullamco eu proident pariatur excepteur culpa eiusmod aliquip dolor ullamco nulla aliquip esse. Do ipsum occaecat non exercitation incididunt consectetur laboris commodo minim ullamco fugiat consequat officia velit. Pariatur minim et Lorem ea do eu nostrud.\r\n",registered:"2019-02-07T01:58:28 -04:-30",latitude:-38.363674,longitude:-179.237354,tags:["aliqua","et","dolore","eu","dolor","amet","aliquip"],friends:[{id:0,name:"Davidson Wallace"},{id:1,name:"Fulton Mejia"},{id:2,name:"Gilliam Garrett"}],greeting:"Hello, Laverne Skinner! You have 4 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c1ca2c998545579fb4",index:6,guid:"be7de9ea-526f-4bff-a25e-1a7137e7a20b",isActive:!0,balance:"$3,080.82",picture:"http://placehold.it/32x32",age:22,eyeColor:"brown",name:"Laverne Skinner",gender:"female",company:"VIASIA",email:"laverneskinner@viasia.com",phone:"+1 (911) 412-2767",address:"469 Linden Street, Healy, California, 6688",about:"Laborum ullamco nisi consectetur do aliquip officia labore pariatur labore sint ea ullamco. Aliquip cupidatat cillum veniam esse nostrud tempor tempor in do velit culpa. Sit anim excepteur nostrud laboris amet esse aliquip ea eiusmod sunt amet. Esse non magna sit proident sit enim. Ullamco eu proident pariatur excepteur culpa eiusmod aliquip dolor ullamco nulla aliquip esse. Do ipsum occaecat non exercitation incididunt consectetur laboris commodo minim ullamco fugiat consequat officia velit. Pariatur minim et Lorem ea do eu nostrud.\r\n",registered:"2019-02-07T01:58:28 -04:-30",latitude:-38.363674,longitude:-179.237354,tags:["aliqua","et","dolore","eu","dolor","amet","aliquip"],friends:[{id:0,name:"Davidson Wallace"},{id:1,name:"Fulton Mejia"},{id:2,name:"Gilliam Garrett"}],greeting:"Hello, Laverne Skinner! You have 4 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c1ca2c998545579fb4",index:6,guid:"be7de9ea-526f-4bff-a25e-1a7137e7a20b",isActive:!0,balance:"$3,080.82",picture:"http://placehold.it/32x32",age:22,eyeColor:"brown",name:"Laverne Skinner",gender:"female",company:"VIASIA",email:"laverneskinner@viasia.com",phone:"+1 (911) 412-2767",address:"469 Linden Street, Healy, California, 6688",about:"Laborum ullamco nisi consectetur do aliquip officia labore pariatur labore sint ea ullamco. Aliquip cupidatat cillum veniam esse nostrud tempor tempor in do velit culpa. Sit anim excepteur nostrud laboris amet esse aliquip ea eiusmod sunt amet. Esse non magna sit proident sit enim. Ullamco eu proident pariatur excepteur culpa eiusmod aliquip dolor ullamco nulla aliquip esse. Do ipsum occaecat non exercitation incididunt consectetur laboris commodo minim ullamco fugiat consequat officia velit. Pariatur minim et Lorem ea do eu nostrud.\r\n",registered:"2019-02-07T01:58:28 -04:-30",latitude:-38.363674,longitude:-179.237354,tags:["aliqua","et","dolore","eu","dolor","amet","aliquip"],friends:[{id:0,name:"Davidson Wallace"},{id:1,name:"Fulton Mejia"},{id:2,name:"Gilliam Garrett"}],greeting:"Hello, Laverne Skinner! You have 4 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c1ca2c998545579fb4",index:6,guid:"be7de9ea-526f-4bff-a25e-1a7137e7a20b",isActive:!0,balance:"$3,080.82",picture:"http://placehold.it/32x32",age:22,eyeColor:"brown",name:"Laverne Skinner",gender:"female",company:"VIASIA",email:"laverneskinner@viasia.com",phone:"+1 (911) 412-2767",address:"469 Linden Street, Healy, California, 6688",about:"Laborum ullamco nisi consectetur do aliquip officia labore pariatur labore sint ea ullamco. Aliquip cupidatat cillum veniam esse nostrud tempor tempor in do velit culpa. Sit anim excepteur nostrud laboris amet esse aliquip ea eiusmod sunt amet. Esse non magna sit proident sit enim. Ullamco eu proident pariatur excepteur culpa eiusmod aliquip dolor ullamco nulla aliquip esse. Do ipsum occaecat non exercitation incididunt consectetur laboris commodo minim ullamco fugiat consequat officia velit. Pariatur minim et Lorem ea do eu nostrud.\r\n",registered:"2019-02-07T01:58:28 -04:-30",latitude:-38.363674,longitude:-179.237354,tags:["aliqua","et","dolore","eu","dolor","amet","aliquip"],friends:[{id:0,name:"Davidson Wallace"},{id:1,name:"Fulton Mejia"},{id:2,name:"Gilliam Garrett"}],greeting:"Hello, Laverne Skinner! You have 4 unread messages.",favoriteFruit:"apple"},{_id:"5fa3c0c1ca2c998545579fb4",index:6,guid:"be7de9ea-526f-4bff-a25e-1a7137e7a20b",isActive:!0,balance:"$3,080.82",picture:"http://placehold.it/32x32",age:22,eyeColor:"brown",name:"Laverne Skinner",gender:"female",company:"VIASIA",email:"laverneskinner@viasia.com",phone:"+1 (911) 412-2767",address:"469 Linden Street, Healy, California, 6688",about:"Laborum ullamco nisi consectetur do aliquip officia labore pariatur labore sint ea ullamco. Aliquip cupidatat cillum veniam esse nostrud tempor tempor in do velit culpa. Sit anim excepteur nostrud laboris amet esse aliquip ea eiusmod sunt amet. Esse non magna sit proident sit enim. Ullamco eu proident pariatur excepteur culpa eiusmod aliquip dolor ullamco nulla aliquip esse. Do ipsum occaecat non exercitation incididunt consectetur laboris commodo minim ullamco fugiat consequat officia velit. Pariatur minim et Lorem ea do eu nostrud.\r\n",registered:"2019-02-07T01:58:28 -04:-30",latitude:-38.363674,longitude:-179.237354,tags:["aliqua","et","dolore","eu","dolor","amet","aliquip"],friends:[{id:0,name:"Davidson Wallace"},{id:1,name:"Fulton Mejia"},{id:2,name:"Gilliam Garrett"}],greeting:"Hello, Laverne Skinner! You have 4 unread messages.",favoriteFruit:"apple"}];a["a"]=t}}]);
//# sourceMappingURL=chunk-0321a722.6419d451.js.map