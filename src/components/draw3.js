let line = [];
let count = 0;
for (let i = 0; i < 1; i++) {
  // const startX = Math.random() * 700;
  // const startY = Math.random() * 700;
  // const endX = Math.random() * 700;
  // const endY = Math.random() * 700;
  const startX = 10;
  const startY = 10;
  const endX = 400;
  const endY = 400;
  const speedX = 10;
  const speedY = 5;
  const lineLength = 20;
  const color = `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
    Math.random() * 50 + 1
  }%`;
  line.push({ startX, startY, endX, endY, speedX, speedY, color, lineLength });
}
export function draw3(ctx) {
  //   console.log(line);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.lineWidth = 4;
  ctx.strokeStyle = line[0].color;
  ctx.beginPath();
  ctx.moveTo(
    line[0].startX + line[0].endX * (count % 100) * 0.01 + line[0].lineLength,
    line[0].startY + line[0].endY * (count % 100) * 0.01 + line[0].lineLength
  );
  ctx.lineTo(
    line[0].endX * (count % 100) * 0.01,
    line[0].endY * (count % 100) * 0.01
  );
  ctx.stroke();

  count += 1;
}
