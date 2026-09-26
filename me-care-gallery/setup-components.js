const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const components = {
  'Lightbox.jsx': `
"use client";
import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate('prev');
    if (e.key === 'ArrowRight') onNavigate('next');
  }, [onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  if (currentIndex === null || !images) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
        <button onClick={onClose} className="p-2 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full">
          <X size={24} />
        </button>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full z-50"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="relative w-full max-w-6xl h-[85vh] mx-12 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[currentIndex]}
          alt="Gallery lightbox image"
          fill
          className="object-contain"
          unoptimized
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500 rounded-lg">Placeholder: ' + images[currentIndex].split('/').pop() + '</div>';
          }}
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full z-50"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
  `,
  'Hero.jsx': `
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
        style={{ backgroundImage: \`url('\${galleryConfig.hero}')\` }}
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
  `,
  'Intro.jsx': `
export default function Intro() {
  return (
    <section id="gallery-start" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#D62839] font-bold tracking-wider text-sm mb-4">OUR JOURNEY</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#172033] mb-8">Together for Better Health</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          The 5th Me-Care Conclave brought together healthcare professionals, experts and participants for meaningful discussions, knowledge sharing and collaboration around metabolic, cardiac and renal health.
        </p>
      </div>
    </section>
  );
}
  `,
  'ImageGrid.jsx': `
"use client";
import Image from 'next/image';

export default function ImageGrid({ images, onImageClick }) {
  const displayImages = images.slice(0, 6);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
      {displayImages.map((src, index) => {
        let spanClass = "col-span-1 row-span-1";
        if (index === 0) spanClass = "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
        else if (index === 3) spanClass = "col-span-1 row-span-2 md:col-span-1 md:row-span-2";
        
        return (
          <div 
            key={index} 
            className={\`\${spanClass} relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100\`}
            onClick={() => onImageClick(index)}
          >
            <Image
              src={src}
              alt={\`Gallery image \${index + 1}\`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">Placeholder</div>';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        );
      })}
    </div>
  );
}
  `,
  'Highlights.jsx': `
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
  `,
  'Moments.jsx': `
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
                alt={\`Moment \${index + 1}\`}
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
  `,
  'Speakers.jsx': `
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
                alt={\`Speaker \${index + 1}\`}
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
  `,
  'Awards.jsx': `
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
                alt={\`Award \${index + 2}\`}
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
  `,
  'Community.jsx': `
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
              alt={\`Community \${index + 1}\`}
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
  `,
  'Experience.jsx': `
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
                alt={\`Venue \${index + 1}\`}
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
  `,
  'CTA.jsx': `
export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#123B6D] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Together, We Can Build a Healthier Future
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
          Through collaboration, knowledge sharing and continued engagement, we work towards better health outcomes for our communities.
        </p>
        <button className="bg-[#D62839] hover:bg-red-600 text-white px-10 py-4 rounded-md font-medium transition-colors text-lg shadow-lg">
          Learn More About Us
        </button>
      </div>
    </section>
  );
}
  `
};

for (const [filename, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(componentsDir, filename), content.trim());
}

console.log("Components created successfully.");
