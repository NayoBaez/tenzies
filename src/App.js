import Dice from "./Dice";
import { nanoid } from "nanoid";
import confetti from "react-confetti";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dice />
    </div>
  );
}

export default App;
