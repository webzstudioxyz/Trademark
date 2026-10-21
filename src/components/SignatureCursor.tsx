import React, { useEffect, useState, useRef } from 'react';

export const SignatureCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth lerp coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if target or ancestor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-element'
        );
        const trademarkCard = target.closest('[data-trademark-card]');

        if (trademarkCard) {
          setIsHovered(true);
          setHoverText('VIEW');
        } else if (interactive) {
          setIsHovered(true);
          setHoverText(null);
        } else {
          setIsHovered(false);
          setHoverText(null);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Easing loop for trailing ring
    const loop = () => {
      // Lerp ring
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      // Lerp secondary subtle trail
      const trailEase = 0.08;
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * trailEase;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * trailEase;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible]);

  if (!isEnabled || !isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer easing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 rounded-full border transition-all duration-200 pointer-events-none flex items-center justify-center"
        style={{
          width: isHovered ? (hoverText ? '54px' : '44px') : '32px',
          height: isHovered ? (hoverText ? '54px' : '44px') : '32px',
          marginLeft: isHovered ? (hoverText ? '-27px' : '-22px') : '-16px',
          marginTop: isHovered ? (hoverText ? '-27px' : '-22px') : '-16px',
          borderColor: isHovered ? '#263C32' : 'rgba(38, 60, 50, 0.45)',
          backgroundColor: isHovered ? (hoverText ? '#263C32' : 'rgba(168, 181, 160, 0.22)') : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(214, 195, 161, 0.3)' : 'none',
        }}
      >
        {hoverText && (
          <span className="text-[9px] font-semibold tracking-wider text-[#F6F2E9] select-none">
            {hoverText}
          </span>
        )}
      </div>

      {/* Central crisp core dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none transition-transform duration-75"
        style={{
          backgroundColor: isHovered ? '#D6C3A1' : '#263C32',
          opacity: hoverText ? 0 : 0.95,
        }}
      />
    </div>
  );
};
