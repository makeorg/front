import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { SocialNetworksColors } from 'Client/app/assets/vars/Colors';
import { SvgMailPlain } from 'Client/ui/Svg/elements';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const AuthenticationButtonWrapperStyle = styled(FlexElementStyle)`
  width: 100%;
  align-self: center;
  margin: 20px 0;
  flex-direction: column;
  gap: 17px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    align-items: center;
    justify-content: center;
  }
`;

export const SvgLogoWrapperStyle = styled.span`
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SvgLogoFacebookWrapperStyle = styled(SvgLogoWrapperStyle)`
  background-color: ${SocialNetworksColors.Facebook};
  fill: white;
  padding-top: 5px;
`;

export const SocialButtonStyle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  padding: 0;
  border: black;
  border-radius: 17.5px;
  background-color: ${color.white};
  border: 1px solid ${color.black};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 250px;
  }
`;

export const SocialButtonLabelStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 14px;
  font-weight: bold;
  color: ${color.black};
`;

export const FacebookButtonStyle = styled(SocialButtonStyle)``;

export const GoogleButtonStyle = styled(SocialButtonStyle)``;

export const EmailButtonStyle = styled(SocialButtonStyle)``;

export const AuthenticationEmailIconStyle = styled(SvgMailPlain)`
  width: 14px;
  height: 14px;
  margin-right: 7px;
`;
