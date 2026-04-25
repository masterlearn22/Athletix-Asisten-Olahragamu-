import React from 'react';
import { ArrowRight } from 'lucide-react';

const Steps = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Decorative background curve/line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">LANGKAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">MUDAH.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tiga langkah sederhana untuk memulai transformasi kebugaran Anda tanpa tekanan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Step 1 */}
          <div className="group relative h-[500px] rounded-[40px] overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:shadow-strong">
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80" 
              alt="Isi Profil" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Huge Number */}
            <div className="absolute top-6 right-8 text-8xl font-black text-white/10 z-20 transition-all duration-500 group-hover:text-primary/40 group-hover:-translate-y-2 pointer-events-none">01</div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transform transition-all duration-500 group-hover:border-primary/30 group-hover:bg-[#12161F]/80">
                <h3 className="text-2xl font-extrabold mb-3 text-white flex items-center justify-between">
                  Isi Profil 
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-all duration-500 group-hover:bg-primary group-hover:translate-x-2">
                    <ArrowRight size={18} className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">Ceritakan sedikit tentang kondisi fisik, rutinitas, dan tujuan spesifik kebugaran Anda.</p>
              </div>
            </div>
          </div>

          {/* Step 2 (Staggered) */}
          <div className="group relative h-[500px] rounded-[40px] overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(45,91,255,0.2)] lg:translate-y-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" 
              alt="Dapatkan Rekomendasi" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Huge Number */}
            <div className="absolute top-6 right-8 text-8xl font-black text-white/10 z-20 transition-all duration-500 group-hover:text-primary/60 group-hover:-translate-y-2 pointer-events-none">02</div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <div className="bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-[28px] p-8 transform transition-all duration-500 group-hover:bg-primary/30 group-hover:border-primary/50">
                <h3 className="text-2xl font-extrabold mb-3 text-white flex items-center justify-between">
                  Rekomendasi 
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform transition-all duration-500 group-hover:bg-white group-hover:translate-x-2">
                    <ArrowRight size={18} className="text-white group-hover:text-primary transition-colors" />
                  </div>
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed font-medium">Sistem cerdas kami memproses data dan langsung membuatkan jadwal 95% Match.</p>
              </div>
            </div>
          </div>

          {/* Step 3 (Staggered Further) */}
          <div className="group relative h-[500px] rounded-[40px] overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:shadow-strong lg:translate-y-24">
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80" 
              alt="Beri Feedback" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Huge Number */}
            <div className="absolute top-6 right-8 text-8xl font-black text-white/10 z-20 transition-all duration-500 group-hover:text-primary/40 group-hover:-translate-y-2 pointer-events-none">03</div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transform transition-all duration-500 group-hover:border-primary/30 group-hover:bg-[#12161F]/80">
                <h3 className="text-2xl font-extrabold mb-3 text-white flex items-center justify-between">
                  Beri Feedback 
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-all duration-500 group-hover:bg-primary group-hover:translate-x-2">
                    <ArrowRight size={18} className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">Terlalu berat atau kurang tantangan? Beri rating dan jadwal besok akan disesuaikan.</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Spacer for the staggered layout on large screens so it doesn't overlap the section below */}
        <div className="hidden lg:block h-32"></div>
      </div>
    </section>
  );
};

export default Steps;
