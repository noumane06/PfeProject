import Link from 'next/link';
import {useState} from 'react';
import axios from 'axios'; 

const FormComponent = () => {

    var data = {
      // type must be either 'Société' or 'Client' , if you chnage the values be sure to change it in backend too
      email : "",
      password : ""
    };
    var [userData , setData] = useState(data);
    var [emailErr , setErrEm] = useState(false);
    var [passwordErr, setErrPass] = useState(false);
    const handleSubmit = (e) =>{
      e.preventDefault() ;
      axios.post("http://localhost:9000/signin/", userData)
      .then(response => {
        if (response.status === 200) {
           const authToken = response.data.token ; 
           window.localStorage.setItem("Tokens", authToken);
           window.location.replace("/");
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
          <Link href="SignUp"><a>Inscrivez-vous</a></Link>
        </div>
      </div>
    );
}
export default FormComponent;