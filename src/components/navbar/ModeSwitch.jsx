import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      enableLightMode();
    } else {
      disableLightMode();
    }
  }, []);

  const toggleLightMode = () => {
    if (lightMode) {
      disableLightMode();
    } else {
      enableLightMode();
    }
  };

  const enableLightMode = () => {
    document.documentElement.classList.add("light");
    localStorage.theme = "light";
    setLightMode(true);
  };

  const disableLightMode = () => {
    document.documentElement.classList.remove("light");
    localStorage.theme = "dark";
    setLightMode(false);
  };

  return <button></button>;
};

export default DarkModeToggle;
