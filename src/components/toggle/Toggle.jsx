import React, { useContext } from "react";
import Sun from "../../Img/sun.png";
import Moon from "../../Img/moon.png";
import "./toggle.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
