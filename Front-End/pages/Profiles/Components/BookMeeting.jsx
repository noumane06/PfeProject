
import Modal from 'antd/lib/modal/Modal';
import {useState} from 'react';
import moment from 'moment';
import { Button, notification } from 'antd';
import axios from 'axios';

const Scheduler =  (StartHour , endtHour , length )=>{
    const results = [];
     for (let i = 0; i <= parseInt(length) ; i++) {
        const string  =  StartHour.format('HH:mm')+"-"+StartHour.add(30,'minutes').format('HH:mm') ;

        // Break betweeen meetings
         results.push(string);
        if (Math.abs(moment.duration(StartHour.diff(endtHour)).asMinutes()) <= 30 ) {
            break ;
        }
        
         StartHour.add(15,'minutes');
    }
    return(results);
}

const DatePicker = (string) =>
{
    const day = new Date(string);
    const Days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    const Months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
    const DisplayString = [Days[day.getDay()],day.getDate(),Months[day.getMonth()+1]];

    return DisplayString;
}


const calendar = ({profile})=>{

    //Data from database 
    const Horraire = profile.horraire;
    var Booked  = profile.booked !== undefined ? profile.booked :{};
    // Horraires ----------------------
    const date = new Date();
    
    const StartHour = moment(Horraire[0],"HH:mm");
    const endtHour = moment(Horraire[1],"HH:mm");
    const length = (endtHour.format("HH")-StartHour.format("HH"))*60/45;
    const results = Scheduler(StartHour,endtHour,length);



    // States -------------------
    
    const [BookedDisplay , setDisplay] = useState(Booked !== {} ? Booked : {"":""});
    const [visible,setvisible] = useState(false);
    const [title , setTitle] = useState();
    const [message , setMessage] = useState("");
    const [loading,setloading] = useState(false);
    // Days ---------------------------

    const datePusher = new Date();
    const dayResult = [moment(Date.now()).format('YYYY/MM/DD')];
    for (let i = 0 ; i < 6; i++) {
        datePusher.setDate(datePusher.getDate()+1);
        dayResult.push(moment(datePusher).format('YYYY/MM/DD'));
    }

    // -------------------------------------

    // Handlers ---------------------------------

    const handleSave = async  () =>{
        if (Booked[title.split(" | ")[1]] !== undefined) {
            Booked[title.split(" | ")[1]].push(title.split(" | ")[0]) ;
            console.log(Booked); 
        }else
        {
            const key = [title.split(" | ")[1]];
            const value = title.split(" | ")[0] ; 
            console.log(Booked); 
            Booked === {"":""} ? Booked = {[key[0]] : [value]} :Booked= {...Booked , [key[0]] : [value]};
            console.log(Booked); 
        }
        setloading(true);
        const Data = {
            booked : Booked ,
            Notification : {
                Message : message,
                horraire : title.split(" | ")[0]
            }
        }
        axios.post('http://localhost:9000/profiles/bookmeeting?userid='+profile._id,Data,{withCredentials : true})
        .then(data => 
            {
                console.log(data) ;
                setDisplay(Booked);
                notification['success']({
                    message: 'Votre demande a été envoyée avec succès',
                    description:'Nous vous informerons lorsque nous aurons une réponse'
                })
                setloading(false);
                setvisible(false);
            })
        .catch(err => console.log(err))
    }

    // -----------------------------------
    return(
        <table id="calendar">
            <Modal title={title} visible={visible} width="50vw" onCancel={()=>setvisible(false)} bodyStyle={{height : '100%'}} 
                footer={[<Button disabled={false} key="submit" type="primary" loading={loading}  style={{borderRadius :'10px', fontFamily :'GlacialBold'}} onClick={handleSave} >Envoyer</Button>]}>
                {/* Presentation ------------------------------------------ */}
                <label style={{color : '#2a2a2a' , fontFamily : 'GlacialBold' , fontSize : '16px'}} >Message</label><br/>
                <textarea className="textArea"  placeholder="Décrivez votre objectif de la réunion" rows="4" value={message} onChange={(e)=>setMessage(e.target.value)} /><br/><br/>
            </Modal>
            <thead>
            
                <tr>
                    <th></th>
                    {dayResult.map(day =>(<th key={day+Date.now()}  style={parseInt(day.split('/')[2]) === date.getDate() ? {color : '#1a73e8' , textAlign : "center"} : {textAlign : "center"}} >{DatePicker(day)[0]} <br/> {DatePicker(day)[1]} {DatePicker(day)[2]} </th>))}
                </tr>
            </thead>
            <tbody>
                {results.map(hour => (
                    <tr key={hour+Date.now()}> 
                        <th>{hour}</th>
                        {dayResult.map(day =>(
                        <td key={day+hour} >
                            {BookedDisplay[day] !== undefined &&(
                                BookedDisplay[day].includes(hour) ? <div className="Booked">Booked</div> : <div onClick={()=>{setTitle(hour+" | "+day); setvisible(true)}} className="Free"></div>
                            )}
                            {BookedDisplay[day] === undefined &&(
                                <div onClick={()=>{setTitle(hour+" | "+day); setvisible(true)}} className="Free"></div>
                            )}
                        </td>))}
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}
export default calendar ;