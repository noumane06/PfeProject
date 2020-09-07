
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

const calendar = ()=>{

    //Data from database 
    const date = new Date();
    var getdate = date.getDate() ;
    const Booked = {'Lundi' : ['08:00-08:30','11:45-12:15'],'Mardi' : ['08:00-08:30']}
    const Horraire = ['08:00','17:15'];
    const StartHour = moment(Horraire[0],"HH:mm");
    const endtHour = moment(Horraire[1],"HH:mm");
    const length = (endtHour.format("HH")-StartHour.format("HH"))*60/45;
    
    const results = Scheduler(StartHour,endtHour,length);
    // States -------------------
    const [visible,setvisible] = useState(false);
    const [title , setTitle] = useState();

    // -----------------------
    const Days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

    const dayResult = [];
    const numberedResult = [];
    for (let i = date.getDay()-1; i < Days.length + date.getDay()-1; i++) {
        const length = Days.length + date.getDay()-1 ;
        if (i < 7) {
            const day = Days[i];
            dayResult.push(day);
            numberedResult.push(getdate);
            getdate = getdate+1; 
        }
        if (i >= 7) {
            const day = Days[length - (i + 1 )]+' | '+ getdate;
            dayResult.push(day);
            numberedResult.push(getdate);
            getdate = getdate+1;
        }
    }
    console.log(dayResult,date.getDay());
    const Hours = results;
    return(
        <table id="customers">
            <Modal title={`${title} | Entrez votre message`} visible={visible} width="50vw" onCancel={()=>setvisible(false)}  footer={[
                            <Button disabled={false} key="submit" type="primary"  style={{borderRadius :'10px', fontFamily :'GlacialBold'}}  >
                                Submit
                            </Button>
                            ]}>Hello</Modal>
            <thead>
            
                <tr>
                    <th></th>
                    {dayResult.map((day,index) =>(<th key={day+Date.now()}  style={numberedResult[index] === date.getDate() ? {color : '#1a73e8' , textAlign : "center"} : {textAlign : "center"}} >{day} <br/> {numberedResult[index]}</th>))}
                </tr>
            </thead>
            <tbody>
                {Hours.map(hour => (
                    <tr key={hour+Date.now()}> 
                        <th>{hour}</th>
                        {Days.map(day =>(
                        <td key={day+hour} onClick={()=>{setTitle(hour+day); setvisible(true)}}>
                            {Booked[day] !== undefined &&(
                                Booked[day].includes(hour) ? 'Booked' : ''
                            )}
                        </td>))}
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}
export default calendar ;