import Header from '../../components/header';
import Head from '../../components/head';
import Footer from '../../components/footer';
import './scss/tem.scss';
import TemCard from './Components/TemCard';
import {useEffect , useState} from 'react';
import { Skeleton , Modal , Button, notification } from 'antd';
import Axios from 'axios';





const Temoignages = (props)=>{


    const [Data,setData] = useState();
    const [loading,setLoading] = useState(true);
    const [id,setUserID]= useState(null);
    const [temoign , setTemoign] = useState(false);
    const [buttonLoading , setbuttonLoading] = useState(false);
    const [linkErr,setLinkErr]=useState(false);
    const [link , setLink] = useState('');
    useEffect(()=>{
            console.log(props);
            setData(props.data.data);
            setLoading(false);
    },[]);
    function validVideoId(id) {
        var img = new Image();
        img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
        img.onload = function () {
            checkThumbnail(this.width);
        }
    }
    
    function checkThumbnail(width) {
        //HACK a mq thumbnail has width of 320.
        //if the video does not exist(therefore thumbnail don't exist), a default thumbnail of 120 width is returned.
        console.log(width)
        if (width === 120) {
            
            setLinkErr(true);
            setbuttonLoading(false);
        }else{
            Axios.post("http://localhost:9000/temoin/",{link : link},{withCredentials : true})
            .then(res =>{
                notification['success']({
                    message: 'Succès',
                    description:'Votre Témoignage a été ajouté avec succès '
                })
                setTimeout(() => {
                    setbuttonLoading(false);
                    setTemoign(false);
                    window.location.reload();
                }, 2000);
            })
            .catch(err =>{
                console.log(err);
                notification['error']({
                    message: "Une erreur s'est produite",
                    description:'Veuillez réessayer plus tard'
                })
                setTimeout(() => {
                    setbuttonLoading(false);
                    setTemoign(false);
                    window.location.reload();
                }, 2000);
            })
        }
    }
    
    const handleClick = ()=>{
        setbuttonLoading(true);
        const check = link.split("v=");
        if (check[0] == "https://www.youtube.com/watch?" || check[0] == "www.youtube.com/watch?" || check[0] == "youtube.com/watch?" ) {
            validVideoId(check[1]);
        }
        else
        {
            setLinkErr(true);
            setbuttonLoading(false);
        }
        
    }
    return (
      <>
        <div className="body">
          <div className="ContentInside">
            <Modal
              title="Témoignage vidéo"
              visible={temoign}
              width="60%"
              onCancel={() => setTemoign(false)}
              footer={[
                <Button disabled={false} key="submit" type="primary" loading={buttonLoading} style={{borderRadius :'10px', fontFamily :'GlacialBold'}}  onClick={handleClick}>
                                Terminé !
                </Button>
              ]}
            >
            <label style={{color : '#318CE7' , fontFamily : 'GlacialBold' , fontSize : '16px'}}>Ajoutez votre lien Youtube :</label><br/>
            <input className={linkErr ? "input error" : "input"} type="text" placeholder="Ex : https://www.youtube.com/watch?v=5qap5aO4i9A "  value={link} onChange={(e)=>{setLink(e.target.value);setLinkErr(false)}} /><br />
            <label className={linkErr ? "errMsg" : "hidden"}>Ce lien n'est pas valide, veuillez fournir un lien valide</label><br />
            </Modal>

            <Head title="Témoignages | 6 solutions" />
            <Header active="temoignages" setUserID={setUserID} />
            <div className="proposBody">
              <h1 className="title">Témoignages</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div className="tems"></div>
                {id !== null && (
                  <div className="AddTem">
                    <input
                      className="TemButton"
                      type="button"
                      value="Ajouter un témoignage"
                      onClick={() => setTemoign(true)}
                    />
                  </div>
                )}
              </div>
              <Skeleton
                loading={loading}
                active={true}
                avatar={true}
                round
                className="sk"
              >
                {Data !== undefined && (
                  <div className="TemCards">
                    {Data.map((temData) => (
                      <TemCard key={temData.temid} props={temData} />
                    ))}
                  </div>
                )}
              </Skeleton>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
export const getServerSideProps = async (ctx) => {
    try {
        const url = "http://localhost:9000/temoin/" ;
        const res = await fetch(url); 
        const statusCode = res.status;
        const data = await res.json();
        
        if (statusCode !== 200) {
            throw statusCode 
        }
        return  {
            props : {data }
        }
    } 
    catch (error) {
        ctx.res.statusCode = error;
        return {
               props : {statusCode : error}
        };
    }   
  }
export default Temoignages ;