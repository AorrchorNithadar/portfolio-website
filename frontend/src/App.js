import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TH');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  

  return (
    <Router>
      <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;