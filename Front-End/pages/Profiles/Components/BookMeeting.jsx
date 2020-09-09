
import Modal from 'antd/lib/modal/Modal';
import {useState} from 'react';
import moment from 'moment';
import { Button } from 'antd';
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

const calendar = ()=>{

    //Data from database 
    const date = new Date();

    // Horraires ----------------------
    const Horraire = ['08:00','17:15'];
    const StartHour = moment(Horraire[0],"HH:mm");
    const endtHour = moment(Horraire[1],"HH:mm");
    const length = (endtHour.format("HH")-StartHour.format("HH"))*60/45;
    const results = Scheduler(StartHour,endtHour,length);



    // States -------------------
    const [Booked , setBooked] = useState({ '2020/09/10' : ['08:00-08:30','11:45-12:15']})
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

    const handleSave =  () =>{
        setloading(true);
        {Booked[title.split(" | ")[1]] !== undefined ? 
        Booked[title.split(" | ")[1]].push(title.split(" | ")[0]) :
         setBooked({...Booked , [title.split(" | ")[1]] : title.split(" | ")[0]}) }
         setloading(false);
         setvisible(false);
    }

    // -----------------------------------
    return(
        <table id="calendar">
            <Modal title={title} visible={visible} width="50vw" onCancel={()=>setvisible(false)} bodyStyle={{height : '100%'}} 
                footer={[<Button disabled={false} key="submit" type="primary"  style={{borderRadius :'10px', fontFamily :'GlacialBold'}} onClick={handleSave} >Envoyer</Button>]}>
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
                            {Booked[day] !== undefined &&(
                                Booked[day].includes(hour) ? <div className="Booked">Booked</div> : <div onClick={()=>{setTitle(hour+" | "+day); setvisible(true)}} className="Free"></div>
                            )}
                            {Booked[day] === undefined &&(
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