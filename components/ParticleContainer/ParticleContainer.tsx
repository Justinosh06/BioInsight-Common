import React, { useMemo } from 'react';

interface ParticleContainerProps {
  children?: React.ReactNode;
  dotCount?: number;
  dotColor?: string;
  dotSize?: number;
  className?: string;
}

export const ParticleContainer: React.FC<ParticleContainerProps> = ({
  children,
  dotCount = 35,
  dotColor = 'black',
  dotSize = 2,
  className = '',
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: dotCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`, 
      duration: `${4 + Math.random() * 4}s`, 
    }));
  }, [dotCount]);

  return (
    <div 
      className={`relative overflow-hidden w-full h-full ${className}`}
      style={{ position: 'relative' }}
    >
      {/* CSS for the slow ripple effect */}
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 0.1;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0.1;
            }
          }
        `}
      </style>

      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: dotColor,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0,
            animation: `ripple ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};