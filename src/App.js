import { useEffect, useState } from 'react';
import { getWord } from './api/api';
import Hints from './components/Hints/Hints';
import History from './components/History/History';
import UserInput from './components/UserInput/UserInput';
import { useDispatch } from 'react-redux';
import { updateWordData } from './redux/reducers/wordReducer';
import { message } from 'antd';
import './App.css';

const success = (text) => {
  message.success(text);
};

const warning = (text) => {
  message.warning(text);
};

const App = () => {
  const dispatch = useDispatch();
  const [newWord, setNewWord] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    wordData();
  }, [newWord]);

  const wordData = async () => {
    let wordDetails = await getWord();
    dispatch(updateWordData(wordDetails));
  };

  return (
    <div className="App">
      {answer === true
        ? success('Correct !!')
        : answer === false
        ? warning('Wrong guess')
        : ''}
      <header className="header">
        <h1>Word Game</h1>
      </header>
      <h1 className="score">{score}</h1>
      <UserInput
        setNewWord={setNewWord}
        setScore={setScore}
        setAnswer={setAnswer}
      />
      <div className="App__description">
        <Hints />
        <History />
      </div>
    </div>
  );
};

export default App;
