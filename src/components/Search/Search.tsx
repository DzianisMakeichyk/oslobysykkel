import * as React from 'react';
/* tslint:disable-next-line */

import { InputWrapper } from './styles';

interface SearchProps {
  onSearch: (ev: any) => void;
}

const Search = ({
  onSearch,
}: SearchProps) => {
  return (
    <InputWrapper>
      <label htmlFor="search">Search by name:</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Kværnerveien"
        onChange={onSearch}
      />
    </InputWrapper>
  );
};

export default Search;
