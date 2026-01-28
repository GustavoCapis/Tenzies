import { useState } from "react";
import Die from "./Die.jsx";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice);

  //win condition
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  //returns an object array with the properties value and isHeld.
  function generateAllNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      diceArray.push({ value: randomNumber, isHeld: false, id: i });
    }

    return diceArray;
  }

  //roll dice function
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld === false
          ? { ...die, value: Math.floor(Math.random() * 6) + 1 }
          : die,
      ),
    );
  }

  //Hold dice function
  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item,
      ),
    );
  }

  //New Game function
  function resetGame() {
    setDice(generateAllNewDice());
  }

  //Handle click on button function
  function handleClick() {
    gameWon ? resetGame() : rollDice();
  }

  //map over dice
  const diceElements = dice.map((obj) => (
    <Die
      key={obj.id}
      value={obj.value}
      isHeld={obj.isHeld}
      id={obj.id}
      onHold={hold}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button className="roll-button" onClick={handleClick}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
