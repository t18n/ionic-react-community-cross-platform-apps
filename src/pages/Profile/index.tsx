import './index.min.css';

import { t } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Icon, icPencil } from 'components/atoms/Icon';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Avatar } from 'components/atoms/Media';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ProfileAbout from 'components/organisms/ProfileAbout';
import ProfileAccomplishments from 'components/organisms/ProfileAccomplishments';
import ProfileActivity from 'components/organisms/ProfileActivity';
import ProfileContact from 'components/organisms/ProfileContact';
import ProfileDashboard from 'components/organisms/ProfileDashboard';
import ProfileEducation from 'components/organisms/ProfileEducation';
import ProfileExperience from 'components/organisms/ProfileExperience';
import ProfileHighlights from 'components/organisms/ProfileHighlights';
import ProfilePeople from 'components/organisms/ProfilePeople';
import ProfileSkills from 'components/organisms/ProfileSkills';
import faker from 'faker';
import React from 'react';

const Profile = () => {
  return (
    <Page className="profile-page">
      <Breadcrumb title={t`page.title.profile`} />

      <PageContent omitPadding>
        <div
          className="profile-page__cover"
          style={{ backgroundImage: `url(${faker.image.avatar()})` }}
        />

        <div className="profile-page__content p-page-x">
          <div className="profile-summary">
            <Avatar className="profile-image">
              <img src={faker.image.avatar()} alt="" />
            </Avatar>

            <Button fill="clear" color="primary" size="small" className="button-edit">
              <Icon slot="icon-only" icon={icPencil} />
            </Button>

            <div className="profile-name">
              {faker.name.firstName()}
              <div className="online-status active"></div>
            </div>
            <div className="m-b-sm">{faker.name.jobTitle()}</div>
            <div>
              <div className="text-sm">{faker.address.streetName()}</div>
              <div className="text-sm">
                {faker.address.country()} ·{' '}
                <Text as="span" color="primary">
                  <strong>{faker.random.number()} connection</strong>
                </Text>
              </div>
            </div>
          </div>

          <ProfileHighlights />
          <ProfileAbout />
          <ProfileDashboard />
          <ProfileActivity />
          <ProfileExperience />
          <ProfileEducation />
          <ProfileSkills />
          <ProfileAccomplishments />
          <ProfileContact />
          <ProfilePeople />
        </div>
      </PageContent>
    </Page>
  );
};

export default Profile;
