import './index.min.css';

import logo from 'assets/brand/logo.svg';
import { Img } from 'components/atoms/Media';
import React from 'react';

interface LogoProps {
  width: number;
}

export const Logo = ({ width }: LogoProps) => {
  const ratio = 3;
  const height = width / ratio;

  return (
    <div className="logo" style={{ width: `${width}px`, height: `${height}px` }}>
      <Img src={logo} alt="Brightizen" />
    </div>
  );
};
