import '../scss/TemCard.scss';
import YoutubeComponent from 'react-youtube';
const TemCard = ({props})=>{
    const opts = {
        height: '200',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }   
    };
    const videoId = props.link.split("v=")[1];
    return(
        <div className="TemCard">
            <div className="Card_Head">
                <div className="ProfileImg">
                    <img src={props.Usrimg} />
                </div>
                <div className="ProfileInfo">
                    <h3>{props.companyname}</h3>
                </div>
            </div>
            <div className="Card_Body">
                <h3>Témoignage vidéo</h3>
                <YoutubeComponent videoId={videoId} opts={opts}/>
            </div>
        </div>
    )
}
export default TemCard ;