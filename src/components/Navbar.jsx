import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0B0E14]/80 backdrop-blur-xl border-white/5 shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-2xl font-black text-white tracking-tight group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:scale-105 transition-transform">
            <Activity className="text-white" strokeWidth={3} />
          </div>
          <span>Athletix</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <a href="/#features" className="text-gray-400 font-semibold hover:text-white transition-colors">Fitur</a>
          <a href="/#how-it-works" className="text-gray-400 font-semibold hover:text-white transition-colors">Cara Kerja</a>
          <Link to="/panduan-latihan" className="text-gray-400 font-semibold hover:text-white transition-colors">Panduan Latihan</Link>
          <a href="/#pricing" className="text-gray-400 font-semibold hover:text-white transition-colors">Pro</a>
        </nav>
        <Link to="/" className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-glow-primary hover:shadow-[0_0_30px_rgba(45,91,255,0.4)] hover:-translate-y-0.5">
          Mulai Gratis
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
