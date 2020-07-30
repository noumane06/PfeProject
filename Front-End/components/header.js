import Link from 'next/link';
import '../styles/header.scss';
const Header = ()=>
{

    const handleClick = ()=>{
        window.location.replace("/Auth/Signin");
    }
    return(
        <div className="Header_Container">
            <div className="Header_Logo">
                <img src="../static/Icons/LOGO2017.png" height="30" />
            </div>
            <ul>
                <li className="active"><Link href="/">Acceuil</Link></li>
                <li className="link"><Link href="/propos">A propos</Link></li>
                <li className="link"><Link href="/temoignages">Temoignages</Link></li>
                <li className="link"><Link href="/contact">Contact</Link></li>
                <li className="link"><Link href="/questions">Questions</Link></li>
            </ul>
            <div className="Header_Buttons">
                <input className="Header_subscribe" type="button" value="S'inscrire" />
                <input className="Header_signin" type="button" value="Se connecter" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default  Header ;