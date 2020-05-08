import './styles/index.min.css';

import { IonButton, IonIcon, IonRouterLink } from '@ionic/react';
import { Trans } from '@lingui/macro';
import { albumsOutline, cartOutline } from 'ionicons/icons';
import React, { FC } from 'react';

import { MediumsQuery_mediums_items } from '../../graphql/operation/medium/types/MediumsQuery';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

interface PreviewHeaderProps {
  medium: MediumsQuery_mediums_items;
}

export const PreviewHeader: FC<PreviewHeaderProps> = ({ medium }) => {
  const {
    title,
    cover,
    shortDescription,
    publishedDate,
    isbn,
    users,
    comments,
    reactions,
  } = medium;

  return (
    <div className={mcl.previewHeader}>
      <div className={mcl.mediumInfo}>
        <LazyImg className={mcl.cover} lazySrc={cover} alt={title} />

        <div className={mcl.content}>
          <h1 className={mcl.metadata}>{title}</h1>

          <span className={`${mcl.metadata} ${mcl.details}`}>
            <Trans id="medium.header.published">Published:</Trans>{' '}
            {new Date(publishedDate).getFullYear()}
          </span>

          {isbn && (
            <span className={`${mcl.metadata} ${mcl.details}`}>
              <Trans id="medium.header.isbn">ISBN:</Trans> {isbn}
            </span>
          )}

          {users && (
            <div className={mcl.metadata}>
              <Trans id="medium.header.author">by:</Trans>{' '}
              {users.map((user, i) => (
                <>
                  {i > 0 && `, `}
                  <IonRouterLink routerLink={`/users/${user.slug}`} key={user.slug} rel="author">
                    {user.name}
                  </IonRouterLink>
                </>
              ))}
            </div>
          )}
        </div>

        <div className={mcl.description}>
          <p>{shortDescription}</p>
          <div>
            <IonButton color="secondary" onClick={() => console.log('save to slipbox clicked')}>
              <IonIcon slot="start" icon={albumsOutline} />
              <Trans id="medium.header.button.save">Save</Trans>
            </IonButton>
            <IonButton color="secondary" onClick={() => console.log('buy clicked')}>
              <IonIcon slot="start" icon={cartOutline} />
              <Trans id="medium.header.button.buy">Buy</Trans>
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};
