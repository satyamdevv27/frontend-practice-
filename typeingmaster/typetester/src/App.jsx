import { useState } from "react";
import data from "./paragraph.json";
import "./App.css";

function App() {
  /* ================= STATE ================= */

  const [difficulty, setDifficulty] = useState("easy");
  const [passage, setPassage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isstarted, setisstarted] = useState(false);
  const [isfinished, setisfinished] = useState(false);

  /* ============== FUNCTIONS ============== */

  const generatePassage = () => {
    setisstarted(true);
    const filtered = data.passages.filter((p) => p.difficulty === difficulty);

    if (filtered.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filtered.length);

    setPassage(filtered[randomIndex].text);
    setUserInput(""); // reset typing when new passage loads
  };

  /* ============== DERIVED DATA ============== */

  const characters = passage.split("");

  /* ================= UI ================= */

  return (
    <>
      <h1>Select your difficulty level</h1>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button onClick={generatePassage}>Start</button>

      <div>
        {characters.map((char, i) => {
          let className = "";

          if (i < userInput.length) {
            className = userInput[i] === char ? "correct" : "incorrect";
          } else if (i === userInput.length) {
            className = "current";
          }

          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      <input
        type="text"
        value={userInput}
        disabled={!isstarted}
        onChange={(e) => {
          if (!isstarted) setisstarted(true);
          setUserInput(e.target.value);
          if (e.target.value.length === passage.length) setisfinished(true);
        }}
      />
    </>
  );
}

export default App;
