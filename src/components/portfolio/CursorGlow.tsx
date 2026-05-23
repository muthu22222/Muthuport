import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] hidden h-[500px] w-[500px] rounded-full opacity-40 blur-3xl md:block"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, oklch(0.6 0.3 295 / 0.4), transparent 60%)",
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}