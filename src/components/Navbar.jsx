import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background-main/80 backdrop-blur-xl border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-2xl font-black text-white tracking-tight">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary">
            <Activity className="text-white" strokeWidth={3} />
          </div>
          <span>Athletix</span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-400 font-semibold hover:text-white transition-colors">Fitur</a>
          <a href="#how-it-works" className="text-gray-400 font-semibold hover:text-white transition-colors">Cara Kerja</a>
          <a href="#pricing" className="text-gray-400 font-semibold hover:text-white transition-colors">Pro</a>
        </nav>
        <a href="#get-started" className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-glow-primary hover:shadow-[0_0_30px_rgba(45,91,255,0.4)] hover:-translate-y-0.5">
          Mulai Gratis
        </a>
      </div>
    </header>
  );
};

export default Navbar;
