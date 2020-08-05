// dependecies 

// Components and styles imports

import Charach from './svg/NerdCharact';
import '../styles/bodySection1.scss';

// ----------------------------------------------------

const Body_section1 = ()=>{
    return (
      <div className="section1_container">
        <div className="Left_segment">
          <h1>Recherchez des entreprises et organisez une réunion</h1>
          <div className="search_Container">
            <div className="inputContainer">
              <i className="fa fa-id-card icon"></i>
              <input className="searchInput" type="text" placeholder="Société/Personne" />
            </div>
            <div className="inputContainer">
              <i className="fa fa-globe icon"></i>
              <input className="searchInput" type="text" placeholder="Domaine " />
            </div>
            <div className="inputContainer">
              <i className="fa fa-map-marker icon"></i>
              <input className="searchInput" type="text" placeholder="Ville" />
            </div>

            <button className="searchButton" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="right_segment">
          <Charach />
        </div>
      </div>
    );
}

export default Body_section1 ;