import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-glow glow-blue"></div>
      <div className="bg-glow glow-teal"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
