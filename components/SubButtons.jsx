import React from "react";
import "./SubButtons.css";

const buttons = [
  { img: "./img/sbtn1.png", label: "이벤트" },
  { img: "./img/sbtn2.png", label: "결혼/축하" },
  { img: "./img/sbtn3.png", label: "조문/화환" },
  { img: "./img/sbtn4.png", label: "승진/위임" },
  { img: "./img/sbtn5.png", label: "인테리어" },
  { img: "./img/sbtn6.png", label: "미니화분" },
  { img: "./img/sbtn7.png", label: "식물입문" },
  { img: "./img/sbtn8.png", label: "고객센터" },
];

const SubButtons = () => {
  return (
    <div id="subMP">
      <div id="sbtnMP">
        {buttons.map((btn, index) => (
          <div className="sbtnboxMP" key={index}>
            <div className="boxbgMP">
              <img src={btn.img} alt={btn.label} />
            </div>
            <span>{btn.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubButtons;
