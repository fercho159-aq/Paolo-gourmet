"use client"

import { cn } from '@/lib/utils';
import React from 'react';

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative h-16 w-16 animate-spin rounded-full border-8 border-yellow-400 border-t-transparent',
        className
      )}
    >
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
