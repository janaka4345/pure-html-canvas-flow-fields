let line = {
  startX: Math.random() * 700,
  startY: Math.random() * 700,
  endX: Math.random() * 700,
  endY: Math.random() * 700,
  color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
    Math.random() * 100 + 1
  }%`,
};
let count = 0;
export function draw(ctx) {
  // console.log(count);
  // Your drawing logic here
  // if (count % 100 === 0) {
  // console.log(line.startX + line.endX * (count % 100) * 0.01);
  if (line.length > 4) {
    line.shift();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  ctx.lineWidth = 4;
  // line.forEach((line) => {
  // ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = line.color;
  if (count % 100) {
    ctx.moveTo(line.startX, line.startY);
  }
  ctx.lineTo(
    line.startX + line.endX * (count % 100) * 0.01,
    line.startY + line.endY * (count % 100) * 0.01
  );
  ctx.stroke();

  // line.push({
  //   startX: line[line.length - 1].endX,
  //   startY: line[line.length - 1].endY,
  //   endX: Math.random() * 700,
  //   endY: Math.random() * 700,
  //   color: `hsl(${Math.random() * 360 + 1},${Math.random() * 100 + 1}%,${
  //     Math.random() * 100 + 1
  //   }%`,
  // });
  count += 1;
}
// }
