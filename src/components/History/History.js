import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from '../../redux/reducers/wordReducer';
import './History.css';

const History = () => {
  let data = useSelector((state) => state.wordReducer.data.history);
  const dispatch = useDispatch();

  const handleOnClick = (ind) => {
    dispatch(setHistory({ ind }));
  };

  return (
    <div className="history">
      {data.map((ele, ind) => (
        <div className="history__container">
          <button className="history__btn" onClick={() => handleOnClick(ind)}>
            {ele.word}
          </button>
          <span className="history__points">{ele.score} pts</span>
        </div>
      ))}
    </div>
  );
};

export default History;
