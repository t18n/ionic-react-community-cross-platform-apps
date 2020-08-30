import './index.min.css';

import logo from 'assets/brand/logo.svg';
import { Img } from 'components/atoms/Media';
import React from 'react';

import { makeClassNames } from '../../../utils/css';
import { Link } from '../Layout/Link/index';

interface LogoProps {
  extraClasses?: string;
}

export const Logo = ({ extraClasses }: LogoProps) => {
  return (
    <Link href="/">
      <div className={makeClassNames('logo', extraClasses)}>
        <Img src={logo} alt="Brightizen" />
      </div>
    </Link>
  );
};
