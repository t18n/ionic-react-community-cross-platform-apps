import './index.min.css';

import { t } from '@lingui/macro';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import NotificationItem, { notifications } from 'components/molecules/NotificationItem';
import React from 'react';

export const Notifications = () => {
  return (
    <Page>
      <Breadcrumb title={t`page.title.notifications`} />

      <PageContent omitPadding>
        <Text as="div" type="title-s" extraClasses="p-page-x p-page-y">
          Recent
        </Text>

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
      </PageContent>
    </Page>
  );
};
