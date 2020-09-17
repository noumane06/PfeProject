import Modal from 'antd/lib/modal/Modal';
import {Button, message} from 'antd';
import Axios from 'axios';
import {useState , useEffect} from 'react';
const NotifCard = ({notif , all}) =>{
    
    const [isFull , setFulltext] = useState(notif.Message.length < 150);
    const [Data , setData] = useState();
    const [Loading, setLoading] = useState(true);
    const [action , setAction] = useState("");
    const [buttonLoading , setbuttonLoad] = useState(false);
    const [visible , setvisible] = useState(false);
    // Handle data before loading componenent
    useEffect(()=>{
        Axios.get("http://localhost:9000/profiles/profile?userid="+notif.SenderId,{withCredentials : true})
        .then(result =>{
            setData(result.data.profile);
            setLoading(false);
        })
        .catch(err =>console.log(err));
        Axios.get("http://localhost:9000/profiles/viewedNot",{withCredentials : true})
        .then(result=>{
        })
        .catch(err => console.log(err)) 
    },[])
    // ----------------------------

    // When accept the request handler 
    const HandleAccept= ()=>{
        setbuttonLoad(true);
        action === "accepted" ? notif.AcceptStatus = true : notif.AcceptStatus = false ;
        const Notification = all ; 
        Axios.post("http://localhost:9000/profiles/updatebook",Notification,{withCredentials : true})
        .then(result =>{
            console.log(result);
        })
        .catch(err =>console.log(err));
        const Data = {
            Notification : {
                Type : "Response",
                Message : "Request "+action,
                horraire : notif.horraire,
                day : notif.day,
                AcceptStatus : action === "accepted" ? true : false,
            }
        }
        Axios.post("http://localhost:9000/profiles/bookmeeting?userid="+notif.SenderId,Data,{withCredentials : true})
        .then(result=>{
            setbuttonLoad(false);
            setvisible(false);
            message.success("mise à jour effectuée avec succès");
        })
        .catch(err => console.log(err))  
    }
    if (Loading) {
        return null
    } else {
        return (
          <>
            {notif.Type === "Request" && (
              <div className="NotifCard">
                <p>
                  <strong style={{ color: "#0C72BF" }}>Ce client</strong>{" "}
                  souhaite réserver une réunion Le{" "}
                  <strong style={{ color: "#0C72BF" }}>{notif.day} </strong>a{" "}
                  <strong style={{ color: "#0C72BF" }}>{notif.horraire}</strong>
                </p>
                <div className="Card_Head">
                  <div className="ProfileImg">
                    <img src={Data.Usrimg} />
                  </div>
                  <div className="ProfileInfo">
                    <a
                      href={"/Profiles/" + notif.SenderId}
                      className="profileLink"
                    >
                      <h3>{Data.companyname === undefined || Data.companyname === "" ? Data.nom+" "+Data.prenom : Data.companyname}</h3>
                    </a>
                  </div>
                </div>
                <div className="Card_Body">
                  <h3>Message</h3>
                  <p>
                    {!isFull ? notif.Message.substr(0, 150) : notif.Message}
                    {!isFull ? (
                      <span className="more" onClick={() => setFulltext(true)}>
                        Voir plus
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="Card_footer">
                  {notif.AcceptStatus === null && (
                    <>
                      <button
                        className="Accepter"
                        onClick={() => {setvisible(true),setAction('accepted')}}
                      >
                        Accepter
                      </button>
                      <button className="Refuser"
                              onClick={() => {setvisible(true),setAction('refused')}}>Refuser</button>
                    </>
                  )}
                  {notif.AcceptStatus === true && (
                    <>
                      <label style={{ color: "#02C39A" }} ><i style={{marginRight : '5px'}} class="fa fa-check" aria-hidden="true"></i>Accepté</label>
                    </>
                  )}
                  {notif.AcceptStatus === false && (
                    <>
                    <label style={{ color: "#CF0004" }} ><i class="fa fa-times" aria-hidden="true" style={{marginRight : '5px'}}></i>Refusé</label>
                    </>
                  )}
                </div>
                <Modal
                  visible={visible}
                  width="20vw"
                  onCancel={() => setvisible(false)}
                  footer={[
                    <Button
                      disabled={false}
                      key="submit"
                      type="primary"
                      loading={buttonLoading}
                      style={{
                        borderRadius: "10px",
                        fontFamily: "GlacialBold",
                      }}
                      onClick={HandleAccept}
                    >
                      Je suis sûr !
                    </Button>,
                  ]}
                >
                  <h3>Êtes-vous sûr de vouloir {action ==="accepted"?"accepter" : "refuser"} cette demande?</h3>
                </Modal>
              </div>
            )}
            {notif.Type === "Response" && notif.AcceptStatus && (
              <div className="NotifCard">
                <div className="Card_Head">
                  <div className="ProfileImg">
                    <img src={Data.Usrimg} />
                  </div>
                </div>
                <p style={{ color: "#02C39A" }}>
                  <strong style={{ fontFamily: "GlacialBold" }}>
                    <a
                      href={"/Profiles/" + notif.SenderId}
                      className="profileLink"
                      style={{ color: "#02C39A" }}
                    >
                      {Data.companyname}
                    </a>
                  </strong>{" "}
                  a accepté votre demande{" "}
                </p>
                <div className="Card_Body">
                  <p style={{ color: "#2a2a2a", fontSize: "15px" }}>
                    Votre rendez-vous est prévue{" "}
                    <strong style={{ fontFamily: "GlacialBold" }}>
                      {notif.day}
                    </strong>{" "}
                    a{" "}
                    <strong style={{ fontFamily: "GlacialBold" }}>
                      {notif.horraire}
                    </strong>
                    {/* . Nous avons envoyé un rappel dans votre e-mail. */}
                  </p>
                </div>
              </div>
            )}
            {notif.Type === "Response" && !notif.AcceptStatus && (
              <div className="NotifCard">
                <div className="Card_Head">
                  <div className="ProfileImg">
                    <img src={Data.Usrimg} />
                  </div>
                </div>
                <p style={{ color: "#CF0004" }}>
                  <strong style={{ fontFamily: "GlacialBold" }}>
                    <a
                      href={"/Profiles/" + notif.SenderId}
                      className="profileLink"
                      style={{ color: "#CF0004" }}
                    >
                      {Data.companyname}
                    </a>
                  </strong>{" "}
                  a refusé votre demande{" "}
                </p>
                <div className="Card_Body">
                  <p style={{ color: "#2a2a2a", fontSize: "15px" }}>
                    Cette entreprise ne peut pas vous rencontrer Le{" "}
                    <strong style={{ fontFamily: "GlacialBold" }}>
                      {notif.day}
                    </strong>{" "}
                    a{" "}
                    <strong style={{ fontFamily: "GlacialBold" }}>
                      {notif.horraire}
                    </strong> essayez une autre date .
                    {/* . Nous avons envoyé un rappel dans votre e-mail. */}
                  </p>
                </div>
              </div>
            )}
          </>
        );
    }
    
}
export default NotifCard