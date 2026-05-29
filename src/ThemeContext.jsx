import { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#ffffff",
    text: "#111111",
  },
  dark: {
    background: "#1f2937",
    text: "#ffffff",
  },
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
