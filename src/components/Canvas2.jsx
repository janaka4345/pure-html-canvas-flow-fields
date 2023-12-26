import { useEffect, useRef } from "react";
import { draw2 } from "./draw2";
import { draw3 } from "./draw3";

export default function Canvas() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // console.log(ctx);
    function animation() {
      // draw2(ctx);
      draw3(ctx);
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
        width={500}
        height={500}
        style={{ border: "2px solid black" }}
      />
    </div>
  );
}
