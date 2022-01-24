// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { i18n } from 'Shared/i18n';
import {
  modalCloseCookies,
  modalShowCookies,
} from 'Shared/store/actions/modal';
import {
  trackClickModalCookieSave,
  trackClickModalCookiePersonalize,
  trackClickModalCookieRefuse,
} from 'Shared/services/Tracking';
import {
  setPreferencesCookie,
  initTrackersFromPreferences,
  removeTrackersFromPreferences,
} from 'Client/helper/cookies';
import {
  acceptAllCookiesPreferences,
  rejectAllCookiesPreferences,
  setCookiesPreferencesInApp,
} from 'Shared/store/actions/user/cookiesPreferences';
import {
  USER_PREFERENCES_COOKIE,
  ACCEPT_ALL_PREFERENCES,
  REJECT_ALL_PREFRENCES,
} from 'Shared/constants/cookies';
import { type StateUserCookiesPreferences } from 'Shared/store/types';
import Cookies from 'universal-cookie';
import {
  CookieModalButtonWithLinkStyle,
  CookieModalBannerWrapperStyle,
  CookieModalRedButtonStyle,
  SvgCookieStyle,
} from './style';
import { FirstStepCookie } from './FirstStep';
import { SecondStepCookie } from './SecondStep';

// set modal and styles
ReactModal.setAppElement('#app');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    border: null,
    padding: null,
    zIndex: 10,
    overflow: 'hidden',
  },
};

export const CookieModal = () => {
  const dispatch = useDispatch();
  const { showCookies }: boolean = useSelector(
    (state: StateRoot) => state.modal
  );
  const { cookiesPreferences }: StateUserCookiesPreferences = useSelector(
    (state: StateRoot) => state.user
  );
  const [customization, enableCustomization] = useState(false);
  const cookies = new Cookies();
  const preferencesCookie: StateUserCookiesPreferences = cookies.get(
    USER_PREFERENCES_COOKIE
  );

  const handleAcceptAll = async () => {
    dispatch(acceptAllCookiesPreferences());
    trackClickModalCookieSave('cookies-accept-all');
    dispatch(modalCloseCookies());
    setPreferencesCookie(ACCEPT_ALL_PREFERENCES);
    initTrackersFromPreferences(ACCEPT_ALL_PREFERENCES);
  };

  const handleRejectAll = () => {
    dispatch(rejectAllCookiesPreferences());
    trackClickModalCookieRefuse();
    dispatch(modalCloseCookies());
    setPreferencesCookie(REJECT_ALL_PREFRENCES);
    removeTrackersFromPreferences(REJECT_ALL_PREFRENCES);
  };

  const toggleCustomization = () => {
    enableCustomization(!customization);
  };

  const handlePersonalize = () => {
    toggleCustomization();
    trackClickModalCookiePersonalize();
  };

  const handlePreferences = () => {
    trackClickModalCookieSave('cookies-accept-preferences');
    dispatch(modalCloseCookies());
    setPreferencesCookie(cookiesPreferences);
    removeTrackersFromPreferences(cookiesPreferences);
    initTrackersFromPreferences(cookiesPreferences);
  };

  useEffect(() => {
    dispatch(
      setCookiesPreferencesInApp({
        ...cookiesPreferences,
        ...preferencesCookie,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!preferencesCookie) {
      dispatch(modalShowCookies());
    }
  }, [preferencesCookie, dispatch]);

  if (!showCookies) {
    return null;
  }

  return (
    <ReactModal
      isOpen={showCookies}
      style={customStyles}
      overlayClassName="modal-overlay"
      data-cy-container="cookie-modal"
    >
      {customization ? (
        <SecondStepCookie
          toggleCustomization={toggleCustomization}
          handleRejectAll={handleRejectAll}
        />
      ) : (
        <FirstStepCookie handleRejectAll={handleRejectAll} />
      )}
      <CookieModalBannerWrapperStyle>
        <SvgCookieStyle aria-hidden focusable="false" />
        {customization ? (
          <CookieModalRedButtonStyle type="button" onClick={handlePreferences}>
            {i18n.t('cookie_modal.save')}
          </CookieModalRedButtonStyle>
        ) : (
          <>
            <CookieModalRedButtonStyle type="button" onClick={handleAcceptAll}>
              {i18n.t('cookie_modal.accept')}
            </CookieModalRedButtonStyle>
            <CookieModalButtonWithLinkStyle
              type="button"
              onClick={handlePersonalize}
            >
              {i18n.t('cookie_modal.personalize')}
            </CookieModalButtonWithLinkStyle>
          </>
        )}
      </CookieModalBannerWrapperStyle>
    </ReactModal>
  );
};
