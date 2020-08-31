import '../Sass/editbox.scss';
import {useState } from 'react';
import {Select ,TimePicker  } from 'antd';

import ImagePreview from '../../../components/ImagePreview';
import '../../../styles/AutoComplete.scss';
import moment from 'moment';
//  --------------

const EditBox = ({data , setData , DiplomeList , setDiplomeList , setfire}) =>{
    
    // States --------------------------------------------------------
    const Moments = [];
    if (data.horraire !== undefined) {
        Moments.push(moment(data.horraire[0],'HH:mm'),moment(data.horraire[1],'HH:mm'));
    }
    const { RangePicker } = TimePicker;
    const { Option } = Select;
    const  [time , setTime] =useState(Moments);
    const Languages = ["Arabe","Francais","Anglais","Spanish"];
    const Fields = ["Agriculture"
                    ,"Agroalimentaire"
                    ,"Alimentation"
                    ,"Animaux"
                    ,"Architecture - Aménagement intérieur"
                    ,"Artisanat - Métiers d'art"
                    ,"Banque - Finance - Assurance"
                    ,"Bâtiment - Travaux publics"
                    ,"Biologie - Chimie"
                    ,"Commerce - Immobilier"
                    ,"Communication - Information"
                    ,"Culture - Spectacle"
                    ,"Défense - Sécurité - Secours"
                    ,"Droit"
                    ,"Edition - Imprimerie - Livre"
                    ,"Electronique - Informatique"
                    ,"Enseignement - Formation"
                    ,"Humanitaire"
                    ,"Industrie - Matériaux"
                    ,"Lettres - Sciences humaines"
                    ,"Mécanique - Maintenance"
                    ,"Santé"
                    ,"Sciences - Maths - Physique"
                    ,"Secrétariat - Accueil"
                    ,"Social - Services à la personne"
                    ,"Soins - Esthétique - Coiffure"
                    ,"Sport - Animation "
                    ,"Transport - Logistique"
                  ];
    const lang = [];
    const children = [];
    const [changed,setchanged] = useState(false);
    const [file,setFile] = useState(data.Usrimg);
    const [visible,setvisible] = useState(false);
    // Mappers -------------------------------------------------------
    Languages.map(Field =>{
        lang.push(<Option key={Field}>{Field}</Option>);
    });
    Fields.map(Field =>{
        children.push(<Option key={Field}>{Field}</Option>);
    })
    
    // Handlers --------------------------------------------------------
    const handleImageChange = (e)=>{
        setchanged(true);
        if (e.target.files[0] !== undefined) {
            try {
                setfire(e.target.files[0]);
                const url =  URL.createObjectURL(e.target.files[0]);
                setFile(url);
            } catch (error) {
                console.error(error);
                alert(error);
            } 
        }
    }
    // ------------------------------------------------
    // When click on delete picture 
    const handleClick = ()=>{
        URL.revokeObjectURL(file);
        setFile(data.Usrimg);
        setchanged(false);
    }


    // When diplome change value --------------------------
    // ---------------
    const dipChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...DiplomeList];
      list[index][name] = value;
      setDiplomeList(list);
    };

    // WHen add a diplomaa --------------------------------
    const handleAddClick = () => {
      setDiplomeList([...DiplomeList, { diplomeName: "", desc: "" }]);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
      const list = [...DiplomeList];
      list.splice(index, 1);
      setDiplomeList(list);
    };

    
    // Languages on change handler ----------------------------
    const handleLang = (value)=>{
            const string = value ;
            setData({...data , languages : string}); 
    }


    // Domaine handler ----------------------------------------
    const handleTag =(value)=>{
        const string = value ;
        setData({...data , domaine : string}); 
    }


    // When chage of time handler --------------------------------
    const handleTime =(time,timestring)=>{
        const string = timestring ;
        setData({...data , horraire : string})
        setTime(time);
    }
   
    // Handler when input value change 
    const handleChange = (event)=>{
        const  name = event.target.name ;
        const  value = event.target.value ;
        setData({...data ,[name] : value});
    }

    // if (data === undefined) {
    //     return(null)
    // }else
    // {
        return(
            <div className="EditBox">
                <div className="ProfileImg">
                    <img className="img" src={file} onClick={()=>setvisible(true)} /><br/>
                    <div>
                        <label className="custom-file-upload">
                            <input type="file" id="img" name="img" placeholder="Choisissez photo" accept="image/*" onChange={handleImageChange}/>
                            <i className="fa fa-upload" aria-hidden="true"></i>   Ajouter photo
                        </label>
                        {changed &&(
                            <label className="Showmodal" onClick={handleClick}>
                            <i className="fa fa-user-times" style={{color : '#be0000'}}></i>
                            </label>
                        )}
                        
                    </div>
                    {visible &&(<ImagePreview image={file} handleClick={() => setvisible(false)}/>)}
                </div>
                {/* Nom et prenom  ------------------------------------ */}
                <div className="multipleInput">
                    <input className="input controlled user" type="text" placeholder="Nom" name="nom" value={data.nom} onChange={handleChange} />
                    <input className="input controlled user" type="text" placeholder="Prenom" name="prenom" value={data.prenom} onChange={handleChange} />
                </div>
                {/* --------------------------------------------------- */}
                <div className="multipleInput" >
                    {/* Title  ------------------------------------ */}
                    <select className="title" name="title"  value={data.title} onChange={handleChange} required >
                        <option defaultValue="" disabled  hidden>Titre de travail</option>
                        <option value="Directeur" >Directeur</option>
                        <option value="Cto">CTO</option>
                    </select>
                    {/* Nom de societe  ------------------------------------ */}
                    <input className="input" type="text" placeholder="Nom de société" name="companyname"  value={data.companyname} onChange={handleChange} />
                </div>
                {/* Domaine  ------------------------------------ */}
                <Select mode="tags" style={{ width: '100%' , marginTop : '20px' }} placeholder="Votre domaine " maxTagCount={3} onChange ={handleTag} value={data.domaine} >
                    {children}
                </Select>
                <div className="multipleInput" placeholder="Titre" style={{marginBottom : '10px'}}>
                    {/* City  ------------------------------------ */}
                    <select className="title" name="city"  >
                        <option defaultValue="" disabled  hidden>Votre ville</option>
                        <option value="Casa" >Casablanca</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Meknes">Meknes</option>
                    </select>
                    {/* address ------------------------------------*/}
                    <input className="input" type="text" placeholder="Addresse"  name="addresse" value={data.addresse} onChange={handleChange} />     
                </div>
                {/* L'horraire de la société ----------------------------------------------------------------  */}
                <label style={{color : '#318CE7' , fontFamily : 'GlacialBold' , fontSize : '16px'}}>L'horraire de votre société : </label>
                <RangePicker  bordered={false} format='HH:mm'  minuteStep={30} value={time} onChange={handleTime}/><br/><br/>
                {/* ------------------------------------------------------------------------------------------ */}
                
                {/* Presentation ------------------------------------------ */}
                <label style={{color : '#2a2a2a' , fontFamily : 'GlacialBold' , fontSize : '16px'}} >Presentation</label><br/>
                <textarea className="textArea" name="presentation" placeholder="Décrivez votre entreprise" rows="4" value={data.presentation} onChange={handleChange} /><br/><br/>
                {/*  ------------------------------------------------------------------------------------------ */}
    
                {/* Languages ------------------------------------------ */}
                <label style={{color : '#2a2a2a' , fontFamily : 'GlacialBold' , fontSize : '16px'}} >Langues parlés</label>
                <Select mode="tags" style={{ width: '100%',borderRadius : '10px', marginTop:'5px' , backgroundColor: '#e9f1fa' }} placeholder="Ex: Francais , arabe ..."
                onChange ={handleLang} value={data.languages} maxTagCount={3} >
                    {lang}
                </Select><br/><br/>
                {/*  ------------------------------------------------------------------------------------------ */}  
                
                {/* Diplomes et formations  */}
                <label style={{color : '#2a2a2a' , fontFamily : 'GlacialBold' , fontSize : '16px'}} >Diplôme et formations</label>
                <div className="Diplomes">
                    {DiplomeList.map((element, index) =>(
                        <div className="container" key={index}>
                            <input className="input diplome" type="text" name="diplomeName" placeholder="Votre Diplome" value={element.diplomeName}  onChange={e => dipChange(e,index)}/>
                            <input className={index !== 0 ?"input desc2":"input desc"} type="text" name="desc" placeholder="Brève description" value={element.desc} onChange={e => dipChange(e,index)}/>
                            {index !== 0 &&(
                                <label className="delete" onClick={() => handleRemoveClick(index)}>
                                    <i class="fa fa-trash" aria-hidden="true" style={{color : '#be0000'}}></i>
                                </label>
                                )}
                        </div>
                        
                    ))}
                    
                    <div className="container ">
                        <button onClick={handleAddClick} className="ajouter">Ajouter</button>
                    </div>
                    
                </div>
    
    
            </div>
        )
    // }
    
}
export default EditBox ;