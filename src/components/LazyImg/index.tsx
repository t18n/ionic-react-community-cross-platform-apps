import './styles/index.min.css';

import React, { FC, useEffect, useRef } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import mcl from './styles/index.pcss.json';
import { preload } from './utils';

const placeholderImg = `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMzIyuBwAEHgGuXmd8SQAAAABJRU5ErkJggg==`;

interface LazyImgProps {
  lazySrc: string;
  className?: string;
  alt?: string;
}

export const LazyImg: FC<LazyImgProps> = ({ lazySrc, className, alt }) => {
  const img = useRef<HTMLImageElement>(null);
  const lazyImgSrc = lazySrc || placeholderImg;

  const [inView, entry] = useIntersectionObserver(img);

  useEffect(() => {
    if (inView) {
      preload(img.current, lazyImgSrc, mcl.loaded).then(() => entry.disconnect());
    }
  }, [lazyImgSrc, inView, entry]);

  return (
    <div className={(className ? className : '') + ` ${mcl.lazyImg}`}>
      <img ref={img} alt={alt} />
    </div>
  );
};
