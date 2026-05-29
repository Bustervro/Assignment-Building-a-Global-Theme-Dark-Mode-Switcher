import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "app dark-mode" : "app light-mode"}>
      <div className="card">
        <h1>Global Theme Switcher</h1>

        <p>
          This app uses React Context API to switch between Light Mode and Dark
          Mode globally.
        </p>

        <h2>Current Theme: {theme === "light" ? "Light" : "Dark"}</h2>

        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
