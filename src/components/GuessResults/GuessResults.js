import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guessResults = guesses[index];
        return <Guess key={index} guessResults={guessResults} />;
      })}
    </div>
  );
}

export default GuessResults;
