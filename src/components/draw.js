let line = [];
let count = 0;
export function draw(ctx) {
  // Your drawing logic her
  if (count % 10 === 0) {
    line = [];
    for (let index = 0; index < 50; index++) {
      const oneline = {
        startX: Math.random() * 700,
        startY: Math.random() * 700,
        endX: Math.random() * 700,
        endY: Math.random() * 700,
      };
      line.push(oneline);
    }
    for (let index = 0; index < 50; index++) {
      const oneline = {
        startX: Math.random() * 700,
        startY: Math.random() * 700,
        endX: Math.random() * 700,
        endY: Math.random() * 700,
      };
      line.push(oneline);
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 4;
    line.forEach((line) => {
      ctx.strokeStyle = `hsl(
        ${Math.random() * 360 + 1},
        ${Math.random() * 100 + 1}%,
        ${Math.random() * 100 + 1}%
        `;
      ctx.beginPath();
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(line.endX, line.endY);
      ctx.stroke();
      line.startX = line.endX;
      line.startY = line.endY;
      line.endX = Math.random() * 700;
      line.endY = Math.random() * 700;
    });
  }
  // if (count % 50 === 0) {
  //
  // }
  count += 1;
}
