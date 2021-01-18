import React from 'react';

import InvitationItem, { invitations } from './';

export default {
  title: 'Molecules',
  component: InvitationItem,
};

export const InvitationItemExample = () =>
  invitations.map((invitation, i) => (
    <InvitationItem
      key={i}
      connectionCount={invitation.connectionCount}
      firstName={invitation.firstName}
      badge={invitation.badge}
      avatar={invitation.avatar}
    />
  ));
