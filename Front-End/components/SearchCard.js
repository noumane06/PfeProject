

const SearchCard = (props)=>{
    const ProfileInfo = {
      usrImg:
        "https://www.smart-ntic.com/uploads/projets/logo/max/youzcard.jpg",
      name: "Youzcard technology",
      Localisation: "Casablanca , grand casablanca",
      stars: 1236,
      propos: "YOUZCARD TECHNOLOGY est spécialisée en développement de solutions à valeur ajoutées.Nous concevons, commercialisons et déployons depuis plus de 12 ans des solutions de pointe orienté performance commerciale et expérience client.",
    };
    return (
        <div className={props.className}>
            <div className="Card_Head">
                <div className="ProfileImg">
                    <img src={ProfileInfo.usrImg} />
                </div>
                <div className="ProfileInfo">
                    <h3>{ProfileInfo.name}</h3>
                    <p>{ProfileInfo.Localisation}</p>
                    <span>{ProfileInfo.stars} étoiles</span>
                </div>
            </div>
            <div className="Card_Body">
                <h3>A propos </h3>
                <p>{ProfileInfo.propos}</p>
            </div>
            <div className="Card_footer">
                <button>Voir profile</button>
            </div>
        </div>
    );
}
export default SearchCard ;