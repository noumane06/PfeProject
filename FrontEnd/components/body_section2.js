import '../styles/bodySection2.scss'
import SearchCard from './SearchCard';
import {useState , useEffect} from 'react';
import axios from 'axios' ;
const BodySection2 = (props)=>{
    
  const [profile , setData] = useState([]);
  const [loading , setLoading] = useState(true); 
    useEffect(()=>{
        axios.get("http://15.237.56.214:9000/profiles/hotprofiles")
        .then(({data}) =>{
          setData(data.response.profiles);
          setLoading(false);
        })
        .catch(err => console.log(err))
    },[])


      return (
        <>
        <div className="bodySection2">
          <div className="titleContainer">
            <h1>Quelques entreprise les plus connues</h1>
          </div>
          <div className="CardsContainer">
            <SearchCard className="Card1" profile={loading || profile[0] === undefined ? '' : profile[0]} loading={loading}/>
            <SearchCard className="Card1 second" profile={loading || profile[1]=== undefined  ? '' :profile[1]} loading={loading}/>
            <SearchCard className="Card1 third" profile={loading  || profile[2]=== undefined  ? '' :profile[2]} loading={loading}/>
          </div>
        </div>
        </>
        )
}

export default BodySection2 ;