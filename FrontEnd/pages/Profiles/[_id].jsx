import Head from '../../components/head';
import Header from '../../components/header'
import {useState , useEffect, forwardRef} from 'react';
import {Spin } from 'antd';
import PublicProfile from './Components/publicProfile';
import ErrorPage from 'next/error';
import Footer from '../../components/footer';
const Profile = (props)=>{

    const [userid,setData] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        if (props.statusCode === 401) {
            const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
            window.location.replace(location);
        }else{
            props.statusCode !== 404 ? setData(props.data.AuthId.userId) : "";
            setLoading(false);
        }
    },[])
    if (props.statusCode === 404) {
        return <ErrorPage statusCode={props.statusCode} />
    }
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
                        {props.data === undefined ? <Head title="Loading"/> :''}
                        <div style={{marginTop :'8%'}}>
                            { props.data !== undefined && (
                                <PublicProfile profile={props.data.profile} userid={userid} />
                            )}  
                        </div>
                    </div>
                </div>
                <Footer />
            </>
            
        )        
    }
    
}


export const getServerSideProps = async (ctx) => {
    try {
        const cookie = ctx.req.headers.cookie ;
        const url = "http://localhost:9000/profiles/profile?userid="+ctx.query._id ;
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

export default Profile ;