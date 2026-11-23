import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Ticker from './components/sections/Ticker';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Work from './components/sections/Work';
import Process from './components/sections/Process';
import About from './components/sections/About';
import CtaBand from './components/sections/CtaBand';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <Services />
        <Stats />
        <Work />
        <Process />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}