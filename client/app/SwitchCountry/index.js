// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { getHomeLink } from 'Shared/helpers/url';
import { setLanguageByCountryCode } from 'Shared/store/actions/appConfig';
import {
  compareCountriesByName,
  getLanguageFromCountryCode,
} from 'Shared/helpers/countries';
import { modalClose } from 'Shared/store/actions/modal';
import { DateHelper } from 'Shared/helpers/date';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import {
  CountryLinkStyle,
  CountryListStyle,
  SelectedCountryIconStyle,
  SwitchCountryTitleStyle,
} from './style';

export const SwitchCountry = () => {
  const dispatch = useDispatch();
  const { country, countriesWithConsultations } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const countries = [];

  countriesWithConsultations.map(countryCode =>
    countries.push({
      isoCode: countryCode,
      name: i18n.t(`countries.${countryCode}`),
    })
  );

  countries.sort(compareCountriesByName);

  const switchCountry = (countryCode: string) => {
    if (country === countryCode) {
      return () => {};
    }
    const language = getLanguageFromCountryCode(countryCode);
    dispatch(setLanguageByCountryCode(countryCode));
    trackingParamsService.country = countryCode;
    trackingParamsService.language = language;
    apiClient.country = countryCode;
    apiClient.language = language;
    i18n.changeLanguage(language);
    DateHelper.language = language;

    return dispatch(modalClose());
  };

  return (
    <nav
      aria-labelledby="switch_country_title"
      data-cy-container="country_switch_nav"
    >
      <SwitchCountryTitleStyle id="switch_country_title">
        {i18n.t('main-footer.country')}
      </SwitchCountryTitleStyle>
      <CountryListStyle>
        {countries.map(item => (
          <li key={item.isoCode}>
            <CountryLinkStyle
              to={getHomeLink(item.isoCode)}
              onClick={() => switchCountry(item.isoCode)}
              className={item.isoCode === country && 'selected'}
              aria-current={item.isoCode === country}
              data-cy-link={`country_switch_${item.isoCode}`}
            >
              {item.name}
              {item.isoCode === country && (
                <SelectedCountryIconStyle aria-hidden focusable="false" />
              )}
            </CountryLinkStyle>
          </li>
        ))}
      </CountryListStyle>
    </nav>
  );
};
