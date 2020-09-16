import Map from '../map/Map';
const NavPropos = ({profile,location})=>{
    return(
        <>
            <div>
                <h2>Information supplementaires</h2>
                <div className="InfoSupp">
                    <div className="Block">
                        {profile.type === "Société" &&(
                            <>
                            <ul>
                                <li className="title">Domaine De travail : </li>
                                <li  className="element" >{profile.domaine.map(el =>('∙ '+el+ '\n'))}</li>
                            </ul>
                            <ul>
                                <li className="title" >téléphone fixe : </li>
                                <li className="element" >{profile.fixphone}</li>
                            </ul>

                            </>
                        )}
                         
                         <ul>
                             <li className="title" >téléphone portable : </li>
                             <li className="element" >{profile.mobilephone}</li>
                         </ul>
                         <ul>
                             <li className="title" >Langues parlés : </li>
                             <li className="element"  style={{whiteSpace: 'pre'}}>{profile.languages.map(el =>('∙ '+el+ '\n'))}</li>
                         </ul>
                         <ul>
                             <li className="title" style={{color : "#2e9aff" }} >Diplomes</li>
                         </ul>
                         <hr style={{border : '1px solid rgb(240, 240, 240)'}}/>
                         {profile.diplome.map(dom =>(
                             <ul key={Date.now()+dom.desc}>
                                 <li className="title" style={{color: '#969696'}}>{dom.diplomeName}</li>
                                 <li className="element" >{dom.desc}</li>
                             </ul>
                         ))}
                         <hr style={{border : '1px solid rgb(240, 240, 240)'}}/>
                         <ul>
                             <li className="title" >{profile.type === "Société" ?" Siège social :" : "Addresse du client :" }</li>
                             <li className="element" >{profile.addresse}</li>
                         </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2>Localisation</h2>
                <div className="MapContainer">
                    <Map location={location} zoomLevel={17}/>
                </div>
            </div>
        </>
    )
}
export default NavPropos ;