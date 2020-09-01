import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Card, CardContent } from 'components/atoms/Card';
import { Icon, icPoint, icX } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Link } from 'components/atoms/Layout/Link';
import { Menu } from 'components/atoms/Layout/Menu';
import { List } from 'components/atoms/List';
import { SearchBar } from 'components/atoms/SearchBar';
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

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>

        <Card className="pa-m mt-0">
          <Item lines="none">
            <Label className="flex items-center">
              <Icon icon={icPoint} slot="start" />
              <Trans id="label.recommendations" />
            </Label>
            <Button slot="end" fill="clear" expand="block">
              <Trans id="label.seeAll" />
            </Button>
          </Item>

          <CardContent>
            <List>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
              <Item lines="none">
                <Link href="/">Home</Link>
              </Item>
            </List>
          </CardContent>
        </Card>
      </div>
    </Menu>
  );
};
