import React from 'react';

import NotificationItem, { notifications } from './';

export default {
  title: 'Notification Item',
  component: NotificationItem,
};

export const Default = () =>
  notifications.map((notification, index) => (
    <NotificationItem
      key={index}
      type={notification.type}
      isUnread={notification.isUnread}
      avatar={notification.avatar}
      timestamp={notification.timestamp}
      notificationText={notification.notificationText}
    />
  ));
