import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#07090D] pt-24 pb-10 mt-24 relative overflow-hidden border-t border-white/5">
      {/* Massive Watermark */}
      <div className="absolute text-[250px] font-black text-white/[0.02] -top-12 -left-5 pointer-events-none tracking-tighter select-none">
        ATHLETIX
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-20 relative z-10">
        
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-3 text-2xl font-black text-white tracking-tight mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary">
              <Activity className="text-white" strokeWidth={3} />
            </div>
            <span>Athletix</span>
          </a>
          <p className="text-gray-400 max-w-xs font-medium">Temukan keseimbangan aktifmu setiap hari dengan cara yang menyenangkan.</p>
        </div>
        
        <div>
          <h4 className="text-sm font-extrabold text-white mb-6 tracking-widest">PRODUK</h4>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Fitur</a>
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Cara Kerja</a>
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Harga</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-extrabold text-white mb-6 tracking-widest">DUKUNGAN</h4>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Pusat Bantuan</a>
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Privasi</a>
            <a href="#" className="text-gray-400 font-medium hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-extrabold text-white mb-6 tracking-widest">SIAP MEMULAI?</h4>
          <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-glow-primary hover:shadow-[0_0_30px_rgba(45,91,255,0.4)] w-full text-center">
            Unduh Sekarang
          </button>
        </div>
        
      </div>
      
      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-sm font-medium text-gray-400">
        <p>&copy; 2026 Athletix. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
