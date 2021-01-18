import './index.min.css';

import { t } from '@lingui/macro';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import MessageItem, { messages } from 'components/molecules/MessageItem';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Types
 */
interface MessagingProps extends RouteComponentProps {}

/**
 * Component
 */
const Messaging = ({ history }: MessagingProps) => {
  const goToChat = (id: number) => {
    history.push(`/chat/${id}`);
  };

  return (
    <Page>
      <Breadcrumb title={t`page.title.message`} />

      <PageContent>
        {messages.map((message, i) => (
          <MessageItem
            key={i}
            firstName={message.firstName}
            avatar={message.avatar}
            isUnread={message.isUnread}
            onClickDetail={message.onClickDetail}
            timestamp={message.timestamp}
            content={message.content}
          />
        ))}
      </PageContent>
    </Page>
  );
};

export default Messaging;
