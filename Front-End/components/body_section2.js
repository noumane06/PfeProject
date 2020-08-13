import '../styles/bodySection2.scss'
import SearchCard from './SearchCard'

const BodySection2 = ()=>{
    const ProfileInfo = {
      Usrimg:
        "https://www.smart-ntic.com/uploads/projets/logo/max/youzcard.jpg",
      companyname: "Youzcard technology",
      city: "Casablanca , grand casablanca",
      stars: 1236,
      presentation: "YOUZCARD TECHNOLOGY est spécialisée en développement de solutions à valeur ajoutées.Nous concevons, commercialisons et déployons depuis plus de 12 ans des solutions de pointe orienté performance commerciale et expérience client.",
    };
    return (
      <div className="bodySection2">
        <div className="titleContainer">
          <h1>Quelques entreprise les plus connues</h1>
        </div>
        <div className="CardsContainer">
          <SearchCard className="Card1" profile={ProfileInfo}/>
          <div className="row2">
            <SearchCard className="Card1 second" profile={ProfileInfo}/>
          </div>
          <div className="row2">
            <SearchCard className="Card1 third" profile={ProfileInfo}/>
          </div>
        </div>
      </div>
    );
}

export default BodySection2 ;