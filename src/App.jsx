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
import { Routes, Route } from 'react-router-dom';
import ChecklistLanding from './components/pages/ChecklistLanding';

const Home = () => {
    return (
        <>
            <Hero />
            <Ticker />
            <Services />
            <Stats />
            <Work />
            <Process />
            <About />
            <CtaBand />
            <Contact />
        </>
    )
}

export default function App() {
  return (
    <>
      <Header />
      
      <main id="top">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<ChecklistLanding />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}