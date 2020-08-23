import './index.min.css';

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
        message: `Please fill all required data`,
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
        message: `Login unsuccessfully! ${e}`,
        duration: 3000,
        color: 'danger',
      });
      return;
    }
  };

  return (
    <Page>
      <Content className="">
        <form noValidate onSubmit={onLoginUser}>
          <List>
            <Item>
              <Label position="stacked" color="primary">
                Email
              </Label>
              <Input
                name="email"
                type="text"
                value={inputEmail}
                spellCheck={false}
                autocapitalize="off"
                onChange={(e: any) => setInputEmail(e.detail.value)}
                required
              ></Input>
            </Item>

            <Item>
              <Label position="stacked" color="primary">
                Password
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

          {LOGIN_loading && <Loading isOpen={LOGIN_loading} message={'Logging in...'} />}

          <Row>
            <Col>
              <Button type="submit" expand="block">
                Login
              </Button>
            </Col>
            <Col>
              <Button routerLink="/signup" color="light" expand="block">
                Signup
              </Button>
            </Col>
          </Row>
        </form>
      </Content>
    </Page>
  );
};
