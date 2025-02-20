import React, { useState } from "react";
import colors from "../Background.js";

function Main() {
  const [circles, setCircles] = useState([]);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  function handleClick(e) {
    const circle = {
      id: Date.now(),
      x: e.clientX - 10,
      y: e.clientY - 10,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    };
    setCircles([...circles, circle]);
  }

  function popCircle() {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      const lastElem = newCircles.pop();
      setUndo((prevUndo) => [...prevUndo, lastElem]);
      return newCircles;
    });
  }

  function pushCircle() {
    setUndo((prevUndo) => {
      const newUndo = [...prevUndo];
      const lastElem = newUndo.pop();
      setCircles((prevCircles) => [...prevCircles, lastElem]);
      return newUndo;
    });
  }

  function deleteAll() {
    setCircles([]);
    setUndo([]);
    setRedo([]);
  }

  console.log("circles:", circles);
  console.log("undo:", undo);
  return (
    <>
      <div id="buttons">
        <button
          disabled={circles.length === 0 ? true : false}
          onClick={popCircle}
        >
          UNDO
        </button>
        <button
          disabled={undo.length === 0 ? true : false}
          onClick={pushCircle}
        >
          REDO
        </button>
        <button
          disabled={circles.length === 0 ? true : false}
          onClick={deleteAll}
        >
          RESET
        </button>
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
