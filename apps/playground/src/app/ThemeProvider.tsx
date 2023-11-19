"use client";

import {
  Button,
  PaletteThemeMode,
  ThemeProvider as UIThemeProvider,
  createTheme,
} from "bib-ui";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<PaletteThemeMode>("dark");

  const myTheme = createTheme({
    palette: {
      mode: themeMode,
    },
    components: {
      Button: {
        defaultProps: {
          shape: "rounded",
        },
      },
    },
  });

  const toggleThemeMode = () => {
    setThemeMode((prev) => {
      const updatedMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", updatedMode);
      return updatedMode;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setThemeMode(savedTheme as PaletteThemeMode);
    } else if (prefersDark) {
      setThemeMode("dark");
    }
  }, []);

  return (
    <UIThemeProvider theme={myTheme}>
      <body
        data-theme={themeMode}
        className="data-[theme='dark']:bg-[#1c1c1c] transition-colors group"
      >
        <div className="fixed top-0 right-0 p-4 flex justify-end transition-colors border-b-[#d4d4d4] border-b-[1px] group-data-[theme='dark']:border-b-[#2c2c2c] w-full">
          <Button color="orange" onClick={toggleThemeMode}>
            Toggle Theme
            {themeMode === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </Button>
        </div>
        {children}
      </body>
    </UIThemeProvider>
  );
}
