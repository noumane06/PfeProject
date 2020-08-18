// dependecies 
import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import axios from 'axios';
// Components and styles imports

import Charach from './svg/NerdCharact';
import '../styles/bodySection1.scss';
import '../pages/Auth/Sass/ant-picker.scss';
import '../styles/AutoComplete.scss';
// ----------------------------------------------------

const Body_section1 = ()=>{
    
    const { Option } = AutoComplete;
    const [nameText , setNametext]= useState("");
    const [domaineText , setdomainetext]= useState("");
    const [cityText , setcitytext]= useState("");
    const [nameOptions, setOptions] = useState([]);
    const [DomaineOptions, setDomaineOptions] = useState([]);
    const [CityOptions, setCityOptions] = useState([]);
    const [Names, setNames] = useState([]);
    const [Domaines, setDomaines] = useState([]);
    const [City, setCity] = useState([]);


    const checker =  (array)=>{
        var els = [] ; 
         array.map(element => element.domaine.map(dom => {
          els.includes(dom) ? 'null' : els.push(dom)
        }))
        return els ;
    }
    const onSearchName = searchText => {
      
      setNametext(searchText);
      const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText ;
      axios.get(Url).then(({data}) =>{
          if (data !== undefined) {
              setNames(data.profile);
              if (Names.length !== 0) {
                setOptions(!searchText ? [] : Names);
              }
        }
      }).catch(err => console.log(err));
    };
    const onSearchDomaine = searchText => {
      setdomainetext(searchText)
      const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText ;
      axios.get(Url).then(({data}) =>{
          if (data !== undefined) {
              setNames(data.profile);
              if (Names.length !== 0) {
                setDomaineOptions(!searchText ? [] : checker(Names));
                console.log(DomaineOptions);
              }
        }
      }).catch(err => console.log(err));
    };
    const onSearchCities = searchText => {
      setcitytext(searchText)
      const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText ;
      axios.get(Url).then(({data}) =>{
          if (data !== undefined) {
              setNames(data.profile);
              if (Names.length !== 0) {
                setCityOptions(!searchText ? [] : Names.filter(em => em.city.includes(searchText.toLowerCase() )));
              }
        }
      }).catch(err => console.log(err));
    };
    
    const onSelectName = data => {
      setNametext(data);
    };
    const onSelectDomaine = data => {
     setdomainetext(data)
    };
    const onSelectCity = data => {
      setcitytext(data)
    };
    return (
      <div className="section1_container">
        <div className="Left_segment">
          <h1>Recherchez des entreprises et organisez une réunion</h1>
          <div className="search_Container">
            <div className="inputContainer">
              <i aria-hidden className="fa fa-id-card icon"></i>
              <AutoComplete
                className="searchInput"
                onSelect={onSelectName}
                onSearch={onSearchName}
                placeholder="Société/Personne"
              >
                 {nameOptions.map(name =>(
                   
                  <Option key={name.companyname} value={name.companyname}>
                    {name.companyname}
                  </Option>
                ))}
              </AutoComplete>
            </div>
            <div className="inputContainer">
              <i aria-hidden className="fa fa-globe icon"></i>
              <AutoComplete className="searchInput" onSelect={onSelectDomaine} onSearch={onSearchDomaine} placeholder="Domaine">
                {DomaineOptions.map(domaine =>(
                    <Option key={domaine} value={domaine}>
                      {domaine}
                    </Option>
                    ))}
              </AutoComplete>
            </div>
            <div className="inputContainer">
              <i aria-hidden className="fa fa-map-marker icon"></i>
              <AutoComplete
                className="searchInput"
                onSelect={onSelectCity}
                onSearch={onSearchCities}
                placeholder="Ville"
              >
                  {CityOptions.map(element =>(
                    <Option key={element.city} value={element.city}>
                      {element.city}
                    </Option>
                ))}
              </AutoComplete>
            </div>

            <a className="searchButton" type="button" href={'/Search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText}>
              <i aria-hidden className="fa fa-search"></i>
            </a>
            
          </div>
        </div>
        <div className="right_segment">
          <Charach />
        </div>
      </div>
    );
}

export default Body_section1 ;