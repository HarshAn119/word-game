import './App.css';
import Hints from './components/Hints/Hints';
import History from './components/History/History';
import UserInput from './components/UserInput/UserInput';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Word Game</h1>
      </header>
      <UserInput />
      <div className="App__description">
        <Hints />
        <History />
      </div>
    </div>
  );
}

export default App;
