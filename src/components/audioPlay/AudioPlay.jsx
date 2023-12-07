import React from "react";

const AudioPlay = () => {
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
    <div>
      <div className="audio" style={{ visibility: "hidden" }}>
        <audio ref={audioref} controls autoPlay loop>
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default AudioPlay;
