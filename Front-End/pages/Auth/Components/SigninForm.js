import Link from 'next/link';
import axios from 'axios'; 
import { useEffect,useState} from 'react';
import { message } from 'antd';

const FormComponent = (props) => {

    var data = {
      // type must be either 'Société' or 'Client' , if you chnage the values be sure to change it in backend too
      email : "",
      password : ""
    };
    var [userData , setData] = useState(data);
    var [emailErr , setErrEm] = useState(false);
    var [passwordErr, setErrPass] = useState(false);
    const [location , setLocation] = useState("/");
    const [Loggedin , setLog] = useState(false);
    useEffect(()=>{
      if (props.query.ref !== undefined) {
        if (props.query.ref === "tokenexpired") {
          message.warning('veuillez d abord vous connecter');
        }
      }
      if (props.query.location !== undefined) {
        setLocation(props.query.location);
      }
      axios.get('http://localhost:9000/profiles/myprofile',{withCredentials : true})
        .then(res =>{      
              setLog(true);
              setTimeout(() => {
                window.location.replace("/")
              }, 5000);
          })
        .catch(err => {});
    },[])
    const handleSubmit = (e) =>{
      e.preventDefault() ;
      axios.post("http://localhost:9000/signin/", userData , {withCredentials : true})
      .then(response => {
        if (response.status === 200) {
          window.location.replace(location);
        } else {
          setErrEm(true);
          setErrPass(true);
        }
      })
      .catch(err => {
        console.log(err);
        setErrEm(true);
        setErrPass(true);
      }); 
    }

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
    }


    return (
      <div className="FormContainer">
          {Loggedin  && (
            <div className="part 1">
              <h2>Nous saluons le retour!</h2>
              <p>Vous êtes déjà connecté et serez bientôt redirigé vers page d'accueil.</p>
              <div className="FormFooter">
                Si vous n'êtes pas redirigé automatiquement suivez<Link href="/"><a>ce lien</a></Link>
              </div>
            </div>
          )}
          {!Loggedin  && (
            <>
            <h1>Connectez-vous</h1>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <br />
              <input className={emailErr ? "input error" : "input"} type="email" name="email" onChange={handleChange} value={userData.email} required/>
              <br />
              <label className={emailErr ? "errMsg" : "hidden"}>email invalide</label><br />
              <br />
              <label>Mode de passe</label>
              <br />
              <input className={passwordErr ? "input error" : "input"} type="password" name="password" onChange={handleChange} value={userData.password} required />
              <br />
              <label className={passwordErr ? "errMsg" : "hidden"}>mot de passe incorrect</label><br />
              <br />
              <input className="SignButton" type="submit" value="Se connecter" />
            </form>
            <div className="FormFooter">
              <span>Pas encore membre ?</span>
              {props.query.location !== undefined &&(
                <Link href={`SignUp?location=${location}`}><a>Inscrivez-vous</a></Link>
              )}
              {props.query.location === undefined &&(
                <Link href="SignUp"><a>Inscrivez-vous</a></Link>
              )}
            </div>
            </>
          )}
        
      </div>
    );
}


export default FormComponent;