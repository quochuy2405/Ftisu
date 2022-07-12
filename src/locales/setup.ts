import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en/index.json';
import vn from '@/locales/vi/index.json';

// the translations
const resources = {
    en: {
        translation: en
    },
    vi: {
        translation: vn
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;

