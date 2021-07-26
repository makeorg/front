// @flow

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router';
import { getLanguageFromParams } from 'Shared/helpers/countries';
import { ROUTE_COUNTRY, BASE_PREVIEW_PATH } from 'Shared/routes';
import { setCountryCode } from 'Shared/store/actions/appConfig';

export const CountryListener = () => {
  const { params } = useRouteMatch({
    path: `(${BASE_PREVIEW_PATH})?${ROUTE_COUNTRY}`,
  }) || {
    params: {},
  };
  const { country } = params;
  const upperCountry = country && country.toUpperCase();
  const query = new URLSearchParams(useLocation().search);
  const language = query.get('lang');
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (upperCountry) {
        dispatch(
          setCountryCode(
            upperCountry,
            getLanguageFromParams(upperCountry, language)
          )
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [upperCountry]
  );

  return null;
};
