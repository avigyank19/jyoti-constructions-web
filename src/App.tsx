import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StatsAndClients } from './components/StatsAndClients';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MailClient } from './components/MailClient';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsAndClients />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MailClient />
    </div>
  );
}
