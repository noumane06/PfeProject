// Dependencies -------------------
import axios from 'axios'
import Lottie from 'react-lottie' ;
import {useState , useEffect} from 'react';
import { Progress , Spin , Select ,Modal } from 'antd';


// File import ---------------------------------
import animationData from './Components/Anim.json';
import errorData from './Components/Error.json';
import loadingData from './Components/Loading.json'
import successData from './Components/Success.json';
import Head from '../../components/head';
import { storage } from './Components/firebase-config';
import '../../styles/ProfileSettings.scss';
import Footer from '../../components/footer';


//---------------------------------
const Settings = (props)=>{
    const { Option } = Select;
    // States 
    const [data , setData] = useState();
    const [DiplomeList , setDiplomeList] = useState();
    const [percentage , setPrecentage]= useState(0);
    const [usrid , setId] = useState()
    const [DataState , setState] = useState(null);
    
    const [file,setFile] = useState();
    const [loading , setLoading] = useState(true); 
    const [sendingData , setSend] = useState(false);
    const [filefirebase,setfire] = useState(null);
    const [visible,setvisible] = useState(false);
    const [changed,setchanged] = useState(false);
    const [location , setLocation] = useState("/");
    const Fields = ["Arabe","Francais","Anglais","Spanish"];
    const children = [];
    Fields.map(Field =>{
        children.push(<Option key={Field}>{Field}</Option>);
    })
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
        if (props.statusCode === 401) {
            const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
            window.location.replace(location);
        }else{
            setId(props.data.profile._id);
            setDiplomeList(props.data.profile.diplome);
            setFile(props.data.profile.Usrimg);
            setData(props.data.profile);
            setLoading(false);
        }
    },[])

    // On submit ----------------------------------

    const Onsubmit = async () =>{
        setSend(true);
        let OldData = data ;
        OldData["diplome"] = DiplomeList ;
        setData(OldData);
        if (filefirebase !== null) {
            const imgData = await firebaseUrl(filefirebase);
            setData(data.Usrimg = imgData[0]);
        }else
        {
            setState("Loading");
        };
        console.log(data);
        const url = "http://15.237.56.214:9000/profiles/update?userid=" + usrid ;
        await axios.post(url, data ,{withCredentials : true})
        .then(response => {
          if (response.status === 200) {
            setState("done");
            setTimeout(() => {
                window.location.assign(location);
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

    const dipChange = (e,index) =>{
        const { name, value } = e.target;
        const list = [...DiplomeList];
        list[index][name] = value;
        setDiplomeList(list);
    }
    const handleAddClick = () => {
        setDiplomeList([...DiplomeList, { diplomeName: "", desc: "" }]);
      };
      // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...DiplomeList];
        list.splice(index, 1);
        setDiplomeList(list);
    };
    // -----------------------------

    // Languages handler 
    const handleLang = (value)=>{
        const string = value ;
        setData({...data , languages : string}); 
    }
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
                <div className="spincentered" >
                    <Spin size="large" />
                </div>
                
            </>
        )
    } else {
        
    return(
        <>
        <div className="ConfigureProfile">
             <Head title="Configurez votre profile | 6 Solutions"/>
             <div className="ContentInside">
             
             <div className="HeaderContainer" onClick={()=>window.location.assign("/")} style={{cursor : 'pointer'}}>
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
             {sendingData && DataState === "Loading" &&(
                 <div className="SendingData">
                            
                            <Lottie
                            options={LoadingOptions}
                            height={200}
                            width={200}
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
                                        <label className="custom-file-upload">
                                            <input type="file" id="img" name="img" placeholder="Choisissez photo" accept="image/*" onChange={handleChange}/>
                                            <i className="fa fa-upload" aria-hidden="true"></i>   Ajouter photo
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
                                    
                                        <label>Presentation</label><br/>
                                        <textarea className="input" name="presentation" placeholder={data.type !== "Société" ? "Parlez-nous de vous (optionnel)" : "Décrivez votre entreprise"}  rows="4" onChange={handleInputChnage} value={data.presentation}/>
                                        <label>Langues parlés</label>
                                        {/* <input  className="input" name="languages" placeholder="Ex: Francais , arabe ..." type="text" onChange={handleInputChnage} value={data.languages}/> */}
                                        <Select mode="tags" style={{ width: '100%', marginTop : '20px',padding : '7px 4px',borderRadius : '10px',backgroundColor: '#e9f1fa' }} placeholder="Ex: Francais , arabe ..."
                                        onChange ={handleLang} value={data.languages} maxTagCount={3} >
                                            {children}
                                        </Select>
                                        <label>Diplôme et formations</label>
                                        <div className="Diplomes">
                                            {DiplomeList.map((element, index) =>(
                                                <div className="container">
                                                    <input className="input diplome" type="text" name="diplomeName" placeholder="Votre Diplome" value={element.diplomeName}  onChange={e => dipChange(e,index)}/>
                                                    <input className={index !== 0 ?"input desc2":"input desc"} type="text" name="desc" placeholder="Brève description" value={element.desc} onChange={e => dipChange(e,index)}/>
                                                    {index !== 0 &&(
                                                        <label className="delete" onClick={() => handleRemoveClick(index)}>
                                                            <i class="fa fa-trash" aria-hidden="true" style={{color : '#be0000'}}></i>
                                                        </label>
                                                        )}
                                                </div>
                                                
                                            ))}
                                            
                                            <div className="container ">
                                                <button onClick={handleAddClick} className="ajouter">Ajouter</button>
                                            </div>
                                            
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="Illustration">
                            <div className="ill">
                                <Lottie
                                options={defaultOptions}
                                height={500}
                                width={500}
                                />
                            </div>
                            
                            <div className="buttonContainer">
                                <a className="later" href="/" style={{textDecoration : 'none'}}>later</a>
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
         </div>
         <Footer/>
        </>
     )
    }
}
export const getServerSideProps = async (ctx) => {
    try {
        const cookie = ctx.req.headers.cookie ;
        const url = "http://15.237.56.214:9000/profiles/myprofile" ;
        const res = await fetch( url,{headers : {cookie}}); 
        const statusCode = res.status;
        const data = await res.json();
        
        if (statusCode !== 200) {
            throw statusCode 
        }
        return  {
            props : {data }
        }
    } 
    catch (error) {
        ctx.res.statusCode = error;
        return {
               props : {statusCode : error}
        };
    }   
}
export default Settings ;