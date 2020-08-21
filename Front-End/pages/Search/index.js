import {useEffect , useState} from 'react';
import Header from '../../components/header';
import Head from '../../components/head';
import './Scss/search.scss';
import { useRouter } from 'next/router'
// ------------------------------------------------

import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
//--------------------------------------------------
const Search =({props ,qu})=>{

    const [profiles , setProfile] = useState();
    const router = useRouter()
    useEffect(()=>{
        setProfile(props.profile);
    })

    const handleCLick = ()=>{
        if (+qu.page < Math.round(props.count /9) && +qu.page !== 0  ) {
            var newPage = +qu.page+1
            router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage)
        }
        
    }
    const handleBack = ()=>{
        var newPage = +qu.page-1
        router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage)
    }
    return(
        <div className="body">
             <Head title="Resulat de recherche | 6 solutions" />
             <Header />
             <div className="searchPage">
                <SearchBar searchItem={qu}/>
             </div>
             
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

             <div className="pagination">
                    <button className={qu.page <=1 || props.count === undefined  ? "disabled test" : "backPage test"} onClick={handleBack}>Précédent</button>
                    {props.count !== undefined &&(<span className="pageNumber test ">{qu.page} sur {Math.round(props.count /9) !== 0  ? Math.round(props.count /9) : 1 }</span>)}
                    {props.count === undefined &&(<span className="pageNumber test ">-</span>)}
                    <button className={qu.page >= Math.round(props.count / 9) || props.count === undefined ? "disabled test " : "nextPage test " } onClick={handleCLick}>Suivant</button>
             </div>
             
        </div>
    )

}

Search.getInitialProps = async ({ query }) => {
    var data = '';
    const Url = 'http://localhost:9000/profiles/search?companyname='+query.companyname+'&domaine='+query.domaine+'&city='+query.city+'&page='+query.page  ;
    try {
      const res = await fetch(Url)  ;
      data = await res.json();
    } catch (error) {
        console.log(error);
        data = "";
    }
     return {props : data , qu : query}
}

export default Search ;