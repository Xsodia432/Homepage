document.querySelectorAll(".project-screenshot").forEach((ev) => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  ev.style = `background-color:rgb(${r},${g},${b})`;
});
