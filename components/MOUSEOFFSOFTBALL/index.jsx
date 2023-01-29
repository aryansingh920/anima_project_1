import React from "react";
import "./MOUSEOFFSOFTBALL.css";

function MOUSEOFFSOFTBALL(props) {
  const { softball, soft3, place } = props;

  return (
    <div className="mouseoff-softball">
      <div className="overlap-group3">
        <div className="softball aldrich-normal-white-26px">{softball}</div>
      </div>
      <div className="flex-row">
        <div className="rectangle-26"></div>
        <img className="soft-3-1" src={soft3} alt="SOFT 3" />
      </div>
      <img
        className="vector-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-3.svg"
        alt="Vector 4"
      />
      <div className="place-3 inter-bold-white-36px">{place}</div>
    </div>
  );
}

export default MOUSEOFFSOFTBALL;
