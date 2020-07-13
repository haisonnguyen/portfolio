import React from 'react';

import opener from '../opener.jpg';
import { Image } from 'react-bootstrap/';

import Navigation from './Navigation';


export default function Home() {
  return (
    <section id="home" style={{ position: "relative", textAlign: "center" }}>
      <Image src={opener} fluid />

      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -25%)", fontSize:"24pt" }}>
      <p id="header1" className="hidden">Hi, my name is Haison Nguyen.</p>
      <p id="header2" className="hidden"> I'm a Full Stack Engineer.</p>
      </div>
      <Navigation />
    </section>
  )
}