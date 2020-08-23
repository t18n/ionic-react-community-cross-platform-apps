import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Item, Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
import { Loading } from 'components/atoms/Loading';
import { Toast } from 'components/atoms/Toast';
import { useLoginUser } from 'graphql/operation/user/mutation';
import { ME } from 'graphql/operation/user/shape';
import { useToast } from 'hooks/useToast';
import React, { useState } from 'react';

type LoginProps = {
  history: any;
};

export const Login = ({ history }: LoginProps) => {
  const [login, { loading: LOGIN_loading }] = useLoginUser();
  const [toast, setToast] = useToast(null);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputPassword || !inputEmail) {
      setToast({
        status: true,
        position: 'bottom',
        message: t`Please fill all required data`,
        duration: 3000,
        color: 'danger',
      });
    }

    // Login user
    try {
      await login({
        variables: {
          data: { email: inputEmail, password: inputPassword },
        },
        update(cache, { data: { login } }) {
          // const { me } = cache.readQuery({ query: ME });
          cache.writeQuery({
            query: ME,
            data: { me: login },
          });
        },
      });

      history.push('/explore', { direct: 'none' });
    } catch (e) {
      setToast({
        status: true,
        position: 'bottom',
        message: t`Login unsuccessfully! ${e}`,
        duration: 3000,
        color: 'danger',
      });
      return;
    }
  };

  return (
    <Page title="Log In">
      <Content className="flex justify-center">
        <form className="w-m m-x-auto m-y-auto" noValidate onSubmit={onLoginUser}>
          <List>
            <Item className="p-0">
              <Label position="stacked" color="primary">
                <Trans id="label.input.email" />
              </Label>
              <Input
                name="email"
                type="text"
                value={inputEmail}
                spellCheck={false}
                autocapitalize="off"
                onChange={(e: any) => setInputEmail(e.detail.value)}
                required
                placeholder="example@brightizen.com"
              ></Input>
            </Item>

            <Item className="p-0">
              <Label position="stacked" color="primary">
                <Trans id="label.input.password" />
              </Label>
              <Input
                name="password"
                type="password"
                value={inputPassword}
                onChange={(e: any) => setInputPassword(e.detail.value)}
              ></Input>
            </Item>
          </List>

          <Toast
            isOpen={toast?.status}
            position={toast?.position}
            message={toast?.message}
            duration={toast?.duration}
            color={toast?.color}
            onDidDismiss={() => setToast({ ...toast, status: false })}
          />

          {LOGIN_loading && <Loading isOpen={LOGIN_loading} message={t`Logging in...`} />}

          <Row>
            <Col className="p-0">
              <Button type="submit" expand="block">
                <Trans id="label.button.login" />
              </Button>
            </Col>
            <Col className="p-0">
              <Button routerLink="/signup" expand="block" fill="outline">
                <Trans id="label.button.signup" />
              </Button>
            </Col>
          </Row>
        </form>
      </Content>
    </Page>
  );
};
