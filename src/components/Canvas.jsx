import { useEffect, useRef } from "react";
import { draw } from "./draw";

export default function Canvas() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    function animation() {
      draw(ctx);
      animationFrameId.current = requestAnimationFrame(animation);
    }
    animation();
    // Cleanup logic (optional)
    return () => {
      // Any cleanup code (e.g., event listeners) can go here
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={700}
        height={900}
        style={{ border: "2px solid black" }}
      />
    </div>
  );
}
