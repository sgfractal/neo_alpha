"use strict";(self.webpackChunkneo_alpha=self.webpackChunkneo_alpha||[]).push([[4721],{74721:(G,v,s)=>{s.r(v),s.d(v,{ProfilePage:()=>ts});var e=s(92132),d=s(21272),j=s(11273),L=s(38413),h=s(55356),N=s(4198),J=s(85963),O=s(94061),p=s(83997),I=s(30893),C=s(90151),m=s(68074),V=s(7537),X=s(88875),D=s(48323),i=s(91134),b=s(54514),W=s(83925),U=s(93337),k=s(61535),q=s(39404),H=s(14718),x=s(54894),z=s(79793),B=s(12083),l=s(92766),ss=s(15797),es=s(97146),ps=s(15126),Ds=s(63299),us=s(67014),As=s(59080),vs=s(79275),Ls=s(82437),Is=s(5790),Cs=s(35223),xs=s(5409),Ts=s(74930),Rs=s(2600),js=s(48940),Ws=s(41286),Us=s(51187),Bs=s(56336),Ks=s(58692),ys=s(54257),ws=s(501),Ss=s(57646),Ys=s(23120),Fs=s(44414),Ns=s(25962),Vs=s(14664),Hs=s(42588),zs=s(90325),Zs=s(62785),$s=s(87443),Qs=s(41032),Gs=s(22957),Js=s(93179),Xs=s(73055),bs=s(15747),ks=s(85306),qs=s(77965),se=s(26509),ee=s(84624),ae=s(71210),te=s(32058),oe=s(81185),re=s(82261),ne=s(72810),ie=s(18022);const as=B.Ik().shape({...es.C,currentPassword:B.Yj().when(["password","confirmPassword"],(t,o,n)=>t||o?n.required(i.iW.required):n),preferedLanguage:B.Yj().nullable()}),ts=()=>{const t=(0,l.j)(_=>_.admin_app.language.localeNames),{formatMessage:o}=(0,x.A)(),{trackUsage:n}=(0,i.z1)(),a=(0,i.hN)(),{lockApp:P,unlockApp:r}=(0,i.MA)(),{notifyStatus:c}=(0,j.W)(),y=(0,l.j)(_=>_.admin_app.theme.currentTheme),u=(0,l.s)(),{_unstableFormatValidationErrors:w,_unstableFormatAPIError:g}=(0,i.wq)();(0,i.L4)();const M=(0,l.a)("ProfilePage",_=>_.user);d.useEffect(()=>{M?c(o({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"})):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[o,c,a,M]);const[is,{isLoading:ds}]=(0,l.t)(),{isLoading:ls,data:_s,error:$}=(0,l.v)(void 0,{skip:!(window.strapi.isEE&&window.strapi.features.isEnabled("sso"))});d.useEffect(()=>{$&&a({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})},[$,a]);const Es=async(_,{setErrors:S})=>{P();const{confirmPassword:Y,currentTheme:A,...T}=_;let f=T;if(f.password===""){const{password:Q,currentPassword:R,...F}=f;f=F}const E=await is(f);"data"in E&&(u((0,l.w)(A)),n("didChangeMode",{newMode:A}),a({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})),"error"in E&&((0,l.x)(E.error)&&(E.error.name==="ValidationError"||E.error.message==="ValidationError")?S(w(E.error)):(0,l.x)(E.error)?a({type:"warning",message:g(E.error)}):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})),r?.()};if(ls)return(0,e.jsxs)(L.g,{"aria-busy":"true",children:[(0,e.jsx)(H.m,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(h.Q,{title:o({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,e.jsx)(N.s,{children:(0,e.jsx)(i.Bl,{})})]});const ms=_s?.isSSOLocked??!1,{email:Ms,firstname:cs,lastname:Ps,username:gs,preferedLanguage:fs}=M??{},hs={email:Ms,firstname:cs,lastname:Ps,username:gs,preferedLanguage:fs,currentTheme:y,confirmPassword:"",password:""};return(0,e.jsxs)(L.g,{"aria-busy":ds,children:[(0,e.jsx)(H.m,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(k.l1,{onSubmit:Es,initialValues:hs,validateOnChange:!1,validationSchema:as,enableReinitialize:!0,children:({errors:_,values:{email:S,firstname:Y,lastname:A,username:T,preferedLanguage:f,currentTheme:E,...Q},handleChange:R,isSubmitting:F,dirty:Os})=>(0,e.jsxs)(i.lV,{children:[(0,e.jsx)(h.Q,{title:T||(0,ss.g)(Y??"",A),primaryAction:(0,e.jsx)(J.$,{startIcon:(0,e.jsx)(b.A,{}),loading:F,type:"submit",disabled:!Os,children:o({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(O.a,{paddingBottom:10,children:(0,e.jsx)(N.s,{children:(0,e.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(ns,{errors:_,onChange:R,values:{firstname:Y,lastname:A,username:T,email:S}}),!ms&&(0,e.jsx)(os,{errors:_,onChange:R,values:Q}),(0,e.jsx)(rs,{onChange:R,values:{preferedLanguage:f,currentTheme:E},localeNames:t})]})})})]})})]})},os=({errors:t,onChange:o,values:n})=>{const{formatMessage:a}=(0,x.A)(),[P,r]=d.useState(!1),[c,y]=d.useState(!1),[u,w]=d.useState(!1);return(0,e.jsx)(O.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(I.o,{variant:"delta",as:"h2",children:a({id:"global.change-password",defaultMessage:"Change password"})}),(0,e.jsx)(C.x,{gap:5,children:(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(V.k,{error:t.currentPassword?a({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:o,value:n.currentPassword,label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:P?"text":"password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),r(M=>!M)},label:a(P?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:P?(0,e.jsx)(W.A,{}):(0,e.jsx)(U.A,{})})})})}),(0,e.jsxs)(C.x,{gap:5,children:[(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(Z,{error:t.password?a({id:t.password,defaultMessage:t.password}):"",onChange:o,value:n.password,label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:c?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),y(M=>!M)},label:a(c?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:c?(0,e.jsx)(W.A,{}):(0,e.jsx)(U.A,{})})})}),(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(Z,{error:t.confirmPassword?a({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:o,value:n.confirmPassword,label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",type:u?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),w(M=>!M)},label:a(u?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:u?(0,e.jsx)(W.A,{}):(0,e.jsx)(U.A,{})})})})]})]})})},Z=(0,z.Ay)(V.k)`
  ::-ms-reveal {
    display: none;
  }
`,K=(0,z.Ay)(X.T)`
  svg {
    height: ${(0,i.a8)(16)};
    width: ${(0,i.a8)(16)};
    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,rs=({onChange:t,values:o,localeNames:n})=>{const{formatMessage:a}=(0,x.A)(),P=(0,l.j)(r=>r.admin_app.theme.availableThemes);return(0,e.jsx)(O.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.o,{variant:"delta",as:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,e.jsx)(I.o,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,e.jsx)(O.a,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,e.jsxs)(C.x,{gap:5,children:[(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(D.Z,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{t({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:o.preferedLanguage,onChange:r=>{t({target:{name:"preferedLanguage",value:r}})},children:Object.entries(n).map(([r,c])=>(0,e.jsx)(D.eY,{value:r,children:c},r))})}),(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsxs)(D.Z,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:o.currentTheme,onChange:r=>{t({target:{name:"currentTheme",value:r}})},children:[(0,e.jsx)(D.eY,{value:"system",children:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),P.map(r=>(0,e.jsx)(D.eY,{value:r,children:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:r,defaultMessage:q(r)})})},r))]})})]})]})})},ns=({errors:t,onChange:o,values:n})=>{const{formatMessage:a}=(0,x.A)();return(0,e.jsx)(O.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(I.o,{variant:"delta",as:"h2",children:a({id:"global.profile",defaultMessage:"Profile"})}),(0,e.jsxs)(C.x,{gap:5,children:[(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(i.ah,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:o,value:n.firstname,type:"text",name:"firstname",required:!0})}),(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(i.ah,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:o,value:n.lastname,type:"text",name:"lastname"})}),(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(i.ah,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:o,value:n.email,type:"email",name:"email",required:!0})}),(0,e.jsx)(m.E,{s:12,col:6,children:(0,e.jsx)(i.ah,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:o,value:n.username,type:"text",name:"username"})})]})]})})}},97146:(G,v,s)=>{s.d(v,{C:()=>j});var e=s(91134),d=s(12083);const j={firstname:d.Yj().trim().required(e.iW.required),lastname:d.Yj(),email:d.Yj().email(e.iW.email).lowercase().required(e.iW.required),username:d.Yj().nullable(),password:d.Yj().min(8,e.iW.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:d.Yj().min(8,e.iW.minLength).oneOf([d.KR("password"),null],"components.Input.error.password.noMatch").when("password",(L,h)=>L?h.required(e.iW.required):h)}}}]);
