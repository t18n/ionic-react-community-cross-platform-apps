import './index.min.css';

import logo from 'assets/brand/logo.svg';
import { Img } from 'components/atoms/Media';
import React from 'react';
import { Link } from 'react-router-dom';

import { makeClassNames } from '../../../utils/css';

interface LogoProps {
  extraClasses?: string;
}

export const Logo = ({ extraClasses }: LogoProps) => {
  return (
    <Link to="/">
      <div className={makeClassNames('logo', extraClasses)}>
        <Img src={logo} alt="Brightizen" />
      </div>
    </Link>
  );
};
