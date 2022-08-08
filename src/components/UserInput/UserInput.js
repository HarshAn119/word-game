import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './UserInput.css';

const UserInput = () => {
  return (
    <div className="user-input">
      <form action="#" className="form">
        <div className="form__desc">
          <input
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
          <CustomButton className="form__group__btn" text="Submit &rarr;" />
        </div>
      </form>
    </div>
  );
};

export default UserInput;
