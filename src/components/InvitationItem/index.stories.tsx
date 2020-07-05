import React from 'react';

import InvitationItem, { invitations } from './';

export default {
  title: 'Invitation Item',
  component: InvitationItem,
};

export const Default = () =>
  invitations.map((invitation, i) => (
    <InvitationItem
      key={i}
      connectionCount={invitation.connectionCount}
      firstName={invitation.firstName}
      badge={invitation.badge}
      avatar={invitation.avatar}
    />
  ));
