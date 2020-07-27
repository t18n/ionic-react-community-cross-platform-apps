import React from 'react';

import FollowCard, { follows } from '.';

export default {
  title: 'FollowCard',
  component: FollowCard,
};

export const Default = () =>
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
