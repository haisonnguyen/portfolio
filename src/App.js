import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <>
      {/* Home  */}
      <Home />
      {/* Nav */}
      <Navigation />

      {/* About Me*/}
      <About />
      {/* Resume */}
      <Resume/>
      {/* Contact */}
      <Contact/>
    </>
  );
}

export default App;
