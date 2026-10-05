import IntroLoader from '@/components/IntroLoader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GwdInAction from '@/components/GwdInAction';
import People from '@/components/People';
import OrgMap from '@/components/OrgMap';
import WhatWeCreate from '@/components/WhatWeCreate';
import GwdNow from '@/components/GwdNow';
import WhatsNext from '@/components/WhatsNext';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <IntroLoader />
      <Navigation />
      <main>
        <Hero />
        <About />
        <GwdInAction />
        <OrgMap />
        <People />
        <WhatWeCreate />
        <GwdNow />
        <WhatsNext />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
