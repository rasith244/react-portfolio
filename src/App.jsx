import { useContext } from "react";
import HeaderMenu from "./components/header/HeaderMenu";
import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import SkillsLists from "./components/skillsLists/SkillsLists";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <HeaderMenu />
      <Toggle />
      <Intro />
      <About />
      <SkillsLists />
      <Contact />
    </div>
  );
};

export default App;
