import './index.min.css';

import { t } from '@lingui/macro';
import { Icon } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import FollowCard, { follows } from 'components/molecules/FollowCard';
import { create, notifications } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Types
 */
interface MediaProps extends RouteComponentProps {}

/**
 * Component
 */
const Media = ({ history }: MediaProps) => {
  return (
    <Page>
      <Breadcrumb title={t`page.title.media`} />

      <PageContent>
        <div className="panel">
          <div className="grid-divided">
            <Row className="ion-text-center ion-align-items-end">
              <Col>
                <div className="text-xl">6</div>
                <Text as="span" color="medium">
                  <div className="text-xs">saves</div>
                </Text>
              </Col>
              <Col>
                <div className="text-xl">0</div>
                <Text as="span" color="medium">
                  <div className="text-xs">comments</div>
                </Text>
              </Col>
              <Col>
                <Icon icon={create} />
                <Text as="span" color="medium">
                  <div className="text-xs">interests</div>
                </Text>
              </Col>
            </Row>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <Row>
              <Col>Media you search:</Col>
              <Col size="auto">
                <Text as="span" color="primary">
                  <span className="text-sm">
                    <strong>Manage</strong>
                  </span>
                </Text>
              </Col>
            </Row>
          </div>
          <div className="panel-body p-0">
            <Item>
              <Label className="ion-text-wrap">
                <div>
                  <span className="text-sm">
                    <strong>Love</strong>
                  </span>
                  <Text as="span" color="success">
                    <span className="text-xs">
                      <strong> (15 new)</strong>
                    </span>
                  </Text>
                </div>
              </Label>
              <Icon icon={notifications} slot="end" color="primary" />
            </Item>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Based on your interest</div>
          <div className="panel-body p-0">
            {follows.map((follow, i) => (
              <FollowCard
                key={i}
                items={follow.items}
                avatar={follow.avatar}
                connectionCount={follow.connectionCount}
                badge={follow.badge}
                firstName={follow.firstName}
                aboutMe={follow.aboutMe}
                timestamp={follow.timestamp}
                location={follow.location}
              />
            ))}
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

export default Media;
