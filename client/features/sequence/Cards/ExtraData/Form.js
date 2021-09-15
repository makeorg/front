// @flow
import { type DemographicParameterType } from 'Shared/types/demographic';
import { type StateRoot } from 'Shared/store/types';
import { BlackBorderButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import React, { useEffect, useMemo, useState } from 'react';
import { i18n } from 'Shared/i18n';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { matchMobileDevice } from 'Shared/helpers/styled';
import { DemographicsTrackingService } from 'Shared/services/DemographicsTracking';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { useLocation } from 'react-router';
import {
  trackClickSaveDemographics,
  trackClickSkipDemographics,
  trackDisplayDemographics,
} from 'Shared/services/Tracking';
import { DEMOGRAPHICS_COOKIE } from 'Shared/constants/cookies';
import {
  DEMOGRAPHIC_LAYOUT_ONE_COLUMN_RADIO,
  DEMOGRAPHIC_LAYOUT_SELECT,
  DEMOGRAPHIC_LAYOUT_THREE_COLUMNS_RADIO,
} from 'Client/helper/demographics';
import { Logger } from 'Shared/services/Logger';
import { RadioDemographics } from './Radio';
import { ExtraDataFormStyle, SkipIconStyle, SubmitWrapperStyle } from './style';
import { SelectDemographics } from './Select';

const SKIP_TRACKING_VALUE = null;

type Props = {
  demographicId: string,
  name: string,
  layout: string,
  data: DemographicParameterType[],
  token: string,
  submitSuccess: () => void,
};

export const renderFormUI = (
  layout: string,
  data: DemographicParameterType[],
  currentValue: string,
  setCurrentValue: () => {}
) => {
  switch (layout) {
    case DEMOGRAPHIC_LAYOUT_ONE_COLUMN_RADIO:
      return (
        <RadioDemographics
          type="one-column"
          data={data}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      );
    case DEMOGRAPHIC_LAYOUT_THREE_COLUMNS_RADIO:
      return (
        <RadioDemographics
          type="three-columns"
          data={data}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      );
    case DEMOGRAPHIC_LAYOUT_SELECT:
      return (
        <SelectDemographics
          data={data}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      );
    default:
      return null;
  }
};

export const ExtraDataForm = ({
  demographicId,
  name,
  layout,
  data,
  token,
  submitSuccess,
}: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const [currentValue, setCurrentValue] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState();
  const [isSkipDisabled, setIsSkipDisabled] = useState(false);
  const FORM_NAME = `demographics`;
  const isMobile = matchMobileDevice(device);

  // set cookie duration to a month with december corner case
  const expiryDate = new Date();
  const month = (expiryDate.getMonth() + 1) % 12;
  expiryDate.setMonth(month);

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies([DEMOGRAPHICS_COOKIE]);

  const utmParams = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const accumulator = {};
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        accumulator[key] = params.getAll(key).join(',');
      }
    });

    return accumulator;
  }, [location.search]);

  const handleSubmit =
    value => async (event: SyntheticInputEvent<HTMLInputElement>) => {
      event.preventDefault();
      setIsSubmitDisabled(true);
      setIsSkipDisabled(true);
      setCookie(DEMOGRAPHICS_COOKIE, true, {
        path: '/',
        expires: expiryDate,
      });
      const success = () => {
        setIsSubmitDisabled(false);
        setIsSkipDisabled(false);
        dispatch(incrementSequenceIndex());
        if (value === SKIP_TRACKING_VALUE) {
          trackClickSkipDemographics(name, demographicId);
        } else {
          trackClickSaveDemographics(name, demographicId);
        }
        submitSuccess();
      };
      const error = (message: string, content: ?Object) => {
        Logger.logError({ message, body: content, name: 'demographics' });
        setIsSubmitDisabled(false);
        setIsSkipDisabled(false);
      };

      await DemographicsTrackingService.track(
        demographicId,
        token,
        value,
        utmParams,
        success,
        error
      );
    };

  const onClickSkip = event => {
    handleSubmit(SKIP_TRACKING_VALUE)(event);
  };

  useEffect(() => {
    setIsSubmitDisabled(!currentValue);
  }, [currentValue]);

  useEffect(() => {
    trackDisplayDemographics(name, demographicId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExtraDataFormStyle
      id={FORM_NAME}
      name={FORM_NAME}
      onSubmit={handleSubmit(currentValue)}
      method="post"
    >
      {renderFormUI(layout, data, currentValue, setCurrentValue)}
      <SubmitWrapperStyle>
        <BlackBorderButtonStyle
          disabled={isSkipDisabled}
          onClick={onClickSkip}
          data-cy-button="skip-demographics"
        >
          <SkipIconStyle aria-hidden focusable={false} />
          {i18n.t('demographics_card.skip')}
        </BlackBorderButtonStyle>
        <SubmitButton
          data-cy-button="submit-demographics"
          formName={FORM_NAME}
          label={
            isMobile
              ? i18n.t('demographics_card.submit_mobile')
              : i18n.t('demographics_card.submit_desktop')
          }
          disabled={isSubmitDisabled}
        />
      </SubmitWrapperStyle>
    </ExtraDataFormStyle>
  );
};
