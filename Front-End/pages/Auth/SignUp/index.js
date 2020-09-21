import '../Sass/Auth.scss'
import LeftComponent from '../Components/leftImage'
import RightComponent from '../Components/RightComponent'
import Head from '../../../components/head'
const Signin = ({ query }) => {

    return (
        <div className="body">
            <div className="ContentInside">
                <Head title="Inscrivez-vous | 6 solutions" />
                <LeftComponent />
                <RightComponent title="signup" query={query}/>
            </div>
            
        </div>
    );
}
Signin.getInitialProps =  ({ query }) => {
    return {props : [{test : "this is a test"}] , query : query}
  }
export default Signin;