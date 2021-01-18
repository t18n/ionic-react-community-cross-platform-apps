import './index.min.css';

import logo from 'assets/brand/logo.svg';
import classNames from 'classnames';
import { Img } from 'components/atoms/Media';
import React from 'react';

import { Link } from '../Layout/Link/index';

interface LogoProps {
  extraClasses?: string;
}

export const Logo = ({ extraClasses }: LogoProps) => {
  return (
    <Link to="/">
      <div className={classNames('logo', extraClasses)}>
        <Img src={logo} alt="Brightizen" />
      </div>
    </Link>
  );
};
