export enum LocaleId {
  EN = 'en',
  VI = 'vi',
}

type Locale = {
  id: LocaleId;
  name: string;
};

type Locales = { [key: string]: Locale };

const locales: Locales = {
  en: {
    id: LocaleId.EN,
    name: 'English',
  },
  de: {
    id: LocaleId.VI,
    name: 'Vietnamese',
  },
};

export default locales;
