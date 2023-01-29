import React from "react";
import "./Component1.css";

function Component1(props) {
  const { place, baseball, soft3 } = props;

  return (
    <div className="baseball">
      <div className="overlap-group">
        <div className="rectangle-13"></div>
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-3.svg"
          alt="Vector 3"
        />
        <div className="rectangle-19"></div>
        <div className="place-1 inter-bold-white-36px">{place}</div>
        <div className="baseball-1 aldrich-normal-white-26px">{baseball}</div>
        <img className="soft-3" src={soft3} alt="SOFT 3" />
        <div className="rectangle-22"></div>
      </div>
    </div>
  );
}

export default Component1;
