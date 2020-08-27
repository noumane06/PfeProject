import Head from '../../components/head';
import Header from '../../components/header'
import {useState , useEffect} from 'react';
import {Spin , Skeleton} from 'antd';
import jwt from 'jsonwebtoken';
import MyProfile from './Components/myProfile';
import PublicProfile from './Components/publicProfile';

const Profile = ({props})=>{

    const [userid,setData] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const token = window.localStorage.getItem("Tokens");
        jwt.verify(token,"secret",function (err , decoded) {
            if (!err) {
                setData(decoded.userId);
                setLoading(false);
            }else
            {
                console.log(err);
                const location = "/Auth/Signin/?ref=tokenexpired&location="+window.location.href;
                window.location.replace(location);
            }
        });
        
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
            <div className="body">
                    <Header/>
                    {props.data === undefined ? <Head title="Loading"/> :''}
                    <div style={{marginTop :'8%'}}>
                       {/* <Skeleton loading={props.data === undefined} active={true} avatar={true} round  > */}
                        {userid === props.data.profile[0]._id && props.data !== undefined &&  (
                            <MyProfile profile={props.data.profile[0]} userid={userid}/>
                        )}
                        {userid !== props.data.profile[0]._id && props.data !== undefined && (
                            <PublicProfile profile={props.data.profile[0]} userid={userid} />
                        )}  
                        {/* </Skeleton>  */}
                    </div>
                    
            </div>
        )        
    }
    
}


Profile.getInitialProps = async (ctx) => {

    const url = "http://localhost:9000/profiles/profile?userid="+ctx.query._id ;
    const res = await fetch(url);
    const data = await res.json();
    return{
       props : {
           data
       }
    }
  }

export default Profile ;