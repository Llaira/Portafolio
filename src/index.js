import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Aboutme />
    <Skills />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

