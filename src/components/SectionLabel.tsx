import type { ReactNode } from 'react';

export interface SectionLabelProps {
  label?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionLabel({ label, children, className = '' }: SectionLabelProps) {
  return (
    <span className={`text-xs font-sans font-medium tracking-[0.2em] uppercase text-secondary ${className}`}>
      {label || children}
    </span>
  );
}
