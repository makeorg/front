// @flow
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionType } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { useParams } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalSkipLinks } from 'Client/app/SkipLinks/Proposal';
import { SingleProposalCard } from 'Client/features/proposal/SingleProposalCard';
import { QuestionService } from 'Shared/services/Question';
import { ProposalService } from 'Shared/services/Proposal';

const ProposalPage = () => {
  const { proposalId } = useParams();
  const [proposal, setProposal] = useState<?ProposalType>(undefined);
  const [question, setQuestion] = useState<?QuestionType>(undefined);
  useEffect(() => {
    ProposalService.getProposal(proposalId).then(response => {
      setProposal(response || undefined);
    });
  }, [proposalId]);

  useEffect(() => {
    if (proposal) {
      QuestionService.getDetail(proposal.question.questionId).then(response => {
        setQuestion(response || question);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proposal]);

  if (!question) {
    return (
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  return (
    <ThemeProvider theme={question.theme}>
      <MiddlePageWrapperStyle>
        <ProposalSkipLinks />
        {proposal && (
          <>
            <MetaTags
              title={i18n.t('meta.proposal.title', {
                proposal: proposal.content,
                question: question.question,
              })}
              description={i18n.t('meta.proposal.description')}
              picture={question.wording.metas.picture}
            />
            <SingleProposalCard proposal={proposal} />
          </>
        )}
      </MiddlePageWrapperStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
