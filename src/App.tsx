import './style';
import { ColleagueOverview } from './components/ColleagueOverview';
import { Header } from './components/Header';
import useColleagues from './hooks/useColleagues';

const App = () => {
  const { colleagues, notification, searchTerm, setSearchTerm } = useColleagues();


  return (
    <main className="main">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {notification && <div role="alert">{notification}</div>}
      <ColleagueOverview colleagues={colleagues} />
    </main>
  );
};

export default App;
