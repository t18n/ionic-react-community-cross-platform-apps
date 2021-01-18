import React from 'react';

import FollowCard, { follows } from '.';

export default {
  title: 'Molecules',
  component: FollowCard,
};

export const FollowCardExample = () =>
  follows.map((follow, i) => (
    <FollowCard
      key={i}
      items={follow.items}
      avatar={follow.avatar}
      connectionCount={follow.connectionCount}
      badge={follow.badge}
      firstName={follow.firstName}
      aboutMe={follow.aboutMe}
      timestamp={follow.timestamp}
      location={follow.location}
    />
  ));
