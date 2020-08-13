import {useEffect , useState} from 'react';
import Header from '../../components/header';
import Head from '../../components/head';
import './Scss/search.scss';
// ------------------------------------------------

import SearchCard from '../../components/SearchCard';

//--------------------------------------------------
const Search =({props})=>{

    const [profiles , setProfile] = useState();
    useEffect(()=>{
        setProfile(props.profile);
    })
    return(
        <div className="body">
             <Head title="Resulat de recherche | 6 solutions" />
             <Header />
             <div className="CardContainer">
                {profiles !== undefined && (
                    <>
                    {profiles.map(profile=>(
                            <>
                            <SearchCard key={profile._id} className="Card1" profile={profile}/>
                            </>
                    ))}
                    </>
                )}
             </div>
        </div>
    )

}

Search.getInitialProps = async ({ query }) => {
     const Url = 'http://localhost:9000/profiles/search?companyname='+query.companyname+'&domaine='+query.domaine+'&city='+query.city ;
     const res = await fetch(Url)
     const json = await res.json()
     
     return {props : json}
  }

export default Search ;