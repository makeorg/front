import React from 'react';
import { throttle } from 'Shared/helpers/throttle';
import { type TypeFilterAndSortValues } from 'Shared/types/question';
import {
  SORT_POPULAR,
  SORT_RECENT,
  SORT_CONTROVERSY,
  FILTER_ORGANISATION,
} from 'Shared/constants/explore';

type Props = {
  filterAndSortValues: TypeFilterAndSortValues,
  setFilterAndSortValues: TypeFilterAndSortValues,
  keywords: QuestionKeywordType,
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => any,
};

const getUpdatedFilterAndSortValues = (
  name,
  value,
  currentFilterAndSortValues: TypeFilterAndSortValues
): TypeFilterAndSortValues => {
  switch (name) {
    case 'recent':
      return {
        ...currentFilterAndSortValues,
        sort: 'RECENT',
        sortAlgorithm: undefined,
      };
    case 'popular':
    case 'controversy':
      return {
        ...currentFilterAndSortValues,
        sort: undefined,
        sortAlgorithm: value,
      };
    case 'isNotVoted':
      return {
        ...currentFilterAndSortValues,
        isNotVoted: !JSON.parse(value),
      };
    case 'userType':
      return {
        ...currentFilterAndSortValues,
        userType:
          currentFilterAndSortValues.userType === 'ORGANISATION'
            ? undefined
            : value,
      };
    case 'keywords':
      return {
        ...currentFilterAndSortValues,
        keywords: value,
      };
    default:
      throw new Error(`Unexpected value : "${name}"`);
  }
};

export const FilterAndSort = ({
  filterAndSortValues,
  setFilterAndSortValues,
  keywords,
  handleSubmit,
}: Props) => {
  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newFilterAndSortValues: TypeFilterAndSortValues =
      getUpdatedFilterAndSortValues(name, value, filterAndSortValues);

    setFilterAndSortValues(newFilterAndSortValues);
  };

  return (
    <form onSubmit={throttle(handleSubmit)}>
      <div>Les sujets qui vous interpellent</div>
      {keywords.length > 1 && (
        <ul>
          {keywords.map(keyword => (
            <li key={keyword.key}>
              <input
                type="button"
                name="keywords"
                onClick={handleChange}
                value={keyword.key}
              />
            </li>
          ))}
        </ul>
      )}
      {keywords.length === 1 && (
        <input type="button" onClick={handleChange} value={keywords[0].key} />
      )}
      <div>Trier par</div>
      <ul>
        <li>
          <input
            type="button"
            value={SORT_RECENT}
            name="recent"
            onClick={handleChange}
          />
          Récentes
        </li>
        <li>
          <input
            type="button"
            value={SORT_POPULAR}
            name="popular"
            onClick={handleChange}
          />
          Populaires
        </li>
        <li>
          <input
            type="button"
            value={SORT_CONTROVERSY}
            name="controversy"
            onClick={handleChange}
          />
          Controversées
        </li>
      </ul>
      <div>Filtrer par</div>
      <ul>
        <li>
          <input
            type="checkbox"
            name="isNotVoted"
            value={filterAndSortValues.isNotVoted}
            checked={filterAndSortValues.isNotVoted}
            onChange={handleChange}
            label="non votées"
          />{' '}
          Non votées
        </li>
        <li>
          <input
            type="checkbox"
            value={FILTER_ORGANISATION}
            name="userType"
            checked={filterAndSortValues.userType !== undefined}
            onChange={handleChange}
            label="organisation"
          />{' '}
          Organisation
        </li>
      </ul>
      <button type="submit" label="Afficher les propositions" />
      Afficher les propositions
    </form>
  );
};
