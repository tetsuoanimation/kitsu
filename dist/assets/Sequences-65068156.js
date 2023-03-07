import{q as m,L as p,f,p as S,N as g,B as o,j as y,k as C,O as q,R as _,Q as k,U as v,V as D,a as M,W as T,X as $,m as c,b as u,bu as w,n as h,_ as b,Y as x,Z as L,$ as E,a0 as A,a1 as P,a2 as F,t as U,a3 as V,D as H,a4 as I,w as B,a5 as N,a6 as Q,a7 as K,x as O,l as z,G as R,o as Y,e as W,A as G}from"./index-874e3fdf.js";import{E as X}from"./EditSequenceModal-7c7c00f8.js";const Z={name:"sequence-list",mixins:[m,p,f,S,g],props:{displayedSequences:{type:Array,default:()=>[]},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},validationColumns:{type:Array,default:()=>[]},departmentFilter:{type:Array,default:()=>[]}},data(){return{type:"sequence",hiddenColumns:{},lastHeaderMenuDisplayed:null,lastMetadaDataHeaderMenuDisplayed:null,lastHeaderMenuDisplayedIndexInGrid:null,lastSelectedSequence:null,lastSelection:null,metadataDisplayHeaders:{estimation:!0,timeSpent:!0},offsets:{},stickedColumns:{}}},components:{ButtonSimple:o,DescriptionCell:y,EntityThumbnail:C,MetadataHeader:q,RowActionsCell:_,TableHeaderMenu:k,TableMetadataHeaderMenu:v,TableMetadataSelectorMenu:D,TableInfo:M,ValidationCell:T,ValidationHeader:$},computed:{...c(["currentEpisode","currentProduction","currentSequence","displayedSequencesEstimation","displayedSequencesLength","displayedSequencesTimeSpent","isBigThumbnails","isCurrentUserAdmin","isCurrentUserManager","isCurrentUserSupervisor","isCurrentUserClient","isSingleSequence","isSequenceDescription","isSequenceEstimation","isSequenceTime","isShowAssignations","isShowInfos","nbSelectedTasks","sequenceMap","sequenceFilledColumns","sequenceMetadataDescriptors","sequences","sequenceSearchText","sequenceSelectionGrid","taskMap","taskTypeMap","user"]),isEmptyList(){return this.displayedSequences.length&&this.displayedSequences[0].length===0&&!this.isLoading&&!this.isError&&(!this.sequenceSearchText||this.sequenceSearchText.length===0)},isListVisible(){return!this.isLoading&&!this.isError&&this.displayedSequencesLength>0},visibleColumns(){let a=2;return a+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceDescription?1:0,a+=this.visibleMetadataDescriptors.length,a+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceTime&&this.metadataDisplayHeaders.timeSpent?1:0,a+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceEstimation&&this.metadataDisplayHeaders.estimation?1:0,a+=this.displayedValidationColumns.length,a},displayedValidationColumns(){return this.validationColumns.filter(a=>this.sequenceFilledColumns[a]&&(!this.hiddenColumns[a]||this.isShowInfos))},metadataDescriptors(){return this.sequenceMetadataDescriptors},localStorageStickKey(){return`stick-sequences-${this.currentProduction.id}`}},methods:{...u(["setSequenceSelection"]),isSelected(a,e){return this.sequenceSelectionGrid[a]&&this.sequenceSelectionGrid[a][e]},sequencePath(a){return this.getPath("sequence",a)},getPath(a,e){const s=this.currentProduction.id,t=this.currentEpisode?this.currentEpisode.id:null;return w(e,s,a,t)}},watch:{displayedSequences(){this.$options.lineIndex={}},validationColumns(){this.initHiddenColumns(this.validationColumns,this.hiddenColumns)},stickedColumns(){this.updateOffsets()},isLoading(){this.updateOffsets()}}};var J=function(){var e=this,s=e._self._c;return s("div",{staticClass:"data-list"},[s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[s("table-header-menu",{ref:"headerMenu",attrs:{"is-minimized":e.hiddenColumns[e.lastHeaderMenuDisplayed],"is-edit-allowed":e.isCurrentUserManager,"is-sticked":e.stickedColumns[e.lastHeaderMenuDisplayed]},on:{"minimize-clicked":function(t){return e.onMinimizeColumnToggled()},"delete-all-clicked":function(t){return e.onDeleteAllTasksClicked()},"sort-by-clicked":function(t){return e.onSortByTaskTypeClicked()},"select-column":e.onSelectColumn,"toggle-stick":function(t){return e.stickColumnClicked()}}}),s("table-metadata-header-menu",{ref:"headerMetadataMenu",attrs:{"is-edit-allowed":e.isCurrentUserManager,"is-sequence-allowed":e.isMetadataColumnEditAllowed(e.lastMetadaDataHeaderMenuDisplayed),"is-sticked":e.stickedColumns[e.lastMetadaDataHeaderMenuDisplayed]},on:{"edit-clicked":function(t){return e.onEditMetadataClicked()},"delete-clicked":function(t){return e.onDeleteMetadataClicked()},"sort-by-clicked":function(t){return e.onSortByMetadataClicked()},"toggle-stick":function(t){return e.metadataStickColumnClicked(t)}}}),s("table",{staticClass:"datatable"},[s("thead",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}],staticClass:"datatable-head",attrs:{id:"datatable-sequence"}},[s("tr",[s("th",{ref:"th-sequence",staticClass:"name sequence-name datatable-row-header",attrs:{scope:"col"}},[s("div",{staticClass:"flexrow"},[s("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.$t("sequences.fields.name"))+" ")]),(e.isCurrentUserManager||e.isCurrentUserSupervisor)&&!e.isLoading?s("button-simple",{staticClass:"is-small flexrow-item",attrs:{icon:"plus",text:""},on:{click:e.onAddMetadataClicked}}):e._e()],1)]),e._l(e.stickedVisibleMetadataDescriptors,function(t,n){return e.isShowInfos?s("metadata-header",{key:t.id,ref:`editor-${n}`,refInFor:!0,attrs:{descriptor:t,left:e.offsets["editor-"+n]?`${e.offsets["editor-"+n]}px`:"0","is-stick":""},on:{"show-metadata-header-menu":i=>e.showMetadataHeaderMenu(t.id,i)}}):e._e()}),e._l(e.stickedDisplayedValidationColumns,function(t,n){return e.isLoading?e._e():s("validation-header",{key:t,ref:`validation-${n}`,refInFor:!0,attrs:{"hidden-columns":e.hiddenColumns,"column-id":t,"validation-style":e.getValidationStyle(t),left:e.offsets["validation-"+n]?`${e.offsets["validation-"+n]}px`:"0",type:"editor","is-stick":""},on:{"show-header-menu":i=>e.showHeaderMenu(t,n,i)}})}),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceDescription?s("th",{staticClass:"description selectable",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("sequences.fields.description"))+" ")]):e._e(),e._l(e.nonStickedVisibleMetadataDescriptors,function(t){return e.isShowInfos?s("metadata-header",{key:t.id,attrs:{descriptor:t},on:{"show-metadata-header-menu":n=>e.showMetadataHeaderMenu(t.id,n)}}):e._e()}),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceTime&&e.metadataDisplayHeaders.timeSpent?s("th",{ref:"th-spent",staticClass:"time-spent",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("sequences.fields.time_spent"))+" ")]):e._e(),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceEstimation&&e.metadataDisplayHeaders.estimation?s("th",{ref:"th-spent",staticClass:"estimation",attrs:{scope:"col",title:e.$t("main.estimation")}},[e._v(" "+e._s(e.$t("main.estimation_short"))+" ")]):e._e(),e._l(e.nonStickedDisplayedValidationColumns,function(t,n){return e.isLoading?e._e():s("validation-header",{key:t,attrs:{"hidden-columns":e.hiddenColumns,"column-id":t,"validation-style":e.getValidationStyle(t),type:"sequences"},on:{"show-header-menu":i=>{e.showHeaderMenu(t,n,i)}}})}),s("th",{ref:"actionsSection",staticClass:"actions",attrs:{scope:"col"}},[e.isCurrentUserManager&&e.displayedSequences.length>0&&!e.isLoading?s("button-simple",{class:{"is-small":!0,highlighted:e.isEmptyTask},attrs:{icon:"plus",text:e.$t("tasks.create_tasks")},on:{click:function(t){return e.$emit("create-tasks")}}}):e._e(),s("table-metadata-selector-menu",{directives:[{name:"show",rawName:"v-show",value:e.columnSelectorDisplayed&&e.isShowInfos,expression:"columnSelectorDisplayed && isShowInfos"}],ref:"headerMetadataSelectorMenu",attrs:{metadataDisplayHeaders:e.metadataDisplayHeaders,descriptors:e.sequenceMetadataDescriptors,exclude:{timeSpent:!e.isSequenceTime,estimation:!e.isSequenceEstimation},namespace:"sequences"},on:{"update:metadataDisplayHeaders":function(t){e.metadataDisplayHeaders=t},"update:metadata-display-headers":function(t){e.metadataDisplayHeaders=t}}}),e.sequenceMetadataDescriptors.length>0&&e.isShowInfos?s("button-simple",{staticClass:"is-small is-pulled-right",attrs:{icon:"down"},on:{click:e.toggleColumnSelector}}):e._e()],1)],2)]),s("tbody",{staticClass:"datatable-body"},e._l(e.displayedSequences,function(t,n){return!e.isLoading&&e.isListVisible?s("tr",{key:t.id,staticClass:"datatable-row",class:{canceled:t.canceled},attrs:{scope:"row"}},[s("th",{class:{"datatable-row-header":!0,"sequence-name":!0,name:!0,strong:!t.canceled}},[s("div",{staticClass:"flexrow"},[s("entity-thumbnail",{attrs:{entity:t,width:e.isBigThumbnails?150:50,height:e.isBigThumbnails?100:33,"empty-width":e.isBigThumbnails?150:50,"empty-height":e.isBigThumbnails?100:34}}),s("router-link",{attrs:{tabindex:"-1",title:t.name,to:e.sequencePath(t.id)}},[e._v(" "+e._s(t.name)+" ")])],1)]),e._l(e.stickedVisibleMetadataDescriptors,function(i,r){return e.isShowInfos?s("td",{key:t.id+"-"+i.id,ref:`editor-${n}-${r}`,refInFor:!0,staticClass:"metadata-descriptor datatable-row-header",style:{left:e.offsets["editor-"+r]?`${e.offsets["editor-"+r]}px`:"0"},attrs:{title:t.data?t.data[i.field_name]:""}},[i.choices.length===0&&(e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments))?s("input",{staticClass:"input-editor",domProps:{value:e.getMetadataFieldValue(i,t)},on:{input:l=>e.onMetadataFieldChanged(t,i,l),keyup:function(l){return l.ctrlKey?(d=>e.onInputKeyUp(d,n,r)).apply(null,arguments):null}}}):e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments)?s("span",{staticClass:"select"},[s("select",{staticClass:"select-input",on:{keyup:function(l){return l.ctrlKey?(d=>e.onInputKeyUp(d,n,r)).apply(null,arguments):null},change:l=>e.onMetadataFieldChanged(t,i,l)}},e._l(e.getDescriptorChoicesOptions(i),function(l,d){return s("option",{key:`${t.id}-${i.id}-${d}-${l.label}-${l.value}`,domProps:{value:l.value,selected:e.getMetadataFieldValue(i,t)===l.value}},[e._v(" "+e._s(l.label)+" ")])}),0)]):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.getMetadataFieldValue(i,t))+" ")])]):e._e()}),e._l(e.stickedDisplayedValidationColumns,function(i,r){return e.isLoading?e._e():s("validation-cell",{key:i+"-"+t.id,ref:`validation-${n}-${r}`,refInFor:!0,class:{"validation-cell":!e.hiddenColumns[i],"hidden-validation-cell":e.hiddenColumns[i],"datatable-row-header":!0},attrs:{column:e.taskTypeMap.get(i),columnY:r,entity:t,"is-assignees":e.isShowAssignations,"is-static":!0,left:e.offsets["validation-"+r]?`${e.offsets["validation-"+r]}px`:"0",minimized:e.hiddenColumns[i],rowX:n,selected:e.isSelected(n,r),sticked:!0,"task-test":e.taskMap.get(t.validations.get(i))},on:{select:l=>e.onTaskSelected(l,!0),unselect:l=>e.onTaskUnselected(l,!0)}})}),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceDescription?s("description-cell",{staticClass:"description",attrs:{entry:t,editable:e.isCurrentUserManager},on:{"description-changed":i=>e.onDescriptionChanged(t,i)}}):e._e(),e._l(e.nonStickedVisibleMetadataDescriptors,function(i,r){return e.isShowInfos?s("td",{key:t.id+"-"+i.id,staticClass:"metadata-descriptor",attrs:{title:t.data?t.data[i.field_name]:""}},[i.choices.length===0&&(e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments))?s("input",{staticClass:"input-editor",domProps:{value:e.getMetadataFieldValue(i,t)},on:{input:l=>e.onMetadataFieldChanged(t,i,l),keyup:function(l){return l.ctrlKey?(d=>e.onInputKeyUp(d,n,r)).apply(null,arguments):null}}}):e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments)?s("span",{staticClass:"select"},[s("select",{staticClass:"select-input",on:{keyup:function(l){return l.ctrlKey?(d=>e.onInputKeyUp(d,n,r)).apply(null,arguments):null},change:l=>e.onMetadataFieldChanged(t,i,l)}},e._l(e.getDescriptorChoicesOptions(i),function(l,d){return s("option",{key:`${t.id}-${i.id}-${d}-${l.label}-${l.value}`,domProps:{value:l.value,selected:e.getMetadataFieldValue(i,t)===l.value}},[e._v(" "+e._s(l.label)+" ")])}),0)]):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.getMetadataFieldValue(i,t))+" ")])]):e._e()}),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceTime&&e.metadataDisplayHeaders.timeSpent?s("td",{staticClass:"time-spent selectable"},[e._v(" "+e._s(e.formatDuration(t.timeSpent))+" ")]):e._e(),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceEstimation&&e.metadataDisplayHeaders.estimation?s("td",{staticClass:"estimation selectable"},[e._v(" "+e._s(e.formatDuration(t.estimation))+" ")]):e._e(),e._l(e.nonStickedDisplayedValidationColumns,function(i,r){return e.isLoading?e._e():s("validation-cell",{key:`${i}-${t.id}`,ref:`validation-${n}-${r+e.stickedDisplayedValidationColumns.length}`,refInFor:!0,class:{"validation-cell":!e.hiddenColumns[i],"hidden-validation-cell":e.hiddenColumns[i]},attrs:{column:e.taskTypeMap.get(i),entity:t,"task-test":e.taskMap.get(t.validations?t.validations.get(i):null),minimized:e.hiddenColumns[i],selected:e.isSelected(n,r+e.stickedDisplayedValidationColumns.length),rowX:n,columnY:r,"is-assignees":e.isShowAssignations},on:{select:e.onTaskSelected,unselect:e.onTaskUnselected}})}),e.isCurrentUserManager?s("row-actions-cell",{attrs:{entry:t},on:{"delete-clicked":function(i){return e.$emit("delete-clicked",t)},"edit-clicked":function(i){return e.$emit("edit-clicked",t)}}}):s("td",{staticClass:"actions"})],2):e._e()}),0)])],1),s("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isEmptyList&&e.isCurrentUserClient&&!e.isLoading?s("div",{staticClass:"has-text-centered"},[e._m(0),s("p",{staticClass:"info"},[e._v(e._s(e.$t("sequences.empty_list_client")))])]):e._e(),!e.isEmptyList&&!e.isLoading?s("p",{staticClass:"has-text-centered nb-sequences"},[e._v(" "+e._s(e.displayedSequencesLength)+" "+e._s(e.$tc("sequences.number",e.displayedSequencesLength))+" "),e.displayedSequencesTimeSpent>0&&e.displayedSequencesEstimation>0?s("span",[e._v(" ("+e._s(e.formatDuration(e.displayedSequencesTimeSpent))+" "+e._s(e.$tc("main.days_spent",e.displayedSequencesTimeSpent))+", "+e._s(e.formatDuration(e.displayedSequencesEstimation))+" "+e._s(e.$tc("main.man_days",e.displayedSequencesEstimation))+") ")]):e._e()]):e._e()],1)},j=[function(){var a=this,e=a._self._c;return e("p",{staticClass:"info"},[e("img",{attrs:{src:b}})])}],ee=h(Z,J,j,!1,null,"fe1d7fb5",null,null);const te=ee.exports;const se={name:"sequences",mixins:[x,L],components:{ActionPanel:E,AddMetadataModal:A,AddThumbnailsModal:P,BigThumbnailsButton:F,BuildFilterModal:U,ButtonSimple:o,CreateTasksModal:V,DeleteModal:H,EditSequenceModal:X,SequenceList:te,HardDeleteModal:I,SearchField:B,SearchQueryList:N,SortingInfo:Q,ShowAssignationsButton:K,ShowInfosButton:O,TaskInfo:z},data(){return{type:"sequence",deleteAllTasksLockText:null,descriptorToEdit:{},departmentFilter:[],sequenceToDelete:null,sequenceToEdit:null,formData:null,genericColumns:["metadata_column_name => text value","task_type_name => task_status_name","task_type_name comment => comment text"],historyEdit:{},initialLoading:!0,isSearchActive:!1,optionalColumns:["Description"],pageName:"Sequences",parsedCSV:[],selectedDepartment:"ALL",taskTypeForTaskDeletion:null,modals:{isAddMetadataDisplayed:!1,isAddThumbnailsDisplayed:!1,isBuildFilterDisplayed:!1,isCreateTasksDisplayed:!1,isDeleteDisplayed:!1,isDeleteMetadataDisplayed:!1,isDeleteAllTasksDisplayed:!1,isImportRenderDisplayed:!1,isImportDisplayed:!1,isNewDisplayed:!1},loading:{addMetadata:!1,addThumbnails:!1,creatingTasks:!1,creatingTasksStay:!1,deleteAllTasks:!1,deleteMetadata:!1,sequence:!1,del:!1,importing:!1,stay:!1},errors:{addMetadata:!1,deleteMetadata:!1,creatingTasks:!1,deleteAllTasks:!1,importing:!1,importingError:null}}},beforeDestroy(){this.clearSelectedSequences()},created(){this.setLastProductionScreen("sequences")},mounted(){let a="";this.sequenceSearchText&&this.sequenceSearchText.length>0&&this.searchField.setValue(this.sequenceSearchText),this.$route.query.search&&this.$route.query.search.length>0&&(a=""+this.$route.query.search),a==="undefined"&&(a=""),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition),this.onSearchChange(),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition),!this.isCurrentUserManager&&this.user.departments.length>0?(this.selectedDepartment="MY_DEPARTMENTS",this.departmentFilter=this.user.departments):this.departmentFilter=[];const e=()=>{this.initialLoading=!1,this.$refs["sequence-list"]&&(this.$refs["sequence-search-field"].setValue(a),this.onSearchChange(),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition))};this.sequenceMap.size<1||this.sequenceValidationColumns.length===0||this.sequenceMap.values().next().project_id!==this.currentProduction.id?this.loadSequencesWithTasks().then(()=>{this.initialLoading=!1}).catch(console.error):(this.isSequencesLoading||(this.initialLoading=!1),e())},computed:{...c(["currentEpisode","currentProduction","displayedSequences","deleteAllTasks","departments","sequenceMap","sequences","sequenceSearchQueries","isCurrentUserClient","isCurrentUserManager","isSequenceDescription","isSequenceEstimation","isSequenceTime","isSequencesLoading","isSequencesLoadingError","isShowAssignations","isTVShow","nbSelectedTasks","openProductions","selectedTasks","sequenceMap","sequenceFilledColumns","sequencesCsvFormData","sequenceSearchText","sequenceValidationColumns","sequenceListScrollPosition","sequenceSorting","taskTypeMap","user","departmentMap","productionSequenceTaskTypes"]),renderColumns(){var a=[...this.dataMatchers,...this.optionalColumns];return this.productionSequenceTaskTypes.forEach(e=>{a.push(e.name),a.push(e.name+" comment")}),a},filteredSequences(){const a={};return this.displayedSequences.forEach(e=>{const s=e.name;a[s]=!0}),a},metadataDescriptors(){return this.sequenceMetadataDescriptors}},methods:{...u(["addMetadataDescriptor","createTasks","changeSequenceSort","clearSelectedSequences","commentTaskWithPreview","deleteAllSequenceTasks","deleteSequence","deleteMetadataDescriptor","editSequence","getSequencesCsvLines","hideAssignations","loadSequencesWithTasks","newSequence","removeSequenceSearch","saveSequenceSearch","setLastProductionScreen","setPreview","setSequenceSearch","showAssignations","uploadSequenceFile"]),confirmAddMetadata(a){this.loading.addMetadata=!0,a.entity_type="Sequence",this.addMetadataDescriptor(a).then(()=>{this.loading.addMetadata=!1,this.modals.isAddMetadataDisplayed=!1}).catch(e=>{console.error(e),this.loading.addMetadata=!1,this.errors.addMetadata=!0})},showNewModal(){this.sequenceToEdit={},this.modals.isNewDisplayed=!0},confirmDeleteSequence(){this.loading.del=!0,this.errors.del=!1,this.deleteSequence(this.sequenceToDelete).then(()=>{this.loading.del=!1,this.modals.isDeleteDisplayed=!1}).catch(a=>{console.error(a),this.loading.del=!1,this.errors.del=!0})},runTasksCreation(a,e){return this.errors.creatingTasks=!1,this.createTasks({type:"sequences",task_type_id:a.task_type_id,project_id:this.currentProduction.id,selectionOnly:e})},reset(){this.initialLoading=!1,this.loadSequencesWithTasks(a=>{a&&console.error(a),this.initialLoading=!1})},resetEditModal(){const a={name:""};this.openProductions.length>0&&(a.production_id=this.openProductions[0].id),this.sequenceToEdit=a},applySearch(a){this.setSequenceSearch(a),this.setSearchInUrl(),this.isSearchActive=!0},saveSearchQuery(a){this.saveSequenceSearch(a).catch(console.error)},removeSearchQuery(a){this.removeSequenceSearch(a).catch(console.error)},onExportClick(){this.getSequencesCsvLines().then(a=>{const e=[R().format("YYYY-MM-DD"),"kitsu",this.currentProduction.name,this.$t("sequences.title")],s=Y.slugify(e.join("_")),t=[this.$t("sequences.fields.name"),this.$t("sequences.fields.description")];this.currentSequence&&t.splice(0,0,"Sequence"),W([...this.currentProduction.descriptors]).filter(n=>n.entity_type==="Sequence").forEach(n=>{t.push(n.name)}),this.isSequenceTime&&t.push(this.$t("sequences.fields.time_spent")),this.isSequenceEstimation&&t.push(this.$t("main.estimation_short")),this.sequenceValidationColumns.forEach(n=>{t.push(this.taskTypeMap.get(n).name),t.push("Assignations")}),G.buildCsvFile(s,[t].concat(a))})},onFieldChanged({entry:a,fieldName:e,value:s}){const t={id:a.id,description:a.description};t[e]=s,this.editSequence(t)},onMetadataChanged({entry:a,descriptor:e,value:s}){const t={};t[e.field_name]=s;const n={id:a.id,data:t};this.editSequence(n)},onEditClicked(a){this.sequenceToEdit=a,this.modals.isNewDisplayed=!0},onDeleteClicked(a){this.sequenceToDelete=a,this.modals.isDeleteDisplayed=!0},confirmEditSequence(a){this.loading.edit=!0,this.errors.edit=!1,a.id?this.editSequence(a).then(()=>{this.loading.edit=!1,this.modals.isNewDisplayed=!1}).catch(()=>{this.loading.edit=!1,this.errors.edit=!0}):(a.project_id=this.currentProduction.id,this.currentEpisode&&(a.episode_id=this.currentEpisode.id),this.newSequence(a).then(()=>{this.loading.edit=!1,this.modals.isNewDisplayed=!1}).catch(()=>{this.loading.edit=!1,this.errors.edit=!0}))},deleteText(){const a=this.sequenceToDelete;return a?this.$t("sequences.delete_text",{name:a.name}):""}},watch:{$route(){if(!this.$route.query)return;const a=this.$route.query.search,e=this.$refs["sequence-search-field"].getValue();a!==e&&(this.searchField.setValue(a),this.applySearch(a))},currentProduction(){this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.initialLoading=!1,this.reset()},currentEpisode(){this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.initialLoading=!1,this.reset()},isSequencesLoading(){if(!this.isSequencesLoading){let a="";this.$route.query.search&&this.$route.query.search.length>0&&(a=""+this.$route.query.search),this.initialLoading=!1,this.$refs["sequence-search-field"].setValue(a),this.$nextTick(()=>{this.applySearch(a)}),this.$refs["sequence-list"]&&this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition)}}},metaInfo(){return{title:`${this.currentProduction.name} ${this.$t("sequences.title")} - Kitsu`}}};var ae=function(){var e=this,s=e._self._c;return s("div",{staticClass:"columns fixed-page"},[s("action-panel"),s("div",{staticClass:"column main-column"},[s("div",{staticClass:"sequences page"},[s("div",{staticClass:"sequence-list-header page-header"},[s("div",{staticClass:"flexrow"},[s("search-field",{ref:"sequence-search-field",attrs:{"can-save":!0,active:e.isSearchActive,placeholder:"ex: e01 sequence=wip"},on:{change:e.onSearchChange,enter:e.saveSearchQuery,save:e.saveSearchQuery}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("entities.build_filter.title"),icon:"funnel"},on:{click:()=>e.modals.isBuildFilterDisplayed=!0}}),s("div",{staticClass:"filler"}),e.isCurrentUserClient?e._e():s("div",{staticClass:"flexrow flexrow-item"},[s("show-assignations-button",{staticClass:"flexrow-item"}),s("show-infos-button",{staticClass:"flexrow-item"}),s("big-thumbnails-button",{staticClass:"flexrow-item"})],1),e.isCurrentUserManager?s("div",{staticClass:"flexrow"},[s("button-simple",{staticClass:"flexrow-item",attrs:{text:e.$t("sequences.new_sequence"),icon:"plus"},on:{click:e.showNewModal}})],1):e._e()],1),s("div",{staticClass:"query-list mt1"},[!e.isSequencesLoading&&!e.initialLoading?s("search-query-list",{attrs:{queries:e.sequenceSearchQueries},on:{"change-search":e.changeSearch,"remove-search":e.removeSearchQuery}}):e._e()],1)]),e.sequenceSorting&&e.sequenceSorting.length>0?s("sorting-info",{attrs:{label:e.$t("main.sorted_by"),sorting:e.sequenceSorting},on:{"clear-sorting":function(t){return e.onChangeSortClicked(null)}}}):e._e(),s("sequence-list",{ref:"sequence-list",attrs:{"displayed-sequences":e.displayedSequences,"is-loading":e.isSequencesLoading||e.initialLoading,"is-error":e.isSequencesLoadingError,"validation-columns":e.sequenceValidationColumns,"department-filter":e.departmentFilter},on:{"add-metadata":e.onAddMetadataClicked,"change-sort":e.onChangeSortClicked,"create-tasks":e.showCreateTasksModal,"delete-all-tasks":e.onDeleteAllTasksClicked,"delete-clicked":e.onDeleteClicked,"delete-metadata":e.onDeleteMetadataClicked,"edit-clicked":e.onEditClicked,"edit-metadata":e.onEditMetadataClicked,"field-changed":e.onFieldChanged,"metadata-changed":e.onMetadataChanged,scroll:e.saveScrollPosition}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.nbSelectedTasks===1,expression:"nbSelectedTasks === 1"}],staticClass:"column side-column",attrs:{id:"side-column"}},[s("task-info",{attrs:{task:e.selectedTasks.values().next().value}})],1),s("edit-sequence-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.sequence,"is-error":e.errors.sequence,"sequence-to-sequence":e.sequenceToEdit},on:{cancel:function(t){e.modals.isNewDisplayed=!1},confirm:e.confirmEditSequence}}),s("delete-modal",{ref:"delete-sequence-modal",attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("sequences.delete_error")},on:{cancel:function(t){e.modals.isDeleteDisplayed=!1},confirm:e.confirmDeleteSequence}}),s("delete-modal",{ref:"delete-metadata-modal",attrs:{active:e.modals.isDeleteMetadataDisplayed,"is-loading":e.loading.deleteMetadata,"is-error":e.errors.deleteMetadata,text:e.$t("productions.metadata.delete_text"),"error-text":e.$t("productions.metadata.delete_error")},on:{cancel:function(t){e.modals.isDeleteMetadataDisplayed=!1},confirm:e.confirmDeleteMetadata}}),s("hard-delete-modal",{ref:"delete-all-tasks-modal",attrs:{active:e.modals.isDeleteAllTasksDisplayed,"is-loading":e.loading.deleteAllTasks,"is-error":e.errors.deleteAllTasks,text:e.deleteAllTasksText(),"error-text":e.$t("tasks.delete_all_error"),"lock-text":e.deleteAllTasksLockText,"selection-option":!0},on:{cancel:function(t){e.modals.isDeleteAllTasksDisplayed=!1},confirm:e.confirmDeleteAllTasks}}),s("create-tasks-modal",{attrs:{active:e.modals.isCreateTasksDisplayed,"is-loading":e.loading.creatingTasks,"is-loading-stay":e.loading.creatingTasksStay,"is-error":e.errors.creatingTasks,title:e.$t("tasks.create_tasks_sequence"),text:e.$t("tasks.create_tasks_sequence_explaination"),"error-text":e.$t("tasks.create_tasks_sequence_failed")},on:{cancel:e.hideCreateTasksModal,confirm:e.confirmCreateTasks,"confirm-and-stay":e.confirmCreateTasksAndStay}}),s("add-metadata-modal",{attrs:{active:e.modals.isAddMetadataDisplayed,"is-loading":e.loading.addMetadata,"is-loading-stay":e.loading.addMetadata,"is-error":e.errors.addMetadata,"descriptor-to-edit":e.descriptorToEdit,"entity-type":"Sequence"},on:{cancel:e.closeMetadataModal,confirm:e.confirmAddMetadata}}),s("add-thumbnails-modal",{ref:"add-thumbnails-modal",attrs:{parent:"sequences",active:e.modals.isAddThumbnailsDisplayed,"is-loading":e.loading.addThumbnails,"is-error":e.errors.addThumbnails},on:{cancel:e.hideAddThumbnailsModal,confirm:e.confirmAddThumbnails}}),s("build-filter-modal",{ref:"build-filter-modal",attrs:{active:e.modals.isBuildFilterDisplayed,"entity-type":"sequence"},on:{cancel:function(t){e.modals.isBuildFilterDisplayed=!1},confirm:e.confirmBuildFilter}}),s("edit-sequence-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.edit,"is-error":e.errors.edit,"sequence-to-edit":e.sequenceToEdit},on:{cancel:function(t){e.modals.isNewDisplayed=!1},confirm:e.confirmEditSequence}}),s("hard-delete-modal",{attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("sequences.delete_error"),"lock-text":e.sequenceToDelete?e.sequenceToDelete.name:""},on:{cancel:function(t){e.modals.isDeleteDisplayed=!1},confirm:e.confirmDeleteSequence}})],1)},ie=[],ne=h(se,ae,ie,!1,null,"c990c008",null,null);const de=ne.exports;export{de as default};
//# sourceMappingURL=Sequences-65068156.js.map