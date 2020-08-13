import React from 'react';

import { Content } from '../Layout/Content';
import { Slide, Slides } from '.';

export default {
  title: 'Slide',
  component: Slide,
};

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

export const SlidesExample = () => (
  <Content>
    <Slides pager={true} options={slideOpts}>
      <Slide>
        <h1>Slide 1</h1>
      </Slide>
      <Slide>
        <h1>Slide 2</h1>
      </Slide>
      <Slide>
        <h1>Slide 3</h1>
      </Slide>
    </Slides>
  </Content>
);
