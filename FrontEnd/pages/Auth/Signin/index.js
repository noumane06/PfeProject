import '../Sass/Auth.scss'
import LeftComponent from '../../../components/Auth_Components/leftImage'
import RightComponent from '../../../components/Auth_Components/RightComponent'
import Head from '../../../components/head'
const Signin = ({query})=>{
    return (
      <div>
        <Head title="Connectez-vous | 6 solutions" />
        <LeftComponent />
        <RightComponent title="signin" query={query} />
      </div>
    );
}
Signin.getInitialProps =  ({ query }) => {
  return {props : [{test : "this is a test"}] , query : query}
}
export default Signin ;