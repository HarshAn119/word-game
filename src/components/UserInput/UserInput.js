import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { message } from 'antd';
import './UserInput.css';
import { saveState, updateScore } from '../../redux/reducers/wordReducer';

const warning = (text) => {
  message.warning(text);
};

const UserInput = ({ setNewWord, setAnswer }) => {
  let data = useSelector((state) => state.wordReducer.data.apiData); // redux store
  const dispatch = useDispatch();

  const [word, setWord] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(updateScore('GET_NEW_WORD'));
    setNewWord((prev) => prev + 1);
  };

  const handleOnChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word) {
      if (word === data['word']) {
        dispatch(saveState());
        setWord('');
        setAnswer(true);
        setNewWord((prev) => prev + 1);
        dispatch(updateScore('CORRECT_GUESS'));
      } else {
        setWord('');
        setAnswer(false);
        dispatch(updateScore('WRONG_GUESS'));
      }
    } else warning('Please enter the word');
  };

  return (
    <div className="user-input">
      <form action="#" className="form">
        <div className="form__desc">
          <input
            onChange={handleOnChange}
            type="text"
            value={word}
            className="form__input"
            id="word"
            placeholder="Enter the word"
            required
            autoComplete="off"
          />
          <label htmlFor="word" className="form__label">
            Guess the word
          </label>
        </div>
        <div className="form__group">
          <CustomButton
            onClick={handleSubmit}
            className="form__group__btn"
            text="Submit &rarr;"
          />
          <CustomButton
            onClick={handleReset}
            className="form__group__btn"
            text="Get New Word"
          />
        </div>
      </form>
    </div>
  );
};

export default UserInput;
