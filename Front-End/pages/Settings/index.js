// Dependencies -------------------
import axios from 'axios'
import Lottie from 'react-lottie' ;
import jwt from 'jsonwebtoken';
import {useState , useEffect} from 'react';
import { Modal } from 'antd';
import { Progress } from 'antd';

// File import ---------------------------------
import animationData from './Components/Anim.json';
import loadingData from './Components/Loading.json';
import errorData from './Components/Error.json';
import successData from './Components/Success.json';
import Head from '../../components/head';
import { storage } from './Components/firebase-config';
import '../../styles/ProfileSettings.scss';
import '../Auth/Sass/antd-select.scss';
import '../Auth/Sass/ant-picker.scss';
//---------------------------------
const Settings = ()=>{

    // States 
    const [percentage , setPrecentage]= useState(0);
    const [usrid , setId] = useState()
    const [DataState , setState] = useState(null);
    const [data , setData] = useState();
    const [file,setFile] = useState(null);
    const [loading , setLoading] = useState(true); 
    const [sendingData , setSend] = useState(false);
    const [filefirebase,setfire] = useState();
    const [visible,setvisible] = useState(false);
    const [changed,setchanged] = useState(false);
    // ----------------------------------------------

    // Modal functions 

    const showModal   = () =>{
        setvisible(true);
    }

    const handleCancel = () =>{
        setvisible(false);
    }


    // Firebase url upload function 
    const firebaseUrl = (file) =>{
        return new Promise((resolve,reject)=>{
            let currentImageName = "firebase-image-" + Date.now();
            let uploadImage = storage.ref(`images/${currentImageName}`).put(file);
    
            uploadImage.on('state_changed',
                (snapshot) => {
                    var per = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    setPrecentage(per);
                 },
                (error) => {
                    reject(error);
                },
                () => {
                    storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
                        const imageData = [url, currentImageName]
                        resolve(imageData);
                    })
                })
        })
    } 
    // Hook getting called before the render 
    useEffect(()=>{
        const token = window.localStorage.getItem("Tokens");
        jwt.verify(token,"secret",function (err , decoded) {
            if (!err) {
                axios.get('http://localhost:9000/profiles/profile?userid='+decoded.userId)
                .then(res =>{
                    setId(decoded.userId);
                    setData(res.data.profile[0]);
                    setFile(res.data.profile[0].Usrimg)
                    setLoading(false);
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

    // On submit ----------------------------------

    const Onsubmit = async () =>{
        setSend(true);
        if (filefirebase !== null) {
            const imgData = await firebaseUrl(filefirebase);
            setData(data.Usrimg = imgData[0]);
        }
        const url = "http://localhost:9000/profiles/update?userid=" + usrid ;
        await axios.post(url, data)
        .then(response => {
          if (response.status === 200) {
            setState("done");
            setTimeout(() => {
                window.location.replace("http://localhost:3000/");
            }, 2000);
          } else {
            setState("error");
          }
        })
        .catch(err => {
          setState("error");
          console.log(err);
        }); 
    }

    const handleInputChnage = (event)=>{
        const  name = event.target.name ;
        const  value = event.target.value ;
        setData({...data ,[name] : value});
    }
    // ------------------------------------------------
    // When click on delete picture 
    const handleClick = ()=>{
        URL.revokeObjectURL(file);
        setFile(data.Usrimg);
        setchanged(false);
        
    }
    // When change of image
    const handleChange = (e)=>{
        setchanged(true);
        if (e.target.files[0] !== undefined) {
            try {
                setfire(e.target.files[0]);
                const url =  URL.createObjectURL(e.target.files[0]);
                setFile(url);
            } catch (error) {
                console.error(error);
                alert(error);
            } 
        }
        
        
    }
    // -----------------------------
    // Lottie options 
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    const LoadingOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    const ErrorOptions = {
        loop: false,
        autoplay: true,
        animationData: errorData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    const DoneOptions = {
        loop: false,
        autoplay: true,
        animationData: successData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    // ---------------------------------
    if (loading) {
        return(
            <>
                <Head title="Configurez votre profile | 6 Solutions"/>
                LOADING
            </>
        )
    } else {
        
    return(
        <div className="ConfigureProfile">
             <Head title="Configurez votre profile | 6 Solutions"/>
             <div className="HeaderContainer">
                 <div className="Header_Logo">
                     <img src="../static/Icons/LOGO2017.png" height="30" />
                 </div>
                 <div>
                     {/* <span className="title">Configurez votre profile</span> */}
                 </div>
                    
                 <span>Help</span>
                </div>
             {sendingData && DataState === null &&(
                 <div className="SendingData">
                            
                            <Progress
                            type="circle"
                            strokeColor={{
                                '0%': '#00308F',
                                '100%': '#7CB9E8',
                            }}
                            percent={percentage}
                            />
                        <h1>Veuillez patienter ... </h1>
                        <p>Nous mettons à jour votre profil</p>
                 </div>
             )}
             {sendingData && DataState == "error" &&(
                 <div className="WrongData">
                            <Lottie
                            options={ErrorOptions}
                            height={200}
                            width={200}
                            />
                        <h1>Veuillez réessayer plus tard</h1>
                        <p>Une erreur s'est produite lors de la mise à jour</p>
                 </div>
             )}
             {sendingData && DataState == "done" &&(
                 <div className="SuccessData">
                            <Lottie
                            options={DoneOptions}
                            height={200}
                            width={200}
                            />
                        <h1>Mise à jour du profil réussie</h1>
                        <p>Vous serez bientôt redirigé</p>
                 </div>
             )}
             {!sendingData &&(
                 <>
                
                <div className="FlexContainer">
                    <div className="dataContainer">
                        <div className="formConfig">
                            <div className="form_Head">
                                <div className="ProfileImg">
                                    <img src={file} onClick={showModal} /><br/>
                                    <div>
                                        <label class="custom-file-upload">
                                            <input type="file" id="img" name="img" placeholder="Choisissez photo" accept="image/*" onChange={handleChange}/>
                                            <i class="fa fa-upload" aria-hidden="true"></i>   Ajouter photo
                                        </label>
                                        {changed &&(
                                            <label className="Showmodal" onClick={handleClick}>
                                            <i class="fa fa-user-times" style={{color : '#be0000'}}></i>
                                            </label>
                                        )}
                                        
                                    </div>
                                    
                                    <Modal
                                        title="Image de profile"
                                        visible={visible}
                                        onCancel={handleCancel}
                                        footer={null}
                                        >
                                        <img src={file}  width="100%"/>
                                    </Modal>
                                </div>
                                <div className="ProfileInfo">
                                    {data.type == "Société" && (
                                        <h3>{data.companyname}</h3>
                                    )}

                                    {data.type == "Client" && (
                                        <h3>{data.nom} {data.prenom}</h3>
                                    )}
                                    
                                </div>
                                
                            </div>
                            <div className="fieldsContainer">
                                <div className="Row">
                                    {data.type == "Société" && (
                                        <>
                                        <label>Presentation</label><br/>
                                        <textarea className="input" name="presentation" placeholder="Décrivez votre entreprise" rows="4" onChange={handleInputChnage} value={data.presentation}/>
                                        <label>Langues parlés</label>
                                        <input  className="input" name="languages" placeholder="Ex: Francais , arabe ..." type="text" onChange={handleInputChnage} value={data.languages}/>
                                        <label>Diplôme et formations</label>
                                        <input className="input" type="text" name="diplome" placeholder="Ex: Licence , master , doctoras ..." onChange={handleInputChnage} value={data.diplome}/>
                                        </>
                                    )}
                                    {data.type == "Client" && (
                                        <>
                                        <label>A propos</label><br/>
                                        <textarea className="input" name="presentation" placeholder="Parlez-nous de vous (optionnel)" rows="4" onChange={handleInputChnage} value={data.presentation}/>
                                        </>
                                    )}
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
                                onClick={Onsubmit}
                                value="Suivant"
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
                </>
             )}
             
             
         </div>
     )
    }
}

export default Settings ;