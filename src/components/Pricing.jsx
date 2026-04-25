import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">PILIH PAKETMU.</h2>
          <p className="text-gray-400 text-lg">Mulai gratis, tingkatkan kapan saja sesuai kebutuhan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Tier */}
          <div className="bg-surface-card rounded-[32px] p-10 border border-white/5 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-strong">
            <div className="mb-8 border-b border-white/5 pb-6">
              <h3 className="text-2xl font-extrabold text-gray-400 mb-3 tracking-tight">Basic</h3>
              <div className="text-4xl font-black text-white flex items-baseline gap-2">
                Gratis<span className="text-base text-gray-400 font-semibold">/selamanya</span>
              </div>
            </div>
            <ul className="mb-10 flex-1 space-y-4">
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Rekomendasi Latihan Harian</li>
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Pelacakan BMI Dasar</li>
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Filter Keamanan (Low Impact)</li>
              <li className="flex items-center gap-3 font-medium text-gray-500"><X size={20} className="text-gray-500" /> Analitik Progres Lanjutan</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-colors">
              Mulai Sekarang
            </button>
          </div>
          
          {/* Pro Tier */}
          <div className="bg-surface-card rounded-[32px] p-10 border border-primary shadow-glow-primary flex flex-col relative transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-px -right-px bg-secondary text-white px-6 py-2 text-sm font-extrabold rounded-tr-[32px] rounded-bl-[24px] tracking-wide shadow-[-5px_5px_15px_rgba(16,185,129,0.4)]">
              Paling Populer
            </div>
            <div className="mb-8 border-b border-white/5 pb-6">
              <h3 className="text-2xl font-extrabold text-primary mb-3 tracking-tight">Pro</h3>
              <div className="text-4xl font-black text-white flex items-baseline gap-2">
                Rp 49K<span className="text-base text-gray-400 font-semibold">/bulan</span>
              </div>
            </div>
            <ul className="mb-10 flex-1 space-y-4">
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Semua Fitur Basic</li>
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Program Khusus Otot Spesifik</li>
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Analitik & Grafik Progres</li>
              <li className="flex items-center gap-3 font-medium"><Check size={20} className="text-secondary" /> Bebas Iklan Selamanya</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-glow-primary hover:shadow-[0_0_30px_rgba(45,91,255,0.4)]">
              Coba Gratis 7 Hari
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
