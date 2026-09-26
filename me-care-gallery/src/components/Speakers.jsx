"use client";
import { galleryConfig } from '@/config/galleryConfig';
import Image from 'next/image';

export default function Speakers({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Voices in Healthcare</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Experts and professionals sharing knowledge, experience and perspectives.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {galleryConfig.speakers.map((src, index) => (
            <div 
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group bg-gray-200 shadow-sm hover:shadow-md transition-shadow"
              onClick={() => onOpenLightbox(galleryConfig.speakers, index)}
            >
              <Image
                src={src}
                alt={`Speaker ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-center px-2 text-sm">Speaker Placeholder</div>';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}