"use client";
import { galleryConfig } from '@/config/galleryConfig';
import Image from 'next/image';

export default function Experience({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">The Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            From the venue and stage to the details that shaped the event.
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar">
          {galleryConfig.venue.map((src, index) => (
            <div 
              key={index}
              className="relative min-w-[80vw] md:min-w-[500px] aspect-[16/9] overflow-hidden rounded-xl cursor-pointer group bg-gray-100 snap-center shrink-0"
              onClick={() => onOpenLightbox(galleryConfig.venue, index)}
            >
              <Image
                src={src}
                alt={`Venue ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">Placeholder</div>';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}