const AccountComp = ({profile})=>{
    return(
        <div className="AccountComp">
            <div className="Block">
                <label>Email</label>
                <p>{profile.email}</p>
                <span>éditer</span>
            </div>
            <div className="Block">
                <label>Numero de téléphone</label>
                <p>{profile.mobilephone}</p>
                <span>éditer</span>
            </div>
            <div className="Block">
                <label>Mot de passe</label>
                <p></p>
                <span>éditer</span>
            </div>
        </div>
    )
}
export default AccountComp