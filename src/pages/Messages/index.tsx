import './index.min.css';

import { t } from '@lingui/macro';
import { Button, ButtonGroup } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { Input } from 'components/atoms/Input';
import { Footer } from 'components/atoms/Layout/Footer';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Avatar } from 'components/atoms/Media';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import MessageItem, { messages } from 'components/molecules/MessageItem';
import faker from 'faker';
import { addCircle } from 'ionicons/icons';
import React from 'react';

export const Messages = () => {
  return (
    <Page className="chat-page">
      <Breadcrumb title={t`page.title.media`} />

      <PageContent>
        <div className="chat-header">
          <Avatar className="avatar-sender-lg">
            <img src={faker.image.avatar()} alt="" />
            <div className="avatar-status">
              <div className="online-status active"></div>
            </div>
          </Avatar>
          <div>
            <strong>{faker.name.firstName()}</strong>
          </div>
          <div className="text-sm">Author of 3 books</div>
        </div>

        <div className="conversation">
          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 14</div>
          </div>

          <MessageItem
            firstName={messages[0].firstName}
            avatar={messages[0].avatar}
            isUnread={messages[0].isUnread}
            onClickDetail={messages[0].onClickDetail}
            timestamp={messages[0].timestamp}
            content={messages[0].content}
          />

          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 15</div>
          </div>

          <MessageItem
            firstName={messages[1].firstName}
            avatar={messages[1].avatar}
            isUnread={messages[1].isUnread}
            onClickDetail={messages[1].onClickDetail}
            timestamp={messages[1].timestamp}
            content={messages[1].content}
          />

          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 16</div>
          </div>

          <MessageItem
            firstName={messages[2].firstName}
            avatar={messages[2].avatar}
            isUnread={messages[2].isUnread}
            onClickDetail={messages[2].onClickDetail}
            timestamp={messages[2].timestamp}
            content={messages[2].content}
          />
        </div>
      </PageContent>

      <Footer>
        <Toolbar color="light">
          <ButtonGroup slot="start">
            <Button fill="clear">
              <Icon slot="icon-only" icon={addCircle} />
            </Button>
          </ButtonGroup>

          <Input type="text" placeholder="Write a message..."></Input>

          <ButtonGroup slot="end">
            <Button fill="clear">
              <strong>Send</strong>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </Footer>
    </Page>
  );
};
