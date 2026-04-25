import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import exerciseData from '../data/exercises.json';

// Map bodyPart key -> image path in /public/exercises/
const bodyPartImages = {
  chest: '/exercises/chest.png',
  back: '/exercises/back.png',
  shoulders: '/exercises/shoulders.png',
  biceps: '/exercises/biceps.png',
  triceps: '/exercises/triceps.png',
  abs: '/exercises/abs.png',
  quads: '/exercises/quads.png',
  hamstrings: '/exercises/hamstrings.png',
  glutes: '/exercises/glutes.png',
  calves: '/exercises/calves.png',
  forearms: '/exercises/forearms.png',
  traps: '/exercises/traps.png',
  neck: '/exercises/neck.png',
  fullbody: '/exercises/fullbody.png',
};

// Build the "all" category by combining all exercises
const allExercises = Object.values(exerciseData).flatMap(cat => cat.exercises);
allExercises.sort((a, b) => b.rating - a.rating);

const allCategory = {
  title: 'Semua Latihan',
  description: 'Seluruh koleksi program latihan berkualitas tinggi dari semua kategori.',
  color: 'from-primary to-blue-400',
  exercises: allExercises
};

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const data = categoryId === 'all' ? allCategory : exerciseData[categoryId];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 20;

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // If category not found, show error state
  if (!data) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-4">Kategori Tidak Ditemukan</h1>
        <Link to="/panduan-latihan" className="text-primary hover:underline">Kembali ke Panduan</Link>
      </div>
    );
  }

  // Filter exercises based on search query
  const filteredExercises = useMemo(() => {
    if (!searchQuery.trim()) return data.exercises;
    const q = searchQuery.toLowerCase().trim();
    return data.exercises.filter(ex => 
      ex.name.toLowerCase().includes(q) ||
      (ex.bodyPart && ex.bodyPart.toLowerCase().includes(q)) ||
      (ex.level && ex.level.toLowerCase().includes(q))
    );
  }, [data.exercises, searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredExercises.length / itemsPerPage);
  const currentItems = filteredExercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getExerciseImage = (exercise) => {
    // Priority 1: Unique per-exercise image from open-source DB
    if (exercise.image) {
      return (
        <img 
          src={exercise.image} 
          alt={exercise.name} 
          className="w-full h-full object-cover rounded-xl" 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = bodyPartImages[exercise.bodyPart] || bodyPartImages.fullbody;
          }}
        />
      );
    }
    // Priority 2: Body part anatomical image
    const imgSrc = bodyPartImages[exercise.bodyPart] || bodyPartImages.fullbody;
    return <img src={imgSrc} alt={exercise.bodyPart} className="w-full h-full object-cover rounded-xl" loading="lazy" />;
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Navigation */}
        <Link to="/panduan-latihan" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
            <ArrowLeft size={16} />
          </div>
          <span className="font-semibold text-sm">Kembali ke Kategori</span>
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <div className={`inline-block w-16 h-2 rounded-full bg-gradient-to-r ${data.color} mb-6`}></div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">{data.title}</h1>
          <p className="text-lg text-gray-400 max-w-2xl">{data.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/5 text-white/80 font-semibold text-xs border border-white/10">
              Total {data.exercises.length} Program Latihan
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Cari exercise... (nama, body part, atau level)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-2xl bg-surface-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-sm font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-gray-400">
              Ditemukan <span className="text-white font-bold">{filteredExercises.length}</span> hasil untuk "<span className="text-primary">{searchQuery}</span>"
            </span>
          </div>
        )}

        {/* Exercises List */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          {currentItems.length > 0 ? (
            currentItems.map((ex, index) => (
              <div key={`${ex.id}-${index}`} className="bg-surface-card border border-white/5 rounded-2xl p-4 md:p-5 flex items-center gap-4 hover:border-white/10 hover:bg-[#12161F] transition-all duration-300 group cursor-pointer">
                
                {/* Icon Box */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0 border border-white/5 overflow-hidden">
                  {getExerciseImage(ex)}
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0 pl-2">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors truncate">
                    {ex.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest
                      ${ex.level === 'Pemula' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                        ex.level === 'Menengah' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 
                        'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {ex.level}
                    </span>
                    {ex.bodyPart && (
                      <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-white/5 text-gray-400 border border-white/5">
                        {ex.bodyPart}
                      </span>
                    )}
                    {ex.rating && (
                      <span className="inline-block px-2 py-1 rounded-md text-[10px] font-bold text-amber-400">
                        ★ {ex.rating}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 border border-white/5 group-hover:border-transparent">
                  <ChevronRight size={24} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-2">
                <Search size={48} className="mx-auto opacity-30" />
              </div>
              <p className="text-gray-400 text-lg font-semibold">Tidak ada exercise ditemukan</p>
              <p className="text-gray-500 text-sm mt-1">Coba kata kunci lain atau hapus pencarian.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-gray-400 font-semibold">
              Halaman <span className="text-white">{currentPage}</span> dari <span className="text-white">{totalPages}</span>
            </div>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors border border-white/10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoryDetail;
