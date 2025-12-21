"use client";

import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function LocalStoragePage() {
  const { value: theme, save: setTheme } = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Aktualny theme: {theme}</p>

      <button onClick={() => setTheme("light")}>Light</button>

      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}
