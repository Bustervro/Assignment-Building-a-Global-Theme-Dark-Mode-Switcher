import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
