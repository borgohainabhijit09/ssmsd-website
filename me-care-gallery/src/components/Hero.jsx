"use client";
import { galleryConfig } from '@/config/galleryConfig';

export default function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery-start').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center bg-[#123B6D] overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${galleryConfig.hero}')` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#123B6D] via-[#123B6D]/80 to-transparent" />
      
      <div className="container relative z-20 mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[#D62839] font-bold tracking-wider text-sm md:text-base mb-4">
            THE 5TH ME-CARE CONCLAVE
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Me-Care Conclave 2026
          </h1>
          <h2 className="text-xl md:text-3xl text-white/90 mb-4">
            Metabolic, Cardiac & Renal
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
            Moments from a gathering of healthcare professionals, experts and participants working together for better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button 
              onClick={scrollToGallery}
              className="bg-[#D62839] hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Explore Moments
            </button>
            <span className="text-white/60 text-sm font-medium">
              27–28 June 2026 · Hotel Sinclairs, Siliguri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}