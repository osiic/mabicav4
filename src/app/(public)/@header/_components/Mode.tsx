"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Mode() {
  const [dark, setDark] = useState<boolean>();

  useEffect(() => {
    localStorage.setItem("dark", dark);
    const theme = localStorage.getItem("dark");
    setDark(theme);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", dark);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark", dark);
    }
  }, [dark]);

  return (
    <Button onClick={() => setDark(!dark)} size="icon" variant="active">
      {dark ? <Sun size="20" /> : <Moon size="20" />}
    </Button>
  );
}
