import Header from '../../components/header';
import Head from '../../components/head';
import { useRouter } from 'next/router';
import {useState , useEffect} from 'react';
import jwt from 'jsonwebtoken';
import MyProfile from './Components/myProfile';
import PublicProfile from './Components/publicProfile';

const Profile = ({data})=>{
    const router = useRouter();
    const profile = data.profile[0];
    
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
            }
        });
        
    },[])
    // if (loading) {
        
    //     return(
    //     <div className="body">
    //         loading ...
    //     </div>
    //     )
        
    // }else{
        return(
            <div>
                <h2>
                    Bonjour
                    {userid === profile._id &&(
                        <MyProfile profile={profile}/>
                    )}
                    {userid !== profile._id &&(
                        <PublicProfile profile={profile}/>
                    )}
                </h2>
            </div>
        )        
    // }
    
}


export async function getStaticPaths(){
    const res = await fetch("http://localhost:9000/profiles/");
    const data = await res.json();
    var paths = [];
    data.response.profiles.map(profile=>{
        paths.push({params : {
            _id : profile._id
        }})
    })
    
    return{
        paths ,
        fallback : false
    }
}
export async function getStaticProps({ params }){

    const url = "http://localhost:9000/profiles/profile?userid="+params._id ;
    const res = await fetch(url);
    const data = await res.json();
    return{
       props : {
           data
       }
    }
}


export default Profile ;