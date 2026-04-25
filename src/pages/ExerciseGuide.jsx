import React from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import exerciseData from '../data/exercises.json';

const totalAllExercises = Object.values(exerciseData).reduce((sum, cat) => sum + cat.exercises.length, 0);

const ExerciseGuide = () => {
  const categories = [
    {
      id: 'cardio',
      title: exerciseData.cardio.title,
      description: exerciseData.cardio.description,
      image: 'https://www.justrunlah.com/wp-content/uploads/2016/04/runner-track-starting-foot.jpg',
      count: `${exerciseData.cardio.exercises.length} Program`
    },
    {
      id: 'bodyonly',
      title: exerciseData.bodyonly.title,
      description: exerciseData.bodyonly.description,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      count: `${exerciseData.bodyonly.exercises.length} Program`
    },
    {
      id: 'weights',
      title: exerciseData.weights.title,
      description: exerciseData.weights.description,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      count: `${exerciseData.weights.exercises.length} Program`
    },
    {
      id: 'machine',
      title: exerciseData.machine.title,
      description: exerciseData.machine.description,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      count: `${exerciseData.machine.exercises.length} Program`
    },
    {
      id: 'bands',
      title: exerciseData.bands.title,
      description: exerciseData.bands.description,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      count: `${exerciseData.bands.exercises.length} Program`
    },
    {
      id: 'other',
      title: exerciseData.other.title,
      description: exerciseData.other.description,
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
      count: `${exerciseData.other.exercises.length} Program`
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">PANDUAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">LATIHAN.</span></h1>
          <p className="text-gray-400 text-lg md:text-xl">Pilih kategori latihan yang sesuai dengan ketersediaan alat dan target fisik Anda hari ini.</p>
        </div>

        {/* ALL Exercises - Featured Card */}
        <Link to="/panduan-latihan/all" className="group relative h-[200px] rounded-[28px] overflow-hidden cursor-pointer block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-blue-600/20 to-purple-600/30 z-10"></div>
          <div className="absolute inset-0 bg-[#07090D]/60 z-10 group-hover:bg-[#07090D]/40 transition-all duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
            alt="All Exercises"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-between px-8 md:px-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 group-hover:bg-primary/40 transition-all duration-500">
                <Layers size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white">Semua Latihan</h3>
                <p className="text-gray-300 text-sm mt-1">Jelajahi seluruh koleksi {totalAllExercises} program latihan berkualitas tinggi.</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 transform transition-all duration-500 group-hover:bg-primary group-hover:scale-110 shadow-glow-primary shrink-0">
              <ChevronRight size={24} className="text-white" />
            </div>
          </div>
        </Link>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/panduan-latihan/${category.id}`} key={category.id} className="group relative h-[300px] rounded-[28px] overflow-hidden cursor-pointer block">
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 bg-[#07090D]/40 z-10 transition-opacity duration-500 group-hover:opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/80 to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">
                <div>
                  <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wider uppercase">
                    {category.count}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{category.title}</h3>
                  <p className="text-gray-300 text-xs max-w-[90%] line-clamp-2">{category.description}</p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 transform transition-all duration-500 group-hover:bg-primary group-hover:scale-110 shadow-glow-primary shrink-0">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExerciseGuide;
