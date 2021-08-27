import { FC } from 'react';
import Header from '../Common/Header';
import SEO from '../Common/SEO';
import Splash from '../Splash';
import CreateAds from './CreateAds';
import Footer from './Footer';
import Hero from './Hero';

const Home: FC = () => {
  return (
    <>
      <SEO title="Bienvenue sur ERT" />
      <Splash />
      <Header />
      <div>
        <Hero />
        <CreateAds />
      </div>
      <Footer />
    </>
  );
};

export default Home;
