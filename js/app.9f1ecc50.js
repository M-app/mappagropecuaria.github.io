(function(e){function t(t){for(var i,l,r=t[0],s=t[1],c=t[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},o={app:0},n=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[t.heading?a("v-row",{key:t.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[t.heading?a("v-subheader",[e._v(" "+e._s(t.heading)+" ")]):e._e()],1),a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[e._v("EDIT")])])],1):a("v-list-item",{key:t.text,attrs:{link:"",to:t.ruta}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.text)+" ")])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"primary darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[e._v("Sistema Agropecuaria")])])],1),a("v-content",[a("router-view")],1)],1)},n=[],l={data:function(){return{drawer:!0,items:[{icon:"mdi-apps",text:"Escritorio",ruta:"/"},{icon:"mdi-contacts",text:"Clientes",ruta:"/clientes"},{icon:"mdi-book",text:"Productos",ruta:"/productos"}]}}},r=l,s=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),m=a("40dc"),p=a("5bc1"),v=a("62ad"),f=a("a75b"),b=a("132d"),h=a("8860"),x=a("da13"),g=a("1800"),I=a("5d23"),_=a("f774"),y=a("0fd9"),k=a("e0c7"),w=a("2a7f"),V=Object(s["a"])(r,o,n,!1,null,null,null),C=V.exports;d()(V,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:p["a"],VCol:v["a"],VContent:f["a"],VIcon:b["a"],VList:h["a"],VListItem:x["a"],VListItemAction:g["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:_["a"],VRow:y["a"],VSubheader:k["a"],VToolbarTitle:w["a"]});var M=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("hola")])},O=[],j={name:"Inicio"},L=j,P=Object(s["a"])(L,T,O,!1,null,"b43e7b90",null),z=P.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"my-2 mx-2",attrs:{headers:e.headers,items:e.clientes,search:e.busqueda},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"indigo lighten-5"}},[a("v-toolbar-title",[e._v("Todos Los Clientes")]),a("v-text-field",{staticClass:"mx-8",attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.busqueda,callback:function(t){e.busqueda=t},expression:"busqueda"}}),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[e._v("Nuevo Cliente")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:e.editedItem.nombre,callback:function(t){e.$set(e.editedItem,"nombre",t)},expression:"editedItem.nombre"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Apellidos"},model:{value:e.editedItem.apellidos,callback:function(t){e.$set(e.editedItem,"apellidos",t)},expression:"editedItem.apellidos"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"DPI"},model:{value:e.editedItem.dpi,callback:function(t){e.$set(e.editedItem,"dpi",t)},expression:"editedItem.dpi"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Teléfono"},model:{value:e.editedItem.telefono,callback:function(t){e.$set(e.editedItem,"telefono",t)},expression:"editedItem.telefono"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"NIT"},model:{value:e.editedItem.nit,callback:function(t){e.$set(e.editedItem,"nit",t)},expression:"editedItem.nit"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Correo Electrónico"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"indigo accent-3"},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})},$=[],E=(a("c975"),a("a434"),{data:function(){return{dialog:!1,busqueda:"",headers:[{text:"Nombre",align:"start",value:"nombre"},{text:"Apellidos",value:"apellidos"},{text:"DPI",value:"dpi"},{text:"Teléfono",value:"telefono"},{text:"NIT",value:"nit"},{text:"Correo Electrónico",value:"email"},{text:"Acciones",value:"actions",sortable:!1}],clientes:[],editedIndex:-1,editedItem:{nombre:"",apellidos:"",dpi:"",telefono:"",nit:"",email:""},defaultItem:{nombre:"",apellidos:"",dpi:"",telefono:"",nit:"",email:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Producto":"Editar Producto"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.clientes=[{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Marcos Mauricio",apellidos:"Rivas López",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"},{nombre:"Miguel Estuardo",apellidos:"Tellez Morales",dpi:"2431588781301",telefono:"45458585",nit:"3025487-8",email:"correo@gmail.com"}]},editItem:function(e){this.editedIndex=this.clientes.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.clientes.indexOf(e);confirm("¿ Seguro Que Desea Eliminar Este Registro ?")&&this.clientes.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.clientes[this.editedIndex],this.editedItem):this.clientes.push(this.editedItem),this.close()}}}),S=E,A=a("8336"),N=a("b0af"),D=a("99d9"),q=a("a523"),B=a("8fea"),J=a("169a"),U=a("2fa4"),F=a("8654"),G=a("71d9"),H=Object(s["a"])(S,R,$,!1,null,null,null),Q=H.exports;d()(H,{VBtn:A["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VCol:v["a"],VContainer:q["a"],VDataTable:B["a"],VDialog:J["a"],VIcon:b["a"],VRow:y["a"],VSpacer:U["a"],VTextField:F["a"],VToolbar:G["a"],VToolbarTitle:w["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("hola")])},W=[],X={},Y=Object(s["a"])(X,K,W,!1,null,null,null),Z=Y.exports;i["a"].use(M["a"]);var ee=[{path:"/",name:"Home",component:z},{path:"/clientes",name:"Clientes",component:Q},{path:"/productos",name:"Productos",component:Z}],te=new M["a"]({mode:"history",base:"/",routes:ee}),ae=te,ie=a("f309");i["a"].use(ie["a"]);var oe=new ie["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:ae,vuetify:oe,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.9f1ecc50.js.map