"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import CTA from '@/components/CTA';
import Lightbox from '@/components/Lightbox';
import { galleryConfig } from '@/config/galleryConfig';

export default function Home() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const [activeTab, setActiveTab] = useState('highlights');

  const tabs = [
    { id: 'highlights', label: 'Highlights' },
    { id: 'moments', label: 'Moments' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'awards', label: 'Felicitation' },
    { id: 'people', label: 'Community' }
  ];

  const currentImages = galleryConfig[activeTab] || [];

  const openLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      images: currentImages,
      currentIndex: index
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction) => {
    setLightboxState(prev => {
      let newIndex = prev.currentIndex;
      if (direction === 'next') {
        newIndex = (prev.currentIndex + 1) % prev.images.length;
      } else {
        newIndex = (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      }
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero />
      <Intro />
      
      {/* Filterable Gallery Section */}
      <section className="py-20 px-6 bg-[#F6F8FB]" id="gallery-start">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Event Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Me-Care Conclave 2026 moments, speakers, and more.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#123B6D] text-white border-2 border-[#123B6D]' 
                    : 'bg-transparent text-gray-600 border-2 border-gray-300 hover:border-[#123B6D] hover:text-[#123B6D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Gallery Grids (Pre-rendered to prevent flashing) */}
          <div className="relative">
            {tabs.map(tab => (
              <div 
                key={tab.id}
                className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-opacity duration-500 ${
                  activeTab === tab.id ? 'block animate-gallery' : 'hidden'
                }`}
              >
                {(galleryConfig[tab.id] || []).map((src, index) => (
                  <div 
                    key={src}
                    className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${tab.label} ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.parentElement.style.display = 'none';
                      }}
                    />
                    
                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123B6D]/90 via-[#123B6D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white font-semibold tracking-wide flex items-center gap-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D62839" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                          View Image
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {lightboxState.isOpen && (
        <Lightbox 
          images={lightboxState.images}
          currentIndex={lightboxState.currentIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </main>
  );
}
