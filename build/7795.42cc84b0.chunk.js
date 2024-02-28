"use strict";(self.webpackChunkneo_alpha=self.webpackChunkneo_alpha||[]).push([[7795],{47795:(hs,$,s)=>{s.d($,{ReviewWorkflowsEditPage:()=>is});var t=s(92132),_=s(21272),J=s(85963),L=s(83997),X=s(43064),C=s(30893),M=s(91134),b=s(54514),T=s(61535),q=s(54894),l=s(82437),ss=s(17703),ts=s(63209),os=s(29341),e=s(22949),es=s(15797),p=s(92766),ns=s(18306),h=s(92233),E=s(45084),R=s(25524),as=s(49792),cs=s(35658),As=s(56336),Ls=s(48940),Cs=s(12083),Ts=s(72810),Rs=s(18022),Is=s(2600),Ws=s(51187),Bs=s(15126),Ks=s(63299),Us=s(67014),us=s(59080),ys=s(79275),ws=s(14718),js=s(5790),ps=s(35223),xs=s(5409),Ss=s(74930),Fs=s(41286),ks=s(39404),Vs=s(58692),zs=s(54257),Ns=s(501),Ys=s(57646),Gs=s(23120),Zs=s(44414),Hs=s(25962),Qs=s(14664),$s=s(42588),Js=s(90325),Xs=s(62785),bs=s(87443),qs=s(41032),st=s(22957),tt=s(93179),ot=s(73055),et=s(15747),nt=s(85306),at=s(77965),it=s(26509),lt=s(84624),_t=s(71210),rt=s(32058),Et=s(81185),dt=s(82261);const is=()=>{const{workflowId:I}=(0,ss.g)(),ls=(0,l.d4)(es.s),{formatMessage:n}=(0,q.A)(),r=(0,l.wA)(),{_unstableFormatAPIError:_s,_unstableFormatValidationErrors:rs}=(0,M.wq)(),D=(0,M.hN)(),{isLoading:P,meta:O,workflows:g}=(0,as.u)(),{collectionTypes:x,singleTypes:S,isLoading:W}=(0,os.u)(),Es=(0,l.d4)(e.j),ds=(0,l.d4)(e.a),a=(0,l.d4)(e.b),F=(0,l.d4)(e.k),k=(0,l.d4)(e.c),v=(0,l.d4)(e.s),{allowedActions:{canDelete:Ms,canUpdate:B}}=(0,M.ec)(ls.settings?.["review-workflows"]),[c,A]=_.useState({}),{getFeature:Ds,isLoading:V}=(0,p.m)(),{isLoading:K,roles:z}=(0,ts.u)(void 0),[N,d]=_.useState(null),[Ps,Y]=_.useState(),[Os,G]=_.useState(!1),U=g?.find(o=>o.id===parseInt(I,10)),Z=g?.filter(o=>o.id!==parseInt(I,10)).flatMap(o=>o.contentTypes),u=Ds("review-workflows"),f=u?.[R.C],m=u?.[R.a],[gs]=(0,ns.e)(),H=async()=>{Y(void 0),G(!0);try{const o=await gs({id:I,data:{...a,stages:a.stages?.map(i=>{let Q=!0;const w=Es.workflow?.stages?.find(j=>j.id===i?.id);return w&&(Q=w.permissions?.length!==i.permissions?.length||!w.permissions?.every(j=>!!i.permissions?.find(ms=>ms.role===j.role))),{...i,permissions:Q?i.permissions:void 0}})}});if("error"in o){(0,p.x)(o.error)&&o.error.name==="ValidationError"&&Y(rs(o.error)),D({type:"warning",message:_s(o.error)});return}D({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}catch{D({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{G(!1)}A({})},vs=async()=>{await H()},fs=()=>{A({})},y=(0,T.Wx)({enableReinitialize:!0,initialErrors:Ps,initialValues:a,async onSubmit(){const o=a.contentTypes?.some(i=>Z?.includes(i));O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)?d("stage"):F||o?(F&&A(i=>({...i,hasDeletedServerStages:!0})),o&&A(i=>({...i,hasReassignedContentTypes:!0}))):H()},validate(o){return(0,e.v)({values:o,formatMessage:n})}});return(0,e.u)(R.R,e.i),_.useEffect(()=>(!P&&U&&g&&(r((0,e.l)({workflow:U})),r((0,e.d)({workflows:g}))),W||r((0,e.e)({collectionTypes:x,singleTypes:S})),K||r((0,e.f)(z)),r((0,e.g)(P||W||K)),()=>{r((0,e.r)())}),[x,r,W,P,K,z,S,U,g]),_.useEffect(()=>{!P&&!V&&(O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)&&d("stage"))},[a.stages,V,P,u,O,f,m]),_.useEffect(()=>{!v&&k?.length===0&&D({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,v,k,D]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(T.QI,{value:y,children:(0,t.jsxs)(T.lV,{onSubmit:y.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:B&&(0,t.jsx)(J.$,{startIcon:(0,t.jsx)(b.A,{}),type:"submit",size:"M",disabled:!ds,loading:!Boolean(Object.keys(c).length>0)&&Os,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!v&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages?.length}),title:a.name||""}),(0,t.jsx)(h.R,{children:v?(0,t.jsx)(L.s,{justifyContent:"center",children:(0,t.jsx)(X.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(L.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:B}),(0,t.jsx)(e.S,{canDelete:Ms,canUpdate:B,stages:y.values?.stages})]})})]})}),(0,t.jsx)(M.TM.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(c).length>0,onToggleDialog:fs,onConfirm:vs,children:(0,t.jsx)(M.TM.Body,{children:(0,t.jsxs)(L.s,{direction:"column",gap:5,children:[c.hasDeletedServerStages&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),c.hasReassignedContentTypes&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:Z?.filter(o=>a.contentTypes?.includes(o)).length})}),(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(E.L.Root,{isOpen:N==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(E.L.Root,{isOpen:N==="stage",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
