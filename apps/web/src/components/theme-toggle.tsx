"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // prevents hydration mismatch
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      size="icon"
      variant="text"
      className={`h-7 ${className ?? ""}`}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-pressed={!isDark}
    >
      {isDark ? (
        <Moon className="!size-[1.1rem]" aria-hidden="true" />
      ) : (
        <Sun className="!size-[1.1rem]" aria-hidden="true" />
      )}
      <span className="sr-only">
        Switch to {isDark ? "light" : "dark"} mode
      </span>
    </Button>
  );
}
