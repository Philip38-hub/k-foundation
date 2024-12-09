import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import NewsEvents from './components/NewsEvents';

function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' });

  const openAuthModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signin' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar openAuthModal={openAuthModal} authModal={authModal} closeAuthModal={closeAuthModal} />
      <main>
        <Hero openAuthModal={openAuthModal} />
        <About />
        <OurWork />
        <NewsEvents />
      </main>
    </div>
  );
}

export default App;
