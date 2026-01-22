import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ImageComparisonSlider.module.css';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  initialPosition?: number;
  showLabels?: boolean;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
  initialPosition = 50,
  showLabels = true,
  beforeLabel = 'Normal',
  afterLabel = 'Night',
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return sliderPosition;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  }, [sliderPosition]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setSliderPosition(calculatePosition(e.clientX));
  }, [calculatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setSliderPosition(calculatePosition(e.touches[0].clientX));
  }, [calculatePosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setSliderPosition(calculatePosition(e.clientX));
    };

    const handleTouchMove = (e: TouchEvent) => {
      setSliderPosition(calculatePosition(e.touches[0].clientX));
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, calculatePosition]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + step));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Image comparison slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After image (full, behind) */}
      <div className={styles.imageWrapper}>
        <img src={afterImage} alt={afterAlt} className={styles.image} draggable={false} />
      </div>

      {/* Before image (clipped) */}
      <div
        className={styles.imageWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeAlt} className={styles.image} draggable={false} />
      </div>

      {/* Divider */}
      <div
        className={`${styles.divider} ${isDragging ? styles.dragging : ''}`}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.line} />
        <div className={styles.handle}>
          <span className={styles.arrow}>‹</span>
          <span className={styles.arrow}>›</span>
        </div>
      </div>

      {/* Labels */}
      {showLabels && (
        <>
          <span className={`${styles.label} ${styles.labelBefore}`}>{beforeLabel}</span>
          <span className={`${styles.label} ${styles.labelAfter}`}>{afterLabel}</span>
        </>
      )}
    </div>
  );
}
