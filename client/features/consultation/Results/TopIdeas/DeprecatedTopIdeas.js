import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import React from 'react';
import { voteStaticParams, VOTE_AGREE_KEY } from 'Shared/constants/vote';
import { i18n } from 'Shared/i18n';
import { ThemeItemType } from 'Shared/types/question';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import { VoteIconStyle } from 'Client/ui/Elements/Buttons/style';
import {
  TopIdeasParagraphStyle,
  ThemeAgreeResultsStyle,
  ThemeItemProposalStyle,
  ThemeListItemStyle,
  ThemeQualifiedStyle,
  ThemeResultsButtonStyle,
  ThemeResultsDetailsStyle,
  ThemeResultsWrapperStyle,
} from './style';

type Props = {
  topIdeas: {
    first_theme: ThemeItemType,
    second_theme: ThemeItemType,
  },
  question: QuestionType,
};

export const DeprecatedTopIdeas = ({ topIdeas, question }: Props) => {
  const voteAttributes = voteStaticParams[VOTE_AGREE_KEY];

  return (
    <>
      <TopIdeasParagraphStyle>
        {i18n.t('consultation.results.top_ideas.deprecated_introduction')}
      </TopIdeasParagraphStyle>
      {topIdeas.map((topIdea, index) => (
        <Collapse
          key={topIdea.name}
          title={i18n.t(
            'consultation.results.top_ideas.deprecated_theme_title',
            {
              count: index + 1,
              name: topIdea.name,
            }
          )}
          open={index === 0}
          noMargin
          language={question.language}
        >
          <UnstyledListStyle>
            {topIdea.ideas.map(idea => (
              <ThemeListItemStyle key={idea.idea}>
                <ThemeItemProposalStyle as="p" lang={question.language}>
                  {idea.idea}
                </ThemeItemProposalStyle>
                <ThemeResultsWrapperStyle>
                  <ThemeResultsButtonStyle className="agree voted">
                    <VoteIconStyle
                      className="agree"
                      aria-hidden
                      focusable="false"
                    />
                  </ThemeResultsButtonStyle>
                  <ThemeResultsDetailsStyle>
                    <ThemeAgreeResultsStyle
                      as="span"
                      color={voteAttributes.color}
                    >
                      {`${idea.agreement}% ${i18n.t('vote.agree')}`}
                    </ThemeAgreeResultsStyle>
                    <ColumnToRowElementStyle as="span">
                      <span>
                        {i18n.t('qualification.likeIt')}
                        <ThemeQualifiedStyle>
                          {` ${idea.adhesion}% `}
                        </ThemeQualifiedStyle>
                      </span>
                      <span>
                        {i18n.t('qualification.doable')}
                        <ThemeQualifiedStyle>
                          {` ${idea.realistic}% `}
                        </ThemeQualifiedStyle>
                      </span>
                    </ColumnToRowElementStyle>
                  </ThemeResultsDetailsStyle>
                </ThemeResultsWrapperStyle>
              </ThemeListItemStyle>
            ))}
          </UnstyledListStyle>
        </Collapse>
      ))}
    </>
  );
};
