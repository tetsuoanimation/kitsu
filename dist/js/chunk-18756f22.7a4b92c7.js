(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18756f22"],{"0729":function(t,e,s){},1173:function(t,e,s){},"16f1":function(t,e,s){},"226c":function(t,e,s){"use strict";s("e214")},"3af1":function(t,e,s){},"4a0f":function(t,e,s){"use strict";s("9eb4")},"5efb":function(t,e,s){"use strict";s("0729")},9355:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button",attrs:{title:t.title,href:t.path,target:t.target}},["plus"===t.icon?s("plus-icon",{staticClass:"icon is-small"}):t._e(),"download"===t.icon?s("download-icon",{staticClass:"icon is-small"}):t._e(),"upload"===t.icon?s("upload-icon",{staticClass:"icon is-small"}):t._e(),"list"===t.icon?s("list-icon",{staticClass:"icon is-small"}):t._e(),t.text?s("span",{staticClass:"text is-hidden-touch"},[t._v(" "+t._s(t.text)+" ")]):t._e()],1)},n=[],a=s("0a35"),o={name:"button-href-link",components:{DownloadIcon:a["v"],ListIcon:a["J"],PlusIcon:a["W"],UploadIcon:a["mb"]},props:{text:{default:"",type:String},path:{default:"",type:String},icon:{default:"",type:String},title:{default:"",type:String},styleclass:{default:"",type:String},target:{default:"_self",type:String}}},r=o,c=(s("4a0f"),s("2877")),l=Object(c["a"])(r,i,n,!1,null,"ebbaf58c",null);e["a"]=l.exports},"9eb4":function(t,e,s){},ac09:function(t,e,s){"use strict";s("3af1")},c2ca:function(t,e,s){"use strict";s("1173")},e214:function(t,e,s){},e64a:function(t,e,s){"use strict";s("16f1")},fd5f:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breakdown page"},[s("div",{staticClass:"breakdown-columns"},[s("div",{staticClass:"breakdown-column casting-column"},[s("div",{staticClass:"flexrow mb1"},[t.isEpisodeCasting?s("div",{},[s("h2",{staticClass:"subtitle mt05"},[t._v("Episode Casting")])]):t._e(),t.isEpisodeCasting?t._e():s("combobox-styled",{staticClass:"mr1",attrs:{label:t.$t("main.for"),options:t.castingTypeOptions},model:{value:t.castingType,callback:function(e){t.castingType=e},expression:"castingType"}}),t.isShotCasting?s("combobox-styled",{attrs:{label:t.$t("shots.fields.sequence"),options:t.castingSequencesOptions},model:{value:t.sequenceId,callback:function(e){t.sequenceId=e},expression:"sequenceId"}}):t._e(),t.isAssetCasting?s("combobox-styled",{attrs:{label:t.$t("tasks.fields.asset_type"),options:t.castingAssetTypesOptions},model:{value:t.assetTypeId,callback:function(e){t.assetTypeId=e},expression:"assetTypeId"}}):t._e(),s("span",{staticClass:"filler"}),s("show-infos-button",{staticClass:"flexrow-item",attrs:{"is-breakdown":!0}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.isTextMode?t.$t("breakdown.picture_mode"):t.$t("breakdown.text_mode"),icon:"type","is-on":t.isTextMode,"is-responsive":!0},on:{click:t.toggleTextMode}}),t.isCurrentUserManager?s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("main.csv.import_file"),icon:"upload","is-responsive":!0},on:{click:t.showImportModal}}):t._e(),t.isCurrentUserManager?s("button-href-link",{staticClass:"flexrow-item",attrs:{title:t.$t("main.csv.export_file"),icon:"download","is-responsive":!0,path:t.exportUrlPath}}):t._e()],1),t.isLoading?s("spinner",{staticClass:"mt1"}):s("div",{staticClass:"mt1"},[s("div",{staticClass:"header flexrow"},[s("div",{staticClass:"entity-header flexrow-item"},[t._v(" "+t._s(t.$t("shots.fields.name"))+" ")]),s("div",{staticClass:"standby-header flexrow-item"},[t._v(" "+t._s(t.$t("breakdown.fields.standby"))+" ")]),t.isShowInfosBreakdown?t._e():s("div",{staticClass:"description-header flexrow-item"},[t._v(" "+t._s(t.$t("shots.fields.description"))+" ")]),t._l(t.visibleMetadataDescriptors,(function(e){return t.isShowInfosBreakdown?t._e():s("div",{key:"descriptor-header-"+e.id,staticClass:"descriptor-header flexrow-item"},[t._l(t.descriptorCurrentDepartments(e),(function(t){return s("department-name",{key:t.id,style:{padding:"0px 0px"},attrs:{department:t,"only-dot":!0}})})),s("span",{staticClass:"flexrow-item descriptor-name"},[t._v(" "+t._s(e.name)+" ")])],2)})),t.isShowInfosBreakdown?s("div",{staticClass:"casting-header flexrow-item"},[t._v(" Casting ")]):t._e()],2),t._l(t.castingEntities,(function(e){return s("shot-line",{key:e.id,attrs:{entity:e,"preview-file-id":e.preview_file_id,selected:t.selection[e.id],name:"all"===t.sequenceId?e.sequence_name+" / "+e.name:e.name,assets:t.castingByType[e.id]||[],"read-only":!t.isCurrentUserManager,"text-mode":t.isTextMode,"metadata-descriptors":t.metadataDescriptors,"metadata-display-headers":t.metadataDisplayHeaders},on:{"edit-label":t.onEditLabelClicked,"remove-one":t.removeOneAsset,"remove-ten":t.removeTenAssets,click:t.selectEntity,"metadata-changed":t.onMetadataChanged,"description-changed":t.onDescriptionChanged,"standby-changed":t.onStandbyChanged}})}))],2)],1),t.isCurrentUserManager?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onAssetListScroll,expression:"onAssetListScroll"}],ref:"asset-list",staticClass:"breakdown-column assets-column"},[s("h2",{staticClass:"flexrow subtitle"},[t._v(" "+t._s(t.$t("breakdown.all_assets"))+" ")]),s("div",{staticClass:"flexrow mb1 mt0"},[s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("assets.new_asset"),icon:"plus"},on:{click:function(e){t.modals.isNewDisplayed=!0}}}),t.isTVShow?s("button-simple",{staticClass:"flexrow-item",attrs:{text:t.$t("assets.only_current_episode"),"is-on":t.isOnlyCurrentEpisode},on:{click:function(e){t.isOnlyCurrentEpisode=!t.isOnlyCurrentEpisode}}}):t._e()],1),s("div",{staticClass:"filters-area flexrow"},[s("search-field",{ref:"search-field",staticClass:"flexrow-item",on:{change:t.onSearchChange}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("entities.build_filter.title"),icon:"funnel"},on:{click:function(e){t.modals.isBuildFilterDisplayed=!0}}})],1),t.isAssetsLoading?s("spinner"):t._l(t.availableAssetsByType,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ")]),s("div",{staticClass:"asset-list"},t._l(e,(function(e){return s("available-asset-block",{key:e.id,attrs:{asset:e,active:Object.keys(t.selection).length>0,"text-mode":t.isTextMode},on:{"add-one":t.addOneAsset,"add-ten":t.addTenAssets}})})),1)])}))],2):t._e()]),s("import-render-modal",{attrs:{active:t.modals.isImportRenderDisplayed,"is-loading":t.loading.importing,"is-error":t.errors.importing,"import-error":t.errors.importingError,"parsed-csv":t.parsedCSV,"form-data":t.importCsvFormData,columns:t.renderColumns,dataMatchers:t.dataMatchers,database:t.filteredCasting,"disable-update":!0},on:{reupload:t.resetImport,cancel:t.hideImportRenderModal,confirm:t.uploadImportFile}}),s("import-modal",{ref:"import-modal",attrs:{active:t.modals.importing,"is-loading":t.loading.importing,"is-error":t.errors.importing,"form-data":t.importCsvFormData,columns:t.csvColumns,"optional-columns":t.optionalCsvColumns},on:{cancel:t.hideImportModal,confirm:t.renderImport}}),s("edit-label-modal",{ref:"edit-label-modal",attrs:{active:t.modals.isEditLabelDisplayed,"is-loading":t.loading.editLabel,"is-error":t.loading.editError,asset:t.editedAsset,label:t.editedAssetLinkLabel},on:{cancel:function(e){t.modals.isEditLabelDisplayed=!1},confirm:t.confirmEditLabel}}),s("build-filter-modal",{ref:"build-filter-modal",attrs:{active:t.modals.isBuildFilterDisplayed},on:{confirm:t.confirmBuildFilter,cancel:function(e){t.modals.isBuildFilterDisplayed=!1}}}),s("edit-asset-modal",{ref:"edit-asset-modal",attrs:{active:t.modals.isNewDisplayed,"asset-to-edit":{},"is-error":t.errors.edit,"is-loading":t.loading.edit,"is-loading-stay":t.loading.stay,"is-success":t.success.edit},on:{confirm:t.confirmNewAsset,confirmAndStay:t.confirmNewAssetStay,cancel:function(e){t.modals.isNewDisplayed=!1}}}),s("delete-modal",{attrs:{active:t.modals.isRemoveConfirmationDisplayed,"delete-button-text":t.$t("breakdown.remove.confirm"),"error-text":t.$t("breakdown.remove.error"),"is-loading":t.loading.remove,"is-error":t.loading.error,text:t.$t("breakdown.remove.text")},on:{confirm:t.confirmAssetRemoval,cancel:function(e){t.modals.isRemoveConfirmationDisplayed=!1}}})],1)},n=[],a=s("2f62"),o=s("3657"),r=s("3455"),c=s("cf78"),l=s("5097"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.textMode?s("div",{staticClass:"asset-text flexrow-item flexrow"},[s("span",{staticClass:"asset-text-name flexrow-item"},[t._v(" "+t._s(t.asset.name)+" ")]),s("span",{staticClass:"modify-asset flexrow-item",on:{click:t.addOneAsset}},[t._v(" + 1 ")])]):s("div",{class:{asset:!0,active:t.active},attrs:{id:"casting-"+t.asset.id,title:t.asset.name}},[s("div",{staticClass:"asset-add",on:{click:t.addOneAsset}},[t._v(" + 1 ")]),s("div",{staticClass:"asset-add-10",on:{click:t.addTenAssets}},[t._v(" + 10 ")]),t.asset.preview_file_id.length>0?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+t.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}],attrs:{alt:""}})]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[t._v(" "+t._s(t.asset.name)+" ")])])])},u=[],p={name:"available-asset-block",props:{asset:{default:function(){return{id:"",name:""}},type:Object},active:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean}},computed:{},methods:{addOneAsset:function(t){this.active&&this.$emit("add-one",this.asset.id)},addTenAssets:function(t){this.active&&this.$emit("add-ten",this.asset.id)}}},h=p,m=(s("c2ca"),s("2877")),f=Object(m["a"])(h,d,u,!1,null,"24a9275a",null),y=f.exports,g=s("c31e"),v=s("9355"),b=s("de40"),C=s("9751"),_=s("5f48"),w=s("813f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box content"},[s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("breakdown.edit_label"))+" ")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("combobox",{directives:[{name:"focus",rawName:"v-focus"}],ref:"typeField",attrs:{label:t.$t("breakdown.label"),options:t.typeOptions},on:{enter:t.confirm},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),s("modal-footer",{attrs:{"is-error":t.isError,"is-loading":t.isLoading},on:{confirm:t.confirm,cancel:function(e){return t.$emit("cancel")}}})],1)])])])},E=[],O=s("d065"),k=s("992f"),x=s("d5c9");function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function A(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?A(Object(s),!0).forEach((function(e){M(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function M(t,e,s){return e=D(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function D(t){var e=L(t,"string");return"symbol"===I(e)?e:String(e)}function L(t,e){if("object"!==I(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==I(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var j={name:"edit-label-modal",mixins:[O["a"]],components:{Combobox:k["a"],ModalFooter:x["a"]},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},label:{type:String}},mounted:function(){this.form.label=this.label},data:function(){return{asset:null,form:{label:"animate"},typeOptions:[{label:this.$t("breakdown.options.animate"),value:"animate"},{label:this.$t("breakdown.options.fixed"),value:"fixed"}]}},computed:T({},Object(a["c"])([])),methods:T(T({},Object(a["b"])([])),{},{confirm:function(){return this.$emit("confirm",this.form)}}),watch:{label:function(){this.form.label=this.label}}},$=j,P=(s("5efb"),Object(m["a"])($,S,E,!1,null,"f516136e",null)),q=P.exports,B=s("4918"),F=s("440f"),N=s("4d04"),R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{shot:!0,selected:t.selected,unselectable:!0,stdby:!!t.entity&&t.entity.is_casting_standby,"text-mode":t.textMode},attrs:{id:t.entity.id},on:{click:function(e){return t.onClicked(e)}}},[s("div",{staticClass:"flexrow"},[s("span",{staticClass:"flexrow flexrow-item"},[s("entity-thumbnail",{attrs:{entity:{},height:30,"empty-width":40,"empty-height":30,"preview-file-id":t.previewFileId}})],1),s("div",{staticClass:"shot-name flexrow-item"},[t._v(" "+t._s(t.name)+" ")]),s("div",{staticClass:"standby-column flexrow-item"},[s("input",{style:[t.isCurrentUserManager?{cursor:"pointer"}:{cursor:"auto"}],attrs:{type:"checkbox",disabled:!t.isCurrentUserManager},domProps:{checked:!!t.entity&&t.entity.is_casting_standby},on:{input:function(e){return t.onStandbyChanged(t.entity,e)}}})]),t.isShowInfosBreakdown?t._e():s("div",{staticClass:"description-column flexrow-item"},[t.readOnly?s("div",{staticClass:"tooltip-text",domProps:{innerHTML:t._s(t.compileMarkdown(t.entity.description))}}):s("textarea",{ref:"text",staticClass:"tooltip-editor",domProps:{value:t.entity.description},on:{input:function(e){return t.onDescriptionChanged(t.entity,e)}}})]),t._l(t.visibleMetadataDescriptors,(function(e,i){return t.isShowInfosBreakdown?t._e():s("div",{key:"desc"+t.entity.id+"-"+e.id,staticClass:"metadata-descriptor flexrow-item",attrs:{title:t.entity.data?t.entity.data[e.field_name]:""}},[0===e.choices.length&&(t.isCurrentUserManager||t.isSupervisorInDepartments(e.departments))?s("input",{staticClass:"input-editor",domProps:{value:t.getMetadataFieldValue(e,t.entity)},on:{input:function(s){return t.onMetadataFieldChanged(t.entity,e,s)},keyup:function(e){return e.ctrlKey?function(e){return t.onInputKeyUp(e,t.getIndex(t.i,t.k),i)}.apply(null,arguments):null}}}):e.choices.length>0&&t.getDescriptorChecklistValues(e).length>0?s("div",{staticClass:"metadata-value selectable"},t._l(t.getDescriptorChecklistValues(e),(function(i,n){return s("p",{key:t.entity.id+"-"+e.id+"-"+n+"-"+i.text+"-div"},[s("input",{style:[t.isCurrentUserManager||t.isSupervisorInDepartments(e.departments)?{cursor:"pointer"}:{cursor:"auto"}],attrs:{type:"checkbox",id:t.entity.id+"-"+e.id+"-"+n+"-"+i.text+"-input",disabled:!(t.isCurrentUserManager||t.isSupervisorInDepartments(e.departments))},domProps:{checked:t.getMetadataChecklistValues(e,t.entity)[i.text]},on:{change:function(s){return t.onMetadataChecklistChanged(t.entity,e,i.text,s)}}}),s("label",{style:[t.isCurrentUserManager||t.isSupervisorInDepartments(e.departments)?{cursor:"pointer"}:{cursor:"auto"}],attrs:{for:t.entity.id+"-"+e.id+"-"+n+"-"+i.text+"-input"}},[t._v(" "+t._s(i.text)+" ")])])})),0):t.isCurrentUserManager||t.isSupervisorInDepartments(e.departments)?s("span",{staticClass:"select"},[s("select",{staticClass:"select-input",on:{keyup:function(e){return e.ctrlKey?function(e){return t.onInputKeyUp(e,t.getIndex(t.i,t.k),i)}.apply(null,arguments):null},change:function(s){return t.onMetadataFieldChanged(t.entity,e,s)}}},t._l(t.getDescriptorChoicesOptions(e),(function(i,n){return s("option",{key:"desc-value-"+t.entity.id+"-"+e.id+"-"+n+"-"+i.label+"-"+i.value,domProps:{value:i.value,selected:t.getMetadataFieldValue(e,t.entity)===i.value}},[t._v(" "+t._s(i.label)+" ")])})),0)]):s("span",{staticClass:"metadata-value selectable"},[t._v(" "+t._s(t.getMetadataFieldValue(e,t.entity))+" ")])])})),t.isShowInfosBreakdown?s("div",{staticClass:"asset-list flexrow-item"},[t._l(t.assets,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"asset-type-line flexrow"},[s("span",{staticClass:"asset-type-name flexrow-item"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ("+t._s(e.reduce((function(t,e){return t+e.nb_occurences}),0))+") ")]),s("div",{staticClass:"asset-type-items flexrow-item"},t._l(e,(function(e){return s("asset-block",{key:e.id,staticClass:"flexrow-item",attrs:{asset:e,"nb-occurences":e.nb_occurences,"read-only":t.readOnly,"text-mode":t.textMode},on:{"edit-label":t.onEditLabelClicked,"remove-one":t.removeOneAsset,"remove-ten":t.removeTenAssets}})})),1)])})),0===t.assets.length?s("div",{staticClass:"asset-type-line flexrow empty mt05 mb05"},[t._v(" "+t._s(t.$t("breakdown.empty"))+" ")]):t._e()],2):t._e()],2)])},U=[],V=s("66be"),K=s("bd69"),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.textMode?s("div",{staticClass:"asset-text flexrow-item flexrow"},[s("span",{staticClass:"asset-text-name flexrow-item"},[t._v(" "+t._s(t.asset.name)+" ("+t._s(t.nbOccurences)+") ")]),t.readOnly?t._e():s("span",{staticClass:"modify-asset flexrow-item",on:{click:t.removeOneAsset}},[t._v(" - 1 ")])]):s("div",{class:{asset:!0,big:!0,casted:!0,active:t.active,labelled:!0},attrs:{title:t.asset.name+" ("+t.nbOccurences+")"}},[s("div",{staticClass:"asset-wrapper"},[t.readOnly?t._e():s("div",{staticClass:"asset-add",on:{click:t.removeOneAsset}},[t._v(" - 1 ")]),t.readOnly?t._e():s("div",{staticClass:"asset-add-10",on:{click:t.removeTenAssets}},[t._v(" - 10 ")]),t.asset.preview_file_id?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+t.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}],attrs:{alt:""}}),t.nbOccurences>1?s("span",{staticClass:"nb-occurences"},[t._v(" "+t._s(t.nbOccurences)+" ")]):t._e()]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[t._v(" "+t._s(t.shortenName(t.asset.name))+" ("+t._s(t.nbOccurences)+") ")])])]),s("div",{staticClass:"asset-label",attrs:{label:t.asset.label},on:{click:t.onEditLabelClicked}},[t._v(" "+t._s(t.asset.label||t.$t("breakdown.options.animate"))+" ")])])},z=[],J=s("8c97"),G={name:"asset-block",components:{},data:function(){return{initialLoading:!0,loading:{EditLabel:!1}}},props:{asset:{default:function(){return{id:"",name:""}},type:Object},nbOccurences:{default:1,type:Number},active:{default:!0,type:Boolean},readOnly:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean}},computed:{},methods:{removeOneAsset:function(t){this.$emit("remove-one",this.asset.asset_id,this.nbOccurences)},removeTenAssets:function(t){this.$emit("remove-ten",this.asset.asset_id,this.nbOccurences)},shortenName:function(t){return J["a"].shortenText(t,13)},onEditLabelClicked:function(){this.readOnly||this.$emit("edit-label",this.asset,this.asset.label)}}},Q=G,W=(s("e64a"),Object(m["a"])(Q,H,z,!1,null,"2b86ceed",null)),X=W.exports,Y=s("bb21");function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function et(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(s),!0).forEach((function(e){st(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):tt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function st(t,e,s){return e=it(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function it(t){var e=nt(t,"string");return"symbol"===Z(e)?e:String(e)}function nt(t,e){if("object"!==Z(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==Z(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var at={name:"shot-line",mixins:[l["a"],K["a"]],components:{AssetBlock:X,EntityThumbnail:Y["a"]},props:{entity:{default:function(){},type:Object},previewFileId:{default:"",type:String},selected:{default:!1,type:Boolean},name:{default:"",type:String},assets:{default:function(){return[]},type:Array},readOnly:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean},metadataDescriptors:{default:function(){return[]},type:Array},metadataDisplayHeaders:{default:function(){},type:Object}},computed:et({},Object(a["c"])(["isCurrentUserManager","isShowInfosBreakdown"])),methods:{onClicked:function(t){this.$emit("click",this.entity.id,t)},onEditLabelClicked:function(t,e){this.$emit("edit-label",t,e,this.entity.id)},removeOneAsset:function(t,e){this.$emit("remove-one",t,this.entity.id,e)},removeTenAssets:function(t,e){this.$emit("remove-ten",t,this.entity.id,e)},onDescriptionChanged:function(t,e){this.$emit("description-changed",t,e.target.value)},onStandbyChanged:function(t,e){this.$emit("standby-changed",t,e.target.checked)},compileMarkdown:function(t){return Object(V["d"])(t)}}},ot=at,rt=(s("ac09"),Object(m["a"])(ot,R,U,!1,null,"49a398e5",null)),ct=rt.exports,lt=s("0e99"),dt=s("be83"),ut=s("5af2");function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function ht(t){return gt(t)||yt(t)||ft(t)||mt()}function mt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ft(t,e){if(t){if("string"===typeof t)return vt(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?vt(t,e):void 0}}function yt(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function gt(t){if(Array.isArray(t))return vt(t)}function vt(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function bt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function Ct(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(s),!0).forEach((function(e){_t(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):bt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function _t(t,e,s){return e=wt(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function wt(t){var e=St(t,"string");return"symbol"===pt(e)?e:String(e)}function St(t,e){if("object"!==pt(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==pt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var Et={name:"breakdown",mixins:[l["a"]],components:{AvailableAssetBlock:y,BuildFilterModal:g["a"],ButtonHrefLink:v["a"],ButtonSimple:b["a"],ComboboxStyled:C["a"],DeleteModal:_["a"],DepartmentName:ut["a"],EditAssetModal:w["a"],EditLabelModal:q,ImportModal:F["a"],ImportRenderModal:B["a"],SearchField:N["a"],ShotLine:ct,ShowInfosButton:lt["a"],Spinner:dt["a"]},data:function(){return{assetTypeId:"",castingType:"shot",editedAsset:null,editedEntityId:null,editedAssetLinkLabel:null,episodeId:"",importCsvFormData:{},isLocked:!1,isLoading:!1,isOnlyCurrentEpisode:!1,isTextMode:!1,removalData:{},selection:{},sequenceId:"",errors:{edit:!1,editLabel:!1,importing:!1,importingError:null,remove:!1,stay:!1},loading:{edit:!1,editLabel:!1,importing:!1,remove:!1,stay:!1},modals:{isBuildFilterDisplayed:!1,isEditLabelDisplayed:!1,isNewDisplayed:!1,isImportRenderDisplayed:!1,isRemoveConfirmationDisplayed:!1,importing:!1},success:{edit:!1},optionalCsvColumns:["Label"],parsedCSV:[]}},mounted:function(){this.isLoading||this.reset(),this.setLastProductionScreen("breakdown"),this.isTextMode="true"===localStorage.getItem("breakdown:text-mode"),window.addEventListener("keydown",this.onKeyDown,!1)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)},computed:Ct(Ct({},Object(a["c"])(["assetMap","assetMetadataDescriptors","assetsByType","casting","castingAssetTypeAssets","castingAssetTypesOptions","castingByType","castingCurrentShot","castingEpisodes","castingSequenceShots","castingSequencesOptions","currentEpisode","currentProduction","departmentMap","displayedShots","episodeMap","episodes","isAssetsLoading","isCurrentUserManager","isShotsLoading","isShowInfosBreakdown","isTVShow","sequenceMap","sequences","shotMap","shotMetadataDescriptors"])),{},{castingTypeOptions:function(){var t=[{label:this.$t("assets.title"),value:"asset"}];return(!this.isTVShow||this.currentEpisode&&"main"!==this.currentEpisode.id)&&t.unshift({label:this.$t("shots.title"),value:"shot"}),t},availableAssetsByType:function(){var t=this,e=[];return this.assetsByType.forEach((function(s){var i=s.filter((function(t){return!t.canceled}));t.isTVShow&&t.isOnlyCurrentEpisode&&(i=s.filter((function(e){return"main"!==t.currentEpisode.id?e.episode_id===t.currentEpisode.id:!e.episode_id}))),i.length>0&&e.push(i)})),e},exportUrlPath:function(){var t="/api/export/csv/projects/".concat(this.currentProduction.id,"/casting.csv"),e=!1;return this.currentEpisode&&(t+="?episode_id=".concat(this.currentEpisode.id),e=!0),this.isShotCasting&&(t+="".concat(e?"&":"?","is_shot_casting=").concat(this.isShotCasting)),t},isEpisodeCasting:function(){return this.currentEpisode&&"all"===this.currentEpisode.id},isAssetCasting:function(){return!this.isEpisodeCasting&&"asset"===this.castingType},isShotCasting:function(){return!this.isEpisodeCasting&&"shot"===this.castingType},castingEntities:function(){var t=this;return this.isEpisodeCasting?this.castingEpisodes:this.isShotCasting?this.castingSequenceShots:this.isTVShow&&"main"!==this.currentEpisode.id?this.castingAssetTypeAssets.filter((function(e){return e.episode_id===t.currentEpisode.id||e.casting_episode_ids.includes(t.currentEpisode.id)})):this.isTVShow&&"main"===this.currentEpisode.id?this.castingAssetTypeAssets.filter((function(t){return!t.episode_id})):this.castingAssetTypeAssets},editLabelModal:function(){return this.$refs["edit-label-modal"]},filteredCasting:function(){var t=this,e={};return this.castingEntities.forEach((function(s){t.castingByType[s.id]&&t.castingByType[s.id].forEach((function(t){t.forEach((function(t){var s="".concat(t.asset_name).concat(t.asset_type_name).concat(t.name);e[s]=!0}))}))})),e},csvColumns:function(){return this.isTVShow?["Episode","Parent","Name","Asset Type","Asset","Occurences"]:["Parent","Name","Asset Type","Asset","Occurences"]},renderColumns:function(){return[].concat(ht(this.csvColumns),ht(this.optionalCsvColumns))},dataMatchers:function(){return this.isTVShow?["Episode","Name","Asset Type","Asset"]:["Name","Asset Type","Asset"]},metadataDescriptors:function(){return this.isEpisodeCasting?[]:this.isShotCasting?this.shotMetadataDescriptors:this.assetMetadataDescriptors},metadataDisplayHeaders:function(){return this.isEpisodeCasting?{}:this.isShotCasting?{fps:!1,frameIn:!1,frameOut:!1,frames:!1,estimation:!1,maxRetakes:!1,resolution:!1,timeSpent:!1}:{estimation:!1,readyFor:!1,timeSpent:!1}}}),methods:Ct(Ct({},Object(a["b"])(["addAssetToCasting","editEpisode","editShot","editAsset","displayMoreAssets","loadEpisodeCasting","loadEpisodes","loadAssetCasting","loadAssets","loadShotCasting","loadShots","newAsset","removeAssetFromCasting","saveCasting","setAssetLinkLabel","setAssetSearch","setCastingEpisodes","setCastingAssetType","setCastingAssetTypes","setCastingEpisode","setCastingForProductionEpisodes","setCastingSequence","setCurrentEpisode","setEntityCasting","setLastProductionScreen","uploadCastingFile"])),{},{reset:function(){var t=this;if(!this.isTVShow){var e=Ct({},this.$route);e&&e.params&&e.params.episode_id&&(e.name="breakdown",e.params.episode_id=null,this.$router.push(e))}this.isLoading=!0,setTimeout((function(){t.reloadEntities()}),100)},reloadEntities:function(){var t=this;this.isLoading=!0,this.loadShots((function(){t.isTVShow?(t.currentEpisode&&(t.episodeId=t.currentEpisode.id),t.setCastingEpisode(t.episodeId),t.setCastingForProductionEpisodes()):t.setCastingEpisode(null),t.loadAssets(!0).then((function(){t.isLoading=!1,t.displayMoreAssets(),t.setCastingAssetTypes(),t.assetTypeId&&t.setCastingAssetType(t.assetTypeId),t.resetSelection(),t.currentEpisode&&"main"===t.currentEpisode.id&&(t.castingType="asset")}))}))},resetSelection:function(){var t={};this.isEpisodeCasting?this.castingEpisodes.forEach((function(e){t[e.id]=!1})):this.isShotCasting?this.castingSequenceShots.forEach((function(e){t[e.id]=!1})):this.castingAssetTypeAssets.forEach((function(e){t[e.id]=!1})),this.selection=t},confirmBuildFilter:function(t){this.modals.isBuildFilterDisplayed=!1,this.$refs["search-field"].setValue(t),this.onSearchChange(t)},onSearchChange:function(t){this.setAssetSearch(t),this.displayMoreAssets(),this.displayMoreAssets()},selectEntity:function(t,e){var s=Ct({},this.selection);e.ctrlKey||e.metaKey||e.shitKey||this.clearSelection(),this.previousEntityId&&e.shiftKey&&this.selectRange(this.previousEntityId,t),this.previousEntityId&&e.shiftKey||(this.previousEntityId=t);var i=Object.keys(s).filter((function(t){return s[t]})).length;!s[t]||i>1&&!e.ctrlKey&&!e.metaKey?this.selection[t]=!0:s[t]&&(e.ctrlKey||e.metaKey)&&(this.selection[t]=!1)},clearSelection:function(){var t=this;Object.keys(this.selection).filter((function(e){return t.selection[e]})).forEach((function(e){t.selection[e]=!1}))},selectRange:function(t,e){var s=this,i=Object.keys(this.selection),n=i.findIndex((function(e){return e===t})),a=i.findIndex((function(t){return t===e})),r=[];r=n<a?Object(o["v"])(n,a):Object(o["v"])(a,n),r.forEach((function(t){t>=0&&(s.selection[i[t]]=!0)}))},setLock:function(){var t=this;this.$options.lockTimeout||(this.$options.lockTimeout=setTimeout((function(){t.isLocked=!1}),3e3))},addOneAsset:function(t){var e=this;this.isLocked=!0,Object.keys(this.selection).filter((function(t){return e.selection[t]})).forEach((function(s){e.addAssetToCasting({entityId:s,assetId:t,nbOccurences:1,label:"shot"===e.castingType?"animate":"fixed"}),e.saveCasting(s).then(e.setLock).catch(console.error)}))},addTenAssets:function(t){var e=this;this.isLocked=!0,Object.keys(this.selection).filter((function(t){return e.selection[t]})).forEach((function(s){e.addAssetToCasting({entityId:s,assetId:t,nbOccurences:10}),e.saveCasting(s).then(e.setLock).catch(console.error)}))},confirmAssetRemoval:function(){this.saveAssetRemoval(this.removalData.entityId,this.removalData.assetId,this.removalData.nbOccurences)},saveAssetRemoval:function(t,e,s){var i=this;this.loading.remove=!0,this.removeAssetFromCasting({entityId:t,assetId:e,nbOccurences:s}),this.saveCasting(t).then(this.setLock).then((function(){i.loading.remove=!1,i.modals.isRemoveConfirmationDisplayed=!1})).catch((function(t){i.errors.remove=!0,i.loading.remove=!1,console.error(t)}))},removeOneAsset:function(t,e,s){this.isLocked=!0,this.isEpisodeCasting&&1===s?(this.removalData={assetId:t,entityId:e,nbOccurences:s},this.modals.isRemoveConfirmationDisplayed=!0):this.saveAssetRemoval(e,t,1)},removeTenAssets:function(t,e,s){this.isLocked=!0,this.isEpisodeCasting&&s<10?(this.removalData={assetId:t,entityId:e,nbOccurences:s},this.modals.isRemoveConfirmationDisplayed=!0):this.saveAssetRemoval(e,t,10)},onAssetListScroll:function(t,e){var s=this.$refs["asset-list"],i=s.scrollHeight-s.offsetHeight;i<e.scrollTop+100&&this.displayMoreAssets()},showImportModal:function(){this.modals.importing=!0},hideImportModal:function(){this.modals.importing=!1},showImportRenderModal:function(){this.modals.isImportRenderDisplayed=!0},hideImportRenderModal:function(){this.modals.isImportRenderDisplayed=!1},renderImport:function(t,e){var s=this;this.loading.importing=!0,this.errors.importing=!1,"file"===e&&(t=t.get("file")),r["a"].processCSV(t).then((function(t){s.parsedCSV=t,s.hideImportModal(),s.loading.importing=!1,s.showImportRenderModal()}))},uploadImportFile:function(t){var e=this,s=new FormData,i="import.csv",n=new File([t.join("\n")],i,{type:"text/csv"});s.append("file",n),this.loading.importing=!0,this.errors.importing=!1,this.errors.importingError=null,this.importCsvFormData=s,this.uploadCastingFile(this.importCsvFormData).then((function(){e.loading.importing=!1,e.hideImportRenderModal(),e.sequenceId&&e.setCastingSequence(e.sequenceId)})).catch((function(t){e.loading.importing=!1,e.errors.importingError=t,e.errors.importing=!0}))},resetImport:function(){this.errors.importing=!1,this.errors.importingError=null,this.hideImportRenderModal(),this.importCsvFormData=void 0,this.$refs["import-modal"].reset(),this.showImportModal()},updateUrl:function(){var t=!1,e={};if(this.isEpisodeCasting){var s=this.$route.params.episode_id;s!==this.episodeId&&(t=!0,e={name:"breakdown-episode",params:{production_id:this.currentProduction.id,episode_id:this.episodeId}})}else if(this.isAssetCasting){var i=this.$route.params.asset_type_id;i!==this.assetTypeId&&(t=!0,e={name:"breakdown-asset-type",params:{production_id:this.currentProduction.id,asset_type_id:this.assetTypeId}})}else{var n=this.$route.params.sequence_id;n!==this.sequenceId&&(t=!0,e={name:"breakdown-sequence",params:{production_id:this.currentProduction.id,sequence_id:this.sequenceId}})}if(t){var a=this.$route.params.episode_id;!a&&this.currentEpisode&&(a=this.currentEpisode.id),a&&(e.name="episode-".concat(e.name),e.params.episode_id=a,"all"===a&&(e.params.sequence_id="all")),this.$router.push(e)}},onEditLabelClicked:function(t,e,s){this.editedAsset=t,this.editedEntityId=s,this.editedAssetLinkLabel=e,this.modals.isEditLabelDisplayed=!0},confirmEditLabel:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.label;this.loading.editLabel=!0,this.setAssetLinkLabel({label:s,asset:this.editedAsset,targetEntityId:this.editedEntityId}).then((function(){t.modals.isEditLabelDisplayed=!1,t.loading.editLabel=!1})).catch((function(e){console.error(e),t.errors.editLabel=!0,t.loading.editLabel=!1}))},toggleTextMode:function(){this.isTextMode=!this.isTextMode,localStorage.setItem("breakdown:text-mode",this.isTextMode)},confirmNewAssetStay:function(t){var e=this;this.loading.stay=!0,this.success.edit=!1,this.newAsset(t).then((function(t){e.loading.stay=!1,e.loading.edit=!1,e.resetLightEditModal(t),e.$refs["edit-asset-modal"].focusName(),e.success.edit=!0})).catch((function(t){console.error(t),e.loading.stay=!1,e.loading.edit=!1,e.success.edit=!1,e.errors.edit=!0}))},confirmNewAsset:function(t){var e=this;this.loading.edit=!0,this.errors.edit=!1,this.newAsset(t).then((function(t){e.loading.edit=!1,e.modals.isNewDisplayed=!1})).catch((function(t){console.error(t),e.loading.edit=!1,e.errors.edit=!0}))},resetLightEditModal:function(t){var e={name:"",entity_type_id:t.entit_type_id,production_id:this.currentProduction.id};this.assetToEdit=e},onKeyDown:function(t){["INPUT","TEXTAREA"].includes(t.target.tagName)||(t.ctrlKey&&67===t.keyCode?this.copyCasting():t.ctrlKey&&86===t.keyCode&&this.pasteCasting())},copyCasting:function(){var t=this,e=Object.keys(this.selection).find((function(e){return t.selection[e]})),s=this.casting[e];c["a"].copyCasting(s)},pasteCasting:function(){var t=this,e=c["a"].pasteCasting(),s=Object.keys(this.selection).filter((function(e){return t.selection[e]}));return s.forEach((function(s){t.setEntityCasting({entityId:s,casting:e}),t.saveCasting(s).then(t.setLock).catch(console.error)})),e},onMetadataChanged:function(t){var e=t.entry,s=t.descriptor,i=t.value,n={};n[s.field_name]=i;var a={id:e.id,data:n};this.isEpisodeCasting?this.editEpisode(a):this.isShotCasting?this.editShot(a):this.editAsset(a)},onDescriptionChanged:function(t,e){var s={id:t.id,description:e};this.isEpisodeCasting?this.editEpisode(s):this.isShotCasting?this.editShot(s):this.editAsset(s)},onStandbyChanged:function(t,e){var s={id:t.id,is_casting_standby:e};this.isEpisodeCasting?this.editEpisode(s):this.isShotCasting?this.editShot(s):this.editAsset(s)},descriptorCurrentDepartments:function(t){var e=this,s=t.departments||[];return s.map((function(t){return e.departmentMap.get(t)}))}}),watch:{$route:function(){},castingType:function(){if(this.isShotCasting&&this.sequences.length>0&&(this.sequenceId=this.sequences[0].id,this.assetTypeId=""),this.isAssetCasting&&this.castingAssetTypesOptions.length>0){var t=this.$route.params.asset_type_id;this.sequenceId="",this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0&&(this.assetTypeId=this.castingAssetTypesOptions[0].value)}},sequenceId:function(){this.sequenceId&&this.sequences&&this.sequences.length>0&&(this.setCastingSequence(this.sequenceId),this.updateUrl(),this.resetSelection())},assetTypeId:function(){this.assetTypeId&&this.castingAssetTypesOptions.length>0&&(this.setCastingAssetType(this.assetTypeId),this.updateUrl(),this.resetSelection())},episodeId:function(){this.episodeId&&this.episodes&&this.episodes.length>0&&("all"===this.episodeId&&this.setCastingForProductionEpisodes(this.episodeId),this.resetSelection())},castingSequencesOptions:function(){if(this.$route.path.indexOf("asset-type")<0){var t=this.$route.params.sequence_id;t&&this.sequenceMap.get(t)?this.sequenceId=t:this.castingSequencesOptions.length>0?this.sequenceId=this.castingSequencesOptions[0].value:this.sequenceId=""}},castingAssetTypesOptions:function(){if(this.$route.path.indexOf("asset-type")>0){var t=this.$route.params.asset_type_id;this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0?this.assetTypeId=this.castingAssetTypesOptions[0].value:this.assetTypeId=""}},currentProduction:function(){this.isLoading||this.reset()},currentEpisode:function(){this.currentEpisode&&this.episodeId!==this.currentEpisode.id&&!this.isLoading&&("all"===this.currentEpisode.id?this.episodeId="all":this.reset())},sequences:function(){this.$store.commit("CASTING_SET_SEQUENCES",this.sequences)}},socket:{events:{"episode:casting-update":function(t){var e=this.episodeMap.get(t.episode_id);e&&!this.isLocked&&this.loadEpisodeCasting(e)},"shot:casting-update":function(t){var e=this.shotMap.get(t.shot_id);e&&e.sequence_id===this.sequenceId&&!this.isLocked&&this.loadShotCasting(e)},"asset:casting-update":function(t){var e=this.assetMap.get(t.asset_id);e&&e.asset_type_id===this.assetTypeId&&!this.isLocked&&this.loadAssetCasting(e)}}},metaInfo:function(){var t=this.$t("breakdown.title");return{title:"".concat(this.currentProduction.name," ").concat(t," - Kitsu")}}},Ot=Et,kt=(s("226c"),Object(m["a"])(Ot,i,n,!1,null,"14dc4fb6",null));e["default"]=kt.exports}}]);
//# sourceMappingURL=chunk-18756f22.7a4b92c7.js.map