import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Checkbox } from 'components/atoms/Checkbox';
import { Input } from 'components/atoms/Input';
import { Item, Label } from 'components/atoms/Item';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
import { Loading } from 'components/atoms/Loading';
import { Text } from 'components/atoms/Text';
import { Toast } from 'components/atoms/Toast';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import { useLoginUser } from 'graphql/operation/user/mutation';
import { useToast } from 'hooks/useToast';
import React, { useState } from 'react';

type LoginProps = {
  history: any;
};

export const Login = ({ history }: LoginProps) => {
  const [login, { loading: isLoggingIn }] = useLoginUser();
  const [toast, setToast] = useToast(null);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [rememberChecked, setRememberChecked] = useState(false);

  const onLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    // Login user
    try {
      await login(inputEmail, inputPassword);

      history.push('/explore', { direct: 'none' });
    } catch (e) {
      setToast({
        status: true,
        position: 'bottom',
        message: `${t`message.logInSuccessfully`} ${e}`,
        duration: 300000,
        color: 'danger',
      });
      return;
    }
  };

  return (
    <Page>
      <Breadcrumb title={t`page.title.login`} />
      <PageContent>
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
                required
              />
            </Item>
          </List>

          <Row className="w-m mx-auto mt-m">
            <Col className="p-0">
              <div className="flex items-center justify-start h-100p">
                <Checkbox
                  checked={rememberChecked}
                  onIonChange={(e: any) => setRememberChecked(e.detail.checked)}
                />
                <Label className="ml-s text-button case-none">
                  <Text as="span" type="subtitle-s" color="medium" transform="case-none">
                    <Trans id="label.checkbox.rememberMe" />
                  </Text>
                </Label>
              </div>
            </Col>
            <Col className="p-0 flex items-center justify-end">
              <Link href="/forgot-password">
                <Text as="span" type="subtitle-s" color="medium" transform="case-none">
                  <Trans id="label.forgotPassword" />
                </Text>
              </Link>
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

          {isLoggingIn && <Loading isOpen={isLoggingIn} message={t`message.loggingIn`} />}
        </form>
      </PageContent>
    </Page>
  );
};
