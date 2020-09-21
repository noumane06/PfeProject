// Dependencies ------------------------

import {useState , useEffect} from 'react';
import { Menu, Button, message } from 'antd' ;
import axios from 'axios';
import '../../../styles/ant-picker.scss';
import { storage } from './firebase'; 

// Components -------------------------
import Head from '../../../components/head';
import Icon from '@ant-design/icons';
import HomeSvg from './Svg/HomeSvg';
import AboutSvg from './Svg/AboutSvg';
import ClientSvg from './Svg/ClientSvg';
import '../Sass/fullProfile.scss';
import LikeButton from '../../../components/LikeButton';
import Geocode from "react-geocode";
import Modal from 'antd/lib/modal/Modal';
import EditBox from './Components/EditBox';
import Calendar from './Components/BookMeeting';
import NavAcceuil from './Components/NavAcceuil';
import NavPropos from './Components/NavPropos';
import ProgressBar from './Components/ProgressBar';
import ProfileHead from './Components/ProfileHead';
// -------------------------------------
function isEmpty(obj , type) {
    if (type === "Société") {
        for (const [key, value] of Object.entries(obj)) {
            if (value == "" || value == []) {
                if (key !== "booked") {
                     
                }
            }
          }
    }
    if (obj["addresse"] === "") {
        return true ;
    }
    return false ;
}

// ----------------------------
const ProfileBody = ({profile , userid})=>{
    // States ---------------------------------------
    const name = profile.companyname === "" || profile.companyname== undefined ? profile.nom+" "+profile.prenom : profile.companyname ;
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
        axios.post(Url,{"stars":stars},{withCredentials : true})
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
            let OldData = data ;
            OldData["diplome"] = DiplomeList ;
            setData(OldData);
            if (isEmpty(data , profile.type)) {
                message.error("Un ou plusieurs champs sont vides")
            }else{
                setloading(true);
                if (filefirebase !== null) {
                    setloadimage(true);
                    const imgData = await firebaseUrl(filefirebase);
                    setData(data.Usrimg = imgData[0]);
                }
                const url = "http://localhost:9000/profiles/update?userid=" + userid ;
                axios.post(url, data,{withCredentials : true})
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
            <Head title={name+" | 6Solutions"}/>
            <div className="ButtonContainer" onClick={handleBack}>
                <i className="fa fa-arrow-left icon"></i>
                <span className="backButton">Retour</span>
            </div>
            <ProfileHead profile={profile} handleEdit={handleEdit} setbook={setbook} userid={userid} />
            <div className="ProfileBody">
                <Modal title="Cliquez sur une case pour réserver une réunion" visible={bookmetting} width="90%" bodyStyle={{height: '50vh' , overflowY : 'scroll'}} onCancel={()=>setbook(false)} footer={null}><Calendar profile={profile}/></Modal>
                <Modal title="Editez votre profile" className="EditModal" visible={visible}  bodyStyle={{height: '50vh', overflowY : 'scroll'}} onCancel={()=>setvisible(false)} footer={[
                            <Button disabled={false} key="submit" type="primary" loading={loading} style={{borderRadius :'10px', fontFamily :'GlacialBold'}}  onClick={handleSave}>
                                Terminé !
                            </Button>
                            ]}
                >
                {!imageLoading &&(<EditBox data={data} setData={setData} setDiplomeList={setDiplomeList} DiplomeList={DiplomeList} setfire={setfire}/>)}
                {imageLoading &&(
                    <ProgressBar percentage={percentage}/>
                 )}
                </Modal>

                {/* Nav menu ------------------------------------ */}
                <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{marginTop :'3%'}}>
                    <Menu.Item key="Acceuil" icon={<HomeIcon />} >
                        Acceuil
                    </Menu.Item>
                    <Menu.Item key="propos" icon={<AboutIcon />}>
                        A propos
                    </Menu.Item>
                </Menu>
                <div className="MenuContent">
                    {current === "Acceuil" &&(
                        <>
                            <NavAcceuil date={date} profile={profile}/>
                        </>
                    )}
                    {current === "propos" &&(
                        <>
                            <NavPropos profile={profile} location={location} />
                        </>
                    )}
                </div>
                <div className="MenuFooter">
                    {userid !== profile._id && profile.type === "Société" &&(
                        <div className="like">
                        <LikeButton checkbox={checkbox} handleLike={handleLike} /><label htmlFor="checkbox" className={checkbox ? "active" : ""}>J'aime</label>
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