import Header from '../../components/header';
import Head from '../../components/head';
import Footer from '../../components/footer';
import './qts.scss';
const Questions = ()=>{
    return (
      <>
        <div className="body">
          <div className="ContentInside">
            <Head title="Questions | 6 solutions" />
            <Header active="questions" />
            <div className="proposBody">
              <h1 className="title">Questions fréquentes </h1>
              <div className="qst"></div>
              <h2>Qu'est-ce que 6Solutions ?</h2>
              <p>
                Eodem tempore etiam Hymetii praeclarae indolis viri negotium est
                actitatum, cuius hunc novimus esse textum. cum Africam pro
                consule regeret Carthaginiensibus victus inopia iam lassatis, ex
                horreis Romano populo destinatis frumentum dedit, pauloque
                postea cum provenisset segetum copia, integre sine ulla
                restituit mora.
              </p>
              <h2>Comment puis-je prendre un rendez-vous ?</h2>
              <p>
                Eodem tempore etiam Hymetii praeclarae indolis viri negotium est
                actitatum, cuius hunc novimus esse textum. cum Africam pro
                consule regeret Carthaginiensibus victus inopia iam lassatis, ex
                horreis Romano populo destinatis frumentum dedit, pauloque
                postea cum provenisset segetum copia, integre sine ulla
                restituit mora.
              </p>
              <h2>Comment savoir si mon rendez-vous est confirmé ?</h2>
              <p>
                Eodem tempore etiam Hymetii praeclarae indolis viri negotium est
                actitatum, cuius hunc novimus esse textum. cum Africam pro
                consule regeret Carthaginiensibus victus inopia iam lassatis, ex
                horreis Romano populo destinatis frumentum dedit, pauloque
                postea cum provenisset segetum copia, integre sine ulla
                restituit mora.
              </p>
              <h2>Comment annuler un rendez-vous ?</h2>
              <p>
                Eodem tempore etiam Hymetii praeclarae indolis viri negotium est
                actitatum, cuius hunc novimus esse textum. cum Africam pro
                consule regeret Carthaginiensibus victus inopia iam lassatis, ex
                horreis Romano populo destinatis frumentum dedit, pauloque
                postea cum provenisset segetum copia, integre sine ulla
                restituit mora.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
export default Questions ;