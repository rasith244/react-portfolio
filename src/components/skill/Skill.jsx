import React from "react";
import "./skill.css";

const Skill = (props) => {
  const { img, link } = props;

  return (
    <div className="sk">
      <div className="sk-browser">
        <div className="sk-circle"></div>
        <div className="sk-circle"></div>
        <div className="sk-circle"></div>
      </div>
      <a href={link} alt="" target="_blank" rel="noreferror">
        <img src={img} alt="" className="sk-img" />
      </a>
    </div>
  );
};

export default Skill;
