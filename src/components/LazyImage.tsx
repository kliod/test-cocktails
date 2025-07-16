import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  placeholder,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setLoadedSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '0px 0px 200px 0px',
      }
    );

    const currentElement = imgRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : placeholder}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      data-loaded={loadedSrc !== null}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: loadedSrc !== null ? 1 : 0.5,
        filter: loadedSrc !== null ? 'blur(0)' : 'blur(4px)',
      }}
    />
  );
};

export default LazyImage;
