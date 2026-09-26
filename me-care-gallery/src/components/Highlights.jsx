"use client";
import { galleryConfig } from '@/config/galleryConfig';
import ImageGrid from './ImageGrid';

export default function Highlights({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Event Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A glimpse into the moments that made Me-Care Conclave 2026 memorable.
          </p>
        </div>
        <ImageGrid 
          images={galleryConfig.highlights} 
          onImageClick={(index) => onOpenLightbox(galleryConfig.highlights, index)} 
        />
      </div>
    </section>
  );
}