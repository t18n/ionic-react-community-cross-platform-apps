import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Card, CardContent } from 'components/atoms/Card';
import { icBook, Icon, icPoint, icX } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Link } from 'components/atoms/Layout/Link';
import { Menu } from 'components/atoms/Layout/Menu';
import { List } from 'components/atoms/List';
import { SearchBar } from 'components/atoms/SearchBar';
import { Text } from 'components/atoms/Text';
import React from 'react';

export const RightSidebar = () => {
  return (
    <Menu
      side="end"
      contentId="page__content"
      menuId="right-sidebar"
      className="right-sidebar"
      swipeGesture
    >
      <div className="right-sidebar__content">
        <SearchBar
          className="w-100p mx-auto"
          placeholder={t`label.search`}
          showCancelButton="never"
          onIonClear={() => console.log('hello')}
          onIonChange={() => console.log('hello')}
          clearIcon={icX}
          debounce={300}
          inputmode="text"
          autocomplete="off"
          animated
        />

        {Array(5)
          .fill(0)
          .map((i) => (
            <Card className="pa-m mt-l flex flex-col items-center" key="i">
              <Item lines="none" className="flex align-center">
                <Icon icon={icBook} slot="start" size="medium" />
                <Text as="span" type="subtitle-l" color="dark" fontWeight="text-bold">
                  <Trans id="label.recommendations" />
                </Text>
              </Item>

              <CardContent className="flex flex-col items-center">
                <Link href="/">
                  <Text
                    as="a"
                    align="text-center"
                    color="medium"
                    type="subtitle-s"
                    extraClasses="mb-s w-100p"
                  >
                    The Da Vincy Code
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    as="a"
                    align="text-center"
                    color="medium"
                    type="subtitle-s"
                    extraClasses="mb-s w-100p"
                  >
                    Start with why
                  </Text>
                </Link>

                <Link href="/">
                  <Text
                    as="a"
                    align="text-center"
                    color="medium"
                    type="subtitle-s"
                    extraClasses="mb-s w-100p"
                  >
                    Tools of titans
                  </Text>
                </Link>

                <Link href="/">
                  <Text
                    as="a"
                    align="text-center"
                    color="medium"
                    type="subtitle-s"
                    extraClasses="mb-s w-100p"
                  >
                    The world is flat
                  </Text>
                </Link>
              </CardContent>
              <CardContent>
                <Button slot="end" fill="clear" expand="block">
                  <Trans id="label.seeAll" />
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </Menu>
  );
};
