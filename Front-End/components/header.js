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
const DropDown = () =>{

    const handleLogout = () =>{
        window.localStorage.removeItem("Tokens");
        window.location.reload();
    }
    return(
        <div className="Dropdown">
            <DropdownItem lefticon={<ProfileIcon/>}>Mon profile</DropdownItem>
            <DropdownItem lefticon={<SettingsIcon/>}>Paremetres</DropdownItem>
            <DropdownItem lefticon={<LogoutIcon/>} onClick={handleLogout}>Se déconnecter</DropdownItem>
        </div>
    )
}
const Header = ()=>
{
    const [userId , setToken] = useState(null);
    const [loading , setLoading] = useState(true);
    const [opened , setOpen] = useState(false);
    const [data , setData] = useState();
    
    useEffect(()=>{
        const Token = window.localStorage.getItem("Tokens");
        jwt.verify(Token,"secret",function (err , decoded) {
            if (!err) {
                axios.get('http://localhost:9000/profiles/profile?userid='+decoded.userId)
                .then(res =>{
                    
                    setData(res.data.profile[0]);
                    setLoading(false);
                    setToken(decoded.userId);
                })
                .catch(err => console.error(err));
            }else
            {
                setLoading(false);
                setToken(null);
            }
        })
    },[]);
    const handleClick = ()=>{
        window.location.replace("/Auth/Signin");
    }
    
    return(
        <div className="Header_Container">
            <div className="Header_Logo">
                <img src="../static/Icons/LOGO2017.png" height="30" />
            </div>
            <ul>
                <li className="active"><Link href="/">Acceuil</Link></li>
                <li className="link"><Link href="/propos">A propos</Link></li>
                <li className="link"><Link href="/temoignages">Temoignages</Link></li>
                <li className="link"><Link href="/contact">Contact</Link></li>
                <li className="link"><Link href="/questions">Questions</Link></li>
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
                            <DropDown/>
                            </>
                        )}
                    </>
                ) }

            </div>
        </div>
    )
}

export default  Header ;