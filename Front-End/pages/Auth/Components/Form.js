const FormComponent = () => {
    return (
      <div className="FormContainer">
        <h1>Connectez-vous</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Email</label>
          <br />
          <input className="input" type="email" />
          <br />
          <span className="err_msg"></span>
          <br />
          <label>Mode de passe</label>
          <br />
          <input className="input" type="password" />
          <br />
          <span className="err_msg"></span>
          <br />
          <input className="SignButton" type="submit" value="Se connecter" />
        </form>
        <div className="FormFooter">
          <span>Pas encore membre ?</span>
          <a href="SignUp">Inscrivez-vous</a>
        </div>
      </div>
    );
}
export default FormComponent;