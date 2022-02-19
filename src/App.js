import './styles/App.css';
import React, { useState } from 'react';

import axios from 'axios';

import Divider from './components/Divider';

const App = () => {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice, what’s diificult if getting up and taking action.");
  const [adviceId, setAdviceId] = useState(117);

  const getAdvice = () => {
    const randNum = Math.floor((Math.random() * 224) + 1);

    axios.get("https://api.adviceslip.com/advice/" + randNum)
      .then((data) => {
        setAdviceId(data.data.slip.id);
        setAdvice(data.data.slip.advice);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <main className='container'>
      <div className='card'>
        <h2 className='card__id'>Advice #{adviceId}</h2>
        <h1 className='card__advice'>"{advice}"</h1>

        <div className='card__divider'>
          <Divider />
        </div>

        <button onClick={getAdvice} className='card__button'>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
        </button>
      </div>

      <div className='attribution'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a href="https://github.com/Hemsundar15">Hemsundar Paranthaman</a>.
      </div>
    </main >
  );
}

export default App;
