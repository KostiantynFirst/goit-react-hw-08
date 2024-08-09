import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeNameFilter,
  changeNumberFilter,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
} from '../../redux/filters/selectors';

import { SearchBoxContainer, SearchLine, SearchLabel, SearchInput } from './SearchBox.styled';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterNameValue = useSelector(selectNameFilter);

  const handleFilterChange = (event, typeEvent) => {
    typeEvent === 'name'
      ? dispatch(changeNameFilter(event.target.value))
      : dispatch(changeNumberFilter(event.target.value));
  };

  const nameSearchID = useId();

  return (
    <SearchBoxContainer>
      <SearchLine>
        <SearchLabel htmlFor={nameSearchID}>Find contacts by name</SearchLabel>
        <SearchInput
          id={nameSearchID}
          type="text"
          value={filterNameValue}
          onChange={(event) => handleFilterChange(event, 'name')}
        />
      </SearchLine>
    </SearchBoxContainer>
  );
};

export default SearchBox;