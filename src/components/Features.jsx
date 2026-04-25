import React from 'react';
import { Target, ShieldPlus, TrendingUp, CheckCircle, Flame, HeartPulse } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-[100px]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4 tracking-tight">FITUR<br />UNGGULAN.</h2>
          <p className="text-gray-400 text-lg max-w-xl">Lebih dari sekadar pelacak. Ini adalah asisten kebugaran pribadi Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[minmax(300px,auto)]">
          
          {/* Large Item: Rekomendasi Personal */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 bg-surface-card rounded-[32px] p-10 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary flex flex-col group">
            {/* Background blur/glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(45,91,255,0.2)]">
                  <Target size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-extrabold mb-3 tracking-tight">Rekomendasi Personal</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">Dapatkan jadwal dan jenis latihan yang disesuaikan secara dinamis dengan kondisi fisik serta rutinitas harian Anda.</p>
              </div>
            </div>
            
            {/* Interactive Mockup Container */}
            <div className="relative flex-1 mt-4 min-h-[240px] w-full flex items-center justify-center">
              
              {/* Floating Daily Plan Mockups */}
              <div className="absolute left-0 bottom-0 w-[85%] sm:w-[60%] max-w-[320px] bg-[#1A202C] rounded-2xl p-5 border border-white/10 shadow-strong transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10 group-hover:-translate-y-4">
                 <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                   <span className="text-sm font-extrabold text-white">Rencana Hari Ini</span>
                   <span className="text-xs px-2 py-1 bg-primary/20 text-blue-400 rounded-md font-bold">Leg Day</span>
                 </div>
                 
                 <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl mb-3 hover:bg-white/10 transition-colors cursor-pointer">
                   <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><Flame size={20} /></div>
                   <div className="flex-1">
                     <div className="text-sm font-bold text-white">Squat Ringan</div>
                     <div className="text-xs text-gray-400">3 Set x 10 Rep</div>
                   </div>
                   <CheckCircle size={20} className="text-primary" />
                 </div>
                 
                 <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                   <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400"><HeartPulse size={20} /></div>
                   <div className="flex-1">
                     <div className="text-sm font-bold text-white">Jalan Cepat</div>
                     <div className="text-xs text-gray-400">15 Menit</div>
                   </div>
                   <div className="w-5 h-5 rounded-full border-2 border-gray-600"></div>
                 </div>
              </div>

              {/* Decorative Chart (moved to right side) */}
              <div className="absolute right-0 bottom-0 flex items-end gap-3 h-[160px] w-[40%] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex-1 bg-white/5 rounded-t-xl h-[30%] transition-all duration-1000 group-hover:h-[50%] group-hover:bg-primary/20"></div>
                <div className="flex-1 bg-white/5 rounded-t-xl h-[50%] transition-all duration-1000 group-hover:h-[70%] group-hover:bg-primary/40"></div>
                <div className="flex-1 bg-primary rounded-t-xl h-[100%] shadow-[0_0_20px_rgba(45,91,255,0.5)] transform origin-bottom scale-y-90 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex-1 bg-white/5 rounded-t-xl h-[60%] transition-all duration-1000 group-hover:h-[80%] group-hover:bg-primary/30"></div>
              </div>
            </div>
          </div>
          
          {/* Medium Item: Aman & Terukur */}
          <div className="col-span-1 bg-surface-card rounded-[32px] p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-glow-secondary flex flex-col relative overflow-hidden group">
            <ShieldPlus size={140} className="absolute -right-8 -top-8 text-white/[0.02] group-hover:text-secondary/10 transition-colors duration-500 transform group-hover:scale-110 pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <ShieldPlus size={28} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold mb-3 tracking-tight relative z-10">Aman & Terukur</h3>
            <p className="text-gray-400 leading-relaxed text-sm relative z-10">Setiap latihan melewati pre-filtering keamanan. Tidak ada risiko cedera bagi pemula.</p>
            
            {/* Interactive progress element */}
            <div className="mt-auto pt-8 relative z-10">
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                <span>Risk Level</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">100% Safe</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[10%] group-hover:w-[100%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              </div>
            </div>
          </div>
          
          {/* Medium Item: Pantau Progres */}
          <div className="col-span-1 bg-surface-card rounded-[32px] p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-glow-accent flex flex-col relative overflow-hidden group">
            <TrendingUp size={140} className="absolute -right-8 -bottom-8 text-white/[0.02] group-hover:text-accent/10 transition-colors duration-500 transform group-hover:scale-110 pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <TrendingUp size={28} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold mb-3 tracking-tight relative z-10">Pantau Progres</h3>
            <p className="text-gray-400 leading-relaxed text-sm relative z-10">Lacak perubahan BMI dan pembakaran kalori harian dengan visualisasi data memukau.</p>
            
            {/* Interactive chart line */}
            <div className="mt-auto pt-8 relative z-10 flex items-end justify-between h-20 gap-1.5">
              {[30, 45, 25, 60, 50, 80, 100].map((val, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-white/10 rounded-t-sm transition-all duration-500 ease-out group-hover:bg-accent/80 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  style={{ 
                    height: '20%', 
                    '--hover-height': `${val}%` 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.height = e.currentTarget.style.getPropertyValue('--hover-height')}
                  onMouseLeave={(e) => e.currentTarget.style.height = '20%'}
                ></div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
