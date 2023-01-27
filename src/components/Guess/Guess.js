import React from 'react';
import { range } from '../../utils';

function Guess({ guessResults = [] }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const { letter, status } = guessResults[index] || {
          letter: '',
          status: '',
        };
        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
