import Link from 'next/link';
import '../styles/header.scss';
import {useState , useEffect} from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import ProfileIcon from './svg/profile.js' ;
import SettingsIcon from './svg/settings.js' ;
import LogoutIcon from './svg/logout.js' ;


const DropdownItem = (props)=>{
    return(
        <div className="menuItem" onClick={props.onClick}>
            <span className="icon-button">{props.lefticon}</span>
            {props.children}
        </div>
    )
}
const DropDown = ({userid}) =>{

    const handleLogout = () =>{
        axios.get('http://localhost:9000/signout',{withCredentials : true})
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    }
    return(
        <div className="Dropdown">
            <DropdownItem lefticon={<ProfileIcon/>}><a href={`/Profiles/`+userid} style={{textDecoration : 'none'}}>Mon profile</a></DropdownItem>
            <DropdownItem lefticon={<SettingsIcon/>}>Paremetres</DropdownItem>
            <DropdownItem lefticon={<LogoutIcon/>} onClick={handleLogout}>Se déconnecter</DropdownItem>
        </div>
    )
}

// Componenet  -------------------------------------------------------------
const Header = ({active})=>
{
    const [userId , setToken] = useState(null);
    const [loading , setLoading] = useState(true);
    const [opened , setOpen] = useState(false);
    const [data , setData] = useState();
    
    useEffect(()=>{
        
        axios.get('http://localhost:9000/profiles/myprofile',{withCredentials : true})
        .then(res =>{      
            setData(res.data.profile);
            setLoading(false);
            setToken('good');
         })
        .catch(err => {
            setLoading(false);
            setToken(null);
            console.error(err)
        });
    },[]);
    const handleClick = ()=>{
        window.location.replace("/Auth/Signin");
    }
    
    
    return(
        <div className="Header_Container">
            <div className="Header_Logo">
                <img src="../static/Icons/LOGO2017.png" height="30" onClick={()=>window.location.assign("/")} style={{cursor : 'pointer'}}/>
            </div>
            <ul>
                <li className={active=="acceuil"?"active":"link"}><a href="/">Acceuil</a></li>
                <li className={active=="propos"?"active":"link"}><a href="/propos">A propos</a></li>
                <li className={active=="temoignages"?"active":"link"}><a href="/temoignages">Temoignages</a></li>
                <li className={active=="contact"?"active":"link"}><a href="/contact">Contact</a></li>
                <li className={active=="questions"?"active":"link"}><a href="/questions">Questions</a></li>
            </ul>
            <div className="Header_Buttons">
                {!loading && userId === null &&(
                    <>
                    <input className="Header_subscribe" type="button" value="S'inscrire" onClick={() => window.location.replace("/Auth/SignUp")}/>
                    <input className="Header_signin" type="button" value="Se connecter" onClick={handleClick}/>
                    </>
                ) }
                {!loading && userId !== null &&(
                    <>
                        
                        <div className="ProfileThumb" onClick={()=>setOpen(!opened)}>
                            <div className="ProfileImg">
                                <img src={data.Usrimg}/>
                            </div>
                                    {data.type == "Société" && (
                                        <span>{data.companyname}</span>
                                    )}

                                    {data.type == "Client" && (
                                        <span>{data.nom} {data.prenom}</span>
                                    )}
                            
                        </div>
                        {opened &&(
                            <>
                            <DropDown userid={userId}/>
                            </>
                        )}
                    </>
                ) }

            </div>
        </div>
    )
}

export default  Header ;