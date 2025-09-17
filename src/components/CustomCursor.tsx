"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.25,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed size-8 bg-white rounded-full cursor-none z-[9999]"
      style={{
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;