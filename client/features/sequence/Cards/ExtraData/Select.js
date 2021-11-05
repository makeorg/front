// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SelectStyle } from './style';

export const SelectDemographics = ({ data, setCurrentValue }) => {
  const handleChange = event => {
    let { value } = event.target;
    if (value === 'null') {
      value = JSON.parse(value);
    }
    setCurrentValue(value);
  };

  return (
    <SelectStyle onChange={handleChange}>
      <option key="null" value="null">
        {i18n.t('demographics_card.select')}
      </option>
      {data.map(demographic => (
        <option key={demographic.value} value={demographic.value}>
          {demographic.label}
        </option>
      ))}
    </SelectStyle>
  );
};
