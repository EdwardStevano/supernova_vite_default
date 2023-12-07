import React from "react";
import ButtonWave from "../../../../components/button/buttonWave/ButtonWave";

function MainHome() {
  function handleclick() {
    console.log("click");
  }
  return (
    <div>
      MainHome
      <ButtonWave
        color={"--primaryColor"}
        label={"change"}
        // onClick={handleclick}
      />
    </div>
  );
}

export default MainHome;
