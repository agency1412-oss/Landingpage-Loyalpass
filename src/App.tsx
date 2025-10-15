import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import LoyalpassStory from './components/LoyalpassStory';
import WhyEB5Guide from './components/WhyEB5Guide';
import ReadyToBegin from './components/ReadyToBegin';
import InvestorSteps from './components/InvestorSteps';
import HowWePrepare from './components/HowWePrepare';
import WhyLoyalpass from './components/WhyLoyalpass';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <LoyalpassStory />
      <WhyEB5Guide />
      <ReadyToBegin />
      <InvestorSteps />
      <HowWePrepare />
      <WhyLoyalpass />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;