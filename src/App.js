import './App.css';
import Header from './component/common/head/Header';
import Content from './component/content/Content';
import Faq from './component/faq/Faq';
import Home from './component/home/Home';
import Review from './component/review/Review';
import Services from './component/services/Services';
import Step from './component/steps/Step';
import Trusted from './component/trusted/Trusted';
import Why from './component/why/Why';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Trusted />
      <Step />
      <Why />
      <Services />
      <Content />
      <Review />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
