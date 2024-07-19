import Board from "./components/Board";
import Button from "./components/Button";
import logo from "./assets/logo.png";
import { useState } from "react";
import "./App.css";

const random = (n) => {
  return Math.ceil(Math.random() * n);
};

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <img src={logo} />
      <div>
        <h1>주사위 게임~@@</h1>
      </div>
      <div className="App-button">
        <Button color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-buttons">
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
