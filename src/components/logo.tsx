import React from 'react';

const CheeseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3.5 6.5l17-3 1 11-18 4-3-9.5 3-2.5z" />
    <path d="M11 12a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M8 8.5a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M7.5 14a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M15 9.5a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M16 14.5a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
      <CheeseIcon className="h-8 w-8" />
      <span className="font-headline text-2xl font-bold tracking-tight">
        paolo gourmet
      </span>
    </a>
  );
}
