"use client";
import { useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";

export default function ThemeSync() {
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", colorScheme === "dark");
  }, [colorScheme]);
  return null;
}