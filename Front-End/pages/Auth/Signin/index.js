import '../Sass/signin.scss'
import LeftComponent from '../Components/leftImage'
import RightComponent from '../Components/RightComponent'
import Head from '../../../components/head'
const Signin = ()=>{

    return (
      <div>
        <Head title="Connectez-vous | 6 solutions" />
        <LeftComponent />
        <RightComponent title="signin"/>
      </div>
    );
}
export default Signin ;