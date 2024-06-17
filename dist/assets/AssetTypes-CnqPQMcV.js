import{v as d,x as c,T as p,m as l,c as o,y as m,n as r,z as y,A as f,F as _,M as h,G as T,w as u,H as v,I as k,J as b}from"./index--sCEAuLi.js";import{L as $}from"./ListPageHeader-CCzpUJRZ.js";import{R as C}from"./RouteTabs-CCnPZ2Af.js";const g={name:"asset-type-list",props:{entries:{type:Array,default:()=>[]},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},data(){return{}},components:{TaskTypeName:d,RowActionsCell:c,TableInfo:p},computed:{...l(["taskTypeMap"])},methods:{...o([]),sortTaskTypes(a=[]){const e=a.map(t=>this.taskTypeMap.get(t));return m(e)}}};var x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{staticClass:"name",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("asset_types.fields.name"))+" ")]),t("th",{staticClass:"task-types",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("asset_types.fields.task_types"))+" ")]),t("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.entries.length>0?t("tbody",{staticClass:"datatable-body"},e._l(e.entries,function(s){return t("tr",{key:s.id,staticClass:"datatable-row"},[t("td",{staticClass:"name"},[e._v(" "+e._s(s.name)+" ")]),(s.task_types||[]).length>0?t("td",{staticClass:"task-types"},e._l(e.sortTaskTypes(s.task_types),function(i){return t("span",{key:i.id,staticClass:"task-type-name flexrow-item"},[i.id?t("task-type-name",{attrs:{"task-type":i}}):e._e()],1)}),0):t("td",{staticClass:"task-types"},[e._v(" "+e._s(e.$t("asset_types.include_all"))+" ")]),t("row-actions-cell",{attrs:{"entry-id":s.id},on:{"edit-clicked":function(i){return e.$emit("edit-clicked",s)},"delete-clicked":function(i){return e.$emit("delete-clicked",s)}}})],1)}),0):e._e()])]),t("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),t("p",{staticClass:"has-text-centered nb-asset-types"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("asset_types.number",e.entries.length))+" ")])],1)},E=[],A=r(g,x,E,!1,null,"f1e1b425",null,null);const w=A.exports,M={name:"edit-asset-type-modal",mixins:[y],components:{Combobox:f,ComboboxBoolean:_,TaskTypeName:d,ModalFooter:h,TextField:T},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},assetTypeToEdit:{type:Object,default:()=>{}}},data(){return{form:{name:"",task_types:[]}}},computed:{...l(["taskTypes","taskTypeMap","assetTypes","assetTypeStatusOptions"]),isEditing(){return this.assetTypeToEdit&&this.assetTypeToEdit.id},availableTaskTypes(){const a=u(this.taskTypes.filter(e=>this.form.task_types.indexOf(e.id)===-1&&e.for_entity==="Asset"));return[{name:"+ Task Type",id:"-"},...a].map(e=>({label:e.name,value:e.id}))}},methods:{...o(["loadTaskTypes"]),removeTaskType(a){const e=this.form.task_types.indexOf(a);e>=0&&this.form.task_types.splice(e,1)},runConfirmation(){this.$emit("confirm",this.form)}},watch:{active(){this.active&&setTimeout(()=>{this.$refs.nameField.focus()},100)},assetTypeToEdit(){if(this.assetTypeToEdit.id){const a=this.assetTypeToEdit.task_types||[];this.form={name:this.assetTypeToEdit.name,task_types:[...a],archived:String(this.assetTypeToEdit.archived===!0)}}else this.form={name:"",task_types:[],archived:"false"}}}};var D=function(){var e=this,t=e._self._c;return t("div",{class:{modal:!0,"is-active":e.active}},[t("div",{staticClass:"modal-background",on:{click:function(s){return e.$emit("cancel")}}}),t("div",{staticClass:"modal-content"},[t("div",{staticClass:"box"},[e.assetTypeToEdit&&e.assetTypeToEdit.id?t("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("asset_types.edit_title"))+" "+e._s(e.assetTypeToEdit.name)+" ")]):t("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("asset_types.new_asset_type"))+" ")]),t("form",{on:{submit:function(s){s.preventDefault()}}},[t("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("asset_types.fields.name"),maxlength:30},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}}),e.isEditing?t("combobox-boolean",{attrs:{label:e.$t("main.archived")},on:{enter:e.runConfirmation},model:{value:e.form.archived,callback:function(s){e.$set(e.form,"archived",s)},expression:"form.archived"}}):e._e(),t("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("asset_types.fields.task_types"))+" ")]),t("div",{staticClass:"flexrow task-types mb1"},[e._l(e.form.task_types,function(s){return t("div",{key:s,staticClass:"flexrow-item mb1",on:{click:function(i){return e.removeTaskType(s)}}},[s?t("task-type-name",{attrs:{"task-type":e.taskTypeMap.get(s),deletable:!0}}):e._e()],1)}),e.availableTaskTypes.length>1?t("combobox",{staticClass:"flexrow-item mb1",attrs:{options:e.availableTaskTypes,"with-margin":!1},on:{input:s=>{e.taskTypeMap.get(s)&&e.form.task_types.push(s)}}}):e._e()],2)],1),t("modal-footer",{attrs:{"error-text":e.$t("asset_types.create_error"),"is-error":e.isError,"is-loading":e.isLoading},on:{confirm:e.runConfirmation,cancel:function(s){return e.$emit("cancel")}}})],1)])])},F=[],L=r(M,D,F,!1,null,"3d6e796a",null,null);const B=L.exports,R={name:"asset-types",components:{AssetTypeList:w,DeleteModal:v,EditAssetTypeModal:B,ListPageHeader:$,RouteTabs:C},data(){return{activeTab:"active",assetTypeToDelete:null,assetTypeToEdit:{},choices:[],errors:{del:!1,edit:!1,list:!1},modals:{del:!1,edit:!1},loading:{del:!1,edit:!1,list:!1},tabs:[{name:"active",label:this.$t("main.active")},{name:"archived",label:this.$t("main.archived")}]}},mounted(){this.activeTab=this.$route.query.tab||"active"},computed:{...l(["assetTypes","archivedAssetTypes","getAssetType","taskTypeMap"]),isActiveTab(){return this.activeTab==="active"},assetTypesList(){return this.isActiveTab?this.assetTypes:this.archivedAssetTypes},deleteText(){const a=this.assetTypeToDelete;return a?this.$t("asset_types.delete_text",{name:a.name}):""}},methods:{...o(["deleteAssetType","editAssetType","newAssetType","loadAssetTypes"]),confirmEditAssetType(a){let e="newAssetType";this.assetTypeToEdit&&this.assetTypeToEdit.id&&(e="editAssetType",a.id=this.assetTypeToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this[e](a).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(t=>{console.error(t),this.loading.edit=!1,this.errors.edit=!0})},confirmDeleteAssetType(){this.loading.del=!0,this.errors.del=!1,this.deleteAssetType(this.assetTypeToDelete).then(()=>{this.loading.del=!1,this.modals.del=!1}).catch(a=>{console.error(a),this.errors.del=!0,this.loading.del=!1})},onExportClicked(){const a=k.slugify(this.$t("asset_types.title")),t=[[this.$t("main.type"),this.$t("asset_types.fields.name"),this.$t("asset_types.fields.task_types")]].concat(this.assetTypes.map(s=>[s.type,s.name,s.task_types.length?s.task_types.map(i=>{var n;return(n=this.taskTypeMap.get(i))==null?void 0:n.name}).join(", "):this.$t("asset_types.include_all")]));b.buildCsvFile(a,t)},onNewClicked(){this.assetTypeToEdit={},this.errors.edit=!1,this.modals.edit=!0},onEditClicked(a){this.assetTypeToEdit=a,this.errors.edit=!1,this.modals.edit=!0},onDeleteClicked(a){this.assetTypeToDelete=a,this.errors.del=!1,this.modals.del=!0}},watch:{$route(){this.activeTab=this.$route.query.tab||"active"}},metaInfo(){return{title:`${this.$t("asset_types.title")} - Kitsu`}}};var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"asset-types page fixed-page"},[t("list-page-header",{attrs:{title:e.$t("asset_types.title"),"new-entry-label":e.$t("asset_types.new_asset_type"),"is-exportable":e.isActiveTab},on:{"export-clicked":e.onExportClicked,"new-clicked":e.onNewClicked}}),t("route-tabs",{staticClass:"mt2",attrs:{"active-tab":e.activeTab,tabs:e.tabs,"route-name":"asset-types"}}),t("asset-type-list",{staticClass:"asset-type-list",attrs:{entries:e.assetTypesList,"is-loading":e.loading.list,"is-error":e.errors.list},on:{"edit-clicked":e.onEditClicked,"delete-clicked":e.onDeleteClicked}}),t("edit-asset-type-modal",{attrs:{active:e.modals.edit,"is-loading":e.loading.edit,"is-error":e.errors.edit,"asset-type-to-edit":e.assetTypeToEdit},on:{cancel:function(s){e.modals.edit=!1},confirm:e.confirmEditAssetType}}),t("delete-modal",{attrs:{active:e.modals.del,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText,"error-text":e.$t("asset_types.delete_error")},on:{cancel:function(s){e.modals.del=!1},confirm:e.confirmDeleteAssetType}})],1)},O=[],H=r(R,N,O,!1,null,"f8af37ba",null,null);const G=H.exports;export{G as default};
//# sourceMappingURL=AssetTypes-CnqPQMcV.js.map