import { memo } from 'react';
import FloatingElements from './FloatingElements';

interface AnimatedBackgroundProps {
  enableFloatingElements?: boolean;
  enableGlowingParticles?: boolean;
  enableGeometricShapes?: boolean;
  enableGradientBackground?: boolean;
}

function AnimatedBackground({
  enableFloatingElements = true,
  enableGlowingParticles = true,
  enableGeometricShapes = true,
  enableGradientBackground = true
}: AnimatedBackgroundProps) {
  return (
    <div className="animated-background-container">
      {enableFloatingElements && <FloatingElements />}
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(AnimatedBackground); 