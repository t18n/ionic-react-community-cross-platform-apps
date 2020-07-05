import React from 'react';

import MessageItem, { messages } from './';

export default {
  title: 'Message Item',
  component: MessageItem,
};

export const Default = () =>
  messages.map((message, i) => (
    <MessageItem
      key={i}
      firstName={message.firstName}
      avatar={message.avatar}
      isUnread={message.isUnread}
      onClickDetail={message.onClickDetail}
      timestamp={message.timestamp}
      content={message.content}
    />
  ));
