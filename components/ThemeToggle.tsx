"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored ?? "system";
    setTheme(initial);
    applyTheme(initial);

    // Listen for system preference changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if ((localStorage.getItem("theme") ?? "system") === "system") {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function toggle() {
    const resolved = theme === "system" ? getSystemTheme() : theme;
    const next = resolved === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  // Prevent flash of wrong icon during SSR
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-colors"
        aria-label="Toggle theme"
        style={{ color: "#6B7280" }}
      >
        <Sun size={18} weight="bold" />
      </button>
    );
  }

  const resolved = theme === "system" ? getSystemTheme() : theme;
  const isDark = resolved === "dark";

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg transition-colors hover:bg-[var(--surface)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{ color: isDark ? "#5eead4" : "#6B7280" }}
    >
      {isDark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
    </button>
  );
}
