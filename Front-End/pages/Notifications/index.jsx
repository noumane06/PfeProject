import Header from "../../components/header";
import Head from "../../components/head";
import {useState , useEffect} from 'react';
import {Spin } from 'antd';
import './Sass/notif.scss';
import NotifCard from "./Components/NotifCard";
import NotifBell from "../../components/svg/NotifBell";
import EmptyInbox from "./Components/EmptyInbox";

const Notification = (props)=>{
    
    const [loading,setLoading] = useState(true);
    const [data , setData] = useState()
    useEffect(()=>{
        if (props.statusCode === 401) {
            const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
            window.location.replace(location);
        }else{
            setData(props.data.profile.Notification);
            setLoading(false); 
        }
    },[])
    const Notifications = data === undefined ? '' : data.filter(notif => notif.AcceptStatus === null);
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
                    {Notifications.length !== 0 &&(
                        <p className="Warning">
                        La réunion sera automatiquement annulée si aucune réponse n’a été donnée ( 1h avant la réunion au plus tard)
                        </p>
                    )}
                    <div className="NotifContainer">
                        {Notifications.map(notif => <NotifCard key={notif.SenderId} notif={notif} all={Notifications}/>)} 
                           
                    </div>
                    {Notifications.length === 0 &&(
                        <div style={{display : "flex" , alignItems : "center" , flexDirection :"column"}} className="nonot">
                            <EmptyInbox/>
                            <div style={{textAlign:"center"}}>
                                <h2>Pas encore de notifications</h2>
                                <p style={{color : "#24292E"}}>Allez réserver des réunions.</p>
                            </div>
                            
                        </div>
                    )}
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