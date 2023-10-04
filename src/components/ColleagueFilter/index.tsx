import React, { FunctionComponent } from 'react';
import './colleagueFilter.css';

type Props = {
  searchTerm: string;
  setSearchTerm(option: string): void;
};

export const ColleagueFilter: FunctionComponent<Props> = (props) => {
  const { searchTerm, setSearchTerm } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const placeHolderText = 'Search colleague/office';
  const ariaLabel = 'Search colleague and/or office';

  return (
    <form className="colleague__filter" onSubmit={(event) => onSubmit(event)}>
      <input
        className="colleague__filter__input"
        type="search"
        placeholder={placeHolderText}
        value={searchTerm}
        onChange={(event) => handleChange(event)}
        aria-label={ariaLabel}
      ></input>
    </form>
  );
};
