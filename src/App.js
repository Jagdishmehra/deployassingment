import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Features from './components/Features';
import DesignSection from './components/DesignSection';
import ProcessSteps from './components/ProcessSteps';
import ConnectStore from './components/ConnectStore';
import CustomSolutions from './components/CustomSolutions';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';
import MakeMoney from './components/MakeMoney';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Features />
      <DesignSection />
      <ProcessSteps />
      <ConnectStore />
      <CustomSolutions />
      <TrustedBy />
      <Testimonials />
      <MakeMoney />
      <Footer />
    </div>
  );
}

export default App;
