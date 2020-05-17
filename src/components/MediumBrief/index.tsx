import './styles/index.min.css';

import { IonBadge, IonButton, IonIcon, IonRouterLink } from '@ionic/react';
import { Plural, Trans } from '@lingui/macro';
import { albumsOutline, cartOutline } from 'ionicons/icons';
import React, { FC } from 'react';

import { MediumsQuery_mediums_items } from '../../graphql/operation/medium/types/MediumsQuery';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

interface MediumBriefProps {
  medium: MediumsQuery_mediums_items;
}

export const MediumBrief: FC<MediumBriefProps> = ({ medium }) => {
  const {
    title,
    cover,
    shortDescription,
    publishedDate,
    isbn,
    users,
    comments,
    reactions,
    category,
    tags,
  } = medium;

  console.log(tags);

  return (
    <div className={mcl.mediumBrief}>
      <div className={mcl.mediumInfo}>
        <LazyImg className={mcl.cover} lazySrc={cover} alt={title} />

        <div className={mcl.content}>
          <h1 className={mcl.metadata}>{title}</h1>

          {category && (
            <IonBadge>
              <IonRouterLink routerLink={`/users/${category.slug}`} key={category.slug}>
                {category.name}
              </IonRouterLink>
            </IonBadge>
          )}

          <span className={`${mcl.metadata} ${mcl.details}`}>
            <Trans id="medium.header.published" /> {new Date(publishedDate).getFullYear()}
          </span>

          {isbn && (
            <span className={`${mcl.metadata} ${mcl.details}`}>
              <Trans id="medium.header.isbn" /> {isbn}
            </span>
          )}

          {users && (
            <div className={mcl.metadata}>
              <Trans id="medium.header.author" />{' '}
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
          {tags && (
            <div className={mcl.metadata}>
              {tags.map((tag) => (
                <IonRouterLink
                  className={mcl.mediumTag}
                  routerLink={`/users/${tag.slug}`}
                  key={tag.slug}
                  rel="tag"
                >
                  <IonBadge>{tag.name}</IonBadge>
                </IonRouterLink>
              ))}
            </div>
          )}

          <div className={`${mcl.metadata} ${mcl.engagements}`}>
            <div>
              {`${comments.length} `}
              <Plural id="medium.brief.comments" value={comments.length} />
            </div>
            <div>
              {`${reactions.length} `}
              <Plural id="medium.brief.reactions" value={reactions.length} />
            </div>
          </div>

          <p>{shortDescription}</p>
          <div>
            <IonButton color="secondary" onClick={() => console.log('save to slipbox clicked')}>
              <IonIcon slot="start" icon={albumsOutline} />
              <Trans id="medium.header.button.save" />
            </IonButton>
            <IonButton color="secondary" onClick={() => console.log('buy clicked')}>
              <IonIcon slot="start" icon={cartOutline} />
              <Trans id="medium.header.button.buy" />
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};
