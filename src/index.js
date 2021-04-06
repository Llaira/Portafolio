import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Aboutme />
    <Projects />
    <Skills />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

