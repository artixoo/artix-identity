import React from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import TransitionOverlay from './components/ui/TransitionOverlay';
import Starfield from './components/ui/Starfield';
import CustomCursor from './components/ui/CustomCursor';
import FloatingNav from './components/ui/FloatingNav';
import TacticalBot from './components/ui/TacticalBot';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden cursor-none">
      <CustomCursor />
      <Starfield />
      <FloatingNav />
      <TacticalBot />

      <SmoothScroll>
        <TransitionOverlay />

        <main className="relative z-10">
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="education"><Education /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="certifications"><Certifications /></section>
          <section id="achievements"><Achievements /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
      </SmoothScroll>
    </div>
  );
}

export default App;
