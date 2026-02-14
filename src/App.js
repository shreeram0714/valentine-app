import { useState } from "react";
import "./App.css";

function App() {
  const [stage, setStage] = useState("start");

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

          <button className="yes-btn disabled-btn" disabled>
            YES 💖
          </button>

          <button
            className="no-btn"
            onClick={() => setStage("triedNo")}
          >
            NO 😈
          </button>
        </div>
      )}

      {/* TRIED NO SCREEN */}
      {stage === "triedNo" && (
        <div className="card surprise-card">
          <h1 className="naughty-text">
            Try NO? 😏
          </h1>

          <p className="romantic-message">
            You thought you had a choice?  
            There’s only one correct answer here 💖
          </p>

          <button
            className="yes-btn big-yes"
            onClick={() => setStage("accepted")}
          >
            Okay Okay… YES 😍
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
