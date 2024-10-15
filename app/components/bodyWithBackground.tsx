"use client";

import { useEffect } from "react";

interface BodyProps extends React.HTMLProps<HTMLBodyElement> {
  children: React.ReactNode;
}

export default function BodyWithBackground({ children, ...props }: BodyProps) {
  useEffect(() => {
    const body = document.body;

    const handleMouseMove = (event: MouseEvent) => {
      // Get mouse position
      const x = (event.clientX / window.innerWidth) * 10;
      const y = (event.clientY / window.innerHeight) * 10;
      // Change background position
      body.style.backgroundPosition = `${5 + x}% ${5 + y}%`;
    };

    const handleMouseLeave = () => {
      // Add active class on mouse leave
      body.classList.add("active");
      setTimeout(() => {
        body.classList.remove("active");
      }, 200);
    };

    // Attach event listeners
    body.addEventListener("mousemove", handleMouseMove);
    body.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove the event listeners
    return () => {
      body.removeEventListener("mousemove", handleMouseMove);
      body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return <body {...props}>{children}</body>;
}
