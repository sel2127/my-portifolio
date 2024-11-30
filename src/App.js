import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TrainingCertifications from './components/TrainingCertifications'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <main className="container mx-auto px-12">
        <About />
        <Skills />
        <Projects />
        <TrainingCertifications />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;
