"use client";
import React, { useRef, useEffect } from "react";
import styles from "./HeaderMain.module.css";
import ColorToggle from "../colorToggle/ColorToggle";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

type HeaderItem = {
  label: string;
  link: string;
};

type HeaderMainProps = {
  headerItems: HeaderItem[];
};

function HeaderMain({ headerItems }: HeaderMainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Set highlight to active item on load
useGSAP(() => {
  const activeButton = containerRef.current?.querySelector(
    `[data-active="true"]`
  ) as HTMLElement;

  if (activeButton && highlightRef.current) {
    const rect = activeButton.getBoundingClientRect();
    const containerRect = containerRef.current!.getBoundingClientRect();
    gsap.set(highlightRef.current, {
      x: rect.left - containerRect.left,
      width: rect.width,
    });
  }
}, { dependencies: [pathname] });

  const moveHighlight = (target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const containerRect = containerRef.current!.getBoundingClientRect();
    gsap.to(highlightRef.current, {
      x: rect.left - containerRect.left,
      width: rect.width,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const headerButtons = headerItems.map((item, i) => {
    const isActive = pathname === item.link;

    return (
      <Link
        key={i}
        href={item.link}
        className={styles.button}
        data-active={isActive || undefined}
        onMouseEnter={(e) => moveHighlight(e.currentTarget)}
        onMouseLeave={() => {
          const activeButton = containerRef.current?.querySelector(
            `[data-active="true"]`
          ) as HTMLElement;
          if (activeButton) moveHighlight(activeButton);
        }}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header} ref={containerRef}>
        <div ref={highlightRef} className={styles.hoverHighlight}></div>
        {headerButtons}
      </div>
      <div className={styles.colorToggleWrapper}>
        <ColorToggle />
      </div>
    </div>
  );
}

export default HeaderMain;
