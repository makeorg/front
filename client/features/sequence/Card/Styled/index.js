import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { ProposalCardCentered } from './Cards';
import {
  IntroTitle,
  SecondaryTitle,
  AltMainTitle,
  ExtraLogo
} from './Titles';
import {
  PlaceholderWrapper,
  PlaceholderTitle,
  PlaceholderSeparator,
  PlaceholderDescription,
  PlaceholderButton
} from './Placeholder';
import {
  IntroParagraph,
  FinalParagraph,
  Separator,
  ContentWrapper,
  ContentSpecialWrapper,
  InnerContent,
  FinalCardContentWrapper,
  SharingInner,
  SharingWrapper,
  MoreWrapper,
  PartnerFooter,
  PartnerList,
  PartnerAvatar
} from './Content';
import { Proposal } from './Proposal';
import {
  BackButtonWrapper,
  IntroButton,
  BackButton,
  BackIcon,
  FinalLink,
  AltNextButton,
  PushProposalButton,
  PushProposalNextButton
} from './Buttons';

const ProposalCard = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0}) translateY(-${props => props.position || 0}px);
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transition: transform 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%)' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

/* Card */
ProposalCard.ProposalCardCentered = ProposalCardCentered;

/* Titles */
ProposalCard.IntroTitle = IntroTitle;
ProposalCard.AltMainTitle = AltMainTitle;
ProposalCard.SecondaryTitle = SecondaryTitle;
ProposalCard.ExtraLogo = ExtraLogo;

/* Contents */
ProposalCard.ContentWrapper = ContentWrapper;
ProposalCard.ContentSpecialWrapper = ContentSpecialWrapper;
ProposalCard.InnerContent = InnerContent;
ProposalCard.IntroParagraph = IntroParagraph;
ProposalCard.FinalParagraph = FinalParagraph;
ProposalCard.Separator = Separator;
ProposalCard.FinalCardContentWrapper = FinalCardContentWrapper;
ProposalCard.SharingInner = SharingInner;
ProposalCard.SharingWrapper = SharingWrapper;
ProposalCard.MoreWrapper = MoreWrapper;
ProposalCard.PartnerFooter = PartnerFooter;
ProposalCard.PartnerList = PartnerList;
ProposalCard.PartnerAvatar = PartnerAvatar;

/* Proposal */
// ProposalCard.AuthorInfos = AuthorInfos;
ProposalCard.Proposal = Proposal;

/* Placeholder */
ProposalCard.PlaceholderWrapper = PlaceholderWrapper;
ProposalCard.PlaceholderTitle = PlaceholderTitle;
ProposalCard.PlaceholderSeparator = PlaceholderSeparator;
ProposalCard.PlaceholderDescription = PlaceholderDescription;
ProposalCard.PlaceholderButton = PlaceholderButton;

/* Button */
ProposalCard.BackButtonWrapper = BackButtonWrapper;
ProposalCard.IntroButton = IntroButton;
ProposalCard.BackButton = BackButton;
ProposalCard.BackIcon = BackIcon;
ProposalCard.FinalLink = FinalLink;
ProposalCard.AltNextButton = AltNextButton;
ProposalCard.PushProposalButton = PushProposalButton;
ProposalCard.PushProposalNextButton = PushProposalNextButton;

export default ProposalCard;