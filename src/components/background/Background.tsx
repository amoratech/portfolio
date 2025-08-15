"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Background.module.css";

function Background() {
  const containerRef = useRef(null);
  const circleCount = 40;

  // Green Blue
  const colors = [
    "rgb(88, 180, 234)",
    "rgb(131, 229, 161)"
  ];

  useGSAP(
    () => {
      const circles = gsap.utils.toArray(`.${styles.circle}`);

      circles.forEach((circle) => {
        
        gsap.set(circle, {
          backgroundColor: gsap.utils.random(colors),
          x: gsap.utils.random(0, window.innerWidth - 248),
          y: gsap.utils.random(0, window.innerHeight - 248),
        });

        const animate = () => {
          const x = gsap.utils.random(0, window.innerWidth - 40);
          const y = gsap.utils.random(0, window.innerHeight - 40);
          const newColor = gsap.utils.random(colors);

          gsap.to(circle, {
            x,
            y,
            backgroundColor: newColor,
            duration: gsap.utils.random(8, 13),
            ease: "sine.inOut",
            onComplete: animate,
          });
        };

        animate();
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: circleCount }).map((_, i) => (
        <div key={i} className={styles.circle} />
      ))}
    </div>
  );
}

export default Background;