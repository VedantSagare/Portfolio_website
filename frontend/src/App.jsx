import { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a slight loading delay for smooth transition (optional)
    const timer = setTimeout(() => {
      setData(portfolioData);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading || !data) {
    return (
      <div className="app-loader">
        <div className="app-loader__spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero data={data.about} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Experience data={data.experiences} />
        <Projects data={data.projects} />
        <Achievements data={data.achievements} />
        <Education data={data.education} />
        <Contact socialLinks={data.socialLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
