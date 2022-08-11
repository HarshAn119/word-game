import { useEffect, useState } from 'react';
import { getWord } from './api/api';
import Hints from './components/Hints/Hints';
import History from './components/History/History';
import UserInput from './components/UserInput/UserInput';
import { useDispatch, useSelector } from 'react-redux';
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
  let score = useSelector((state) => state.wordReducer.data.score); //redux store
  const dispatch = useDispatch();

  const [newWord, setNewWord] = useState(0); // reset the game
  const [answer, setAnswer] = useState(null); // check the answer

  const wordData = async () => {
    // get new word data from API
    let wordDetails = await getWord();
    dispatch(updateWordData(wordDetails));
  };

  useEffect(() => {
    wordData();
    setAnswer(null);
  }, [newWord]);

  return (
    <div className="App">
      {answer === true
        ? success('Correct!! 10 points added to score')
        : answer === false
        ? warning('Wrong guess!! 2 points deducted')
        : ''}
      <header className="header">
        <h1>Word Game</h1>
      </header>
      <h1 className="score">{score}</h1>
      <UserInput setNewWord={setNewWord} setAnswer={setAnswer} />
      <div className="App__description">
        <Hints />
        <History />
      </div>
    </div>
  );
};

export default App;
