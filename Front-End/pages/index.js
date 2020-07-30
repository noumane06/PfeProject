

//Components and dependecies
import Header from '../components/header';
import Body_section1 from '../components/body_section1';
import Head from '../components/head';
import TopRight from '../components/svg/Top_right';
import BodySection2 from '../components/body_section2';
// Styles files 
import '../styles/index.scss';
import MiddleLeft from '../components/svg/middle_left';
import BottomLeft from '../components/svg/Bottom_left';
import Footer from '../components/footer';

// -----------------------------------------------------
export default () => (
  <div>
    <div className="body">
      <TopRight />
      <Head title="Acceuil | 6 solutions" />
      <Header />
      <Body_section1 />
      <MiddleLeft />
      <BodySection2 />
      <BottomLeft />
   </div>
      <Footer />
  </div>
);
