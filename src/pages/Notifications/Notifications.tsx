import './Notifications.scss';

import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';

import NotificationItem from '../../components/NotificationItem';
import { notifications } from '../../components/NotificationItem';
import Topbar from '../../components/Topbar/Topbar';

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
