(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-032e124e"],{"2b6d":function(t,e,s){"use strict";s("5ee0")},"459c":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level page-header"},[s("div",{staticClass:"level-left"},[s("page-title",{attrs:{text:t.title}})],1),s("div",{staticClass:"level-right"},[s("button-simple",{staticClass:"level-item",attrs:{icon:"plus",text:t.newEntryLabel},on:{click:function(e){return t.$emit("new-clicked")}}})],1)])},i=[],a=s("2f62"),n=s("de40"),r=s("8d07");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){d(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function d(t,e,s){return e=m(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function m(t){var e=f(t,"string");return"symbol"===u(e)?e:String(e)}function f(t,e){if("object"!==u(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var o=s.call(t,e||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p={name:"list-page-header",components:{ButtonSimple:n["a"],PageTitle:r["a"]},props:{title:{type:String,default:""},newEntryLabel:{type:String,default:""}},computed:c({},Object(a["c"])([])),methods:c({},Object(a["b"])([])),watch:{}},y=p,b=s("2877"),T=Object(b["a"])(y,o,i,!1,null,"bf4864ae",null);e["a"]=T.exports},"5ee0":function(t,e,s){},"9b52":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"status-automations page fixed-page"},[s("list-page-header",{attrs:{title:t.$t("status_automations.title"),"new-entry-label":t.$t("status_automations.new_status_automation")},on:{"new-clicked":t.onNewClicked}}),s("status-automation-list",{attrs:{entries:t.statusAutomations,"is-editable":!0,"is-loading":t.loading.list,"is-error":t.errors.list},on:{"edit-clicked":t.onEditClicked,"delete-clicked":t.onDeleteClicked}}),s("edit-status-automation-modal",{attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"status-automation-to-edit":t.statusAutomationToEdit},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditStatusAutomation}}),s("delete-modal",{attrs:{active:t.modals.del,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText,"error-text":t.$t("status_automations.delete_error")},on:{cancel:function(e){t.modals.del=!1},confirm:t.confirmDeleteStatusAutomation}})],1)},i=[],a=s("2f62"),n=s("536b"),r=s("5f48"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[t.isEditing()?s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("status_automations.edit_title"))+" ")]):s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("status_automations.new_status_automation"))+" ")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.entity_title")))]),t.isEditing()?s("span",[t._v(" "+t._s(t.form.entityType)+" ")]):s("combobox",{attrs:{label:t.$t("status_automations.fields.entity_type"),options:t.entityTypeOptions,"locale-key-prefix":"status_automations.entity_types."},on:{enter:t.confirmClicked},model:{value:t.form.entityType,callback:function(e){t.$set(t.form,"entityType",e)},expression:"form.entityType"}}),s("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.in_title")))]),s("div",{staticClass:"flexrow"},[s("combobox-task-type",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.in_task_type"),"task-type-list":t.form.inEntityTaskTypes},on:{enter:t.confirmClicked},model:{value:t.form.inTaskTypeId,callback:function(e){t.$set(t.form,"inTaskTypeId",e)},expression:"form.inTaskTypeId"}}),s("combobox-status",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.in_task_status"),"task-status-list":t.productionTaskStatuses},on:{enter:t.confirmClicked},model:{value:t.form.inTaskStatusId,callback:function(e){t.$set(t.form,"inTaskStatusId",e)},expression:"form.inTaskStatusId"}})],1),s("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.out_title")))]),s("div",{staticClass:"flexrow"},[t.isEditing()||"asset"!=t.form.entityType?t._e():s("combobox",{staticClass:"flexrow-item margin-fix",attrs:{label:t.$t("status_automations.fields.out_field_type"),options:t.fieldTypeOptions,"locale-key-prefix":"status_automations.field_types."},on:{enter:t.confirmClicked},model:{value:t.form.outFieldType,callback:function(e){t.$set(t.form,"outFieldType",e)},expression:"form.outFieldType"}}),t.isEditing()&&"ready_for"==t.form.outFieldType?s("span",{staticClass:"flexrow-item"},[t._v(" Ready For ")]):t._e(),s("combobox-task-type",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.out_task_type"),"task-type-list":t.form.outEntityTaskTypes,"open-top":!0},on:{enter:t.confirmClicked},model:{value:t.form.outTaskTypeId,callback:function(e){t.$set(t.form,"outTaskTypeId",e)},expression:"form.outTaskTypeId"}}),"status"==t.form.outFieldType?s("combobox-status",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.out_task_status"),"task-status-list":t.productionTaskStatuses,"open-top":!0},on:{enter:t.confirmClicked},model:{value:t.form.outTaskStatusId,callback:function(e){t.$set(t.form,"outTaskStatusId",e)},expression:"form.outTaskStatusId"}}):t._e()],1)],1),s("modal-footer",{attrs:{"error-text":t.$t("status_automations.create_error"),"is-error":t.isError},on:{confirm:t.confirmClicked,cancel:function(e){return t.$emit("cancel")}}})],1)])])},l=[],c=s("d065"),d=s("992f"),m=s("e4fd"),f=s("56a0"),p=s("d5c9");function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){h(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function h(t,e,s){return e=k(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function k(t){var e=v(t,"string");return"symbol"===y(e)?e:String(e)}function v(t,e){if("object"!==y(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var o=s.call(t,e||"default");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var _={name:"edit-status-automation-modal",mixins:[c["a"]],components:{Combobox:d["a"],ComboboxTaskType:m["a"],ComboboxStatus:f["a"],ModalFooter:p["a"]},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},statusAutomationToEdit:{type:Object,default:function(){}},taskStatus:{type:Object,default:function(){}}},computed:T({},Object(a["c"])(["statusAutomations","statusAutomationsStatusOptions","assetTaskTypes","shotTaskTypes","productionTaskTypes","productionTaskStatuses"])),data:function(){return{entityTypeOptions:[{label:"asset",value:"asset"},{label:"shot",value:"shot"}],fieldTypeOptions:[{label:"status",value:"status"},{label:"ready_for",value:"ready_for"}],form:{entityType:"asset",mode:"status",inEntityTaskTypes:[],outEntityTaskTypes:[],inTaskTypeId:"",outTaskTypeId:"",inTaskStatusId:"",outTaskStatusId:""}}},methods:T(T({},Object(a["b"])([])),{},{confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.statusAutomationToEdit&&this.statusAutomationToEdit.id},setTaskTypes:function(t){"asset"===t?(this.form.inEntityTaskTypes=this.assetTaskTypes,this.form.outEntityTaskTypes=this.assetTaskTypes):"shot"===t&&(this.form.inEntityTaskTypes=this.shotTaskTypes,this.form.outEntityTaskTypes=this.shotTaskTypes)}}),watch:{statusAutomationToEdit:function(){if(this.statusAutomationToEdit){var t=[];"asset"===this.form.entityType?t=this.assetTaskTypes:"shot"===this.form.entityType&&(t=this.shotTaskTypes),this.form={entityType:this.isEditing()?this.statusAutomationToEdit.entity_type:"asset",inEntityTaskTypes:t,outEntityTaskTypes:t,inTaskTypeId:this.isEditing()?this.statusAutomationToEdit.in_task_type_id:t[0].id,inTaskStatusId:this.isEditing()?this.statusAutomationToEdit.in_task_status_id:this.productionTaskStatuses[0].id,outFieldType:this.isEditing()?this.statusAutomationToEdit.out_field_type:"status",outTaskTypeId:this.isEditing()?this.statusAutomationToEdit.out_task_type_id:t[1].id,outTaskStatusId:this.isEditing()?this.statusAutomationToEdit.out_task_status_id:this.productionTaskStatuses[1].id}}},"form.entityType":function(t){this.setTaskTypes(t),this.isEditing()||(this.form.inTaskTypeId=this.form.inEntityTaskTypes[0].id,this.form.inTaskStatusId=this.productionTaskStatuses[0].id,this.form.outTaskTypeId=this.form.outEntityTaskTypes[1].id,this.form.outTaskStatusId=this.productionTaskStatuses[1].id)},"form.outFieldType":function(t){"ready_for"===t?(this.form.outEntityTaskTypes=this.shotTaskTypes,this.form.outTaskTypeId=this.shotTaskTypes[1].id):"status"===t&&(this.setTaskTypes(this.form.entityType),this.form.outTaskTypeId=this.form.outEntityTaskTypes[1].id)}}},g=_,O=(s("2b6d"),s("2877")),S=Object(O["a"])(g,u,l,!1,null,"ed333d46",null),E=S.exports,w=s("459c");function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function A(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){C(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function C(t,e,s){return e=P(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function P(t){var e=$(t,"string");return"symbol"===j(e)?e:String(e)}function $(t,e){if("object"!==j(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var o=s.call(t,e||"default");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var I={name:"status-automations",components:{DeleteModal:r["a"],EditStatusAutomationModal:E,ListPageHeader:w["a"],StatusAutomationList:n["a"]},data:function(){return{modals:{edit:!1,del:!1},loading:{edit:!1,del:!1,list:!1},errors:{edit:!1,del:!1,list:!1},statusAutomationToDelete:null,statusAutomationToEdit:null}},computed:A(A({},Object(a["c"])(["statusAutomations"])),{},{deleteText:function(){var t=this.statusAutomationToDelete;return t?this.$t("custom_actions.delete_text",{name:t.name}):""}}),created:function(){var t=this;this.loading.list=!0,this.errors.list=!1,this.loadStatusAutomations((function(e){t.loading.list=!1,e&&(t.errors.list=!0)}))},methods:A(A({},Object(a["b"])(["deleteStatusAutomation","editStatusAutomation","loadTaskStatuses","loadStatusAutomations","newStatusAutomation"])),{},{confirmEditStatusAutomation:function(t){var e=this,s="newStatusAutomation";this.statusAutomationToEdit&&this.statusAutomationToEdit.id&&(s="editStatusAutomation",t.id=this.statusAutomationToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this[s](t).then((function(){e.loading.edit=!1,e.modals.edit=!1})).catch((function(t){console.error(t),e.errors.edit=!0,e.loading.edit=!1}))},confirmDeleteStatusAutomation:function(){var t=this;this.loading.del=!0,this.errors.del=!1,this.deleteStatusAutomation(this.statusAutomationToDelete).then((function(){t.loading.del=!1,t.modals.del=!1})).catch((function(e){console.error(e),t.errors.del=!0,t.loading.del=!1}))},onNewClicked:function(){this.statusAutomationToEdit={},this.errors.edit=!1,this.modals.edit=!0},onEditClicked:function(t){this.statusAutomationToEdit=t,this.errors.edit=!1,this.modals.edit=!0},onDeleteClicked:function(t){this.statusAutomationToDelete=t,this.errors.del=!1,this.modals.del=!0}}),watch:{$route:function(){this.handleModalsDisplay()}},metaInfo:function(){return{title:"".concat(this.$t("status_automations.title")," - Kitsu")}}},D=I,F=Object(O["a"])(D,o,i,!1,null,"b1ef43c8",null);e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-032e124e.21a40b65.js.map