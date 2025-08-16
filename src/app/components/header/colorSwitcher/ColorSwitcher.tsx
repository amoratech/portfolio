"use client";

import { ActionIcon, useMantineColorScheme, Button } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ColorSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Button
      variant="filled"
      size="lg"
      color={"var(--header)"}
      onClick={() => setColorScheme(dark ? "light" : "dark")}
      className=" shadow-xl rounded-4xl"
      radius={"xl"}
      p={16}
      
    >
      {dark ? <IconSun size={20} color={"var(--foreground)"}/> : <IconMoon size={18} color={"var(--foreground)"}/>}
    </Button>
  );
}