import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import GameKeyboard from '../GameKeyboard';

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [game, setGame] = useState({});

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleNewGuess(guess) {
    const guessResults = checkGuess(guess, answer) || [];
    const nextGuesses = [...guesses, guessResults];
    setGuesses(nextGuesses);

    if (guessResults.every((res) => res.status === 'correct')) {
      setGame({ status: 'happy', numGuesses: nextGuesses.length });
    } else if (nextGuesses.length >= 6) {
      setGame({ status: 'sad', numGuesses: nextGuesses.length });
    }
  }

  function handleRestartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGame({});
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleNewGuess={handleNewGuess} disabled={!!game.status} />
      <GameKeyboard guesses={guesses} />
      {game.status && (
        <GameOverBanner
          variant={game.status}
          answer={answer}
          numGuesses={game.numGuesses}
          handleRestartGame={handleRestartGame}
        />
      )}
    </>
  );
}

export default Game;
