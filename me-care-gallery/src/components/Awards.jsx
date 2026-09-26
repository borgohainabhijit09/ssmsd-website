"use client";
import { galleryConfig } from '@/config/galleryConfig';
import Image from 'next/image';

export default function Awards({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Felicitation & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Celebrating contribution, collaboration and excellence in healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            className="md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-xl cursor-pointer group bg-gray-100"
            onClick={() => onOpenLightbox(galleryConfig.awards, 0)}
          >
            <Image
              src={galleryConfig.awards[0]}
              alt="Award 1"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">Placeholder</div>';
              }}
            />
          </div>
          
          {galleryConfig.awards.slice(1).map((src, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-gray-100"
              onClick={() => onOpenLightbox(galleryConfig.awards, index + 1)}
            >
              <Image
                src={src}
                alt={`Award ${index + 2}`}
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