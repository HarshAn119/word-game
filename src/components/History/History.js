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
      {/* <div className="history__container">
        <button className="history__text">start</button>
        <span className="history__points">20 pts</span>
      </div> */}
      {data.map((ele, ind) => (
        <div className="history__container">
          <button onClick={() => handleOnClick(ind)} className="history__text">
            {ele.word}
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;
