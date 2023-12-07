import React from "react";
import "./__buttonWave.scss";
import { useRef } from "react";
import { useState } from "react";
const ButtonWave = ({ onClick, color, label }) => {
  let clientX,
    clientY = 0;

  let [Position, SetPosition] = useState({ x: 0, y: 0 });
  function ButtonAnnimate(event) {
    if (onClick) {
      onClick();
    }
    clientX = event.clientX;
    clientY = event.clientY;

    let targetwidth = event.target.offsetWidth;
    let targetHeigth = event.target.offsetHeight;

    console.log(clientX, clientY);

    const x = (clientX - event.target.offsetLeft) / targetwidth;
    const y = (clientY - event.target.offsetTop) / targetHeigth;

    console.log(x, y);
    SetPosition({ x: x, y: y });
  }
  return (
    <button
      className="btn-wave"
      style={{
        backgroundColor: `var(${color})`,
      }}
      onClick={ButtonAnnimate}
    >
      <div
        className="wave-btn"
        style={{
          top: `calc(100% *${Position.y})`,
          left: `calc(100% *${Position.x})`,
        }}
      ></div>
      {label}
    </button>
  );
};

export default ButtonWave;
