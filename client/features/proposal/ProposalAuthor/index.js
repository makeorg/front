import * as React from 'react';
import i18next from 'i18next';
import type { Author } from 'Shared/types/proposal';
import { AuthorInfos } from './Styled';

type Props = {
  /** Object with author's properties */
  author: Author
}

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return (
    <span>
      {', '}
      {i18next.t('proposal_card.author.age', { age })}
    </span>
  );
};

export const ProposalAuthor = (props: Props) => {
  const { author } = props;

  return (
    <AuthorInfos>
      {author.firstName}
      <ProposalAuthorAge age={author.age} />
    </AuthorInfos>
  );
};