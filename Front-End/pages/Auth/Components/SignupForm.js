import Link from 'next/link';
import {useState} from 'react';
import {Select ,TimePicker , Spin } from 'antd';
import axios from 'axios'; 
import Captcha from './captcha';
import firebase from '../../Settings/Components/firebase-config';

const FormComponent = () => {
    const { RangePicker } = TimePicker;
    const { Option } = Select;
    const Fields = ["Electricité","Electronique","artisanat","Commerce","Industrie de process","Mécanique","Hotellerie","Transports"];
    const children = [];
    Fields.map(Field =>{
        children.push(<Option key={Field}>{Field}</Option>);
    })
    
    var data = {
      // type must be either 'Société' or 'Client' , if you chnage the values be sure to change it in backend too
      type: "Société",
      email : "",
      password : "",
      nom : "",
      prenom : "",
      companyname: "",
      title: "Directeur",
      domaine: [],
      addresse: "",
      city: "casablanca",
      mobilephone: "",
      fixphone: "",
      gender: "male",
      horraire: [],
    };

    
    // States ---------------------------------------
    const  [loading , setLoading] = useState(false);
    const  [captchaState , setCaptcha] = useState(false);
    const  [current,setCurrent] = useState(0);
    const  [userData , setData] = useState(data);

    // errors ---------------------------------------
    
    const  [emailErr , setErrEm] = useState(false)
    const  [passwordErr, setErrPass] = useState(false);
    const  [confirmpass , setErrConf] = useState(false);
    const  [domaineErr , setErrdom] = useState(false);
    const  [horraireErr , setErrhor] = useState(false);
    const  [codeErr , setCodeErr] = useState(false);
    const  [phoneErr , setPhoneErr] = useState(false);
    // password confirmation
    const  [Confirmation,setConf] = useState("");
    // phone number confirmation
    const  [codeVerif , setCode] = useState("");
    const  [checkbox,setCheck] = useState(false);
    const  [time , setTime] =useState([]);


    // ----------------------------------------------

    // methods ------------------------------------------
    

    const handleChange = (event)=>{
        const  name = event.target.name ;
        const  value = event.target.value ;
        setData({...userData ,[name] : value});
        
        if (name === "email") {
          setErrEm(false);
        }
        if (name === "password") {
          setErrPass(false);
        }
        if (name === "mobilephone") {
          setPhoneErr(false);
        }
        
    }
    
    const handleConfirmation = (e)=>{
        setConf(e.target.value);
        setErrConf(false);
    }

    const handleTime =(time,timestring)=>{
      const string = timestring ;
      setData({...userData , horraire : string})
      setTime(time);
      setErrhor(false);
    }

    const handleTag =(value)=>{
      const string = value ;
      setData({...userData , domaine : string}); 
      setErrdom(false);
    }

    // Verifying email if it already exist 

    const handleSubmit = async (e)=>{
      setLoading(true);
      e.preventDefault();
      var i = 0 ;
      const body = {email : userData.email};
      await axios.post("http://localhost:9000/signup/verifEmail", body)
      .then(response => {
        if (response.status === 200) {
          setLoading(false);
        } else {

          setLoading(false);
          setErrEm(true);
        }
      })
      .catch(err => {
        setLoading(false);
        i = 1 ;
        setErrEm(true);
        console.log(err);
      }); 
      
      if (userData.password.length < 8) {
        setErrPass(true);
        i = 3;
      }
      if (Confirmation !== userData.password) {
        setErrConf(true);
        i = 3;
      }
      if(i === 0)
      {
        setCurrent(2);
      }
      
    }
    const handleSubmit2 = (e)=>{
        e.preventDefault();
        const newphone = userData.mobilephone.replace(0,"+212");
        setLoading(true);
        var hold = false ;
        console.log(newphone);
        if (userData.domaine.length === 0) {
          setErrdom(true);
          hold = true ;
        }
        if (userData.horraire.length === 0) {
          setErrhor(true);
          hold = true ; 
        }
        var appVerifier = window.recaptchaVerifier;
        if (captchaState) {
          firebase.auth().signInWithPhoneNumber(newphone, appVerifier)
           .then(function (confirmationResult) {
             // SMS sent. Prompt user to type the code from the message, then sign the
             // user in with confirmationResult.confirm(code).
              if (!hold || userData.type === "Client") {
                setLoading(false);
                setCurrent(3);
              }
             window.confirmationResult = confirmationResult;
             
             //currentComponent.setState({ submitState: true });
           }).catch(function (error) {
              setLoading(false);
              setPhoneErr(true);
              // Error; SMS not sent
              console.error(error);
           });
        }
        

    }
    const handler = (bool) =>{
      setCaptcha(bool);
    }
    const handleLastSubmit =()=> {
      
      
      setLoading(true);
      var code = codeVerif ; 
      window.confirmationResult.confirm(code).then((result)=>{
        axios.post("http://localhost:9000/signup/", userData)
        .then(response => {
          if (response.status === 200) {
             const authToken = response.data.token ; 
             window.localStorage.setItem("Tokens", authToken);
             window.location.replace("/Settings/");
          } else {
            setCurrent(5);
          }
        })
        .catch(err => {
          console.log(err);
          setCurrent(5);
        }); 
      }).catch((err)=>{
          setLoading(false) ;
          setCodeErr(true);
          console.log(err);
      })
      
    }

    // -----------------------------------------------------

    return (
      <div className="FormContainer">
        <h1>Inscrivez-vous</h1>
        {/* Type du compte ===============================================*/}
        {current == 0 && (
          <div className="part 1">
            <h2>Choisissez le type de votre compte</h2>
            <form onSubmit={() => setCurrent(1)}>
              <select className="select" name="type" value={userData.type} onChange={handleChange}>
                <option value="Société">Société</option>
                <option value="Client">Client</option>
              </select>
              <div className="buttonContainer">
                <input
                  className="SignButton next"
                  type="submit"
                  value="Suivant"
                />
              </div>
            </form>
          </div>
        )}
        {/* ================================================================= */}

        {/* Basic Informations ===============================================*/}
        {current == 1 && (
          <div className="part 1">
            <form onSubmit={handleSubmit}>
                  <div className="multipleInput two">

                      {/* Gender  ------------------------------------ */}

                      <select className="small" name="gender" value={userData.gender} onChange={handleChange} >
                          <option value="male"  selected>Mr</option>
                          <option value="female" >Mme</option>
                      </select>

                      {/* Nom et prenom  ------------------------------------ */}

                      <input className="input controlled user" type="text" placeholder="Nom" name="nom" onChange={handleChange} value={userData.nom} required/>
                      <input className="input controlled user" type="text" placeholder="Prenom" name="prenom" onChange={handleChange} value={userData.prenom} required/>
                  </div>

                      {/* Email and title for companies ------------------------------------ */}

                      {userData.type === "Société" &&(
                        <div className="multipleInput one" >

                          {/* Title  ------------------------------------ */}
                          <select className="title" name="title" value={userData.title} onChange={handleChange} required>
                              <option value="" disabled selected hidden>Titre de travail</option>
                              <option value="Directeur" >Directeur</option>
                              <option value="Cto">CTO</option>
                          </select>
                          {/* Email   ------------------------------------ */}
                          <div style={{width : '68%' , display : 'flex' , flexDirection : 'column'}}>
                            <input className={emailErr ? "email error" : "email"}  type="email" placeholder="Email" name="email" onChange={handleChange} value={userData.email} required/>
                            <label className={emailErr ? "errMsg" : "hidden"}>Email already exist</label>
                          </div>
                        </div>
                      )}

                      {/* ---------------------------------------------------------------------- */}
                      {/* Email for clients ---------------------------------------------------- */}

                        {userData.type === "Client" &&(
                          <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
                              <input className={emailErr ? "input error" : "input"}  type="email" placeholder="Email" name="email" onChange={handleChange} value={userData.email} required/>
                              <label className={emailErr ? "errMsg" : "hidden"}>Email already exist</label>
                          </div>
                        )}
                      {/* ---------------------------------------------------------------------------- */}

                    <div className="multipleInput one" placeholder="Titre">

                        {/* City  ------------------------------------ */}
                        <select className="title" name="city" value={userData.city} onChange={handleChange} >
                            <option value="" disabled selected hidden>Votre ville</option>
                            <option value="Casa" >Casablanca</option>
                            <option value="Rabat">Rabat</option>
                            <option value="Agadir">Agadir</option>
                            <option value="Meknes">Meknes</option>
                        </select>
                        {/* address ------------------------------------*/}
                        <input className="input addresse" type="text" placeholder="Addresse"  name="addresse" onChange={handleChange} value={userData.addresse} required/>
                        
                    </div>

                    {/* Password  ------------------------------------ */}

                    <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
                      <input className={passwordErr ? "input error" : "input"} type="password" placeholder="Mot de passe"  name="password" onChange={handleChange} value={userData.password} required/>
                      <label className={passwordErr ? "errMsg" : "hidden"}>mot de passe doit être d'au moins 8 caractères</label>
                    </div>

                {/* Confiramtion  ------------------------------------ */}
                
                <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
                  <input className={confirmpass ? "input error" : "input"} type="password" placeholder="Confirmez votre mot de passe" value={Confirmation} onChange={handleConfirmation} required />
                  <label className={confirmpass ? "errMsg" : "hidden"}>la confirmation n'est pas la même que le mot de passe</label>
                </div>
                
              
              
              <div className="buttonContainer">
                  {!loading &&(
                  <button className="SignButton next" type="submit">
                  Suivant
                  </button> 
                 )} 
                 {loading && (<Spin size="default" className="next"/>)}
                <input
                  className="Back"
                  type="button"
                  value="Precedent"
                  onClick={() => setCurrent(0)}
                />
              </div>


            </form>
          </div>
        )}

        {/* ================================================================= */}
        {current == 2 && userData.type === "Société" && (
          <div className="part 1">
            <form onSubmit={handleSubmit2}>

                {/* Nom de societe  ------------------------------------ */}

                <input className="input" type="text" placeholder="Nom de société" name="companyname" value={userData.companyname} onChange={handleChange} required/>
                <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>

                {/* Domaine  ------------------------------------ */}

                <Select mode="tags" style={{ width: '70%' }} placeholder="Votre domaine " className={domaineErr ? "error" : ""}
                  onChange ={handleTag} value={userData.domaine} maxTagCount={3} >
                    {children}
                </Select>
                <label className={domaineErr ? "errMsg" : "hidden"}>Ce champ est obligatoire</label>
                </div>
              
              <div className="multipleInput two">

              {/* Phone number  ------------------------------------ */}

                    <div style={{width : '48%' , display : 'flex' , flexDirection : 'column'}}>
                      <input className={phoneErr ? "email error" : "email"} type="tel" name="mobilephone" placeholder="Téléphone mobile | Ex:06xxxxxxxx" onChange={handleChange} value={userData.mobilephone} required/>
                      <label className={phoneErr ? "errMsg" : "hidden"} >Numero invalide</label>
                    </div>
                    <div style={{width : '48%' , display : 'flex' , flexDirection : 'column'}}>
                      <input className="email" type="tel" name="fixphone" placeholder="Téléphone Fix | Ex:05xxxxxxxx" onChange={handleChange} value={userData.fixphone} required/>
                    </div>
                
              </div><br/>

              {/* Horraire  ------------------------------------ */}

              <label style={{color : '#318CE7'}}>L'horaire de votre société : </label>
              <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
                <RangePicker className={horraireErr ? "error" : ""} bordered={false} format='HH:mm'  minuteStep={30} 
                  value={time} onChange={handleTime}/>
                <label className={horraireErr ? "errMsg" : "hidden"}>Ce champ est obligatoire</label>
              </div>

              {/* Captcha  ------------------------------------ */}

              <Captcha handler={handler}/>
              
              {/* ----------------------------------------------------------- */}

              <div className="buttonContainer">
                {!loading &&(
                  <button className={!captchaState ?  "disabeledButton next":"SignButton next" } type="submit">
                  Suivant
                  </button> 
                 )} 
                 {loading && (<Spin size="default" className="next"/>)}
                <input
                  className="Back"
                  type="button"
                  value="Precedent"
                  onClick={() => setCurrent(1)}
                />
              </div>
            </form>
          </div>
        )}
        {current == 2 && userData.type === "Client" &&(
          <form onSubmit={handleSubmit2}>
            <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
              <input className={phoneErr ? "input error" : "input"} type="tel" name="mobilephone" placeholder="Mobile .Ex:06xxxxxxxx" onChange={handleChange} value={userData.mobilephone} required/>
              <label className={phoneErr ? "errMsg" : "hidden"} >Numero invalide</label>
            </div>
            {/* Captcha  ------------------------------------ */}
            <Captcha handler={handler}/>
            <div className="buttonContainer">
                {!loading &&(
                  <button className={!captchaState ?  "disabeledButton next":"SignButton next" } type="submit">
                  Suivant
                  </button> 
                 )} 
                 {loading && (<Spin size="default" className="next"/>)}
                <input
                  className="Back"
                  type="button"
                  value="Precedent"
                  onClick={() => setCurrent(1)}
                />
            </div>
          </form>
        )}
        {current == 3 && (
          <div className="part 1">
            <h3>Pour votre sécurité , on veut s'assurer qu'il s'agit bien de vous . On vous a envoyé un message text avec 
                un code de vérification a 6 chiffres . Les tarifs standards s'appliquent .</h3>
            <form onSubmit={(e) => e.preventDefault()}>

              {/* Code verification input ------------------------------- */}
                <div style={{width : '100%' , display : 'flex' , flexDirection : 'column'}}>
                  <input className={codeErr ? "input error" : "input controlled"} type="text" placeholder="Code de verification" required onChange={(e)=> {setCode(e.target.value);;setCodeErr(false);}}/>
                  <label className={codeErr ? "errMsg" : "hidden"}>Code invalid</label>
                </div>
               {/* CheckBox input ------------------------------- */}
              <div className="multipleInput two" style={{marginTop : '25px'}}>
                <input className="" type="checkbox" required  checked={checkbox} onChange={(e)=> {setCheck(e.target.checked)}}/>
                <label style={{marginLeft : '25px'}}>La création d'un compte signifie que vous étes d'accord avec nos <a href="google.com" target="_blank">Conditions d'utiliation</a>
                , notre <a href="facebook.com" target="_black">politique de confidentialité</a> et nos paramètres de notification par defaut
                </label>
              </div> 


              {/* ---------------------------------------------------- */}        

              <div className="buttonContainer">
                 {!loading &&(
                  <button
                  className={codeVerif.length !== 6 || !checkbox ?  "disabeledButton next":"SignButton next" }
                  type="submit"
                  disabled={codeVerif.length !== 6 || !checkbox}
                  onClick={handleLastSubmit}
                >Suivant</button>
                 )} 
                 {loading && (<Spin size="default" className="next"/>)}
                <input
                  className="Back"
                  type="button"
                  value="Precedent"
                  onClick={() => setCurrent(2)}
                />
              </div>
            </form>
          </div>
        )}
        {current == 4 && (
          <div className="part 1">
            <h3>Created succefully</h3>
          </div>
        )}
        {current == 5 && (
          <div className="part 1">
            <h3>Smthng went wrong 😒😒 </h3>
          </div>
        )}

        <div className="FormFooter">
          <span>Déjà membre ?</span>
          <Link href="Signin"><a>Connectez-vous</a></Link>
        </div>
      </div>
    );
}
export default FormComponent;