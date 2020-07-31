import Link from 'next/link';
import {useState} from 'react';
import {Select} from 'antd';

const FormComponent = () => {
    const { Option } = Select;
    const Fields = ["Electricité/Electronique","artisanat","Commerce","Industrie de process","Mécanique","Hotellerie","Transports"];
    const children = [];
    Fields.map(Field =>{
        children.push(<Option key={Field}>{Field}</Option>);
    })
    
    var data = {
      type: "Société",
    };
    var [current,setCurrent] = useState(0);
    var [userData , setData] = useState(data);

    const handleChange = (e)=>{
        setData({type : e.target.value});
        console.log(userData);
    }
    return (
      <div className="FormContainer">
        <h1>Inscrivez-vous</h1>
        {current == 0 && (
          <div className="part 1">
            <h2>Choisissez le type de votre compte</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <select className="select" value={userData.type} onChange={handleChange}>
                <option value="Société">Société</option>
                <option value="Client">Client</option>
              </select>
              <div className="buttonContainer">
                <input
                  className="SignButton next"
                  type="submit"
                  value="Suivant"
                  onClick={() => setCurrent(1)}
                />
              </div>
            </form>
          </div>
        )}
        {current == 1 && (
          <div className="part 1">
            <form /*onSubmit={(e) => e.preventDefault()}*/>
                <div className="multipleInput two">
                    <select className="small">
                        <option value="male" selected>Mr</option>
                        <option value="female">Mme</option>
                    </select>
                    <input className="input controlled user" type="text" placeholder="Nom" required/>
                    <input className="input controlled user" type="text" placeholder="Prenom" required/>
                </div>
                <input className="input" type="text" placeholder="Email" required/>
                <input className="input " type="password" placeholder="Mot de passe" required/>
                <input className="input" type="password" placeholder="Confirmez votre mot de passe" required/>
              
              
              <div className="buttonContainer">
                <input
                  className="SignButton next"
                  type="submit"
                  value="Suivant"
                  onClick={() => setCurrent(2)}
                />
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
        {current == 2 && (
          <div className="part 1">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="multipleInput one">
                <input className="input controlled" type="text" placeholder="Nom de société" />
                <input className="input controlled " type="text" placeholder="Titre" required/>
              </div>
              {/* <input className="input controlled" type="text" placeholder="Domaine" required/> */}
              <Select
                mode="tags"
                style={{ width: '65%' }}
                placeholder="Votre domaine "
                
                maxTagCount = {3}
                //onChange={handleChange}
                >
                {children}
              </Select>
              <div className="multipleInput two">
                <input className="input controlled" type="tel" placeholder="Téléphone mobile" required/>
                <input className="input controlled " type="tel" placeholder="Téléphone Fix" required/>
              </div> 
              <div className="buttonContainer">
                <input
                  className="SignButton next"
                  type="submit"
                  value="terminé"
                  showArrow= "true"
                  onClick={() => setCurrent(3)}
                />
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
        {current == 3 && (
          <div className="part 1">
            <h3>Pour votre sécurité , on veut s'assurer qu'il s'agit bien de vous . On vous a envoyé un message text avec 
                un code de vérification a 6 chiffres . Les tarifs standards s'appliquent .</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="input controlled" type="text" placeholder="Code de verification" required/>
              <div className="multipleInput two" style={{marginTop : '25px'}}>
                <input className="" type="checkbox"/>
                <label style={{marginLeft : '25px'}}>La création d'un compte signifie que vous étes d'accord avec nos <a href="google.com">Conditions d'utiliation</a>
                , notre <a href="facebook.com">politique de confidentialité</a> et nos paramètres de notification par defaut
                </label>
              </div> 
              <div className="buttonContainer">
                <input
                  className="SignButton next"
                  type="submit"
                  value="Verify"
                  //onClick={() => setCurrent(1)}
                />
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

        <div className="FormFooter">
          <span>Déjà membre ?</span>
          <Link href="Signin">Connectez-vous</Link>
        </div>
      </div>
    );
}
export default FormComponent;