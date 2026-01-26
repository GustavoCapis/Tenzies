import { useState } from "react";
import Die from "./Die.jsx";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  //roll dice event function
  function rollDice() {
    setDice(generateAllNewDice());
  }

  //returns an array of 10 random numbers between 1-6 inclusive.
  function generateAllNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 7) + 1;
      diceArray.push(randomNumber);
    }

    return diceArray;
  }
  //map over dice
  const diceElements = dice.map((number) => <Die value={number} />);
  return (
    <main>
      <div className="die-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  );
}
