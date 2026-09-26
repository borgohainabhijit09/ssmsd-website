"use client";
import { galleryConfig } from '@/config/galleryConfig';
import Image from 'next/image';

export default function Community({ onOpenLightbox }) {
  return (
    <section className="py-20 px-6 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">Together for Better Health</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting people through knowledge, collaboration and a shared commitment to better health.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {galleryConfig.people.map((src, index) => (
          <div 
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group bg-gray-100"
            onClick={() => onOpenLightbox(galleryConfig.people, index)}
          >
            <Image
              src={src}
              alt={`Community ${index + 1}`}
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
    </section>
  );
}