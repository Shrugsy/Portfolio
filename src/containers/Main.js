import React from 'react';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

// rough layout
// sticky navbar (side?)
// intro landing
// scroll to links
// 

export default Main;
