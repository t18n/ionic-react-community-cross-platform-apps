import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Checkbox } from 'components/atoms/Checkbox';
import { Input } from 'components/atoms/Input';
import { Item, Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
import { Loading } from 'components/atoms/Loading';
import { Toast } from 'components/atoms/Toast';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import { useLoginUser } from 'graphql/operation/user/mutation';
import { ME } from 'graphql/operation/user/shape';
import { useToast } from 'hooks/useToast';
import React, { useEffect, useState } from 'react';

type LoginProps = {
  history: any;
};

export const Login = ({ history }: LoginProps) => {
  const [login, { loading: LOGIN_loading }] = useLoginUser();
  const [toast, setToast] = useToast(null);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [rememberChecked, setRememberChecked] = useState(false);

  useEffect(() => {
    console.log('inputEmail', inputEmail);
    console.log('inputPassword', inputPassword);
  }, [inputEmail, inputPassword]);

  const onLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputPassword || !inputEmail) {
      setToast({
        status: true,
        position: 'bottom',
        message: t`error.pleaseFillAllRequiredData`,
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
        message: `${t`message.logInSuccessfully`}${e}`,
        duration: 3000,
        color: 'danger',
      });
      return;
    }
  };

  return (
    <Page>
      <Breadcrumb title={t`page.title.login`} />
      <div className="px py">
        <form
          className="w-100p h-100p flex flex-col content-center justify-center"
          noValidate
          onSubmit={onLoginUser}
        >
          <List slot="start" className="w-m mx-auto">
            <Item className="p-0 mt-m item-input">
              <Label position="stacked" color="primary">
                <Trans id="label.input.email" />
              </Label>
              <Input
                name="email"
                type="text"
                value={inputEmail}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={(e: any) => setInputEmail(e.detail.value)}
                required
                placeholder="example@brightizen.com"
              />
            </Item>

            <Item className="p-0 mt-m item-input">
              <Label position="stacked" color="primary">
                <Trans id="label.input.password" />
              </Label>
              <Input
                name="password"
                type="password"
                value={inputPassword}
                onIonChange={(e: any) => setInputPassword(e.detail.value)}
              />
            </Item>
          </List>

          <Row className="w-m mx-auto mt-m">
            <Col className="p-0">
              <div className="flex items-center justify-start">
                <Checkbox
                  checked={rememberChecked}
                  onIonChange={(e: any) => setRememberChecked(e.detail.checked)}
                />
                <Label className="ml-s text-button case-none color-medium">
                  <Trans id="label.checkbox.rememberMe" />
                </Label>
              </div>
            </Col>
            <Col className="p-0 flex items-center justify-end">
              <Button
                routerLink="/forgot-password"
                expand="block"
                fill="clear"
                className="ml-auto color-medium"
              >
                <Trans id="label.forgotPassword" />
              </Button>
            </Col>
          </Row>

          <Row className="w-m mt-l mx-auto">
            <Col className="p-0 mr-m">
              <Button type="submit" expand="block">
                <Trans id="label.login" />
              </Button>
            </Col>
            <Col className="p-0 ml-m">
              <Button routerLink="/signup" expand="block" fill="outline">
                <Trans id="label.signup" />
              </Button>
            </Col>
          </Row>

          <Toast
            isOpen={toast?.status}
            position={toast?.position}
            message={toast?.message}
            duration={toast?.duration}
            color={toast?.color}
            onDidDismiss={() => setToast({ ...toast, status: false })}
          />

          {LOGIN_loading && <Loading isOpen={LOGIN_loading} message={t`message.loggingIn`} />}
        </form>
      </div>
    </Page>
  );
};
