import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import './Hints.css';

const Hints = () => {
  let data = useSelector((state) => state.wordReducer.data);
  let definitions = [];
  let synonyms = [];
  let antonyms = [];

  const handleOnClick = (i) => {
    const hintbox = document.getElementById(i);
    hintbox?.classList?.remove('hidden');
  };

  const getHints = () => {
    const hints = document.getElementById('hints');
    {
      hints ? (hints.innerHTML = '') : <></>;
    }
    definitions = data['definition'];
    synonyms = data['synonym'];
    antonyms = data['antonym'];

    let ind = 1;
    for (let i = 0; i < definitions?.length; i++) {
      const hints__container = document.createElement('div');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      const p = document.createElement('p');
      const button = document.createElement('button');

      hints__container.classList.add('hints__container');
      div1.classList.add('hints__container--stats');
      div2.classList.add('hints__container--desc');
      div2.setAttribute('id', i);
      button.setAttribute('id', 'customButton');
      button.classList.add('hints__reveal--btn');

      div2.classList.add('hidden');
      span1.classList.add('hints__subText');
      span2.classList.add('hints__subText');
      p.classList.add('hints__maintext');

      span1.innerHTML = `Hint ${ind++}`;
      span2.innerHTML = '3 pts';
      p.innerText = String(definitions[i]);
      button.innerHTML = 'Reveal Hint';

      div1.appendChild(span1);
      div1.appendChild(span2);

      div2.appendChild(p);

      hints__container.appendChild(div1);
      hints__container.appendChild(div2);
      hints__container.appendChild(button);
      hints.appendChild(hints__container);
      button.addEventListener('click', () => handleOnClick(i));
    }
  };
  getHints();

  return (
    <div id="hints" className="hints">
      <div id="hints__container" className="hints__container">
        <div className="hints__container--stats">
          <span className="hints__subText">hint 1</span>
          <span className="hints__subText">3 pts</span>
        </div>
        <div className="hints__container--desc hidden">
          <p className="hints__mainText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem
            iusto, quaerat dolore voluptatem dolores repellendus sapiente
            veniam, quasi architecto numquam illo nobis est odio accusantium
            dolorum minus quis labore ipsa aliquam? Nostrum dignissimos quas
            incidunt sed nesciunt deserunt, cum a modi maxime dicta at
            cupiditate iure obcaecati, suscipit similique!
          </p>
        </div>
        <CustomButton
          onClick={handleOnClick(0)}
          className="hints__reveal--btn"
          text="Reveal Hint"
        />
      </div>
    </div>
  );
};

export default Hints;
