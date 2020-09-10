import './index.pcss';

import { t } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Thumbnail } from 'components/atoms/Media';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import faker from 'faker';
import { add, checkmarkCircle, checkmarkCircleOutline, open } from 'ionicons/icons';
import React from 'react';

export const Idea = () => {
  return (
    <Page className="job-detail-page">
      <Breadcrumb title={t`page.title.idea`} />

      <PageContent className="bg-light">
        <div className="panel">
          <div
            className="cover-background"
            style={{ backgroundImage: `url(${faker.image.avatar()})` }}
          ></div>

          <div className="panel-body">
            <div className="profile-summary">
              <Thumbnail className="profile-logo">
                <img src={faker.image.avatar()} alt="" />
              </Thumbnail>
              <div className="profile-name">{faker.name.jobTitle()}</div>
              <div className="m-b-sm">
                <strong>Career Interest</strong>
              </div>
              <div>
                <div className="text-sm">{faker.address.city()}</div>
                <div className="text-sm">
                  <Text as="span" color="medium">
                    {faker.random.number()} applicants
                  </Text>
                </div>
              </div>
            </div>

            <Row>
              <Col className="p-0">
                <Button expand="block" fill="outline" color="primary" size="small">
                  Save
                </Button>
              </Col>
              <Col className="p-0">
                <Button expand="block" color="primary" size="small">
                  Apply
                  <Icon icon={open} />
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Job description</div>
          <div className="panel-body p-0-top">
            <div className="text-sm">{faker.lorem.paragraph()}</div>
          </div>
          <div className="panel-footer">
            <Button expand="block" fill="clear" color="primary" size="small">
              See expand
            </Button>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>How you match</div>
            <Text as="span" color="medium">
              <div className="text-xs">Criteria provided by job poster</div>
            </Text>
          </div>
          <div className="panel-body p-0-top">
            <Row className="items-center">
              <Col size="auto">
                <Icon icon={checkmarkCircle} color="primary" size="small" />
              </Col>
              <Col>
                <div className="text-sm">
                  <strong>Skills </strong>
                  <Text as="span" color="medium">
                    <span className="text-xs">6 out of 7</span>
                  </Text>
                </div>
              </Col>
            </Row>
            <Row className="items-center">
              <Col size="auto">
                <Icon icon={checkmarkCircle} color="primary" size="small" />
              </Col>
              <Col>
                <div className="text-sm">
                  <strong>Level of education </strong>
                  <Text as="span" color="medium">
                    <span className="text-xs">Bachelor&apos;s Degree</span>
                  </Text>
                </div>
              </Col>
            </Row>
          </div>
          <div className="panel-footer">
            <Button expand="block" fill="clear" color="primary" size="small">
              More details
            </Button>
          </div>
        </div>

        <div className="panel">
          <Item>
            <Label>
              <div>
                <Icon
                  className="icon-align-middle"
                  icon={checkmarkCircleOutline}
                  color="success"
                  size="small"
                />
                This job alert is ON
              </div>
              <Text as="span" color="medium">
                <div className="text-xs">Javascript Developer, Austin, Texas Area</div>
              </Text>
            </Label>
          </Item>
        </div>

        <div className="panel">
          <div className="panel-header">Learn expand about Career Interest</div>
          <div className="panel-body">
            <Row className="items-center">
              <Col size="auto">
                <Thumbnail className="avatar">
                  <img src={faker.image.avatar()} alt="" />
                </Thumbnail>
              </Col>
              <Col>
                <div>
                  <strong>Career Interest</strong>
                </div>
                <Text as="span" color="medium">
                  <div className="text-sm">54,710 followers</div>
                </Text>
              </Col>
              <Col className="p-0" size="auto">
                <Button fill="clear" className="button-no-padding" color="primary" size="small">
                  <Icon icon={add} />
                  Follow
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};
