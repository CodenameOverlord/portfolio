import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const backgroundImageUrl = process.env.PUBLIC_URL + '/images/bgImage.jpg';

function App() {
  return (
    <div className="App">
      {/* Background Image Overlay */}
      <div
        className="background-overlay"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>

      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
