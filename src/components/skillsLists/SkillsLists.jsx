import React from "react";
import Skill from "../skill/skill";
import "./skillsLists.css";
import { scrollToComponent, skills } from "../../utils";

const SkillsLists = () => {
  return (
    <div id={scrollToComponent["SkillsLists"]} className="skl">
      <div className="skl-texts">
        <h1 className="skl-title">Skills</h1>
        <p className="skl-desc"></p>
      </div>
      <div className="skl-list">
        {skills?.length > 0 &&
          skills.map((item) => {
            return <Skill key={item.id} img={item.img} link={item.link} />;
          })}
      </div>
    </div>
  );
};

export default SkillsLists;
