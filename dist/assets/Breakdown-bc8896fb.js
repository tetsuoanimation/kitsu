import{n as r,c as _,C as v,M as C,m as p,b as f,o as g,p as y,q as b,k as w,r as E,t as k,B as T,i as x,D as A,u as M,E as S,I as $,v as I,w as D,x as O,y as L,z as h,A as u,F as m,G as F}from"./index-bfd2aaa7.js";import{B}from"./ButtonHrefLink-c1f13799.js";const q={name:"available-asset-block",props:{asset:{default:()=>({id:"",name:""}),type:Object},active:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean},bigMode:{default:!0,type:Boolean}},computed:{},methods:{addOneAsset(t){this.active&&this.$emit("add-one",this.asset.id)},addTenAssets(t){this.active&&this.$emit("add-ten",this.asset.id)}}};var R=function(){var e=this,s=e._self._c;return e.textMode?s("div",{staticClass:"asset-text flexrow-item flexrow"},[s("span",{staticClass:"asset-text-name flexrow-item"},[e._v(" "+e._s(e.asset.name)+" ")]),s("span",{staticClass:"modify-asset flexrow-item",on:{click:e.addOneAsset}},[e._v(" + 1 ")])]):s("div",{class:{asset:!0,"big-asset":e.bigMode,active:e.active},attrs:{id:"casting-"+e.asset.id,title:e.asset.name}},[s("div",{staticClass:"asset-add",on:{click:e.addOneAsset}},[e._v("+ 1")]),s("div",{staticClass:"asset-add-10",on:{click:e.addTenAssets}},[e._v("+ 10")]),e.asset.preview_file_id.length>0?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+e.asset.preview_file_id+".png",expression:`
        '/api/pictures/thumbnails-square/preview-files/' +
        asset.preview_file_id +
        '.png'
      `}],attrs:{alt:""}})]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[e._v(" "+e._s(e.asset.name)+" ")])])])},N=[],P=r(q,R,N,!1,null,"b490f5eb",null,null);const V=P.exports;const U={name:"edit-label-modal",mixins:[_],components:{Combobox:v,ModalFooter:C},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},label:{type:String}},mounted(){this.form.label=this.label},data(){return{asset:null,form:{label:"animate"},typeOptions:[{label:this.$t("breakdown.options.animate"),value:"animate"},{label:this.$t("breakdown.options.fixed"),value:"fixed"}]}},computed:{...p([])},methods:{...f([]),confirm(){return this.$emit("confirm",this.form)}},watch:{label(){this.form.label=this.label}}};var K=function(){var e=this,s=e._self._c;return s("div",{class:{modal:!0,"is-active":e.active}},[s("div",{staticClass:"modal-background",on:{click:function(i){return e.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box content"},[s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("breakdown.edit_label"))+" ")]),s("form",{on:{submit:function(i){i.preventDefault()}}},[s("combobox",{directives:[{name:"focus",rawName:"v-focus"}],ref:"typeField",attrs:{label:e.$t("breakdown.label"),options:e.typeOptions},on:{enter:e.confirm},model:{value:e.form.label,callback:function(i){e.$set(e.form,"label",i)},expression:"form.label"}}),s("modal-footer",{attrs:{"is-error":e.isError,"is-loading":e.isLoading},on:{confirm:e.confirm,cancel:function(i){return e.$emit("cancel")}}})],1)])])])},H=[],j=r(U,K,H,!1,null,"9103cb3b",null,null);const z=j.exports;const Y={name:"asset-block",components:{},data(){return{initialLoading:!0,loading:{EditLabel:!1}}},props:{asset:{default:()=>({id:"",name:""}),type:Object},nbOccurences:{default:1,type:Number},active:{default:!0,type:Boolean},readOnly:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean},bigMode:{default:!1,type:Boolean}},computed:{},methods:{removeOneAsset(t){this.$emit("remove-one",this.asset.asset_id,this.nbOccurences)},addOneAsset(t){this.$emit("add-one",this.asset.asset_id,this.nbOccurences)},shortenName(t){return g.shortenText(t,13)},onEditLabelClicked(){this.readOnly||this.$emit("edit-label",this.asset,this.asset.label)}}};var G=function(){var e=this,s=e._self._c;return e.textMode?s("div",{staticClass:"asset-text flexrow-item flexrow"},[s("span",{staticClass:"asset-text-name flexrow-item"},[e._v(" "+e._s(e.asset.name)+" ("+e._s(e.nbOccurences)+") ")]),s("span",{staticClass:"filler"}),e.readOnly?e._e():s("span",{staticClass:"modify-asset flexrow-item",on:{click:e.removeOneAsset}},[e._v(" - 1 ")])]):s("div",{class:{asset:!0,big:!0,"big-asset":e.bigMode,casted:!0,active:e.active,labelled:!0},attrs:{title:`${e.asset.name} (${e.nbOccurences})`}},[s("div",{staticClass:"asset-wrapper"},[e.readOnly?e._e():s("div",{staticClass:"asset-add-1",on:{click:e.addOneAsset}},[e._v("+ 1")]),e.readOnly?e._e():s("div",{staticClass:"asset-add",on:{click:e.removeOneAsset}},[e._v("- 1")]),e.asset.preview_file_id?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+e.asset.preview_file_id+".png",expression:`
          '/api/pictures/thumbnails-square/preview-files/' +
          asset.preview_file_id +
          '.png'
        `}],attrs:{alt:""}}),e.nbOccurences>1?s("span",{staticClass:"nb-occurences"},[e._v(" "+e._s(e.nbOccurences)+" ")]):e._e()]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[e._v(" "+e._s(e.shortenName(e.asset.name))+" ("+e._s(e.nbOccurences)+") ")])])]),s("div",{staticClass:"asset-label",attrs:{label:e.asset.label},on:{click:e.onEditLabelClicked}},[e._v(" "+e._s(e.asset.label||e.$t("breakdown.options.animate"))+" ")])])},X=[],Q=r(Y,G,X,!1,null,"559b24d1",null,null);const J=Q.exports;const W={name:"shot-line",mixins:[y,b],components:{AssetBlock:J,EntityThumbnail:w},props:{entity:{default:()=>{},type:Object},previewFileId:{default:"",type:String},selected:{default:!1,type:Boolean},name:{default:"",type:String},assets:{default:()=>[],type:Array},assetTypes:{default:()=>[],type:Array},readOnly:{default:!1,type:Boolean},textMode:{default:!1,type:Boolean},metadataDescriptors:{default:()=>[],type:Array},metadataDisplayHeaders:{default:()=>{},type:Object},bigMode:{default:!1,type:Boolean},isDescription:{default:!0,type:Boolean},isSaveError:{default:!1,type:Boolean}},computed:{...p(["isCurrentUserManager","isCurrentUserSupervisor","isFrameIn","isFrameOut","isFrames","isShowInfosBreakdown","user"]),chunks(){return this.name.split(" / ").filter(e=>e&&e!=="undefined")},assetsByAssetTypesMap(){const t={};return this.assets.forEach(e=>{e[0]&&(t[e[0].asset_type_name]=e)}),t}},methods:{onClicked(t){this.$emit("click",this.entity.id,t)},onEditLabelClicked(t,e){this.$emit("edit-label",t,e,this.entity.id)},removeOneAsset(t,e){this.$emit("remove-one",t,this.entity.id,e)},addOneAsset(t,e){this.$emit("add-one",t,this.entity.id,e)},onDescriptionChanged(t,e){this.$emit("description-changed",t,e.target.value)},onStandbyChanged(t,e){this.$emit("standby-changed",t,e.target.checked)},compileMarkdown(t){return E(t)},nbAssetsForType(t){return this.assetsByAssetTypesMap[t].reduce((e,s)=>e+s.nb_occurences,0)}}};var Z=function(){var e=this,s=e._self._c;return s("div",{class:{shot:!0,selected:e.selected,unselectable:!0,stdby:e.entity?e.entity.is_casting_standby:!1,"text-mode":e.textMode},attrs:{id:e.entity.id},on:{click:function(i){return e.onClicked(i)}}},[s("div",{staticClass:"flexrow-item sticky"},[e.isSaveError?s("p",{staticClass:"error has-text-left info-message"},[e._v(" "+e._s(e.$t("breakdown.save_error"))+" ")]):e._e(),s("div",{staticClass:"flexrow"},[s("entity-thumbnail",{staticClass:"flexrow-item mr1",attrs:{entity:{},height:e.bigMode?100:60,width:e.bigMode?150:90,"empty-height":e.bigMode?100:60,"empty-width":e.bigMode?150:90,"preview-file-id":e.previewFileId}}),s("div",{staticClass:"shot-name flexrow-item ml05"},e._l(e.chunks,function(i,a){return s("div",{key:`chunk-${a}`},[e._v(" "+e._s(i)+" ")])}),0)],1)]),e.isShowInfosBreakdown?e._e():s("div",{staticClass:"standby-column flexrow-item"},[s("input",{style:[e.isCurrentUserManager?{cursor:"pointer"}:{cursor:"auto"}],attrs:{type:"checkbox",disabled:!e.isCurrentUserManager},domProps:{checked:e.entity?e.entity.is_casting_standby:!1},on:{input:i=>e.onStandbyChanged(e.entity,i)}})]),!e.isShowInfosBreakdown&&e.isDescription?s("div",{staticClass:"description-column flexrow-item"},[e.readOnly?s("div",{staticClass:"tooltip-text",domProps:{innerHTML:e._s(e.compileMarkdown(e.entity.description))}}):s("textarea",{ref:"text",staticClass:"tooltip-editor",domProps:{value:e.entity.description},on:{input:i=>e.onDescriptionChanged(e.entity,i)}})]):e._e(),e.isFrames&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frames?s("div",{staticClass:"frames-column flexrow-item"},[e.isCurrentUserManager?s("input",{staticClass:"input-editor",attrs:{step:"1",type:"number",min:"0"},domProps:{value:e.entity.nb_frames},on:{input:i=>e.onNbFramesChanged(e.entity,i.target.value)}}):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.entity.nb_frames)+" ")])]):e._e(),e.isFrameIn&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frameIn?s("div",{staticClass:"frames-column flexrow-item"},[e.isCurrentUserManager?s("input",{staticClass:"input-editor",attrs:{step:"1",type:"number",min:"0"},domProps:{value:e.getMetadataFieldValue({field_name:"frame_in"},e.entity)},on:{input:i=>e.onMetadataFieldChanged(e.entity,{field_name:"frame_in"},i)}}):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.getMetadataFieldValue({field_name:"frame_in"},e.entity))+" ")])]):e._e(),e.isFrameOut&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frameOut?s("div",{staticClass:"frames-column flexrow-item"},[e.isCurrentUserManager?s("input",{staticClass:"input-editor",attrs:{step:"1",type:"number",min:"0"},domProps:{value:e.getMetadataFieldValue({field_name:"frame_out"},e.entity)},on:{input:i=>e.onMetadataFieldChanged(e.entity,{field_name:"frame_out"},i)}}):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.getMetadataFieldValue({field_name:"frame_out"},e.entity))+" ")])]):e._e(),e._l(e.visibleMetadataDescriptors,function(i,a){return e.isShowInfosBreakdown?e._e():s("div",{key:"desc"+e.entity.id+"-"+i.id,staticClass:"metadata-descriptor flexrow-item",attrs:{title:e.entity.data?e.entity.data[i.field_name]:""}},[i.choices.length===0&&(e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments))?s("input",{staticClass:"input-editor",domProps:{value:e.getMetadataFieldValue(i,e.entity)},on:{input:n=>e.onMetadataFieldChanged(e.entity,i,n),keyup:function(n){return n.ctrlKey?(o=>e.onInputKeyUp(o,e.getIndex(e.i,e.k),a)).apply(null,arguments):null}}}):i.choices.length>0&&e.getDescriptorChecklistValues(i).length>0?s("div",{staticClass:"metadata-value selectable"},e._l(e.getDescriptorChecklistValues(i),function(n,o){return s("p",{key:`${e.entity.id}-${i.id}-${o}-${n.text}-div`},[s("input",{style:[e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments)?{cursor:"pointer"}:{cursor:"auto"}],attrs:{type:"checkbox",id:`${e.entity.id}-${i.id}-${o}-${n.text}-input`,disabled:!(e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments))},domProps:{checked:e.getMetadataChecklistValues(i,e.entity)[n.text]},on:{change:l=>e.onMetadataChecklistChanged(e.entity,i,n.text,l)}}),s("label",{style:[e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments)?{cursor:"pointer"}:{cursor:"auto"}],attrs:{for:`${e.entity.id}-${i.id}-${o}-${n.text}-input`}},[e._v(" "+e._s(n.text)+" ")])])}),0):e.isCurrentUserManager||e.isSupervisorInDepartments(i.departments)?s("span",{staticClass:"select"},[s("select",{staticClass:"select-input",on:{keyup:function(n){return n.ctrlKey?(o=>e.onInputKeyUp(o,e.getIndex(e.i,e.k),a)).apply(null,arguments):null},change:n=>e.onMetadataFieldChanged(e.entity,i,n)}},e._l(e.getDescriptorChoicesOptions(i),function(n,o){return s("option",{key:`desc-value-${e.entity.id}-${i.id}-${o}-${n.label}-${n.value}`,domProps:{value:n.value,selected:e.getMetadataFieldValue(i,e.entity)===n.value}},[e._v(" "+e._s(n.label)+" ")])}),0)]):s("span",{staticClass:"metadata-value selectable"},[e._v(" "+e._s(e.getMetadataFieldValue(i,e.entity))+" ")])])}),e._l(e.assetTypes,function(i){return s("div",{key:e.entity.id+"-"+i,staticClass:"asset-list flexrow-item"},[e.assetsByAssetTypesMap[i]!==void 0?s("div",{staticClass:"asset-type-line flexcolumn"},[s("div",{staticClass:"flexrow-item mb05"},[e._v(" "+e._s(e.nbAssetsForType(i))+" "+e._s(e.$tc("assets.number",e.nbAssetsForType(i)))+" ")]),s("div",{staticClass:"asset-type-items flexrow-item"},e._l(e.assetsByAssetTypesMap[i],function(a){return s("asset-block",{key:a.id,staticClass:"flexrow-item",attrs:{asset:a,"nb-occurences":a.nb_occurences,"read-only":e.readOnly,"text-mode":e.textMode,"big-mode":e.bigMode},on:{"edit-label":e.onEditLabelClicked,"remove-one":e.removeOneAsset,"add-one":e.addOneAsset}})}),1)]):s("div",{staticClass:"asset-type-line flexrow empty mt05 mb05"},[e._v(" "+e._s(e.$t("breakdown.empty"))+" ")])])})],2)},ee=[],se=r(W,Z,ee,!1,null,"bafb7931",null,null);const te=se.exports;const ie={name:"breakdown-page",mixins:[y],components:{AvailableAssetBlock:V,BuildFilterModal:k,ButtonHrefLink:B,ButtonSimple:T,ComboboxStyled:x,DeleteModal:A,DepartmentName:M,EditAssetModal:S,EditLabelModal:z,ImportModal:$,ImportRenderModal:I,SearchField:D,ShotLine:te,ShowInfosButton:O,Spinner:L},data(){return{assetTypeId:"",castingType:"shot",editedAsset:null,editedEntityId:null,editedAssetLinkLabel:null,episodeId:"",importCsvFormData:{},isBigMode:!1,isLocked:!1,isLoading:!1,isOnlyCurrentEpisode:!1,isTextMode:!1,optionalCsvColumns:["Label"],parsedCSV:[],removalData:{},saveErrors:{},selection:{},sequenceId:"all",errors:{edit:!1,editLabel:!1,importing:!1,importingError:null,remove:!1,stay:!1},loading:{edit:!1,editLabel:!1,importing:!1,remove:!1,stay:!1},modals:{isBuildFilterDisplayed:!1,isEditLabelDisplayed:!1,isNewDisplayed:!1,isImportRenderDisplayed:!1,isRemoveConfirmationDisplayed:!1,importing:!1},success:{edit:!1}}},mounted(){this.isLoading||this.reset(),this.setLastProductionScreen("breakdown"),this.isTextMode=localStorage.getItem("breakdown:text-mode")==="true",window.addEventListener("keydown",this.onKeyDown,!1)},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown)},computed:{...p(["assetMap","assetMetadataDescriptors","assetTypeMap","assetsByType","casting","castingAssetTypeAssets","castingAssetTypesOptions","castingByType","castingCurrentShot","castingEpisodes","castingSequenceShots","castingSequencesOptions","currentEpisode","currentProduction","departmentMap","displayedSequences","displayedShots","episodeMap","episodes","isAssetsLoading","isCurrentUserManager","isFrameIn","isFrameOut","isFrames","isShotsLoading","isShowInfosBreakdown","isTVShow","sequenceMap","shotMap","shotMetadataDescriptors"]),castingTypeOptions(){const t=this.currentProduction.production_type==="assets",e=this.currentProduction.production_type==="shots",s=[];return e||s.push({label:this.$t("assets.title"),value:"asset"}),!t&&(!this.isTVShow||this.currentEpisode&&this.currentEpisode.id!=="main")&&s.unshift({label:this.$t("shots.title"),value:"shot"}),s},availableAssetsByType(){const t=[];return this.assetsByType.forEach(e=>{let s=e.filter(i=>!i.canceled);this.isTVShow&&this.isOnlyCurrentEpisode&&(s=e.filter(i=>i.episode_id===this.currentEpisode.id||i.casting_episode_ids&&i.casting_episode_ids.includes(this.currentEpisode.id))),s.length>0&&t.push(s)}),t},exportUrlPath(){let t=`/api/export/csv/projects/${this.currentProduction.id}/casting.csv`,e=!1;return this.currentEpisode&&(t+=`?episode_id=${this.currentEpisode.id}`,e=!0),this.isShotCasting&&(t+=`${e?"&":"?"}is_shot_casting=${this.isShotCasting}`),t},isEpisodeCasting(){return this.currentEpisode&&this.currentEpisode.id==="all"},isAssetCasting(){return!this.isEpisodeCasting&&this.castingType==="asset"},isShotCasting(){return!this.isEpisodeCasting&&this.castingType==="shot"},castingEntities(){return this.isEpisodeCasting?this.castingEpisodes:this.isShotCasting?this.castingSequenceShots:this.isTVShow&&this.currentEpisode.id!=="main"?this.castingAssetTypeAssets.filter(t=>t.episode_id===this.currentEpisode.id||t.casting_episode_ids.includes(this.currentEpisode.id)):this.isTVShow&&this.currentEpisode.id==="main"?this.castingAssetTypeAssets.filter(t=>!t.episode_id):this.castingAssetTypeAssets},castingAssetTypes(){const t=[],e={};return this.castingEntities.forEach(s=>{this.castingByType[s.id]&&this.castingByType[s.id].forEach(i=>{i[0]&&!e[i[0].asset_type_name]&&(e[i[0].asset_type_name]=!0,t.push(i[0].asset_type_name))})}),t.sort()},editLabelModal(){return this.$refs["edit-label-modal"]},filteredCasting(){const t={};return this.castingEntities.forEach(e=>{this.castingByType[e.id]&&this.castingByType[e.id].forEach(s=>{s.forEach(i=>{const a=`${i.asset_name}${i.asset_type_name}${i.name}`;t[a]=!0})})}),t},isDescription(){return this.castingEntities.some(t=>t.description&&t.description.length>0)},csvColumns(){return this.isTVShow?["Episode","Parent","Name","Asset Type","Asset","Occurences"]:["Parent","Name","Asset Type","Asset","Occurences"]},renderColumns(){return[...this.csvColumns,...this.optionalCsvColumns]},dataMatchers(){return this.isTVShow?["Episode","Name","Asset Type","Asset"]:["Name","Asset Type","Asset"]},metadataDescriptors(){return this.isEpisodeCasting?[]:this.isShotCasting?this.shotMetadataDescriptors:this.assetMetadataDescriptors},metadataDisplayHeaders(){return this.isEpisodeCasting?{}:this.isShotCasting?{fps:!1,frameIn:!0,frameOut:!0,frames:!0,estimation:!1,maxRetakes:!1,resolution:!1,timeSpent:!1}:{estimation:!1,readyFor:!1,timeSpent:!1}}},methods:{...f(["addAssetToCasting","editEpisode","editShot","editAsset","displayMoreAssets","loadEpisodeCasting","loadEpisodes","loadAssetCasting","loadAssets","loadShotCasting","loadShots","newAsset","removeAssetFromCasting","saveCasting","setAssetLinkLabel","setAssetSearch","setCastingEpisodes","setCastingAssetType","setCastingAssetTypes","setCastingEpisode","setCastingForProductionEpisodes","setCastingSequence","setCurrentEpisode","setEntityCasting","setLastProductionScreen","uploadCastingFile"]),reset(){if(!this.isTVShow){const t={...this.$route};t&&t.params&&t.params.episode_id&&(t.name="breakdown",t.params.episode_id=null,this.$router.push(t))}this.isLoading=!0,setTimeout(()=>{this.reloadEntities()},100)},reloadEntities(){this.isLoading=!0,this.loadShots(()=>{this.isTVShow?(this.currentEpisode&&(this.episodeId=this.currentEpisode.id),this.setCastingEpisode(this.episodeId),this.setCastingForProductionEpisodes()):this.setCastingEpisode(null),this.loadAssets(!0).then(()=>{this.isLoading=!1,this.displayMoreAssets(),this.setCastingAssetTypes(),this.assetTypeId?this.setCastingAssetType(this.assetTypeId):this.setCastingSequence(this.sequenceId||"all"),this.resetSelection(),(this.currentEpisode&&this.currentEpisode.id==="main"||this.currentProduction.production_type==="assets")&&(this.castingType="asset")})})},resetSelection(){const t={};this.isEpisodeCasting?this.castingEpisodes.forEach(e=>{t[e.id]=!1}):this.isShotCasting?this.castingSequenceShots.forEach(e=>{t[e.id]=!1}):this.castingAssetTypeAssets.forEach(e=>{t[e.id]=!1}),this.selection=t},confirmBuildFilter(t){this.modals.isBuildFilterDisplayed=!1,this.$refs["search-field"].setValue(t),this.onSearchChange(t)},onSearchChange(t){this.setAssetSearch(t),this.displayMoreAssets(),this.displayMoreAssets()},selectEntity(t,e){const s={...this.selection};!(e.ctrlKey||e.metaKey)&&!e.shitKey&&this.clearSelection(),this.previousEntityId&&e.shiftKey&&this.selectRange(this.previousEntityId,t),(!this.previousEntityId||!e.shiftKey)&&(this.previousEntityId=t);const i=Object.keys(s).filter(a=>s[a]).length;!s[t]||i>1&&!(e.ctrlKey||e.metaKey)?this.selection[t]=!0:s[t]&&(e.ctrlKey||e.metaKey)&&(this.selection[t]=!1)},clearSelection(){Object.keys(this.selection).filter(t=>this.selection[t]).forEach(t=>{this.selection[t]=!1})},selectRange(t,e){const s=Object.keys(this.selection),i=s.findIndex(o=>o===t),a=s.findIndex(o=>o===e);let n=[];i<a?n=h(i,a):n=h(a,i),n.forEach(o=>{o>=0&&(this.selection[s[o]]=!0)})},setLock(){this.$options.lockTimeout||(this.$options.lockTimeout=setTimeout(()=>{this.isLocked=!1},3e3))},addOneAsset(t){this.isLocked=!0,Object.keys(this.selection).filter(e=>this.selection[e]).forEach(e=>{this.addAssetToCasting({entityId:e,assetId:t,nbOccurences:1,label:this.castingType==="shot"?"animate":"fixed"}),delete this.saveErrors[e],this.saveCasting(e).then(this.setLock).catch(s=>{this.saveErrors[e]=!0,console.error(s)})})},addTenAssets(t){this.isLocked=!0,Object.keys(this.selection).filter(e=>this.selection[e]).forEach(e=>{this.addAssetToCasting({entityId:e,assetId:t,nbOccurences:10}),delete this.saveErrors[e],this.saveCasting(e).then(this.setLock).catch(s=>{this.saveErrors[e]=!0,console.error(s)})})},confirmAssetRemoval(){this.saveAssetRemoval(this.removalData.entityId,this.removalData.assetId,this.removalData.nbOccurences)},saveAssetRemoval(t,e,s){this.loading.remove=!0,this.removeAssetFromCasting({entityId:t,assetId:e,nbOccurences:s}),delete this.saveErrors[t],this.saveCasting(t).then(()=>{this.setLock(),this.modals.isRemoveConfirmationDisplayed=!1}).catch(i=>{this.saveErrors[t]=!0,this.errors.remove=!0,console.error(i)}).finally(()=>{this.loading.remove=!1})},removeOneAsset(t,e,s){this.isLocked=!0,this.isEpisodeCasting&&s===1?(this.removalData={assetId:t,entityId:e,nbOccurences:s},this.modals.isRemoveConfirmationDisplayed=!0):this.saveAssetRemoval(e,t,1)},removeTenAssets(t,e,s){this.isLocked=!0,this.isEpisodeCasting&&s<10?(this.removalData={assetId:t,entityId:e,nbOccurences:s},this.modals.isRemoveConfirmationDisplayed=!0):this.saveAssetRemoval(e,t,10)},onAssetListScroll(t,e){const s=this.$refs["asset-list"];s.scrollHeight-s.offsetHeight<e.scrollTop+100&&this.displayMoreAssets()},showImportModal(){this.modals.importing=!0},hideImportModal(){this.modals.importing=!1},showImportRenderModal(){this.modals.isImportRenderDisplayed=!0},hideImportRenderModal(){this.modals.isImportRenderDisplayed=!1},renderImport(t,e){this.loading.importing=!0,this.errors.importing=!1,e==="file"&&(t=t.get("file")),u.processCSV(t).then(s=>{this.parsedCSV=s,this.hideImportModal(),this.loading.importing=!1,this.showImportRenderModal()})},uploadImportFile(t){const e=new FormData,s="import.csv",i=new File([t.join(`
`)],s,{type:"text/csv"});e.append("file",i),this.loading.importing=!0,this.errors.importing=!1,this.errors.importingError=null,this.importCsvFormData=e,this.uploadCastingFile(this.importCsvFormData).then(()=>{this.loading.importing=!1,this.hideImportRenderModal(),this.sequenceId&&this.setCastingSequence(this.sequenceId||"all")}).catch(a=>{this.loading.importing=!1,this.errors.importingError=a,this.errors.importing=!0})},resetImport(){this.errors.importing=!1,this.errors.importingError=null,this.hideImportRenderModal(),this.importCsvFormData=void 0,this.$refs["import-modal"].reset(),this.showImportModal()},updateUrl(){let t=!1,e={};if(this.isEpisodeCasting?this.$route.params.episode_id!==this.episodeId&&(t=!0,e={name:"breakdown-episode",params:{production_id:this.currentProduction.id,episode_id:this.episodeId}}):this.isAssetCasting?this.$route.params.asset_type_id!==this.assetTypeId&&(t=!0,e={name:"breakdown-asset-type",params:{production_id:this.currentProduction.id,asset_type_id:this.assetTypeId}}):(this.$route.params.sequence_id||"all")!==this.sequenceId&&(t=!0,e={name:"breakdown-sequence",params:{production_id:this.currentProduction.id,sequence_id:this.sequenceId||"all"}}),t){let s=this.$route.params.episode_id;!s&&this.currentEpisode&&(s=this.currentEpisode.id),s&&(e.name=`episode-${e.name}`,e.params.episode_id=s,s==="all"&&(e.params.sequence_id="all")),this.$router.push(e)}},onEditLabelClicked(t,e,s){this.editedAsset=t,this.editedEntityId=s,this.editedAssetLinkLabel=e,this.modals.isEditLabelDisplayed=!0},confirmEditLabel(t={}){const e=t.label;this.loading.editLabel=!0,this.setAssetLinkLabel({label:e,asset:this.editedAsset,targetEntityId:this.editedEntityId}).then(()=>{this.modals.isEditLabelDisplayed=!1,this.loading.editLabel=!1}).catch(s=>{console.error(s),this.errors.editLabel=!0,this.loading.editLabel=!1})},toggleTextMode(){this.isTextMode=!this.isTextMode,localStorage.setItem("breakdown:text-mode",this.isTextMode)},confirmNewAssetStay(t){this.loading.stay=!0,this.success.edit=!1,this.newAsset(t).then(e=>{this.loading.stay=!1,this.loading.edit=!1,this.resetLightEditModal(e),this.$refs["edit-asset-modal"].focusName(),this.success.edit=!0}).catch(e=>{console.error(e),this.loading.stay=!1,this.loading.edit=!1,this.success.edit=!1,this.errors.edit=!0})},confirmNewAsset(t){this.loading.edit=!0,this.errors.edit=!1,this.newAsset(t).then(()=>{this.loading.edit=!1,this.modals.isNewDisplayed=!1}).catch(e=>{console.error(e),this.loading.edit=!1,this.errors.edit=!0})},resetLightEditModal(t){const e={name:"",entity_type_id:t.entit_type_id,production_id:this.currentProduction.id};this.assetToEdit=e},onKeyDown(t){["INPUT","TEXTAREA"].includes(t.target.tagName)||(t.ctrlKey&&t.keyCode===67?this.copyCasting():t.ctrlKey&&t.keyCode===86&&this.pasteCasting())},copyCasting(){const t=Object.keys(this.selection).find(s=>this.selection[s]),e=this.casting[t];m.copyCasting(e)},pasteCasting(){const t=m.pasteCasting();return!t||t.length===0?void 0:(Object.keys(this.selection).filter(s=>this.selection[s]).forEach(s=>{this.setEntityCasting({entityId:s,casting:t}),delete this.saveErrors[s],this.saveCasting(s).then(this.setLock).catch(i=>{this.saveErrors[s]=!0,console.error(i)})}),t)},onMetadataChanged({entry:t,descriptor:e,value:s}){const i={};i[e.field_name]=s;const a={id:t.id,data:i};this.isEpisodeCasting?this.editEpisode(a):this.isShotCasting?this.editShot(a):this.editAsset(a)},onDescriptionChanged(t,e){const s={id:t.id,description:e};this.isEpisodeCasting?this.editEpisode(s):this.isShotCasting?this.editShot(s):this.editAsset(s)},onStandbyChanged(t,e){const s={id:t.id,is_casting_standby:e};this.isEpisodeCasting?this.editEpisode(s):this.isShotCasting?this.editShot(s):this.editAsset(s)},descriptorCurrentDepartments(t){return(t.departments||[]).map(s=>this.departmentMap.get(s))},getEntityName(t){return this.sequenceId==="all"&&(!this.isTVShow||this.isTVShow&&this.currentEpisode.id!=="all")?t.sequence_name+" / "+t.name:t.name},getCsvFileName(){const t=[F().format("YYYY-MM-DD"),"kitsu",this.castingType+"s",this.currentProduction.name,this.$t("breakdown.title")];return this.isTVShow?this.currentEpisode&&(this.currentEpisode.id=="all"?t.splice(4,0,"all"):this.currentEpisode.id=="main"?(t.splice(4,0,"main pack"),this.assetTypeId!=="all"&&this.castingType=="asset"&&t.splice(5,0,this.assetTypeMap.get(this.assetTypeId).name)):(t.splice(4,0,this.currentEpisode.name),this.sequenceId!=="all"&&this.castingType=="shot"&&t.splice(5,0,this.sequenceMap.get(this.sequenceId).name),this.assetTypeId!=="all"&&this.castingType=="asset"&&t.splice(5,0,this.assetTypeMap.get(this.assetTypeId).name))):(this.sequenceId!=="all"&&this.castingType=="shot"&&t.splice(5,0,this.sequenceMap.get(this.sequenceId).name),this.assetTypeId!=="all"&&this.castingType=="asset"&&t.splice(5,0,this.assetTypeMap.get(this.assetTypeId).name)),g.slugify(t.join("_"))},getCsvFileHeaders(){const t=[this.$t("shots.fields.name"),this.$t("breakdown.fields.standby")];return this.isFrames&&t.push(this.$t("main.frames")),this.isFrameIn&&t.push(this.$t("main.frame_in")),this.isFrameOut&&t.push(this.$t("main.frame_out")),this.metadataDescriptors.forEach(e=>{t.push(e.name)}),t.concat(this.castingAssetTypes)},getCsvEntries(){return this.castingEntities.map(e=>{const s=[e.name,e.is_casting_standby?"X":""];this.isFrames&&s.push(e.nb_frames),this.isFrameIn&&s.push(e.data.frame_in),this.isFrameOut&&s.push(e.data.frame_out),this.metadataDescriptors.forEach(n=>{s.push(e.data[n.field_name]||"")});const i=this.castingByType[e.id]||[],a={};return i.forEach(n=>{a[n[0].asset_type_name]=n}),this.castingAssetTypes.forEach(n=>{const o=a[n]||[],l=o.reduce((d,c)=>d+c.nb_occurences,0);if(l>0){let d=l+" assets: ";d+=o.map(c=>c.asset_name+" ("+c.nb_occurences+")").join(", "),s.push(d)}else s.push("")}),s})},exportViewToCsv(){const t=this.getCsvEntries(),e=this.getCsvFileName(),s=this.getCsvFileHeaders();u.buildCsvFile(e,[s].concat(t))}},watch:{$route(){},castingType(){if(this.isShotCasting&&this.displayedSequences.length>0&&(this.sequenceId=this.displayedSequences[0].id,this.assetTypeId=""),this.isAssetCasting&&this.castingAssetTypesOptions.length>0){const t=this.$route.params.asset_type_id;this.sequenceId="all",this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0&&(this.assetTypeId=this.castingAssetTypesOptions[0].value)}},sequenceId(){this.sequenceId&&this.displayedSequences&&this.displayedSequences.length>0&&!this.isAssetCasting&&(this.setCastingSequence(this.sequenceId),this.updateUrl(),this.resetSelection())},assetTypeId(){this.assetTypeId&&this.castingAssetTypesOptions.length>0&&(this.setCastingAssetType(this.assetTypeId),this.updateUrl(),this.resetSelection())},episodeId(){this.episodeId&&this.episodes&&this.episodes.length>0&&(this.episodeId==="all"&&this.setCastingForProductionEpisodes(this.episodeId),this.resetSelection())},castingSequencesOptions(){if(this.$route.path.indexOf("asset-type")<0){const t=this.$route.params.sequence_id||"all";t&&this.sequenceMap.get(t)?this.sequenceId=t:this.castingSequencesOptions.length>0?this.sequenceId=this.castingSequencesOptions[0].value:this.sequenceId="all"}},castingAssetTypesOptions(){if(this.$route.path.indexOf("asset-type")>0){const t=this.$route.params.asset_type_id;this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0?this.assetTypeId=this.castingAssetTypesOptions[0].value:this.assetTypeId=""}},currentProduction(){this.isLoading||this.reset()},currentEpisode(){this.currentEpisode&&this.episodeId!==this.currentEpisode.id&&!this.isLoading&&(this.currentEpisode.id==="all"?this.episodeId="all":this.reset())},displayedSequences(){this.$store.commit("CASTING_SET_SEQUENCES",this.displayedSequences)}},socket:{events:{"episode:casting-update"(t){const e=this.episodeMap.get(t.episode_id);e&&!this.isLocked&&this.loadEpisodeCasting(e)},"shot:casting-update"(t){const e=this.shotMap.get(t.shot_id);e&&e.sequence_id===this.sequenceId&&!this.isLocked&&this.loadShotCasting(e)},"asset:casting-update"(t){const e=this.assetMap.get(t.asset_id);e&&e.asset_type_id===this.assetTypeId&&!this.isLocked&&this.loadAssetCasting(e)}}},metaInfo(){const t=this.$t("breakdown.title");return{title:`${this.currentProduction.name} ${t} - Kitsu`}}};var ae=function(){var e=this,s=e._self._c;return s("div",{staticClass:"breakdown page"},[s("div",{staticClass:"breakdown-columns"},[s("div",{staticClass:"breakdown-column casting-column"},[s("div",{staticClass:"flexrow mb1"},[e.isEpisodeCasting?s("div",[s("h2",{staticClass:"subtitle mt05"},[e._v(" "+e._s(e.$t("breakdown.episode_casting"))+" ")])]):e._e(),e.isEpisodeCasting?e._e():s("combobox-styled",{staticClass:"mr1",attrs:{label:e.$t("main.for"),options:e.castingTypeOptions},model:{value:e.castingType,callback:function(i){e.castingType=i},expression:"castingType"}}),e.isShotCasting?s("combobox-styled",{attrs:{label:e.$t("shots.fields.sequence"),options:e.castingSequencesOptions},model:{value:e.sequenceId,callback:function(i){e.sequenceId=i},expression:"sequenceId"}}):e._e(),e.isAssetCasting?s("combobox-styled",{attrs:{label:e.$t("tasks.fields.asset_type"),options:e.castingAssetTypesOptions},model:{value:e.assetTypeId,callback:function(i){e.assetTypeId=i},expression:"assetTypeId"}}):e._e(),s("span",{staticClass:"filler"}),s("show-infos-button",{staticClass:"flexrow-item",attrs:{"is-breakdown":!0}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.isTextMode?e.$t("breakdown.picture_mode"):e.$t("breakdown.text_mode"),icon:"type","is-on":e.isTextMode,"is-responsive":!0},on:{click:e.toggleTextMode}}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"grid","is-on":e.isBigMode,title:e.$t("breakdown.big_pictures_mode")},on:{click:function(i){e.isBigMode=!e.isBigMode}}}),e.isCurrentUserManager?s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.import_file"),icon:"upload","is-responsive":!0},on:{click:e.showImportModal}}):e._e(),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download","is-responsive":!0,title:e.$t("main.csv.export_current_view")},on:{click:e.exportViewToCsv}}),e.isCurrentUserManager?s("button-href-link",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.export_file"),icon:"download","is-responsive":!0,path:e.exportUrlPath}}):e._e()],1),e.isLoading?s("spinner",{staticClass:"mt1"}):s("div",{staticClass:"casting-list"},[s("div",{staticClass:"mt1"},[s("div",{staticClass:"header flexrow"},[s("div",{staticClass:"entity-header"},[e._v(" "+e._s(e.$t("shots.fields.name"))+" ")]),e.isShowInfosBreakdown?e._e():s("div",{staticClass:"standby-header"},[e._v(" "+e._s(e.$t("breakdown.fields.standby"))+" ")]),!e.isShowInfosBreakdown&&e.isDescription?s("div",{staticClass:"description-header"},[e._v(" "+e._s(e.$t("shots.fields.description"))+" ")]):e._e(),e.isShotCasting&&e.isFrames&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frames?s("div",{staticClass:"frames-header"},[e._v(" "+e._s(e.$t("shots.fields.nb_frames"))+" ")]):e._e(),e.isShotCasting&&e.isFrameIn&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frameIn?s("div",{staticClass:"frames-header"},[e._v(" "+e._s(e.$t("shots.fields.frame_in"))+" ")]):e._e(),e.isShotCasting&&e.isFrameOut&&!e.isShowInfosBreakdown&&e.metadataDisplayHeaders.frameOut?s("div",{staticClass:"frames-header"},[e._v(" "+e._s(e.$t("shots.fields.frame_out"))+" ")]):e._e(),e._l(e.visibleMetadataDescriptors,function(i){return e.isShowInfosBreakdown?e._e():s("div",{key:"descriptor-header-"+i.id,staticClass:"descriptor-header"},[e._l(e.descriptorCurrentDepartments(i),function(a){return s("department-name",{key:a.id,style:{padding:"0px 0px"},attrs:{department:a,"only-dot":!0}})}),s("span",{staticClass:"flexrow-item descriptor-name"},[e._v(" "+e._s(i.name)+" ")])],2)}),e._l(e.castingAssetTypes,function(i){return s("div",{key:i,staticClass:"asset-type-header"},[e._v(" "+e._s(i)+" ")])})],2),e._l(e.castingEntities,function(i){return s("shot-line",{key:i.id,attrs:{entity:i,"preview-file-id":i.preview_file_id,selected:e.selection[i.id],name:e.getEntityName(i),assets:e.castingByType[i.id]||[],"asset-types":e.castingAssetTypes,"read-only":!e.isCurrentUserManager,"text-mode":e.isTextMode,"metadata-descriptors":e.metadataDescriptors,"metadata-display-headers":e.metadataDisplayHeaders,"big-mode":e.isBigMode,"is-description":e.isDescription,"is-save-error":e.saveErrors[i.id]},on:{"edit-label":e.onEditLabelClicked,"add-one":e.addOneAsset,"remove-one":e.removeOneAsset,click:e.selectEntity,"metadata-changed":e.onMetadataChanged,"description-changed":e.onDescriptionChanged,"standby-changed":e.onStandbyChanged}})})],2)])],1),e.isCurrentUserManager?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onAssetListScroll,expression:"onAssetListScroll"}],ref:"asset-list",staticClass:"breakdown-column assets-column"},[s("h2",{staticClass:"flexrow subtitle"},[e._v(" "+e._s(e.$t("breakdown.all_assets"))+" ")]),s("div",{staticClass:"flexrow mb1 mt0"},[s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("assets.new_asset"),icon:"plus"},on:{click:function(i){e.modals.isNewDisplayed=!0}}}),e.isTVShow&&!e.isEpisodeCasting?s("button-simple",{staticClass:"flexrow-item",attrs:{text:e.$t("assets.only_current_episode"),"is-on":e.isOnlyCurrentEpisode},on:{click:function(i){e.isOnlyCurrentEpisode=!e.isOnlyCurrentEpisode}}}):e._e()],1),s("div",{staticClass:"filters-area flexrow"},[s("search-field",{ref:"search-field",staticClass:"flexrow-item",on:{change:e.onSearchChange}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("entities.build_filter.title"),icon:"funnel"},on:{click:function(i){e.modals.isBuildFilterDisplayed=!0}}})],1),e.isAssetsLoading?s("spinner"):e._l(e.availableAssetsByType,function(i){return s("div",{key:i.length>0?i[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[e._v(" "+e._s(i.length>0?i[0].asset_type_name:"")+" ")]),s("div",{staticClass:"asset-list"},e._l(i,function(a){return s("available-asset-block",{key:a.id,attrs:{asset:a,active:Object.keys(e.selection).length>0,"text-mode":e.isTextMode,"big-mode":e.isBigMode},on:{"add-one":e.addOneAsset,"add-ten":e.addTenAssets}})}),1)])})],2):e._e()]),s("import-render-modal",{attrs:{active:e.modals.isImportRenderDisplayed,"is-loading":e.loading.importing,"is-error":e.errors.importing,"import-error":e.errors.importingError,"parsed-csv":e.parsedCSV,"form-data":e.importCsvFormData,columns:e.renderColumns,dataMatchers:e.dataMatchers,database:e.filteredCasting,"disable-update":!0},on:{reupload:e.resetImport,cancel:e.hideImportRenderModal,confirm:e.uploadImportFile}}),s("import-modal",{ref:"import-modal",attrs:{active:e.modals.importing,"is-loading":e.loading.importing,"is-error":e.errors.importing,"form-data":e.importCsvFormData,columns:e.csvColumns,"optional-columns":e.optionalCsvColumns},on:{cancel:e.hideImportModal,confirm:e.renderImport}}),s("edit-label-modal",{ref:"edit-label-modal",attrs:{active:e.modals.isEditLabelDisplayed,"is-loading":e.loading.editLabel,"is-error":e.loading.editError,asset:e.editedAsset,label:e.editedAssetLinkLabel},on:{cancel:function(i){e.modals.isEditLabelDisplayed=!1},confirm:e.confirmEditLabel}}),s("build-filter-modal",{ref:"build-filter-modal",attrs:{active:e.modals.isBuildFilterDisplayed},on:{confirm:e.confirmBuildFilter,cancel:function(i){e.modals.isBuildFilterDisplayed=!1}}}),s("edit-asset-modal",{ref:"edit-asset-modal",attrs:{active:e.modals.isNewDisplayed,"asset-to-edit":{},"is-error":e.errors.edit,"is-loading":e.loading.edit,"is-loading-stay":e.loading.stay,"is-success":e.success.edit},on:{confirm:e.confirmNewAsset,confirmAndStay:e.confirmNewAssetStay,cancel:function(i){e.modals.isNewDisplayed=!1}}}),s("delete-modal",{attrs:{active:e.modals.isRemoveConfirmationDisplayed,"delete-button-text":e.$t("breakdown.remove.confirm"),"error-text":e.$t("breakdown.remove.error"),"is-loading":e.loading.remove,"is-error":e.loading.error,text:e.$t("breakdown.remove.text")},on:{confirm:e.confirmAssetRemoval,cancel:function(i){e.modals.isRemoveConfirmationDisplayed=!1}}})],1)},ne=[],oe=r(ie,ae,ne,!1,null,"c221d69c",null,null);const de=oe.exports;export{de as default};
//# sourceMappingURL=Breakdown-bc8896fb.js.map