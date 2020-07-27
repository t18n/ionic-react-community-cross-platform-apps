import './index.min.css';

import { IonAvatar, IonCol, IonItem, IonLabel, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const SearchSuggestions = ({ history }: RouteComponentProps) => {
  const goToSearch = () => {
    history.push('/search');
  };

  return (
    <div>
      <div className="search-suggestions">
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="suggestion-item" key={i} onClick={goToSearch}>
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonAvatar className="thumbnail-tiny">
                  <img src={faker.image.avatar()} alt="" />
                </IonAvatar>
              </IonCol>
              <IonCol>
                <div className="text-sm">
                  <strong>{faker.company.companyName()} </strong>
                  <IonText color="medium">Industry: {faker.company.companyName()}</IonText>
                </div>
              </IonCol>
            </IonRow>
          </div>
        ))}
      </div>

      <IonItem lines="none" onClick={goToSearch}>
        <IonLabel color="primary">
          <div className="text-sm">
            <strong>See all results for {faker.lorem.word()}</strong>
          </div>
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default withRouter(SearchSuggestions);
