import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center text-foreground transition-colors hover:text-primary">
      <Image
        src="/Imagen/logo/logo (1).png"
        alt="paolo gourmet logo"
        width={6}
        height={6}
        className="h-12 w-auto"
      />
    </a>
  );
}
