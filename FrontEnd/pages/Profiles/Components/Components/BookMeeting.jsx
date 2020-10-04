
import Modal from 'antd/lib/modal/Modal';
import {useState} from 'react';
import moment from 'moment';
import { Button, notification } from 'antd';
import axios from 'axios';
import '../../Sass/calendar.scss';


const BusyComponent = ({day ,hour , setTitle , setvisible})=>{
    const DateDivider = (string , hour)=>
    {
        const date = new Date(string );
        const dateNow = new Date(); 

        const moment1 = moment(date);
        
        if (date.getDay()=== 0) {
            return 1 ;
        }

        if (moment1.isSame(dateNow,'year') && moment1.isSame(dateNow,'day') && moment1.isSame(dateNow,'month')) {
            const Hourdiff = dateNow.getHours() - parseInt(hour.split(":")[0]) ;
            return Hourdiff ;
        }
        
        if (moment1.isBefore(dateNow)) {
            return 1
        }
       
        return -1 ;
    }
    const res = DateDivider(day,hour);
    return(
        
        <>
        {res >= 0 ?<div className="Busy" title="Date indisponible"></div> : <div onClick={setTitle === false ? null : ()=>{setTitle(hour+" | "+day); setvisible(true)}} className={setTitle === false ? "FreeProfile" : "Free"}></div>}
        </>
    )
}
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
    const DisplayString = [Days[day.getDay()],day.getDate(),Months[day.getMonth()]];
    return DisplayString;
}

const Checker = (profile,hour,day) => {
    const element = profile.Notification.filter(el => el.day == day && el.horraire == hour) ; 
    if (element[0] !== undefined) {
        return element[0].AcceptStatus ;
    }else
    {
        return ''
    }
    
}

const calendar = ({profile , loc})=>{

    //Data from database 
    const Horraire = profile.horraire;
    var Booked  = profile.booked !== undefined ? profile.booked :{};
    
    // Horraires ----------------------
    const StartHour = moment(Horraire[0],"HH:mm");
    const endtHour = moment(Horraire[1],"HH:mm");
    const length = (endtHour.format("HH")-StartHour.format("HH"))*60/45;
    const results = Scheduler(StartHour,endtHour,length);



    // States -------------------
    
    
    const [BookedDisplay , setDisplay] = useState(Booked !== {} ? Booked : {"":""});
    const [visible,setvisible] = useState(false);
    const [bookedVisible,setbookedVisible] = useState(false);
    const [title , setTitle] = useState();
    const [message , setMessage] = useState("");
    const [loading,setloading] = useState(false);
    const [week , setWeek] = useState(0);
    // Days ---------------------------
    const datePusher = new Date();
    const dayResult = [moment(Date.now()).add(7 * week,'days').format('YYYY/MM/DD')];
    datePusher.setDate(datePusher.getDate()+week * 7);
    for (let i = 0 ; i < 6; i++) {
        datePusher.setDate(datePusher.getDate()+1);
        dayResult.push(moment(datePusher).format('YYYY/MM/DD'));
    }
    // -------------------------------------
    
    // Handlers ---------------------------------

    const handleSave = async  () =>{
        if (Booked[title.split(" | ")[1]] !== undefined) {
            Booked[title.split(" | ")[1]].push(title.split(" | ")[0]) ;
        }else
        {
            const key = [title.split(" | ")[1]];
            const value = title.split(" | ")[0] ; 
            Booked === {"":""} ? Booked = {[key[0]] : [value]} :Booked= {...Booked , [key[0]] : [value]};
        }
        setloading(true);
        const Data = {
            booked : Booked ,
            Notification : {
                Type : "Request",
                Message : message,
                horraire : title.split(" | ")[0],
                day : title.split(" | ")[1]
            }
        }
        
        axios.post('http://15.237.56.214:9000/profiles/bookmeeting?userid='+profile._id,Data,{withCredentials : true})
        .then(data => 
            {
                setDisplay(Booked);
                notification['success']({
                    message: 'Votre demande a été envoyée avec succès',
                    description:'Nous vous informerons lorsque nous aurons une réponse'
                })
                setTimeout(() => {
                    setloading(false);
                    setvisible(false);
                    window.location.reload();
                }, 2000);
                
            })
        .catch(err => console.log(err))
    }
    const activeDay = (day)=>{
        if (moment(day).diff(moment(Date.now()),'hours') > -24 && moment(day).diff(moment(Date.now()),'hours') <= 0) 
        {
            return true ;
        }else
        {
            return false ;
        }
    }
    // -----------------------------------
    return(
        <>
        <div className="CalendarControllers">
            <button className="today" onClick={()=>setWeek(0)}>Aujourd'hui</button>
            <div className="weeks">
               <button className="nextW"  onClick={()=>setWeek(week - 1)}>Semaine précédente</button>
               <button  className="prevW"  onClick={()=>setWeek(week + 1)}>Prochaine semaine</button> 
            </div>
        </div>
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
                    {dayResult.map(day =>(<th key={day+Date.now()}  style={activeDay(day) ? {color : '#1a73e8' , textAlign : "center"} : {textAlign : "center"}} >{DatePicker(day)[0]} <br/> {DatePicker(day)[1]} {DatePicker(day)[2]} </th>))}
                </tr>
            </thead>
            <tbody>
                {loc === "public" &&(
                    <>
                    {results.map(hour => (
                        <tr key={hour+Date.now()}> 
                            <th>{hour}</th>
                            {dayResult.map(day =>(
                            <td key={day+hour} >
                                {BookedDisplay[day] !== undefined &&(
                                    BookedDisplay[day].includes(hour) ? 
                                    Checker(profile,hour,day) === true ? 
                                    <div className="Booked">Réservée</div> : Checker(profile,hour,day) === false ?
                                    <BusyComponent day={day} hour={hour.toString()} setTitle={setTitle} setvisible={setvisible}/> : <div className="Pending">En attente</div>
                                    : <BusyComponent day={day} hour={hour.toString()} setTitle={setTitle} setvisible={setvisible}/>
                                )}
                                {BookedDisplay[day] === undefined &&(
                                    <BusyComponent day={day} hour={hour.toString()} setTitle={setTitle} setvisible={setvisible}/>
                                )}
                            </td>))}
                        </tr>
                    ))}
                    </>
                )}


                {loc === "profile" &&(
                    <>
                    {results.map(hour => (
                        <tr key={hour+Date.now()}> 
                            <th>{hour}</th>
                            {dayResult.map(day =>(
                            <td key={day+hour} >
                                {BookedDisplay[day] !== undefined &&(
                                    BookedDisplay[day].includes(hour) ? 
                                    Checker(profile,hour,day) === true ? 
                                    <div className="Booked">Réservée</div> : Checker(profile,hour,day) === false ?
                                    <BusyComponent day={day} hour={hour.toString()} setTitle={false} setvisible={false}/> : <div className="Pending">En attente</div>
                                    : <BusyComponent day={day} hour={hour.toString()} setTitle={false} setvisible={false}/>
                                )}
                                {BookedDisplay[day] === undefined &&(
                                    <BusyComponent day={day} hour={hour.toString()} setTitle={false} setvisible={false}/>
                                )}
                            </td>))}
                        </tr>
                    ))}
                    </>
                )}
            </tbody>
            
        </table>
        </>
    )
}
export default calendar ;