
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement('canvas');
  canvas.id = "graph";
  canvas.width = 500;
  canvas.height = 300;
  canvas.style.border = "1px solid #0f0";
  document.querySelector(".panel").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const nodes = [
    { id: "Labor", x: 100, y: 150 },
    { id: "Automation", x: 400, y: 150 },
    { id: "Augmented Worker", x: 250, y: 50 }
  ];

  const edges = [
    { from: "Labor", to: "Automation" },
    { from: "Labor", to: "Augmented Worker" },
    { from: "Automation", to: "Augmented Worker" }
  ];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(node.id, node.x, node.y + 4);
      ctx.fillStyle = "#0f0";
    });

    ctx.strokeStyle = "#0ff";
    edges.forEach(edge => {
      const from = nodes.find(n => n.id === edge.from);
      const to = nodes.find(n => n.id === edge.to);
      if (from && to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
    });
  }

  draw();
});
