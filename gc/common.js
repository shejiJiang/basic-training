let canvas = document.getElementById("demoCanvas");

const render = (points) => {
  let ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(200, 200);
  for (let i = 0; i < points.length; i++) {
    const idx = calcPointIdx(points[i]);
    // 红色
    imageData.data[idx] = 255;
    imageData.data[idx + 3] = 255;
  }
  ctx.putImageData(imageData,0,0);
}

const calcPointIdx = (point) => {
  return ((point.y - 1) * 200 + point.x) * 4;
}
