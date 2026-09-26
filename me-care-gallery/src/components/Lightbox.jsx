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