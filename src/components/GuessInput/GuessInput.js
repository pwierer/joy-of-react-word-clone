import React, { useState } from 'react';

function GuessInput({ handleNewGuess, disabled }) {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) return;
        handleNewGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required={true}
        minLength={5}
        maxLength={5}
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
