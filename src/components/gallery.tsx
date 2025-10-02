
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type ImageProps = {
  src: string;
  alt: string;
  hint?: string;
};

export function Gallery({ images }: { images: ImageProps[] }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            data-ai-hint={image.hint}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

    