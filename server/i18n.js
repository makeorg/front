/* @flow */
import { i18n } from 'Shared/i18n';
import { env } from 'Shared/env';
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';
import { translationRessources } from 'Shared/constants/languages';

export const serverInitI18n = () => {
  i18n.init({
    interpolation: {
      escapeValue: false,
    },
    lng: DEFAULT_LANGUAGE,
    debug: env.isDev(),
    resources: translationRessources,
  });
};
