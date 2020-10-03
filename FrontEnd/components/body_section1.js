// dependecies 
import React, { useState } from 'react';

// Components and styles imports

import Charach from './svg/NerdCharact';
import '../styles/bodySection1.scss';
import SearchBar from './SearchBar';
// ----------------------------------------------------

const Body_section1 = ()=>{
    
    
    return (
      <div className="section1_container">
        <div className="Left_segment">
          <h1>Recherchez des entreprises et organisez une réunion</h1>
          <SearchBar/>
        </div>
        <div className="right_segment">
          <Charach />
        </div>
      </div>
    );
}

export default Body_section1 ;