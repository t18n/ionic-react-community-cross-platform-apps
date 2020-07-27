import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ChatItem, { chatItems } from '.';

export default {
  title: 'Chat Item',
  component: ChatItem,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const Default = () =>
  chatItems.map((item, i) => (
    <ChatItem
      key={i}
      thumbnail={item.thumbnail}
      content={item.content}
      timestamp={item.timestamp}
      firstName={item.firstName}
      profileSlug={item.profileSlug}
    />
  ));
