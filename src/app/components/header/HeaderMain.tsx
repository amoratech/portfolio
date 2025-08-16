"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "@mantine/core";
import ColorSwitcher from "./colorSwitcher/ColorSwitcher";
import { useState } from "react";

type HeaderItem = { label: string; link: string };
type HeaderMainProps = { headerItems: HeaderItem[] };

export default function HeaderMain({ headerItems }: HeaderMainProps) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="flex w-[100%] items-center justify-between mt-2 px-4">

  <div className="flex flex-1 justify-start" />


  <div className="flex flex-1 justify-center">
    <div className="flex items-center gap-3 bg-[var(--header)] rounded-[32px] shadow-xl py-1 px-1">
      {headerItems.map((item) => {
        const isActive = pathname === item.link;
        const isHovered = hovered === item.link;
        const highlighted = hovered ? isHovered : isActive;

        return (
          <Link
            key={item.link}
            href={item.link}
            onMouseEnter={() => setHovered(item.link)}
            onMouseLeave={() => setHovered(null)}
            className={`inline-flex items-center justify-center px-3 py-2 rounded-[24px] transition
              ${highlighted ? "bg-[#b5b5b54e]" : "bg-transparent"}
            `}
          >
            <Text className="leading-none">{item.label}</Text>
          </Link>
        );
      })}
    </div>
  </div>


  <div className="flex flex-1 justify-end">
    <ColorSwitcher />
  </div>
</header>
  );
}