(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"09Wf":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a("CWQg"),i=Object(n.a)("success","processing","error","default","warning"),o=Object(n.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},"6nsN":function(e,t,a){"use strict";a.r(t);a("LOEa")},STQv:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a("Wcq6"),i=a.n(n);a.d(t,"a",(function(){return i.a}));a("WI49");i.a.apps.length||i.a.initializeApp({apiKey:"AIzaSyA1dd_WkmGmn0fWh4Kq8F_gKar84u5Jfsk",authDomain:"solutions-eaa28.firebaseapp.com",databaseURL:"https://solutions-eaa28.firebaseio.com",projectId:"solutions-eaa28",storageBucket:"solutions-eaa28.appspot.com",messagingSenderId:"481100749596",appId:"1:481100749596:web:d0bd4a96f04cae23cbb8d9",measurementId:"G-0EBZH85FED"});var o=i.a.storage()},UGMd:function(e,t,a){},YFqc:function(e,t,a){e.exports=a("cTJO")},YcFo:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n).a.createElement;t.a=function(){return i("div",{className:"Split LeftSide"},i("img",{src:"../../static/Icons/LOGO2017.png",height:"30",onClick:function(){return window.location.replace("/")}}))}},YefX:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=i.a.createElement,r=function(){return o("div",{className:"HeaderContainer"},o("div",{className:"ButtonContainer",onClick:function(){return window.location.assign("/")}},o("i",{className:"fa fa-arrow-left icon"}),o("span",{className:"backButton"},"Retour")),o("span",{className:"Help"},"Aide"))},s=a("rePB"),u=a("YFqc"),l=a.n(u),c=a("vDqi"),m=a.n(c),d=a("tsqr"),p=i.a.createElement;function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e){var t=Object(n.useState)({email:"",password:""}),a=t[0],o=t[1],r=Object(n.useState)(!1),u=r[0],c=r[1],f=Object(n.useState)(!1),v=f[0],b=f[1],g=Object(n.useState)("/"),y=g[0],N=g[1],C=Object(n.useState)(!1),w=C[0],O=C[1];Object(n.useEffect)((function(){void 0!==e.query.ref&&"tokenexpired"===e.query.ref&&d.b.warning("veuillez d abord vous connecter"),void 0!==e.query.location&&N(e.query.location),m.a.get("/api/profiles/myprofile",{withCredentials:!0}).then((function(e){O(!0),setTimeout((function(){window.location.replace("/")}),5e3)})).catch((function(e){}))}),[]);var x=function(e){var t=e.target.name,n=e.target.value;o(h(h({},a),{},Object(s.a)({},t,n))),"email"===t&&c(!1),"password"===t&&b(!1)};return p("div",{className:"FormContainer"},w&&p("div",{className:"part 1"},p("h2",null,"Nous saluons le retour!"),p("p",null,"Vous \xeates d\xe9j\xe0 connect\xe9 et serez bient\xf4t redirig\xe9 vers page d'accueil."),p("div",{className:"FormFooter"},"Si vous n'\xeates pas redirig\xe9 automatiquement suivez",p(l.a,{href:"/"},p("a",null,"ce lien")))),!w&&p(i.a.Fragment,null,p("h1",null,"Connectez-vous"),p("form",{onSubmit:function(e){e.preventDefault(),m.a.post("/api/signin/",a).then((function(e){200===e.status?window.location.replace(y):(c(!0),b(!0))})).catch((function(e){console.log(e),c(!0),b(!0)}))}},p("label",null,"Email"),p("br",null),p("input",{className:u?"input error":"input",style:{width:"80%"},type:"email",name:"email",onChange:x,value:a.email,required:!0}),p("br",null),p("label",{className:u?"errMsg":"hidden"},"email invalide"),p("br",null),p("br",null),p("label",null,"Mode de passe"),p("br",null),p("input",{className:v?"input error":"input",style:{width:"80%"},type:"password",name:"password",onChange:x,value:a.password,required:!0}),p("br",null),p("label",{className:v?"errMsg":"hidden"},"mot de passe incorrect"),p("br",null),p("br",null),p("input",{className:"SignButton",type:"submit",value:"Se connecter"})),p("div",{className:"FormFooter"},p("span",null,"Pas encore membre ?"),void 0!==e.query.location&&p(l.a,{href:"SignUp?location=".concat(y)},p("a",null,"Inscrivez-vous")),void 0===e.query.location&&p(l.a,{href:"SignUp"},p("a",null,"Inscrivez-vous")))))},b=a("o0o1"),g=a.n(b),y=a("HaE+"),N=a("kl6h"),C=a("2fM7"),w=a("TeRw"),O=a("W9HT"),x=a("1OyB"),S=a("vuIU"),j=a("JX7q"),q=a("Ji7U"),M=a("md7G"),k=a("foSv"),E=a("STQv"),P=i.a.createElement;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(k.a)(e);if(t){var i=Object(k.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}a("6nsN");var z=function(e){Object(q.a)(a,e);var t=F(a);function a(e){var n;return Object(x.a)(this,a),n=t.call(this,e),Object(s.a)(Object(j.a)(n),"LoadCaptcha",(function(){E.a.auth().languageCode="en";var e=Object(j.a)(n);window.recaptchaVerifier=new E.a.auth.RecaptchaVerifier("recaptcha",{size:"normal",callback:function(t){e.props.handler(!0)},"expired-callback":function(){e.props.handler(!1),console.log("expired")}}),window.recaptchaVerifier.render().then((function(e){window.recaptchaWidgetId=e}))})),n.LoadCaptcha=n.LoadCaptcha.bind(Object(j.a)(n)),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){"complete"===document.readyState?this.LoadCaptcha():window.onload=this.loadRecaptcha}},{key:"render",value:function(){return P("div",{className:"text-center"},P("div",{id:"recaptcha"}))}}]),a}(i.a.Component),D=(a("ZJTA"),a("NfAz")),I=a.n(D),T=a("yegV"),L=a.n(T),B=a("yzYF"),R=a.n(B),V=a("sVM9"),H=a.n(V),_=i.a.createElement,J=function(){return _("div",{className:"terms"},_("h1",null,"Condition d'utilisation"),_("h2",null,"Title goes here"),_("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."),_("h2",null,"Title goes here"),_("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."),_("h2",null,"Title goes here"),_("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."),_("h2",null,"Title goes here"),_("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."),_("h2",null,"Title goes here"),_("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."))},A=i.a.createElement,Q=function(){return A("div",{className:"privacy"},A("h1",null,"Privacy Policy"),A("h2",null,"Title goes here"),A("p",null,"Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."))},W=i.a.createElement;function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e){var t=N.a.RangePicker,a=C.a.Option,o=[];R.a.map((function(e){o.push(W(a,{key:e},e))}));var r=Object(n.useState)(!1),u=r[0],c=r[1],p=Object(n.useState)(!1),f=p[0],h=p[1],v=Object(n.useState)(0),b=v[0],x=v[1],S=Object(n.useState)({type:"Soci\xe9t\xe9",email:"",password:"",nom:"",prenom:"",companyname:"",title:"Directeur",domaine:[],addresse:"",city:"Casablanca",mobilephone:"",fixphone:"",gender:"male",horraire:[]}),j=S[0],q=S[1],M=Object(n.useState)(!1),k=M[0],P=M[1],F=Object(n.useState)(!1),D=F[0],T=F[1],B=Object(n.useState)(!1),V=B[0],_=B[1],A=Object(n.useState)(!1),U=A[0],K=A[1],G=Object(n.useState)(!1),Z=G[0],X=G[1],$=Object(n.useState)(!1),ee=$[0],te=$[1],ae=Object(n.useState)(!1),ne=ae[0],ie=ae[1],oe=Object(n.useState)(!1),re=oe[0],se=oe[1],ue=Object(n.useState)(!1),le=ue[0],ce=ue[1],me=Object(n.useState)(""),de=me[0],pe=me[1],fe=Object(n.useState)(""),he=fe[0],ve=fe[1],be=Object(n.useState)(!1),ge=be[0],ye=be[1],Ne=Object(n.useState)([]),Ce=Ne[0],we=Ne[1],Oe=Object(n.useState)("/"),xe=Oe[0],Se=Oe[1],je=Object(n.useState)(!1),qe=je[0],Me=je[1];Object(n.useEffect)((function(){void 0!==e.query&&("tokenexpired"===e.query.ref&&d.b.warning("veuillez d abord vous connecter"),void 0!==e.query.location&&Se(e.query.location)),m.a.get("/api/profiles/myprofile",{withCredentials:!0}).then((function(e){Me(!0),setTimeout((function(){window.location.replace("/")}),5e3)})).catch((function(e){}))}),[]);var ke=function(e){var t=e.target.name,a=e.target.value;q(Y(Y({},j),{},Object(s.a)({},t,a))),"email"===t&&_(!1),"password"===t&&K(!1),"mobilephone"===t&&ce(!1)},Ee=function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),t.preventDefault(),a=0,n={email:j.email},e.next=6,m.a.post("/api/signup/verifEmail",n).then((function(e){200===e.status?c(!1):(c(!1),_(!0))})).catch((function(e){c(!1),a=1,_(!0),console.log(e)}));case 6:j.password.length<8&&(K(!0),a=3),de!==j.password&&(X(!0),a=3),0===a&&x(2);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(e){e.preventDefault();var t=j.mobilephone.replace(0,"+212");c(!0);var a=!1;0===j.domaine.length&&(te(!0),a=!0),0===j.horraire.length&&(ie(!0),a=!0);var n=window.recaptchaVerifier;f&&E.a.auth().signInWithPhoneNumber(t,n).then((function(e){a&&"Client"!==j.type||(c(!1),x(3)),window.confirmationResult=e})).catch((function(e){"auth/too-many-requests"!==e.code&&(ce(!0),console.log(e)),c(!1),h(!1),"auth/too-many-requests"===e.code&&(console.log(e),w.a.error({message:"auth / trop de requ\xeates",description:"Nous avons bloqu\xe9 toutes les demandes de cet appareil en raison d une activit\xe9 inhabituelle. R\xe9essayez plus tard.",duration:10}))}))},Fe=function(e){h(e)};return W("div",{className:"FormContainer"},!qe&&W(i.a.Fragment,null,W("h1",null,"Inscrivez-vous"),0==b&&W("div",{className:"part 1"},W("h2",null,"Choisissez le type de votre compte"),W("form",{onSubmit:function(){return x(1)}},W("select",{className:"select",name:"type",value:j.type,onChange:ke},W("option",{value:"Soci\xe9t\xe9"},"Soci\xe9t\xe9"),W("option",{value:"Client"},"Client")),W("div",{className:"buttonContainer"},W("input",{className:"SignButton next",type:"submit",value:"Suivant"})))),1==b&&W("div",{className:"part 1"},W("form",{onSubmit:Ee},W("div",{className:"multipleInput"},W("select",{className:"small",name:"gender",value:j.gender,onChange:ke},W("option",{value:"male",selected:!0},"Mr"),W("option",{value:"female"},"Mme")),W("input",{className:"input controlled",type:"text",placeholder:"Nom",name:"nom",onChange:ke,value:j.nom,required:!0}),W("input",{className:"input controlled",type:"text",placeholder:"Prenom",name:"prenom",onChange:ke,value:j.prenom,required:!0})),"Soci\xe9t\xe9"===j.type&&W("div",{className:"multipleInput"},W("select",{className:"title",name:"title",value:j.title,onChange:ke,required:!0},L.a.map((function(e){return W("option",{value:e,key:e},e)}))),W("div",{style:{width:"68%",display:"flex",flexDirection:"column"}},W("input",{className:V?"email error":"email",type:"email",placeholder:"Email",name:"email",onChange:ke,value:j.email,required:!0}),W("label",{className:V?"errMsg":"hidden"},"Email already exist"))),"Client"===j.type&&W("div",{className:"ColumnFLexContainer"},W("input",{className:V?"input error":"input",type:"email",placeholder:"Email",name:"email",onChange:ke,value:j.email,required:!0}),W("label",{className:V?"errMsg":"hidden"},"Email already exist")),W("div",{className:"multipleInput"},W("select",{className:"title",name:"city",value:j.city,onChange:ke},I.a.map((function(e){return W("option",{value:e,key:e},e)}))),W("input",{className:"input addresse",type:"text",placeholder:"Addresse",name:"addresse",onChange:ke,value:j.addresse,required:!0})),W("div",{className:"ColumnFLexContainer"},W("input",{className:U?"input error":"input",type:"password",placeholder:"Mot de passe",name:"password",onChange:ke,value:j.password,required:!0}),W("label",{className:U?"errMsg":"hidden"},"mot de passe doit \xeatre d'au moins 8 caract\xe8res")),W("div",{className:"ColumnFLexContainer"},W("input",{className:Z?"input error":"input",type:"password",placeholder:"Confirmez votre mot de passe",value:de,onChange:function(e){pe(e.target.value),X(!1)},required:!0}),W("label",{className:Z?"errMsg":"hidden"},"la confirmation n'est pas la m\xeame que le mot de passe")),W("div",{className:"buttonContainer"},!u&&W("button",{className:"SignButton next",type:"submit"},"Suivant"),u&&W(O.a,{size:"default",className:"next"}),W("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(0)}})))),2==b&&"Soci\xe9t\xe9"===j.type&&W("div",{className:"part 1"},W("form",{onSubmit:Pe},W("input",{className:"input soc",type:"text",placeholder:"Nom de soci\xe9t\xe9",name:"companyname",value:j.companyname,onChange:ke}),W("div",{className:"ColumnFLexContainer"},W(C.a,{mode:"tags",style:{width:"100%"},placeholder:"Votre domaine ",className:ee?"error":"",onChange:function(e){var t=e;q(Y(Y({},j),{},{domaine:t})),te(!1)},value:j.domaine,maxTagCount:3},o),W("label",{className:ee?"errMsg":"hidden"},"Ce champ est obligatoire")),W("div",{className:"multipleInput two"},W("div",{style:{width:"48%",display:"flex",flexDirection:"column"}},W("input",{className:le?"email error":"email",type:"tel",name:"mobilephone",placeholder:"T\xe9l\xe9phone mobile | Ex:06xxxxxxxx",onChange:ke,value:j.mobilephone,required:!0}),W("label",{className:le?"errMsg":"hidden"},"Numero invalide")),W("div",{style:{width:"48%",display:"flex",flexDirection:"column"}},W("input",{className:"email",type:"tel",name:"fixphone",placeholder:"T\xe9l\xe9phone Fix | Ex:05xxxxxxxx",onChange:ke,value:j.fixphone,required:!0}))),W("br",null),W("label",{style:{color:"#318CE7"}},"L'horaire de votre soci\xe9t\xe9 : "),W("div",{className:"ColumnFLexContainer"},W(t,{className:ne?"error":"",style:{width:"100%"},bordered:!1,format:"HH:mm",minuteStep:30,value:Ce,onChange:function(e,t){var a=t;q(Y(Y({},j),{},{horraire:a})),we(e),ie(!1)}}),W("label",{className:ne?"errMsg":"hidden"},"Ce champ est obligatoire")),W(z,{handler:Fe}),W("div",{className:"buttonContainer"},!u&&W("button",{className:f?"SignButton next":"disabeledButton next",type:"submit"},"Suivant"),u&&W(O.a,{size:"default",className:"next"}),W("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(1)}})))),2==b&&"Client"===j.type&&W("form",{onSubmit:Pe},W("div",{className:"ColumnFLexContainer"},W("input",{className:le?"input error":"input",type:"tel",name:"mobilephone",placeholder:"Mobile .Ex:06xxxxxxxx",onChange:ke,value:j.mobilephone,required:!0}),W("label",{className:le?"errMsg":"hidden"},"Numero invalide")),W(z,{handler:Fe}),W("div",{className:"buttonContainer"},!u&&W("button",{className:f?"SignButton next":"disabeledButton next",type:"submit"},"Suivant"),u&&W(O.a,{size:"default",className:"next"}),W("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){return x(1)}}))),3==b&&W("div",{className:"part 1"},W("h3",null,"Pour votre s\xe9curit\xe9 , on veut s'assurer qu'il s'agit bien de vous . On vous a envoy\xe9 un message text avec un code de v\xe9rification a 6 chiffres . Les tarifs standards s'appliquent ."),W("form",{onSubmit:function(e){return e.preventDefault()}},W("div",{className:"ColumnFLexContainer"},W("input",{className:re?"input error":"input",type:"text",placeholder:"Code de verification",required:!0,onChange:function(e){ve(e.target.value),se(!1)}}),W("label",{className:re?"errMsg":"hidden"},"Code invalid")),W("div",{className:"multipleInput two",style:{marginTop:"25px"}},W("input",{className:"",type:"checkbox",required:!0,checked:ge,onChange:function(e){ye(e.target.checked)}}),W("label",{style:{marginLeft:"25px"}},"La cr\xe9ation d'un compte signifie que vous \xe9tes d'accord avec nos ",W("a",{onClick:function(){return T(!0)},target:"_blank"},"Conditions d'utilisation"),", notre ",W("a",{onClick:function(){return P(!0)},target:"_black"},"politique de confidentialit\xe9")," et nos param\xe8tres de notification par defaut")),W(H.a,{title:"",visible:D,width:"90%",bodyStyle:{height:"70vh",overflowY:"scroll"},onCancel:function(){return T(!1)},footer:null},W(J,null)),W(H.a,{title:"",visible:k,width:"90%",bodyStyle:{height:"70vh",overflowY:"scroll"},onCancel:function(){return P(!1)},footer:null},W(Q,null)),W("div",{className:"buttonContainer"},!u&&W("button",{className:6===he.length&&ge?"SignButton next":"disabeledButton next",type:"submit",disabled:6!==he.length||!ge,onClick:function(){c(!0);var e=he;window.confirmationResult.confirm(e).then((function(e){m.a.post("/api/signup/",j,{withCredentials:!0}).then((function(e){200===e.status?window.location.replace("/Settings?location=".concat(xe)):x(5)})).catch((function(e){console.log(e),x(5)}))})).catch((function(e){c(!1),se(!0),console.log(e)}))}},"Suivant"),u&&W(O.a,{size:"default",className:"next"}),W("input",{className:"Back",type:"button",value:"Precedent",onClick:function(){x(2),h(!1)}})))),5==b&&W("div",{className:"part 1"},W("h3",null,"Smthng went wrong \ud83d\ude12\ud83d\ude12 ")),W("div",{className:"FormFooter"},W("span",null,"D\xe9j\xe0 membre ?"),W(l.a,{href:"Signin"},W("a",null,"Connectez-vous")))),qe&&W("div",{className:"part 1"},W("h2",null,"Nous saluons le retour!"),W("p",null,"Vous \xeates d\xe9j\xe0 connect\xe9 et serez bient\xf4t redirig\xe9 vers page d'accueil."),W("div",{className:"FormFooter"},"Si vous n'\xeates pas redirig\xe9 automatiquement suivez",W(l.a,{href:"/"},W("a",null,"ce lien")))))},G=i.a.createElement;t.a=function(e){return G("div",{className:"Split RightSide"},G("div",{className:"ContentContainer"},G(r,null),"signin"===e.title&&G(v,{query:e.query}),"signup"===e.title&&G(K,{query:e.query})))}},ZJTA:function(e,t,a){},cTJO:function(e,t,a){"use strict";var n=a("J4zp"),i=a("284h");t.__esModule=!0,t.default=void 0;var o,r=i(a("q1tI")),s=a("g/15"),u=a("nOHt"),l=a("elyg");var c=new Map,m=window.IntersectionObserver,d={};var p=function(e,t){var a=o||(m?o=new m((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),c.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function f(e,t,a,n){e.prefetch(t,a,n).catch((function(e){0})),d[t+"%"+a]=!0}function h(e,t,a,n,i,o,r){var u=e.currentTarget,l=u.nodeName,c=u.target;"A"===l&&(c&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,s.getLocationOrigin)();return new URL(e,t).origin===t}(a)&&(e.preventDefault(),null==r&&(r=n.indexOf("#")<0),t[i?"replace":"push"](a,n,{shallow:o}).then((function(e){e&&r&&(window.scrollTo(0,0),document.body.focus())})))}var v=function(e){var t=!1!==e.prefetch,a=r.default.useState(),i=n(a,2),o=i[0],s=i[1],c=(0,u.useRouter)(),v=r.default.useMemo((function(){var t=(0,l.resolveHref)(c.pathname,e.href);return{href:t,as:e.as?(0,l.resolveHref)(c.pathname,e.as):t}}),[c.pathname,e.href,e.as]),b=v.href,g=v.as;r.default.useEffect((function(){if(t&&m&&o&&o.tagName&&!d[b+"%"+g])return p(o,(function(){f(c,b,g)}))}),[t,o,b,g,c]);var y=e.children,N=e.replace,C=e.shallow,w=e.scroll;"string"===typeof y&&(y=r.default.createElement("a",null,y));var O=r.Children.only(y),x={ref:function(e){e&&s(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||h(e,c,b,g,N,C,w)}};return t&&(x.onMouseEnter=function(e){O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(c,b,g,{priority:!0})}),!e.passHref&&("a"!==O.type||"href"in O.props)||(x.href=(0,l.addBasePath)(g)),r.default.cloneElement(O,x)};t.default=v}}]);