import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; // YENİ EKLENDİ

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        {/* YENİ ROTA EKLENDİ */}
        <Route path="/hizmetlerimiz" element={<Services />} /> 
      </Routes>
    </BrowserRouter>
  );
}