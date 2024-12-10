import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import NewsEvents from './components/NewsEvents';
import Auth from './components/Auth';
import Footer from './components/Footer';

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'signin'
  });

  const openAuthModal = (mode) => {
    setAuthModal({
      isOpen: true,
      mode
    });
  };

  const closeAuthModal = () => {
    setAuthModal({
      isOpen: false,
      mode: 'signin'
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar openAuthModal={openAuthModal} />
      <main className="flex-grow">
        <Hero openAuthModal={openAuthModal} />
        <About />
        <OurWork />
        <NewsEvents />
      </main>

      <Auth
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        openAuthModal={openAuthModal}
      />
      
      <Footer />
    </div>
  );
}

export default App;
