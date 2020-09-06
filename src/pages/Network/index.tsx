import './index.min.css';

import { t } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ConnectItem from 'components/molecules/ConnectItem';
import { connections } from 'components/molecules/ConnectItem';
import InvitationItem from 'components/molecules/InvitationItem';
import { invitations } from 'components/molecules/InvitationItem';
import NewsletterItem from 'components/molecules/NewsletterItem';
import { newsletters } from 'components/molecules/NewsletterItem';
import ProfileCard from 'components/organisms/ProfileCard';
import { profiles } from 'components/organisms/ProfileCard';
import React from 'react';

export const Network = () => {
  return (
    <Page>
      <Breadcrumb title={t`page.title.network`} />

      <PageContent className="bg-light">
        <div className="panel">
          <div className="panel-header">
            <Row>
              <Col>{invitations.length} new invitations</Col>
              <Col size="auto">
                <Link href="/network/invitations">
                  <span className="text-sm">
                    <strong>See all</strong>
                  </span>
                </Link>
              </Col>
            </Row>
          </div>

          <div className="panel-body p-0">
            {invitations.map((invitation, i) => (
              <InvitationItem
                key={i}
                connectionCount={invitation.connectionCount}
                firstName={invitation.firstName}
                badge={invitation.badge}
                avatar={invitation.avatar}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Newsletter recommened</div>

          <div className="panel-body has-grid">
            <Row>
              {newsletters.map((newsletter, i) => (
                <Col size="12" key={i}>
                  <NewsletterItem
                    cover={newsletter.cover}
                    content={newsletter.content}
                    badge={newsletter.badge}
                    avatar={newsletter.avatar}
                  />
                </Col>
              ))}
            </Row>

            <Button
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </Button>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Pages recommended</div>

          <div className="panel-body has-grid">
            <Row>
              {profiles.map((profile, i) => (
                <Col size="6" key={i}>
                  <ProfileCard
                    avatar={profile.avatar}
                    followerCount={profile.followerCount}
                    cover={profile.cover}
                    name={profile.name}
                  />
                </Col>
              ))}
            </Row>

            <Button
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </Button>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">People you may know</div>

          <div className="panel-body has-grid">
            <Row>
              {connections.map((connection, i) => (
                <Col size="6" key={i}>
                  <ConnectItem
                    connectionCount={connection.connectionCount}
                    firstName={connection.firstName}
                    badge={connection.badge}
                    avatar={connection.avatar}
                  />
                </Col>
              ))}
            </Row>

            <Button
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </Button>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};
