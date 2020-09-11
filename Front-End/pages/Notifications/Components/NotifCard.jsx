import Axios from 'axios';
import {useState , useEffect} from 'react';
const NotifCard = ({notif}) =>{

    const [isFull , setFulltext] = useState(notif.Message.length < 150);
    const [Data , setData] = useState();
    const [Loading, setLoading] = useState(true);
    useEffect(()=>{
        Axios.get("http://localhost:9000/profiles/profile?userid="+notif.SenderId,{withCredentials : true})
        .then(result =>{
            console.log(result.data.profile);
            setData(result.data.profile);
            setLoading(false);
        })
        .catch(err =>console.log(err))
    },[])
    if (Loading) {
        return null
    } else {
        return(
            <div className="NotifCard">
                <p><strong style={{color : '#0C72BF'}}>Ce client</strong> souhaite réserver une réunion à <strong style={{color : '#0C72BF'}}>{notif.horraire}</strong></p>
                <div className="Card_Head">
                    <div className="ProfileImg">
                        <img src={Data.Usrimg} />
                    </div>
                    <div className="ProfileInfo">
                        <a href={"/Profiles/"+notif.SenderId} className="profileLink"><h3>{Data.companyname}</h3></a>
                    </div>
                </div>
                <div className="Card_Body">
                    <h3>Message</h3>
                    <p>
                    {!isFull ? notif.Message.substr(0, 150) : notif.Message}
                    {!isFull ? (<span className="more" onClick={()=>setFulltext(true)}>Voir plus</span>):""}
                    </p>
                </div>
                <div className="Card_footer">
                    {notif.AcceptStatus === null &&(
                        <>
                        <button className="Accepter">Accepter</button>
                        <button className="Refuser">Refuser</button>
                        </>
                    )}
                    
                </div>
            </div>
        )
    }
    
}
export default NotifCard