import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mousedOver, setMousedOver] = useState(false);

  function clickedButton() {
    setHeadingText("Submitted");
  }

  function hoverState() {
    setMousedOver(true);
  }

  function mouseOut() {
    setMousedOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mousedOver ? "black" : "white" }}
        onClick={clickedButton}
        onMouseOver={hoverState}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
