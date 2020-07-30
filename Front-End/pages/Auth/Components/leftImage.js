const LeftComponent = ()=>{
    return (
      <div className="Split LeftSide">
        <img src="/static/Icons/spotify_logo.png" height="30" onClick={()=>window.location.replace("/")}  />
      </div>
    );
}
export default LeftComponent ;