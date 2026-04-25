import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseGuide from './pages/ExerciseGuide';
import CategoryDetail from './pages/CategoryDetail';

function App() {
  return (
    <>
      <div className="bg-glow glow-blue"></div>
      <div className="bg-glow glow-teal"></div>
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panduan-latihan" element={<ExerciseGuide />} />
          <Route path="/panduan-latihan/:categoryId" element={<CategoryDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
