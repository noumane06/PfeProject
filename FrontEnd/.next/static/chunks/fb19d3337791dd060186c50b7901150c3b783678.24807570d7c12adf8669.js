(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"09Wf":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("CWQg"),r=Object(a.a)("success","processing","error","default","warning"),o=Object(a.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},"6nsN":function(e,t,n){"use strict";n.r(t);n("LOEa")},STQv:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n("Wcq6"),r=n.n(a);n.d(t,"a",(function(){return r.a}));n("WI49");r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyDRsykbHnmyzkwgrG_Wle1c8q09tU8qPkk",authDomain:"image-upload-test-7d968.firebaseapp.com",databaseURL:"https://image-upload-test-7d968.firebaseio.com",projectId:"image-upload-test-7d968",storageBucket:"image-upload-test-7d968.appspot.com",messagingSenderId:"1014331131186",appId:"1:1014331131186:web:02e1c6b89fe05b729bc32b",measurementId:"G-Y47FCGE0W5"});var o=r.a.storage()},UGMd:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},YcFo:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createElement;t.a=function(){return r("div",{className:"Split LeftSide"},r("img",{src:"/static/Icons/logo2017.png",height:"30",onClick:function(){return window.location.replace("/")}}))}},YefX:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=r.a.createElement,i=function(){return o("div",{className:"HeaderContainer"},o("div",{className:"ButtonContainer",onClick:function(){return window.location.assign("/")}},o("i",{className:"fa fa-arrow-left icon"}),o("span",{className:"backButton"},"Retour")),o("span",{className:"Help"},"Aide"))},l=n("rePB"),c=n("YFqc"),s=n.n(c),u=n("vDqi"),p=n.n(u),d=n("tsqr"),m=r.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=Object(a.useState)({email:"",password:""}),n=t[0],o=t[1],i=Object(a.useState)(!1),c=i[0],u=i[1],f=Object(a.useState)(!1),h=f[0],b=f[1],g=Object(a.useState)("/"),y=g[0],N=g[1],w=Object(a.useState)(!1),C=w[0],O=w[1];Object(a.useEffect)((function(){void 0!==e.query.ref&&"tokenexpired"===e.query.ref&&d.b.warning("veuillez d abord vous connecter"),void 0!==e.query.location&&N(e.query.location),p.a.get("/api/profiles/myprofile",{withCredentials:!0}).then((function(e){O(!0),setTimeout((function(){window.location.replace("/")}),5e3)})).catch((function(e){}))}),[]);var x=function(e){var t=e.target.name,a=e.target.value;o(v(v({},n),{},Object(l.a)({},t,a))),"email"===t&&u(!1),"password"===t&&b(!1)};return m("div",{className:"FormContainer"},C&&m("div",{className:"part 1"},m("h2",null,"Nous saluons le retour!"),m("p",null,"Vous \xeates d\xe9j\xe0 connect\xe9 et serez bient\xf4t redirig\xe9 vers page d'accueil."),m("div",{className:"FormFooter"},"Si vous n'\xeates pas redirig\xe9 automatiquement suivez",m(s.a,{href:"/"},m("a",null,"ce lien")))),!C&&m(r.a.Fragment,null,m("h1",null,"Connectez-vous"),m("form",{onSubmit:function(e){e.preventDefault(),p.a.post("/api/signin/",n).then((function(e){200===e.status?window.location.replace(y):(u(!0),b(!0))})).catch((function(e){console.log(e),u(!0),b(!0)}))}},m("label",null,"Email"),m("br",null),m("input",{className:c?"input error":"input",style:{width:"80%"},type:"email",name:"email",onChange:x,value:n.email,required:!0}),m("br",null),m("label",{className:c?"errMsg":"hidden"},"email invalide"),m("br",null),m("br",null),m("label",null,"Mode de passe"),m("br",null),m("input",{className:h?"input error":"input",style:{width:"80%"},type:"password",name:"password",onChange:x,value:n.password,required:!0}),m("br",null),m("label",{className:h?"errMsg":"hidden"},"mot de passe incorrect"),m("br",null),m("br",null),m("input",{className:"SignButton",type:"submit",value:"Se connecter"})),m("div",{className:"FormFooter"},m("span",null,"Pas encore membre ?"),void 0!==e.query.location&&m(s.a,{href:"SignUp?location=".concat(y)},m("a",null,"Inscrivez-vous")),void 0===e.query.location&&m(s.a,{href:"SignUp"},m("a",null,"Inscrivez-vous")))))},b=n("o0o1"),g=n.n(b),y=n("HaE+"),N=n("kl6h"),w=n("2fM7"),C=n("TeRw"),O=n("W9HT"),x=n("1OyB"),j=n("vuIU"),S=n("JX7q"),q=n("Ji7U"),k=n("md7G"),E=n("foSv"),P=n("STQv"),M=r.a.createElement;function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(E.a)(e);if(t){var r=Object(E.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}n("6nsN");var F=function(e){Object(q.a)(n,e);var t=z(n);function n(e){var a;return Object(x.a)(this,n),a=t.call(this,e),Object(l.a)(Object(S.a)(a),"LoadCaptcha",(function(){P.a.auth().languageCode="en";var e=Object(S.a)(a);window.recaptchaVerifier=new P.a.auth.RecaptchaVerifier("recaptcha",{size:"normal",callback:function(t){e.props.handler(!0)},"expired-callback":function(){e.props.handler(!1),console.log("expired")}}),window.recaptchaVerifier.render().then((function(e){window.recaptchaWidgetId=e}))})),a.LoadCaptcha=a.LoadCaptcha.bind(Object(S.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){"complete"===document.readyState?this.LoadCaptcha():window.onload=this.loadRecaptcha}},{key:"render",value:function(){return M("div",{className:"text-center"},M("div",{id:"recaptcha"}))}}]),n}(r.a.Component),D=(n("ZJTA"),n("NfAz")),I=n.n(D),L=n("yegV"),B=n.n(L),R=n("yzYF"),T=n.n(R),H=r.a.createElement;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){var t=N.a.RangePicker,n=w.a.Option,o=[];T.a.map((function(e){o.push(H(n,{key:e},e))}));var i=Object(a.useState)(!1),c=i[0],u=i[1],m=Object(a.useState)(!1),f=m[0],v=m[1],h=Object(a.useState)(0),b=h[0],x=h[1],j=Object(a.useState)({type:"Soci\xe9t\xe9",email:"",password:"",nom:"",prenom:"",companyname:"",title:"Directeur",domaine:[],addresse:"",city:"Casablanca",mobilephone:"",fixphone:"",gender:"male",horraire:[]}),S=j[0],q=j[1],k=Object(a.useState)(!1),E=k[0],M=k[1],z=Object(a.useState)(!1),D=z[0],L=z[1],R=Object(a.useState)(!1),_=R[0],W=R[1],A=Object(a.useState)(!1),U=A[0],V=A[1],Y=Object(a.useState)(!1),G=Y[0],K=Y[1],Q=Object(a.useState)(!1),X=Q[0],Z=Q[1],$=Object(a.useState)(!1),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=ne[0],re=ne[1],oe=Object(a.useState)(""),ie=oe[0],le=oe[1],ce=Object(a.useState)(!1),se=ce[0],ue=ce[1],pe=Object(a.useState)([]),de=pe[0],me=pe[1],fe=Object(a.useState)("/"),ve=fe[0],he=fe[1],be=Object(a.useState)(!1),ge=be[0],ye=be[1];Object(a.useEffect)((function(){void 0!==e.query&&("tokenexpired"===e.query.ref&&d.b.warning("veuillez d abord vous connecter"),void 0!==e.query.location&&he(e.query.location)),p.a.get("/api/profiles/myprofile",{withCredentials:!0}).then((function(e){ye(!0),setTimeout((function(){window.location.replace("/")}),5e3)})).catch((function(e){}))}),[]);var Ne=function(e){var t=e.target.name,n=e.target.value;q(J(J({},S),{},Object(l.a)({},t,n))),"email"===t&&M(!1),"password"===t&&L(!1),"mobilephone"===t&&te(!1)},we=function(){var e=Object(y.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t.preventDefault(),n=0,a={email:S.email},e.next=6,p.a.post("/api/signup/verifEmail",a).then((function(e){200===e.status?u(!1):(u(!1),M(!0))})).catch((function(e){u(!1),n=1,M(!0),console.log(e)}));case 6:S.password.length<8&&(L(!0),n=3),ae!==S.password&&(W(!0),n=3),0===n&&x(2);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){e.preventDefault();var t=S.mobilephone.replace(0,"+212");u(!0);var n=!1;0===S.domaine.length&&(V(!0),n=!0),0===S.horraire.length&&(K(!0),n=!0);var a=window.recaptchaVerifier;f&&P.a.auth().signInWithPhoneNumber(t,a).then((function(e){n&&"Client"!==S.type||(u(!1),x(3)),window.confirmationResult=e})).catch((function(e){"auth/too-many-requests"!==e.code&&te(!0),u(!1),v(!1),"auth/too-many-requests"===e.code&&(console.log(e),C.a.error({message:"auth / trop de requ\xeates",description:"Nous avons bloqu\xe9 toutes les demandes de cet appareil en raison d une activit\xe9 inhabituelle. R\xe9essayez plus tard.",duration:10}))}))},Oe=function(e){v(e)};return H("div",{className:"FormContainer"},!ge&&H(r.a.Fragment,null,H("h1",null,"Inscrivez-vous"),0==b&&H("div",{className:"part 1"},H("h2",null,"Choisissez le type de votre compte"),H("form",{onSubmit:function(){return x(1)}},H("select",{className:"select",name:"type",value:S.type,onChange:Ne},H("option",{value:"Soci\xe9t\xe9"},"Soci\xe9t\xe9"),H("option",{value:"Client"},"Client")),H("div",{className:"buttonContainer"},H("input",{className:"SignButton next",type:"submit",value:"Suivant"})))),1==b&&H("div",{className:"part 1"},H("form",{onSubmit:we},H("div",{className:"multipleInput"},H("select",{className:"small",name:"gender",value:S.gender,onChange:Ne},H("option",{value:"male",selected:!0},"Mr"),H("option",{value:"female"},"Mme")),H("input",{className:"input controlled",type:"text",placeholder:"Nom",name:"nom",onChange:Ne,value:S.nom,required:!0}),H("input",{className:"input controlled",type:"text",placeholder:"Prenom",name:"prenom",onChange:Ne,value:S.prenom,required:!0})),"Soci\xe9t\xe9"===S.type&&H("div",{className:"multipleInput"},H("select",{className:"title",name:"title",value:S.title,onChange:Ne,required:!0},B.a.map((function(e){return H("option",{value:e,key:e},e)}))),H("div",{style:{width:"68%",display:"flex",flexDirection:"column"}},H("input",{className:E?"email error":"email",type:"email",placeholder:"Email",name:"email",onChange:Ne,value:S.email,required:!0}),H("label",{className:E?"errMsg":"hidden"},"Email already exist"))),"Client"===S.type&&H("div",{className:"ColumnFLexContainer"},H("input",{className:E?"input error":"input",type:"email",placeholder:"Email",name:"email",onChange:Ne,value:S.email,required:!0}),H("label",{className:E?"errMsg":"hidden"},"Email already exist")),H("div",{className:"multipleInput"},H("select",{className:"title",name:"city",value:S.city,onChange:Ne},I.a.map((function(e){return H("option",{value:e,key:e},e)}))),H("input",{className:"input addresse",type:"text",placeholder:"Addresse",name:"addresse",onChange:Ne,value:S.addresse,required:!0})),H("div",{className:"ColumnFLexContainer"},H("input",{className:D?"input error":"input",type:"password",placeholder:"Mot de passe",name:"password",onChange:Ne,value:S.password,required:!0}),H("label",{className:D?"errMsg":"hidden"},"mot de passe doit \xeatre d'au moins 8 caract\xe8res")),H("div",{className:"ColumnFLexContainer"},H("input",{className:_?"input error":"input",type:"password",placeholder:"Confirmez votre mot de passe",value:ae,onChange:function(e){re(e.target.value),W(!1)},required:!0}),H("label",{className:_?"errMsg":"hidden"},"la confirmation n'est pas la m\xeame que le mot de passe")),H("div",{className:"buttonContainer"},!c&&H("button",{className:"SignButton next",type:"submit"},"Suivant"),c&&H(O.a,{size:"default",className:"next"}),H("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(0)}})))),2==b&&"Soci\xe9t\xe9"===S.type&&H("div",{className:"part 1"},H("form",{onSubmit:Ce},H("input",{className:"input soc",type:"text",placeholder:"Nom de soci\xe9t\xe9",name:"companyname",value:S.companyname,onChange:Ne}),H("div",{className:"ColumnFLexContainer"},H(w.a,{mode:"tags",style:{width:"100%"},placeholder:"Votre domaine ",className:U?"error":"",onChange:function(e){var t=e;q(J(J({},S),{},{domaine:t})),V(!1)},value:S.domaine,maxTagCount:3},o),H("label",{className:U?"errMsg":"hidden"},"Ce champ est obligatoire")),H("div",{className:"multipleInput two"},H("div",{style:{width:"48%",display:"flex",flexDirection:"column"}},H("input",{className:ee?"email error":"email",type:"tel",name:"mobilephone",placeholder:"T\xe9l\xe9phone mobile | Ex:06xxxxxxxx",onChange:Ne,value:S.mobilephone,required:!0}),H("label",{className:ee?"errMsg":"hidden"},"Numero invalide")),H("div",{style:{width:"48%",display:"flex",flexDirection:"column"}},H("input",{className:"email",type:"tel",name:"fixphone",placeholder:"T\xe9l\xe9phone Fix | Ex:05xxxxxxxx",onChange:Ne,value:S.fixphone,required:!0}))),H("br",null),H("label",{style:{color:"#318CE7"}},"L'horaire de votre soci\xe9t\xe9 : "),H("div",{className:"ColumnFLexContainer"},H(t,{className:G?"error":"",style:{width:"100%"},bordered:!1,format:"HH:mm",minuteStep:30,value:de,onChange:function(e,t){var n=t;q(J(J({},S),{},{horraire:n})),me(e),K(!1)}}),H("label",{className:G?"errMsg":"hidden"},"Ce champ est obligatoire")),H(F,{handler:Oe}),H("div",{className:"buttonContainer"},!c&&H("button",{className:f?"SignButton next":"disabeledButton next",type:"submit"},"Suivant"),c&&H(O.a,{size:"default",className:"next"}),H("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(1)}})))),2==b&&"Client"===S.type&&H("form",{onSubmit:Ce},H("div",{className:"ColumnFLexContainer"},H("input",{className:ee?"input error":"input",type:"tel",name:"mobilephone",placeholder:"Mobile .Ex:06xxxxxxxx",onChange:Ne,value:S.mobilephone,required:!0}),H("label",{className:ee?"errMsg":"hidden"},"Numero invalide")),H(F,{handler:Oe}),H("div",{className:"buttonContainer"},!c&&H("button",{className:f?"SignButton next":"disabeledButton next",type:"submit"},"Suivant"),c&&H(O.a,{size:"default",className:"next"}),H("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(1)}}))),3==b&&H("div",{className:"part 1"},H("h3",null,"Pour votre s\xe9curit\xe9 , on veut s'assurer qu'il s'agit bien de vous . On vous a envoy\xe9 un message text avec un code de v\xe9rification a 6 chiffres . Les tarifs standards s'appliquent ."),H("form",{onSubmit:function(e){return e.preventDefault()}},H("div",{className:"ColumnFLexContainer"},H("input",{className:X?"input error":"input",type:"text",placeholder:"Code de verification",required:!0,onChange:function(e){le(e.target.value),Z(!1)}}),H("label",{className:X?"errMsg":"hidden"},"Code invalid")),H("div",{className:"multipleInput two",style:{marginTop:"25px"}},H("input",{className:"",type:"checkbox",required:!0,checked:se,onChange:function(e){ue(e.target.checked)}}),H("label",{style:{marginLeft:"25px"}},"La cr\xe9ation d'un compte signifie que vous \xe9tes d'accord avec nos ",H("a",{href:"google.com",target:"_blank"},"Conditions d'utiliation"),", notre ",H("a",{href:"facebook.com",target:"_black"},"politique de confidentialit\xe9")," et nos param\xe8tres de notification par defaut")),H("div",{className:"buttonContainer"},!c&&H("button",{className:6===ie.length&&se?"SignButton next":"disabeledButton next",type:"submit",disabled:6!==ie.length||!se,onClick:function(){u(!0);var e=ie;window.confirmationResult.confirm(e).then((function(e){p.a.post("/api/signup/",S,{withCredentials:!0}).then((function(e){200===e.status?window.location.replace("/Settings?location=".concat(ve)):x(5)})).catch((function(e){console.log(e),x(5)}))})).catch((function(e){u(!1),Z(!0),console.log(e)}))}},"Suivant"),c&&H(O.a,{size:"default",className:"next"}),H("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){x(2),v(!1)}})))),5==b&&H("div",{className:"part 1"},H("h3",null,"Smthng went wrong \ud83d\ude12\ud83d\ude12 ")),H("div",{className:"FormFooter"},H("span",null,"D\xe9j\xe0 membre ?"),H(s.a,{href:"Signin"},H("a",null,"Connectez-vous")))),ge&&H("div",{className:"part 1"},H("h2",null,"Nous saluons le retour!"),H("p",null,"Vous \xeates d\xe9j\xe0 connect\xe9 et serez bient\xf4t redirig\xe9 vers page d'accueil."),H("div",{className:"FormFooter"},"Si vous n'\xeates pas redirig\xe9 automatiquement suivez",H(s.a,{href:"/"},H("a",null,"ce lien")))))},A=r.a.createElement;t.a=function(e){return A("div",{className:"Split RightSide"},A("div",{className:"ContentContainer"},A(i,null),"signin"===e.title&&A(h,{query:e.query}),"signup"===e.title&&A(W,{query:e.query})))}},ZJTA:function(e,t,n){},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),l=n("g/15"),c=n("nOHt"),s=n("elyg");var u=new Map,p=window.IntersectionObserver,d={};var m=function(e,t){var n=o||(p?o=new p((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function f(e,t,n,a){e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0}function v(e,t,n,a,r,o,i){var c=e.currentTarget,s=c.nodeName,u=c.target;"A"===s&&(u&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,l.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],l=r[1],u=(0,c.useRouter)(),h=i.default.useMemo((function(){var t=(0,s.resolveHref)(u.pathname,e.href);return{href:t,as:e.as?(0,s.resolveHref)(u.pathname,e.as):t}}),[u.pathname,e.href,e.as]),b=h.href,g=h.as;i.default.useEffect((function(){if(t&&p&&o&&o.tagName&&!d[b+"%"+g])return m(o,(function(){f(u,b,g)}))}),[t,o,b,g,u]);var y=e.children,N=e.replace,w=e.shallow,C=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var O=i.Children.only(y),x={ref:function(e){e&&l(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||v(e,u,b,g,N,w,C)}};return t&&(x.onMouseEnter=function(e){O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(u,b,g,{priority:!0})}),!e.passHref&&("a"!==O.type||"href"in O.props)||(x.href=(0,s.addBasePath)(g)),i.default.cloneElement(O,x)};t.default=h}}]);