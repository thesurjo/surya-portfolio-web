"use client"
import { useEffect, useRef, useState } from 'react';

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  element: string;
  opacity: number;
  id: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Define tech-related elements
  const techElements = [
    '</>',    // Code
    '{...}',  // Object
    '=>',     // Arrow function
    '||',     // OR operator
    '&&',     // AND operator
    '===',    // Strict equality
    '++',     // Increment
    '[]',     // Array
    '()',     // Function call
    '${}',    // Template literal
    '@',      // Decorator
    '!',      // Not
    '#',      // Hash
    '~',      // Bitwise NOT
    '?:',     // Ternary
    '<>',     // JSX fragment
    '**',     // Exponent
  ];
  
  const iconElements = [
    'bxl-react',
    'bxl-nodejs',
    'bxl-flutter',
    'bxl-java',
    'bxl-javascript',
    'bxl-typescript',
    'bxl-html5',
    'bxl-css3',
    'bxl-python',
    'bxl-django',
    'bxs-flask',
    'bxs-data',
    'bxl-wordpress',
    'bx-search-alt',
    'bx-palette',
    'bxl-git',
    'bxl-docker',
    'bxl-aws',
    'bxl-firebase',
    'bxl-redux',
    'bxl-tailwind-css',
    'bxl-bootstrap',
    'bxl-material-design',
    'bxl-figma',
    'bxl-adobe',
    'bxl-php',
    'bxl-shopify',
    'bx-trending-up',
    'bx-conversation',
    'bxs-cloud',
    'bx-code-alt',
    'bx-data',
    'bx-server',
    'bx-cloud',
    'bx-terminal',
    'bxl-github',
    'bxl-mongodb',
    'bxl-postgresql',
    'bxl-graphql'
  ];
  

  useEffect(() => {
    // Initialize elements if not already done
    if (elements.length === 0 && typeof window !== 'undefined') {
      const numElements = Math.min(20, Math.floor(window.innerWidth / 100));
      const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#ff6f61';
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim() || '#f5e6d8';
      
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < numElements; i++) {
        const isIcon = Math.random() > 0.4;
        const element = isIcon 
          ? iconElements[Math.floor(Math.random() * iconElements.length)]
          : techElements[Math.floor(Math.random() * techElements.length)];
        
        newElements.push({
          x: Math.random() * 100, // percentage
          y: Math.random() * 100, // percentage
          size: isIcon ? 14 + Math.random() * 10 : 10 + Math.random() * 8,
          speed: 0.03 + Math.random() * 0.2,
          color: Math.random() > 0.7 ? mainColor : textColor,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          element: element,
          opacity: 0.01 + Math.random() * 0.15,
          id: i
        });
      }
      
      setElements(newElements);
    }
  }, [elements.length]);
  
  useEffect(() => {
    if (elements.length === 0) return;
    
    // Animation loop using requestAnimationFrame
    let animationFrameId: number;
    
    const animate = () => {
      setElements(prevElements => 
        prevElements.map(elem => {
          // Update y-position
          let newY = elem.y - elem.speed;
          
          // Reset position if out of viewport
          if (newY < -10) {
            newY = 110; // Move to bottom
          }
          
          // Update rotation
          const newRotation = elem.rotation + elem.rotationSpeed;
          
          return {
            ...elem,
            y: newY,
            rotation: newRotation
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [elements.length]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      {elements.map((elem) => (
        <div
          key={elem.id}
          className="absolute"
          style={{
            left: `${elem.x}%`,
            top: `${elem.y}%`,
            transform: `rotate(${elem.rotation}deg)`,
            color: elem.color,
            opacity: elem.opacity,
            transition: 'transform 0.5s ease-out'
          }}
        >
          {elem.element.startsWith('bx') ? (
            <i 
              className={`bx ${elem.element}`}
              style={{ fontSize: `${elem.size * 2}px` }}
            ></i>
          ) : (
            <span
              style={{ 
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: `${elem.size}px`
              }}
            >
              {elem.element}
            </span>
          )}
        </div>
      ))}
    </div>
  );
} 