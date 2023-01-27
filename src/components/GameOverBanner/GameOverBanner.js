import React from 'react';

function GameOverBanner({ variant, answer, numGuesses, handleRestartGame }) {
  return (
    <div className={`banner ${variant}`}>
      {variant === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guesses</strong>.
        </p>
      )}
      {variant === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
}

export default GameOverBanner;
