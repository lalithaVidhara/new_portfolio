import React from "react";
import { useTheme } from "@/src/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-muted text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
