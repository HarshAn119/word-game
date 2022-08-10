import React, { useState } from 'react';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { message } from 'antd';
import './UserInput.css';

const warning = (text) => {
  message.warning(text);
};

const UserInput = ({ setNewWord, setScore, setAnswer }) => {
  let data = useSelector((state) => state.wordReducer.data);

  const [word, setWord] = useState('');

  const handleOnChange = (e) => {
    setWord(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (word) {
      if (word === data['word']) {
        const input = document.getElementById('word');
        input.value = '';
        setAnswer(true);
        setNewWord((prev) => prev + 1);
        setScore((score) => score + 10);
      } else {
        const input = document.getElementById('word');
        input.value = '';
        setAnswer(false);
        setScore((score) => score - 2);
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
            onClick={handleOnClick}
            className="form__group__btn"
            text="Submit &rarr;"
          />
        </div>
      </form>
    </div>
  );
};

export default UserInput;
