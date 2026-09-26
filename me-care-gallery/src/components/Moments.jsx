"use client";
import { galleryConfig } from '@/config/galleryConfig';

export default function Moments({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Moments from the Conclave</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            People, conversations and experiences from across the two-day gathering.
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryConfig.moments.map((src, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid bg-gray-100"
              onClick={() => onOpenLightbox(galleryConfig.moments, index)}
            >
              <img
                src={src}
                alt={`Moment ${index + 1}`}
                className="w-full h-auto min-h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<div class="w-full aspect-[4/5] flex items-center justify-center bg-gray-200 text-gray-500">Placeholder</div>';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}