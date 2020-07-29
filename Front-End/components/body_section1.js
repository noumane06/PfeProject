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
              <i class="fa fa-id-card icon"></i>
              <input className="searchInput" type="text" placeholder="Nom de la société" />
            </div>
            <div className="inputContainer">
              <i class="fa fa-globe icon"></i>
              <input className="searchInput" type="text" placeholder="Site web" />
            </div>
            <div className="inputContainer">
              <i class="fa fa-map-marker icon"></i>
              <input className="searchInput" type="text" placeholder="Ville" />
            </div>

            <button className="searchButton" type="button">
              <i class="fa fa-search"></i>
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