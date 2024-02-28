"use strict";(self.webpackChunkneo_alpha=self.webpackChunkneo_alpha||[]).push([[9562],{35658:(D,r,t)=>{t.d(r,{a:()=>P,g:()=>n});var a=t(57438),o=t(25524);function n(l){if(!l)return null;const i=Object.entries(a._.colors).filter(([,O])=>O.toUpperCase()===l.toUpperCase()).reduce((O,[T])=>(o.S?.[T]&&(O=T),O),null);return i?{themeColorName:i,name:o.S[i]}:null}function P(){return Object.entries(o.S).map(([l,d])=>({hex:a._.colors[l].toUpperCase(),name:d}))}},25524:(D,r,t)=>{t.d(r,{A:()=>i,C:()=>U,D:()=>S,R:()=>o,S:()=>C,a:()=>K,b:()=>I,c:()=>O,d:()=>E,e:()=>n,f:()=>P,g:()=>d,h:()=>l,i:()=>f,j:()=>s,k:()=>T,l:()=>_,m:()=>e,n:()=>M});var a=t(57438);const o="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",P="Settings/Review_Workflows/SET_CONTENT_TYPES",l="Settings/Review_Workflows/SET_IS_LOADING",d="Settings/Review_Workflows/SET_ROLES",i="Settings/Review_Workflows/SET_WORKFLOW",O="Settings/Review_Workflows/SET_WORKFLOWS",T="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",E="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",s="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",_="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",e="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",M="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",f="Settings/Review_Workflows/WORKFLOW_UPDATE",C={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},I=a._.colors.primary600,S={STAGE:"stage"},U="numberOfWorkflows",K="stagesPerWorkflow"},59562:(D,r,t)=>{t.r(r),t.d(r,{REVIEW_WORKFLOW_COLUMNS_EE:()=>u,REVIEW_WORKFLOW_FILTERS:()=>y});var a=t(92766),o=t(45534),n=t(92132),P=t(76517),l=t(80782),d=t(48323),i=t(83997),O=t(30893),T=t(43064),E=t(54894),s=t(49792),_=t(35658),e=t(91134),M=t(15126),f=t(63299),C=t(67014),I=t(59080),S=t(79275),U=t(14718),K=t(21272),F=t(82437),k=t(61535),G=t(5790),j=t(12083),$=t(35223),x=t(5409),Y=t(74930),V=t(2600),z=t(48940),H=t(41286),Z=t(51187),Q=t(56336),X=t(39404),J=t(58692),b=t(54257),q=t(501),tt=t(57646),st=t(23120),_t=t(44414),et=t(25962),at=t(14664),ot=t(42588),nt=t(90325),Et=t(62785),rt=t(87443),lt=t(41032),it=t(22957),Ot=t(93179),dt=t(73055),Tt=t(15747),Pt=t(85306),Mt=t(77965),Dt=t(26509),Wt=t(84624),Rt=t(71210),mt=t(32058),At=t(81185),vt=t(82261),Lt=t(18306),gt=t(25524);const B=({value:R,onChange:v})=>{const{formatMessage:m}=(0,E.A)(),{data:L,isLoading:g}=(0,a.k)(),A=L?.users||[];return(0,n.jsx)(P.G3,{value:R,"aria-label":m({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:v,loading:g,children:A.map(W=>(0,n.jsx)(l.j,{value:W.id.toString(),children:(0,a.l)(W,m)},W.id))})},c=({value:R,onChange:v,uid:m})=>{const{formatMessage:L}=(0,E.A)(),{workflows:g,isLoading:A}=(0,s.u)({filters:{contentTypes:m}}),[W]=g??[];return(0,n.jsx)(d.Z,{"aria-label":L({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:R,onChange:v,loading:A,customizeContent:()=>(0,n.jsxs)(i.s,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,n.jsx)(O.o,{textColor:"neutral800",ellipsis:!0,children:R}),A?(0,n.jsx)(T.a,{small:!0,style:{display:"flex"}}):null]}),children:(W?.stages??[]).map(({id:p,color:w,name:h})=>{const{themeColorName:N}=(0,_.g)(w)??{};return(0,n.jsx)(d.eY,{startIcon:(0,n.jsx)(i.s,{height:2,background:w,borderColor:N==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:h,children:h},p)})})},u=[{key:`__${o.S}_temp_key__`,name:o.S,fieldSchema:{type:"relation",relation:"oneToMany",target:"admin::review-workflow-stage"},metadatas:{label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"},searchable:!1,sortable:!0,mainField:{name:"name",type:"string"}}},{key:`__${o.A}_temp_key__`,name:o.A,fieldSchema:{type:"relation",target:"admin::user",relation:"oneToMany"},metadatas:{label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.assignee"),defaultMessage:"Assignee"},searchable:!1,sortable:!0,mainField:{name:"firstname",type:"string"}}}],y=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:c,label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"integer"}}},metadatas:{customInput:B,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},45534:(D,r,t)=>{t.d(r,{A:()=>o,S:()=>a});const a="strapi_stage",o="strapi_assignee"},18306:(D,r,t)=>{t.d(r,{a:()=>i,b:()=>O,c:()=>n,d:()=>P,e:()=>d,f:()=>l,u:()=>T});var a=t(92766);const o=a.n.injectEndpoints({endpoints:E=>({getWorkflows:E.query({query:s=>{const{id:_,...e}=s??{};return{url:`/admin/review-workflows/workflows/${_??""}`,method:"GET",config:{params:e}}},transformResponse:s=>{let _=[];return Array.isArray(s.data)?_=s.data:_=[s.data],{workflows:_,meta:"meta"in s?s.meta:void 0}},providesTags:(s,_,e)=>typeof e=="object"&&"id"in e&&e.id!==""?[{type:"ReviewWorkflow",id:e.id}]:[...s?.workflows.map(({id:M})=>({type:"ReviewWorkflow",id:M}))??[],{type:"ReviewWorkflow",id:"LIST"}]}),createWorkflow:E.mutation({query:s=>({url:"/admin/review-workflows/workflows",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"ReviewWorkflow",id:"LIST"}]}),updateWorkflow:E.mutation({query:({id:s,..._})=>({url:`/admin/review-workflows/workflows/${s}`,method:"PUT",data:_}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflow",id:e.id}]}),deleteWorkflow:E.mutation({query:({id:s})=>({url:`/admin/review-workflows/workflows/${s}`,method:"DELETE"}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflow",id:e.id}]}),getStages:E.query({query:({model:s,slug:_,id:e})=>({url:`/admin/content-manager/${_}/${s}/${e}/stages`,method:"GET"}),transformResponse:s=>({meta:s.meta??{workflowCount:0},stages:s.data??[]}),providesTags:(s,_,e)=>[{type:"ReviewWorkflowStage",id:e.id}]}),updateStage:E.mutation({query:({model:s,slug:_,id:e,...M})=>({url:`/admin/content-manager/${_}/${s}/${e}/stage`,method:"PUT",data:M}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflowStage",id:e.id}]}),updateAssignee:E.mutation({query:({model:s,slug:_,id:e,...M})=>({url:`/admin/content-manager/${_}/${s}/${e}/assignee`,method:"PUT",data:M}),transformResponse:s=>s.data})}),overrideExisting:!1}),{useGetWorkflowsQuery:n,useCreateWorkflowMutation:P,useDeleteWorkflowMutation:l,useUpdateWorkflowMutation:d,useGetStagesQuery:i,useUpdateStageMutation:O,useUpdateAssigneeMutation:T}=o},49792:(D,r,t)=>{t.d(r,{u:()=>o});var a=t(18306);function o(n={}){const{id:P="",...l}=n,{data:d,isLoading:i}=(0,a.c)({id:P,populate:"stages",...l}),[O]=(0,a.d)(),[T]=(0,a.e)(),[E]=(0,a.f)(),{workflows:s,meta:_}=d??{};return{meta:_,workflows:s,isLoading:i,createWorkflow:O,updateWorkflow:T,deleteWorkflow:E}}}}]);
