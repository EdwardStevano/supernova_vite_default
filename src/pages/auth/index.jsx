import React from "react";

import audio from "../../assets/audio/ImagineDragonsThunder.mp3";
import { useLayoutEffect } from "react";
import { useRef } from "react";
function Auth() {
  const audioref = useRef(null);
  const handlePlay = () => {
    audioref.current.play();
  };
  useLayoutEffect(() => {
    window.addEventListener("focus", handlePlay);
    return () => {
      window.removeEventListener("focus", handlePlay);
    };
  });
  return (
    <div className="audio" style={{ visibility: "hidden" }}>
      <audio ref={audioref} controls autoPlay loop>
        <source src={audio} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Auth;
