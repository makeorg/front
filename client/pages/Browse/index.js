// @flow
import React, { useEffect, useState } from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { QuestionService } from 'Shared/services/Question';
import { Pagination } from 'Client/ui/Elements/Pagination';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { useLocation, useParams } from 'react-router';
import { BrowseConsultationsList } from 'Client/features/consultation/Browse/List';
import { isBrowseConsultationsPage } from 'Shared/routes';
import { BrowseConsultationsHeader } from 'Client/features/consultation/Browse/Header';
import { BrowseConsultationsTitles } from 'Client/features/consultation/Browse/Titles';
import { BrowsePageWrapperStyle, BrowsePageInnerStyle } from './style';

const BrowseConsultationsPage = () => {
  const location = useLocation();
  const params = useParams();
  const { country, language, pageId } = params;
  const consultationsPage = isBrowseConsultationsPage(location.pathname);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<?(HomeQuestionType[])>(null);
  const [questionsTotal, setTotal] = useState<number>(0);
  const currentPageId = parseInt(pageId, 10);

  const CONSULTATIONS_STATUS = consultationsPage ? 'open' : 'finished';
  const SORT_ALGORITHM = consultationsPage ? 'featured' : 'chronological';
  const CONSULTATIONS_LIMIT = 8;
  const CONSULTATIONS_SKIP = CONSULTATIONS_LIMIT * (currentPageId - 1);

  const initConsultationsList = async () => {
    setIsLoading(true);
    const response = await QuestionService.getQuestions(
      country,
      language,
      CONSULTATIONS_STATUS,
      SORT_ALGORITHM,
      CONSULTATIONS_LIMIT,
      CONSULTATIONS_SKIP
    );

    if (response) {
      setQuestions(response.results);
      setTotal(response.total);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initConsultationsList();
    /** todo Tracking */
  }, [CONSULTATIONS_STATUS, SORT_ALGORITHM, params]);

  return (
    // todo Meta
    <>
      <BrowseConsultationsHeader />
      <BrowsePageWrapperStyle as="section" aria-labelledby="browse_title">
        <BrowsePageInnerStyle>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <BrowseConsultationsTitles />
              {questions && (
                <BrowseConsultationsList
                  questions={questions}
                  resultsContext={!consultationsPage}
                />
              )}
              {questionsTotal > CONSULTATIONS_LIMIT && (
                <Pagination
                  itemsPerPage={CONSULTATIONS_LIMIT}
                  itemsTotal={questionsTotal}
                />
              )}
            </>
          )}
        </BrowsePageInnerStyle>
      </BrowsePageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default BrowseConsultationsPage; // eslint-disable-line import/no-default-export
