import React from 'react';
import { Zap, ShieldCheck, Flame, Clock, CheckCircle, Heart, Activity, Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[95vh] flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background elements specific to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-blue-400 font-bold text-sm mb-8 shadow-[0_0_20px_rgba(45,91,255,0.2)]">
            <Zap size={16} className="fill-current text-accent" /> Active Balance Concept
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black leading-[1.05] tracking-tight mb-8">
            KESEIMBANGAN AKTIF<br />
            <span className="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              TANPA INTIMIDASI.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
            Desain khusus untuk non-atlet. Athletix memandu Anda dengan rekomendasi latihan yang ramah, aman, dan sangat memotivasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-2xl shadow-glow-primary hover:bg-blue-600 hover:-translate-y-1 transition-all hover:shadow-[0_0_40px_rgba(45,91,255,0.5)] flex items-center justify-center gap-2">
              Mulai Perjalanan <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <Play size={20} className="fill-current text-gray-300" /> Lihat Demo
            </button>
          </div>
        </div>

        {/* Visual Mockups - Enhanced 3D Cluster */}
        <div className="flex-1 relative h-[600px] w-full flex justify-center items-center perspective-[1200px] group mt-10 lg:mt-0 z-10">
          
          {/* Card 1: Daily Goal (Back Left) */}
          <div className="hidden sm:block absolute w-[280px] bg-surface-card/90 rounded-[32px] p-6 border border-white/5 backdrop-blur-xl z-10 
                        transform -rotate-y-12 -rotate-x-6 translate-z-[-100px] -translate-x-[180px] -translate-y-[130px] opacity-80
                        transition-all duration-700 ease-out group-hover:opacity-100 group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:translate-z-[-50px] group-hover:-translate-x-[240px] group-hover:-translate-y-[160px] shadow-2xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Flame size={24} className="fill-current" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-gray-400 tracking-wide uppercase">Kalori Harian</div>
                <div className="text-2xl font-black text-white">320 <span className="text-sm text-gray-500 font-bold">/ 500</span></div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-accent to-orange-400 w-[64%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 w-1/2 skew-x-12 translate-x-[-150%] animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Main Dashboard (Center) */}
          <div className="absolute w-[360px] md:w-[400px] bg-[#12161F] rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-xl z-30 
                        transform rotate-y-6 rotate-x-2 translate-z-[50px]
                        transition-all duration-700 ease-out group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:translate-z-[100px] group-hover:-translate-y-6">
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center font-black text-xl text-white shadow-lg">AL</div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-[#12161F] flex items-center justify-center">
                    <CheckCircle size={10} className="text-[#12161F] fill-current" />
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-white">Halo, Alex!</h4>
                  <div className="text-secondary text-sm font-bold flex items-center gap-1.5 mt-0.5">
                    <Flame size={14} className="fill-current text-accent" /> 5 Hari Streak
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-3xl p-6 border border-white/5 relative overflow-hidden mb-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -z-10"></div>
              <div className="text-gray-400 font-bold text-sm mb-1">BMI Saat Ini</div>
              <div className="flex items-end justify-between">
                <div className="flex items-end gap-3">
                  <div className="text-6xl font-black text-white leading-none tracking-tighter">22.5</div>
                  <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-lg text-sm font-extrabold mb-1">Normal</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                 <Heart size={24} className="text-rose-500 fill-current mb-3 opacity-80" />
                 <div className="text-3xl font-black text-white">82<span className="text-sm text-gray-500 font-bold ml-1">BPM</span></div>
               </div>
               <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                 <Activity size={24} className="text-blue-400 mb-3 opacity-80" />
                 <div className="text-3xl font-black text-white">4.2<span className="text-sm text-gray-500 font-bold ml-1">KM</span></div>
               </div>
            </div>

          </div>

          {/* Card 3: Suggested Workout (Front Right) */}
          <div className="absolute w-[340px] bg-gradient-to-b from-[#1A202C] to-[#12161F] rounded-[32px] p-8 border border-primary/40 shadow-[0_20px_60px_rgba(45,91,255,0.2)] backdrop-blur-xl z-40
                        transform -rotate-y-12 rotate-x-6 translate-z-[120px] translate-y-[140px] translate-x-[180px]
                        transition-all duration-700 ease-out group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:translate-z-[200px] group-hover:translate-y-[180px] group-hover:translate-x-[260px]">
            <div className="flex justify-between items-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/20 border border-accent/30 text-accent text-xs font-black uppercase tracking-wider">
                <ShieldCheck size={14} className="fill-current" /> Low Impact
              </div>
              <div className="text-white font-black text-sm bg-primary px-3 py-1.5 rounded-xl shadow-glow-primary">95% MATCH</div>
            </div>
            <h3 className="text-2xl font-black text-white mb-2 leading-tight">Jalan Cepat Pagi</h3>
            <p className="text-sm text-gray-400 font-medium mb-6">Cocok untuk pemulihan ringan</p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-black/40 p-3.5 rounded-xl font-bold text-sm flex items-center gap-2 text-white border border-white/5">
                <Flame size={18} className="text-accent fill-current" /> 150 kkal
              </div>
              <div className="bg-black/40 p-3.5 rounded-xl font-bold text-sm flex items-center gap-2 text-white border border-white/5">
                <Clock size={18} className="text-blue-400 fill-current" /> 20 mnt
              </div>
            </div>
            
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-glow-primary text-lg">
              <Play size={20} className="fill-current" /> Mulai Sekarang
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
