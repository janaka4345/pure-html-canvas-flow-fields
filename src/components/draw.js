let line = [
  {
    startX: Math.random() * 700,
    startY: Math.random() * 700,
    endX: Math.random() * 700,
    endY: Math.random() * 700,
    color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
      Math.random() * 100 + 1
    }%`,
  },
];
let count = 0;
export function draw(ctx) {
  // Your drawing logic here
  if (count % 100 === 0) {
  }
  console.log(line);
  if (line.length > 4) {
    line.shift();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  ctx.lineWidth = 4;
  line.forEach((line) => {
    // ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = line.color;
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(
      line.startX + line.endX * (count % 2) * 0.5,
      line.startY + line.endY * (count % 2) * 0.5
    );
    ctx.stroke();
    // ctx.restore();
  });
  line.push({
    startX: line[line.length - 1].endX,
    startY: line[line.length - 1].endY,
    endX: Math.random() * 700,
    endY: Math.random() * 700,
    color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
      Math.random() * 100 + 1
    }%`,
  });
}

count += 1;
