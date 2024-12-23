import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import NewsEvents from './components/NewsEvents';
import KosodoTeam from './components/KosodoTeam';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Modal from './components/Modal';
import DonationModal from './components/DonationModal';
import SocialLinks from './components/SocialLinks';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [donationOpen, setDonationOpen] = useState(false);

  const handleOpenAuth = (type) => {
    setAuthType(type);
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenDonation={handleOpenDonation}
      />
      <SocialLinks />
      <main className="flex-grow">
        <Hero 
          onOpenAuth={handleOpenAuth}
          onOpenDonation={handleOpenDonation}
        />
        <About />
        <NewsEvents />
        <OurWork />
        <ContactUs />
        <KosodoTeam />
      </main>
      <Footer onOpenDonation={handleOpenDonation} />
      
      <Modal
        isOpen={authOpen}
        onClose={handleCloseAuth}
        title={authType === 'login' ? 'Login' : 'Sign Up'}
      >
        {/* Auth form content */}
      </Modal>

      <DonationModal
        isOpen={donationOpen}
        onClose={handleCloseDonation}
      />
    </div>
  );
}

export default App;
