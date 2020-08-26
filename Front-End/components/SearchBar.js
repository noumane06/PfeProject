import { AutoComplete } from 'antd';
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import '../styles/AutoComplete.scss';
import '../styles/ant-picker.scss';
const SearchBar = ({searchItem})=>{

    const { Option } = AutoComplete;
    const [nameOptions, setOptions] = useState([]);
    const [Names, setNames] = useState([]);
    const [CityOptions, setCityOptions] = useState([]);
    const [DomaineOptions, setDomaineOptions] = useState([]);
    const [nameText , setNametext]= useState("");
    const [domaineText , setdomainetext]= useState("");
    const [cityText , setcitytext]= useState("");
    console.log(searchItem);
    const checker =  (array)=>{
        var els = [] ; 
         array.map(element => element.domaine.map(dom => {
          els.includes(dom) ? 'null' : els.push(dom)
        }))
        return els ;
    }

    const onSearchName = searchText => {
      
        setNametext(searchText);
        const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText+'&page=1' ;
        axios.get(Url).then(({data}) =>{
            if (data !== undefined) {
                setNames(data.profile);
                if (Names.length !== 0) {
                  setOptions(!searchText ? [] : Names);
                }
          }
        }).catch(err => console.log(err));
    };

    const onSearchCities = searchText => {
        setcitytext(searchText)
        const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText+'&page=1' ;
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

    const onSearchDomaine = searchText => {
        setdomainetext(searchText)
        const Url = 'http://localhost:9000/profiles/search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText+'&page=1' ;
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
    useEffect(()=>{
        if (searchItem !== undefined) {
            setNametext(searchItem.companyname);
            setdomainetext(searchItem.domaine);
            setcitytext(searchItem.city);
        }
        
    },[])

    return(
        <div className="search_Container">
            <div className="inputContainer">
              <i aria-hidden className="fa fa-id-card icon"></i>
              <AutoComplete
                className="searchInput"
                onSelect={onSelectName}
                onSearch={onSearchName}
                value={nameText}
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
              <AutoComplete className="searchInput"
               value={domaineText}
                onSelect={onSelectDomaine} onSearch={onSearchDomaine} placeholder="Domaine">
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
                value={cityText}
              >
                  {CityOptions.map(element =>(
                    <Option key={element.city} value={element.city}>
                      {element.city}
                    </Option>
                    ))}
              </AutoComplete>
            </div>

            <a className="searchButton" type="button" href={'/Search?companyname='+nameText+'&domaine='+domaineText+'&city='+cityText+'&page=1' }>
              <i aria-hidden className="fa fa-search"></i>
            </a>
            
          </div>
    )
}
export default SearchBar ;