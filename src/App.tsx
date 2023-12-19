import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef();
  useEffect(() => {
    console.log(canvasRef);
  }, []);

  return;
  <div>
    <canvas ref={canvasRef} />;
  </div>;
}

export default App;
