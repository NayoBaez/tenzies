import React, { useState } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import confetti from "react-confetti";
import "./App.css";

function App() {
  const [dice, setDice] = useState();
  const [tenzies, setTenzies] = useState();

  return (
    <div className="App">
      <Dice />
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div ClassName="dice-container"></div>
      <button className="roll-dice">Roll</button>
    </div>
  );
}

export default App;
