import './index.min.css';

import { t } from '@lingui/macro';
import { Page } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import NotificationItem, { notifications } from 'components/molecules/NotificationItem';
import React from 'react';

export const Notifications = () => {
  return (
    <Page>
      <Breadcrumb title={t`page.title.notifications`} />

      <div className="px py">
        <div className="panel">
          <div className="panel-header">
            <div className="text-sm">
              <strong>Recent</strong>
            </div>
          </div>

          <div className="panel-body p-0">
            {notifications.map((notification, index) => (
              <NotificationItem
                key={index}
                type={notification.type}
                isUnread={notification.isUnread}
                avatar={notification.avatar}
                timestamp={notification.timestamp}
                notificationText={notification.notificationText}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="text-sm">
              <strong>Earlier</strong>
            </div>
          </div>

          <div className="panel-body p-0">
            {notifications.map((notification, index) => (
              <NotificationItem
                key={index}
                type={notification.type}
                isUnread={notification.isUnread}
                avatar={notification.avatar}
                timestamp={notification.timestamp}
                notificationText={notification.notificationText}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};
