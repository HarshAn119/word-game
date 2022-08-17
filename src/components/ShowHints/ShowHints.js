import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReveal, updateScore } from '../../redux/reducers/wordReducer';
import CustomButton from '../CustomButton/CustomButton';

const ShowHints = ({ ind, pts, desc, hintDesc }) => {
  const dispatch = useDispatch();
  let revealState = useSelector(
    (state) => state.wordReducer.data.revealState[ind - 1]
  );

  const handleOnClick = () => {
    if (revealState === true) return;
    if (desc === 'definiton') dispatch(updateScore('REVEAL_DEFINITION'));
    else if (desc === 'synonym') dispatch(updateScore('REVEAL_SYNONYM'));
    else if (desc === 'antonym') dispatch(updateScore('REVEAL_ANTONYM'));

    dispatch(updateReveal({ ind: ind - 1, val: true }));
  };

  return (
    <div className="hints__container">
      <div className="hints__container--stats">
        <span className="hints__subText">Hint {ind}</span>
        <span className="hints__subText">{desc}</span>
        <span className="hints__subText">{pts} pts</span>
      </div>
      <div className="hints__container--desc">
        {revealState && <p className="hints__mainText">{hintDesc}</p>}
      </div>
      <CustomButton
        onClick={handleOnClick}
        className="hints__reveal--btn"
        text="Reveal Hint"
      />
    </div>
  );
};

export default ShowHints;
