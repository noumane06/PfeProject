import Header from "../../components/header";
import Head from "../../components/head";
import { Menu , Spin } from "antd";
import {useState , useEffect} from 'react';

import './sass/accountSettings.scss'
import AccountComp from "./Components/AccountComp";
import Trash from "./Components/trashSvg";
import Footer from "../../components/footer";
const accountSett = (props)=>{

    const [current , setCurrent] = useState('Account');

    const handleClick = e =>{
        setCurrent(e.key);
    }
    const [loading,setLoading] = useState(true);
    const [data , setData] = useState()
    useEffect(()=>{
        if (props.statusCode === 401) {
            const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
            window.location.replace(location);
        }else{
            console.log(props.data);
            setData(props.data.profile);
            setLoading(false); 
        }
    },[])
    if (loading ) {
        
        return(
        <>
                <Head title="Loading"/>
                <div style={{position : 'fixed',top : '50%',left:'50%',marginTop :'-50px',marginLeft:'-50px'}}>
                    <Spin size="large" />
                </div>
        </>
        )
    }else{

        return(
            <>
            <div className="body">
                <div className="ContentInside">
                    <Header/>
                    <Head title="Paramètres | 6Solutions"/>
                    <div className="parmHeader">
                        <h1 className="title">Paramètres</h1>
                    </div>
                    <div className="parmBody">
                        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{marginTop :'3%'}}>
                            <Menu.Item key="Account" style={{fontWeight : 'bolder'}} >
                                Compte
                            </Menu.Item>
                            <Menu.Item key="Privacy" style={{fontWeight : 'bolder'}} >
                            Confidentialité et conditions de service
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="MenuContent">
                            {current === "Account" &&(
                                <>
                                <AccountComp profile={data}/>
                                </>
                            )}
                            {current === "Privacy" &&(
                                <>
                                </>
                            )}
                    </div>
                    <div className="DeleteAccount">
                        <div><Trash/><span>Supprimez votre compte</span></div>
                    </div>
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
        const url = "http://localhost:9000/profiles/myprofile" ;
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
export default accountSett ;