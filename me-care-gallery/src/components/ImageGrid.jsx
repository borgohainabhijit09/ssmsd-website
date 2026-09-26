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
            className={`${spanClass} relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100`}
            onClick={() => onImageClick(index)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
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