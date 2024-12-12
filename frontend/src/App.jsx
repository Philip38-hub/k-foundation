import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import NewsEvents from './components/NewsEvents';
import KosodoTeam from './components/KosodoTeam';
import Auth from './components/Auth';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import ContactForm from './components/ContactForm';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [donationOpen, setDonationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthOpen(false);
  };

  const handleOpenDonation = () => {
    setDonationOpen(true);
  };

  const handleCloseDonation = () => {
    setDonationOpen(false);
  };

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenDonation={handleOpenDonation}
        onOpenContact={handleOpenContact}
      />
      <main className="flex-grow">
        <Hero 
          onOpenAuth={handleOpenAuth}
          onOpenDonation={handleOpenDonation}
          onOpenContact={handleOpenContact}
        />
        <About />
        <OurWork />
        <NewsEvents />
        <KosodoTeam />
      </main>

      <Auth 
        isOpen={authOpen} 
        onClose={handleCloseAuth}
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />

      <DonationModal
        isOpen={donationOpen}
        onClose={handleCloseDonation}
      />

      <ContactForm
        isOpen={contactOpen}
        onClose={handleCloseContact}
      />

      <Footer />
    </div>
  );
}

export default App;
