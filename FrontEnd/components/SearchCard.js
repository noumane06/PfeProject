import { Skeleton } from 'antd';
import {useState } from 'react';
const SearchCard = (props)=>{

        const [isFull , setFulltext] = useState(props.profile !== '' ? props.profile.presentation.length < 150 : '');
        let value ="";
        if (props.profile !== '') {
            props.profile.presentation.length > 150 ? value = "...en voir plus" : '';
        }

    
    
    return (
        <div  className={props.className}>
           <Skeleton loading={props.loading}  active={true} avatar={true} round>
           {props.profile !== '' &&(
                <>
                    <div className="Card_Head">
                        <div className="ProfileImg">
                            <img src={props.profile.Usrimg} />
                        </div>
                        <div className="ProfileInfo">
                            <h3>{props.profile.companyname}</h3>
                            <p>{props.profile.city}</p>
                            <span>{props.profile.stars.length} J'aime</span>
                        </div>
                    </div>
                    <div className="Card_Body">
                        <h3>A propos </h3>
                        <p>
                            {!isFull ? props.profile.presentation.substr(0, 150) : props.profile.presentation}
                            {!isFull ? (<span className="more" onClick={()=>setFulltext(true)}>Voir plus</span>):""}
                        </p>
                        <style jsx>
                            {`
                                .more
                                {
                                    font-style: italic;
                                    color: #0C72BF;
                                }
                                .more:hover
                                {
                                    text-decoration: underline;
                                    cursor: pointer;
                                }
                            `}
                        </style>
                    </div>
                    <div className="Card_footer">
                        {props.profile._id !== undefined &&(
                            <a className="button" href={`/Profiles/${props.profile._id}`}>Voir profile</a>
                        )}
                        {props.profile._id === undefined &&(
                            <button className="button">Voir profile</button>
                        )}
                    </div>
                </>
           )}
            
           </Skeleton>
            
        </div>
    );
}
export default SearchCard ;