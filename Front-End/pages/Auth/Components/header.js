const HeaderAuth = () => {
   
    return (
      <div className="HeaderContainer">
        <div className="ButtonContainer" onClick={()=>window.location.assign("/")}>
          <i className="fa fa-arrow-left icon"></i>
          <span className="backButton">Retour</span>
        </div>
        <span className="Help">Help</span>
      </div>
    );
}
export default HeaderAuth;