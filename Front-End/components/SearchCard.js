

const SearchCard = (props)=>{
    let value ="";
    if (props.profile.presentation.length > 150) {
        value = "...en voir plus"
    }
    return (
        <div key={props.profile._id} className={props.className}>
            <div className="Card_Head">
                <div className="ProfileImg">
                    <img src={props.profile.Usrimg} />
                </div>
                <div className="ProfileInfo">
                    <h3>{props.profile.companyname}</h3>
                    <p>{props.profile.city}</p>
                    <span>{props.profile.stars} étoiles</span>
                </div>
            </div>
            <div className="Card_Body">
                <h3>A propos </h3>
                <p>{props.profile.presentation.substr(0, 150)}<span style={{fontStyle : 'italic',color:'#318CE7'}}>{value}</span></p>
            </div>
            <div className="Card_footer">
                {props.profile._id !== undefined &&(
                    <a className="button" href={`/Profiles/${props.profile._id}`}>Voir profile</a>
                )}
                {props.profile._id === undefined &&(
                    <button className="button">Voir profile</button>
                )}
            </div>
        </div>
    );
}
export default SearchCard ;