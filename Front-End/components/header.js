import Link from 'next/link';
import '../styles/header.scss';
const Header = ()=>
{
    return(
        <div className="Header_Container">
            <div className="Header_Logo">Logo</div>
            <ul>
                <li className="link active">Acceuil</li>
                <li className="link">A propos</li>
                <li className="link">Temoignages</li>
                <li className="link">Contact</li>
                <li className="link">Questions</li>
            </ul>
            <div className="Header_Buttons">
                <input className="Header_subscribe" type="button" value="S'inscrire"/>
                <input className="Header_signin" type="button" value="Se connecter"/>
            </div>
        </div>
    )
}

export default  Header ;