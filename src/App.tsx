import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero onNavigate={setActivePage} />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'certifications':
        return <Certifications />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(ellipse at center, #1e3a8a 0%, #1e40af 35%, #1e293b 100%)' }}>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}