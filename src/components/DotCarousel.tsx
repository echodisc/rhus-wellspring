import { useState, useRef, type ReactNode, type TouchEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DotCarouselProps {
  children: ReactNode[];
  desktopCols?: 2 | 3;
  className?: string;
}

const DotCarousel = ({ children, desktopCols = 3, className = "" }: DotCarouselProps) => {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const count = children.length;

  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < count - 1) setActive(active + 1);
      if (diff < 0 && active > 0) setActive(active - 1);
    }
  };

  if (!isMobile) {
    const gridClass = desktopCols === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3";
    return (
      <div className={`grid ${gridClass} gap-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-primary scale-110"
                : "bg-border hover:bg-muted-foreground/40"
            }`}
            aria-label={`Gå til slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DotCarousel;
