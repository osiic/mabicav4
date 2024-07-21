"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Mode() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("dark");
    if (theme === null) {
      localStorage.setItem("dark", "false");
    }
    setDark(Boolean(theme));
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark", "false");
    }
  }, [dark]);

  return (
    <Button onClick={() => setDark(!dark)} size="icon" variant="active">
      {dark ? <Sun size="20" /> : <Moon size="20" />}
    </Button>
  );
}
