import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for the mode saved in localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true"); // Save mode to localStorage
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false"); // Save mode to localStorage
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
