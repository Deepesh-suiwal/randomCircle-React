import React, { useState } from "react";
import colors from "../Background.js";
// import "./Main.css";

function Main() {
  const [circles, setCircles] = useState([]);
  function handleClick(e) {
    const circle = {
      id: Date.now(),
      x: e.clientX - 10,
      y: e.clientY - 10,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    };
    setCircles([...circles, circle]);
  }
  console.log(circles);
  return (
    <>
      <div id="buttons">
        <button>UNDO</button>
        <button>REDO</button>
        <button>RESET</button>
      </div>
      <div id="circles" onClick={handleClick}>
        {circles.length > 0 &&
          circles.map((circle) => {
            return (
              <div
                className="circle"
                key={circle.id}
                style={{
                  left: circle.x + "px",
                  top: circle.y + "px",
                  backgroundColor: circle.backgroundColor,
                }}
              ></div>
            );
          })}
      </div>
    </>
  );
}

export default Main;
