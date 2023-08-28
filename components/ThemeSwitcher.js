"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // when the component is mounted on the client side, this useEffect hook will be called and mounted will be set to True
  // and then the belox jsx will be rendered
  useEffect(() => {
    setMounted(true);
  });

  

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
