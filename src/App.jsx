import { useState } from "react";
import Die from "./Die.jsx";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  //roll dice event function
  function rollDice() {
    setDice(generateAllNewDice());
  }

  //returns an object array with the properties value and isHeld.
  function generateAllNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      diceArray.push({ value: randomNumber, isHeld: false, id: i });
    }

    return diceArray;
  }

  //Hold dice function
  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item,
      ),
    );
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
      <div className="die-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
