import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistType, setWaitlistType] = useState<'buyer' | 'supplier' | null>(null);

  const openWaitlist = (type: 'buyer' | 'supplier' = 'buyer') => {
    setWaitlistType(type);
    setIsWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans text-gray-900 selection:bg-amber-200 selection:text-pelatrade-900">
      <Navigation onOpenWaitlist={() => openWaitlist('buyer')} />

      <main>
        <Hero onOpenWaitlist={openWaitlist} />
        <Features />
        <HowItWorks />
        <Categories />
      </main>

      <Footer />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        type={waitlistType}
      />
    </div>
  );
}

export default App;
