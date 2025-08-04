import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
      <Image
        src="https://paologourmet.com.mx/logo.png"
        alt="paolo gourmet logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="font-body text-2xl font-bold tracking-tight">
        paolo gourmet
      </span>
    </a>
  );
}
