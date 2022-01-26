// @flow
import React from 'react';
import { SwitchButton } from 'Client/ui/Elements/Buttons/Switch';
import {
  trackClickCookieSwitchAccept,
  trackClickCookieSwitchRefuse,
} from 'Shared/services/Tracking';
import { setCookiesPreferencesInApp } from 'Shared/store/actions/user/cookiesPreferences';
import { type StateUserCookiesPreferences } from 'Shared/store/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  CookieModalCookieDetailParagraphStyle,
  CookieModalElementSwitchWrapperStyle,
  CookieSwitchWrapperStyle,
} from './style';

type Props = {
  value: string,
  description: string,
  onCookiePage?: boolean,
};

export const CookieSwitch = ({ value, description, onCookiePage }: Props) => {
  const dispatch = useDispatch();
  const { cookiesPreferences }: StateUserCookiesPreferences = useSelector(
    (state: StateRoot) => state.user
  );

  return (
    <CookieModalElementSwitchWrapperStyle>
      <CookieModalCookieDetailParagraphStyle
        className={onCookiePage && 'cookie-page'}
      >
        {description}
        <CookieSwitchWrapperStyle>
          <SwitchButton
            value={cookiesPreferences[value]}
            onEnabling={() => {
              dispatch(
                setCookiesPreferencesInApp({
                  ...cookiesPreferences,
                  [value]: true,
                })
              );
              trackClickCookieSwitchAccept(value);
            }}
            onDisabling={() => {
              dispatch(
                setCookiesPreferencesInApp({
                  ...cookiesPreferences,
                  [value]: false,
                })
              );
              trackClickCookieSwitchRefuse(value);
            }}
          />
        </CookieSwitchWrapperStyle>
      </CookieModalCookieDetailParagraphStyle>
    </CookieModalElementSwitchWrapperStyle>
  );
};
