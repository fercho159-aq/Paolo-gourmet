import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center text-foreground transition-colors hover:text-primary">
      <Image
        src="/Imagen/logo/4.png"
        alt="paolo gourmet logo"
        width={200}
        height={200}
        className="h-auto w-auto"
      />
    </a>
  );
}
