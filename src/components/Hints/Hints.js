import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './Hints.css';

const Hints = () => {
  const handleOnClick = () => {
    const hintbox = document.querySelector('.hints__container--desc');
    hintbox.classList.remove('hidden');
  };

  return (
    <div className="hints">
      <div className="hints__container">
        <div className="hints__container--stats">
          <span className="hints__subText">1st hint</span>
          <span className="hints__subText">2 POINTS</span>
        </div>
        <div className="hints__container--desc hidden">
          <p className="hints__mainText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo
            ut, nam placeat commodi eum?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium aut soluta modi vitae amet vel
            similique exercitationem nostrum porro omnis possimus eos repellat
            praesentium nesciunt, perspiciatis optio excepturi. Quis, at.
          </p>
        </div>
        <CustomButton
          onClick={handleOnClick}
          className="hints__reveal--btn"
          text="Reveal Hint"
        />
      </div>
    </div>
  );
};

export default Hints;
