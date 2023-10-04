import './style';
import { ColleagueOverview } from './components/ColleagueOverview';
import { Header } from './components/Header';

function App() {
  return (
    <main className="main">
      <Header />
      <ColleagueOverview />
    </main>
  );
}

export default App;
