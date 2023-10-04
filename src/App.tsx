import './style';
import { ColleagueOverview } from './components/ColleagueOverview';
import { Header } from './components/Header';
import useColleagues from './hooks/useColleagues';

const App = () => {
  const { colleagues, searchTerm, setSearchTerm } = useColleagues();

  return (
    <main className="main">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ColleagueOverview colleagues={colleagues} />
    </main>
  );
};

export default App;
