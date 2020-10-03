import Header from '../../components/header';
import Head from '../../components/head';
import './scss/propos.scss';
import Footer from '../../components/footer';
const propos = ()=>{

    return(
        <>
        <div className="body">
            <div className="ContentInside">
                <Head title="A propos | 6 solutions" />
                <Header active="propos"/>
                <div className="proposBody">
                    <h1 className="title">A propos de 6Solutions</h1>
                    <div className="shape">

                    </div>
                    <h2 className="heading">Titre 1</h2>
                    <p className="Content">
                    Haec subinde Constantius audiens et quaedam referente Thalassio doctus, 
                    quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius 
                    adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare
                    otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit 
                    esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano,
                    ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat,
                    ad Italiam properare blande hortaretur et verecunde.</p>
                    <h2 className="heading">Titre 2</h2>
                    <p className="Content">
                    Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse
                    iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit,
                    sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret,
                    solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, 
                    et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, 
                    quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.
                    </p>
                    <div className="references">
                        <h1 className="heading referTitle">Ils parlent de nous</h1>
                        <div className="Logos">
                            <img src="../static/Assets/Content/amazonlogo.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/Forbes.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/google.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/HboLog.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/Netflix.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/redditLog.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/samsung.png" height="40" className="Logo"/>
                            <img src="../static/Assets/Content/slack.png" height="40" className="Logo"/>   
                        </div>
                    </div>
                    <h2 className="heading">Contacts</h2>
                    <p className="Content">
                    Haec subinde Constantius audiens et quaedam referente Thalassio doctus, 
                    quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius 
                    adiumenta paulatim illi subtraxit, sollicitari se simulans ne.
                    </p>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
        
    )
}
export default propos ;