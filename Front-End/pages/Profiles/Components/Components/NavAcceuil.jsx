const NavAcceuil = ({date,profile})=>{
    return(
        <>
            <div className="presentation">
                {profile.type == "Société" &&(<h2>Presentation de l'entreprise</h2>)}
                {profile.type == "Client" &&(<h2>Presentation du client</h2>)}
                <p>{profile.presentation === "" || profile.presentation === undefined ? "Cet utilisateur n'a pas fournie de données pour l'instant" : profile.presentation }</p>
            </div>
            {profile.type == "Société" &&(
                <div className="Horraire">
                    <h2>Horraire</h2>
                    <div className="TimeTable">
                        <div className="Block">
                            <ul>
                                <li className={date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""}>Lundi</li>
                                <li className={date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""}>Mardi</li>
                                <li className={date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""} >Mercredi</li>
                            </ul>
                            <ul>
                                <li className={date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""}>{profile.horraire[0]} - {profile.horraire[1]}</li>
                                <li className={date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                <li className={date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                            </ul>
                        </div>
                        <div className="Block">
                            <ul>
                                <li className={date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""} >Jeudi</li>
                                <li className={date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""} >Vendredi</li>
                                <li className={date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""} >Samedi</li>
                            </ul>
                            <ul>
                                <li className={date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                <li className={date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                                <li className={date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""} >{profile.horraire[0]} - {profile.horraire[1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}
export default NavAcceuil ;