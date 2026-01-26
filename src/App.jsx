import Die from "./Die.jsx";
export default function App() {
  //returns an array of 10 random numbers between 1-6 inclusive.
  function generateAllNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 7) + 1;
      diceArray.push(randomNumber);
    }

    return diceArray;
  }

  return (
    <main>
      <div className="die-container">
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
        <Die value="3" />
      </div>
    </main>
  );
}
