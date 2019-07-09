import React from 'react';
import './App.scss';

import { NavBar } from './components/NavBar'
import { Img2Palette } from './components/Img2Palette'

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
            <div className="container">
                <div className="tabs is-centered">
                    <ul>
                        <li><p>And this is the bottom</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default App;
