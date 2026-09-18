import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onPrintCV={() => setIsCVModalOpen(true)} />
      
      <main>
        <Hero onPrintCV={() => setIsCVModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Languages />
        <Education />
        <Contact />
      </main>

      <Footer />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
};

export default App;
