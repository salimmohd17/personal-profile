import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const copyEmail = () => {
    const email = 'sirleemmuhammad18@gmail.com';
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    triggerToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="site-wrapper">
      <Toast message={toastMessage} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero copyEmail={copyEmail} copiedEmail={copiedEmail} />
        <About />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Skills />
        <Experience />
        <Impact />
        <Contact copyEmail={copyEmail} copiedEmail={copiedEmail} />
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Footer />
    </div>
  );
}
