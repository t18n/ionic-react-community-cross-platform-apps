import './index.min.css';

import { t } from '@lingui/macro';
import { Content } from 'components/atoms/Layout/Content';
import { Page } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import NotificationItem, { notifications } from 'components/molecules/NotificationItem';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import { useSearchBar } from 'hooks/useSearchbar';
import React from 'react';

export const Notifications = () => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  return (
    <Page>
      <Breadcrumb
        title={t`page.title.notifications`}
        searchBar={{
          onSearchChange: onSearchChange,
          onSearchCancel: onSearchCancel,
        }}
      />
      <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

      <Content className="bg-light">
        <div className="panel">
          <div className="panel-header">
            <div className="text-sm">
              <strong>Recent</strong>
            </div>
          </div>

          <div className="panel-body no-padding">
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

          <div className="panel-body no-padding">
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
      </Content>
    </Page>
  );
};
