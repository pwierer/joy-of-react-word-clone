import React from 'react';

function GameKeyboard({ guesses }) {
  const statusByKey = {};
  for (const guessResults of guesses) {
    for (const { letter, status } of guessResults) {
      statusByKey[letter] = status;
    }
  }

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <div className={`key ${statusByKey['Q']}`}>Q</div>
        <div className={`key ${statusByKey['W']}`}>W</div>
        <div className={`key ${statusByKey['E']}`}>E</div>
        <div className={`key ${statusByKey['R']}`}>R</div>
        <div className={`key ${statusByKey['T']}`}>T</div>
        <div className={`key ${statusByKey['Z']}`}>Z</div>
        <div className={`key ${statusByKey['U']}`}>U</div>
        <div className={`key ${statusByKey['I']}`}>I</div>
        <div className={`key ${statusByKey['O']}`}>O</div>
        <div className={`key ${statusByKey['P']}`}>P</div>
        <div className={`key ${statusByKey['Ü']}`}>Ü</div>
      </div>
      <div className="keyboard-row">
        <div className={`key ${statusByKey['A']}`}>A</div>
        <div className={`key ${statusByKey['S']}`}>S</div>
        <div className={`key ${statusByKey['D']}`}>D</div>
        <div className={`key ${statusByKey['F']}`}>F</div>
        <div className={`key ${statusByKey['G']}`}>G</div>
        <div className={`key ${statusByKey['H']}`}>H</div>
        <div className={`key ${statusByKey['J']}`}>J</div>
        <div className={`key ${statusByKey['K']}`}>K</div>
        <div className={`key ${statusByKey['L']}`}>L</div>
        <div className={`key ${statusByKey['Ö']}`}>Ö</div>
        <div className={`key ${statusByKey['Ä']}`}>Ä</div>
      </div>
      <div className="keyboard-row">
        <div className={`key ${statusByKey['Y']}`}>Y</div>
        <div className={`key ${statusByKey['X']}`}>X</div>
        <div className={`key ${statusByKey['C']}`}>C</div>
        <div className={`key ${statusByKey['V']}`}>V</div>
        <div className={`key ${statusByKey['B']}`}>B</div>
        <div className={`key ${statusByKey['N']}`}>N</div>
        <div className={`key ${statusByKey['M']}`}>M</div>
      </div>
    </div>
  );
}

export default GameKeyboard;
