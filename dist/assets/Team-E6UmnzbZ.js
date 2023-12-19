import{m as o,h as r,n,U as l,W as i}from"./index-olkLdb9b.js";import{D as p}from"./DepartmentNamesCell-QGYlhRT2.js";import{P as c}from"./PeopleNameCell-_7DnINt5.js";const m={name:"production-team-list",components:{DepartmentNamesCell:p,PeopleNameCell:c},props:{entries:{type:Array,default:()=>[]}},computed:{...o(["isCurrentUserAdmin"]),isEmpty(){var s;return!((s=this.entries)!=null&&s.length)}},methods:{...r(["removePersonFromTeam"]),removePerson(s){this.removePersonFromTeam(s)}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.name"))+" ")]),t("th",{staticClass:"email",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.email"))+" ")]),t("th",{staticClass:"phone",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.phone"))+" ")]),t("th",{staticClass:"role",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.role"))+" ")]),t("th",{attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.departments"))+" ")]),t("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.isEmpty?e._e():t("tbody",{staticClass:"datatable-body"},e._l(e.entries,function(a){return t("tr",{key:a.id,staticClass:"datatable-row"},[t("people-name-cell",{staticClass:"name datatable-row-header",attrs:{person:a}}),t("td",{staticClass:"email"},[e._v(e._s(a.email))]),t("td",{staticClass:"phone"},[e._v(e._s(a.phone))]),t("td",{staticClass:"role"},[e._v(e._s(e.$t(`people.role.${a.role}`)))]),t("department-names-cell",{attrs:{departments:a.departments}}),t("td",{staticClass:"actions"},[e.isCurrentUserAdmin?t("button",{staticClass:"button",on:{click:function($){return e.removePerson(a)}}},[e._v(" "+e._s(e.$t("main.remove"))+" ")]):e._e()])],1)}),0)])]),e.isEmpty?t("p",{staticClass:"has-text-centered mt2"},[e._v(" "+e._s(e.$t("people.empty_team"))+" ")]):t("p",{staticClass:"has-text-centered footer-info"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("people.persons",e.entries.length))+" ")])])},_=[],u=n(m,d,_,!1,null,"e908fe8c",null,null);const f=u.exports,h={name:"team",components:{PeopleField:l,ProductionTeamList:f},data(){return{person:null,isTeamLoading:!1,isTeamLoadingError:!1}},computed:{...o(["currentProduction","productionMap","openProductions","personMap","people"]),teamPersons(){return i(this.currentProduction.team.map(s=>this.personMap.get(s)))},unlistedPeople(){return this.people.filter(s=>!this.currentProduction.team.includes(s.id)&&s.active)}},methods:{...r(["addPersonToTeam"]),addPerson(){this.person&&(this.addPersonToTeam(this.person),setTimeout(()=>{this.$refs["people-field"].clear()},1))},removePerson(s){this.removePersonFromTeam(s)}},metaInfo(){return{title:`${this.currentProduction.name} | ${this.$t("people.team")} - Kitsu`}}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"people page fixed-page"},[t("div",{staticClass:"flexrow mt2 add-people"},[t("people-field",{ref:"people-field",staticClass:"flexrow-item add-people-field",attrs:{people:e.unlistedPeople,placeholder:e.$t("people.add_member_to_team"),big:""},on:{enter:e.addPerson},model:{value:e.person,callback:function(a){e.person=a},expression:"person"}}),t("button",{staticClass:"button flexrow-item",on:{click:e.addPerson}},[e._v(" "+e._s(e.$t("main.add"))+" ")])],1),t("production-team-list",{attrs:{entries:e.teamPersons,"is-loading":e.isTeamLoading,"is-error":e.isTeamLoadingError},on:{remove:e.removePerson}})],1)},C=[],P=n(h,v,C,!1,null,"5044d282",null,null);const x=P.exports;export{x as default};
//# sourceMappingURL=Team-E6UmnzbZ.js.map