import './style';
import { ColleagueOverview } from './components/ColleagueOverview';
import { Header } from './components/Header';
import { colleagueResponse } from './mocks/colleagues';
import { useEffect, useState } from 'react';
import { matchEverySearchTerm } from './utils';

const App = () => {
  const [colleagues, setColleagues] = useState(colleagueResponse);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredColleagues = colleagueResponse.filter((colleague) => {
      const matchString = `${colleague.name} ${colleague.office || ''}`;
      const isMatch = matchEverySearchTerm(searchTerm, matchString);
      return isMatch;
    });
    setColleagues(filteredColleagues);
  }, [searchTerm]);

  return (
    <main className="main">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ColleagueOverview colleagues={colleagues} />
    </main>
  );
};

export default App;
