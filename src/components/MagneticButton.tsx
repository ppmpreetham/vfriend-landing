import { type ReactNode } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type MagneticButtonProps = {
  className?: string;
  children?: ReactNode;
  strength?: number;
  [key: string]: any;
};

const MagneticButton = ({
  className = "",
  children = "Join the Collective",
  strength = 500,
  ...props
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMobileRef = useRef(false);

  useGSAP(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 768;
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const button = buttonRef.current;
    if (!button || isMobileRef.current) return;

    let bounds;

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      bounds = button.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const distanceX = mouseX - centerX;
      const distanceY = mouseY - centerY;

      gsap.to(button, {
        x: (distanceX * strength) / 1000,
        y: (distanceY * strength) / 1000,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
    };
  }, [strength]);

  return (
    <button
      ref={buttonRef}
      className={`cursor-pointer magnetic-button ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
