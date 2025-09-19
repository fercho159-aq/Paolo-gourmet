
import React from 'react';
import Image from 'next/image';

export function LogoBlanco() {
  return (
    <a href="/" className="flex items-center text-foreground transition-colors hover:text-primary">
      <Image
        src="/Imagen/logo/blanco.png"
        alt="paolo gourmet logo"
        width={8}
        height={8}
        className="h-20 w-auto"
      />
    </a>
  );
}
