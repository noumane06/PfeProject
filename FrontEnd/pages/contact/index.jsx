import Header from '../../components/header';
import Head from '../../components/head';
import Footer from '../../components/footer';
import './contact.scss';
const contact = ()=>{
    return(
        <>
            <div className="body">
                <div className="ContentInside">
                    <Head title="Contacts | 6 solutions" />
                    <Header active="contact"/>
                    <div className="proposBody">
                        <h1 className="title">Contacts</h1>
                        <div className="cntc"></div>
                        <h2>Comment nous contacter ?</h2>
                        <p>Vous pouvez nous contacter via notre email : contact@6solutions.com </p>
                        <p>Ou vous pouvez appeler notre ligne clients : 0522115577</p>
                        <h2>Vous pouvez nous parler via les réseaux sociaux</h2>
                        <p>Facebook : www.facebbok.com</p>
                        <p>Instagram : www.Instagram.com</p>
                        <p>Twitter : www.twitter.com</p>
                        <p>linkedin : www.linkedin.com</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default contact ;