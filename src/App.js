import { useState } from "react";
import "./App.css";

function App() {
  const [stage, setStage] = useState("start");
  const [noMoves, setNoMoves] = useState(0);
  const [noPosition, setNoPosition] = useState({
    top: "50%",
    left: "55%"
  });

  const moveNoButton = () => {
    if (noMoves < 3) {
      const randomX = Math.random() * 80;
      const randomY = Math.random() * 80;

      setNoPosition({
        top: `${randomY}%`,
        left: `${randomX}%`
      });

      setNoMoves(noMoves + 1);
    }
  };

  return (
    <div className="container">
      <div className="background-hearts"></div>

      {/* START SCREEN */}
      {stage === "start" && (
        <div className="card">
          <h1>Will You Be My Valentine Darlzzz ❤️</h1>
          <button
            className="love-btn"
            onClick={() => setStage("choose")}
          >
            Click Here 💌
          </button>
        </div>
      )}

      {/* CHOOSE SCREEN */}
      {stage === "choose" && (
        <div className="card">
          <h1 className="question">Choose wisely 😌</h1>

          <button
            className="yes-btn"
            onClick={() => setStage("accepted")}
          >
            YES 💖
          </button>

          <button
            className="no-btn"
            onMouseEnter={moveNoButton}
            onClick={() => {
              if (noMoves >= 3) {
                setStage("forceYes");
              }
            }}
            style={{
              top: noPosition.top,
              left: noPosition.left,
              position: noMoves < 3 ? "absolute" : "relative"
            }}
          >
            NO 😈
          </button>
        </div>
      )}

      {/* FORCE YES SCREEN */}
      {stage === "forceYes" && (
        <div className="card surprise-card">
          <h1 className="naughty-text">
            You tried 3 times 😏  
          </h1>

          <h2 className="only-yes">
            Still… One and Only YESSS 💖✨
          </h2>

          <button
            className="yes-btn big-yes"
            onClick={() => setStage("accepted")}
          >
            OKAY FINE YES 😍
          </button>
        </div>
      )}

      {/* FINAL ACCEPTED SCREEN */}
      {stage === "accepted" && (
        <div className="celebration">
          <div className="moon-glow"></div>

          <h1 className="love-title">
            My Heart Belongs To You 💖
          </h1>

          <h2 className="name-reveal">
            Mayiluu 😍
          </h2>

          <p className="romantic-message">
            From today, every sunrise will feel warmer  
            and every night will shine brighter…  
            because you chose me 💫
          </p>

          <h2 className="promise-line">
            I promise to choose you…  
            today, tomorrow, and forever 💍✨
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
