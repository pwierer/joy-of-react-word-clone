import React from 'react';

import Banner from '../Banner';

function WonBanner({ numGuesses, handleRestartGame }) {
  return (
    <>
      <Banner status="happy">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guesses</strong>.
        </p>
        <button onClick={handleRestartGame}>Restart Game</button>
      </Banner>
    </>
  );
}

export default WonBanner;
