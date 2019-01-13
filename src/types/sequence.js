// @flow
import type {
  IntroCardConfig,
  IntroCardWording,
  PushProposalCardConfig,
  SignUpCardConfig,
  SignUpCardWording,
  FinalCardConfig,
  FinalCardWording
} from 'Types/card';

export type ExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposal: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig
}

export type ExtraSlidesWording = {
  introCard: IntroCardWording,
  signUpCard: SignUpCardWording,
  finalCard: FinalCardWording
}

export type Theme = {
  color: string,
  footerFontColor: string,
  gradientStart: string,
  gradientEnd: string,
  weEuropeansTheme?: boolean
}

export type Metas = {
  title: string,
  description: string,
  picture: string
}

export type Wording = {
  title: string,
  question: string,
  metas: Metas
}

export type QuestionConfiguration = {
  slug: string,
  country: string,
  language: string,
  wording: Wording,
  theme: Theme,
  consultationUrl: string,
  sequenceUrl: string,
  sequenceExtraSlidesWording: ExtraSlidesWording,
  sequenceExtraSlidesConfig: ExtraSlidesConfig,
  sequenceSignUpForm: any,
}

export type Card = {
  type: string,
  configuration: mixed
}
