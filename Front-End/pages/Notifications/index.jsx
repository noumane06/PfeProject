import Header from "../../components/header";
import Head from "../../components/head";
import {useState , useEffect} from 'react';
import {Spin } from 'antd';
import './Sass/notif.scss';
import NotifCard from "./Components/NotifCard";
import NotifBell from "../../components/svg/NotifBell";

const Notification = (props)=>{
    
    const [loading,setLoading] = useState(true);
    const [data , setData] = useState()
    useEffect(()=>{
        if (props.statusCode === 401) {
            const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
            window.location.replace(location);
        }else{
            setLoading(false);
            setData(props.data.profile.Notification);
        }
    },[])
    const Notifications = data;
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
            <div className="body">
                <Header/>
                <Head title="Notifications | 6Solutions"/>
                <div className="NotifBody">
                    <div className="NotTitle">
                        <span className="icon-button"><NotifBell/></span>
                        <h1 className="NotifHeader">Notifications</h1>
                    </div>
                    
                    <p className="Warning">La réunion sera automatiquement annulée si aucune réponse n’a été donnée ( 1h avant la réunion au plus tard)</p>
                    <div className="NotifContainer">
                        {Notifications.map(notif => <NotifCard key={notif.SenderId} notif={notif}/>)}    
                    </div>
                </div>
                
            </div>
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
export default Notification