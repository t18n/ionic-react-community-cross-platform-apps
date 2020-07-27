import './styles/index.min.css';

import { IonSkeletonText } from '@ionic/react';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import React, { FC, useEffect, useRef } from 'react';

import mcl from './styles/index.pcss.json';
import { preload } from './utils';

interface LazyImgProps {
  lazySrc: string;
  className?: string;
  alt?: string;
}

export const LazyImg: FC<LazyImgProps> = ({ lazySrc, className, alt }) => {
  const img = useRef<HTMLImageElement>(null);

  const [inView, entry] = useIntersectionObserver(img);

  useEffect(() => {
    if (inView) {
      preload(img.current, lazySrc, mcl.loaded).then(() => entry.disconnect());
    }
  }, [lazySrc, inView, entry]);

  return (
    <div className={(className ? className : '') + ` ${mcl.lazyImg}`}>
      {lazySrc ? (
        <img ref={img} alt={alt} />
      ) : (
        <IonSkeletonText animated style={{ width: '100%' }} />
      )}
    </div>
  );
};
