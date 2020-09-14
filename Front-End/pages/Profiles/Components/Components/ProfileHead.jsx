import BookMetting from '../Svg/BookMetting';
import EditSvg from '../Svg/EditSvg';

const ProfileHead = ({profile , handleEdit , setbook , userid})=>{
    
    return(
        <div className="ProfileHead">
            <div className="ProfileImg">
                <img src={profile.Usrimg} />
            </div>
            <div className="ProfileInfo">
                <h3>{profile.companyname === "" || profile.companyname== undefined ? profile.nom+" "+profile.prenom : profile.companyname}</h3>
                {profile.type === "Société" &&(
                    <p><i className="fa fa-user" aria-hidden="true" style={{marginRight :'10px'}}></i><span>{profile.nom} {profile.prenom}</span> | <span>{profile.title}</span></p>
                )}
                {profile.type === "Client" &&(
                    <p><i className="fa fa-user" aria-hidden="true" style={{marginRight :'10px'}}></i><span>Client</span></p>
                )}
                {profile.type === "Société" &&(
                    <span className="Likes"><i className="fa fa-heart" aria-hidden="true" style={{marginRight :'5px'}}></i> {profile.stars.length} J'aime</span>
                )}
            </div>
            {userid !== profile._id && profile.type === "Société" &&(
                <div className="BookMetting" onClick={()=>setbook(true)}>
                <BookMetting />
                <span>Réserver une réunion</span>
                </div>
            )}
            {userid === profile._id &&(
                <div className="EditProfile" onClick={handleEdit}>
                <EditSvg/>
                <span>Editer profile</span>
                </div>
            )}
            
        </div>
    )
}
export default ProfileHead ;