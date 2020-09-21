import {useEffect , useState} from 'react';
import Header from '../../components/header';
import Head from '../../components/head';
import Footer from '../../components/footer';
import './Scss/search.scss';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';
import axios from 'axios'
// ------------------------------------------------
import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
//--------------------------------------------------
const Search =({qu})=>{

    const [profiles , setProfile] = useState();
    const [nodata ,setnodata] = useState(false);
    const [loading ,setLoading] = useState(true);
    const router = useRouter()
    useEffect(()=>{
        const Url = 'http://localhost:9000/profiles/search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+qu.page;
        axios.get(Url)
        .then(res =>{
            setProfile(res.data);
            if (res.data === "") {
                setnodata(true);
            }
            setLoading(false);
        })
        .catch(err =>{
            console.log(err)
        })
        
    },[])

    const handleCLick = async ()=>{
        setLoading(true);
        if (+qu.page < Math.round(profiles.count /9) && +qu.page !== 0  ) {
            var newPage = +qu.page+1
           await router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage)
        }
        const Url = 'http://localhost:9000/profiles/search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+qu.page
        axios.get(Url)
        .then(res =>{
            setProfile(res.data);
            if (res.data === "") {
                setnodata(true);
            }
            setLoading(false);
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
    const handleBack = ()=>{
        setLoading(true);
        var newPage = +qu.page-1
        router.push('/Search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+newPage);
        const Url = 'http://localhost:9000/profiles/search?companyname='+qu.companyname+'&domaine='+qu.domaine+'&city='+qu.city+'&page='+qu.page
        axios.get(Url)
        .then(res =>{
            setProfile(res.data);
            if (res.data === "") {
                setnodata(true);
            }
            setLoading(false);
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return(
        <>
        <div className="body">
            <div className="ContentInside">
             <Head title="Resulat de recherche | 6 solutions" />
             <Header />
             <div className="searchPage">
                <SearchBar searchItem={qu}/>
             </div>
             <div className='loader'>
                 <Skeleton loading={loading} active={true} avatar={true} round  className='sk'>
                    {profiles !== undefined &&(
                        <>
                        {profiles.profile !== undefined  &&(
                            <div className="CardContainer">
                                {profiles.profile.map(profile=>(
                                        <>
                                        <SearchCard key={profile._id} className="Card1" profile={profile}/>
                                        </>
                                ))}
                            </div>
                        )}
                        
                        {nodata  &&(
                                    <div className="Noresults">
                                            <img src="/static/Assets/No_comments.png" height="300"/>
                                            <h2>Aucun résultat trouvé</h2>
                                            <p>Il semble que nous ne trouvons aucun résultat basé sur la recherche.</p>
                                    </div>
                        )}
                            
                        <div className="pagination">
                                <button className={qu.page <=1 || profiles.count === undefined  ? "disabled test" : "backPage test"} onClick={handleBack}>Précédent</button>
                                {profiles.count !== undefined &&(<span className="pageNumber test ">{qu.page} sur {Math.round(profiles.count /9) !== 0  ? Math.round(profiles.count /9) : 1 }</span>)}
                                {profiles.count === undefined &&(<span className="pageNumber test ">-</span>)}
                                <button className={qu.page >= Math.round(profiles.count / 9) || profiles.count === undefined ? "disabled test " : "nextPage test " } onClick={handleCLick}>Suivant</button>
                        </div>
                        </>
                    )}
                </Skeleton>
             </div>
            </div>
        </div>
        {!loading && (<Footer />)}
        </>
    )

}

Search.getInitialProps = async ({ query }) => {
    
     return {props : "" , qu : query}
}

export default Search ;