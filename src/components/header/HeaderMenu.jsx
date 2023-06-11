import React from "react";
import { scrollToComponent } from "../../utils";

const HeaderMenu = () => {
  const handleClickScroll = (componentDiv) => {
    const element = document.getElementById(componentDiv);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div>
        <navbar>
          <ul>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickScroll(scrollToComponent["Intro"]);
              }}
            >
              Home
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickScroll(scrollToComponent["About"]);
              }}
            >
              Experience
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickScroll(scrollToComponent["SkillsLists"]);
              }}
            >
              Skills
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickScroll(scrollToComponent["Contact"]);
              }}
            >
              Contact
            </li>
          </ul>
        </navbar>
      </div>
    </div>
  );
};

export default HeaderMenu;
