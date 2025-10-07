import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center text-foreground transition-colors hover:text-primary">
      <Image
        src="/Imagen/logo/logo (1).png"
        alt="paolo gourmet logo"
        width={8}
        height={8}
        className="h-20 w-auto"
      />
    </a>
  );
}

    