import React from 'react';

export interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  fallbackGradient?: string;
}

export default function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.5,
  className = '',
  children,
  fallbackGradient = 'radial-gradient(circle at center, rgba(74,144,164,0.15) 0%, rgba(0,0,0,1) 100%)'
}: VideoBackgroundProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {src ? (
        <video
          src={src}
          poster={poster}
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ background: fallbackGradient }}
        />
      )}
      
      {overlay && (
        <div 
          className="video-overlay absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
