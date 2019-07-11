import React from 'react';
import './App.scss';

import { NavBar } from './components/NavBar'
import { Img2Palette } from './components/Img2Palette'
import { Footer } from './components/Footer'

function App() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <Img2Palette />
      </div>

      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  );
}

export default App;
