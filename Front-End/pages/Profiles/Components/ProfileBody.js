// Dependencies ------------------------

import {useState , useEffect} from 'react';
import { Menu, Button, message , Progress} from 'antd' ;
import axios from 'axios';
import '../../../styles/ant-picker.scss';
import { storage } from './firebase'; 

// Components -------------------------
import Icon from '@ant-design/icons';
import HomeSvg from './Svg/HomeSvg';
import AboutSvg from './Svg/AboutSvg';
import ClientSvg from './Svg/ClientSvg';
import BookMetting from './Svg/BookMetting';
import '../Sass/fullProfile.scss';
import LikeButton from '../../../components/LikeButton';
import Map from './map/Map';
import Geocode from "react-geocode";
import EditSvg from './Svg/EditSvg';
import Modal from 'antd/lib/modal/Modal';
import EditBox from './EditBox';
import Calendar from './BookMeeting';
// -------------------------------------
function isEmpty(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (value == "" || value == []) {
            if (key !== "booked") {
                 return true ;
            }
        }
      }
    return false ;
}

// ----------------------------
const ProfileBody = ({profile , userid})=>{
    // States ---------------------------------------
    const [imageLoading , setloadimage] = useState(false);
    const [current , setCurrent] = useState('Acceuil');
    const [checkbox,setCheck] = useState(profile.stars.includes(userid));
    const [bookmetting,setbook] = useState(false);
    const [data , setData] = useState(profile);
    const [location , setLocation] = useState({});
    const [filefirebase,setfire] = useState(null);
    const [percentage , setPrecentage]= useState(0);
    const [visible,setvisible] = useState(false);
    const [loading,setloading] = useState(false);
    const [DiplomeList , setDiplomeList] = useState(profile.diplome);


    const date = new Date();

    // Icons -----------------------------------------
    const HomeIcon = props => <Icon component={HomeSvg} {...props} />;
    const AboutIcon = props => <Icon component={AboutSvg} {...props} />;
    const ClientsIcon = props => <Icon component={ClientSvg} {...props} />;
    useEffect(()=>{
        
        const adr = profile.addresse + " , "+ profile.city ;
        Geocode.setApiKey("AIzaSyChI3vJkg_P6JFZKVg9at3FtUZjxxI2lP8");
        Geocode.fromAddress(adr).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              const loc = {address: profile.addresse,
                            lat: lat,
                            lng: lng
              }
              setLocation(loc);
            },
            error => {
              console.error(error);
            }
          );
    },[])
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
    // Handlers -------------------------------------
    
    const handleLike = async ()=>{
        var stars = profile.stars ;
        if (!checkbox) {
           await stars.push(userid);
        }else
        {
           await stars.splice(stars.indexOf(userid),1);
        }
        setCheck(!checkbox);
        const Url = 'http://localhost:9000/profiles/like?userid='+profile._id;
        axios.post(Url,{"stars":stars})
        .then(res=>console.log(res))
        .catch(err => console.log(err));
    }

    const handleClick = e =>{
        setCurrent(e.key);
    }
    const handleBack = ()=>{
        window.location.assign(`/Search?companyname=${profile.companyname}&domaine=&city=&page=1`);
    }
    const handleEdit = ()=>{
        setvisible(true);
    }

    const handleSave = async () =>{
            setData({...data , diplome : DiplomeList});
            if (isEmpty(data)) {
                message.error("Un ou plusieurs champs sont vides")
            }else{
                setloading(true);
                if (filefirebase !== null) {
                    setloadimage(true);
                    const imgData = await firebaseUrl(filefirebase);
                    setData(data.Usrimg = imgData[0]);
                }
                const url = "http://localhost:9000/profiles/update?userid=" + userid ;
                axios.post(url, data)
                .then(response => {
                if (response.status === 200) {
                    setloading(false);
                    setvisible(false);
                    message.success("Mise à jour réussie");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    message.error("Une erreur s'est produite, veuillez réessayer plus tard");
                }
                })
                .catch(err => {
                    message.error("Une erreur s'est produite, veuillez réessayer plus tard");
                    console.log(err);
                }); 
            }
    }


    // ----------------------- Returner ----------------------------------------
    return(
        <div className="Profile">
            <div className="ButtonContainer" onClick={handleBack}>
                <i className="fa fa-arrow-left icon"></i>
                <span className="backButton">Retour</span>
            </div>
            <div className="ProfileHead">
                <div className="ProfileImg">
                    <img src={profile.Usrimg} />
                </div>
                <div className="ProfileInfo">
                    <h3>{profile.companyname}</h3>
                    <p><i className="fa fa-user" aria-hidden="true" style={{marginRight :'10px'}}></i><span>{profile.nom} {profile.prenom}</span> | <span>{profile.title}</span></p>
                    <span className="Likes"><i className="fa fa-heart" aria-hidden="true" style={{marginRight :'5px'}}></i> {profile.stars.length} J'aime</span>
                </div>
                {userid !== profile._id &&(
                    <div className="BookMetting" onClick={()=>setbook(true)}>
                    <BookMetting />
                    <span>Réserver une réunion</span>
                    </div>
                )}
                {userid === profile._id &&(
                    <div className="EditProfile" onClick={handleEdit}>
                    <EditSvg/>
                    <span>Editer profile</span>
                    </div>
                )}
                
            </div>
            <div className="ProfileBody">
                <Modal title="Cliquez sur une case pour réserver une réunion" visible={bookmetting} width="90%" onCancel={()=>setbook(false)} footer={null}><Calendar/></Modal>
                <Modal title="Editez votre profile" visible={visible} width="50vw" onCancel={()=>setvisible(false)} footer={[
                            <Button disabled={false} key="submit" type="primary" loading={loading} style={{borderRadius :'10px', fontFamily :'GlacialBold'}}  onClick={handleSave}>
                                Submit
                            </Button>
                            ]}
                >
                {!imageLoading &&(<EditBox data={data} setData={setData} setDiplomeList={setDiplomeList} DiplomeList={DiplomeList} setfire={setfire}/>)}
                 {imageLoading &&(
                    <div style={{marginBottom : '10%', marginTop : '10%',textAlign : 'center'}}>
                            
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
                </Modal>
                <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{marginTop :'3%'}}>
                    <Menu.Item key="Acceuil" icon={<HomeIcon />} >
                        Acceuil
                    </Menu.Item>
                    <Menu.Item key="propos" icon={<AboutIcon />}>
                        A propos
                    </Menu.Item>
                    <Menu.Item key="clients" icon={<ClientsIcon />}>
                        Clients
                    </Menu.Item>
                </Menu>
                <div className="MenuContent">
                    {current === "Acceuil" &&(
                        <>
                            <div className="presentation">
                                <h2>Presentation de l'entreprise</h2>
                                <p>{profile.presentation}</p>
                            </div>
                            <div className="Horraire">
                                <h2>Horraire</h2>
                                <div className="TimeTable">
                                    <div className="Block">
                                         <ul>
                                             <li className={date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""}>Lundi</li>
                                             <li className={date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""}>Mardi</li>
                                             <li className={date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""} >Mercredi</li>
                                         </ul>
                                         <ul>
                                             <li className={date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""}>{profile.horraire[0]} - {profile.horraire[1]}</li>
                                             <li className={date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                             <li className={date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                         </ul>
                                    </div>
                                    <div className="Block">
                                        <ul>
                                             <li className={date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""} >Jeudi</li>
                                             <li className={date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""} >Vendredi</li>
                                             <li className={date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""} >Samedi</li>
                                        </ul>
                                        <ul>
                                             <li className={date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                             <li className={date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                             <li className={date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {current === "propos" &&(
                        <>
                            <div>
                                <h2>Information supplementaires</h2>
                                <div className="InfoSupp">
                                    <div className="Block">
                                         <ul>
                                             <li className="title">Domaine De travail : </li>
                                             <li style={{whiteSpace: 'pre'}}  className="element" >{profile.domaine.map(el =>('∙ '+el+ '\n'))}</li>
                                         </ul>
                                         <ul>
                                             <li className="title" >téléphone fixe : </li>
                                             <li className="element" >{profile.fixphone}</li>
                                         </ul>
                                         <ul>
                                             <li className="title" >téléphone portable : </li>
                                             <li className="element" >{profile.mobilephone}</li>
                                         </ul>
                                         <ul>
                                             <li className="title" >Langues parlés : </li>
                                             <li className="element"  style={{whiteSpace: 'pre'}}>{profile.languages.map(el =>('∙ '+el+ '\n'))}</li>
                                         </ul>
                                         <ul>
                                             <li className="title" style={{color : "#2e9aff" }} >Diplomes</li>
                                         </ul>
                                         <hr style={{border : '1px solid rgb(240, 240, 240)'}}/>
                                         {profile.diplome.map(dom =>(
                                             <ul key={Date.now()+dom.desc}>
                                                 <li className="title" style={{color: '#969696'}}>{dom.diplomeName}</li>
                                                 <li className="element" >{dom.desc}</li>
                                             </ul>
                                         ))}
                                         <hr style={{border : '1px solid rgb(240, 240, 240)'}}/>
                                         <ul>
                                             <li className="title" >Siège social : </li>
                                             <li className="element" >{profile.addresse}</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>Localisation</h2>
                                <div className="MapContainer">
                                    <Map location={location} zoomLevel={17}/>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="MenuFooter">
                    {userid !== profile._id &&(
                        <div className="like">
                        <LikeButton checkbox={checkbox} handleLike={handleLike} /><span className={checkbox ? "active" : ""}>J'aime</span>
                        </div>
                    )}
                    
                    <div className="share">
                    <i className="fa fa-share-alt" aria-hidden="true" style={{marginRight :'5px'}}></i>Partager
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
export default ProfileBody ;