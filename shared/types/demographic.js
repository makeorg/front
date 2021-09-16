export type DemographicParameterType = {
  label: string,
  value: string,
};

export type DemographicDataType = {
  id: string,
  name: string,
  layout: 'OneColumnRadio' | 'Select' | 'ThreeColumnsRadio',
  title: string,
  parameters: DemographicParameterType[],
  token: string,
};
