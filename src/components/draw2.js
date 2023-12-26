let count = 0;

export function draw2(ctx) {
  let line = [
    {
      startX: Math.random() * 700,
      startY: Math.random() * 700,
      endX: Math.random() * 700,
      endY: Math.random() * 700,
      color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
        Math.random() * 50 + 1
      }%`,
    },
  ];
  if (count % 100 === 0) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 1; i < 10; i++) {
      line.push({
        startX: line[i - 1].endX,
        startY: line[i - 1].endY,
        endX: Math.random() * 700,
        endY: Math.random() * 700,
        color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
          Math.random() * 50 + 1
        }%`,
      });
    }
    ctx.lineWidth = 4;
    line.forEach((line) => {
      ctx.beginPath();
      ctx.strokeStyle = line.color;

      ctx.moveTo(line.startX, line.startY);

      ctx.lineTo(line.endX, line.endY);
      ctx.stroke();
    });
  }

  count += 1;
}
