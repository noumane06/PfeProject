import '../styles/bodySection2.scss'
import SearchCard from './SearchCard'

const BodySection2 = ()=>{
    return (
      <div className="bodySection2">
        <div className="titleContainer">
          <h1>Quelques entreprise les plus connues</h1>
        </div>
        <div className="CardsContainer">
          <SearchCard className="Card1" />
          <div className="row2">
            <SearchCard className="Card1 second" />
          </div>
          <div className="row2">
            <SearchCard className="Card1 third" />
          </div>
        </div>
      </div>
    );
}

export default BodySection2 ;