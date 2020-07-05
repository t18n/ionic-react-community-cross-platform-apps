import { i18n } from '@lingui/core';
import { en, vi } from 'make-plural/plurals';

import { LocaleId } from '../../settings/locale';

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('vi', { plurals: vi });

/**
 * Activate a locale
 *
 * @param  {LocaleId} locale locale code
 */
export const activateLanguage = async (locale: LocaleId) => {
  // JSON file not having a default export, so have to explicitly specify it
  const messages = await import(`../../../locale/${locale}/messages.json`).then(
    (module) => module.default
  );

  i18n.load(locale, messages);
  i18n.activate(locale);
};
