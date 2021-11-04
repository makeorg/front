import React, { useEffect, useState } from 'react';
import { QuestionService } from 'Shared/services/Question';
import { useParams } from 'react-router';
import { i18n } from 'Shared/i18n';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { getSequenceKeywordLink } from 'Shared/helpers/url';
import { trackOpenSequence } from 'Shared/services/Tracking';
import { COMPONENT_PARAM_SEQUENCE_KEYWORD } from 'Shared/constants/tracking';
import {
  CardStyle,
  CardTitleStyle,
  CardDescriptionStyle,
} from 'Client/features/consultation/Cards/style';
import { SvgAngleArrowRight, SvgArrowUp } from 'Client/ui/Svg/elements';
import {
  KeywordsListWrapperStyle,
  KeywordListItemStyle,
  KeywordItemLinkStyle,
} from './style';

type Props = {
  question: QuestionType,
  isKeywordActive: boolean,
};

export const Keywords = ({ question, isKeywordActive }: Props) => {
  const { country } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const KEYWORD_THRESHOLD = 5;

  const getQuestionKeywords = async () => {
    setIsLoading(true);
    const response = await QuestionService.getQuestionKeywords(
      question.questionId,
      KEYWORD_THRESHOLD
    );

    if (response) {
      setKeywords(response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuestionKeywords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isKeywordActive) {
    return null;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <CardStyle className="desktop-half margin-bottom no-padding-bottom">
      <SvgArrowUp
        fill="#253186"
        aria-hidden
        width={26}
        height={29}
        focusable="false"
      />
      <CardTitleStyle>
        {i18n.t('consultation.cards.keywords.title')}
      </CardTitleStyle>
      <CardDescriptionStyle>
        {i18n.t('consultation.cards.keywords.description')}
      </CardDescriptionStyle>
      <KeywordsListWrapperStyle>
        {keywords.map(keyword => (
          <KeywordListItemStyle key={keyword.key}>
            <KeywordItemLinkStyle
              to={getSequenceKeywordLink(
                country,
                question.slug,
                encodeURI(keyword.key),
                {
                  introCard: false,
                  pushProposal: false,
                }
              )}
              onClick={() =>
                trackOpenSequence(COMPONENT_PARAM_SEQUENCE_KEYWORD)
              }
            >
              {keyword.label}
              <SvgAngleArrowRight width={17} height={17} />
            </KeywordItemLinkStyle>
          </KeywordListItemStyle>
        ))}
      </KeywordsListWrapperStyle>
    </CardStyle>
  );
};
