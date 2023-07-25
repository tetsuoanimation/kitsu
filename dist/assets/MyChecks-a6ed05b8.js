import{B as l,C as d,au as c,av as u,aw as p,l as h,ax as k,ay as _,az as m,m as f,aA as y,am as T,aB as r,b,aC as v,e as n,n as S}from"./index-bfd2aaa7.js";import{C}from"./ComboboxProduction-d4fade31.js";const x={name:"todos",components:{ButtonSimple:l,Combobox:d,ComboboxProduction:C,ComboboxStatus:c,ComboboxTaskType:u,PeopleField:p,TaskInfo:h,TodosList:k,ViewPlaylistModal:_},data(){return{currentFilter:"all_tasks",currentSort:"priority",episodeId:"",isLoading:!1,isLoadingError:!1,isPlaylist:!1,filterOptions:["all_tasks","due_this_week"].map(e=>({label:e,value:e})),person:{},productionId:"",productionList:[],selectionGrid:{},sortOptions:["entity_name","priority","due_date","estimation","last_comment_date"].map(e=>({label:e,value:e})),taskStatusId:"",taskTypeId:"",taskStatusList:[],taskTypeList:[],tasksToCheck:[]}},mounted(){this.isLoading=!0,this.loadTasksToCheck().then(e=>{e&&(e.forEach(m),this.buildSelectionGrid(e),this.resetProductionList(e),this.resetTaskTypeList(e),this.resetTaskStatusList(e),this.tasksToCheck=e,this.isLoading=!1)}).catch(e=>{console.error(e)})},afterDestroy(){},computed:{...f(["nbSelectedTasks","personMap","productionMap","taskStatusMap","taskTypeMap","selectedTasks"]),nbTasksToCheck(){return this.sortedTasks.filter(e=>this.taskStatusMap.get(e.task_status_id).is_feedback_request).length},assignees(){const e=[],t={};return this.tasksToCheck.forEach(i=>{i.assignees.forEach(s=>{t[s]||(e.push(this.personMap.get(s)),t[s]=!0)})}),e},episodeOptions(){const e=[],t={};return this.productionId?this.productionMap.get(this.productionId).production_type!=="tvshow"?[]:(this.tasksToCheck.filter(s=>s.project_id===this.productionId).forEach(s=>{s.episode_id&&!t[s.episode_id]&&s.entity_type_name==="Shot"&&(t[s.episode_id]=!0,e.push({label:s.episode_name,value:s.episode_id}))}),[{label:this.$t("main.all"),value:"all"}].concat(e.sort((s,a)=>s.label.localeCompare(a.label)))):[]},filteredTasks(){let e=this.currentFilter==="all_tasks"?[...this.tasksToCheck]:this.tasksToCheck.filter(t=>{const i=y(t.due_date);return T().startOf("week").isSame(i,"week")});return this.productionId!==""&&(e=e.filter(t=>t.project_id===this.productionId)),this.taskTypeId!==""&&(e=e.filter(t=>t.task_type_id===this.taskTypeId)),this.taskStatusId!==""&&(e=e.filter(t=>t.task_status_id===this.taskStatusId)),this.person&&this.person.id&&(e=e.filter(t=>t.assignees.includes(this.person.id))),this.productionId&&this.episodeId&&this.episodeId!=="all"&&(e=e.filter(t=>t.episode_id===this.episodeId)),e},sortedTasks(){const e=this.currentSort==="entity_name",t=this.currentSort==="priority",i=this.currentSort==="due_date",s=this.filteredTasks;return e?s.sort(r("project_name").thenBy("task_type_name").thenBy("full_entity_name")):t?s.sort(r("priority",-1).thenBy((a,o)=>a.due_date?o.due_date?a.due_date.localeCompare(o.due_date):-1:1).thenBy("project_name").thenBy("task_type_name").thenBy("entity_name")):i?s.sort(r((a,o)=>a.due_date?o.due_date?a.due_date.localeCompare(o.due_date):-1:1).thenBy("project_name").thenBy("task_type_name").thenBy("entity_name")):s.sort(r(this.currentSort,-1).thenBy("project_name").thenBy("task_type_name").thenBy("entity_name"))}},methods:{...b(["loadTasksToCheck","removeTodoSearch","saveTodoSearch","setTodosSearch"]),buildSelectionGrid(e){this.selectionGrid=v(e.length,1)},resetProductionList(e=[]){const t={},i=[];e.forEach(s=>{t[s.project_id]||(t[s.project_id]=!0,i.push(this.productionMap.get(s.project_id)))}),this.productionList=[{id:"",name:this.$t("main.all")}].concat(n(i))},resetTaskTypeList(e){const t={},i=[];e.forEach(s=>{t[s.task_type_id]||(t[s.task_type_id]=!0,i.push(this.taskTypeMap.get(s.task_type_id)))}),this.taskTypeList=[{id:"",color:"#999",name:this.$t("news.all")}].concat(n(i))},resetTaskStatusList(e){const t={},i=[];e.forEach(s=>{t[s.task_status_id]||(t[s.task_status_id]=!0,i.push(this.taskStatusMap.get(s.task_status_id)))}),this.taskStatusList=[{id:"",color:"#999",name:this.$t("news.all"),short_name:this.$t("news.all")}].concat(n(i))},onTaskSelectionCleared(){this.buildSelectionGrid(this.sortedTasks)},onTaskSelectionAdded(e){this.selectionGrid[e.x][e.y]=!0},onTaskSelectionRemoved(e){this.selectionGrid[e.x][e.y]=!1}},socket:{events:{"task:assign"(e){},"task:unassign"(e){}}},watch:{productionId(){this.episodeId=""},nbSelectedTasks(){this.nbSelectedTasks===0&&this.buildSelectionGrid(this.sortedTasks)}},metaInfo(){return{title:`${this.$t("tasks.my_checks")} - Kitsu`}}};var I=function(){var t=this,i=t._self._c;return i("div",{staticClass:"columns fixed-page"},[i("div",{staticClass:"column main-column"},[i("div",{staticClass:"todos page"},[i("div",{staticClass:"flexrow"},[t.productionList.length>0?i("combobox-production",{staticClass:"flexrow-item",attrs:{label:t.$t("main.production"),"production-list":t.productionList},model:{value:t.productionId,callback:function(s){t.productionId=s},expression:"productionId"}}):t._e(),t.episodeOptions.length>0?i("combobox",{directives:[{name:"show",rawName:"v-show",value:t.productionId,expression:"productionId"}],staticClass:"flexrow-item",attrs:{label:t.$t("shots.fields.episode"),options:t.episodeOptions},model:{value:t.episodeId,callback:function(s){t.episodeId=s},expression:"episodeId"}}):t._e(),t.taskTypeList.length>0?i("combobox-task-type",{staticClass:"flexrow-item selector",attrs:{label:t.$t("news.task_type"),"task-type-list":t.taskTypeList},model:{value:t.taskTypeId,callback:function(s){t.taskTypeId=s},expression:"taskTypeId"}}):t._e(),i("combobox-status",{staticClass:"flexrow-item selector",attrs:{label:t.$t("news.task_status"),"task-status-list":t.taskStatusList},model:{value:t.taskStatusId,callback:function(s){t.taskStatusId=s},expression:"taskStatusId"}}),i("div",{staticClass:"field flexrow-item selector small"},[i("label",{staticClass:"label person-label"},[t._v(" "+t._s(t.$t("main.person"))+" ")]),i("people-field",{attrs:{people:t.assignees,big:!0},model:{value:t.person,callback:function(s){t.person=s},expression:"person"}})],1),i("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("main.show"),options:t.filterOptions,"locale-key-prefix":"tasks."},model:{value:t.currentFilter,callback:function(s){t.currentFilter=s},expression:"currentFilter"}}),i("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("main.sorted_by"),options:t.sortOptions,"locale-key-prefix":"tasks.fields."},model:{value:t.currentSort,callback:function(s){t.currentSort=s},expression:"currentSort"}})],1),i("div",{staticClass:"flexrow"},[i("h1",{staticClass:"title mt1 flerow-item"},[t._v(" "+t._s(t.nbTasksToCheck)+" tasks to check ")]),i("div",{staticClass:"filler"}),i("ButtonSimple",{staticClass:"flexrow-item",attrs:{text:"Build playlist from list"},on:{click:function(s){t.isPlaylist=!0}}})],1),i("todos-list",{attrs:{tasks:t.sortedTasks,"is-loading":t.isLoading,"is-error":t.isLoadingError,"selection-grid":t.selectionGrid,"is-to-check":!0},on:{"task-selection-cleared":t.onTaskSelectionCleared,"task-selection-addition":t.onTaskSelectionAdded,"task-selection-removal":t.onTaskSelectionRemoved}})],1)]),t.nbSelectedTasks===1?i("div",{staticClass:"column side-column"},[i("task-info",{attrs:{task:t.selectedTasks.values().next().value}})],1):t._e(),i("view-playlist-modal",{attrs:{active:t.isPlaylist,"task-ids":t.sortedTasks.map(s=>s.id)},on:{cancel:function(s){t.isPlaylist=!1}}})],1)},g=[],w=S(x,I,g,!1,null,"023a1692",null,null);const $=w.exports;export{$ as default};
//# sourceMappingURL=MyChecks-a6ed05b8.js.map