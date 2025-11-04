// icons.tsx
import React from 'react';

export const PsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="#001D3D" />
    <path d="M28 72V28H44C48 28 51 29 53 31C55 33 56 36 56 40C56 44 55 47 53 49C51 51 48 52 44 52H36V44H44C45 44 46 43.5 46.5 43C47 42.5 47 41.5 47 40C47 38.5 47 37.5 46.5 37C46 36.5 45 36 44 36H36V72H28Z" fill="white" />
    <path d="M60 72V28H72V36H68V32H64V44H68V48H72V72H60Z" fill="white" />
  </svg>
);
