import {useEffect , useState} from 'react';
import Header from '../../components/header';
import Head from '../../components/head';
import './Scss/search.scss';
import { useRouter } from 'next/router'
// ------------------------------------------------

import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
import { Skeleton ,   Pagination } from 'antd';
//--------------------------------------------------
const Search =({props ,qu})=>{

    const [profiles , setProfile] = useState();
    const [loading , setLoading] = useState(true);
    const router = useRouter()
    useEffect(()=>{
        setProfile(props.profile);
        setTimeout(() => {
            setLoading(false); 
        }, 500);
        
    })

    const handleCLick = ()=>{
        setLoading(true);
        if (+qu.page < Math.round(props.count /9) && +qu.page !== 0  ) {
            var newPage = +qu.page+1
            router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage)
        }
        
    }
    const handleBack = ()=>{
        setLoading(true);
        var newPage = +qu.page-1
        router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage)
    }
    var page = qu.page ;
    return(
        <div className="body">
             <Head title="Resulat de recherche | 6 solutions" />
             <Header />
             <div className="searchPage">
                <SearchBar searchItem={qu}/>
             </div>
             
             <div className="CardContainer">
                <Skeleton loading={loading} active paragraph>
                    {profiles !== undefined && (
                        <>
                        {profiles.map(profile=>(
                                <>
                                <SearchCard key={profile._id} className="Card1" profile={profile}/>
                                </>
                        ))}
                        </>
                    )}
                </Skeleton>
                    
             </div>

             <div className="pagination">
                    <button className={qu.page <=1 ? "disabled test" : "backPage test"} onClick={handleBack}>Précédent</button>
                    <span className="pageNumber test ">{qu.page} sur {Math.round(props.count /9) !== 0 ? Math.round(props.count /9) : 1 }</span>
                    <button className={qu.page >= Math.round(props.count / 9) ? "disabled test " : "nextPage test " } onClick={handleCLick}>Suivant</button>
             </div>
             
        </div>
    )

}

Search.getInitialProps = async ({ query }) => {
     const Url = 'http://localhost:9000/profiles/search?companyname='+query.companyname+'&domaine='+query.domaine+'&city='+query.city+'&page='+query.page  ;
     const res = await fetch(Url)
     const json = await res.json()
     return {props : json , qu : query}
  }

export default Search ;