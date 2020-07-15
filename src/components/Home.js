import React from 'react';

import opener from '../me_rowena.JPEG';
import { Button, Image } from 'react-bootstrap/';

export default function Home() {
  return (
    <section id="home">
      <Image src={opener} fluid/>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -20%)", fontSize: "24pt" }}>
        <div>
          <p id="header1" className="hidden">Hi, my name is Haison Nguyen.</p>
          <p id="header2" className="hidden">I'm a Full Stack Engineer.</p>
          <div style={{margin:"auto",width:"30%"}}>
          <Button variant="dark" className="hidden" id="check" href="#about" style={{zIndex: "100"}}>Check me out</Button>{' '}
          </div>
        </div>
      </div>
    </section>
  )
}