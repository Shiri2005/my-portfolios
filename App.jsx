import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [butText, chanText] = useState({ backgroundColor: "white" });
  function onit() {
    chanText({ backgroundColor: "black" });
  }
  function takenaway() {
    chanText({ backgroundColor: "white" });
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={butText} onMouseOver={onit} onMouseOut={takenaway}>
        Submit
      </button>
    </div>
  );
}

export default App;
