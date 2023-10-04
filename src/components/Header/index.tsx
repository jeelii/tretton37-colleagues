import { FunctionComponent } from 'react';
import { ColleagueFilter } from '../ColleagueFilter';

type Props = {
  searchTerm: string;
  setSearchTerm(option: string): void;
};

export const Header: FunctionComponent<Props> = (props) => {
  const { searchTerm, setSearchTerm } = props;

  const title = 'The fellowship of the tretton37';

  return (
    <header className="app__section">
      <h1>{title}</h1>
      <ColleagueFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};
