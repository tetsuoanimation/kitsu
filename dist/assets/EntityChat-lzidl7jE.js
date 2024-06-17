import{d as o,af as d,c1 as g,bq as h,m,e as c,c as u,c2 as p,be as _,c3 as y,c4 as M,ac as l,n as f,c5 as v,c6 as C,B as x,S as A,s as k}from"./index--sCEAuLi.js";const w={name:"entity-chat-days",mixins:[o],components:{PeopleAvatar:d,PreviewModal:g,XIcon:h},data(){return{currentAttachment:null}},props:{messages:{type:Array,default:()=>[]}},mounted(){},computed:{...m(["departmentMap","personMap","user"]),messageList(){const s=[...this.messages].sort((i,r)=>c(i.created_at).isAfter(c(r.created_at))),t=[];let e={data:null},a=null;return s.forEach(i=>{const r=c(i.created_at).tz(this.user.timezone);if(a&&r.format("YYYY-MM-DD")===a.date)if(e&&e.data&&i.person_id===e.data.person_id&&c(i.created_at).diff(e.data.created_at,"m")<5)e.texts.push(i);else{const n={data:i,texts:[i||""]};e=n,a.messages.push(n)}else{const n={data:i,texts:[i||""]};a={title:r.format("LL"),date:r.format("YYYY-MM-DD"),messages:[n]},e=n,t.push(a)}}),t.reverse()}},methods:{...u([]),renderComment:p,renderDate(s){return s=c(_(s)).tz(this.user.timezone),s.tz(this.user.timezone).format("HH:mm")},getAttachmentThumbnailPath:y,getDownloadAttachmentPath:M,pictureAttachments(s){return s?s.filter(t=>l.IMG_EXTENSIONS.includes(t.extension)).sort((t,e)=>t.name.localeCompare(e.name,void 0,{numeric:!0})):[]},fileAttachments(s){return s?s.filter(t=>!l.IMG_EXTENSIONS.includes(t.extension)).sort((t,e)=>t.name.localeCompare(e.name,void 0,{numeric:!0})):[]},scrollToBottom(){this.$refs.messages.scrollTop=this.$refs.messages.offsetHeight}},watch:{}};var b=function(){var t=this,e=t._self._c;return e("div",{ref:"messages",staticClass:"messages"},[t._l(t.messageList,function(a){return e("div",{key:a.title,staticClass:"day-messages"},[e("div",{staticClass:"day-title"},[e("span",[t._v(" "+t._s(a.title)+" ")])]),t._l(a.messages,function(i){return e("div",{key:i.id,staticClass:"message"},[e("people-avatar",{staticClass:"message-avatar flexrow-item",attrs:{person:t.personMap.get(i.data.person_id),size:30,"font-size":15}}),e("div",{staticClass:"message-content"},[e("div",{staticClass:"message-header-wrapper flexrow"},[e("div",{staticClass:"message-sender mr05"},[t._v(" "+t._s(t.personMap.get(i.data.person_id).name)+" ")]),e("div",{staticClass:"message-date"},[t._v(" "+t._s(t.renderDate(i.data.created_at))+" ")])]),t._l(i.texts,function(r){return e("div",{key:"submessage-"+r.id,staticClass:"message-text"},[e("div",{domProps:{innerHTML:t._s(t.renderComment(r?r.text:"",[],[],t.personMap,t.departmentMap,""))}}),r?e("div",{staticClass:"attachments"},[t._l(t.pictureAttachments(r.attachment_files),function(n){return e("img",{key:n.id,staticClass:"attachment-thumbnail",attrs:{src:t.getAttachmentThumbnailPath(n)},on:{click:function(P){t.currentAttachment=n}}})}),t._l(t.fileAttachments(r.attachment_files),function(n){return e("a",{key:n.id,staticClass:"attachment",attrs:{target:"_blank",href:t.getDownloadAttachmentPath(n)}},[t._v(" "+t._s(n.name)+" ")])})],2):t._e(),i.data.person_id===t.user.id?e("div",{staticClass:"delete-message-button",on:{click:function(n){return t.$emit("delete-message",i.data.id)}}},[e("x-icon",{attrs:{size:"0.8x"}})],1):t._e()])})],2)],1)})],2)}),e("preview-modal",{attrs:{active:t.currentAttachment!=null,attachment:t.currentAttachment},on:{cancel:function(a){t.currentAttachment=null}}})],2)},$=[],E=f(w,b,$,!1,null,"835e120c",null,null);const I=E.exports,j={name:"entity-chat",mixins:[o],components:{AddAttachmentModal:v,ConfirmModal:C,ButtonSimple:x,EntityChatDays:I,PeopleAvatar:d,Spinner:A,XIcon:h},data(){return{attachments:[],chat:{},errors:{addAttachment:!1,chat:!1,deleteMessage:!1,join:!1,leave:!1,send:!1},loading:{addAttachment:!1,chat:!1,deleteMessage:!1,join:!1,leave:!1,send:!1},modals:{addAttachment:!1,deleteMessage:!1},participants:[],currentMessage:"",messages:[],messageMap:new Map}},props:{entity:{type:Object,default:()=>{}},name:{type:String,default:""}},mounted(){this.entity&&this.reset()},computed:{...m(["currentProduction","departmentMap","mainConfig","personMap","taskStatusMap","taskTypeMap","user"]),isInChat(){return this.participants.includes(this.user.id)},participantList(){return k(this.participants.map(s=>this.personMap.get(s)))}},methods:{...u(["deleteChatMessage","getChatMessage","getEntityChat","getEntityChatMessages","joinEntityChat","leaveEntityChat","sendChatMessage"]),async reset(){this.loading.chat=!0,this.errors.chat=!1;try{this.chat=await this.getEntityChat(this.entity.id),this.messages=await this.getEntityChatMessages(this.entity.id),this.messages.forEach(s=>this.messageMap.set(s.id,s)),this.participants=this.chat.participants||[]}catch(s){this.errors.chat=!0,console.error(s)}finally{this.loading.chat=!1}},async joinChat(){this.loading.join=!0,this.errors.join=!1;try{await this.joinEntityChat(this.entity.id)}catch(s){this.errors.join=!0,console.error(s)}finally{this.loading.join=!1}},async leaveChat(){this.loading.leave=!0,this.errors.leave=!1;try{await this.leaveEntityChat(this.entity.id)}catch(s){this.errors.leave=!0,console.error(s)}finally{this.loading.leave=!1}},async sendMessage(s){if(s&&s.keyCode===13&&s.shiftKey){this.currentMessage+=`
`;return}this.errors.send=!1,this.loading.send=!0;try{const t=await this.sendChatMessage({entityId:this.entity.id,message:this.currentMessage,attachments:this.attachments});this.currentMessage="",this.attachments=[],this.messages.push(t),this.messageMap.set(t.id,t),this.$refs.messages.scrollToBottom(),this.$nextTick(()=>{this.$refs.messageBox.focus()})}catch(t){this.errors.send=!0,console.error(t)}finally{this.loading.send=!1}},showConfirmDeleteMessage(s){this.modals.deleteMessage=!0,this.errors.deleteMessage=!1,this.loading.deleteMessage=!1,this.messageToDeleteId=s},async deleteMessage(){const s=this.messageToDeleteId;this.errors.deleteMessage=!1;try{this.loading.deleteMessage=!0,this.messages=this.messages.filter(t=>t.id!==s),this.messageMap.delete(s),await this.deleteChatMessage({entityId:this.entity.id,messageId:s}),this.modals.deleteMessage=!1,this.messageToDeleteId=null}catch(t){this.errors.deleteMessage=!0,console.error(t)}finally{this.loading.deleteMessage=!1}},focusMessageBox(){const s=this.$refs.messageBox;s&&s.focus()},addAttachment(s){this.attachments=this.attachments.concat(s),this.closeAttachmentModal()},closeAttachmentModal(){this.modals.addAttachment=!1},removeAttachment(s){this.attachments=this.attachments.filter(t=>t!==s)}},socket:{events:{"chat:joined"(s){s.chat_id===this.chat.id&&!this.participants.includes(s.person_id)&&this.participants.push(s.person_id)},"chat:left"(s){s.chat_id===this.chat.id&&this.participants.includes(s.person_id)&&(this.participants=this.participants.filter(t=>t!==s.person_id))},async"chat:new-message"(s){if(s.chat_id===this.chat.id){const t=await this.getChatMessage({entityId:this.entity.id,messageId:s.chat_message_id});this.messageMap.has(s.chat_message_id)||(this.messageMap.set(t.id,t),this.messages.push(t),this.focusMessageBox())}},"chat:deleted-message"(s){s.chat_id===this.chat.id&&(this.messages=this.messages.filter(t=>t.id!==s.message_id))}}},watch:{entity(){this.entity&&this.reset()}}};var z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt1 entity-chat"},[t.entity?[e("div",{staticClass:"participants flexrow"},[t._l(t.participantList,function(a){return e("people-avatar",{key:a.id,staticClass:"flexrow-item",attrs:{person:a,size:20,"font-size":10}})}),e("span",{staticClass:"filler"}),t.isInChat?e("button-simple",{staticClass:"flexrow-item",attrs:{text:t.$t("chats.leave"),"is-loading":t.loading.leave},on:{click:t.leaveChat}}):t._e()],2),t.loading.chat?e("div",{staticClass:"has-text-centered filler"},[e("spinner",{staticClass:"mt1"})],1):e("entity-chat-days",{ref:"messages",attrs:{messages:t.messages},on:{"delete-message":t.showConfirmDeleteMessage}}),t.isInChat?e("div",{staticClass:"message-box"},[e("div",[e("textarea",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.currentMessage,expression:"currentMessage"}],ref:"messageBox",attrs:{id:"message-box",disabled:t.loading.send},domProps:{value:t.currentMessage},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),t.sendMessage.apply(null,arguments))},input:function(a){a.target.composing||(t.currentMessage=a.target.value)}}}),e("div",{staticClass:"buttons"},[e("button-simple",{staticClass:"attach-button",attrs:{icon:"attach"},on:{click:function(a){t.modals.addAttachment=!0}}}),e("div",{staticClass:"filler"}),e("button-simple",{staticClass:"send-button",attrs:{icon:"send","is-loading":t.loading.send},on:{click:t.sendMessage}})],1)]),t.attachments.length>0?e("div",{staticClass:"attachments"},t._l(t.attachments,function(a){return e("div",{key:a.name,staticClass:"attachment-name"},[t._v(" "+t._s(a.get("file").name)+" "),e("span",{on:{click:function(i){return t.removeAttachment(a)}}},[e("x-icon",{attrs:{size:"0.7x"}})],1)])}),0):t._e()]):e("div",{staticClass:"join-chat"},[e("button",{staticClass:"button",attrs:{"is-loading":t.loading.join},on:{click:t.joinChat}},[t._v(" "+t._s(t.$t("chats.join"))+" ")])])]:[e("p",[t._v(" "+t._s(t.$t("chats.no_chat"))+" ")]),t.mainConfig.indexer_configured?e("div",{staticClass:"has-text-centered"},[e("button-simple",{attrs:{text:t.$t("chats.search_entity")},on:{click:function(a){return t.$router.push("entity-search")}}})],1):t._e()],e("add-attachment-modal",{ref:"add-attachment-modal",attrs:{active:t.modals.addAttachment,"is-loading":t.loading.addAttachment,"is-error":t.errors.addAttachment,title:t.name},on:{cancel:t.closeAttachmentModal,confirm:t.addAttachment}}),e("confirm-modal",{attrs:{active:t.modals.deleteMessage,"confirm-button-text":t.$t("chats.delete_message_confirm"),text:t.$t("chats.delete_message"),"is-loading":t.loading.deleteMessage,"is-error":t.errors.deleteMessage},on:{cancel:function(a){t.modals.deleteMessage=!1},confirm:t.deleteMessage}})],2)},D=[],B=f(j,z,D,!1,null,"6bacefc4",null,null);const L=B.exports;export{L as E};
//# sourceMappingURL=EntityChat-lzidl7jE.js.map