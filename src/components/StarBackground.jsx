import { useMemo } from "react";
import "./StarBackground.css";

export default function StarBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 250 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 0.5}px`,
        delay: `${Math.random() * 6}s`,
        duration: `${Math.random() * 4 + 2}s`,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    []
  );

  return (
    <div className="star-background" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            "--delay": star.delay,
            "--duration": star.duration,
          }}
        />
      ))}
    </div>
  );
}