import { i18n } from '@lingui/core';
import { I18nProvider as LinguiI18nProvider, useLingui } from '@lingui/react';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { LocaleId } from 'settings/locale';

import { activateLanguage } from './utils';

/**
 * Watch i18n changes
 */
const I18nWatchLocale: FC = ({ children }) => {
  const { i18n: i18nConfig } = useLingui();

  // Skip render when locale isn't loaded
  if (!i18nConfig.locale) return null;

  // Force re-render when locale changes.
  // Otherwise string translations (e.g. t`Macro`) won't be updated.
  return <Fragment key={i18nConfig.locale}>{children}</Fragment>;
};

/**
 * I18n Wrapper for entire app
 */
const I18nProvider: FC = ({ children }) => {
  const [localeId] = useState(LocaleId.EN);

  useEffect(() => {
    activateLanguage(localeId);
  }, [localeId]);

  return (
    <LinguiI18nProvider i18n={i18n}>
      <I18nWatchLocale>{children}</I18nWatchLocale>
    </LinguiI18nProvider>
  );
};

export default I18nProvider;
