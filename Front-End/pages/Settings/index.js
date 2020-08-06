import axios from 'axios'
import Lottie from 'react-lottie' ;
import animationData from './Components/Anim.json';
import '../../styles/ProfileSettings.scss';
import jwt from 'jsonwebtoken';
import {useState , useEffect} from 'react';


const Settings = ()=>{
    const [file,setFile] = useState("https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fman.svg?alt=media&token=9cc204e7-e9b3-4a5d-970a-1242a04f90de");
    const [data , setData] = useState();
    const [loading , setLoading] = useState(true); 
    useEffect(()=>{
        const token = window.localStorage.getItem("Tokens");
        jwt.verify(token,"secret",function (err , decoded) {
            if (!err) {
                axios.get('http://localhost:9000/profiles/profile?userid='+decoded.userId)
                .then(res =>{
                    setData(res.data.profile[0]);
                    setLoading(false);
                    console.log(data);
                })
                .catch(err => alert(err));
            }else
            {
                alert("unauthorized !!") ;
                setTimeout(() => {
                    window.location.replace("/");
                }, 5000);
            }
        });
        
    },[])
    const handleChange = (e)=>{
        if (e.target.files[0] !== undefined) {
            try {
                console.log(e.target.files[0]);
                const url =  URL.createObjectURL(e.target.files[0]);
                setFile(url);
            } catch (error) {
                console.error(error);
                alert(error);
            } 
        }
        
        
    }
    const ProfileInfo = {
        
        name: "Youzcard technology",
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    if (loading) {
        return(
            <>
                LOADING
            </>
        )
    } else {
        
    return(
        <div className="ConfigureProfile">
             <div className="HeaderContainer">
                 <div className="Header_Logo">
                     <img src="../static/Icons/LOGO2017.png" height="30" />
                 </div>
                 <div>
                     <span className="title">Configurez votre profile</span>
                 </div>
                 
                 <span>Help</span>
             </div>
             <div className="FlexContainer">
                 <div className="dataContainer">
                     <div className="formConfig">
                         <div className="form_Head">
                             <div className="ProfileImg">
                                 <img src={file} /><br/>
                                 <label class="custom-file-upload">
                                     <input type="file" id="img" name="img" placeholder="Choisissez photo" accept="image/*" onChange={handleChange}/>
                                     Télécharger photo
                                 </label>
                             </div>
                             <div className="ProfileInfo">
                                 <h3>{data.companyname}</h3>
                             </div>
                         </div>
                         <div className="fieldsContainer">
                             <div className="Row">
                                 <label>Presentation</label><br/>
                                 <textarea  className="input" placeholder="Décrivez votre entreprise" rows="4" />
                                 <label>Langues parlés</label>
                                 <input  className="input" type="text"/>
                                 <label>Diplôme et formations</label>
                                 <input className="input" type="text" placeholder="tags goes here"/>
                                 {/* <label>Site web</label>
                                 <input className="input" type="text"/> */}
                             </div>
                         </div>
                     </div>
                     <div className="Illustration">
                         <Lottie
                         options={defaultOptions}
                         height={500}
                         width={500}
                         />
                         <div className="buttonContainer">
                             <button className="later">later</button>
                             <input
                             className="SignButton next"
                             type="submit"
                             value="Suivant"
                             />
                             
                         </div>
                     </div>
                 </div>
             </div>
             
         </div>
     )
    }
}

export default Settings ;