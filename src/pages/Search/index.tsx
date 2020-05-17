import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Trans } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { MediumItem } from '../../components/MediumItem';
import useDebounce from '../../hooks/useDebounce';

const FoundItem = ({ title, items }) => (
  <Layout id="search-page" title={<Trans id="page.title.search" />}>
    <IonItemGroup>
      <IonItemDivider sticky>
        <IonLabel>{title}</IonLabel>
      </IonItemDivider>
      {items.map(({ id, slug, title, author, cover, comments, reactions }) => (
        <Link to={'/books/' + slug} key={id}>
          <MediumItem
            cover={cover}
            title={title}
            author={author}
            comments={comments}
            reactions={reactions}
            onClick={() => console.log('book clicked')}
          />
        </Link>
      ))}
    </IonItemGroup>
  </Layout>
);

export const SearchPage = () => {
  const location = useLocation();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState(location.search.slice(1).replace('q=', ''));

  //
  const searchMediums = async (query?: string): Promise<any> => {
    const searchTypes = ['books', 'videos', 'articles', 'postcasts'];
    console.log('Searching for ', searchTypes);
    // Get mediums from API
    const mediums = {
      books: [],
      videos: [],
      articles: [],
      postcasts: [],
      isLoading: false,
    };
    return mediums;
  };

  const [isError, setIsError] = useState<boolean>(false);
  const [mediums, setMediums] = useState({
    books: [],
    videos: [],
    articles: [],
    postcasts: [],
    isLoading: false,
  });
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleInput = async (e: any) => {
    const val = e.target.value;
    if (!val) {
      history.replace({ search: '' });
      setMediums({
        books: [],
        videos: [],
        articles: [],
        postcasts: [],
        isLoading: false,
      });
      setSearchTerm('');
      setIsError(false);
      return;
    }
    setSearchTerm(val);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      history.replace({ search: `?q=${debouncedSearchTerm}` });
      setMediums((mediums) => {
        return { ...mediums, isLoading: true };
      });

      searchMediums(debouncedSearchTerm)
        .then((results: any) => {
          setMediums({
            books: results['books'] ? results['books'] : [],
            videos: results['videos'] ? results['videos'] : [],
            articles: results['articles'] ? results['articles'] : [],
            postcasts: results['postcasts'] ? results['postcasts'] : [],

            isLoading: false,
          });
        })
        .catch((err) => {
          setMediums((mediums) => {
            return { ...mediums, isLoading: false };
          });
          setIsError(true);
          console.warn('Error', err);
        });
    }
  }, [debouncedSearchTerm, history]);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar value={searchTerm} debounce={0} onIonChange={(e) => handleInput(e)} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {isError ? 'Has error' : null}
        <IonList>
          {mediums.isLoading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : null}
          {mediums.books.length > 0 ? <FoundItem title="Book" items={mediums.books} /> : null}
          {mediums.articles.length > 0 ? (
            <FoundItem title="Articles" items={mediums.articles} />
          ) : null}
          {mediums.videos.length > 0 ? <FoundItem title="Videos" items={mediums.videos} /> : null}
          {mediums.postcasts.length > 0 ? (
            <FoundItem title="Postcasts" items={mediums.postcasts} />
          ) : null}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
