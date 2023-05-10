import React, { useState } from 'react';

const GuessNumberGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const handleNewGame = () => {
    setGameStarted(true);
    setTargetNumber(Math.floor(Math.random() * 1000) + 1);
    setGuess('');
    setMessage('');
    setRemainingAttempts(10);
    setGameOver(false);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleCheckGuess = () => {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      setMessage('Введіть коректне число!');
      return;
    }

    if (parsedGuess === targetNumber) {
      setMessage('Good Job! Ви вгадали число!');
      setGameOver(true);
      return;
    }

    if (parsedGuess < targetNumber) {
      setMessage('Ваше число невірне. Воно більше ніж ' + parsedGuess + '.');
    } else {
      setMessage('Ваше число невірне. Воно менше ніж ' + parsedGuess + '.');
    }

    setRemainingAttempts(remainingAttempts - 1);

    if (remainingAttempts === 1) {
      setGameOver(true);
      setMessage('Game Over! Ви не вгадали число.');
    }
  };

  const handleNewGameClick = () => {
    setGameStarted(false);
    setGuess('');
    setMessage('');
    setRemainingAttempts(10);
    setGameOver(false);
  };

  return (
    <div>
      <h2>Вгадай число</h2>
      {!gameStarted ? (
        <button onClick={handleNewGame}>New Game</button>
      ) : (
        <div>
          <p>Введіть число від 1 до 1000:</p>
          <input type="number" value={guess} onChange={handleGuessChange} />
          <button onClick={handleCheckGuess}>Check</button>
          <p>{message}</p>
          <p>Залишилося спроб: {remainingAttempts}</p>
          {gameOver && (
            <div>
              <p>{message}</p>
              <button onClick={handleNewGameClick}>New Game</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GuessNumberGame;