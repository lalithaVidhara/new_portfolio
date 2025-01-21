import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}
