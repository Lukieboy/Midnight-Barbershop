
import React from 'react';

export const LogoCrown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 50 L30 10 L50 40 L70 10 L90 50 Z" />
    <path d="M10 50 L90 50" strokeWidth="1" />
  </svg>
);

export const ScissorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M8.5 15.5L18 4M15.5 15.5L6 4" />
  </svg>
);

export const BeardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 8c0 4 2 10 8 12 6-2 8-8 8-12M6 4c0 2 2 3 6 3s6-1 6-3" />
    <path d="M9 10c0 1 1 2 3 2s3-1 3-2" />
  </svg>
);

export const RazorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16v4H4zM4 12h12M4 16h10M18 12l2 8h-2l-2-8z" />
  </svg>
);

export const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
