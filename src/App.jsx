import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorWave from './components/CursorWave';

function App() {
  return (
    <>
      <CursorWave />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
