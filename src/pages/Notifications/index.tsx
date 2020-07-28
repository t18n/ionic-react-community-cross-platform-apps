import './index.min.css';

import { IonContent, IonHeader, IonPage } from '@ionic/react';
import NotificationItem, { notifications } from 'components/molecules/NotificationItem';
import Topbar from 'components/organisms/Topbar';
import React from 'react';

const Notifications = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topbar />
      </IonHeader>

      <IonContent className="bg-light">
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
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
