
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

  const mainImage = images[0];
  const otherImages = images.slice(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            data-ai-hint={mainImage.hint}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {otherImages.map((image, index) => (
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
    </div>
  );
}
