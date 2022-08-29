import React from 'react';
import { useSelector } from 'react-redux';
import ShowHints from '../ShowHints/ShowHints';
import './Hints.css';

const Hints = () => {
  let data = useSelector((state) => state.wordReducer.data.apiData);

  let ind = -1;
  const renderArr = (displayArr, desc) => {
    return displayArr?.map((def) => {
      ind++;
      let pts = 0;
      if (desc === 'definiton') pts = 3;
      else if (desc === 'synonym') pts = 2;
      else if (desc === 'antonym') pts = 2;

      return (
        <ShowHints
          ind={ind + 1}
          pts={pts}
          desc={desc}
          key={ind + 1}
          hintDesc={def}
        />
      );
    });
  };

  const getHints = () => {
    return (
      <>
        {renderArr(data['definition'], 'definiton')}
        {renderArr(data['synonym'], 'synonym')}
        {data['antonym'] ? renderArr(data['antonym'], 'antonym') : <></>}
      </>
    );
  };

  return (
    <div id="hints" className="hints">
      {getHints()}
    </div>
  );
};

export default Hints;
